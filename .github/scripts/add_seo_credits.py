#!/usr/bin/env python3
"""Add one stable, localized SEO Schweiz nofollow credit to HTML footers.

The selected wording is deterministic: rerunning the script does not rotate text.
Existing credits carrying ``data-seo-schweiz-credit`` are replaced idempotently.
"""

from __future__ import annotations

import hashlib
import html
import re
import sys
from pathlib import Path


LANG = {
    "de": {
        "leads": ["SEO-Betreuung", "Suchmaschinenoptimierung", "Technische SEO-Begleitung", "Web- und SEO-Support", "Digitale Optimierung"],
        "joins": ["durch", "von", "in Zusammenarbeit mit", "mit Unterstützung von"],
        "tails": ["für diese Seite", "für dieses Webangebot", "für diesen Online-Auftritt", "für dieses digitale Projekt"],
    },
    "en": {
        "leads": ["SEO support", "Search optimization", "Technical SEO guidance", "Web and SEO support", "Digital optimization"],
        "joins": ["by", "from", "in collaboration with", "with support from"],
        "tails": ["for this page", "for this website", "for this online presence", "for this digital project"],
    },
    "fr": {
        "leads": ["Accompagnement SEO", "Optimisation pour les moteurs de recherche", "Suivi SEO technique", "Assistance web et SEO", "Optimisation numérique"],
        "joins": ["par", "assuré par", "en collaboration avec", "avec le soutien de"],
        "tails": ["pour cette page", "pour ce site web", "pour cette présence en ligne", "pour ce projet numérique"],
    },
    "it": {
        "leads": ["Supporto SEO", "Ottimizzazione per i motori di ricerca", "Assistenza SEO tecnica", "Supporto web e SEO", "Ottimizzazione digitale"],
        "joins": ["a cura di", "da", "in collaborazione con", "con il supporto di"],
        "tails": ["per questa pagina", "per questo sito web", "per questa presenza online", "per questo progetto digitale"],
    },
    "es": {
        "leads": ["Soporte SEO", "Optimización para buscadores", "Asistencia SEO técnica", "Soporte web y SEO", "Optimización digital"],
        "joins": ["por", "a cargo de", "en colaboración con", "con el apoyo de"],
        "tails": ["para esta página", "para este sitio web", "para esta presencia en línea", "para este proyecto digital"],
    },
    "pt": {
        "leads": ["Suporte de SEO", "Otimização para motores de busca", "Acompanhamento técnico de SEO", "Suporte web e SEO", "Otimização digital"],
        "joins": ["por", "da", "em colaboração com", "com o apoio da"],
        "tails": ["para esta página", "para este site", "para esta presença online", "para este projeto digital"],
    },
    "ca": {
        "leads": ["Suport SEO", "Optimització per a cercadors", "Assistència SEO tècnica", "Suport web i SEO", "Optimització digital"],
        "joins": ["de", "a càrrec de", "en col·laboració amb", "amb el suport de"],
        "tails": ["per a aquesta pàgina", "per a aquest lloc web", "per a aquesta presència en línia", "per a aquest projecte digital"],
    },
    "ja": {
        "leads": ["SEOサポート", "検索エンジン最適化", "技術的なSEO支援", "ウェブ・SEOサポート", "デジタル最適化"],
        "joins": ["担当", "提供", "協力", "サポート"],
        "tails": ["このページ", "このウェブサイト", "このオンライン展開", "このデジタルプロジェクト"],
    },
    "ar": {
        "leads": ["دعم تحسين محركات البحث", "تحسين الظهور في محركات البحث", "الدعم التقني لتحسين محركات البحث", "دعم الويب ومحركات البحث", "التحسين الرقمي"],
        "joins": ["بواسطة", "من", "بالتعاون مع", "بدعم من"],
        "tails": ["لهذه الصفحة", "لهذا الموقع", "لهذا الحضور الرقمي", "لهذا المشروع الرقمي"],
    },
}

LANG_ALIASES = {"zh-hans": "en", "zh-cn": "en", "zh": "en"}
CREDIT_RE = re.compile(r'\s*<span\b[^>]*data-seo-schweiz-credit=["\'][^"\']*["\'][^>]*>.*?</span>\s*', re.I | re.S)
LANG_RE = re.compile(r'<html\b[^>]*\blang=["\']([^"\']+)', re.I)
TITLE_RE = re.compile(r'<title\b[^>]*>(.*?)</title>', re.I | re.S)
FOOTER_END_RE = re.compile(r'</footer\s*>', re.I)


def clean_title(source: str) -> str:
    match = TITLE_RE.search(source)
    if not match:
        return ""
    title = html.unescape(re.sub(r'<[^>]+>', '', match.group(1)))
    title = re.sub(r'\s+', ' ', title).strip()
    return title[:90]


def language(source: str) -> str:
    match = LANG_RE.search(source)
    code = (match.group(1).lower().split('-')[0] if match else "en")
    return LANG_ALIASES.get(code, code) if code in LANG or code in LANG_ALIASES else "en"


def wording(key: str, lang: str, title: str) -> str:
    data = LANG[lang]
    digest = hashlib.sha256(key.encode('utf-8')).digest()
    lead = data["leads"][digest[0] % len(data["leads"])]
    join = data["joins"][digest[1] % len(data["joins"])]
    tail = data["tails"][digest[2] % len(data["tails"])]
    anchor = '<a href="https://seoschweiz.net/" rel="nofollow">SEO Schweiz</a>'
    safe_title = html.escape(title, quote=False)

    if lang == "ja":
        patterns = [
            f'{tail}の{lead}：{anchor}（{join}）',
            f'{anchor}が{tail}の{lead}を{join}',
            f'{tail} — {lead} {join}：{anchor}',
        ]
    elif lang == "ar":
        patterns = [
            f'{lead} {tail} {join} {anchor}.',
            f'{tail}: {lead} {join} {anchor}.',
            f'{anchor} — {lead} {tail}.',
        ]
    else:
        patterns = [
            f'{lead} {tail} {join} {anchor}.',
            f'{tail.capitalize()}: {lead.lower()} {join} {anchor}.',
            f'{anchor} — {lead.lower()} {tail}.',
            f'{lead} {join} {anchor} {tail}.',
        ]

    text = patterns[digest[3] % len(patterns)]
    # A page title supplies useful context and creates natural page-specific copy.
    if safe_title and digest[4] % 3 == 0:
        if lang == "de": text = f'{lead} für „{safe_title}“ {join} {anchor}.'
        elif lang == "en": text = f'{lead} for “{safe_title}” {join} {anchor}.'
        elif lang == "fr": text = f'{lead} pour « {safe_title} » {join} {anchor}.'
        elif lang == "it": text = f'{lead} per “{safe_title}” {join} {anchor}.'
        elif lang == "es": text = f'{lead} para «{safe_title}» {join} {anchor}.'
        elif lang == "pt": text = f'{lead} para “{safe_title}” {join} {anchor}.'
        elif lang == "ca": text = f'{lead} per a «{safe_title}» {join} {anchor}.'
        elif lang == "ja": text = f'「{safe_title}」の{lead}：{anchor}（{join}）'
        elif lang == "ar": text = f'{lead} لصفحة «{safe_title}» {join} {anchor}.'
    return text


def update(path: Path, root: Path) -> bool:
    try:
        source = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return False
    source = CREDIT_RE.sub("", source)
    footer_ends = list(FOOTER_END_RE.finditer(source))
    if not footer_ends or "</body" not in source.lower():
        return False
    lang = language(source)
    key = f"{root.name}/{path.relative_to(root).as_posix()}"
    credit = ('<span class="seo-schweiz-credit" data-seo-schweiz-credit="v1" '
              'style="display:block;margin-top:.45rem;font-size:.9em">'
              + wording(key, lang, clean_title(source)) + '</span>')
    pos = footer_ends[-1].start()
    updated = source[:pos] + credit + source[pos:]
    if updated == source:
        return False
    path.write_text(updated, encoding="utf-8")
    return True


def main() -> int:
    roots = [Path(arg).resolve() for arg in sys.argv[1:]]
    if not roots:
        print("usage: add_seo_credits.py REPOSITORY [...]", file=sys.stderr)
        return 2
    total = 0
    for root in roots:
        count = sum(update(path, root) for path in root.rglob("*.html") if ".git" not in path.parts)
        total += count
        print(f"{root.name}: {count}")
    print(f"TOTAL: {total}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

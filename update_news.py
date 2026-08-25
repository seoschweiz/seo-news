import os
import re
import json
import hashlib
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET

from html import escape
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime, format_datetime


MAX_NEWS = 30
MAX_AGE_DAYS = 7
MAX_FEED_ITEMS = 20
MAX_WIDGET_ITEMS = 5


CONFIGS = {

    "de": {
        "output": "de/index.html",
        "feed_output": "de/feed.xml",
        "widget_output": "de/widget.js",
        "hl": "de",
        "gl": "DE",
        "ceid": "DE:de",
        "searches": [
            '"SEO Google"',
            '"Suchmaschinenoptimierung Google"',
            '"Google Search SEO"',
            '"Google Algorithm SEO"',
            '"SEO Marketing"'
        ],
        "title": "Aktuelle SEO News",
        "subtitle": "Google, Suchmaschinenoptimierung, Algorithmus Updates, AI Search und digitales Marketing.",
        "meta_title": "Aktuelle SEO News | Google, Bing & Suchmaschinenoptimierung",
        "meta_description": "Aktuelle SEO News über Google, Bing, Suchmaschinenoptimierung, Google Updates, AI Search, Keywords, Backlinks und digitales Marketing.",
        "read_more": "News ansehen →",
        "original": "Originalartikel lesen →",
        "updated": "Letztes automatisches Update:",
        "empty": "Momentan keine aktuellen SEO News gefunden",
        "empty_text": "Beim nächsten automatischen Update wird erneut gesucht.",
        "feed_title": "SEO News Deutsch",
        "feed_description": "Aktuelle deutschsprachige SEO News über Google, Suchmaschinenoptimierung, Algorithmen und AI Search.",
        "article_intro": "Diese Meldung wurde über unseren automatischen SEO-News-Monitor gefunden.",
        "source_label": "Quelle",
        "back": "← Zurück zu den aktuellen SEO News"
    },

    "en": {
        "output": "en/index.html",
        "feed_output": "en/feed.xml",
        "hl": "en",
        "gl": "US",
        "ceid": "US:en",
        "searches": [
            '"SEO Google"',
            '"Search Engine Optimization"',
            '"Google Search SEO"',
            '"Google algorithm SEO"',
            '"AI Search SEO"'
        ],
        "title": "Latest SEO News",
        "subtitle": "Google Search, SEO, algorithm updates, AI Search and digital marketing.",
        "meta_title": "Latest SEO News | Google Search, SEO & AI Search",
        "meta_description": "Latest SEO news about Google Search, algorithm updates, AI Search, search engine optimization, keywords, backlinks and digital marketing.",
        "read_more": "View news →",
        "original": "Read original article →",
        "updated": "Last automatic update:",
        "empty": "No recent SEO news found",
        "empty_text": "The system will search again during the next automatic update.",
        "feed_title": "SEO News English",
        "feed_description": "Latest English-language SEO news about Google Search, SEO, algorithms and AI Search.",
        "article_intro": "This story was discovered by our automated SEO news monitor.",
        "source_label": "Source",
        "back": "← Back to latest SEO news"
    },

    "fr": {
        "output": "fr/index.html",
        "feed_output": "fr/feed.xml",
        "hl": "fr",
        "gl": "FR",
        "ceid": "FR:fr",
        "searches": [
            '"SEO Google"',
            '"référencement Google"',
            '"référencement naturel"',
            '"algorithme Google SEO"',
            '"marketing SEO"'
        ],
        "title": "Actualités SEO",
        "subtitle": "Google, référencement naturel, mises à jour des algorithmes, recherche IA et marketing digital.",
        "meta_title": "Actualités SEO | Google, Référencement & Recherche IA",
        "meta_description": "Actualités SEO sur Google, le référencement naturel, les mises à jour des algorithmes, la recherche IA, les mots-clés et le marketing digital.",
        "read_more": "Voir l'actualité →",
        "original": "Lire l'article original →",
        "updated": "Dernière mise à jour automatique :",
        "empty": "Aucune actualité SEO récente trouvée",
        "empty_text": "Une nouvelle recherche sera effectuée lors de la prochaine mise à jour automatique.",
        "feed_title": "Actualités SEO Français",
        "feed_description": "Actualités SEO en français sur Google, le référencement, les algorithmes et la recherche IA.",
        "article_intro": "Cette actualité a été détectée par notre système automatique de veille SEO.",
        "source_label": "Source",
        "back": "← Retour aux actualités SEO"
    },

    "it": {
        "output": "it/index.html",
        "feed_output": "it/feed.xml",
        "hl": "it",
        "gl": "IT",
        "ceid": "IT:it",
        "searches": [
            '"SEO Google"',
            '"ottimizzazione SEO"',
            '"posizionamento Google"',
            '"algoritmo Google SEO"',
            '"marketing SEO"'
        ],
        "title": "Notizie SEO",
        "subtitle": "Google, ottimizzazione per i motori di ricerca, aggiornamenti degli algoritmi, AI Search e marketing digitale.",
        "meta_title": "Notizie SEO | Google, Motori di Ricerca & AI Search",
        "meta_description": "Notizie SEO su Google, ottimizzazione per i motori di ricerca, aggiornamenti degli algoritmi, AI Search, keyword e marketing digitale.",
        "read_more": "Vedi notizia →",
        "original": "Leggi l'articolo originale →",
        "updated": "Ultimo aggiornamento automatico:",
        "empty": "Nessuna notizia SEO recente trovata",
        "empty_text": "Il sistema effettuerà una nuova ricerca al prossimo aggiornamento automatico.",
        "feed_title": "Notizie SEO Italiano",
        "feed_description": "Notizie SEO in italiano su Google, ottimizzazione, algoritmi e AI Search.",
        "article_intro": "Questa notizia è stata individuata dal nostro sistema automatico di monitoraggio SEO.",
        "source_label": "Fonte",
        "back": "← Torna alle notizie SEO"
    },

    "es": {
        "output": "es/index.html",
        "feed_output": "es/feed.xml",
        "hl": "es",
        "gl": "ES",
        "ceid": "ES:es",
        "searches": [
            '"SEO Google"',
            '"posicionamiento SEO"',
            '"optimización SEO"',
            '"algoritmo Google SEO"',
            '"marketing SEO"'
        ],
        "title": "Noticias SEO",
        "subtitle": "Google, posicionamiento web, actualizaciones de algoritmos, búsqueda con IA y marketing digital.",
        "meta_title": "Noticias SEO | Google, Posicionamiento & Búsqueda IA",
        "meta_description": "Últimas noticias SEO sobre Google, posicionamiento web, actualizaciones de algoritmos, búsqueda con IA, palabras clave, backlinks y marketing digital.",
        "read_more": "Ver noticia →",
        "original": "Leer artículo original →",
        "updated": "Última actualización automática:",
        "empty": "No se encontraron noticias SEO recientes",
        "empty_text": "El sistema volverá a buscar durante la próxima actualización automática.",
        "feed_title": "Noticias SEO Español",
        "feed_description": "Noticias SEO en español sobre Google, posicionamiento, algoritmos y búsqueda con IA.",
        "article_intro": "Esta noticia fue detectada por nuestro sistema automático de seguimiento SEO.",
        "source_label": "Fuente",
        "back": "← Volver a las noticias SEO"
    },

    "pt": {
        "output": "pt/index.html",
        "feed_output": "pt/feed.xml",
        "hl": "pt-PT",
        "gl": "PT",
        "ceid": "PT:pt-150",
        "searches": [
            '"SEO Google"',
            '"otimização SEO"',
            '"posicionamento Google"',
            '"algoritmo Google SEO"',
            '"marketing SEO"'
        ],
        "title": "Notícias SEO",
        "subtitle": "Google, otimização para motores de pesquisa, atualizações de algoritmos, pesquisa com IA e marketing digital.",
        "meta_title": "Notícias SEO | Google, Otimização & Pesquisa IA",
        "meta_description": "Últimas notícias SEO sobre Google, otimização para motores de pesquisa, atualizações de algoritmos, pesquisa com IA, palavras-chave, backlinks e marketing digital.",
        "read_more": "Ver notícia →",
        "original": "Ler artigo original →",
        "updated": "Última atualização automática:",
        "empty": "Nenhuma notícia SEO recente encontrada",
        "empty_text": "O sistema irá pesquisar novamente durante a próxima atualização automática.",
        "feed_title": "Notícias SEO Português",
        "feed_description": "Notícias SEO em português sobre Google, otimização, algoritmos e pesquisa com IA.",
        "article_intro": "Esta notícia foi encontrada pelo nosso sistema automático de monitorização SEO.",
        "source_label": "Fonte",
        "back": "← Voltar às notícias SEO"
    }
}


BLOCKED_TERMS = [
    "k-pop",
    "actor",
    "actress",
    "singer",
    "football",
    "soccer",
    "baseball",
    "basketball",
    "celebrity",
    "drama",
    "movie",
    "film",
    "fashion model"
]


def footer_html():

    return """
<footer>

<div class="footer-main">

<a href="https://www.seoschweiz.net/"
target="_blank"
rel="noopener">
SEO Schweiz
</a>

</div>

<div class="footer-links">

<a href="https://www.facebook.com/seo.schweiz"
target="_blank"
rel="noopener">
SEO Agentur Schweiz
</a>

<a href="https://www.facebook.com/suisse.seo/"
target="_blank"
rel="noopener">
Agence SEO Suisse
</a>

<a href="https://www.facebook.com/seo.svizzera/"
target="_blank"
rel="noopener">
Agenzia SEO Svizzera
</a>

<a href="https://www.facebook.com/seo.switzerland/"
target="_blank"
rel="noopener">
SEO Agency Switzerland
</a>

</div>

</footer>
"""


def footer_css():

    return """
footer {
  background: #111;
  color: #aaa;
  text-align: center;
  padding: 32px 20px;
  margin-top: 50px;
}

footer a {
  color: white;
  text-decoration: none;
}

.footer-main {
  margin-bottom: 14px;
}

.footer-main a {
  font-size: 18px;
  font-weight: bold;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px 22px;
}

.footer-links a {
  font-size: 14px;
}
"""


def get_feed_url(query, config):

    encoded_query = urllib.parse.quote(
        query + " when:7d"
    )

    return (
        "https://news.google.com/rss/search?"
        f"q={encoded_query}"
        f"&hl={config['hl']}"
        f"&gl={config['gl']}"
        f"&ceid={config['ceid']}"
    )


def load_feed(url):

    request = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0"}
    )

    with urllib.request.urlopen(
        request,
        timeout=20
    ) as response:

        return response.read()


def parse_feed(xml_data):

    root = ET.fromstring(xml_data)
    articles = []

    cutoff = (
        datetime.now(timezone.utc)
        - timedelta(days=MAX_AGE_DAYS)
    )

    for item in root.findall(".//item"):

        title = item.findtext("title", "").strip()
        link = item.findtext("link", "").strip()
        pub_date = item.findtext("pubDate", "").strip()
        source = item.findtext("source", "").strip()

        if not title or not link or not pub_date:
            continue

        title_lower = title.lower()

        if any(term in title_lower for term in BLOCKED_TERMS):
            continue

        try:

            date = parsedate_to_datetime(pub_date)

            if date.tzinfo is None:
                date = date.replace(
                    tzinfo=timezone.utc
                )

            if date < cutoff:
                continue

        except Exception:
            continue

        articles.append({
            "title": title,
            "link": link,
            "date": date,
            "source": source
        })

    return articles


def collect_news(config):

    all_articles = []

    for query in config["searches"]:

        print(f"Searching: {query}")

        try:

            url = get_feed_url(
                query,
                config
            )

            xml_data = load_feed(url)

            articles = parse_feed(
                xml_data
            )

            all_articles.extend(
                articles
            )

        except Exception as error:

            print(
                f"Error for {query}: {error}"
            )

    return all_articles


def remove_duplicates(articles):

    unique = []
    seen = set()

    for article in articles:

        key = article["title"].lower().strip()

        if key in seen:
            continue

        seen.add(key)

        unique.append(article)

    return unique


def make_slug(article):

    title = article["title"].lower()

    title = re.sub(
        r"[^a-z0-9]+",
        "-",
        title
    )

    title = title.strip("-")

    if not title:
        title = "seo-news"

    title = title[:70]

    short_hash = hashlib.sha1(
        article["link"].encode("utf-8")
    ).hexdigest()[:8]

    return f"{title}-{short_hash}"


def local_article_url(language, article):

    return (
        f"https://news.seoschweiz.net/"
        f"{language}/news/"
        f"{make_slug(article)}/"
    )


def local_article_path(language, article):

    return os.path.join(
        language,
        "news",
        make_slug(article),
        "index.html"
    )


def language_menu():

    return """
<a href="/">HOME</a> |
<a href="/de/">DE</a> |
<a href="/en/">EN</a> |
<a href="/fr/">FR</a> |
<a href="/it/">IT</a> |
<a href="/es/">ES</a> |
<a href="/pt/">PT</a>
"""


def hreflang_tags():

    tags = ""

    for language in CONFIGS.keys():

        tags += (
            f'<link rel="alternate" '
            f'hreflang="{language}" '
            f'href="https://news.seoschweiz.net/{language}/">\n'
        )

    tags += (
        '<link rel="alternate" '
        'hreflang="x-default" '
        'href="https://news.seoschweiz.net/">\n'
    )

    return tags


def internal_topic_link(language):

    if language == "de":

        return """
<section class="topic-link">

<h2>Google SEO News</h2>

<p>
Du möchtest gezielt Nachrichten über Google Search,
Google Algorithmus Updates und Suchmaschinenoptimierung verfolgen?
</p>

<a href="/de/google-seo-news/">
Google SEO News & aktuelle Google Updates ansehen →
</a>

</section>
"""

    return ""


def rss_button(language):

    return f"""
<a class="rss-button"
href="/{language}/feed.xml">
RSS Feed
</a>
"""


def generate_article_page(language, config, article):

    local_url = local_article_url(
        language,
        article
    )

    output_path = local_article_path(
        language,
        article
    )

    os.makedirs(
        os.path.dirname(output_path),
        exist_ok=True
    )

    source = (
        article["source"]
        or "Google News"
    )

    date_text = article["date"].strftime(
        "%d.%m.%Y %H:%M"
    )

    html = f"""<!DOCTYPE html>
<html lang="{language}">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>
{escape(article['title'])} | SEO News
</title>

<meta name="description"
content="{escape(article['title'])} – {escape(source)}">

<meta name="robots"
content="index, follow">

<link rel="canonical"
href="{local_url}">

<style>

* {{
  box-sizing: border-box;
}}

body {{
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  color: #222;
  line-height: 1.7;
}}

header {{
  background: #111;
  color: white;
  padding: 55px 20px;
  text-align: center;
}}

header a {{
  color: white;
  text-decoration: none;
  font-weight: bold;
}}

.container {{
  max-width: 850px;
  margin: auto;
  padding: 50px 20px;
}}

.article {{
  background: white;
  padding: 35px;
  border-radius: 10px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.08);
}}

.article h1 {{
  font-size: 32px;
  line-height: 1.3;
}}

.meta {{
  color: #777;
  font-size: 14px;
}}

.original {{
  display: inline-block;
  margin-top: 25px;
  padding: 13px 20px;
  background: #c00000;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 6px;
}}

.back {{
  display: block;
  margin-top: 30px;
  color: #c00000;
  text-decoration: none;
  font-weight: bold;
}}

{footer_css()}

</style>

</head>

<body>

<header>

<a href="/{language}/">
SEO NEWS
</a>

</header>

<main class="container">

<article class="article">

<h1>
{escape(article['title'])}
</h1>

<p class="meta">
{escape(config['source_label'])}:
{escape(source)}
·
{escape(date_text)}
</p>

<p>
{escape(config['article_intro'])}
</p>

<p>
SEO News zeigt den Titel, die Quelle und das
Veröffentlichungsdatum der Meldung.
Der vollständige Beitrag bleibt bei der Originalquelle.
</p>

<a class="original"
href="{escape(article['link'])}"
target="_blank"
rel="noopener noreferrer">
{config['original']}
</a>

<a class="back"
href="/{language}/">
{config['back']}
</a>

</article>

</main>

{footer_html()}

</body>

</html>
"""

    with open(
        output_path,
        "w",
        encoding="utf-8"
    ) as file:

        file.write(html)


def generate_rss(language, config, articles):

    os.makedirs(
        language,
        exist_ok=True
    )

    feed_url = (
        f"https://news.seoschweiz.net/"
        f"{language}/feed.xml"
    )

    page_url = (
        f"https://news.seoschweiz.net/"
        f"{language}/"
    )

    items_xml = ""

    for article in articles[:MAX_FEED_ITEMS]:

        pub_date = format_datetime(
            article["date"]
        )

        source_text = (
            article["source"]
            or "Google News"
        )

        local_url = local_article_url(
            language,
            article
        )

        items_xml += f"""
  <item>
    <title>{escape(article['title'])}</title>
    <link>{escape(local_url)}</link>
    <guid isPermaLink="true">{escape(local_url)}</guid>
    <pubDate>{pub_date}</pubDate>
    <description>{escape(source_text)}</description>
  </item>
"""

    rss = f"""<?xml version="1.0" encoding="UTF-8"?>

<rss version="2.0">

<channel>

<title>
{escape(config['feed_title'])}
</title>

<link>
{page_url}
</link>

<description>
{escape(config['feed_description'])}
</description>

<language>
{language}
</language>

<atom:link
xmlns:atom="http://www.w3.org/2005/Atom"
href="{feed_url}"
rel="self"
type="application/rss+xml" />

{items_xml}

</channel>

</rss>
"""

    with open(
        config["feed_output"],
        "w",
        encoding="utf-8"
    ) as file:

        file.write(rss)


def generate_widget(language, config, articles):

    if language != "de":
        return

    widget_items = []

    for article in articles[:MAX_WIDGET_ITEMS]:

        widget_items.append({
            "title": article["title"],
            "url": local_article_url(
                language,
                article
            ),
            "source": (
                article["source"]
                or "Google News"
            )
        })

    data_json = json.dumps(
        widget_items,
        ensure_ascii=False
    )

    widget_js = f"""
(function() {{

var items = {data_json};

var html = '';

html += '<div style="font-family:Arial,sans-serif;">';

html += '<div style="font-weight:bold;font-size:18px;margin-bottom:12px;">SEO NEWS Schweiz</div>';

items.forEach(function(item) {{

html += '<div style="margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid #ddd;">';

html += '<a href="' + item.url + '" target="_blank" style="font-weight:bold;text-decoration:none;color:#222;">';

html += item.title;

html += '</a>';

html += '<div style="font-size:12px;color:#777;margin-top:4px;">';

html += item.source;

html += '</div>';

html += '</div>';

}});

html += '<div style="margin-top:10px;">';

html += '<a href="https://news.seoschweiz.net/de/" target="_blank" style="font-weight:bold;text-decoration:none;color:#c00000;">';

html += 'Alle SEO News ansehen →';

html += '</a>';

html += '</div>';

html += '</div>';

document.write(html);

}})();
"""

    with open(
        config["widget_output"],
        "w",
        encoding="utf-8"
    ) as file:

        file.write(widget_js)


def generate_page(language, config):

    articles = collect_news(
        config
    )

    articles.sort(
        key=lambda article: article["date"],
        reverse=True
    )

    articles = remove_duplicates(
        articles
    )[:MAX_NEWS]

    for article in articles:

        generate_article_page(
            language,
            config,
            article
        )

    generate_rss(
        language,
        config,
        articles
    )

    generate_widget(
        language,
        config,
        articles
    )

    news_html = ""

    for article in articles:

        source = (
            article["source"]
            or "Google News"
        )

        date_text = article["date"].strftime(
            "%d.%m.%Y %H:%M"
        )

        local_url = local_article_url(
            language,
            article
        )

        news_html += f"""
<article class="news-item">

<h2>

<a href="{escape(local_url)}">
{escape(article['title'])}
</a>

</h2>

<p class="source">
{escape(source)}
·
{escape(date_text)}
</p>

<a class="read-more"
href="{escape(local_url)}">
{config['read_more']}
</a>

</article>
"""

    if not articles:

        news_html = f"""
<article class="news-item">

<h2>
{config['empty']}
</h2>

<p>
{config['empty_text']}
</p>

</article>
"""

    updated = datetime.now(
        timezone.utc
    ).strftime(
        "%d.%m.%Y %H:%M UTC"
    )

    canonical = (
        f"https://news.seoschweiz.net/"
        f"{language}/"
    )

    html = f"""<!DOCTYPE html>

<html lang="{language}">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>
{config['meta_title']}
</title>

<meta name="description"
content="{config['meta_description']}">

<meta name="robots"
content="index, follow">

<link rel="canonical"
href="{canonical}">

<link rel="alternate"
type="application/rss+xml"
title="{escape(config['feed_title'])}"
href="https://news.seoschweiz.net/{language}/feed.xml">

{hreflang_tags()}

<style>

* {{
  box-sizing: border-box;
}}

body {{
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  color: #222;
  line-height: 1.6;
}}

header {{
  background: #111;
  color: white;
  padding: 60px 20px;
  text-align: center;
  position: relative;
}}

header h1 {{
  font-size: 44px;
  margin: 0 0 10px;
}}

header p {{
  font-size: 19px;
}}

.languages {{
  margin-top: 20px;
  line-height: 2;
}}

.languages a {{
  color: white;
  font-weight: bold;
  text-decoration: none;
  margin: 0 7px;
}}

.rss-button {{
  position: absolute;
  top: 18px;
  right: 20px;
  background: white;
  color: #111;
  text-decoration: none;
  font-weight: bold;
  padding: 9px 14px;
  border-radius: 6px;
}}

.container {{
  max-width: 1000px;
  margin: auto;
  padding: 50px 20px;
}}

.topic-link {{
  background: white;
  padding: 28px;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.07);
}}

.topic-link h2 {{
  margin-top: 0;
}}

.topic-link a {{
  color: #c00000;
  font-weight: bold;
  text-decoration: none;
}}

.news-item {{
  background: white;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.08);
}}

.news-item h2 {{
  margin-top: 0;
  font-size: 22px;
}}

.news-item h2 a {{
  color: #222;
  text-decoration: none;
}}

.news-item h2 a:hover {{
  color: #c00000;
}}

.source {{
  font-size: 14px;
  color: #777;
}}

.read-more {{
  color: #c00000;
  text-decoration: none;
  font-weight: bold;
}}

.updated {{
  text-align: center;
  color: #777;
  margin: 35px 0;
  font-size: 14px;
}}

{footer_css()}

</style>

</head>


<body>

<header>

{rss_button(language)}

<h1>
{config['title']}
</h1>

<p>
{config['subtitle']}
</p>

<div class="languages">

{language_menu()}

</div>

</header>


<main class="container">

{internal_topic_link(language)}

{news_html}

<div class="updated">

{config['updated']}
{updated}

</div>

</main>

{footer_html()}

</body>

</html>
"""

    os.makedirs(
        os.path.dirname(
            config["output"]
        ),
        exist_ok=True
    )

    with open(
        config["output"],
        "w",
        encoding="utf-8"
    ) as file:

        file.write(html)


def generate_sitemap():

    urls = [
        "https://news.seoschweiz.net/",
        "https://news.seoschweiz.net/de/google-seo-news/"
    ]

    for language in CONFIGS.keys():

        urls.append(
            f"https://news.seoschweiz.net/{language}/"
        )

    sitemap = """<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
"""

    for url in urls:

        sitemap += f"""
  <url>
    <loc>{url}</loc>
  </url>
"""

    sitemap += """
</urlset>
"""

    with open(
        "sitemap.xml",
        "w",
        encoding="utf-8"
    ) as file:

        file.write(sitemap)


def main():

    for language, config in CONFIGS.items():

        print(
            f"\n--- Updating {language} ---"
        )

        generate_page(
            language,
            config
        )

    generate_sitemap()


if __name__ == "__main__":

    main()

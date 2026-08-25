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

SITE_URL = "https://news.seoschweiz.net"
MAIN_SITE = "https://www.seoschweiz.net/"
ORGANIZATION_NAME = "SEO Schweiz"

FACEBOOK_URLS = [
    "https://www.facebook.com/seo.schweiz",
    "https://www.facebook.com/suisse.seo/",
    "https://www.facebook.com/seo.svizzera/",
    "https://www.facebook.com/seo.switzerland/"
]


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

        "source_label": "Quelle",
        "original_title_label": "Originaltitel",
        "published_label": "Veröffentlicht",
        "modified_label": "SEO News aktualisiert",
        "back": "← Zurück zu den aktuellen SEO News",

        "content_note": (
            "SEO Schweiz stellt hier den aktuellen Themenhinweis, die Quelle "
            "und zusätzlichen Kontext zur Suchmaschinenoptimierung bereit. "
            "Der vollständige redaktionelle Beitrag bleibt bei der jeweiligen Originalquelle."
        ),

        "title_prefixes": [
            "Aktuelle SEO News",
            "SEO Update",
            "Google SEO News",
            "SEO Schweiz News",
            "Google Search Update",
            "Suchmaschinen-News"
        ],

        "h1_prefixes": [
            "Aktuell im SEO",
            "Neues aus der Google-Suche",
            "SEO Update im Fokus",
            "Google Search News",
            "SEO Schweiz Update",
            "Aktuelle Entwicklung im SEO"
        ],

        "context_templates": [
            "Diese Meldung ist Teil der aktuellen SEO News und Updates von SEO Schweiz. Wir beobachten laufend Entwicklungen rund um Google Search, Rankings, Suchmaschinenoptimierung und AI Search.",
            "SEO Schweiz verfolgt aktuelle Veränderungen bei Google Search und der Suchmaschinenoptimierung. Diese Meldung gehört zu unserem laufenden Überblick über relevante SEO Updates.",
            "Im Rahmen unserer SEO Schweiz News beobachten wir wichtige Entwicklungen rund um Google, Ranking-Veränderungen, Suchalgorithmen und neue Suchtechnologien.",
            "Diese SEO Meldung wurde im Rahmen unseres automatischen News-Monitorings erfasst. SEO Schweiz bündelt aktuelle Entwicklungen aus Google Search, SEO und digitaler Suche."
        ],

        "meta_templates": [
            "Aktuelle SEO News zu {topic}. Neue Entwicklungen rund um Google Search, Rankings und Suchmaschinenoptimierung bei SEO Schweiz.",
            "SEO Update zu {topic}. Aktuelle Informationen zu Google Search, Suchmaschinenoptimierung und digitalen Suchtrends von SEO Schweiz.",
            "Neuigkeiten zu {topic}: SEO Schweiz beobachtet aktuelle Entwicklungen bei Google, Rankings, Algorithmen und Search Marketing.",
            "Aktuelle Meldung zu {topic}. SEO News und Updates rund um Google Search und Suchmaschinenoptimierung bei SEO Schweiz."
        ]
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

        "source_label": "Source",
        "original_title_label": "Original headline",
        "published_label": "Published",
        "modified_label": "SEO News updated",
        "back": "← Back to latest SEO news",

        "content_note": (
            "SEO Schweiz provides the current topic reference, source information "
            "and additional context related to search engine optimization. "
            "The complete editorial article remains available from the original source."
        ),

        "title_prefixes": [
            "Latest SEO News",
            "SEO Update",
            "Google SEO News",
            "SEO Schweiz News",
            "Google Search Update",
            "Search Marketing News"
        ],

        "h1_prefixes": [
            "Latest in SEO",
            "Google Search Update",
            "SEO News Update",
            "Search Update",
            "SEO Schweiz Update",
            "Latest Search Development"
        ],

        "context_templates": [
            "This story is part of the latest SEO news and search developments monitored by SEO Schweiz. We track changes across Google Search, rankings, algorithms and AI Search.",
            "SEO Schweiz follows current developments in Google Search and search engine optimization. This story is part of our ongoing SEO news monitoring.",
            "As part of SEO Schweiz News, we monitor important developments involving Google, rankings, search algorithms and new search technologies.",
            "This SEO story was identified through our automated news monitoring. SEO Schweiz tracks current developments across Google Search, SEO and digital search."
        ],

        "meta_templates": [
            "Latest SEO news about {topic}. Follow Google Search, ranking and search engine optimization developments with SEO Schweiz.",
            "SEO update about {topic}. Discover current Google Search, algorithm and optimization developments from SEO Schweiz.",
            "Latest developments around {topic}. SEO Schweiz tracks Google Search, rankings, algorithms and search marketing news.",
            "Current news about {topic}. SEO updates, Google Search developments and search engine optimization insights from SEO Schweiz."
        ]
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

        "source_label": "Source",
        "original_title_label": "Titre original",
        "published_label": "Publié",
        "modified_label": "Actualité SEO mise à jour",
        "back": "← Retour aux actualités SEO",

        "content_note": (
            "SEO Suisse présente ici le sujet, la source et un contexte complémentaire "
            "lié au référencement naturel. L'article éditorial complet reste disponible "
            "auprès de la source originale."
        ),

        "title_prefixes": [
            "Actualités SEO",
            "Mise à jour SEO",
            "Actualités Google SEO",
            "SEO Suisse News",
            "Mise à jour Google Search",
            "Actualités du référencement"
        ],

        "h1_prefixes": [
            "Actualité SEO",
            "Nouveauté Google Search",
            "Mise à jour SEO",
            "Actualité du référencement",
            "SEO Suisse Update",
            "Nouvelle évolution SEO"
        ],

        "context_templates": [
            "Cette information fait partie des actualités SEO et mises à jour suivies par SEO Suisse. Nous surveillons les évolutions de Google Search, des classements, des algorithmes et de la recherche IA.",
            "SEO Suisse suit les changements récents concernant Google Search et le référencement naturel. Cette actualité fait partie de notre veille SEO continue.",
            "Dans le cadre des actualités SEO Suisse, nous suivons les évolutions importantes de Google, des classements, des algorithmes et des nouvelles technologies de recherche.",
            "Cette actualité SEO a été détectée par notre système automatique de veille. SEO Suisse suit les développements concernant Google Search, le référencement et la recherche numérique."
        ],

        "meta_templates": [
            "Actualité SEO concernant {topic}. Suivez les évolutions de Google Search, du référencement et des classements avec SEO Suisse.",
            "Mise à jour SEO sur {topic}. Découvrez les dernières évolutions de Google Search et du référencement avec SEO Suisse.",
            "Nouvelles informations sur {topic}. SEO Suisse suit les changements de Google, des classements et des algorithmes.",
            "Actualité concernant {topic}. Informations SEO, Google Search et référencement suivies par SEO Suisse."
        ]
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

        "source_label": "Fonte",
        "original_title_label": "Titolo originale",
        "published_label": "Pubblicato",
        "modified_label": "Notizia SEO aggiornata",
        "back": "← Torna alle notizie SEO",

        "content_note": (
            "SEO Svizzera presenta il tema attuale, la fonte e un contesto aggiuntivo "
            "relativo all'ottimizzazione per i motori di ricerca. L'articolo editoriale "
            "completo rimane disponibile presso la fonte originale."
        ),

        "title_prefixes": [
            "Notizie SEO",
            "Aggiornamento SEO",
            "Google SEO News",
            "SEO Svizzera News",
            "Aggiornamento Google Search",
            "Novità SEO"
        ],

        "h1_prefixes": [
            "Novità SEO",
            "Aggiornamento Google Search",
            "SEO Update",
            "Notizia SEO",
            "SEO Svizzera Update",
            "Nuovo sviluppo SEO"
        ],

        "context_templates": [
            "Questa notizia fa parte degli aggiornamenti SEO monitorati da SEO Svizzera. Seguiamo le evoluzioni di Google Search, ranking, algoritmi e AI Search.",
            "SEO Svizzera segue gli sviluppi più recenti relativi a Google Search e all'ottimizzazione per i motori di ricerca. Questa notizia fa parte del nostro monitoraggio SEO.",
            "Nell'ambito delle notizie SEO Svizzera monitoriamo cambiamenti importanti relativi a Google, ranking, algoritmi e nuove tecnologie di ricerca.",
            "Questa notizia SEO è stata individuata dal nostro sistema automatico di monitoraggio. SEO Svizzera segue gli sviluppi di Google Search, SEO e ricerca digitale."
        ],

        "meta_templates": [
            "Notizia SEO su {topic}. Scopri gli aggiornamenti su Google Search, ranking e ottimizzazione con SEO Svizzera.",
            "Aggiornamento SEO su {topic}. Novità su Google Search, algoritmi e ottimizzazione monitorate da SEO Svizzera.",
            "Nuovi sviluppi relativi a {topic}. SEO Svizzera segue Google Search, ranking, algoritmi e marketing sui motori di ricerca.",
            "Notizia recente su {topic}. Aggiornamenti SEO e Google Search da SEO Svizzera."
        ]
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

        "source_label": "Fuente",
        "original_title_label": "Título original",
        "published_label": "Publicado",
        "modified_label": "Noticia SEO actualizada",
        "back": "← Volver a las noticias SEO",

        "content_note": (
            "SEO Suiza presenta aquí el tema actual, la fuente y contexto adicional "
            "relacionado con el posicionamiento y la optimización para buscadores. "
            "El artículo editorial completo permanece disponible en la fuente original."
        ),

        "title_prefixes": [
            "Noticias SEO",
            "Actualización SEO",
            "Google SEO News",
            "SEO Suiza News",
            "Actualización Google Search",
            "Novedades SEO"
        ],

        "h1_prefixes": [
            "Actualidad SEO",
            "Nueva actualización de Google Search",
            "SEO Update",
            "Novedad SEO",
            "SEO Suiza Update",
            "Nueva evolución SEO"
        ],

        "context_templates": [
            "Esta noticia forma parte de las actualizaciones SEO monitorizadas por SEO Suiza. Seguimos los cambios de Google Search, rankings, algoritmos y búsqueda con IA.",
            "SEO Suiza sigue las novedades relacionadas con Google Search y el posicionamiento web. Esta noticia forma parte de nuestro seguimiento SEO continuo.",
            "Dentro de las noticias SEO Suiza monitorizamos cambios relevantes en Google, rankings, algoritmos y nuevas tecnologías de búsqueda.",
            "Esta noticia SEO fue detectada por nuestro sistema automático de seguimiento. SEO Suiza monitoriza Google Search, SEO y búsqueda digital."
        ],

        "meta_templates": [
            "Noticia SEO sobre {topic}. Descubre novedades de Google Search, rankings y posicionamiento con SEO Suiza.",
            "Actualización SEO sobre {topic}. Información reciente sobre Google Search, algoritmos y optimización de SEO Suiza.",
            "Nuevos desarrollos sobre {topic}. SEO Suiza sigue Google Search, rankings, algoritmos y marketing de búsqueda.",
            "Actualidad sobre {topic}. Noticias SEO, Google Search y posicionamiento monitorizadas por SEO Suiza."
        ]
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

        "source_label": "Fonte",
        "original_title_label": "Título original",
        "published_label": "Publicado",
        "modified_label": "Notícia SEO atualizada",
        "back": "← Voltar às notícias SEO",

        "content_note": (
            "A SEO Suíça apresenta aqui o tema atual, a fonte e contexto adicional "
            "relacionado com otimização para motores de pesquisa. O artigo editorial "
            "completo permanece disponível na fonte original."
        ),

        "title_prefixes": [
            "Notícias SEO",
            "Atualização SEO",
            "Google SEO News",
            "SEO Suíça News",
            "Atualização Google Search",
            "Novidades SEO"
        ],

        "h1_prefixes": [
            "Atualidade SEO",
            "Nova atualização Google Search",
            "SEO Update",
            "Novidade SEO",
            "SEO Suíça Update",
            "Novo desenvolvimento SEO"
        ],

        "context_templates": [
            "Esta notícia faz parte das atualizações SEO acompanhadas pela SEO Suíça. Monitorizamos mudanças no Google Search, rankings, algoritmos e pesquisa com IA.",
            "A SEO Suíça acompanha os desenvolvimentos recentes relacionados com Google Search e otimização para motores de pesquisa. Esta notícia faz parte da nossa monitorização SEO.",
            "Nas notícias SEO Suíça acompanhamos alterações importantes relacionadas com Google, rankings, algoritmos e novas tecnologias de pesquisa.",
            "Esta notícia SEO foi identificada pelo nosso sistema automático de monitorização. A SEO Suíça acompanha Google Search, SEO e pesquisa digital."
        ],

        "meta_templates": [
            "Notícia SEO sobre {topic}. Descubra novidades sobre Google Search, rankings e otimização com a SEO Suíça.",
            "Atualização SEO sobre {topic}. Informação recente sobre Google Search, algoritmos e otimização acompanhada pela SEO Suíça.",
            "Novos desenvolvimentos sobre {topic}. A SEO Suíça acompanha Google Search, rankings, algoritmos e marketing de pesquisa.",
            "Notícia atual sobre {topic}. SEO, Google Search e otimização acompanhados pela SEO Suíça."
        ]
    }
}


BLOCKED_TERMS = [
    "k-pop", "actor", "actress", "singer",
    "football", "soccer", "baseball", "basketball",
    "celebrity", "drama", "movie", "film", "fashion model"
]


def stable_number(text, maximum):
    digest = hashlib.sha1(text.encode("utf-8")).hexdigest()
    return int(digest[:8], 16) % maximum


def clean_topic(title):
    topic = re.sub(r"\s+-\s+[^-]{2,60}$", "", title).strip()

    if len(topic) > 110:
        topic = topic[:107].rstrip() + "..."

    return topic


def optimized_title(config, article):
    topic = clean_topic(article["title"])
    index = stable_number(article["link"] + "title", len(config["title_prefixes"]))
    return f"{config['title_prefixes'][index]}: {topic} | SEO Schweiz"


def optimized_h1(config, article):
    topic = clean_topic(article["title"])
    index = stable_number(article["link"] + "h1", len(config["h1_prefixes"]))
    return f"{config['h1_prefixes'][index]}: {topic}"


def optimized_meta(config, article):
    topic = clean_topic(article["title"])
    index = stable_number(article["link"] + "meta", len(config["meta_templates"]))

    text = config["meta_templates"][index].format(topic=topic)

    if len(text) > 158:
        text = text[:155].rstrip() + "..."

    return text


def context_text(config, article):
    index = stable_number(article["link"] + "context", len(config["context_templates"]))
    return config["context_templates"][index]


def make_slug(article):
    title = article["title"].lower()
    title = re.sub(r"[^a-z0-9]+", "-", title).strip("-") or "seo-news"
    title = title[:70]

    short_hash = hashlib.sha1(
        article["link"].encode("utf-8")
    ).hexdigest()[:8]

    return f"{title}-{short_hash}"


def local_article_url(language, article):
    return f"{SITE_URL}/{language}/news/{make_slug(article)}/"


def local_article_path(language, article):
    return os.path.join(language, "news", make_slug(article), "index.html")


def footer_html():
    return """
<footer>

<div class="footer-main">
<a href="https://www.seoschweiz.net/" target="_blank" rel="noopener">
SEO Schweiz
</a>
</div>

<div class="footer-links">

<a href="https://www.facebook.com/seo.schweiz" target="_blank" rel="noopener">
SEO Agentur Schweiz
</a>

<a href="https://www.facebook.com/suisse.seo/" target="_blank" rel="noopener">
Agence SEO Suisse
</a>

<a href="https://www.facebook.com/seo.svizzera/" target="_blank" rel="noopener">
Agenzia SEO Svizzera
</a>

<a href="https://www.facebook.com/seo.switzerland/" target="_blank" rel="noopener">
SEO Agency Switzerland
</a>

</div>

</footer>
"""


def footer_css():
    return """
footer {
  background:#111;
  color:#aaa;
  text-align:center;
  padding:32px 20px;
  margin-top:50px;
}

footer a {
  color:white;
  text-decoration:none;
}

.footer-main {
  margin-bottom:14px;
}

.footer-main a {
  font-size:18px;
  font-weight:bold;
}

.footer-links {
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:14px 22px;
}

.footer-links a {
  font-size:14px;
}
"""


def get_feed_url(query, config):
    encoded_query = urllib.parse.quote(query + " when:7d")

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

    with urllib.request.urlopen(request, timeout=20) as response:
        return response.read()


def parse_feed(xml_data):
    root = ET.fromstring(xml_data)
    articles = []

    cutoff = datetime.now(timezone.utc) - timedelta(days=MAX_AGE_DAYS)

    for item in root.findall(".//item"):

        title = item.findtext("title", "").strip()
        link = item.findtext("link", "").strip()
        pub_date = item.findtext("pubDate", "").strip()
        source = item.findtext("source", "").strip()

        if not title or not link or not pub_date:
            continue

        if any(term in title.lower() for term in BLOCKED_TERMS):
            continue

        try:
            date = parsedate_to_datetime(pub_date)

            if date.tzinfo is None:
                date = date.replace(tzinfo=timezone.utc)

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
            url = get_feed_url(query, config)
            xml_data = load_feed(url)
            all_articles.extend(parse_feed(xml_data))

        except Exception as error:
            print(f"Error for {query}: {error}")

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
            f'<link rel="alternate" hreflang="{language}" '
            f'href="{SITE_URL}/{language}/">\n'
        )

    tags += (
        f'<link rel="alternate" hreflang="x-default" '
        f'href="{SITE_URL}/">\n'
    )

    return tags


def internal_topic_link(language):
    if language != "de":
        return ""

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


def rss_button(language):
    return f'<a class="rss-button" href="/{language}/feed.xml">RSS Feed</a>'


def organization_schema():
    data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": f"{MAIN_SITE}#organization",
        "name": ORGANIZATION_NAME,
        "url": MAIN_SITE,
        "sameAs": FACEBOOK_URLS
    }

    return json.dumps(data, ensure_ascii=False)


def breadcrumb_schema(language, article, article_url):
    data = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "SEO News",
                "item": f"{SITE_URL}/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": language.upper(),
                "item": f"{SITE_URL}/{language}/"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": clean_topic(article["title"]),
                "item": article_url
            }
        ]
    }

    return json.dumps(data, ensure_ascii=False)


def newsarticle_schema(article, article_url, page_h1, meta_description, modified):
    data = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "@id": f"{article_url}#article",

        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": article_url
        },

        "headline": page_h1,
        "description": meta_description,

        "datePublished": article["date"].astimezone(timezone.utc).isoformat(),
        "dateModified": modified.astimezone(timezone.utc).isoformat(),

        "author": {
            "@type": "Organization",
            "@id": f"{MAIN_SITE}#organization",
            "name": ORGANIZATION_NAME,
            "url": MAIN_SITE
        },

        "publisher": {
            "@type": "Organization",
            "@id": f"{MAIN_SITE}#organization",
            "name": ORGANIZATION_NAME,
            "url": MAIN_SITE
        },

        "about": [
            "SEO",
            "Google Search",
            "Search Engine Optimization",
            "AI Search"
        ],

        "url": article_url
    }

    return json.dumps(data, ensure_ascii=False)


def generate_article_page(language, config, article):
    local_url = local_article_url(language, article)
    output_path = local_article_path(language, article)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    source = article["source"] or "Google News"

    published_text = article["date"].strftime("%d.%m.%Y %H:%M")

    modified = datetime.now(timezone.utc)
    modified_text = modified.strftime("%d.%m.%Y %H:%M UTC")

    page_title = optimized_title(config, article)
    page_h1 = optimized_h1(config, article)
    meta_description = optimized_meta(config, article)
    context = context_text(config, article)

    published_iso = article["date"].astimezone(timezone.utc).isoformat()
    modified_iso = modified.isoformat()

    html = f"""<!DOCTYPE html>
<html lang="{language}">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>{escape(page_title)}</title>

<meta name="description"
content="{escape(meta_description)}">

<meta name="author"
content="SEO Schweiz">

<meta name="robots"
content="index, follow">

<link rel="canonical"
href="{local_url}">

<link rel="alternate"
type="application/rss+xml"
title="{escape(config['feed_title'])}"
href="{SITE_URL}/{language}/feed.xml">

<meta property="og:type"
content="article">

<meta property="og:title"
content="{escape(page_title)}">

<meta property="og:description"
content="{escape(meta_description)}">

<meta property="og:url"
content="{local_url}">

<meta property="og:site_name"
content="SEO Schweiz News">

<meta property="article:published_time"
content="{published_iso}">

<meta property="article:modified_time"
content="{modified_iso}">

<meta name="twitter:card"
content="summary">

<meta name="twitter:title"
content="{escape(page_title)}">

<meta name="twitter:description"
content="{escape(meta_description)}">

<script type="application/ld+json">
{organization_schema()}
</script>

<script type="application/ld+json">
{breadcrumb_schema(language, article, local_url)}
</script>

<script type="application/ld+json">
{newsarticle_schema(article, local_url, page_h1, meta_description, modified)}
</script>

<style>

* {{
  box-sizing:border-box;
}}

body {{
  margin:0;
  font-family:Arial,sans-serif;
  background:#f5f5f5;
  color:#222;
  line-height:1.7;
}}

header {{
  background:#111;
  color:white;
  padding:55px 20px;
  text-align:center;
}}

header a {{
  color:white;
  text-decoration:none;
  font-weight:bold;
}}

.container {{
  max-width:850px;
  margin:auto;
  padding:50px 20px;
}}

.article {{
  background:white;
  padding:35px;
  border-radius:10px;
  box-shadow:0 3px 12px rgba(0,0,0,0.08);
}}

.article h1 {{
  font-size:32px;
  line-height:1.3;
}}

.meta {{
  color:#777;
  font-size:14px;
}}

.original-title {{
  background:#f4f4f4;
  padding:16px 18px;
  border-radius:7px;
  margin:24px 0;
}}

.original-title strong {{
  display:block;
  margin-bottom:5px;
}}

.original {{
  display:inline-block;
  margin-top:25px;
  padding:13px 20px;
  background:#c00000;
  color:white;
  text-decoration:none;
  font-weight:bold;
  border-radius:6px;
}}

.back {{
  display:block;
  margin-top:30px;
  color:#c00000;
  text-decoration:none;
  font-weight:bold;
}}

{footer_css()}

</style>

</head>

<body>

<header>
<a href="/{language}/">SEO NEWS</a>
</header>

<main class="container">

<article class="article">

<h1>{escape(page_h1)}</h1>

<p class="meta">

{escape(config['source_label'])}:
{escape(source)}

<br>

{escape(config['published_label'])}:
{escape(published_text)}

<br>

{escape(config['modified_label'])}:
{escape(modified_text)}

</p>

<p>
{escape(context)}
</p>

<div class="original-title">

<strong>
{escape(config['original_title_label'])}
</strong>

{escape(article['title'])}

</div>

<p>
{escape(config['content_note'])}
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

    with open(output_path, "w", encoding="utf-8") as file:
        file.write(html)


def generate_rss(language, config, articles):
    os.makedirs(language, exist_ok=True)

    feed_url = f"{SITE_URL}/{language}/feed.xml"
    page_url = f"{SITE_URL}/{language}/"

    items_xml = ""

    for article in articles[:MAX_FEED_ITEMS]:

        pub_date = format_datetime(article["date"])

        local_url = local_article_url(language, article)

        feed_title = optimized_h1(config, article)
        description = optimized_meta(config, article)

        items_xml += f"""
  <item>
    <title>{escape(feed_title)}</title>
    <link>{escape(local_url)}</link>
    <guid isPermaLink="true">{escape(local_url)}</guid>
    <pubDate>{pub_date}</pubDate>
    <description>{escape(description)}</description>
  </item>
"""

    rss = f"""<?xml version="1.0" encoding="UTF-8"?>

<rss version="2.0">

<channel>

<title>{escape(config['feed_title'])}</title>

<link>{page_url}</link>

<description>{escape(config['feed_description'])}</description>

<language>{language}</language>

<atom:link
xmlns:atom="http://www.w3.org/2005/Atom"
href="{feed_url}"
rel="self"
type="application/rss+xml" />

{items_xml}

</channel>

</rss>
"""

    with open(config["feed_output"], "w", encoding="utf-8") as file:
        file.write(rss)


def generate_widget(language, config, articles):
    if language != "de":
        return

    widget_items = []

    for article in articles[:MAX_WIDGET_ITEMS]:

        widget_items.append({
            "title": optimized_h1(config, article),
            "url": local_article_url(language, article),
            "source": article["source"] or "Google News"
        })

    data_json = json.dumps(widget_items, ensure_ascii=False)

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

html += '</div></div>';

}});

html += '<div style="margin-top:10px;">';

html += '<a href="https://news.seoschweiz.net/de/" target="_blank" style="font-weight:bold;text-decoration:none;color:#c00000;">';

html += 'Alle SEO News ansehen →';

html += '</a></div></div>';

document.write(html);

}})();
"""

    with open("de/widget.js", "w", encoding="utf-8") as file:
        file.write(widget_js)


def generate_page(language, config):
    articles = collect_news(config)

    articles.sort(
        key=lambda article: article["date"],
        reverse=True
    )

    articles = remove_duplicates(articles)[:MAX_NEWS]

    for article in articles:
        generate_article_page(language, config, article)

    generate_rss(language, config, articles)
    generate_widget(language, config, articles)

    news_html = ""

    for article in articles:

        source = article["source"] or "Google News"
        date_text = article["date"].strftime("%d.%m.%Y %H:%M")

        local_url = local_article_url(language, article)
        display_title = optimized_h1(config, article)

        news_html += f"""
<article class="news-item">

<h2>
<a href="{escape(local_url)}">
{escape(display_title)}
</a>
</h2>

<p class="source">
{escape(source)} · {escape(date_text)}
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
<h2>{config['empty']}</h2>
<p>{config['empty_text']}</p>
</article>
"""

    updated = datetime.now(timezone.utc).strftime(
        "%d.%m.%Y %H:%M UTC"
    )

    canonical = f"{SITE_URL}/{language}/"

    html = f"""<!DOCTYPE html>

<html lang="{language}">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>{config['meta_title']}</title>

<meta name="description"
content="{config['meta_description']}">

<meta name="author"
content="SEO Schweiz">

<meta name="robots"
content="index, follow">

<link rel="canonical"
href="{canonical}">

<link rel="alternate"
type="application/rss+xml"
title="{escape(config['feed_title'])}"
href="{SITE_URL}/{language}/feed.xml">

{hreflang_tags()}

<meta property="og:type"
content="website">

<meta property="og:title"
content="{escape(config['meta_title'])}">

<meta property="og:description"
content="{escape(config['meta_description'])}">

<meta property="og:url"
content="{canonical}">

<meta property="og:site_name"
content="SEO Schweiz News">

<script type="application/ld+json">
{organization_schema()}
</script>

<style>

* {{
  box-sizing:border-box;
}}

body {{
  margin:0;
  font-family:Arial,sans-serif;
  background:#f5f5f5;
  color:#222;
  line-height:1.6;
}}

header {{
  background:#111;
  color:white;
  padding:60px 20px;
  text-align:center;
  position:relative;
}}

header h1 {{
  font-size:44px;
  margin:0 0 10px;
}}

header p {{
  font-size:19px;
}}

.languages {{
  margin-top:20px;
  line-height:2;
}}

.languages a {{
  color:white;
  font-weight:bold;
  text-decoration:none;
  margin:0 7px;
}}

.rss-button {{
  position:absolute;
  top:18px;
  right:20px;
  background:white;
  color:#111;
  text-decoration:none;
  font-weight:bold;
  padding:9px 14px;
  border-radius:6px;
}}

.container {{
  max-width:1000px;
  margin:auto;
  padding:50px 20px;
}}

.topic-link {{
  background:white;
  padding:28px;
  margin-bottom:30px;
  border-radius:10px;
  box-shadow:0 3px 12px rgba(0,0,0,0.07);
}}

.topic-link a {{
  color:#c00000;
  font-weight:bold;
  text-decoration:none;
}}

.news-item {{
  background:white;
  padding:25px;
  margin-bottom:20px;
  border-radius:10px;
  box-shadow:0 3px 12px rgba(0,0,0,0.08);
}}

.news-item h2 {{
  margin-top:0;
  font-size:22px;
}}

.news-item h2 a {{
  color:#222;
  text-decoration:none;
}}

.news-item h2 a:hover {{
  color:#c00000;
}}

.source {{
  font-size:14px;
  color:#777;
}}

.read-more {{
  color:#c00000;
  text-decoration:none;
  font-weight:bold;
}}

.updated {{
  text-align:center;
  color:#777;
  margin:35px 0;
  font-size:14px;
}}

{footer_css()}

</style>

</head>

<body>

<header>

{rss_button(language)}

<h1>{config['title']}</h1>

<p>{config['subtitle']}</p>

<div class="languages">
{language_menu()}
</div>

</header>

<main class="container">

{internal_topic_link(language)}

{news_html}

<div class="updated">
{config['updated']} {updated}
</div>

</main>

{footer_html()}

</body>

</html>
"""

    os.makedirs(
        os.path.dirname(config["output"]),
        exist_ok=True
    )

    with open(config["output"], "w", encoding="utf-8") as file:
        file.write(html)

    return articles


def generate_sitemap():
    urls = [
        f"{SITE_URL}/",
        f"{SITE_URL}/de/google-seo-news/"
    ]

    for language in CONFIGS.keys():
        urls.append(f"{SITE_URL}/{language}/")

    sitemap = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
"""

    for url in urls:
        sitemap += f"""
  <url>
    <loc>{url}</loc>
  </url>
"""

    sitemap += "</urlset>\n"

    with open("sitemap.xml", "w", encoding="utf-8") as file:
        file.write(sitemap)


def generate_news_sitemap(all_articles):
    sitemap = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
"""

    for language, articles in all_articles.items():

        for article in articles:

            url = local_article_url(language, article)

            lastmod = article["date"].astimezone(
                timezone.utc
            ).strftime("%Y-%m-%dT%H:%M:%SZ")

            sitemap += f"""
  <url>
    <loc>{url}</loc>
    <lastmod>{lastmod}</lastmod>
  </url>
"""

    sitemap += "</urlset>\n"

    with open("news-sitemap.xml", "w", encoding="utf-8") as file:
        file.write(sitemap)


def main():
    all_articles = {}

    for language, config in CONFIGS.items():

        print(
            f"\n--- Updating {language} ---"
        )

        articles = generate_page(
            language,
            config
        )

        all_articles[language] = articles

    generate_sitemap()
    generate_news_sitemap(all_articles)

    print("\nSEO News update completed.")


if __name__ == "__main__":
    main()

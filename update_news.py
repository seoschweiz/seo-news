import os
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
from html import escape
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime

MAX_NEWS = 30
MAX_AGE_DAYS = 7

CONFIGS = {
    "de": {
        "output": "de/index.html",
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
        "read_more": "Artikel lesen →",
        "updated": "Letztes automatisches Update:",
        "empty": "Momentan keine aktuellen SEO News gefunden",
        "empty_text": "Beim nächsten automatischen Update wird erneut gesucht."
    },

    "en": {
        "output": "en/index.html",
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
        "read_more": "Read article →",
        "updated": "Last automatic update:",
        "empty": "No recent SEO news found",
        "empty_text": "The system will search again during the next automatic update."
    },

    "fr": {
        "output": "fr/index.html",
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
        "read_more": "Lire l'article →",
        "updated": "Dernière mise à jour automatique :",
        "empty": "Aucune actualité SEO récente trouvée",
        "empty_text": "Une nouvelle recherche sera effectuée lors de la prochaine mise à jour automatique."
    },

    "it": {
        "output": "it/index.html",
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
        "read_more": "Leggi l'articolo →",
        "updated": "Ultimo aggiornamento automatico:",
        "empty": "Nessuna notizia SEO recente trovata",
        "empty_text": "Il sistema effettuerà una nuova ricerca al prossimo aggiornamento automatico."
    },

    "es": {
        "output": "es/index.html",
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
        "read_more": "Leer artículo →",
        "updated": "Última actualización automática:",
        "empty": "No se encontraron noticias SEO recientes",
        "empty_text": "El sistema volverá a buscar durante la próxima actualización automática."
    },

    "pt": {
        "output": "pt/index.html",
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
        "read_more": "Ler artigo →",
        "updated": "Última atualização automática:",
        "empty": "Nenhuma notícia SEO recente encontrada",
        "empty_text": "O sistema irá pesquisar novamente durante a próxima atualização automática."
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

        title_lower = title.lower()

        if any(term in title_lower for term in BLOCKED_TERMS):
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
            articles = parse_feed(xml_data)

            all_articles.extend(articles)

            print(f"{len(articles)} articles found.")

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


def generate_page(language, config):
    articles = collect_news(config)

    articles.sort(
        key=lambda article: article["date"],
        reverse=True
    )

    articles = remove_duplicates(articles)
    articles = articles[:MAX_NEWS]

    news_html = ""

    for article in articles:
        source = article["source"] or "Google News"
        date_text = article["date"].strftime("%d.%m.%Y %H:%M")

        news_html += f"""
<article class="news-item">

<h2>
<a href="{escape(article['link'])}"
target="_blank"
rel="noopener noreferrer">
{escape(article['title'])}
</a>
</h2>

<p class="source">
{escape(source)} · {escape(date_text)}
</p>

<a class="read-more"
href="{escape(article['link'])}"
target="_blank"
rel="noopener noreferrer">
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

    canonical = f"https://news.seoschweiz.net/{language}/"

    html = f"""<!DOCTYPE html>
<html lang="{language}">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>{config['meta_title']}</title>

<meta name="description"
content="{config['meta_description']}">

<meta name="robots"
content="index, follow">

<link rel="canonical"
href="{canonical}">

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

.container {{
  max-width: 1000px;
  margin: auto;
  padding: 50px 20px;
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

footer {{
  background: #111;
  color: #aaa;
  text-align: center;
  padding: 30px;
}}

footer a {{
  color: white;
  text-decoration: none;
}}

</style>

</head>

<body>

<header>

<h1>{config['title']}</h1>

<p>{config['subtitle']}</p>

<div class="languages">
{language_menu()}
</div>

</header>

<main class="container">

{news_html}

<div class="updated">
{config['updated']} {updated}
</div>

</main>

<footer>

SEO News by
<a href="https://www.seoschweiz.net/">
SeoSchweiz.net
</a>

</footer>

</body>

</html>
"""

    output_dir = os.path.dirname(config["output"])

    if output_dir:
        os.makedirs(output_dir, exist_ok=True)

    with open(
        config["output"],
        "w",
        encoding="utf-8"
    ) as file:
        file.write(html)

    print(
        f"{language}: {len(articles)} articles published."
    )


def main():
    for language, config in CONFIGS.items():
        print(f"\n--- Updating {language} ---")
        generate_page(language, config)


if __name__ == "__main__":
    main()

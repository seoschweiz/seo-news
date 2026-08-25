import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
from html import escape
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime

OUTPUT_FILE = "de/index.html"
MAX_NEWS = 30
MAX_AGE_DAYS = 7

SEARCHES = [
    "SEO",
    "Google Search",
    "Google Algorithm",
    "Suchmaschinenoptimierung",
    "AI Search"
]


def get_feed_url(query):
    encoded_query = urllib.parse.quote(query + " when:7d")

    return (
        "https://news.google.com/rss/search?"
        f"q={encoded_query}"
        "&hl=de"
        "&gl=DE"
        "&ceid=DE:de"
    )


def load_feed(url):
    request = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0"}
    )

    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read()


def parse_feed(xml_data):
    root = ET.fromstring(xml_data)

    articles = []

    cutoff_date = datetime.now(timezone.utc) - timedelta(days=MAX_AGE_DAYS)

    for item in root.findall(".//item"):

        title = item.findtext("title", "").strip()
        link = item.findtext("link", "").strip()
        pub_date = item.findtext("pubDate", "").strip()
        source = item.findtext("source", "").strip()

        if not title or not link or not pub_date:
            continue

        try:
            date = parsedate_to_datetime(pub_date)

            if date.tzinfo is None:
                date = date.replace(tzinfo=timezone.utc)

            if date < cutoff_date:
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


def collect_news():

    all_articles = []

    for query in SEARCHES:

        print(f"Suche News für: {query}")

        try:
            url = get_feed_url(query)
            xml_data = load_feed(url)
            articles = parse_feed(xml_data)

            all_articles.extend(articles)

            print(f"{len(articles)} Artikel gefunden.")

        except Exception as error:
            print(f"Fehler bei {query}: {error}")

    return all_articles


def remove_duplicates(articles):

    unique = []
    seen_titles = set()

    for article in articles:

        title_key = article["title"].lower().strip()

        if title_key in seen_titles:
            continue

        seen_titles.add(title_key)
        unique.append(article)

    return unique


def generate_html(articles):

    articles.sort(
        key=lambda article: article["date"],
        reverse=True
    )

    articles = remove_duplicates(articles)

    articles = articles[:MAX_NEWS]

    news_html = ""

    for article in articles:

        source_text = article["source"] or "Google News"

        date_text = article["date"].strftime(
            "%d.%m.%Y %H:%M"
        )

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
            {escape(source_text)} · {escape(date_text)}
          </p>

          <a class="read-more"
             href="{escape(article['link'])}"
             target="_blank"
             rel="noopener noreferrer">
            Artikel lesen →
          </a>

        </article>
        """

    if not articles:

        news_html = """
        <article class="news-item">
          <h2>Momentan keine aktuellen SEO News gefunden</h2>
          <p>Beim nächsten automatischen Update wird erneut gesucht.</p>
        </article>
        """

    updated = datetime.now(timezone.utc).strftime(
        "%d.%m.%Y %H:%M UTC"
    )

    html = f"""<!DOCTYPE html>
<html lang="de">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>Aktuelle SEO News | Google, Bing & Suchmaschinenoptimierung</title>

<meta name="description"
content="Aktuelle SEO News über Google, Bing, Suchmaschinenoptimierung, Google Updates, AI Search, Keywords, Backlinks und digitales Marketing.">

<meta name="robots"
content="index, follow">

<link rel="canonical"
href="https://news.seoschweiz.net/de/">

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

.home {{
  margin-top: 20px;
}}

.home a {{
  color: white;
  text-decoration: none;
  font-weight: bold;
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

<h1>Aktuelle SEO News</h1>

<p>
Google, Suchmaschinenoptimierung,
Algorithmus Updates, AI Search und digitales Marketing.
</p>

<div class="home">
<a href="https://news.seoschweiz.net/">
← SEO News International
</a>
</div>

</header>

<main class="container">

{news_html}

<div class="updated">
Letztes automatisches Update: {updated}
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

    with open(
        OUTPUT_FILE,
        "w",
        encoding="utf-8"
    ) as file:

        file.write(html)

    print(
        f"{len(articles)} aktuelle News veröffentlicht."
    )


def main():

    articles = collect_news()

    generate_html(articles)


if __name__ == "__main__":
    main()

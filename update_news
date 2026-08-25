import urllib.request
import xml.etree.ElementTree as ET
from html import escape
from datetime import datetime
from email.utils import parsedate_to_datetime

RSS_URL = "https://news.google.com/rss/search?q=SEO+Google+Suchmaschinenoptimierung&hl=de&gl=DE&ceid=DE:de"

OUTPUT_FILE = "de/index.html"
MAX_NEWS = 30


def load_feed():
    request = urllib.request.Request(
        RSS_URL,
        headers={"User-Agent": "Mozilla/5.0"}
    )

    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read()


def parse_feed(xml_data):
    root = ET.fromstring(xml_data)

    articles = []

    for item in root.findall(".//item")[:MAX_NEWS]:
        title = item.findtext("title", "").strip()
        link = item.findtext("link", "").strip()
        pub_date = item.findtext("pubDate", "").strip()
        source = item.findtext("source", "").strip()

        if pub_date:
            try:
                date = parsedate_to_datetime(pub_date)
                date_text = date.strftime("%d.%m.%Y %H:%M")
            except Exception:
                date_text = pub_date
        else:
            date_text = ""

        articles.append({
            "title": title,
            "link": link,
            "date": date_text,
            "source": source
        })

    return articles


def generate_html(articles):

    news_html = ""

    for article in articles:

        source_text = article["source"] or "Google News"

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
            {escape(source_text)} · {escape(article['date'])}
          </p>

          <a class="read-more"
             href="{escape(article['link'])}"
             target="_blank"
             rel="noopener noreferrer">
             Artikel lesen →
          </a>

        </article>
        """

    updated = datetime.utcnow().strftime("%d.%m.%Y %H:%M UTC")

    html = f"""<!DOCTYPE html>
<html lang="de">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>Aktuelle SEO News | Google, Bing & Suchmaschinenoptimierung</title>

<meta name="description"
content="Aktuelle SEO News über Google, Bing, Suchmaschinenoptimierung, Algorithmus Updates, AI Search, Keywords, Backlinks und digitales Marketing.">

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
Google, Bing, Suchmaschinenoptimierung,
AI Search und digitales Marketing.
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

    with open(OUTPUT_FILE, "w", encoding="utf-8") as file:
        file.write(html)


def main():

    xml_data = load_feed()

    articles = parse_feed(xml_data)

    generate_html(articles)

    print(f"{len(articles)} News-Artikel aktualisiert.")


if __name__ == "__main__":
    main()


(function() {

var items = [{"title": "SEO Schweiz Update: KI-gestützte Website-Baukasten für Handwerksbetriebe", "url": "https://news.seoschweiz.net/de/news/ki-gest-tzte-website-baukasten-f-r-handwerksbetriebe-deutsches-handwer-d42584ee/", "source": "Deutsches Handwerksblatt"}, {"title": "Google Search News: Winfried Wengenroth baut Partnernetzwerk von CITY IMMOBILIENMAKLER weiter aus", "url": "https://news.seoschweiz.net/de/news/winfried-wengenroth-baut-partnernetzwerk-von-city-immobilienmakler-wei-b50e5b8f/", "source": "pressnetwork.de"}, {"title": "Google Search News: Klassische Suchergebnisse verdrängt: Google klappt AI Overviews teilweise komplett aus", "url": "https://news.seoschweiz.net/de/news/klassische-suchergebnisse-verdr-ngt-google-klappt-ai-overviews-teilwei-f9c83f17/", "source": "OnlineMarketing.de"}, {"title": "Google Search News: Lieferantensuche mit KI-Unterstützung von Ensun", "url": "https://news.seoschweiz.net/de/news/lieferantensuche-mit-ki-unterst-tzung-von-ensun-verkehr-co-at-f5c1bfcf/", "source": "verkehr.co.at"}, {"title": "SEO Schweiz Update: Endlich Leistungsdaten für AI Overviews bei Google", "url": "https://news.seoschweiz.net/de/news/endlich-leistungsdaten-f-r-ai-overviews-bei-google-onlinemarketing-de-f87762e1/", "source": "OnlineMarketing.de"}];

var widgetTitle = "SEO News Schweiz";

var widgetAll = "Alle SEO News ansehen →";

var html = '';

html += '<div style="font-family:Arial,sans-serif;">';

html += '<div style="font-weight:bold;font-size:18px;margin-bottom:12px;">';

html += widgetTitle;

html += '</div>';

items.forEach(function(item) {

html += '<div style="margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid #ddd;">';

html += '<a href="' + item.url + '" target="_blank" rel="noopener" style="font-weight:bold;text-decoration:none;color:#222;">';

html += item.title;

html += '</a>';

html += '<div style="font-size:12px;color:#777;margin-top:4px;">';

html += item.source;

html += '</div>';

html += '</div>';

});

html += '<div style="margin-top:10px;">';

html += '<a href="https://news.seoschweiz.net/de/" target="_blank" rel="noopener" style="font-weight:bold;text-decoration:none;color:#c00000;">';

html += widgetAll;

html += '</a>';

html += '</div>';

html += '</div>';

document.write(html);

})();

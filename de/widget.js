
(function() {

var items = [{"title": "Google Search News: Publisher-Problem: Google klappt AI Overviews öfter komplett aus", "url": "https://news.seoschweiz.net/de/news/publisher-problem-google-klappt-ai-overviews-fter-komplett-aus-onlinem-f9c83f17/", "source": "OnlineMarketing.de"}, {"title": "Google Search News: Lieferantensuche mit KI-Unterstützung von Ensun", "url": "https://news.seoschweiz.net/de/news/lieferantensuche-mit-ki-unterst-tzung-von-ensun-wochenzeitung-verkehr-f5c1bfcf/", "source": "Wochenzeitung Verkehr"}, {"title": "SEO Update im Fokus: Beschaffung: Mit KI Lieferanten jenseits von Suchmaschinen finden - logistik-heute.de", "url": "https://news.seoschweiz.net/de/news/beschaffung-mit-ki-lieferanten-jenseits-von-suchmaschinen-finden-logis-72b271d9/", "source": "logistik-heute.de"}, {"title": "SEO Schweiz Update: Conversion-Optimierung 2026: Mehr Umsatz aus Traffic Dank CRO", "url": "https://news.seoschweiz.net/de/news/conversion-optimierung-2026-mehr-umsatz-aus-traffic-dank-cro-online-so-3903e125/", "source": "Online Solutions Group"}, {"title": "SEO Update im Fokus: Google rollt goto URLs aus und sorgt für SEO-Sorgen", "url": "https://news.seoschweiz.net/de/news/google-rollt-goto-urls-aus-und-sorgt-f-r-seo-sorgen-onlinemarketing-de-6494a093/", "source": "OnlineMarketing.de"}];

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

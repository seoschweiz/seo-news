
(function() {

var items = [{"title": "SEO Update im Fokus: Beschaffung: Mit KI Lieferanten jenseits von Suchmaschinen finden", "url": "https://news.seoschweiz.net/de/news/beschaffung-mit-ki-lieferanten-jenseits-von-suchmaschinen-finden-logis-72b271d9/", "source": "Logistik Heute"}, {"title": "SEO Schweiz Update: Conversion-Optimierung 2026: Mehr Umsatz aus Traffic Dank CRO", "url": "https://news.seoschweiz.net/de/news/conversion-optimierung-2026-mehr-umsatz-aus-traffic-dank-cro-online-so-3903e125/", "source": "Online Solutions Group"}, {"title": "SEO Update im Fokus: Google rollt goto URLs aus und sorgt für SEO-Sorgen", "url": "https://news.seoschweiz.net/de/news/google-rollt-goto-urls-aus-und-sorgt-f-r-seo-sorgen-onlinemarketing-de-6494a093/", "source": "OnlineMarketing.de"}, {"title": "Neues aus der Google-Suche: Was kostet lokales Marketing 2026 wirklich - jack-news.de", "url": "https://news.seoschweiz.net/de/news/was-kostet-lokales-marketing-2026-wirklich-jack-news-de-26377e10/", "source": "jack-news.de"}, {"title": "Aktuelle Entwicklung im SEO: Mit KI Geld verdienen: 15 Ideen für 2026", "url": "https://news.seoschweiz.net/de/news/mit-ki-geld-verdienen-15-ideen-f-r-2026-hostinger-1331ea42/", "source": "Hostinger"}];

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

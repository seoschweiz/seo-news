
(function() {

var items = [{"title": "Aktuell im SEO: Neue All-in-One-Plattform macht KI-Sichtbarkeit für KMU planbar", "url": "https://news.seoschweiz.net/de/news/neue-all-in-one-plattform-macht-ki-sichtbarkeit-f-r-kmu-planbar-pressn-956de35a/", "source": "PressNetwork.de"}, {"title": "Neues aus der Google-Suche: Epic und Google einigen sich. Android wird außerdem ein besseres RAM-Management bieten.", "url": "https://news.seoschweiz.net/de/news/epic-und-google-einigen-sich-android-wird-au-erdem-ein-besseres-ram-ma-9ee85c72/", "source": "Samsung Magazine"}, {"title": "SEO Update im Fokus: Winfried Wengenroth baut Partnernetzwerk von CITY IMMOBILIENMAKLER weiter aus", "url": "https://news.seoschweiz.net/de/news/winfried-wengenroth-baut-partnernetzwerk-von-city-immobilienmakler-wei-6118530b/", "source": "PressNetwork.de"}, {"title": "Aktuell im SEO: Endlich auf der Karte: Google Trends bekommt Explore Maps und regionale Auswertungen", "url": "https://news.seoschweiz.net/de/news/endlich-auf-der-karte-google-trends-bekommt-explore-maps-und-regionale-c10e18ee/", "source": "OnlineMarketing.de"}, {"title": "Aktuelle Entwicklung im SEO: Google startet August 2026 Spam Update: Was du wissen musst", "url": "https://news.seoschweiz.net/de/news/google-startet-august-2026-spam-update-was-du-wissen-musst-onlinemarke-db1086e3/", "source": "OnlineMarketing.de"}];

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

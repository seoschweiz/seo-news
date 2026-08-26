
(function() {

var items = [{"title": "SEO Schweiz Update: Star Diamond SEO Publishes Proprietary 5C Framework for Small Business Search Visibility", "url": "https://news.seoschweiz.net/en/news/star-diamond-seo-publishes-proprietary-5c-framework-for-small-business-b833ab5f/", "source": "The Globe and Mail"}, {"title": "Google Search Update: Die stille Umverteilung der Sichtbarkeit und die neue Macht der KI-Suche: Wer nicht von ChatGPT zitiert wir...", "url": "https://news.seoschweiz.net/en/news/die-stille-umverteilung-der-sichtbarkeit-und-die-neue-macht-der-ki-suc-098e901d/", "source": "Xpert.Digital - Konrad Wolfenstein"}, {"title": "SEO Schweiz Update: Pyrite Digital Celebrates 14 Years of Digital Marketing Growth and Success - 24-7 Press Release Newswire", "url": "https://news.seoschweiz.net/en/news/pyrite-digital-celebrates-14-years-of-digital-marketing-growth-and-suc-3fb1d231/", "source": "24-7 Press Release Newswire"}, {"title": "Google Search Update: Chaz Edward Local Marketing Launches Interactive Local SEO & Google Business Profile Skills Assessment", "url": "https://news.seoschweiz.net/en/news/chaz-edward-local-marketing-launches-interactive-local-seo-google-busi-4f45c35d/", "source": "openPR.com"}, {"title": "Google Search Update: The discovery disruption: 3 steps to take you from SEO to agentic readiness | CX Network", "url": "https://news.seoschweiz.net/en/news/the-discovery-disruption-3-steps-to-take-you-from-seo-to-agentic-readi-6cbccb7e/", "source": "CX Network"}];

var widgetTitle = "SEO News Switzerland";

var widgetAll = "View all SEO News →";

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

html += '<a href="https://news.seoschweiz.net/en/" target="_blank" rel="noopener" style="font-weight:bold;text-decoration:none;color:#c00000;">';

html += widgetAll;

html += '</a>';

html += '</div>';

html += '</div>';

document.write(html);

})();

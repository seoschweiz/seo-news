
(function() {

var items = [{"title": "Search Update: Publishers Noticing Google News Tab Content Disappearing", "url": "https://news.seoschweiz.net/en/news/publishers-noticing-google-news-tab-content-disappearing-search-engine-e7fee6da/", "source": "Search Engine Roundtable"}, {"title": "Google Search Update: The Next Search War Will Be Fought Over Source Eligibility", "url": "https://news.seoschweiz.net/en/news/the-next-search-war-will-be-fought-over-source-eligibility-designrush-3da34972/", "source": "DesignRush"}, {"title": "SEO Schweiz Update: Digital Ansh Vyas Builds a Growing Professional Presence as a Certified Digital Marketer in Mumbai", "url": "https://news.seoschweiz.net/en/news/digital-ansh-vyas-builds-a-growing-professional-presence-as-a-certifie-0ea7cb96/", "source": "Issuewire"}, {"title": "Search Update: Digital Yashika Chandalia Expands Her Digital Marketing Focus to Help Mumbai Businesses Build Stronger Onli...", "url": "https://news.seoschweiz.net/en/news/digital-yashika-chandalia-expands-her-digital-marketing-focus-to-help--4522a4c8/", "source": "Issuewire"}, {"title": "Search Update: Five Leading AI Search Optimization Service Providers in 2026: Shaping the Future of Intelligent Content Di...", "url": "https://news.seoschweiz.net/en/news/five-leading-ai-search-optimization-service-providers-in-2026-shaping--4e08cc7c/", "source": "EIN Presswire"}];

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

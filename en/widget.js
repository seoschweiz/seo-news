
(function() {

var items = [{"title": "Google Search Update: Optimizing for AI", "url": "https://news.seoschweiz.net/en/news/optimizing-for-ai-drug-store-news-a1392b19/", "source": "Drug Store News"}, {"title": "Latest Search Development: 💡 What AI search citations reveal about SEO strategy", "url": "https://news.seoschweiz.net/en/news/what-ai-search-citations-reveal-about-seo-strategy-buttondown-4af07782/", "source": "Buttondown"}, {"title": "Latest Search Development: Google Announces Search Updates For Transparency, Actionable Updates Get Blog Posts", "url": "https://news.seoschweiz.net/en/news/google-announces-search-updates-for-transparency-actionable-updates-ge-f7ff530d/", "source": "Search Engine Roundtable"}, {"title": "Latest in SEO: Running a Solo Business? Here’s How to Get More Customers With AI", "url": "https://news.seoschweiz.net/en/news/running-a-solo-business-here-s-how-to-get-more-customers-with-ai-inc-c-f96973ea/", "source": "inc.com"}, {"title": "Google Search Update: Bi-Digital Launches as an SEO and AI Search Agency Serving the USA, UK and EU", "url": "https://news.seoschweiz.net/en/news/bi-digital-launches-as-an-seo-and-ai-search-agency-serving-the-usa-uk--689276db/", "source": "openPR.com"}];

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

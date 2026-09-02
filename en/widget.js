
(function() {

var items = [{"title": "SEO News Update: Empire State SEO Highlights Why Ongoing Search Engine", "url": "https://news.seoschweiz.net/en/news/empire-state-seo-highlights-why-ongoing-search-engine-openpr-com-eb8c5537/", "source": "openPR.com"}, {"title": "SEO Schweiz Update: Man Used Poisoned Google AI Overviews to Trick Women Into Thinking He Was an NFL Player, FBI Says", "url": "https://news.seoschweiz.net/en/news/man-used-poisoned-google-ai-overviews-to-trick-women-into-thinking-he--32f1381b/", "source": "futurism.com"}, {"title": "Latest Search Development: The Best Full-Service Digital Marketing Agencies in the UK - talk-business.co.uk", "url": "https://news.seoschweiz.net/en/news/the-best-full-service-digital-marketing-agencies-in-the-uk-talk-busine-d8821640/", "source": "talk-business.co.uk"}, {"title": "Latest Search Development: Top 10 SEO Companies in Pakistan", "url": "https://news.seoschweiz.net/en/news/top-10-seo-companies-in-pakistan-programming-insider-f8acf9e4/", "source": "Programming Insider"}, {"title": "Google Search Update: Global: Google Search Console AI Performance Report & AI Control", "url": "https://news.seoschweiz.net/en/news/global-google-search-console-ai-performance-report-ai-control-search-e-ce8c911e/", "source": "Search Engine Roundtable"}];

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

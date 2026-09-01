
(function() {

var items = [{"title": "Google Search Update: Global: Google Search Console AI Performance Report & AI Control", "url": "https://news.seoschweiz.net/en/news/global-google-search-console-ai-performance-report-ai-control-search-e-ce8c911e/", "source": "Search Engine Roundtable"}, {"title": "SEO Schweiz Update: Sunfield Digital Marketing Earns 2026 Best of Florida Award for Driving Business Growth with SEO and Digita...", "url": "https://news.seoschweiz.net/en/news/sunfield-digital-marketing-earns-2026-best-of-florida-award-for-drivin-925f1240/", "source": "Issuewire.com"}, {"title": "SEO News Update: Google Says It Does Not Penalize For Old Outbound Links That Begin To Host Shady Content", "url": "https://news.seoschweiz.net/en/news/google-says-it-does-not-penalize-for-old-outbound-links-that-begin-to--d223032d/", "source": "Search Engine Roundtable"}, {"title": "Latest Search Development: Adobe's AI-Driven CXO Growth Strengthens Against CRM & Microsoft", "url": "https://news.seoschweiz.net/en/news/adobe-s-ai-driven-cxo-growth-strengthens-against-crm-microsoft-trading-4624f88a/", "source": "TradingView"}, {"title": "Latest Search Development: StudioHawk: 5 Things to Know About the Melbourne SEO Agency Founded by a Formerly Homeless Teenager in 2015", "url": "https://news.seoschweiz.net/en/news/studiohawk-5-things-to-know-about-the-melbourne-seo-agency-founded-by--495952bb/", "source": "International Business Times Australia"}];

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

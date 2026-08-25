
(function() {

var items = [{"title": "Google Search Update: WealthReach And VastAdvisor Partner To Connect AI Search Intent With Paid Advisor Marketing", "url": "https://news.seoschweiz.net/en/news/wealthreach-and-vastadvisor-partner-to-connect-ai-search-intent-with-p-cb031362/", "source": "Pulse 2.0"}, {"title": "Latest Search Development: Google: There Is Nothing Special To Do For Generative AI Responses In Search", "url": "https://news.seoschweiz.net/en/news/google-there-is-nothing-special-to-do-for-generative-ai-responses-in-s-09e3f0e8/", "source": "Search Engine Roundtable"}, {"title": "Google Search Update: Best AI Search Optimization Agencies Ranked In Dunstan Research Report", "url": "https://news.seoschweiz.net/en/news/best-ai-search-optimization-agencies-ranked-in-dunstan-research-report-c8c250fb/", "source": "openPR.com"}, {"title": "SEO News Update: Toronto SEO Agency WebHill Launches Redesigned Website to Help Businesses Rank Higher and Generate More Leads", "url": "https://news.seoschweiz.net/en/news/toronto-seo-agency-webhill-launches-redesigned-website-to-help-busines-2b530034/", "source": "EIN News"}, {"title": "SEO News Update: 8 Common SEO Mistakes and How To Avoid Them in 2026", "url": "https://news.seoschweiz.net/en/news/8-common-seo-mistakes-and-how-to-avoid-them-in-2026-shopify-4d812efd/", "source": "Shopify"}];

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

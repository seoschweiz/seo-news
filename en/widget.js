
(function() {

var items = [{"title": "Google Search Update: Chaz Edward Local Marketing Launches Interactive Local SEO & Google Business Profile Skills Assessment", "url": "https://news.seoschweiz.net/en/news/chaz-edward-local-marketing-launches-interactive-local-seo-google-busi-4f45c35d/", "source": "openPR.com"}, {"title": "Google Search Update: The discovery disruption: 3 steps to take you from SEO to agentic readiness | CX Network", "url": "https://news.seoschweiz.net/en/news/the-discovery-disruption-3-steps-to-take-you-from-seo-to-agentic-readi-6cbccb7e/", "source": "CX Network"}, {"title": "Search Update: TechDigital Labs Introduces Unified Marketing and Technology Service Framework", "url": "https://news.seoschweiz.net/en/news/techdigital-labs-introduces-unified-marketing-and-technology-service-f-d3bebb4f/", "source": "Digital Journal"}, {"title": "Google Search Update: WealthReach And VastAdvisor Partner To Connect AI Search Intent With Paid Advisor Marketing", "url": "https://news.seoschweiz.net/en/news/wealthreach-and-vastadvisor-partner-to-connect-ai-search-intent-with-p-cb031362/", "source": "Pulse 2.0"}, {"title": "Latest Search Development: Google: There Is Nothing Special To Do For Generative AI Responses In Search", "url": "https://news.seoschweiz.net/en/news/google-there-is-nothing-special-to-do-for-generative-ai-responses-in-s-09e3f0e8/", "source": "Search Engine Roundtable"}];

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

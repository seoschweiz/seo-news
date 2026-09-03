
(function() {

var items = [{"title": "SEO Schweiz Update: Search Engine Journal Says Schema Helps AI Citations. Its Own Reporting Says Otherwise", "url": "https://news.seoschweiz.net/en/news/search-engine-journal-says-schema-helps-ai-citations-its-own-reporting-dce14e18/", "source": "strategicrevenue.com"}, {"title": "Latest Search Development: From SEO to AI Search: How ThatWare Is Helping Businesses Invest in AEO, GEO and LLM Optimization | Hindust...", "url": "https://news.seoschweiz.net/en/news/from-seo-to-ai-search-how-thatware-is-helping-businesses-invest-in-aeo-eb0f966d/", "source": "Hindustan Times"}, {"title": "Latest in SEO: Bloom Agency Helps Mumbai Brands Build Smarter Websites and Stronger Digital Visibility", "url": "https://news.seoschweiz.net/en/news/bloom-agency-helps-mumbai-brands-build-smarter-websites-and-stronger-d-24dc44f6/", "source": "Programming Insider"}, {"title": "Search Update: Publishers Noticing Google News Tab Content Disappearing", "url": "https://news.seoschweiz.net/en/news/publishers-noticing-google-news-tab-content-disappearing-search-engine-e7fee6da/", "source": "Search Engine Roundtable"}, {"title": "Google Search Update: The Next Search War Will Be Fought Over Source Eligibility", "url": "https://news.seoschweiz.net/en/news/the-next-search-war-will-be-fought-over-source-eligibility-designrush-3da34972/", "source": "DesignRush"}];

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

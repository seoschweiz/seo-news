
(function() {

var items = [{"title": "Search Update: Digital Yashika Chandalia Expands Her Digital Marketing Focus to Help Mumbai Businesses Build Stronger Onli...", "url": "https://news.seoschweiz.net/en/news/digital-yashika-chandalia-expands-her-digital-marketing-focus-to-help--4522a4c8/", "source": "Issuewire"}, {"title": "Latest Search Development: Five Leading AI Search Optimization Service Providers in 2026: Shaping the Future of Intelligent Content Di...", "url": "https://news.seoschweiz.net/en/news/five-leading-ai-search-optimization-service-providers-in-2026-shaping--93721354/", "source": "natlawreview.com"}, {"title": "SEO News Update: AI SEO Tools for 2026: 10 Tools for AI Search Visibility, Content & Optimization", "url": "https://news.seoschweiz.net/en/news/ai-seo-tools-for-2026-10-tools-for-ai-search-visibility-content-optimi-9f166804/", "source": "Analytics Insight"}, {"title": "Latest in SEO: Gargle, Inc. Expands Dental Marketing Services to Include AEO and GEO", "url": "https://news.seoschweiz.net/en/news/gargle-inc-expands-dental-marketing-services-to-include-aeo-and-geo-ge-b74f84e6/", "source": "geneonline.com"}, {"title": "SEO Schweiz Update: KOSME drives staged programs to boost South Korea startups’ post-acceleration growth - CHOSUNBIZ", "url": "https://news.seoschweiz.net/en/news/kosme-drives-staged-programs-to-boost-south-korea-startups-post-accele-8a26e3bf/", "source": "biz.chosun.com"}];

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

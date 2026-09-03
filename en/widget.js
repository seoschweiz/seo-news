
(function() {

var items = [{"title": "Latest in SEO: Gargle, Inc. Expands Dental Marketing Services to Include AEO and GEO", "url": "https://news.seoschweiz.net/en/news/gargle-inc-expands-dental-marketing-services-to-include-aeo-and-geo-ge-b74f84e6/", "source": "geneonline.com"}, {"title": "SEO Schweiz Update: KOSME drives staged programs to boost South Korea startups’ post-acceleration growth - CHOSUNBIZ", "url": "https://news.seoschweiz.net/en/news/kosme-drives-staged-programs-to-boost-south-korea-startups-post-accele-8a26e3bf/", "source": "Chosunbiz"}, {"title": "SEO News Update: Google Trends Explore Page Adds Category Filtering", "url": "https://news.seoschweiz.net/en/news/google-trends-explore-page-adds-category-filtering-search-engine-round-152246e0/", "source": "Search Engine Roundtable"}, {"title": "Google Search Update: Cited SEO Agency Named #1 SEO & AEO Agency for Personal Injury Law Firms", "url": "https://news.seoschweiz.net/en/news/cited-seo-agency-named-1-seo-aeo-agency-for-personal-injury-law-firms--0ebc7fd1/", "source": "openPR.com"}, {"title": "SEO News Update: Empire State SEO Highlights Why Ongoing Search Engine", "url": "https://news.seoschweiz.net/en/news/empire-state-seo-highlights-why-ongoing-search-engine-openpr-com-eb8c5537/", "source": "openPR.com"}];

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

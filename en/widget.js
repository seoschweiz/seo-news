
(function() {

var items = [{"title": "Search Update: Digital Yashika Chandalia Expands Her Digital Marketing Focus to Help Mumbai Businesses Build Stronger Onli...", "url": "https://news.seoschweiz.net/en/news/digital-yashika-chandalia-expands-her-digital-marketing-focus-to-help--4522a4c8/", "source": "Issuewire"}, {"title": "Google Search Update: Sunlight Media Launches Dental Marketing Services for Los Angeles Practices - 24-7 Press Release Newswire", "url": "https://news.seoschweiz.net/en/news/sunlight-media-launches-dental-marketing-services-for-los-angeles-prac-7a7e57a2/", "source": "24-7 Press Release Newswire"}, {"title": "SEO News Update: AI SEO Tools for 2026: 10 Tools for AI Search Visibility, Content & Optimization", "url": "https://news.seoschweiz.net/en/news/ai-seo-tools-for-2026-10-tools-for-ai-search-visibility-content-optimi-9f166804/", "source": "Analytics Insight"}, {"title": "SEO Schweiz Update: Digital Simran Badre: Building Trust as a Certified Digital Marketer in Andheri, Mumbai", "url": "https://news.seoschweiz.net/en/news/digital-simran-badre-building-trust-as-a-certified-digital-marketer-in-df7c2f28/", "source": "Issuewire"}, {"title": "Latest in SEO: Black Cat Website Design Announces Exclusive Focus on Law Firm Website Design and Legal Marketing", "url": "https://news.seoschweiz.net/en/news/black-cat-website-design-announces-exclusive-focus-on-law-firm-website-f623358e/", "source": "The Globe and Mail"}];

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

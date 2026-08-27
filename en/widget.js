
(function() {

var items = [{"title": "Search Update: Answer engine optimization adds value to chatbot responses. Its catching on with creator marketers.", "url": "https://news.seoschweiz.net/en/news/answer-engine-optimization-adds-value-to-chatbot-responses-its-catchin-6f2535ac/", "source": "Tubefilter"}, {"title": "Search Update: Traffic Drops 20 Percent After Google’s Latest Spam Update", "url": "https://news.seoschweiz.net/en/news/traffic-drops-20-percent-after-google-s-latest-spam-update-rs-web-solu-68bdf995/", "source": "RS Web Solutions"}, {"title": "Search Update: Peter Lead: The Barcelona SEO agency expert in AI and", "url": "https://news.seoschweiz.net/en/news/peter-lead-the-barcelona-seo-agency-expert-in-ai-and-la-voz-de-madrid-68b8dc6e/", "source": "La Voz de Madrid"}, {"title": "SEO News Update: Higher google rankings alone not enough to drive business growth – Florens Kairos Digitals", "url": "https://news.seoschweiz.net/en/news/higher-google-rankings-alone-not-enough-to-drive-business-growth-flore-4c99f39d/", "source": "PM News Nigeria"}, {"title": "Google Search Update: SEO National™ on AI Mode Study: Ads Don't Buy Organic Visibility", "url": "https://news.seoschweiz.net/en/news/seo-national-on-ai-mode-study-ads-don-t-buy-organic-visibility-pr-unde-22d308be/", "source": "PR Underground"}];

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


(function() {

var items = [{"title": "Latest Search Development: StudioHawk: 5 Things to Know About the Melbourne SEO Agency Founded by a Formerly Homeless Teenager in 2015", "url": "https://news.seoschweiz.net/en/news/studiohawk-5-things-to-know-about-the-melbourne-seo-agency-founded-by--495952bb/", "source": "International Business Times Australia"}, {"title": "Google Search Update: Search Engine Basics Emerges as a Simplified Guide to SEO, Google Search, and the Future of Digital Discovery", "url": "https://news.seoschweiz.net/en/news/search-engine-basics-emerges-as-a-simplified-guide-to-seo-google-searc-e990645f/", "source": "Big News Network.com"}, {"title": "SEO News Update: Digital Diva Group Launches GEO Framework for AI Search Visibility", "url": "https://news.seoschweiz.net/en/news/digital-diva-group-launches-geo-framework-for-ai-search-visibility-wko-30a22b79/", "source": "WKOW"}, {"title": "Google Search Update: Google Spam Crackdown Makes Brand Citability Crucial, Says InnovAit AI", "url": "https://news.seoschweiz.net/en/news/google-spam-crackdown-makes-brand-citability-crucial-says-innovait-ai--f784336b/", "source": "Argonaut News"}, {"title": "Latest Search Development: Google Updates Spam Guidelines for Europe - Key Revisions Explained", "url": "https://news.seoschweiz.net/en/news/google-updates-spam-guidelines-for-europe-key-revisions-explained-rswe-37f39fdf/", "source": "rswebsols.com"}];

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


(function() {

var items = [{"title": "SEO News Update: GOP convention chaos as imposter site sends MAGA die-hards to Epstein files", "url": "https://news.seoschweiz.net/en/news/gop-convention-chaos-as-imposter-site-sends-maga-die-hards-to-epstein--877085e9/", "source": "rawstory.com"}, {"title": "Latest Search Development: Search Everywhere Optimization Playbook", "url": "https://news.seoschweiz.net/en/news/search-everywhere-optimization-playbook-adobe-for-business-d9158324/", "source": "Adobe for Business"}, {"title": "Search Update: Reputation Is AI’s New Currency: Ace Reputations founder Gaurav Gaikwad", "url": "https://news.seoschweiz.net/en/news/reputation-is-ai-s-new-currency-ace-reputations-founder-gaurav-gaikwad-3939090b/", "source": "LAmag"}, {"title": "Latest in SEO: dNovo Group Featured as No. 1 in Canadian Lawyer’s Roundup of Top Lawyer Marketing Agencies in Canada", "url": "https://news.seoschweiz.net/en/news/dnovo-group-featured-as-no-1-in-canadian-lawyer-s-roundup-of-top-lawye-6b30e48b/", "source": "markets.businessinsider.com"}, {"title": "Latest in SEO: The Next Search War Will Be Fought Over Source Eligibility", "url": "https://news.seoschweiz.net/en/news/the-next-search-war-will-be-fought-over-source-eligibility-designrush-061f8a1c/", "source": "DesignRush"}];

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

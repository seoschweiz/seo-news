
(function() {

var items = [{"title": "Nouveauté Google Search: Google Search et parasite SEO : les pénalités manuelles ne s'appliquent-elles vraiment plus en Europe ?", "url": "https://news.seoschweiz.net/fr/news/google-search-et-parasite-seo-les-p-nalit-s-manuelles-ne-s-appliquent--6925f228/", "source": "Leptidigital"}, {"title": "Nouvelle évolution SEO: google.com/goto : Google casse le scraping des résultats de recherche", "url": "https://news.seoschweiz.net/fr/news/google-com-goto-google-casse-le-scraping-des-r-sultats-de-recherche-le-b8271aa7/", "source": "Leptidigital"}, {"title": "Nouveauté Google Search: Amazon mise sur l’AI commerce : faut-il craindre que l’achat se fasse dans l’agent avant votre site - info-...", "url": "https://news.seoschweiz.net/fr/news/amazon-mise-sur-l-ai-commerce-faut-il-craindre-que-l-achat-se-fasse-da-97b8d8ab/", "source": "info-ecommerce.fr"}];

var widgetTitle = "Actualités SEO Suisse";

var widgetAll = "Voir toutes les actualités SEO →";

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

html += '<a href="https://news.seoschweiz.net/fr/" target="_blank" rel="noopener" style="font-weight:bold;text-decoration:none;color:#c00000;">';

html += widgetAll;

html += '</a>';

html += '</div>';

html += '</div>';

document.write(html);

})();


(function() {

var items = [{"title": "Actualité SEO: Recherche appartement ou maison : où revoir les anciens épisodes avec Stéphane Plaza ?", "url": "https://news.seoschweiz.net/fr/news/recherche-appartement-ou-maison-o-revoir-les-anciens-pisodes-avec-st-p-e6964a52/", "source": "Télé Star"}, {"title": "Nouvelle évolution SEO: PARIS : L’évolution du SEO à l’ère de l’intelligence artificielle - Mohsen AVID décrypte les nouveaux enjeu...", "url": "https://news.seoschweiz.net/fr/news/paris-l-volution-du-seo-l-re-de-l-intelligence-artificielle-mohsen-avi-7d50eb8c/", "source": "Presse Agence"}, {"title": "Nouvelle évolution SEO: Commentaires - Tesla peut trembler, la marque américaine Lucid débarque en France", "url": "https://news.seoschweiz.net/fr/news/commentaires-tesla-peut-trembler-la-marque-am-ricaine-lucid-d-barque-e-5b5617d0/", "source": "Caradisiac"}, {"title": "Nouveauté Google Search: Les résumés IA de Google font-ils perdre du trafic ? Ce que la Belgique a vécu avant la France - info-lux.com", "url": "https://news.seoschweiz.net/fr/news/les-r-sum-s-ia-de-google-font-ils-perdre-du-trafic-ce-que-la-belgique--8c4a3d41/", "source": "info-lux.com"}, {"title": "Actualité du référencement: SEO : La visibilité des PME françaises face à la montée des IA", "url": "https://news.seoschweiz.net/fr/news/seo-la-visibilit-des-pme-fran-aises-face-la-mont-e-des-ia-presse-agenc-91256078/", "source": "Presse Agence"}];

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

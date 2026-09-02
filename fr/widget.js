
(function() {

var items = [{"title": "Nouvelle évolution SEO: Otrak mesure votre visibilité dans les moteurs d’IA", "url": "https://news.seoschweiz.net/fr/news/otrak-mesure-votre-visibilit-dans-les-moteurs-d-ia-l-officiel-des-terr-f5c98757/", "source": "L'Officiel des terrains de camping"}, {"title": "Actualité du référencement: SEO : La visibilité des PME françaises face à la montée des IA", "url": "https://news.seoschweiz.net/fr/news/seo-la-visibilit-des-pme-fran-aises-face-la-mont-e-des-ia-presse-agenc-91256078/", "source": "Presse Agence"}, {"title": "Nouveauté Google Search: Google Search et parasite SEO : les pénalités manuelles ne s'appliquent-elles vraiment plus en Europe ?", "url": "https://news.seoschweiz.net/fr/news/google-search-et-parasite-seo-les-p-nalit-s-manuelles-ne-s-appliquent--6925f228/", "source": "Leptidigital"}, {"title": "Nouvelle évolution SEO: Biographie | Jordan Belly - Journaliste et rédacteur web indépendant - futura-sciences.com", "url": "https://news.seoschweiz.net/fr/news/biographie-jordan-belly-journaliste-et-r-dacteur-web-ind-pendant-futur-9a83a1f9/", "source": "futura-sciences.com"}, {"title": "SEO Suisse Update: Quotidien : qui sont les invités de Yann Barthès ce mardi 1er septembre sur TMC ?", "url": "https://news.seoschweiz.net/fr/news/quotidien-qui-sont-les-invit-s-de-yann-barth-s-ce-mardi-1er-septembre--aa47166d/", "source": "Télé Star"}];

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

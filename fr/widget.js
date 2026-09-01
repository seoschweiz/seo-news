
(function() {

var items = [{"title": "Nouveauté Google Search: Google Search et parasite SEO : les pénalités manuelles ne s'appliquent-elles vraiment plus en Europe ?", "url": "https://news.seoschweiz.net/fr/news/google-search-et-parasite-seo-les-p-nalit-s-manuelles-ne-s-appliquent--6925f228/", "source": "Leptidigital"}, {"title": "Nouvelle évolution SEO: Biographie | Jordan Belly - Journaliste et rédacteur web indépendant", "url": "https://news.seoschweiz.net/fr/news/biographie-jordan-belly-journaliste-et-r-dacteur-web-ind-pendant-futur-9a83a1f9/", "source": "Futura, le média qui explore le monde"}, {"title": "Nouveauté Google Search: D’après un détecteur d’IA, l’un des textes le plus importants de l’Histoire n’aurait pas été écrit par des...", "url": "https://news.seoschweiz.net/fr/news/d-apr-s-un-d-tecteur-d-ia-l-un-des-textes-le-plus-importants-de-l-hist-d59b8419/", "source": "Science et vie"}, {"title": "Mise à jour SEO: Paramount+ : le calendrier complet des sorties de septembre 2026 ...", "url": "https://news.seoschweiz.net/fr/news/paramount-le-calendrier-complet-des-sorties-de-septembre-2026-t-l-star-5a40bad1/", "source": "Télé Star"}, {"title": "Actualité du référencement: Référencem­ent : l’IA redistribu­e les cartes", "url": "https://news.seoschweiz.net/fr/news/r-f-rencem-ent-l-ia-redistribu-e-les-cartes-pressreader-6dc7cbd6/", "source": "PressReader"}];

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

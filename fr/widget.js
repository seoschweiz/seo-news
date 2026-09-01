
(function() {

var items = [{"title": "Nouveauté Google Search: D’après un détecteur d’IA, l’un des textes le plus importants de l’Histoire n’aurait pas été écrit par des...", "url": "https://news.seoschweiz.net/fr/news/d-apr-s-un-d-tecteur-d-ia-l-un-des-textes-le-plus-importants-de-l-hist-d59b8419/", "source": "Science et vie"}, {"title": "SEO Suisse Update: Quotidien : qui sont les invités de Yann Barthès ce mardi 1er septembre sur TMC ?", "url": "https://news.seoschweiz.net/fr/news/quotidien-qui-sont-les-invit-s-de-yann-barth-s-ce-mardi-1er-septembre--aa47166d/", "source": "Télé Star"}, {"title": "Mise à jour SEO: Paramount+ : le calendrier complet des sorties de septembre 2026 ...", "url": "https://news.seoschweiz.net/fr/news/paramount-le-calendrier-complet-des-sorties-de-septembre-2026-t-l-star-5a40bad1/", "source": "Télé Star"}, {"title": "Actualité du référencement: Référencem­ent : l’IA redistribu­e les cartes", "url": "https://news.seoschweiz.net/fr/news/r-f-rencem-ent-l-ia-redistribu-e-les-cartes-pressreader-6dc7cbd6/", "source": "PressReader"}, {"title": "Mise à jour SEO: Apple TV : le calendrier complet des sorties de septembre 2026 entre Slow Horses et Portée disparue", "url": "https://news.seoschweiz.net/fr/news/apple-tv-le-calendrier-complet-des-sorties-de-septembre-2026-entre-slo-2817086b/", "source": "Télé Star"}];

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

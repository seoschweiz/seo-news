
(function() {

var items = [{"title": "Nouvelle évolution SEO: Ici tout commence : qui est Camille Pham, choisie pour le rôle de Mel Tran dans la nouvelle promotion de l’...", "url": "https://news.seoschweiz.net/fr/news/ici-tout-commence-qui-est-camille-pham-choisie-pour-le-r-le-de-mel-tra-c2d9b66d/", "source": "Télé Star"}, {"title": "Mise à jour SEO: Une étude Pew confirme la forte hausse des textes rédigés par IA sur le web depuis le lancement de ChatGPT", "url": "https://news.seoschweiz.net/fr/news/une-tude-pew-confirme-la-forte-hausse-des-textes-r-dig-s-par-ia-sur-le-fdcb4a08/", "source": "lefilia.fr"}, {"title": "Mise à jour SEO: Llms.txt : qu’est-ce que c’est, à quoi ça sert et où l’utiliser - smash-marketing.fr", "url": "https://news.seoschweiz.net/fr/news/llms-txt-qu-est-ce-que-c-est-quoi-a-sert-et-o-l-utiliser-smash-marketi-6c969648/", "source": "smash-marketing.fr"}, {"title": "Mise à jour SEO: « Aperçus IA » de Google en France : le GEO explose, voici le top des agences à connaître - Nice-Matin", "url": "https://news.seoschweiz.net/fr/news/aper-us-ia-de-google-en-france-le-geo-explose-voici-le-top-des-agences-5a288667/", "source": "Nice-Matin"}, {"title": "Actualité du référencement: Koh-Lanta All Stars 2026 : candidats, date de diffusion, lieu, to ...", "url": "https://news.seoschweiz.net/fr/news/koh-lanta-all-stars-2026-candidats-date-de-diffusion-lieu-to-t-l-star-9184b326/", "source": "Télé Star"}];

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

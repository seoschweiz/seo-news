
(function() {

var items = [{"title": "Mise à jour SEO: Apple TV : le calendrier complet des sorties de septembre 2026 entre Slow Horses et Portée disparue", "url": "https://news.seoschweiz.net/fr/news/apple-tv-le-calendrier-complet-des-sorties-de-septembre-2026-entre-slo-2817086b/", "source": "Télé Star"}, {"title": "Actualité du référencement: Le netlinking à l’ère du GEO : comment les backlinks évoluent avec les moteurs basés sur l’IA ?", "url": "https://news.seoschweiz.net/fr/news/le-netlinking-l-re-du-geo-comment-les-backlinks-voluent-avec-les-moteu-c9bc1d6a/", "source": "Webmarketing & co'm"}, {"title": "Nouveauté Google Search: Les résumés IA de Google font-ils perdre du trafic ? Ce que la Belgique a vécu avant la France - Info-lux.com", "url": "https://news.seoschweiz.net/fr/news/les-r-sum-s-ia-de-google-font-ils-perdre-du-trafic-ce-que-la-belgique--8c4a3d41/", "source": "Info-lux.com"}, {"title": "SEO Suisse Update: Faut-il bloquer les robots des IA sur son site ? La décision à prendre avant le 15 septembre - Info-lux.com", "url": "https://news.seoschweiz.net/fr/news/faut-il-bloquer-les-robots-des-ia-sur-son-site-la-d-cision-prendre-ava-c1cdfefc/", "source": "Info-lux.com"}, {"title": "Actualité SEO: Faut-il un fichier llms.txt sur son site ? Ce que Google répond vraiment - Info-lux.com", "url": "https://news.seoschweiz.net/fr/news/faut-il-un-fichier-llms-txt-sur-son-site-ce-que-google-r-pond-vraiment-a8676a30/", "source": "Info-lux.com"}];

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

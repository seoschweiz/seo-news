
(function() {

var items = [{"title": "Nouveauté Google Search: D’après un détecteur d’IA, l’un des textes le plus importants de l’Histoire n’aurait pas été écrit par des...", "url": "https://news.seoschweiz.net/fr/news/d-apr-s-un-d-tecteur-d-ia-l-un-des-textes-le-plus-importants-de-l-hist-d59b8419/", "source": "Science et vie"}, {"title": "SEO Suisse Update: Quotidien : qui sont les invités de Yann Barthès ce mardi 1er septembre sur TMC ?", "url": "https://news.seoschweiz.net/fr/news/quotidien-qui-sont-les-invit-s-de-yann-barth-s-ce-mardi-1er-septembre--aa47166d/", "source": "Télé Star"}, {"title": "Actualité du référencement: Référencem­ent : l’IA redistribu­e les cartes", "url": "https://news.seoschweiz.net/fr/news/r-f-rencem-ent-l-ia-redistribu-e-les-cartes-pressreader-6dc7cbd6/", "source": "PressReader"}, {"title": "Actualité du référencement: Le netlinking à l’ère du GEO : comment les backlinks évoluent avec les moteurs basés sur l’IA ?", "url": "https://news.seoschweiz.net/fr/news/le-netlinking-l-re-du-geo-comment-les-backlinks-voluent-avec-les-moteu-c9bc1d6a/", "source": "Webmarketing & co'm"}, {"title": "Nouveauté Google Search: Les résumés IA de Google font-ils perdre du trafic ? Ce que la Belgique a vécu avant la France - info-lux.com", "url": "https://news.seoschweiz.net/fr/news/les-r-sum-s-ia-de-google-font-ils-perdre-du-trafic-ce-que-la-belgique--8c4a3d41/", "source": "info-lux.com"}];

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

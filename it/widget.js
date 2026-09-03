
(function() {

var items = [{"title": "Aggiornamento Google Search: Geo VS Seo: qual è la differenza e come cambia la ricerca con l’intelligenza artificiale?", "url": "https://news.seoschweiz.net/it/news/geo-vs-seo-qual-la-differenza-e-come-cambia-la-ricerca-con-l-intellige-cf4d7016/", "source": "CorriereNerd.it"}, {"title": "Aggiornamento Google Search: Google cambia le regole sul Parasite SEO in Europa: meno immediata la penalizzazione dei siti, rischi per i...", "url": "https://news.seoschweiz.net/it/news/google-cambia-le-regole-sul-parasite-seo-in-europa-meno-immediata-la-p-2adf967e/", "source": "JAMMA"}];

var widgetTitle = "Notizie SEO Svizzera";

var widgetAll = "Vedi tutte le notizie SEO →";

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

html += '<a href="https://news.seoschweiz.net/it/" target="_blank" rel="noopener" style="font-weight:bold;text-decoration:none;color:#c00000;">';

html += widgetAll;

html += '</a>';

html += '</div>';

html += '</div>';

document.write(html);

})();

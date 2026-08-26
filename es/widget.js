
(function() {

var items = [{"title": "Novedad SEO: Inameh prevé lluvias y tormentas en gran parte del país por la influencia de dos ondas tropicales", "url": "https://news.seoschweiz.net/es/news/inameh-prev-lluvias-y-tormentas-en-gran-parte-del-pa-s-por-la-influenc-f9dbb1b0/", "source": "Reporte Confidencial"}, {"title": "Actualidad SEO: Localizan osamentas humanas semienterradas en una zona boscosa de El Piache", "url": "https://news.seoschweiz.net/es/news/localizan-osamentas-humanas-semienterradas-en-una-zona-boscosa-de-el-p-b46c0dcb/", "source": "Reporte Confidencial"}, {"title": "Nueva actualización de Google Search: Lluvias de variada intensidad y tronadas sorprenden a la Isla de Margarita este miércoles", "url": "https://news.seoschweiz.net/es/news/lluvias-de-variada-intensidad-y-tronadas-sorprenden-a-la-isla-de-marga-5673d024/", "source": "Reporte Confidencial"}, {"title": "SEO Update: \"Cuando es una reseña comprada, se nota muy claramente el uso de palabras clave, que son muy útiles para el...", "url": "https://news.seoschweiz.net/es/news/cuando-es-una-rese-a-comprada-se-nota-muy-claramente-el-uso-de-palabra-77a444f1/", "source": "COPE"}, {"title": "SEO Suiza Update: SEO war gestern? Google Zero: Der Tod der Google Suche, die Süddeutsche Zeitung und das Media Mix Modelling...", "url": "https://news.seoschweiz.net/es/news/seo-war-gestern-google-zero-der-tod-der-google-suche-die-s-ddeutsche-z-8ec68227/", "source": "Xpert.Digital - Konrad Wolfenstein"}];

var widgetTitle = "Noticias SEO Suiza";

var widgetAll = "Ver todas las noticias SEO →";

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

html += '<a href="https://news.seoschweiz.net/es/" target="_blank" rel="noopener" style="font-weight:bold;text-decoration:none;color:#c00000;">';

html += widgetAll;

html += '</a>';

html += '</div>';

html += '</div>';

document.write(html);

})();

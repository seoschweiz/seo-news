
(function() {

var items = [{"title": "SEO Suiza Update: \"Cuando es una reseña comprada, se nota muy claramente el uso de palabras clave, que son muy útiles para el...", "url": "https://news.seoschweiz.net/es/news/cuando-es-una-rese-a-comprada-se-nota-muy-claramente-el-uso-de-palabra-b00e5cb3/", "source": "COPE"}, {"title": "Novedad SEO: Die stille Umverteilung der Sichtbarkeit und die neue Macht der KI-Suche: Wer nicht von ChatGPT zitiert wir...", "url": "https://news.seoschweiz.net/es/news/die-stille-umverteilung-der-sichtbarkeit-und-die-neue-macht-der-ki-suc-d97fc14b/", "source": "Xpert.Digital - Konrad Wolfenstein"}, {"title": "SEO Suiza Update: SEO war gestern? Google Zero: Der Tod der Google Suche, die Süddeutsche Zeitung und das Media Mix Modelling...", "url": "https://news.seoschweiz.net/es/news/seo-war-gestern-google-zero-der-tod-der-google-suche-die-s-ddeutsche-z-8ec68227/", "source": "Xpert.Digital - Konrad Wolfenstein"}, {"title": "Actualidad SEO: “Se van”: De la Espriella ordenó la deportación inmediata de inmigrantes irregulares", "url": "https://news.seoschweiz.net/es/news/se-van-de-la-espriella-orden-la-deportaci-n-inmediata-de-inmigrantes-i-34b1b188/", "source": "Reporte Confidencial"}, {"title": "Novedad SEO: De Jon Snow a Gilderoy Lockhart: Kit Harington se une a la serie de «Harry Potter»", "url": "https://news.seoschweiz.net/es/news/de-jon-snow-a-gilderoy-lockhart-kit-harington-se-une-a-la-serie-de-har-16a38511/", "source": "Reporte Confidencial"}];

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

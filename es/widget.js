
(function() {

var items = [{"title": "Actualidad SEO: “Se van”: De la Espriella ordenó la deportación inmediata de inmigrantes irregulares", "url": "https://news.seoschweiz.net/es/news/se-van-de-la-espriella-orden-la-deportaci-n-inmediata-de-inmigrantes-i-34b1b188/", "source": "Reporte Confidencial"}, {"title": "Novedad SEO: De Jon Snow a Gilderoy Lockhart: Kit Harington se une a la serie de «Harry Potter»", "url": "https://news.seoschweiz.net/es/news/de-jon-snow-a-gilderoy-lockhart-kit-harington-se-une-a-la-serie-de-har-16a38511/", "source": "Reporte Confidencial"}, {"title": "SEO Update: Asesinan a mujer con un destornillador por una deuda de dos dólares en Mérida", "url": "https://news.seoschweiz.net/es/news/asesinan-a-mujer-con-un-destornillador-por-una-deuda-de-dos-d-lares-en-3ffeec73/", "source": "Reporte Confidencial"}, {"title": "Nueva evolución SEO: Dependencia emocional: cuando el amor termina haciéndote sentir pequeña", "url": "https://news.seoschweiz.net/es/news/dependencia-emocional-cuando-el-amor-termina-haci-ndote-sentir-peque-a-31403c45/", "source": "En Pareja"}, {"title": "SEO Suiza Update: Gestos que haces sin darte cuenta y que delatan que te gusta alguien", "url": "https://news.seoschweiz.net/es/news/gestos-que-haces-sin-darte-cuenta-y-que-delatan-que-te-gusta-alguien-e-588d63a0/", "source": "En Pareja"}];

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

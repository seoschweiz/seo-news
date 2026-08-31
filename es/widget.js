
(function() {

var items = [{"title": "Actualidad SEO: MLS: ¿Cuánto gana Carlos Vela ahora que está retirado del fútbol y es parte dueño del LAFC?", "url": "https://news.seoschweiz.net/es/news/mls-cu-nto-gana-carlos-vela-ahora-que-est-retirado-del-f-tbol-y-es-par-65d25762/", "source": "Al Bat"}, {"title": "Actualidad SEO: 3 gelatinas mexicanas irresistibles para celebrar el Día de la Independencia", "url": "https://news.seoschweiz.net/es/news/3-gelatinas-mexicanas-irresistibles-para-celebrar-el-d-a-de-la-indepen-7d8f5e92/", "source": "Cardamomo.news"}, {"title": "Novedad SEO: ¿Naciste en marzo, julio o diciembre? Descubre qué postre mexicano representa tu personalidad", "url": "https://news.seoschweiz.net/es/news/naciste-en-marzo-julio-o-diciembre-descubre-qu-postre-mexicano-represe-1ad6602f/", "source": "Cardamomo.news"}, {"title": "Nueva actualización de Google Search: Inameh prevé lluvias esta semana en gran parte del país por el paso de las ondas tropicales 42 y 45", "url": "https://news.seoschweiz.net/es/news/inameh-prev-lluvias-esta-semana-en-gran-parte-del-pa-s-por-el-paso-de--ca7ffa85/", "source": "Reporte Confidencial"}, {"title": "Nueva evolución SEO: Sujeto asesinó a su exnovia a golpes y fue capturado en Monagas", "url": "https://news.seoschweiz.net/es/news/sujeto-asesin-a-su-exnovia-a-golpes-y-fue-capturado-en-monagas-reporte-28903256/", "source": "Reporte Confidencial"}];

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

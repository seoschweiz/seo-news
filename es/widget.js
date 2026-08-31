
(function() {

var items = [{"title": "SEO Update: 7 pequeños detalles de los hombres que las mujeres suelen confundir con amor", "url": "https://news.seoschweiz.net/es/news/7-peque-os-detalles-de-los-hombres-que-las-mujeres-suelen-confundir-co-81a8c003/", "source": "En Pareja"}, {"title": "Novedad SEO: 8 pequeños detalles que hacen a un hombre infinitamente más atractivo", "url": "https://news.seoschweiz.net/es/news/8-peque-os-detalles-que-hacen-a-un-hombre-infinitamente-m-s-atractivo--6afa70a8/", "source": "En Pareja"}, {"title": "Novedad SEO: ¡La Máxima manda! Junior Caminero supera a Juan Soto y Rafael Devers en brutal dato de poder", "url": "https://news.seoschweiz.net/es/news/la-m-xima-manda-junior-caminero-supera-a-juan-soto-y-rafael-devers-en--650b9ca2/", "source": "Al Bat"}, {"title": "Actualidad SEO: MLS: ¿Cuánto gana Carlos Vela ahora que está retirado del fútbol y es parte dueño del LAFC?", "url": "https://news.seoschweiz.net/es/news/mls-cu-nto-gana-carlos-vela-ahora-que-est-retirado-del-f-tbol-y-es-par-65d25762/", "source": "Al Bat"}, {"title": "Actualidad SEO: 3 gelatinas mexicanas irresistibles para celebrar el Día de la Independencia", "url": "https://news.seoschweiz.net/es/news/3-gelatinas-mexicanas-irresistibles-para-celebrar-el-d-a-de-la-indepen-7d8f5e92/", "source": "Cardamomo.news"}];

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

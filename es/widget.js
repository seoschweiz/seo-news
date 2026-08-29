
(function() {

var items = [{"title": "SEO Suiza Update: Cómo hacer chocolate Abuelita con leche Clavel: receta tradicional y consejos para un resultado cremoso", "url": "https://news.seoschweiz.net/es/news/c-mo-hacer-chocolate-abuelita-con-leche-clavel-receta-tradicional-y-co-d829148d/", "source": "Cardamomo.news"}, {"title": "SEO Suiza Update: ¿Cómo ayudar a tu amiga a salir de una relación tóxica sin perder su amistad en el intento?", "url": "https://news.seoschweiz.net/es/news/c-mo-ayudar-a-tu-amiga-a-salir-de-una-relaci-n-t-xica-sin-perder-su-am-39b1ac11/", "source": "En Pareja"}, {"title": "Novedad SEO: ¡Raúl Jiménez no falla! Vuelve a marcar y mantiene su racha perfecta en Inglaterra", "url": "https://news.seoschweiz.net/es/news/ra-l-jim-nez-no-falla-vuelve-a-marcar-y-mantiene-su-racha-perfecta-en--7b5bd6e3/", "source": "Al Bat"}, {"title": "Novedad SEO: Fútbol: ¡Sin filtro! Mourinho destroza el criterio del Balón de Oro y prende la polémica", "url": "https://news.seoschweiz.net/es/news/f-tbol-sin-filtro-mourinho-destroza-el-criterio-del-bal-n-de-oro-y-pre-d639370a/", "source": "Al Bat"}, {"title": "SEO Suiza Update: ¿Por qué avanzar muy rápido hacia la intimidad es una señal de alerta?", "url": "https://news.seoschweiz.net/es/news/por-qu-avanzar-muy-r-pido-hacia-la-intimidad-es-una-se-al-de-alerta-en-48595863/", "source": "En Pareja"}];

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

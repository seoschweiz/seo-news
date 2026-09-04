
(function() {

var items = [{"title": "SEO Suiza Update: Día de Muertos de las mascotas: fecha, hora y qué poner en el altar", "url": "https://news.seoschweiz.net/es/news/d-a-de-muertos-de-las-mascotas-fecha-hora-y-qu-poner-en-el-altar-bunko-583c110d/", "source": "Bunko.pet"}, {"title": "Novedad SEO: Choupette, la gatita heredera de Karl Lagerfeld: esto se sabe a 7 años de su legado", "url": "https://news.seoschweiz.net/es/news/choupette-la-gatita-heredera-de-karl-lagerfeld-esto-se-sabe-a-7-a-os-d-60196029/", "source": "Bunko.pet"}, {"title": "SEO Suiza Update: Receta de lasaña de carne molida y queso mozzarella en sartén: fácil, cremosa y sin horno", "url": "https://news.seoschweiz.net/es/news/receta-de-lasa-a-de-carne-molida-y-queso-mozzarella-en-sart-n-f-cil-cr-5b1c22cd/", "source": "Cardamomo.news"}, {"title": "SEO Suiza Update: 5 comidas mexicanas saludables y sencillas: ideales para comenzar una dieta", "url": "https://news.seoschweiz.net/es/news/5-comidas-mexicanas-saludables-y-sencillas-ideales-para-comenzar-una-d-bc75ac5e/", "source": "Cardamomo.news"}, {"title": "Nueva evolución SEO: Alimentos que contienen vitamina D y calcio: cuáles son y por qué son clave para tu salud ósea", "url": "https://news.seoschweiz.net/es/news/alimentos-que-contienen-vitamina-d-y-calcio-cu-les-son-y-por-qu-son-cl-ec4d3666/", "source": "Cardamomo.news"}];

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


(function() {

var items = [{"title": "Actualidad SEO: Comidas mexicanas rápidas y económicas: recetas y consejos para ahorrar sin perder sabor", "url": "https://news.seoschweiz.net/es/news/comidas-mexicanas-r-pidas-y-econ-micas-recetas-y-consejos-para-ahorrar-9a173c8d/", "source": "Cardamomo.news"}, {"title": "SEO Suiza Update: Desayunos fáciles que te dan energía: opciones rápidas y saludables para empezar bien el día", "url": "https://news.seoschweiz.net/es/news/desayunos-f-ciles-que-te-dan-energ-a-opciones-r-pidas-y-saludables-par-c6ba5708/", "source": "Cardamomo.news"}, {"title": "Actualidad SEO: Cómo hacer comida china con pollo, verduras y arroz: receta fácil y consejos para lograr el mejor sabor en...", "url": "https://news.seoschweiz.net/es/news/c-mo-hacer-comida-china-con-pollo-verduras-y-arroz-receta-f-cil-y-cons-c7d5ea45/", "source": "Cardamomo.news"}, {"title": "Nueva evolución SEO: Cómo hacer donas con 500 gramos de harina: receta fácil, esponjosa y lista para vender", "url": "https://news.seoschweiz.net/es/news/c-mo-hacer-donas-con-500-gramos-de-harina-receta-f-cil-esponjosa-y-lis-3b14d0d8/", "source": "Cardamomo.news"}, {"title": "Novedad SEO: Tamal de costilla en salsa verde: La receta mexicana llena de sabor", "url": "https://news.seoschweiz.net/es/news/tamal-de-costilla-en-salsa-verde-la-receta-mexicana-llena-de-sabor-car-dd939313/", "source": "Cardamomo.news"}];

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


(function() {

var items = [{"title": "Nueva evolución SEO: Cómo hacer donas con 500 gramos de harina: receta fácil, esponjosa y lista para vender", "url": "https://news.seoschweiz.net/es/news/c-mo-hacer-donas-con-500-gramos-de-harina-receta-f-cil-esponjosa-y-lis-3b14d0d8/", "source": "Cardamomo.news"}, {"title": "Novedad SEO: Cómo hacer pan de plátano: receta fácil, consejos y tendencias en México", "url": "https://news.seoschweiz.net/es/news/c-mo-hacer-pan-de-pl-tano-receta-f-cil-consejos-y-tendencias-en-m-xico-d0cd2766/", "source": "Cardamomo.news"}, {"title": "Novedad SEO: Tamal de costilla en salsa verde: La receta mexicana llena de sabor", "url": "https://news.seoschweiz.net/es/news/tamal-de-costilla-en-salsa-verde-la-receta-mexicana-llena-de-sabor-car-dd939313/", "source": "Cardamomo.news"}, {"title": "SEO Suiza Update: Fijan pasaje mínimo urbano en 200 bolívares desde el 1-Sep", "url": "https://news.seoschweiz.net/es/news/fijan-pasaje-m-nimo-urbano-en-200-bol-vares-desde-el-1-sep-reporte-con-ffb07d7e/", "source": "Reporte Confidencial"}, {"title": "Novedad SEO: ¡América va por fichaje bomba desde Europa! Ya tiene el sí del jugador, pero un detalle frena todo", "url": "https://news.seoschweiz.net/es/news/am-rica-va-por-fichaje-bomba-desde-europa-ya-tiene-el-s-del-jugador-pe-fb97cb03/", "source": "albat.com"}];

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


(function() {

var items = [{"title": "Novedad SEO: Cómo hacer pan de plátano: receta fácil, consejos y tendencias en México", "url": "https://news.seoschweiz.net/es/news/c-mo-hacer-pan-de-pl-tano-receta-f-cil-consejos-y-tendencias-en-m-xico-d0cd2766/", "source": "Cardamomo.news"}, {"title": "Novedad SEO: ¡América va por fichaje bomba desde Europa! Ya tiene el sí del jugador, pero un detalle frena todo", "url": "https://news.seoschweiz.net/es/news/am-rica-va-por-fichaje-bomba-desde-europa-ya-tiene-el-s-del-jugador-pe-fb97cb03/", "source": "Al Bat"}, {"title": "Nueva evolución SEO: Gobernación declara el 8 de septiembre día de júbilo no laborable en Nueva Esparta (+Decreto)", "url": "https://news.seoschweiz.net/es/news/gobernaci-n-declara-el-8-de-septiembre-d-a-de-j-bilo-no-laborable-en-n-dbff0f09/", "source": "reporteconfidencial.info"}, {"title": "Nueva actualización de Google Search: Liga MX: River Plate quiere otro bombazo desde México y Cruz Azul le pone precio de locura", "url": "https://news.seoschweiz.net/es/news/liga-mx-river-plate-quiere-otro-bombazo-desde-m-xico-y-cruz-azul-le-po-67691823/", "source": "Al Bat"}, {"title": "Nueva actualización de Google Search: PGU tendrá importante aumento desde este 1 de septiembre", "url": "https://news.seoschweiz.net/es/news/pgu-tendr-importante-aumento-desde-este-1-de-septiembre-tvn-c7292c52/", "source": "TVN"}];

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

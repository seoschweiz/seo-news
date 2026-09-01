
(function() {

var items = [{"title": "SEO Update: Liga MX: ¿Carlos Acevedo a Europa? Equipo de LaLiga lanza oferta de último minuto al Santos Laguna", "url": "https://news.seoschweiz.net/es/news/liga-mx-carlos-acevedo-a-europa-equipo-de-laliga-lanza-oferta-de-ltimo-1bbcfb05/", "source": "Al Bat"}, {"title": "Novedad SEO: ¡América va por fichaje bomba desde Europa! Ya tiene el sí del jugador, pero un detalle frena todo", "url": "https://news.seoschweiz.net/es/news/am-rica-va-por-fichaje-bomba-desde-europa-ya-tiene-el-s-del-jugador-pe-fb97cb03/", "source": "Al Bat"}, {"title": "Nueva evolución SEO: Gobernación declara el 8 de septiembre día de júbilo no laborable en Nueva Esparta (+Decreto)", "url": "https://news.seoschweiz.net/es/news/gobernaci-n-declara-el-8-de-septiembre-d-a-de-j-bilo-no-laborable-en-n-dbff0f09/", "source": "Reporte Confidencial"}, {"title": "Novedad SEO: Cómo adaptarte al nuevo SEO tras el cambio de Google", "url": "https://news.seoschweiz.net/es/news/c-mo-adaptarte-al-nuevo-seo-tras-el-cambio-de-google-urgente24-com-e8e5e2f6/", "source": "urgente24.com"}, {"title": "Nueva actualización de Google Search: PGU tendrá importante aumento desde este 1 de septiembre", "url": "https://news.seoschweiz.net/es/news/pgu-tendr-importante-aumento-desde-este-1-de-septiembre-tvn-c7292c52/", "source": "TVN"}];

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

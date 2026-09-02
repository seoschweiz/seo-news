
(function() {

var items = [{"title": "SEO Update: TecnoVitae incorpora a Redesva a su red de empresas amigas", "url": "https://news.seoschweiz.net/es/news/tecnovitae-incorpora-a-redesva-a-su-red-de-empresas-amigas-el-d-a-de-v-7b036f63/", "source": "El Día de Valladolid"}, {"title": "Nueva evolución SEO: Cómo hacer donas con 500 gramos de harina: receta fácil, esponjosa y lista para vender", "url": "https://news.seoschweiz.net/es/news/c-mo-hacer-donas-con-500-gramos-de-harina-receta-f-cil-esponjosa-y-lis-3b14d0d8/", "source": "Cardamomo.news"}, {"title": "Novedad SEO: Tamal de costilla en salsa verde: La receta mexicana llena de sabor", "url": "https://news.seoschweiz.net/es/news/tamal-de-costilla-en-salsa-verde-la-receta-mexicana-llena-de-sabor-car-dd939313/", "source": "Cardamomo.news"}, {"title": "SEO Suiza Update: Fijan pasaje mínimo urbano en 200 bolívares desde el 1-Sep", "url": "https://news.seoschweiz.net/es/news/fijan-pasaje-m-nimo-urbano-en-200-bol-vares-desde-el-1-sep-reporte-con-ffb07d7e/", "source": "Reporte Confidencial"}, {"title": "SEO Update: Liga MX: ¿Carlos Acevedo a Europa? Equipo de LaLiga lanza oferta de último minuto al Santos Laguna", "url": "https://news.seoschweiz.net/es/news/liga-mx-carlos-acevedo-a-europa-equipo-de-laliga-lanza-oferta-de-ltimo-1bbcfb05/", "source": "Al Bat"}];

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


(function() {

var items = [{"title": "Novedad SEO: Cómo hacer pan de plátano: receta fácil, consejos y tendencias en México", "url": "https://news.seoschweiz.net/es/news/c-mo-hacer-pan-de-pl-tano-receta-f-cil-consejos-y-tendencias-en-m-xico-d0cd2766/", "source": "cardamomo.news"}, {"title": "Novedad SEO: Tamal de costilla en salsa verde: La receta mexicana llena de sabor", "url": "https://news.seoschweiz.net/es/news/tamal-de-costilla-en-salsa-verde-la-receta-mexicana-llena-de-sabor-car-dd939313/", "source": "cardamomo.news"}, {"title": "SEO Suiza Update: Fijan pasaje mínimo urbano en 200 bolívares desde el 1-Sep", "url": "https://news.seoschweiz.net/es/news/fijan-pasaje-m-nimo-urbano-en-200-bol-vares-desde-el-1-sep-reporte-con-ffb07d7e/", "source": "Reporte Confidencial"}, {"title": "Nueva evolución SEO: Gobernación declara el 8 de septiembre día de júbilo no laborable en Nueva Esparta (+Decreto)", "url": "https://news.seoschweiz.net/es/news/gobernaci-n-declara-el-8-de-septiembre-d-a-de-j-bilo-no-laborable-en-n-dbff0f09/", "source": "Reporte Confidencial"}, {"title": "Novedad SEO: Cómo adaptarte al nuevo SEO tras el cambio de Google", "url": "https://news.seoschweiz.net/es/news/c-mo-adaptarte-al-nuevo-seo-tras-el-cambio-de-google-urgente24-bc1afce2/", "source": "Urgente24"}];

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

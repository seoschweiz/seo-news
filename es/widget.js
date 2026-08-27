
(function() {

var items = [{"title": "Novedad SEO: LaLiga: ¡Julián Álvarez jamás jugará en Barcelona! Ejecutivo del Atlético de Madrid lanza sentencia definitiva", "url": "https://news.seoschweiz.net/es/news/laliga-juli-n-lvarez-jam-s-jugar-en-barcelona-ejecutivo-del-atl-tico-d-893ac9f1/", "source": "Al Bat"}, {"title": "Actualidad SEO: La Transformación Digital del Arte y la Cultura en Colombia: El Rol Estratégico del Marketing", "url": "https://news.seoschweiz.net/es/news/la-transformaci-n-digital-del-arte-y-la-cultura-en-colombia-el-rol-est-6f194074/", "source": "hsbnoticias.com"}, {"title": "Actualidad SEO: Playoffs LMB: Maikel Franco promete un gran show en la Serie de Campeonato con Sultanes de Monterrey", "url": "https://news.seoschweiz.net/es/news/playoffs-lmb-maikel-franco-promete-un-gran-show-en-la-serie-de-campeon-a80de007/", "source": "Al Bat"}, {"title": "SEO Suiza Update: Fedecámaras proyecta inversión privada en servicios en Margarita", "url": "https://news.seoschweiz.net/es/news/fedec-maras-proyecta-inversi-n-privada-en-servicios-en-margarita-repor-62e979be/", "source": "Reporte Confidencial"}, {"title": "Nueva actualización de Google Search: OEA asegura que mantendrá su apoyo a comunidades venezolanas afectadas por los terremotos", "url": "https://news.seoschweiz.net/es/news/oea-asegura-que-mantendr-su-apoyo-a-comunidades-venezolanas-afectadas--0b1def33/", "source": "Reporte Confidencial"}];

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

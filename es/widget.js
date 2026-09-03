
(function() {

var items = [{"title": "Novedad SEO: Cómo hacer flautas de pollo en air fryer: quedan crujientes, doraditas y sin exceso de aceite", "url": "https://news.seoschweiz.net/es/news/c-mo-hacer-flautas-de-pollo-en-air-fryer-quedan-crujientes-doraditas-y-432805c5/", "source": "Cardamomo.news"}, {"title": "Nueva actualización de Google Search: Receta original de galletas con chispas de chocolate: suaves por dentro y doraditas por fuera", "url": "https://news.seoschweiz.net/es/news/receta-original-de-galletas-con-chispas-de-chocolate-suaves-por-dentro-94fc0747/", "source": "Cardamomo.news"}, {"title": "SEO Update: TecnoVitae incorpora a Redesva a su red de empresas amigas", "url": "https://news.seoschweiz.net/es/news/tecnovitae-incorpora-a-redesva-a-su-red-de-empresas-amigas-el-d-a-de-v-7b036f63/", "source": "El Día de Valladolid"}, {"title": "Novedad SEO: Tamal de costilla en salsa verde: La receta mexicana llena de sabor", "url": "https://news.seoschweiz.net/es/news/tamal-de-costilla-en-salsa-verde-la-receta-mexicana-llena-de-sabor-car-dd939313/", "source": "Cardamomo.news"}, {"title": "SEO Update: Liga MX: ¿Carlos Acevedo a Europa? Equipo de LaLiga lanza oferta de último minuto al Santos Laguna", "url": "https://news.seoschweiz.net/es/news/liga-mx-carlos-acevedo-a-europa-equipo-de-laliga-lanza-oferta-de-ltimo-1bbcfb05/", "source": "Al Bat"}];

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

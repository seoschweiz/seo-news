
(function() {

var items = [{"title": "Nueva evolución SEO: Mexicanos en Europa: América abre la puerta y joven mexicano se marcha a probar suerte en Europa", "url": "https://news.seoschweiz.net/es/news/mexicanos-en-europa-am-rica-abre-la-puerta-y-joven-mexicano-se-marcha--a0eeb231/", "source": "Al Bat"}, {"title": "Novedad SEO: Empresas: SEM y SEO, dos vías para diversificar la captación de clientes, ¿cómo reducir la dependencia de l...", "url": "https://news.seoschweiz.net/es/news/empresas-sem-y-seo-dos-v-as-para-diversificar-la-captaci-n-de-clientes-ee1345f1/", "source": "Infobae"}, {"title": "SEO Update: Liga MX: ¿Carlos Acevedo a Europa? Equipo de LaLiga lanza oferta de último minuto al Santos Laguna", "url": "https://news.seoschweiz.net/es/news/liga-mx-carlos-acevedo-a-europa-equipo-de-laliga-lanza-oferta-de-ltimo-1bbcfb05/", "source": "Al Bat"}, {"title": "Novedad SEO: Cómo adaptarte al nuevo SEO tras el cambio de Google", "url": "https://news.seoschweiz.net/es/news/c-mo-adaptarte-al-nuevo-seo-tras-el-cambio-de-google-urgente24-e8e5e2f6/", "source": "Urgente24"}, {"title": "Actualidad SEO: MLS: ¿Cuánto gana Carlos Vela ahora que está retirado del fútbol y es parte dueño del LAFC?", "url": "https://news.seoschweiz.net/es/news/mls-cu-nto-gana-carlos-vela-ahora-que-est-retirado-del-f-tbol-y-es-par-65d25762/", "source": "Al Bat"}];

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

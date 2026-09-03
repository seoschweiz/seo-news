
(function() {

var items = [{"title": "SEO Update: Liga MX: ¿Carlos Acevedo a Europa? Equipo de LaLiga lanza oferta de último minuto al Santos Laguna", "url": "https://news.seoschweiz.net/es/news/liga-mx-carlos-acevedo-a-europa-equipo-de-laliga-lanza-oferta-de-ltimo-1bbcfb05/", "source": "Al Bat"}, {"title": "Actualidad SEO: MLS: ¿Cuánto gana Carlos Vela ahora que está retirado del fútbol y es parte dueño del LAFC?", "url": "https://news.seoschweiz.net/es/news/mls-cu-nto-gana-carlos-vela-ahora-que-est-retirado-del-f-tbol-y-es-par-65d25762/", "source": "Al Bat"}, {"title": "Novedad SEO: ¡Raúl Jiménez no falla! Vuelve a marcar y mantiene su racha perfecta en Inglaterra", "url": "https://news.seoschweiz.net/es/news/ra-l-jim-nez-no-falla-vuelve-a-marcar-y-mantiene-su-racha-perfecta-en--7b5bd6e3/", "source": "Al Bat"}, {"title": "Novedad SEO: Fútbol: ¡Sin filtro! Mourinho destroza el criterio del Balón de Oro y prende la polémica", "url": "https://news.seoschweiz.net/es/news/f-tbol-sin-filtro-mourinho-destroza-el-criterio-del-bal-n-de-oro-y-pre-d639370a/", "source": "Al Bat"}, {"title": "Actualidad SEO: ¡Contrato millonario o bombazo! Wizards se juegan todo con Anthony Davis y la NBA ya espera un posible canje", "url": "https://news.seoschweiz.net/es/news/contrato-millonario-o-bombazo-wizards-se-juegan-todo-con-anthony-davis-c59afd9f/", "source": "Al Bat"}];

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

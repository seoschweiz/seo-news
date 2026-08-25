
(function() {

var items = [{"title": "Nueva evolución SEO: NBA: ¡Bomba financiera! Revelan préstamo secreto de $300 millones ligado a LeBron James", "url": "https://news.seoschweiz.net/es/news/nba-bomba-financiera-revelan-pr-stamo-secreto-de-300-millones-ligado-a-c61ec178/", "source": "Al Bat"}, {"title": "Novedad SEO: Fútbol: AC Milan va por dos piezas del Real Madrid y la respuesta de Mourinho fue contundente", "url": "https://news.seoschweiz.net/es/news/f-tbol-ac-milan-va-por-dos-piezas-del-real-madrid-y-la-respuesta-de-mo-deb1186e/", "source": "Al Bat"}, {"title": "Nueva evolución SEO: Liga MX: Erik Lira está a días de Europa: revelan cuándo podría concretarse su salida de Cruz Azul", "url": "https://news.seoschweiz.net/es/news/liga-mx-erik-lira-est-a-d-as-de-europa-revelan-cu-ndo-podr-a-concretar-396fbced/", "source": "Al Bat"}, {"title": "Novedad SEO: 3 recetas mexicanas de comidas de fiesta: Buenas y baratas", "url": "https://news.seoschweiz.net/es/news/3-recetas-mexicanas-de-comidas-de-fiesta-buenas-y-baratas-cardamomo-ne-0a956406/", "source": "Cardamomo.news"}, {"title": "Nueva evolución SEO: Cómo hacer gelatina de mosaico paso a paso: receta fácil, cremosa y colorida", "url": "https://news.seoschweiz.net/es/news/c-mo-hacer-gelatina-de-mosaico-paso-a-paso-receta-f-cil-cremosa-y-colo-df75fad0/", "source": "Cardamomo.news"}];

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

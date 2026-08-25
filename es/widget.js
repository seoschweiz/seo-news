
(function() {

var items = [{"title": "Nueva evolución SEO: Cómo hacer gelatina de mosaico paso a paso: receta fácil, cremosa y colorida", "url": "https://news.seoschweiz.net/es/news/c-mo-hacer-gelatina-de-mosaico-paso-a-paso-receta-f-cil-cremosa-y-colo-df75fad0/", "source": "Cardamomo.news"}, {"title": "Novedad SEO: Esta biblioteca española recopila 83.000 ejemplos de GPT Ads", "url": "https://news.seoschweiz.net/es/news/esta-biblioteca-espa-ola-recopila-83-000-ejemplos-de-gpt-ads-marketing-45d7418c/", "source": "Marketing4eCommerce"}, {"title": "Nueva evolución SEO: Así es como se hacen las entomatadas originales: la receta mexicana de la salsa tradicional", "url": "https://news.seoschweiz.net/es/news/as-es-como-se-hacen-las-entomatadas-originales-la-receta-mexicana-de-l-4d16fa24/", "source": "Cardamomo.news"}, {"title": "SEO Update: WNBA: ¡¿También juega béisbol?! Caitlin Clark se mete a la jaula de bateo y sorprende", "url": "https://news.seoschweiz.net/es/news/wnba-tambi-n-juega-b-isbol-caitlin-clark-se-mete-a-la-jaula-de-bateo-y-d53e6e62/", "source": "Al Bat"}, {"title": "SEO Suiza Update: MLB: Venta histórica de Padres deja premio inesperado para todos sus empleados y es increíble", "url": "https://news.seoschweiz.net/es/news/mlb-venta-hist-rica-de-padres-deja-premio-inesperado-para-todos-sus-em-d228bad9/", "source": "Al Bat"}];

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

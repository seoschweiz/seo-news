
(function() {

var items = [{"title": "SEO Suiza Update: El gran reto del SEO local no es posicionar una tienda, sino coordinar cientos", "url": "https://news.seoschweiz.net/es/news/el-gran-reto-del-seo-local-no-es-posicionar-una-tienda-sino-coordinar--3046811c/", "source": "PuroMarketing"}, {"title": "SEO Suiza Update: LaLiga: ¡Mourinho explota tras derrota del Real Madrid! Revienta al árbitro y acusa teatro de Betis", "url": "https://news.seoschweiz.net/es/news/laliga-mourinho-explota-tras-derrota-del-real-madrid-revienta-al-rbitr-fd122128/", "source": "Al Bat"}, {"title": "Novedad SEO: MLB: ¡La novela no termina! Catcher vuelve otra vez a la organización de Dodgers", "url": "https://news.seoschweiz.net/es/news/mlb-la-novela-no-termina-catcher-vuelve-otra-vez-a-la-organizaci-n-de--0c0d7bd4/", "source": "Al Bat"}, {"title": "Novedad SEO: Playoffs LMB: ¡A un triunfo de la historia! Olmecas queda a nada de volver a la Serie del Rey tras 33 años", "url": "https://news.seoschweiz.net/es/news/playoffs-lmb-a-un-triunfo-de-la-historia-olmecas-queda-a-nada-de-volve-03cc127b/", "source": "Al Bat"}, {"title": "Nueva evolución SEO: Berhattan apuesta por la tarifa plana para el diseño web, el SEO y la visibilidad en buscadores de IA", "url": "https://news.seoschweiz.net/es/news/berhattan-apuesta-por-la-tarifa-plana-para-el-dise-o-web-el-seo-y-la-v-a1876c11/", "source": "El Independiente"}];

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

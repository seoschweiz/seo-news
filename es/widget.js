
(function() {

var items = [{"title": "Nueva actualización de Google Search: La IA rompe las reglas del ecommerce: emprendedores mexicanos tendrán que vender más allá de su tienda onli...", "url": "https://news.seoschweiz.net/es/news/la-ia-rompe-las-reglas-del-ecommerce-emprendedores-mexicanos-tendr-n-q-70026a3c/", "source": "Noticias - Almomento"}, {"title": "SEO Update: Playoffs LMB: La batalla campal que se desató en el Juego 5 entre Olmecas y Pericos en la Final del Sur", "url": "https://news.seoschweiz.net/es/news/playoffs-lmb-la-batalla-campal-que-se-desat-en-el-juego-5-entre-olmeca-ba6338df/", "source": "Al Bat"}, {"title": "Actualidad SEO: LaLiga: ¡Mourinho explota tras derrota del Real Madrid! Revienta al árbitro y acusa teatro de Betis", "url": "https://news.seoschweiz.net/es/news/laliga-mourinho-explota-tras-derrota-del-real-madrid-revienta-al-rbitr-b1ca2a3b/", "source": "Al Bat"}, {"title": "Novedad SEO: MLB: ¡La novela no termina! Catcher vuelve otra vez a la organización de Dodgers", "url": "https://news.seoschweiz.net/es/news/mlb-la-novela-no-termina-catcher-vuelve-otra-vez-a-la-organizaci-n-de--0c0d7bd4/", "source": "Al Bat"}, {"title": "SEO Suiza Update: MLB: Calendario de Spring Training 2027 sale a la luz bajo amenaza de paro laboral", "url": "https://news.seoschweiz.net/es/news/mlb-calendario-de-spring-training-2027-sale-a-la-luz-bajo-amenaza-de-p-7fe1d52e/", "source": "Al Bat"}];

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

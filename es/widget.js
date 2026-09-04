
(function() {

var items = [{"title": "Nueva actualización de Google Search: MLB: ¡Golpe demoledor para Cubs! Pierden por el resto del año a uno de sus brazos más letales", "url": "https://news.seoschweiz.net/es/news/mlb-golpe-demoledor-para-cubs-pierden-por-el-resto-del-a-o-a-uno-de-su-08ffdd05/", "source": "Al Bat"}, {"title": "Nueva evolución SEO: Mexicanos en Europa: ¡Salida frustrada! Marco Garcés movió fichas por Obed Vargas, pero se quedo con las ganas", "url": "https://news.seoschweiz.net/es/news/mexicanos-en-europa-salida-frustrada-marco-garc-s-movi-fichas-por-obed-3565b1d8/", "source": "Al Bat"}, {"title": "Nueva actualización de Google Search: 6 Hábitos cotidianos que te convierten en una simple \"opción\" dentro de tu propio matrimonio", "url": "https://news.seoschweiz.net/es/news/6-h-bitos-cotidianos-que-te-convierten-en-una-simple-opci-n-dentro-de--89064c19/", "source": "enpareja.com"}, {"title": "Novedad SEO: ¿Por qué el chico guapo te aburre tan rápido? Lo que las mujeres buscan en realidad", "url": "https://news.seoschweiz.net/es/news/por-qu-el-chico-guapo-te-aburre-tan-r-pido-lo-que-las-mujeres-buscan-e-29ad92d1/", "source": "enpareja.com"}, {"title": "Novedad SEO: Inmaculada Plata, consultora SEO con más de 10 años de experiencia", "url": "https://news.seoschweiz.net/es/news/inmaculada-plata-consultora-seo-con-m-s-de-10-a-os-de-experiencia-giro-ab5f2cc0/", "source": "GIRONANOTICIES.COM"}];

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

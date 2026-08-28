
(function() {

var items = [{"title": "SEO Update: El secreto detrás de las noches en pareja: por qué dormir junto al amor de tu vida le hace tanto bien a tu...", "url": "https://news.seoschweiz.net/es/news/el-secreto-detr-s-de-las-noches-en-pareja-por-qu-dormir-junto-al-amor--04230c16/", "source": "En Pareja"}, {"title": "SEO Update: MLB: ¡Refuerzo de emergencia! Blue Jays fichan brazo veterano en plena pelea por playoffs", "url": "https://news.seoschweiz.net/es/news/mlb-refuerzo-de-emergencia-blue-jays-fichan-brazo-veterano-en-plena-pe-239a92ef/", "source": "Al Bat"}, {"title": "Novedad SEO: Los 8 colores que usan las mujeres con un futuro radiante (y el poder oculto detrás de cada uno)", "url": "https://news.seoschweiz.net/es/news/los-8-colores-que-usan-las-mujeres-con-un-futuro-radiante-y-el-poder-o-1ed12280/", "source": "Soy Carmín"}, {"title": "Nueva evolución SEO: Cosas que las mujeres NO pueden hacer como los hombres: ¿Por qué ellos no pueden \"frenar\" su instinto tan f...", "url": "https://news.seoschweiz.net/es/news/cosas-que-las-mujeres-no-pueden-hacer-como-los-hombres-por-qu-ellos-no-1dae70b5/", "source": "Soy Carmín"}, {"title": "Nueva evolución SEO: Nuevas reglas en el Parque Nacional Mochima: Prohíben mascotas y música fuerte para cuidar el ecosistema", "url": "https://news.seoschweiz.net/es/news/nuevas-reglas-en-el-parque-nacional-mochima-proh-ben-mascotas-y-m-sica-6a3aaa45/", "source": "Reporte Confidencial"}];

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

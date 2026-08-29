
(function() {

var items = [{"title": "SEO Suiza Update: ¿Por qué avanzar muy rápido hacia la intimidad es una señal de alerta?", "url": "https://news.seoschweiz.net/es/news/por-qu-avanzar-muy-r-pido-hacia-la-intimidad-es-una-se-al-de-alerta-en-48595863/", "source": "En Pareja"}, {"title": "SEO Update: Cómo hacer gelatina de queso Philadelphia y piña: receta fácil y cremosa", "url": "https://news.seoschweiz.net/es/news/c-mo-hacer-gelatina-de-queso-philadelphia-y-pi-a-receta-f-cil-y-cremos-4a6159af/", "source": "Cardamomo.news"}, {"title": "SEO Suiza Update: MLB: White Sox pagaron caro por Luis Castillo y el resultado está siendo un desastre", "url": "https://news.seoschweiz.net/es/news/mlb-white-sox-pagaron-caro-por-luis-castillo-y-el-resultado-est-siendo-f7c72c43/", "source": "Al Bat"}, {"title": "Nueva evolución SEO: Flan casero y cremoso con pocas calorías: cómo hacerlo e ingredientes", "url": "https://news.seoschweiz.net/es/news/flan-casero-y-cremoso-con-pocas-calor-as-c-mo-hacerlo-e-ingredientes-c-e37928d1/", "source": "Cardamomo.news"}, {"title": "SEO Suiza Update: Los 8 países que organizan las bodas más grandes y descomunales del planeta", "url": "https://news.seoschweiz.net/es/news/los-8-pa-ses-que-organizan-las-bodas-m-s-grandes-y-descomunales-del-pl-c3c6e331/", "source": "En Pareja"}];

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

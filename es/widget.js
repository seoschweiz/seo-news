
(function() {

var items = [{"title": "Novedad SEO: Playoffs LMB: ¡A un triunfo de la historia! Olmecas queda a nada de volver a la Serie del Rey tras 33 años", "url": "https://news.seoschweiz.net/es/news/playoffs-lmb-a-un-triunfo-de-la-historia-olmecas-queda-a-nada-de-volve-03cc127b/", "source": "Al Bat"}, {"title": "Nueva evolución SEO: Berhattan apuesta por la tarifa plana para el diseño web, el SEO y la visibilidad en buscadores de IA", "url": "https://news.seoschweiz.net/es/news/berhattan-apuesta-por-la-tarifa-plana-para-el-dise-o-web-el-seo-y-la-v-a1876c11/", "source": "El Independiente"}, {"title": "Actualidad SEO: Reddit aparece en el 83,9% de foros de Google", "url": "https://news.seoschweiz.net/es/news/reddit-aparece-en-el-83-9-de-foros-de-google-comunicaci-n-marketing-b065e8e3/", "source": "Comunicación Marketing"}, {"title": "Nueva evolución SEO: La formación online responde a la creciente demanda de especialistas en IA, BIM, Big Data o SEO", "url": "https://news.seoschweiz.net/es/news/la-formaci-n-online-responde-a-la-creciente-demanda-de-especialistas-e-8bc5c0b1/", "source": "ExtraConfidencial"}, {"title": "SEO Update: 9 estrategias de marketing digital inmobiliario eficaces para 2026 - fotocasa", "url": "https://news.seoschweiz.net/es/news/9-estrategias-de-marketing-digital-inmobiliario-eficaces-para-2026-fot-7cd65ff1/", "source": "fotocasa - blog profesional"}];

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

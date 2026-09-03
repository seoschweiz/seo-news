
(function() {

var items = [{"title": "SEO Update: Cómo preparar una michelada con Clamato: receta, consejos y tendencias 2026", "url": "https://news.seoschweiz.net/es/news/c-mo-preparar-una-michelada-con-clamato-receta-consejos-y-tendencias-2-0f0682c8/", "source": "Cardamomo.news"}, {"title": "Nueva evolución SEO: Antojitos mexicanos ideales para reuniones: botanas prácticas, deliciosas y llenas de tradición", "url": "https://news.seoschweiz.net/es/news/antojitos-mexicanos-ideales-para-reuniones-botanas-pr-cticas-deliciosa-38ec5e75/", "source": "Cardamomo.news"}, {"title": "Nueva actualización de Google Search: Receta original de galletas con chispas de chocolate: suaves por dentro y doraditas por fuera", "url": "https://news.seoschweiz.net/es/news/receta-original-de-galletas-con-chispas-de-chocolate-suaves-por-dentro-94fc0747/", "source": "Cardamomo.news"}, {"title": "SEO Update: TecnoVitae incorpora a Redesva a su red de empresas amigas", "url": "https://news.seoschweiz.net/es/news/tecnovitae-incorpora-a-redesva-a-su-red-de-empresas-amigas-el-d-a-de-v-7b036f63/", "source": "El Día de Valladolid"}, {"title": "Novedad SEO: Tamal de costilla en salsa verde: La receta mexicana llena de sabor", "url": "https://news.seoschweiz.net/es/news/tamal-de-costilla-en-salsa-verde-la-receta-mexicana-llena-de-sabor-car-dd939313/", "source": "Cardamomo.news"}];

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

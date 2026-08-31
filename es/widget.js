
(function() {

var items = [{"title": "Nueva actualización de Google Search: Llegan a Chile dos extraditados vinculados al secuestro y homicidio de Ronald Ojeda", "url": "https://news.seoschweiz.net/es/news/llegan-a-chile-dos-extraditados-vinculados-al-secuestro-y-homicidio-de-014a73c5/", "source": "Reporte Confidencial"}, {"title": "Nueva evolución SEO: Enfermera fue detenida en Mérida por inducirse el parto de 31 semanas y provocar la muerte del feto", "url": "https://news.seoschweiz.net/es/news/enfermera-fue-detenida-en-m-rida-por-inducirse-el-parto-de-31-semanas--34090c16/", "source": "Reporte Confidencial"}, {"title": "Novedad SEO: Decretan viable retomar proyecto Waterland", "url": "https://news.seoschweiz.net/es/news/decretan-viable-retomar-proyecto-waterland-reporte-confidencial-445d274a/", "source": "Reporte Confidencial"}, {"title": "Actualidad SEO: De Google a ChatGPT: el consultor mendocino que trabaja para que las marcas también existan dentro de la in...", "url": "https://news.seoschweiz.net/es/news/de-google-a-chatgpt-el-consultor-mendocino-que-trabaja-para-que-las-ma-9bcc0b04/", "source": "Titulares.ar"}, {"title": "Novedad SEO: Cuando la amistad se convierte en atracción: Lo que tienes que pensar antes de cruzar la raya", "url": "https://news.seoschweiz.net/es/news/cuando-la-amistad-se-convierte-en-atracci-n-lo-que-tienes-que-pensar-a-3464e894/", "source": "En Pareja"}];

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

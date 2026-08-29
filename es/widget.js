
(function() {

var items = [{"title": "SEO Suiza Update: Los 8 países que organizan las bodas más grandes y descomunales del planeta", "url": "https://news.seoschweiz.net/es/news/los-8-pa-ses-que-organizan-las-bodas-m-s-grandes-y-descomunales-del-pl-c3c6e331/", "source": "En Pareja"}, {"title": "SEO Update: ¿Qué tipo de esposa eres según tu personalidad?", "url": "https://news.seoschweiz.net/es/news/qu-tipo-de-esposa-eres-seg-n-tu-personalidad-en-pareja-259196bb/", "source": "En Pareja"}, {"title": "Actualidad SEO: ¿Los estás alejando sin darte cuenta? 7 hábitos de autosabotaje", "url": "https://news.seoschweiz.net/es/news/los-est-s-alejando-sin-darte-cuenta-7-h-bitos-de-autosabotaje-en-parej-5be443ac/", "source": "En Pareja"}, {"title": "Nueva actualización de Google Search: 7 hábitos que podrían hacer que él dude de un futuro contigo", "url": "https://news.seoschweiz.net/es/news/7-h-bitos-que-podr-an-hacer-que-l-dude-de-un-futuro-contigo-en-pareja-ec686b26/", "source": "En Pareja"}, {"title": "SEO Suiza Update: Liga MX: ¡No te vayas! Brian Rodríguez enciende rumores y sus compañeros le ruegan quedarse en América", "url": "https://news.seoschweiz.net/es/news/liga-mx-no-te-vayas-brian-rodr-guez-enciende-rumores-y-sus-compa-eros--7665fcbb/", "source": "Al Bat"}];

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

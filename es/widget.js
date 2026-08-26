
(function() {

var items = [{"title": "SEO Suiza Update: 7 Errores de mujeres en una cita que hacen que no te vuelvan a buscar", "url": "https://news.seoschweiz.net/es/news/7-errores-de-mujeres-en-una-cita-que-hacen-que-no-te-vuelvan-a-buscar--e409f47a/", "source": "Soy Carmín"}, {"title": "Novedad SEO: ¿Qué siente un gato cuando presiente que va a morir? Esto dicen los expertos", "url": "https://news.seoschweiz.net/es/news/qu-siente-un-gato-cuando-presiente-que-va-a-morir-esto-dicen-los-exper-6192ee1f/", "source": "Bunko.pet"}, {"title": "Nueva evolución SEO: Dependencia emocional: cuando el amor termina haciéndote sentir pequeña", "url": "https://news.seoschweiz.net/es/news/dependencia-emocional-cuando-el-amor-termina-haci-ndote-sentir-peque-a-31403c45/", "source": "En Pareja"}, {"title": "SEO Suiza Update: Gestos que haces sin darte cuenta y que delatan que te gusta alguien", "url": "https://news.seoschweiz.net/es/news/gestos-que-haces-sin-darte-cuenta-y-que-delatan-que-te-gusta-alguien-e-588d63a0/", "source": "En Pareja"}, {"title": "Nueva evolución SEO: NBA: ¡Bomba financiera! Revelan préstamo secreto de $300 millones ligado a LeBron James", "url": "https://news.seoschweiz.net/es/news/nba-bomba-financiera-revelan-pr-stamo-secreto-de-300-millones-ligado-a-c61ec178/", "source": "Al Bat"}];

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

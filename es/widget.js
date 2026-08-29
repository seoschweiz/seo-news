
(function() {

var items = [{"title": "Actualidad SEO: De Google a ChatGPT: el consultor mendocino que trabaja para que las marcas también existan dentro de la in...", "url": "https://news.seoschweiz.net/es/news/de-google-a-chatgpt-el-consultor-mendocino-que-trabaja-para-que-las-ma-9bcc0b04/", "source": "Titulares.ar"}, {"title": "Novedad SEO: Cuando la amistad se convierte en atracción: Lo que tienes que pensar antes de cruzar la raya", "url": "https://news.seoschweiz.net/es/news/cuando-la-amistad-se-convierte-en-atracci-n-lo-que-tienes-que-pensar-a-3464e894/", "source": "enpareja.com"}, {"title": "Novedad SEO: No me amaba, solo me quería usar: La dolorosa lección que aprendí a la mala", "url": "https://news.seoschweiz.net/es/news/no-me-amaba-solo-me-quer-a-usar-la-dolorosa-lecci-n-que-aprend-a-la-ma-d6393f61/", "source": "enpareja.com"}, {"title": "SEO Suiza Update: Liga MX: ¡Piojo Herrera explota! Se engancha con aficionado y termina lanzando fuerte amenaza", "url": "https://news.seoschweiz.net/es/news/liga-mx-piojo-herrera-explota-se-engancha-con-aficionado-y-termina-lan-f309f62b/", "source": "Al Bat"}, {"title": "Nueva evolución SEO: LaLiga: ¿Jugador clave de Mourinho pide salir del Real Madrid? El club responde con contundencia", "url": "https://news.seoschweiz.net/es/news/laliga-jugador-clave-de-mourinho-pide-salir-del-real-madrid-el-club-re-e5ca7b3e/", "source": "Al Bat"}];

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

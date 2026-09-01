
(function() {

var items = [{"title": "Nueva actualización de Google Search: PGU tendrá importante aumento desde este 1 de septiembre", "url": "https://news.seoschweiz.net/es/news/pgu-tendr-importante-aumento-desde-este-1-de-septiembre-tvn-cl-c7292c52/", "source": "tvn.cl"}, {"title": "SEO Suiza Update: El poder de la seguridad: 6 gestos masculinos que atrapan de inmediato", "url": "https://news.seoschweiz.net/es/news/el-poder-de-la-seguridad-6-gestos-masculinos-que-atrapan-de-inmediato--c0d3d186/", "source": "En Pareja"}, {"title": "SEO Suiza Update: Te dio todas las razones para enamorarte: Cuando sus acciones parecían amor, pero él nunca las pensó así", "url": "https://news.seoschweiz.net/es/news/te-dio-todas-las-razones-para-enamorarte-cuando-sus-acciones-parec-an--a16e8e68/", "source": "En Pareja"}, {"title": "SEO Update: 7 pequeños detalles de los hombres que las mujeres suelen confundir con amor", "url": "https://news.seoschweiz.net/es/news/7-peque-os-detalles-de-los-hombres-que-las-mujeres-suelen-confundir-co-81a8c003/", "source": "En Pareja"}, {"title": "Novedad SEO: 8 pequeños detalles que hacen a un hombre infinitamente más atractivo", "url": "https://news.seoschweiz.net/es/news/8-peque-os-detalles-que-hacen-a-un-hombre-infinitamente-m-s-atractivo--6afa70a8/", "source": "En Pareja"}];

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

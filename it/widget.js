
(function() {

var items = [{"title": "Novità SEO: SEO war gestern? Google Zero: Der Tod der Google Suche, die Süddeutsche Zeitung und das Media Mix Modelling...", "url": "https://news.seoschweiz.net/it/news/seo-war-gestern-google-zero-der-tod-der-google-suche-die-s-ddeutsche-z-5345222f/", "source": "Xpert.Digital - Konrad Wolfenstein"}, {"title": "SEO Svizzera Update: Cina, maxi richiamo di 4,3 milioni di auto per le maniglie “a scomparsa”. Otto produttori coinvolti", "url": "https://news.seoschweiz.net/it/news/cina-maxi-richiamo-di-4-3-milioni-di-auto-per-le-maniglie-a-scomparsa--a2583cf8/", "source": "LaMiaFinanza"}, {"title": "Novità SEO: AI nei CMS: opportunità e limiti dell'intelligenza artificiale in WordPress oggi", "url": "https://news.seoschweiz.net/it/news/ai-nei-cms-opportunit-e-limiti-dell-intelligenza-artificiale-in-wordpr-6e362ed6/", "source": "tomshw.it"}, {"title": "Nuovo sviluppo SEO: Volkswagen, è crisi profonda. Il tema dei nuovi tagli non più rinviabile – LMF", "url": "https://news.seoschweiz.net/it/news/volkswagen-crisi-profonda-il-tema-dei-nuovi-tagli-non-pi-rinviabile-lm-7d542c27/", "source": "LaMiaFinanza"}, {"title": "SEO Svizzera Update: Consulenza SEO in Italia: come orientarsi tra le agenzie", "url": "https://news.seoschweiz.net/it/news/consulenza-seo-in-italia-come-orientarsi-tra-le-agenzie-fullpress-it-9a834cdf/", "source": "fullpress.it"}];

var widgetTitle = "Notizie SEO Svizzera";

var widgetAll = "Vedi tutte le notizie SEO →";

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

html += '<a href="https://news.seoschweiz.net/it/" target="_blank" rel="noopener" style="font-weight:bold;text-decoration:none;color:#c00000;">';

html += widgetAll;

html += '</a>';

html += '</div>';

html += '</div>';

document.write(html);

})();

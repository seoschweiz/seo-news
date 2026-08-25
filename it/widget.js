
(function() {

var items = [{"title": "Aggiornamento Google Search: GEO e intelligenza artificiale: come cambia il monitoraggio della visibilità online", "url": "https://news.seoschweiz.net/it/news/geo-e-intelligenza-artificiale-come-cambia-il-monitoraggio-della-visib-014f184f/", "source": "AbruzzoNews24"}, {"title": "Novità SEO: Llms.txt: cos’è, a che serve e dove usarlo", "url": "https://news.seoschweiz.net/it/news/llms-txt-cos-a-che-serve-e-dove-usarlo-italiaonline-41d0fc56/", "source": "Italiaonline"}, {"title": "SEO Update: Auto aziendali, cambia tutto: aumenta la tassazione sulle vetture con più di 5 anni – LMF", "url": "https://news.seoschweiz.net/it/news/auto-aziendali-cambia-tutto-aumenta-la-tassazione-sulle-vetture-con-pi-d1ad51b1/", "source": "LaMiaFinanza"}, {"title": "Nuovo sviluppo SEO: Shein, debutto in Borsa a Hong Kong il 1° settembre: valutazione fino a 27 miliardi di dollari – LMF", "url": "https://news.seoschweiz.net/it/news/shein-debutto-in-borsa-a-hong-kong-il-1-settembre-valutazione-fino-a-2-6fa8e90f/", "source": "LaMiaFinanza"}, {"title": "Novità SEO: Local SEO, Google Maps e AI: intervista a Mauro Sordello su come le PMI possono farsi trovare online", "url": "https://news.seoschweiz.net/it/news/local-seo-google-maps-e-ai-intervista-a-mauro-sordello-su-come-le-pmi--7a88ada9/", "source": "AbruzzoNews24"}];

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

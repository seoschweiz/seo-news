
(function() {

var items = [{"title": "Nuovo sviluppo SEO: TCL presenta a IFA l’ecosistema AI tra TV, smartphone e casa connessa", "url": "https://news.seoschweiz.net/it/news/tcl-presenta-a-ifa-l-ecosistema-ai-tra-tv-smartphone-e-casa-connessa-a-3f8149df/", "source": "assodigitale.it"}, {"title": "SEO Update: TCL P80 debutta in Europa con display NXTPAPER AMOLED", "url": "https://news.seoschweiz.net/it/news/tcl-p80-debutta-in-europa-con-display-nxtpaper-amoled-assodigitale-it-a0aa9d09/", "source": "assodigitale.it"}, {"title": "SEO Svizzera Update: HIPTHER Warsaw Summit 2026: dove iGaming, compliance e tecnologia guardano al futuro", "url": "https://news.seoschweiz.net/it/news/hipther-warsaw-summit-2026-dove-igaming-compliance-e-tecnologia-guarda-f1e96b50/", "source": "jamma.it"}, {"title": "Aggiornamento Google Search: Geo VS Seo: qual è la differenza e come cambia la ricerca con l’intelligenza artificiale?", "url": "https://news.seoschweiz.net/it/news/geo-vs-seo-qual-la-differenza-e-come-cambia-la-ricerca-con-l-intellige-cf4d7016/", "source": "CorriereNerd.it"}, {"title": "Aggiornamento Google Search: Studio: l’IA si avvicina a superare i medici in cinque compiti clinici", "url": "https://news.seoschweiz.net/it/news/studio-l-ia-si-avvicina-a-superare-i-medici-in-cinque-compiti-clinici--f4588096/", "source": "assodigitale.it"}];

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

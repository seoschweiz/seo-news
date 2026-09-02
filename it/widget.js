
(function() {

var items = [{"title": "SEO Update: Follower comprati: 10 controlli per capire se sono persone vere o bot", "url": "https://news.seoschweiz.net/it/news/follower-comprati-10-controlli-per-capire-se-sono-persone-vere-o-bot-a-61d6f4c5/", "source": "AbruzzoNews24"}, {"title": "SEO Svizzera Update: HIPTHER Warsaw Summit 2026: dove iGaming, compliance e tecnologia guardano al futuro", "url": "https://news.seoschweiz.net/it/news/hipther-warsaw-summit-2026-dove-igaming-compliance-e-tecnologia-guarda-f1e96b50/", "source": "JAMMA"}, {"title": "Aggiornamento Google Search: Geo VS Seo: qual è la differenza e come cambia la ricerca con l’intelligenza artificiale?", "url": "https://news.seoschweiz.net/it/news/geo-vs-seo-qual-la-differenza-e-come-cambia-la-ricerca-con-l-intellige-cf4d7016/", "source": "corrierenerd.it"}, {"title": "Aggiornamento Google Search: Studio: l’IA si avvicina a superare i medici in cinque compiti clinici", "url": "https://news.seoschweiz.net/it/news/studio-l-ia-si-avvicina-a-superare-i-medici-in-cinque-compiti-clinici--f4588096/", "source": "assodigitale."}, {"title": "SEO Update: EssilorLuxottica avvia un programma di buyback fino a 5 milioni di azioni – LMF", "url": "https://news.seoschweiz.net/it/news/essilorluxottica-avvia-un-programma-di-buyback-fino-a-5-milioni-di-azi-867da672/", "source": "LaMiaFinanza"}];

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

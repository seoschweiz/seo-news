
(function() {

var items = [{"title": "Aggiornamento Google Search: Accio porta l’IA nelle fiere europee con Exhibition Agent", "url": "https://news.seoschweiz.net/it/news/accio-porta-l-ia-nelle-fiere-europee-con-exhibition-agent-assodigitale-e1d94135/", "source": "assodigitale.it"}, {"title": "Novità SEO: Bending Spoons completa l’acquisizione di Airtable", "url": "https://news.seoschweiz.net/it/news/bending-spoons-completa-l-acquisizione-di-airtable-assodigitale-it-05857f22/", "source": "assodigitale.it"}, {"title": "Nuovo sviluppo SEO: LEGO celebra la Formula 1 con eventi gratuiti tra Milano e Monza", "url": "https://news.seoschweiz.net/it/news/lego-celebra-la-formula-1-con-eventi-gratuiti-tra-milano-e-monza-assod-d95b74a8/", "source": "assodigitale.it"}, {"title": "Novità SEO: L'AI di Hostinger va oltre l'assistenza e ora gestisce il vostro sito", "url": "https://news.seoschweiz.net/it/news/l-ai-di-hostinger-va-oltre-l-assistenza-e-ora-gestisce-il-vostro-sito--3cbb76cd/", "source": "tomshw.it"}, {"title": "Nuovo sviluppo SEO: TCL presenta a IFA l’ecosistema AI tra TV, smartphone e casa connessa", "url": "https://news.seoschweiz.net/it/news/tcl-presenta-a-ifa-l-ecosistema-ai-tra-tv-smartphone-e-casa-connessa-a-3f8149df/", "source": "assodigitale.it"}];

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

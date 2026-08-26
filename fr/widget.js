
(function() {

var items = [{"title": "SEO Suisse Update: Der Leuchtturmeffekt: Warum Xpert.Digital unter den 12 Mittelständlern im Unternehmer Magazin beim Thema KI...", "url": "https://news.seoschweiz.net/fr/news/der-leuchtturmeffekt-warum-xpert-digital-unter-den-12-mittelst-ndlern--e7710311/", "source": "Xpert.Digital - Konrad Wolfenstein"}, {"title": "Nouvelle évolution SEO: Mort de Philippe Bouvard : où et quand seront célébrées les obsèques du créateur des Grosses têtes ?", "url": "https://news.seoschweiz.net/fr/news/mort-de-philippe-bouvard-o-et-quand-seront-c-l-br-es-les-obs-ques-du-c-350a1198/", "source": "Télé Star"}, {"title": "SEO Suisse Update: SEO war gestern? Google Zero: Der Tod der Google Suche, die Süddeutsche Zeitung und das Media Mix Modelling...", "url": "https://news.seoschweiz.net/fr/news/seo-war-gestern-google-zero-der-tod-der-google-suche-die-s-ddeutsche-z-0cd64621/", "source": "Xpert.Digital - Konrad Wolfenstein"}, {"title": "Actualité du référencement: Affaire conclue : acheteurs, heure de diffusion, présentatrice, replay… guide complet de l’émission de Fran...", "url": "https://news.seoschweiz.net/fr/news/affaire-conclue-acheteurs-heure-de-diffusion-pr-sentatrice-replay-guid-7317b05c/", "source": "Télé Star"}, {"title": "Nouvelle évolution SEO: Ici tout commence : qui est Camille Pham, choisie pour le rôle de Mel Tran dans la nouvelle promotion de l’...", "url": "https://news.seoschweiz.net/fr/news/ici-tout-commence-qui-est-camille-pham-choisie-pour-le-r-le-de-mel-tra-c2d9b66d/", "source": "Télé Star"}];

var widgetTitle = "Actualités SEO Suisse";

var widgetAll = "Voir toutes les actualités SEO →";

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

html += '<a href="https://news.seoschweiz.net/fr/" target="_blank" rel="noopener" style="font-weight:bold;text-decoration:none;color:#c00000;">';

html += widgetAll;

html += '</a>';

html += '</div>';

html += '</div>';

document.write(html);

})();

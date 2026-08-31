
(function() {

var items = [{"title": "Nouvelle évolution SEO: google.com/goto : Google casse le scraping des résultats de recherche", "url": "https://news.seoschweiz.net/fr/news/google-com-goto-google-casse-le-scraping-des-r-sultats-de-recherche-le-b8271aa7/", "source": "Leptidigital"}, {"title": "Actualité SEO: Disney+ : le calendrier complet des sorties de septembre 2026 entre City of Blood et American Horror Story", "url": "https://news.seoschweiz.net/fr/news/disney-le-calendrier-complet-des-sorties-de-septembre-2026-entre-city--647c45b2/", "source": "Télé Star"}, {"title": "Nouveauté Google Search: Google, YouTube, Amazon : les règles de la visibilité ont changé", "url": "https://news.seoschweiz.net/fr/news/google-youtube-amazon-les-r-gles-de-la-visibilit-ont-chang-journaldune-368912ee/", "source": "journaldunet.com"}, {"title": "Nouveauté Google Search: Camping Paradis sur TF1 : une actrice chouchoute d’Ici tout commence débarque au camping ce lundi 31 août !", "url": "https://news.seoschweiz.net/fr/news/camping-paradis-sur-tf1-une-actrice-chouchoute-d-ici-tout-commence-d-b-550031ad/", "source": "Télé Star"}, {"title": "SEO Suisse Update: Mimie Mathy : qu’est-ce que le syndrome de la queue de cheval qui l’empêche désormais de marcher ?", "url": "https://news.seoschweiz.net/fr/news/mimie-mathy-qu-est-ce-que-le-syndrome-de-la-queue-de-cheval-qui-l-emp--3cebc97c/", "source": "Télé Star"}];

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

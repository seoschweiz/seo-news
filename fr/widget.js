
(function() {

var items = [{"title": "Nouveauté Google Search: Google, YouTube, Amazon : les règles de la visibilité ont changé", "url": "https://news.seoschweiz.net/fr/news/google-youtube-amazon-les-r-gles-de-la-visibilit-ont-chang-journaldune-368912ee/", "source": "journaldunet.com"}, {"title": "Nouveauté Google Search: Camping Paradis sur TF1 : une actrice chouchoute d’Ici tout commence débarque au camping ce lundi 31 août !", "url": "https://news.seoschweiz.net/fr/news/camping-paradis-sur-tf1-une-actrice-chouchoute-d-ici-tout-commence-d-b-550031ad/", "source": "Télé Star"}, {"title": "SEO Suisse Update: Mimie Mathy : qu’est-ce que le syndrome de la queue de cheval qui l’empêche désormais de marcher ?", "url": "https://news.seoschweiz.net/fr/news/mimie-mathy-qu-est-ce-que-le-syndrome-de-la-queue-de-cheval-qui-l-emp--3cebc97c/", "source": "Télé Star"}, {"title": "Nouveauté Google Search: Amazon mise sur l’AI commerce : faut-il craindre que l’achat se fasse dans l’agent avant votre site - Info-...", "url": "https://news.seoschweiz.net/fr/news/amazon-mise-sur-l-ai-commerce-faut-il-craindre-que-l-achat-se-fasse-da-97b8d8ab/", "source": "Info-Ecommerce"}, {"title": "Mise à jour SEO: C à vous : horaire, chroniqueurs, replay, direct… guide complet de l’émission d’Anne-Elizabeth Lemoine sur...", "url": "https://news.seoschweiz.net/fr/news/c-vous-horaire-chroniqueurs-replay-direct-guide-complet-de-l-mission-d-d72134b5/", "source": "Télé Star"}];

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

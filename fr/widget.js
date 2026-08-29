
(function() {

var items = [{"title": "Mise à jour SEO: C à vous : horaire, chroniqueurs, replay, direct… guide complet de l’émission d’Anne-Elizabeth Lemoine sur...", "url": "https://news.seoschweiz.net/fr/news/c-vous-horaire-chroniqueurs-replay-direct-guide-complet-de-l-mission-d-d72134b5/", "source": "Télé Star"}, {"title": "Actualité SEO: TBT9 : horaire, replay, chroniqueurs, audience, direct… guide complet de l’émission de Cyril Hanouna sur W9", "url": "https://news.seoschweiz.net/fr/news/tbt9-horaire-replay-chroniqueurs-audience-direct-guide-complet-de-l-mi-f2da288c/", "source": "Télé Star"}, {"title": "Nouveauté Google Search: Fin des liens directs dans les résultats Google : ce qui change pour l’analyse SEO", "url": "https://news.seoschweiz.net/fr/news/fin-des-liens-directs-dans-les-r-sultats-google-ce-qui-change-pour-l-a-265c4797/", "source": "blogdumoderateur.com"}, {"title": "Mise à jour SEO: Fort Boyard : pourquoi un épisode inédit est diffusé ce jeudi 27 août sur France 2", "url": "https://news.seoschweiz.net/fr/news/fort-boyard-pourquoi-un-pisode-in-dit-est-diffus-ce-jeudi-27-ao-t-sur--7640f209/", "source": "Télé Star"}, {"title": "Nouveauté Google Search: Fort Boyard : Emmanuel Petit, Priscilla Betti… quelles personnalités participent ce jeudi 27 août ?", "url": "https://news.seoschweiz.net/fr/news/fort-boyard-emmanuel-petit-priscilla-betti-quelles-personnalit-s-parti-3ec0ce38/", "source": "Télé Star"}];

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

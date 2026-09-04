
(function() {

var items = [{"title": "Nouvelle évolution SEO: PARIS : L’évolution du SEO à l’ère de l’intelligence artificielle - Mohsen AVID décrypte les nouveaux enjeu...", "url": "https://news.seoschweiz.net/fr/news/paris-l-volution-du-seo-l-re-de-l-intelligence-artificielle-mohsen-avi-7d50eb8c/", "source": "Presse Agence"}, {"title": "Nouveauté Google Search: Les résumés IA de Google font-ils perdre du trafic ? Ce que la Belgique a vécu avant la France - Info-lux.com", "url": "https://news.seoschweiz.net/fr/news/les-r-sum-s-ia-de-google-font-ils-perdre-du-trafic-ce-que-la-belgique--8c4a3d41/", "source": "Info-lux.com"}, {"title": "Actualité du référencement: SEO : La visibilité des PME françaises face à la montée des IA", "url": "https://news.seoschweiz.net/fr/news/seo-la-visibilit-des-pme-fran-aises-face-la-mont-e-des-ia-presse-agenc-91256078/", "source": "Presse Agence"}, {"title": "SEO Suisse Update: ▷ Google répond sans vous, le SEO doit changer de rôle", "url": "https://news.seoschweiz.net/fr/news/google-r-pond-sans-vous-le-seo-doit-changer-de-r-le-webmarketing-co-m-8da435f6/", "source": "Webmarketing & co'm"}, {"title": "Nouvelle évolution SEO: Pilot’in fusionne avec Les Imageurs et renforce son ancrage régional - lyon-entreprises.com", "url": "https://news.seoschweiz.net/fr/news/pilot-in-fusionne-avec-les-imageurs-et-renforce-son-ancrage-r-gional-l-2abca09c/", "source": "lyon-entreprises.com"}];

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

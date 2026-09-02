
(function() {

var items = [{"title": "SEO Suíça Update: Criador de Drawn to the Fire Se Despede da Shonen Jump Após Cancelamento: “Tenho Arrependimentos”", "url": "https://news.seoschweiz.net/pt/news/criador-de-drawn-to-the-fire-se-despede-da-shonen-jump-ap-s-cancelamen-55288c45/", "source": "Coluna Tech"}, {"title": "SEO Suíça Update: SME: especialização EAD gratuita em Educação Especial abre 2 mil vagas", "url": "https://news.seoschweiz.net/pt/news/sme-especializa-o-ead-gratuita-em-educa-o-especial-abre-2-mil-vagas-ho-c7da6a66/", "source": "Hora Brasil"}, {"title": "Atualidade SEO: GEO PR: Yara Rocca Comunicação une assessoria de imprensa, mapa semântico e inteligência artificial para…", "url": "https://news.seoschweiz.net/pt/news/geo-pr-yara-rocca-comunica-o-une-assessoria-de-imprensa-mapa-sem-ntico-9c2e7360/", "source": "Jornal do Brás"}, {"title": "Novidade SEO: MEC abre 3 mil vagas em curso EAD em EJA e Educação Especial Inclusiva", "url": "https://news.seoschweiz.net/pt/news/mec-abre-3-mil-vagas-em-curso-ead-em-eja-e-educa-o-especial-inclusiva--13fb3037/", "source": "Hora Brasil"}, {"title": "Nova atualização Google Search: Google leva carrosséis de links para o AI Mode em tópicos em evolução", "url": "https://news.seoschweiz.net/pt/news/google-leva-carross-is-de-links-para-o-ai-mode-em-t-picos-em-evolu-o-i-d557b70b/", "source": "iMasters"}];

var widgetTitle = "Notícias SEO Suíça";

var widgetAll = "Ver todas as notícias SEO →";

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

html += '<a href="https://news.seoschweiz.net/pt/" target="_blank" rel="noopener" style="font-weight:bold;text-decoration:none;color:#c00000;">';

html += widgetAll;

html += '</a>';

html += '</div>';

html += '</div>';

document.write(html);

})();

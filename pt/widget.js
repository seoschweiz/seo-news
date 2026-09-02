
(function() {

var items = [{"title": "SEO Suíça Update: GEO PR: Yara Rocca Comunicação une assessoria de imprensa, mapa semântico e inteligência artificial para…", "url": "https://news.seoschweiz.net/pt/news/geo-pr-yara-rocca-comunica-o-une-assessoria-de-imprensa-mapa-sem-ntico-e4d8ae96/", "source": "Sala da Notícia"}, {"title": "SEO Suíça Update: Google Search Console libera para todos o relatório de IA e o controle para bloquear AI Overviews", "url": "https://news.seoschweiz.net/pt/news/google-search-console-libera-para-todos-o-relat-rio-de-ia-e-o-controle-3a3a4d5f/", "source": "iMasters"}, {"title": "Novidade SEO: MEC abre 3 mil vagas em curso EAD em EJA e Educação Especial Inclusiva", "url": "https://news.seoschweiz.net/pt/news/mec-abre-3-mil-vagas-em-curso-ead-em-eja-e-educa-o-especial-inclusiva--13fb3037/", "source": "Hora Brasil"}, {"title": "Nova atualização Google Search: Google leva carrosséis de links para o AI Mode em tópicos em evolução", "url": "https://news.seoschweiz.net/pt/news/google-leva-carross-is-de-links-para-o-ai-mode-em-t-picos-em-evolu-o-i-d557b70b/", "source": "iMasters"}];

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

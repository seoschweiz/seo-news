
(function() {

var items = [{"title": "Novidade SEO: Google News está sumindo com conteúdo indexado da aba de notícias, e ninguém achou o padrão", "url": "https://news.seoschweiz.net/pt/news/google-news-est-sumindo-com-conte-do-indexado-da-aba-de-not-cias-e-nin-80e8a892/", "source": "iMasters"}, {"title": "Nova atualização Google Search: Adobe adquire startup indiana Rilo focada em inteligência de mercado", "url": "https://news.seoschweiz.net/pt/news/adobe-adquire-startup-indiana-rilo-focada-em-intelig-ncia-de-mercado-b-c4e71162/", "source": "boainformacao.com.br"}, {"title": "Novidade SEO: Terminam amanhã as inscrições para curso de graduação na UFGD", "url": "https://news.seoschweiz.net/pt/news/terminam-amanh-as-inscri-es-para-curso-de-gradua-o-na-ufgd-hora-brasil-ac06e831/", "source": "Hora Brasil"}, {"title": "SEO Suíça Update: SME: especialização EAD gratuita em Educação Especial abre 2 mil vagas", "url": "https://news.seoschweiz.net/pt/news/sme-especializa-o-ead-gratuita-em-educa-o-especial-abre-2-mil-vagas-ho-c7da6a66/", "source": "Hora Brasil"}, {"title": "Atualidade SEO: GEO PR: Yara Rocca Comunicação une assessoria de imprensa, mapa semântico e inteligência artificial para…", "url": "https://news.seoschweiz.net/pt/news/geo-pr-yara-rocca-comunica-o-une-assessoria-de-imprensa-mapa-sem-ntico-6bca74ff/", "source": "Portal Revista Kdea 360"}];

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

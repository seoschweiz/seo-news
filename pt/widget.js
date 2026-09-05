
(function() {

var items = [{"title": "Novo desenvolvimento SEO: IFSP abre inscrições para especialização em Logística e Operações", "url": "https://news.seoschweiz.net/pt/news/ifsp-abre-inscri-es-para-especializa-o-em-log-stica-e-opera-es-horabra-a6fbfd9f/", "source": "horabrasil.com.br"}, {"title": "SEO Update: ProEF: MEC abre 480 vagas para pós-graduação em Educação Física", "url": "https://news.seoschweiz.net/pt/news/proef-mec-abre-480-vagas-para-p-s-gradua-o-em-educa-o-f-sica-horabrasi-44100cbd/", "source": "horabrasil.com.br"}, {"title": "Novidade SEO: Google News está sumindo com conteúdo indexado da aba de notícias, e ninguém achou o padrão", "url": "https://news.seoschweiz.net/pt/news/google-news-est-sumindo-com-conte-do-indexado-da-aba-de-not-cias-e-nin-80e8a892/", "source": "iMasters"}, {"title": "SEO Suíça Update: 37 Cursos de Informática Online Gratuitos para Transformar Seu Currículo", "url": "https://news.seoschweiz.net/pt/news/37-cursos-de-inform-tica-online-gratuitos-para-transformar-seu-curr-cu-945e8b83/", "source": "Drops de Jogos"}, {"title": "Nova atualização Google Search: Adobe adquire startup indiana Rilo focada em inteligência de mercado", "url": "https://news.seoschweiz.net/pt/news/adobe-adquire-startup-indiana-rilo-focada-em-intelig-ncia-de-mercado-b-c4e71162/", "source": "Boa Informação"}];

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

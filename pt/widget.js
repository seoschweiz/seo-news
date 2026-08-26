
(function() {

var items = [{"title": "Nova atualização Google Search: Google corrige bug de favicon e crawl stats do Search Console", "url": "https://news.seoschweiz.net/pt/news/google-corrige-bug-de-favicon-e-crawl-stats-do-search-console-imasters-2aa71eba/", "source": "iMasters"}, {"title": "SEO Update: Google reduz exibição do carousel de vídeos na busca e afeta descoberta de conteúdo técnico", "url": "https://news.seoschweiz.net/pt/news/google-reduz-exibi-o-do-carousel-de-v-deos-na-busca-e-afeta-descoberta-3f301488/", "source": "iMasters"}, {"title": "Nova atualização Google Search: Google corrige bug que apagou favicons dos resultados de busca", "url": "https://news.seoschweiz.net/pt/news/google-corrige-bug-que-apagou-favicons-dos-resultados-de-busca-imaster-992bb05c/", "source": "iMasters"}, {"title": "SEO Suíça Update: Google confirma: não há rollout de update antes do anúncio oficial", "url": "https://news.seoschweiz.net/pt/news/google-confirma-n-o-h-rollout-de-update-antes-do-an-ncio-oficial-imast-e3e4d297/", "source": "iMasters"}, {"title": "Novidade SEO: MEC oferece curso gratuito de segurança digital com certificado", "url": "https://news.seoschweiz.net/pt/news/mec-oferece-curso-gratuito-de-seguran-a-digital-com-certificado-hora-b-f7834ca3/", "source": "Hora Brasil"}];

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

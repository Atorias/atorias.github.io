import{_ as n,o as s,c as a,a as e}from"./app-QlNul8DB.js";const t={},i=e(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>nginx</span></a></h1><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/src
<span class="token function">wget</span> https://nginx.org/download/nginx-1.25.4.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.25.4.tar.gz
<span class="token function">mv</span> nginx-1.25.4 nginx
<span class="token builtin class-name">cd</span> nginx
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --pid-path<span class="token operator">=</span>/var/run/nginx/nginx.pid <span class="token punctuation">\\</span>
    --lock-path<span class="token operator">=</span>/var/lock/nginx.lock <span class="token punctuation">\\</span>
    --error-log-path<span class="token operator">=</span>/var/log/nginx/error.log <span class="token punctuation">\\</span>
    --http-log-path<span class="token operator">=</span>/var/log/nginx/access.log <span class="token punctuation">\\</span>
    --with-http_gzip_static_module <span class="token punctuation">\\</span>
    --http-client-body-temp-path<span class="token operator">=</span>/var/temp/nginx/client <span class="token punctuation">\\</span>
    --http-proxy-temp-path<span class="token operator">=</span>/var/temp/nginx/proxy <span class="token punctuation">\\</span>
    --http-fastcgi-temp-path<span class="token operator">=</span>/var/temp/nginx/fastcgi <span class="token punctuation">\\</span>
    --http-uwsgi-temp-path<span class="token operator">=</span>/var/temp/nginx/uwsgi <span class="token punctuation">\\</span>
    --http-scgi-temp-path<span class="token operator">=</span>/var/temp/nginx/scgi <span class="token punctuation">\\</span>
    --with-http_stub_status_module <span class="token punctuation">\\</span>
    --with-http_ssl_module <span class="token punctuation">\\</span>
    --with-openssl<span class="token operator">=</span>/usr/local/src/openssl

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/nginx/sbin/nginx /usr/bin/nginx
nginx <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function l(o,c){return s(),a("div",null,p)}const u=n(t,[["render",l],["__file","nginx.html.vue"]]),d=JSON.parse('{"path":"/compile/nginx.html","title":"nginx","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"filePathRelative":"compile/nginx.md"}');export{u as comp,d as data};

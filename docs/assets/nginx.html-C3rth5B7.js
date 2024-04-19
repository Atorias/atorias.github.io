import{_ as a,r as e,o as t,c as i,b as n,d as l,e as c,a as o}from"./app-DtkUBie_.js";const p={},r=n("h1",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx"},[n("span",null,"nginx")])],-1),d=n("h2",{id:"需要阅读的文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#需要阅读的文档"},[n("span",null,"需要阅读的文档")])],-1),u={href:"https://nginx.org/en/docs/",target:"_blank",rel:"noopener noreferrer"},v=o(`<h2 id="nginx-service" tabindex="-1"><a class="header-anchor" href="#nginx-service"><span>nginx.service</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target remote-fs.target nss-lookup.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/var/run/nginx/nginx.pid
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-t</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> quit
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主要编译参数" tabindex="-1"><a class="header-anchor" href="#主要编译参数"><span>主要编译参数</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 默认安装位置</span>
<span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-conf完整配置" tabindex="-1"><a class="header-anchor" href="#nginx-conf完整配置"><span>nginx.conf完整配置</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>user       www www<span class="token punctuation">;</span>  <span class="token comment">## Default: nobody</span>
worker_processes  <span class="token number">8</span><span class="token punctuation">;</span>  <span class="token comment">## cat /proc/cpuinfo|grep &quot;cpu cores&quot;|uniq</span>
error_log  logs/error.log<span class="token punctuation">;</span>
pid        /var/run/nginx/nginx.pid<span class="token punctuation">;</span>
worker_rlimit_nofile <span class="token number">8192</span><span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
  worker_connections  <span class="token number">4096</span><span class="token punctuation">;</span>  <span class="token comment">## Default: 1024</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
  include    conf/mime.types<span class="token punctuation">;</span>
  include    /etc/nginx/proxy.conf<span class="token punctuation">;</span>
  include    /etc/nginx/fastcgi.conf<span class="token punctuation">;</span>
  index    index.html index.htm index.php<span class="token punctuation">;</span>

  default_type application/octet-stream<span class="token punctuation">;</span>
  log_format   main <span class="token string">&#39;$remote_addr - $remote_user [$time_local]  $status &#39;</span>
    <span class="token string">&#39;&quot;$request&quot; $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>
  access_log   logs/access.log  main<span class="token punctuation">;</span>
  sendfile     on<span class="token punctuation">;</span>
  tcp_nopush   on<span class="token punctuation">;</span>
  server_names_hash_bucket_size <span class="token number">128</span><span class="token punctuation">;</span> <span class="token comment"># this seems to be required for some vhosts</span>

  server <span class="token punctuation">{</span> <span class="token comment"># php/fastcgi</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  domain1.com www.domain1.com<span class="token punctuation">;</span>
    access_log   logs/domain1.access.log  main<span class="token punctuation">;</span>
    root         html<span class="token punctuation">;</span>

    location ~ <span class="token punctuation">\\</span>.php$ <span class="token punctuation">{</span>
      fastcgi_pass   <span class="token number">127.0</span>.0.1:1025<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  server <span class="token punctuation">{</span> <span class="token comment"># simple reverse-proxy</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  domain2.com www.domain2.com<span class="token punctuation">;</span>
    access_log   logs/domain2.access.log  main<span class="token punctuation">;</span>

    <span class="token comment"># serve static files</span>
    location ~ ^/<span class="token punctuation">(</span>images<span class="token operator">|</span>javascript<span class="token operator">|</span>js<span class="token operator">|</span>css<span class="token operator">|</span>flash<span class="token operator">|</span>media<span class="token operator">|</span>static<span class="token punctuation">)</span>/  <span class="token punctuation">{</span>
      root    /var/www/virtual/big.server.com/htdocs<span class="token punctuation">;</span>
      expires 30d<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># pass requests for dynamic content to rails/turbogears/zope, et al</span>
    location / <span class="token punctuation">{</span>
      proxy_pass      http://127.0.0.1:8080<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  upstream big_server_com <span class="token punctuation">{</span>
    server <span class="token number">127.0</span>.0.3:8000 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
    server <span class="token number">127.0</span>.0.3:8001 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
    server <span class="token number">192.168</span>.0.1:8000<span class="token punctuation">;</span>
    server <span class="token number">192.168</span>.0.1:8001<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  server <span class="token punctuation">{</span> <span class="token comment"># simple load balancing</span>
    listen          <span class="token number">80</span><span class="token punctuation">;</span>
    server_name     big.server.com<span class="token punctuation">;</span>
    access_log      logs/big.server.access.log main<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
      proxy_pass      http://big_server_com<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="location-匹配分析" tabindex="-1"><a class="header-anchor" href="#location-匹配分析"><span>location 匹配分析</span></a></h2><h3 id="匹配符号" tabindex="-1"><a class="header-anchor" href="#匹配符号"><span>匹配符号</span></a></h3><p><code>location [=|~|~*|^~|@] /uri/ { … }</code></p><table><thead><tr><th style="text-align:left;">符号</th><th style="text-align:left;">类型</th><th style="text-align:left;">规则</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">~</td><td style="text-align:left;">正则</td><td style="text-align:left;">正则</td><td style="text-align:left;">大小写敏感</td></tr><tr><td style="text-align:left;">~*</td><td style="text-align:left;">正则</td><td style="text-align:left;">正则</td><td style="text-align:left;">大小写不敏感</td></tr><tr><td style="text-align:left;">=</td><td style="text-align:left;">普通</td><td style="text-align:left;">严格匹配</td><td style="text-align:left;">匹配到就直接结束</td></tr><tr><td style="text-align:left;">/a/b</td><td style="text-align:left;">普通</td><td style="text-align:left;">最大匹配</td><td style="text-align:left;">匹配到以后，还要跟正则battle</td></tr><tr><td style="text-align:left;">/a/b.html</td><td style="text-align:left;">普通</td><td style="text-align:left;">严格撇屁</td><td style="text-align:left;">匹配到以后就直接结束</td></tr><tr><td style="text-align:left;">^~</td><td style="text-align:left;">普通</td><td style="text-align:left;">最大匹配</td><td style="text-align:left;">普通匹配直接battle获胜，直接结束</td></tr></tbody></table><p>引用文档 <a href="%5Bhttps://%5D(https://www.cnblogs.com/lidabo/p/4169396.html)">Nginx之location匹配规则详解</a></p><ul><li>首先匹配普通location</li><li>当location指定了<code>^~</code>，则不继续匹配正则</li><li>当location<code>=</code>严格匹配上，则不继续匹配正则</li><li>正则location顺序匹配，且只要匹配到第一个就停止后面的匹配</li></ul><p>总结: 正则location匹配让步普通location的严格精确匹配结果；但覆盖普通location的最大前缀匹配结果</p><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root    /data/www<span class="token punctuation">;</span>
location / <span class="token punctuation">{</span>
  index  index.html index.htm<span class="token punctuation">;</span>
  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location /&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 先考虑 1,2,3,4,5 </span>
<span class="token comment"># 匹配到2</span>
<span class="token comment"># 如果匹配上1,4,则继续匹配正则6,7 </span>
<span class="token comment"># 如果6,7满足则停止，如果不满足则按1,4的顺序来，先满足先匹配</span>

<span class="token comment"># 1</span>
location /abc/ <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location /acc/&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 2</span>
location <span class="token operator">=</span> /accd <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location = /accd&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 3</span>
location ^~ /accd/ <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location ^~ /accd/&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 4</span>
location /abcd/ <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location /ab/&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 5</span>
location <span class="token operator">=</span> /a <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location = /a&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 6</span>
location ~ ab <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location ~ ab&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 7</span>
location ~ a <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location ~ a&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function m(b,k){const s=e("ExternalLinkIcon");return t(),i("div",null,[r,d,n("p",null,[n("a",u,[l("nginx"),c(s)])]),v])}const h=a(p,[["render",m],["__file","nginx.html.vue"]]),x=JSON.parse('{"path":"/linux_tools/nginx.html","title":"nginx","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"需要阅读的文档","slug":"需要阅读的文档","link":"#需要阅读的文档","children":[]},{"level":2,"title":"nginx.service","slug":"nginx-service","link":"#nginx-service","children":[]},{"level":2,"title":"主要编译参数","slug":"主要编译参数","link":"#主要编译参数","children":[]},{"level":2,"title":"nginx.conf完整配置","slug":"nginx-conf完整配置","link":"#nginx-conf完整配置","children":[]},{"level":2,"title":"location 匹配分析","slug":"location-匹配分析","link":"#location-匹配分析","children":[{"level":3,"title":"匹配符号","slug":"匹配符号","link":"#匹配符号","children":[]}]}],"git":{"updatedTime":1713517137000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":3}]},"filePathRelative":"linux_tools/nginx.md"}');export{h as comp,x as data};

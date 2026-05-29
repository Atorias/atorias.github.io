import{_ as s,a,b as e,o as l}from"./app-BwP785Qz.js";const i={};function p(t,n){return l(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>nginx</span></a></h1><h2 id="编译指令" tabindex="-1"><a class="header-anchor" href="#编译指令"><span>编译指令</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> /usr/local/src</span>
<span class="line"><span class="token function">wget</span> https://nginx.org/download/nginx-1.25.4.tar.gz</span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.25.4.tar.gz</span>
<span class="line"><span class="token function">mv</span> nginx-1.25.4 nginx</span>
<span class="line"><span class="token builtin class-name">cd</span> nginx</span>
<span class="line">./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --pid-path<span class="token operator">=</span>/var/run/nginx/nginx.pid <span class="token punctuation">\\</span></span>
<span class="line">    --lock-path<span class="token operator">=</span>/var/lock/nginx.lock <span class="token punctuation">\\</span></span>
<span class="line">    --error-log-path<span class="token operator">=</span>/var/log/nginx/error.log <span class="token punctuation">\\</span></span>
<span class="line">    --http-log-path<span class="token operator">=</span>/var/log/nginx/access.log <span class="token punctuation">\\</span></span>
<span class="line">    --with-http_gzip_static_module <span class="token punctuation">\\</span></span>
<span class="line">    --http-client-body-temp-path<span class="token operator">=</span>/var/temp/nginx/client <span class="token punctuation">\\</span></span>
<span class="line">    --http-proxy-temp-path<span class="token operator">=</span>/var/temp/nginx/proxy <span class="token punctuation">\\</span></span>
<span class="line">    --http-fastcgi-temp-path<span class="token operator">=</span>/var/temp/nginx/fastcgi <span class="token punctuation">\\</span></span>
<span class="line">    --http-uwsgi-temp-path<span class="token operator">=</span>/var/temp/nginx/uwsgi <span class="token punctuation">\\</span></span>
<span class="line">    --http-scgi-temp-path<span class="token operator">=</span>/var/temp/nginx/scgi <span class="token punctuation">\\</span></span>
<span class="line">    --with-http_stub_status_module <span class="token punctuation">\\</span></span>
<span class="line">    --with-http_ssl_module <span class="token punctuation">\\</span></span>
<span class="line">    --with-openssl<span class="token operator">=</span>/usr/local/src/openssl <span class="token comment"># 不加就会用系统自带的openssl</span></span>
<span class="line"></span>
<span class="line"><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/nginx/sbin/nginx /usr/bin/nginx</span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/temp/nginx/client</span>
<span class="line">nginx <span class="token parameter variable">-V</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server-配置" tabindex="-1"><a class="header-anchor" href="#server-配置"><span>server 配置</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    listen <span class="token number">443</span> ssl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    ssl_certificate /etc/nginx/ssl/xinlantech.cn.pem<span class="token punctuation">;</span></span>
<span class="line">    ssl_certificate_key /etc/nginx/ssl/xinlantech.cn.key<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    server_name api.xinlantech.cn<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    client_max_body_size 50M<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    location / <span class="token punctuation">{</span></span>
<span class="line">        root /data/www/<span class="token punctuation">;</span></span>
<span class="line">        index index.html<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    location /static/ <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin class-name">alias</span> /data/www/<span class="token punctuation">;</span></span>
<span class="line">        index index.html<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span></span>
<span class="line">    include /etc/nginx/sites-enabled/*<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">location /12001/ <span class="token punctuation">{</span></span>
<span class="line">    add_header <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span> <span class="token variable">$http_origin</span><span class="token punctuation">;</span></span>
<span class="line">    add_header <span class="token string">&#39;Access-Control-Allow-Headers&#39;</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    add_header <span class="token string">&#39;Access-Control-Allow-Credentials&#39;</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    add_header <span class="token string">&#39;Access-Control-Allow-Methods&#39;</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_method</span> <span class="token operator">=</span> <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin class-name">return</span> <span class="token number">204</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    proxy_pass http://127.0.0.1:12001/<span class="token punctuation">;</span></span>
<span class="line">    proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span></span>
<span class="line">    proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span></span>
<span class="line">    proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span></span>
<span class="line">    proxy_set_header X-Forwarded-Proto <span class="token operator">&amp;</span>scheme<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 转发设置</span></span>
<span class="line">location /zcsh/ <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment"># 预检</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_method</span> <span class="token operator">=</span> <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        add_header <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span> <span class="token variable">$http_origin</span><span class="token punctuation">;</span></span>
<span class="line">        add_header <span class="token string">&#39;Access-Control-Allow-Methods&#39;</span> <span class="token string">&#39;GET,POST,PUT,DELETE,OPTIONS&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        add_header <span class="token string">&#39;Access-Control-Allow-Headers&#39;</span> <span class="token string">&#39;Authorization,Content-Type&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        add_header <span class="token string">&#39;Access-Control-Allow-Credentials&#39;</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        add_header <span class="token string">&#39;Content-Length&#39;</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        add_header <span class="token string">&#39;Content-Type&#39;</span> text/plain<span class="token punctuation">;</span></span>
<span class="line">        <span class="token builtin class-name">return</span> <span class="token number">204</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 所有真实请求都带 CORS 头</span></span>
<span class="line">    add_header <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span> <span class="token variable">$http_origin</span> always<span class="token punctuation">;</span></span>
<span class="line">    add_header <span class="token string">&#39;Access-Control-Allow-Credentials&#39;</span> <span class="token string">&#39;true&#39;</span> always<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    proxy_pass http://10.25.29.151:12001/<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span></span>
<span class="line">    proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span></span>
<span class="line">    proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span></span>
<span class="line">    proxy_set_header X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="需要阅读的文档" tabindex="-1"><a class="header-anchor" href="#需要阅读的文档"><span>需要阅读的文档</span></a></h2><p><a href="https://nginx.org/en/docs/" target="_blank" rel="noopener noreferrer">nginx</a></p><h2 id="nginx-service" tabindex="-1"><a class="header-anchor" href="#nginx-service"><span>nginx.service</span></a></h2><p>vim /lib/systemd/system/nginx.service systemctl enable /lib/systemd/system/nginx.service</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx</span>
<span class="line"><span class="token assign-left variable">After</span><span class="token operator">=</span>network.target remote-fs.target nss-lookup.target</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Type</span><span class="token operator">=</span>forking</span>
<span class="line"><span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/var/run/nginx/nginx.pid</span>
<span class="line"><span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-t</span></span>
<span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx</span>
<span class="line"><span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload</span>
<span class="line"><span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> quit</span>
<span class="line"><span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主要编译参数" tabindex="-1"><a class="header-anchor" href="#主要编译参数"><span>主要编译参数</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 默认安装位置</span></span>
<span class="line"><span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-conf完整配置" tabindex="-1"><a class="header-anchor" href="#nginx-conf完整配置"><span>nginx.conf完整配置</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">user       www www<span class="token punctuation">;</span>  <span class="token comment">## Default: nobody</span></span>
<span class="line">worker_processes  <span class="token number">8</span><span class="token punctuation">;</span>  <span class="token comment">## cat /proc/cpuinfo|grep &quot;cpu cores&quot;|uniq</span></span>
<span class="line">error_log  logs/error.log<span class="token punctuation">;</span></span>
<span class="line">pid        /var/run/nginx/nginx.pid<span class="token punctuation">;</span></span>
<span class="line">worker_rlimit_nofile <span class="token number">8192</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">events <span class="token punctuation">{</span></span>
<span class="line">  worker_connections  <span class="token number">4096</span><span class="token punctuation">;</span>  <span class="token comment">## Default: 1024</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">http <span class="token punctuation">{</span></span>
<span class="line">  include    conf/mime.types<span class="token punctuation">;</span></span>
<span class="line">  include    /etc/nginx/proxy.conf<span class="token punctuation">;</span></span>
<span class="line">  include    /etc/nginx/fastcgi.conf<span class="token punctuation">;</span></span>
<span class="line">  index    index.html index.htm index.php<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  default_type application/octet-stream<span class="token punctuation">;</span></span>
<span class="line">  log_format   main <span class="token string">&#39;$remote_addr - $remote_user [$time_local]  $status &#39;</span></span>
<span class="line">    <span class="token string">&#39;&quot;$request&quot; $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line">    <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  access_log   logs/access.log  main<span class="token punctuation">;</span></span>
<span class="line">  sendfile     on<span class="token punctuation">;</span></span>
<span class="line">  tcp_nopush   on<span class="token punctuation">;</span></span>
<span class="line">  server_names_hash_bucket_size <span class="token number">128</span><span class="token punctuation">;</span> <span class="token comment"># this seems to be required for some vhosts</span></span>
<span class="line"></span>
<span class="line">  server <span class="token punctuation">{</span> <span class="token comment"># php/fastcgi</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    server_name  domain1.com www.domain1.com<span class="token punctuation">;</span></span>
<span class="line">    access_log   logs/domain1.access.log  main<span class="token punctuation">;</span></span>
<span class="line">    root         html<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    location ~ <span class="token punctuation">\\</span>.php$ <span class="token punctuation">{</span></span>
<span class="line">      fastcgi_pass   <span class="token number">127.0</span>.0.1:1025<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  server <span class="token punctuation">{</span> <span class="token comment"># simple reverse-proxy</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    server_name  domain2.com www.domain2.com<span class="token punctuation">;</span></span>
<span class="line">    access_log   logs/domain2.access.log  main<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># serve static files</span></span>
<span class="line">    location ~ ^/<span class="token punctuation">(</span>images<span class="token operator">|</span>javascript<span class="token operator">|</span>js<span class="token operator">|</span>css<span class="token operator">|</span>flash<span class="token operator">|</span>media<span class="token operator">|</span>static<span class="token punctuation">)</span>/  <span class="token punctuation">{</span></span>
<span class="line">      root    /var/www/virtual/big.server.com/htdocs<span class="token punctuation">;</span></span>
<span class="line">      expires 30d<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># pass requests for dynamic content to rails/turbogears/zope, et al</span></span>
<span class="line">    location / <span class="token punctuation">{</span></span>
<span class="line">      proxy_pass      http://127.0.0.1:8080<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  upstream big_server_com <span class="token punctuation">{</span></span>
<span class="line">    server <span class="token number">127.0</span>.0.3:8000 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line">    server <span class="token number">127.0</span>.0.3:8001 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line">    server <span class="token number">192.168</span>.0.1:8000<span class="token punctuation">;</span></span>
<span class="line">    server <span class="token number">192.168</span>.0.1:8001<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  server <span class="token punctuation">{</span> <span class="token comment"># simple load balancing</span></span>
<span class="line">    listen          <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    server_name     big.server.com<span class="token punctuation">;</span></span>
<span class="line">    access_log      logs/big.server.access.log main<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    location / <span class="token punctuation">{</span></span>
<span class="line">      proxy_pass      http://big_server_com<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="location-匹配分析" tabindex="-1"><a class="header-anchor" href="#location-匹配分析"><span>location 匹配分析</span></a></h2><h3 id="匹配符号" tabindex="-1"><a class="header-anchor" href="#匹配符号"><span>匹配符号</span></a></h3><p><code>location [=|~|~*|^~|@] /uri/ { … }</code></p><table><thead><tr><th style="text-align:left;">符号</th><th style="text-align:left;">类型</th><th style="text-align:left;">规则</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">~</td><td style="text-align:left;">正则</td><td style="text-align:left;">正则</td><td style="text-align:left;">大小写敏感</td></tr><tr><td style="text-align:left;">~*</td><td style="text-align:left;">正则</td><td style="text-align:left;">正则</td><td style="text-align:left;">大小写不敏感</td></tr><tr><td style="text-align:left;">=</td><td style="text-align:left;">普通</td><td style="text-align:left;">严格匹配</td><td style="text-align:left;">匹配到就直接结束</td></tr><tr><td style="text-align:left;">/a/b</td><td style="text-align:left;">普通</td><td style="text-align:left;">最大匹配</td><td style="text-align:left;">匹配到以后，还要跟正则battle</td></tr><tr><td style="text-align:left;">/a/b.html</td><td style="text-align:left;">普通</td><td style="text-align:left;">严格匹配</td><td style="text-align:left;">匹配到以后就直接结束</td></tr><tr><td style="text-align:left;">^~</td><td style="text-align:left;">普通</td><td style="text-align:left;">最大匹配</td><td style="text-align:left;">普通匹配直接battle获胜，直接结束</td></tr></tbody></table><p>引用文档 <a href="%5Bhttps://%5D(https://www.cnblogs.com/lidabo/p/4169396.html)">Nginx之location匹配规则详解</a></p><ul><li>首先匹配普通location</li><li>当location指定了<code>^~</code>，则不继续匹配正则</li><li>当location<code>=</code>严格匹配上，则不继续匹配正则</li><li>当location<code>/a/b/c.html</code>正好匹配上，则不继续匹配正则</li><li>正则location顺序匹配，且只要匹配到第一个就停止后面的匹配</li></ul><p>总结: 正则location匹配让步普通location的严格精确匹配结果；但覆盖普通location的最大前缀匹配结果</p><p>示例：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">root    /data/www<span class="token punctuation">;</span></span>
<span class="line">location / <span class="token punctuation">{</span></span>
<span class="line">  index  index.html index.htm<span class="token punctuation">;</span></span>
<span class="line">  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location /&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 先考虑 1,2,3,4,5 </span></span>
<span class="line"><span class="token comment"># 匹配到2</span></span>
<span class="line"><span class="token comment"># 如果匹配上1,4,则继续匹配正则6,7 </span></span>
<span class="line"><span class="token comment"># 如果6,7满足则停止，如果不满足则按1,4的顺序来，先满足先匹配</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 1</span></span>
<span class="line">location /abc/ <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location /acc/&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2</span></span>
<span class="line">location <span class="token operator">=</span> /accd <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location = /accd&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3</span></span>
<span class="line">location ^~ /accd/ <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location ^~ /accd/&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4</span></span>
<span class="line">location /abcd/ <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location /ab/&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5</span></span>
<span class="line">location <span class="token operator">=</span> /a <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location = /a&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 6</span></span>
<span class="line">location ~ ab <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location ~ ab&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 7</span></span>
<span class="line">location ~ a <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;location ~ a&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)])])}const o=s(i,[["render",p]]),r=JSON.parse('{"path":"/linux_tools/nginx.html","title":"nginx","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"编译指令","slug":"编译指令","link":"#编译指令","children":[]},{"level":2,"title":"server 配置","slug":"server-配置","link":"#server-配置","children":[]},{"level":2,"title":"需要阅读的文档","slug":"需要阅读的文档","link":"#需要阅读的文档","children":[]},{"level":2,"title":"nginx.service","slug":"nginx-service","link":"#nginx-service","children":[]},{"level":2,"title":"主要编译参数","slug":"主要编译参数","link":"#主要编译参数","children":[]},{"level":2,"title":"nginx.conf完整配置","slug":"nginx-conf完整配置","link":"#nginx-conf完整配置","children":[]},{"level":2,"title":"location 匹配分析","slug":"location-匹配分析","link":"#location-匹配分析","children":[{"level":3,"title":"匹配符号","slug":"匹配符号","link":"#匹配符号","children":[]}]}],"git":{"updatedTime":1776137274000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":8,"url":"https://github.com/OldWitch"}]},"filePathRelative":"linux_tools/nginx.md"}');export{o as comp,r as data};

import{_ as n,a,b as e,o as l}from"./app-BwP785Qz.js";const i={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>docker</span></a></h1><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>install</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 更新依赖</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> update</span>
<span class="line"><span class="token comment"># 下载证书</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker-ce.gpg http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg</span>
<span class="line"><span class="token comment"># 添加镜像源</span></span>
<span class="line">add-apt-repository <span class="token string">&quot;deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span></span>
<span class="line"><span class="token comment"># 安装</span></span>
<span class="line"><span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io</span>
<span class="line"><span class="token comment"># 添加国内仓库</span></span>
<span class="line"><span class="token function">vim</span> /etc/docker/daemon.json</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;registry-mirrors&quot;</span> <span class="token builtin class-name">:</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&quot;https://docker.m.daocloud.io&quot;</span>,</span>
<span class="line">      <span class="token string">&quot;https://noohub.ru&quot;</span>,</span>
<span class="line">      <span class="token string">&quot;https://huecker.io&quot;</span>,</span>
<span class="line">      <span class="token string">&quot;https://dockerhub.timeweb.cloud&quot;</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">systemctl start <span class="token function">docker</span></span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h2><h3 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb"><span>mongodb</span></a></h3><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line">docker run --name mongodb -d --privileged=true </span>
<span class="line">--restart=always</span>
<span class="line">-v C:\\\\Users\\\\Administrator\\\\Desktop\\\\docker_data\\\\mongo\\\\data:/data/db</span>
<span class="line">-v C:\\\\Users\\\\Administrator\\\\Desktop\\\\docker_data\\\\mongo\\\\logs:/data/logs/</span>
<span class="line">-p 27017:27017</span>
<span class="line">-e MONGO_INITDB_ROOT_USERNAME=root</span>
<span class="line">-e MONGO_INITDB_ROOT_PASSWORD=root</span>
<span class="line">mongo:latest </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mssql" tabindex="-1"><a class="header-anchor" href="#mssql"><span>mssql</span></a></h3><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line">docker run -e &quot;ACCEPT_EULA=Y&quot; -e &quot;MSSQL_SA_PASSWORD=&lt;YourStrong@Passw0rd&gt;&quot; </span>
<span class="line">-v C:\\Users\\Administrator\\Desktop\\docker_data\\mssql:/var/opt/mssql/data </span>
<span class="line">-p 13199:1433 </span>
<span class="line">--name sql1 </span>
<span class="line">--hostname sql1 </span>
<span class="line">-d mcr.microsoft.com/mssql/server:2022-latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis7-2" tabindex="-1"><a class="header-anchor" href="#redis7-2"><span>redis7.2</span></a></h3><p>使用 <a href="./redis.conf">配置文件</a></p><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line">docker run -p 6379:6379 --name redis72 </span>
<span class="line">-v C:\\Users\\Administrator\\Desktop\\docker_data\\redis72\\redis.conf:/etc/redis/redis.conf </span>
<span class="line">-v C:\\Users\\Administrator\\Desktop\\docker_data\\redis72\\data:/data:rw </span>
<span class="line">--privileged=true </span>
<span class="line">-d redis redis-server /etc/redis/redis.conf </span>
<span class="line">--appendonly yes</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>mysql</span></a></h3><p>mysql8</p><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line">docker run -p 3306:3306 --name mysql8.3.0 </span>
<span class="line">-v C:\\Users\\Administrator\\Desktop\\docker_data\\mysql8.3.0/mysql-files:/var/lib/mysql-files </span>
<span class="line">-v C:\\Users\\Administrator\\Desktop\\docker_data\\mysql8.3.0/conf:/etc/mysql/conf.d </span>
<span class="line">-v C:\\Users\\Administrator\\Desktop\\docker_data\\mysql8.3.0/logs:/var/log/mysql </span>
<span class="line">-v C:\\Users\\Administrator\\Desktop\\docker_data\\mysql8.3.0/data:/var/lib/mysql </span>
<span class="line">-e MYSQL_ROOT_PASSWORD=root </span>
<span class="line">-d mysql:latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 针对mysql9</span></span>
<span class="line">ALTER USER &#39;root&#39;@&#39;%&#39; IDENTIFIED WITH caching_sha2_password BY &#39;root&#39;;</span>
<span class="line">FLUSH PRIVILEGES;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mysql5.5</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> mysql55 ^</span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root ^</span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">23309</span>:3306 ^</span>
<span class="line">  <span class="token parameter variable">-v</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>docker_data<span class="token punctuation">\\</span>mysql55<span class="token punctuation">\\</span>data:/var/lib/mysql ^</span>
<span class="line">  <span class="token parameter variable">-v</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>docker_data<span class="token punctuation">\\</span>mysql55<span class="token punctuation">\\</span>conf:/etc/mysql ^</span>
<span class="line">  <span class="token parameter variable">-v</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>docker_data<span class="token punctuation">\\</span>mysql55<span class="token punctuation">\\</span>conf.d:/etc/mysql/conf.d ^</span>
<span class="line">  <span class="token parameter variable">-v</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>docker_data<span class="token punctuation">\\</span>mysql55<span class="token punctuation">\\</span>logs:/var/log/mysql ^</span>
<span class="line">  mysql:5.5</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用127.0.0.1连接</p><h3 id="ubuntu-20-04" tabindex="-1"><a class="header-anchor" href="#ubuntu-20-04"><span>ubuntu 20.04</span></a></h3><p>image <code>ecpe4s/ubuntu20.04:latest</code></p><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line">docker  run -it  --name ubuntu20.04 ecpe4s/ubuntu20.04:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="centos" tabindex="-1"><a class="header-anchor" href="#centos"><span>centos</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建网络</span></span>
<span class="line"><span class="token function">docker</span> network create atlas</span>
<span class="line"><span class="token comment"># 创建容器</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> xxx <span class="token parameter variable">-v</span> xxx:xxx <span class="token parameter variable">--network</span> atlas imagename:tag</span>
<span class="line"><span class="token comment"># 提交容器为image</span></span>
<span class="line"><span class="token function">docker</span> commit container_id imagename:tag</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose-yaml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yaml"><span>docker-compose.yaml</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">version: <span class="token string">&quot;3.8&quot;</span></span>
<span class="line"><span class="token comment"># 定义服务ubuntu,mysql,redis</span></span>
<span class="line"><span class="token comment"># php-fpm和php-cli可以选着1个安装，看项目，2个一起安装也可以</span></span>
<span class="line"></span>
<span class="line">services:</span>
<span class="line"></span>
<span class="line">  redis:</span>
<span class="line">    image: redis:7.2.4</span>
<span class="line">    container_name: lnmp_redis</span>
<span class="line">    build: ./redis</span>
<span class="line">    volumes:</span>
<span class="line">      - ./redis/redis.conf/:/etc/redis.conf:ro</span>
<span class="line">      - ./redis/data:/usr/local/redis/data</span>
<span class="line">      - ./redis/redis.log:/usr/local/redis/redis.log</span>
<span class="line">    environment:</span>
<span class="line">      - <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai</span>
<span class="line">    ports:</span>
<span class="line">      - <span class="token string">&quot;6379:6379&quot;</span></span>
<span class="line">    command: <span class="token punctuation">[</span> <span class="token string">&quot;redis-server&quot;</span>, <span class="token string">&quot;/etc/redis.conf&quot;</span> <span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  mysql:</span>
<span class="line">    image: mysql:8.0</span>
<span class="line">    container_name: lnmp_mysql</span>
<span class="line">    volumes:</span>
<span class="line">      - ./mysql/conf.d:/etc/mysql/my.cnf:ro</span>
<span class="line">      - ./mysql/data:/var/lib/mysql</span>
<span class="line">      - ./mysql/log:/data/mysql/logs</span>
<span class="line">    environment:</span>
<span class="line">      - <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root</span>
<span class="line">      - <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai</span>
<span class="line"><span class="token comment">#    platform: linux/x86_64 #针对mac M1芯片</span></span>
<span class="line">    ports:</span>
<span class="line">      - <span class="token string">&quot;3306:3306&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">networks:</span>
<span class="line">  frontend:</span>
<span class="line">  backend:</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器制作成镜像" tabindex="-1"><a class="header-anchor" href="#容器制作成镜像"><span>容器制作成镜像</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span></span>
<span class="line"><span class="token comment"># 容器-&gt;镜像</span></span>
<span class="line"><span class="token function">docker</span> commit <span class="token parameter variable">-a</span> <span class="token string">&quot;author_name&quot;</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;description&quot;</span> container_id imagename:tag</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows-desktop-无法启动" tabindex="-1"><a class="header-anchor" href="#windows-desktop-无法启动"><span>windows desktop 无法启动</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">net stop winnat</span>
<span class="line">net start winnat </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导出导入数据库" tabindex="-1"><a class="header-anchor" href="#导出导入数据库"><span>导出导入数据库</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 导出数据库</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> container_name <span class="token punctuation">\\</span></span>
<span class="line">  mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span> <span class="token punctuation">\\</span></span>
<span class="line">  --all-databases <span class="token punctuation">\\</span></span>
<span class="line">  --single-transaction <span class="token punctuation">\\</span></span>
<span class="line">  --hex-blob <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--routines</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--events</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token operator">&gt;</span> all.sql</span>
<span class="line"><span class="token comment"># 导入数据库</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> container_name <span class="token punctuation">\\</span></span>
<span class="line">  mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span> <span class="token punctuation">\\</span></span>
<span class="line">  --default-character-set<span class="token operator">=</span>utf8mb4 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token operator">&lt;</span> all.sql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30)])])}const r=n(i,[["render",p]]),d=JSON.parse('{"path":"/tools/docker.html","title":"docker","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"install","slug":"install","link":"#install","children":[]},{"level":2,"title":"实例","slug":"实例","link":"#实例","children":[{"level":3,"title":"mongodb","slug":"mongodb","link":"#mongodb","children":[]},{"level":3,"title":"mssql","slug":"mssql","link":"#mssql","children":[]},{"level":3,"title":"redis7.2","slug":"redis7-2","link":"#redis7-2","children":[]},{"level":3,"title":"mysql","slug":"mysql","link":"#mysql","children":[]},{"level":3,"title":"ubuntu 20.04","slug":"ubuntu-20-04","link":"#ubuntu-20-04","children":[]},{"level":3,"title":"centos","slug":"centos","link":"#centos","children":[]},{"level":3,"title":"docker-compose.yaml","slug":"docker-compose-yaml","link":"#docker-compose-yaml","children":[]}]},{"level":2,"title":"容器制作成镜像","slug":"容器制作成镜像","link":"#容器制作成镜像","children":[]},{"level":2,"title":"windows desktop 无法启动","slug":"windows-desktop-无法启动","link":"#windows-desktop-无法启动","children":[]},{"level":2,"title":"导出导入数据库","slug":"导出导入数据库","link":"#导出导入数据库","children":[]}],"git":{"updatedTime":1776137274000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":9,"url":"https://github.com/OldWitch"}]},"filePathRelative":"tools/docker.md"}');export{r as comp,d as data};

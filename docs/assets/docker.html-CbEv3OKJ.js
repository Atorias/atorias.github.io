import{_ as s,o as n,c as e,a}from"./app-BoQnz2iZ.js";const i={},l=a(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>docker</span></a></h1><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>install</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 更新依赖</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token comment"># 下载证书</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker-ce.gpg http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg
<span class="token comment"># 添加镜像源</span>
add-apt-repository <span class="token string">&quot;deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span>
<span class="token comment"># 安装</span>
<span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
<span class="token comment"># 添加国内仓库</span>
<span class="token function">vim</span> /etc/docker/daemon.json
<span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span> <span class="token builtin class-name">:</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;https://docker.m.daocloud.io&quot;</span>,
      <span class="token string">&quot;https://noohub.ru&quot;</span>,
      <span class="token string">&quot;https://huecker.io&quot;</span>,
      <span class="token string">&quot;https://dockerhub.timeweb.cloud&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
systemctl start <span class="token function">docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h2><h3 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb"><span>mongodb</span></a></h3><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code>docker run --name mongodb -d --privileged=true 
--restart=always
-v C:\\\\Users\\\\Administrator\\\\Desktop\\\\docker_data\\\\mongo\\\\data:/data/db
-v C:\\\\Users\\\\Administrator\\\\Desktop\\\\docker_data\\\\mongo\\\\logs:/data/logs/
-p 27017:27017
-e MONGO_INITDB_ROOT_USERNAME=root
-e MONGO_INITDB_ROOT_PASSWORD=root
mongo:latest 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mssql" tabindex="-1"><a class="header-anchor" href="#mssql"><span>mssql</span></a></h3><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code>docker run -e &quot;ACCEPT_EULA=Y&quot; -e &quot;MSSQL_SA_PASSWORD=&lt;YourStrong@Passw0rd&gt;&quot; 
-v C:\\Users\\Administrator\\Desktop\\docker_data\\mssql:/var/opt/mssql/data 
-p 13199:1433 
--name sql1 
--hostname sql1 
-d mcr.microsoft.com/mssql/server:2022-latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis7-2" tabindex="-1"><a class="header-anchor" href="#redis7-2"><span>redis7.2</span></a></h3><p>使用 <a href="./redis.conf">配置文件</a></p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code>docker run -p 6379:6379 --name redis72 
-v C:\\Users\\Administrator\\Desktop\\docker_data\\redis72\\redis.conf:/etc/redis/redis.conf 
-v C:\\Users\\Administrator\\Desktop\\docker_data\\redis72\\data:/data:rw 
--privileged=true 
-d redis redis-server /etc/redis/redis.conf 
--appendonly yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>mysql</span></a></h3><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code>docker run -p 3306:3306 --name mysql8.3.0 
-v C:\\Users\\Administrator\\Desktop\\docker_data\\mysql8.3.0/mysql-files:/var/lib/mysql-files 
-v C:\\Users\\Administrator\\Desktop\\docker_data\\mysql8.3.0/conf:/etc/mysql/conf.d 
-v C:\\Users\\Administrator\\Desktop\\docker_data\\mysql8.3.0/logs:/var/log/mysql 
-v C:\\Users\\Administrator\\Desktop\\docker_data\\mysql8.3.0/data:/var/lib/mysql 
-e MYSQL_ROOT_PASSWORD=root 
-d mysql:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ubuntu-20-04" tabindex="-1"><a class="header-anchor" href="#ubuntu-20-04"><span>ubuntu 20.04</span></a></h3><p>image <code>ecpe4s/ubuntu20.04:latest</code></p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code>docker  run -it  --name ubuntu20.04 ecpe4s/ubuntu20.04:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="centos" tabindex="-1"><a class="header-anchor" href="#centos"><span>centos</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 创建网络</span>
<span class="token function">docker</span> network create atlas
<span class="token comment"># 创建容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> xxx <span class="token parameter variable">-v</span> xxx:xxx <span class="token parameter variable">--network</span> atlas imagename:tag
<span class="token comment"># 提交容器为image</span>
<span class="token function">docker</span> commit container_id imagename:tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose-yaml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yaml"><span>docker-compose.yaml</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3.8&quot;</span>
<span class="token comment"># 定义服务ubuntu,mysql,redis</span>
<span class="token comment"># php-fpm和php-cli可以选着1个安装，看项目，2个一起安装也可以</span>

services:

  redis:
    image: redis:7.2.4
    container_name: lnmp_redis
    build: ./redis
    volumes:
      - ./redis/redis.conf/:/etc/redis.conf:ro
      - ./redis/data:/usr/local/redis/data
      - ./redis/redis.log:/usr/local/redis/redis.log
    environment:
      - <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai
    ports:
      - <span class="token string">&quot;6379:6379&quot;</span>
    command: <span class="token punctuation">[</span> <span class="token string">&quot;redis-server&quot;</span>, <span class="token string">&quot;/etc/redis.conf&quot;</span> <span class="token punctuation">]</span>

  mysql:
    image: mysql:8.0
    container_name: lnmp_mysql
    volumes:
      - ./mysql/conf.d:/etc/mysql/my.cnf:ro
      - ./mysql/data:/var/lib/mysql
      - ./mysql/log:/data/mysql/logs
    environment:
      - <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root
      - <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai
<span class="token comment">#    platform: linux/x86_64 #针对mac M1芯片</span>
    ports:
      - <span class="token string">&quot;3306:3306&quot;</span>


networks:
  frontend:
  backend:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器制作成镜像" tabindex="-1"><a class="header-anchor" href="#容器制作成镜像"><span>容器制作成镜像</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
<span class="token comment"># 容器-&gt;镜像</span>
<span class="token function">docker</span> commit <span class="token parameter variable">-a</span> <span class="token string">&quot;author_name&quot;</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;description&quot;</span> container_id imagename:tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),d=[l];function r(t,c){return n(),e("div",null,d)}const m=s(i,[["render",r],["__file","docker.html.vue"]]),v=JSON.parse('{"path":"/tools/docker.html","title":"docker","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"install","slug":"install","link":"#install","children":[]},{"level":2,"title":"实例","slug":"实例","link":"#实例","children":[{"level":3,"title":"mongodb","slug":"mongodb","link":"#mongodb","children":[]},{"level":3,"title":"mssql","slug":"mssql","link":"#mssql","children":[]},{"level":3,"title":"redis7.2","slug":"redis7-2","link":"#redis7-2","children":[]},{"level":3,"title":"mysql","slug":"mysql","link":"#mysql","children":[]},{"level":3,"title":"ubuntu 20.04","slug":"ubuntu-20-04","link":"#ubuntu-20-04","children":[]},{"level":3,"title":"centos","slug":"centos","link":"#centos","children":[]},{"level":3,"title":"docker-compose.yaml","slug":"docker-compose-yaml","link":"#docker-compose-yaml","children":[]}]},{"level":2,"title":"容器制作成镜像","slug":"容器制作成镜像","link":"#容器制作成镜像","children":[]}],"git":{"updatedTime":1721114914000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":4}]},"filePathRelative":"tools/docker.md"}');export{m as comp,v as data};

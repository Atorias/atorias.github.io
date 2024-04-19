import{_ as e,o as s,c as n,a}from"./app-DLNTDXQM.js";const i={},l=a(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>docker</span></a></h1><h2 id="redis7-2" tabindex="-1"><a class="header-anchor" href="#redis7-2"><span>redis7.2</span></a></h2><p>使用 <a href="./redis.conf">配置文件</a></p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code>docker run -p 6379:6379 --name redis72 
-v C:\\Users\\Administrator\\Desktop\\docker_data\\redis72\\redis.conf:/etc/redis/redis.conf 
-v C:\\Users\\Administrator\\Desktop\\docker_data\\redis72\\data:/data:rw 
--privileged=true 
-d redis redis-server /etc/redis/redis.conf 
--appendonly yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>mysql</span></a></h2><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code>docker run -p 3306:3306 --name mysql8.3.0 
-v C:\\Users\\Administrator\\Desktop\\docker_data\\mysql8.3.0/mysql-files:/var/lib/mysql-files 
-v C:\\Users\\Administrator\\Desktop\\docker_data\\mysql8.3.0/conf:/etc/mysql/conf.d 
-v C:\\Users\\Administrator\\Desktop\\docker_data\\mysql8.3.0/logs:/var/log/mysql 
-v C:\\Users\\Administrator\\Desktop\\docker_data\\mysql8.3.0/data:/var/lib/mysql 
-e MYSQL_ROOT_PASSWORD=root 
-d mysql:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubuntu-20-04" tabindex="-1"><a class="header-anchor" href="#ubuntu-20-04"><span>ubuntu 20.04</span></a></h2><p>image <code>ecpe4s/ubuntu20.04:latest</code></p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code>docker  run -it  --name ubuntu20.04 ecpe4s/ubuntu20.04:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="centos" tabindex="-1"><a class="header-anchor" href="#centos"><span>centos</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 创建网络</span>
<span class="token function">docker</span> network create atlas
<span class="token comment"># 创建容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> xxx <span class="token parameter variable">-v</span> xxx:xxx <span class="token parameter variable">--network</span> atlas imagename:tag
<span class="token comment"># 提交容器为image</span>
<span class="token function">docker</span> commit container_id imagename:tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose-yaml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yaml"><span>docker-compose.yaml</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3.8&quot;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d=[l];function r(c,t){return s(),n("div",null,d)}const m=e(i,[["render",r],["__file","docker.html.vue"]]),v=JSON.parse('{"path":"/tools/docker.html","title":"docker","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"redis7.2","slug":"redis7-2","link":"#redis7-2","children":[]},{"level":2,"title":"mysql","slug":"mysql","link":"#mysql","children":[]},{"level":2,"title":"ubuntu 20.04","slug":"ubuntu-20-04","link":"#ubuntu-20-04","children":[]},{"level":2,"title":"centos","slug":"centos","link":"#centos","children":[]},{"level":2,"title":"docker-compose.yaml","slug":"docker-compose-yaml","link":"#docker-compose-yaml","children":[]},{"level":2,"title":"容器制作成镜像","slug":"容器制作成镜像","link":"#容器制作成镜像","children":[]}],"git":{"updatedTime":1713496729000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":2}]},"filePathRelative":"tools/docker.md"}');export{m as comp,v as data};

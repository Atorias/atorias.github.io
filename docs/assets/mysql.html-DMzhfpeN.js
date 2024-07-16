import{_ as a,r as e,o as l,c as i,b as s,d as t,e as r,a as c}from"./app-BoQnz2iZ.js";const d={},p=s("h1",{id:"mysql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mysql"},[s("span",null,"MYSQL")])],-1),o=s("h2",{id:"下载地址",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#下载地址"},[s("span",null,"下载地址")])],-1),m={href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"},u=c(`<h2 id="创建数据库并授权用户" tabindex="-1"><a class="header-anchor" href="#创建数据库并授权用户"><span>创建数据库并授权用户</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
    01.  CREATE DATABASE dinghai CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci<span class="token punctuation">;</span>
    02.  create user user02@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;password!2#4&#39;</span><span class="token punctuation">;</span>
    03.  grant all privileges on test.* to user01@<span class="token string">&#39;localhost&#39;</span><span class="token punctuation">;</span>
    04.  报错 grant process on *.* to atlas001_user@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建备份用户" tabindex="-1"><a class="header-anchor" href="#创建备份用户"><span>创建备份用户</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>CREATE USER &#39;backup&#39;@&#39;localhost&#39; IDENTIFIED by &#39;9¬6QÙcãËCyOcÓaf«UÕæ6r×îìåð·çDBÔ3&#39;;
grant select, show view ,trigger ,event ,lock tables, process, reload, replication client, super ON *.* TO &#39;backup&#39;@&#39;localhost&#39;;
flush privileges; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql忘记密码" tabindex="-1"><a class="header-anchor" href="#mysql忘记密码"><span>mysql忘记密码</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>    01. my.cnf 添加skip-grant-tables 
    02. 重启mysql
    03. mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> 免密登录
    04. <span class="token keyword">select</span> host, user, authentication_string, plugin from user<span class="token punctuation">;</span>
    <span class="token number">5</span>.flush privileges<span class="token punctuation">;</span>
    <span class="token number">6</span>.alter user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;newpassword&#39;</span>
    <span class="token number">7</span>.去掉skip-grant-tables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yum安装mysql8-0" tabindex="-1"><a class="header-anchor" href="#yum安装mysql8-0"><span>yum安装mysql8.0</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>    01.  <span class="token function">wget</span> https://dev.mysql.com/get/mysql80-community-release-el7-1.noarch.rpm
    02.  yum localinstall mysql80-community-release-el7-1.noarch.rpm
    03.  yum clean all
    04.  yum makecache
    05.  <span class="token function">groupadd</span> mysql
    06.  <span class="token function">useradd</span> <span class="token parameter variable">-g</span> mysql mysql
    07.  yum <span class="token function">install</span> mysql-community-server
    09.  systemctl start mysqld
    <span class="token number">10</span>.  <span class="token function">cat</span> /var/log/mysqld.log <span class="token operator">|</span> <span class="token function">grep</span> password
    <span class="token number">11</span>.  mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
    <span class="token number">12</span>.  alter user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> identified by <span class="token string">&#39;&amp;?Á9:Ò])Û¡;ôØîÁõi´©|uï£±ö¡Yxrìyz&#39;</span>
    <span class="token number">13</span>.  flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ubuntu-编译" tabindex="-1"><a class="header-anchor" href="#ubuntu-编译"><span>ubuntu 编译</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/src
<span class="token function">wget</span> https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-boost-8.0.18.tar.gz
<span class="token function">apt</span> <span class="token function">install</span> build-essential cmake bison libncurses5-dev libssl-dev pkg-config
cmake <span class="token parameter variable">-DCMAKE_INSTALL_PREFIX</span><span class="token operator">=</span>/usr/local/mysql <span class="token parameter variable">-DMYSQL_DATADIR</span><span class="token operator">=</span>/usr/local/mysql/data <span class="token parameter variable">-DWITH_BOOST</span><span class="token operator">=</span>boost <span class="token parameter variable">-DFORCE_INSOURCE_BUILD</span><span class="token operator">=</span>ON <span class="token operator">&amp;</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token function">groupadd</span> mysql
<span class="token function">useradd</span> <span class="token parameter variable">-g</span> mysql mysql
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/mysql/data
<span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql:mysql /usr/local/mysql

<span class="token function">vim</span> /etc/my.cnf
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
socket <span class="token operator">=</span> /tmp/mysql.sock
 
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
socket <span class="token operator">=</span> /tmp/mysql.sock
basedir <span class="token operator">=</span> /usr/local/mysql
datadir <span class="token operator">=</span> /usr/local/mysql/data

<span class="token function">cp</span> /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld
<span class="token function">chmod</span> +x /etc/init.d/mysqld
update-rc.d mysqld defaults
<span class="token function">service</span> mysqld start
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;# MySQL PATH\\nexport PATH=/usr/local/mysql/bin:$PATH\\n&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/profile
<span class="token builtin class-name">source</span> /etc/profile

alter user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;123456&#39;</span>

systemctl start mysqld <span class="token comment">#</span>
systemctl stop mysqld
systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deb安装" tabindex="-1"><a class="header-anchor" href="#deb安装"><span>deb安装</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/src
<span class="token function">mkdir</span> mysql-deb
<span class="token builtin class-name">cd</span> mysql-deb
<span class="token function">wget</span> <span class="token parameter variable">-c</span> https://downloads.mysql.com/archives/get/p/23/file/mysql-server_8.0.25-1ubuntu16.04_amd64.deb-bundle.tar
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> mysql-server_8.0.25-1ubuntu16.04_amd64.deb-bundle.tar
dpkg <span class="token parameter variable">-i</span> mysql-common_8.0.25-1ubuntu16.04_amd64.deb
dpkg <span class="token parameter variable">-i</span> mysql-community-client-core_8.0.25-1ubuntu16.04_amd64.deb
dpkg <span class="token parameter variable">-i</span> mysql-community-client-plugins_8.0.25-1ubuntu16.04_amd64.deb
dpkg <span class="token parameter variable">-i</span> mysql-community-client_8.0.25-1ubuntu16.04_amd64.deb
dpkg <span class="token parameter variable">-i</span> mysql-client_8.0.25-1ubuntu16.04_amd64.deb
dpkg <span class="token parameter variable">-i</span> libmysqlclient21_8.0.25-1ubuntu16.04_amd64.deb
dpkg <span class="token parameter variable">-i</span> libmysqlclient-dev_8.0.25-1ubuntu16.04_amd64.deb
<span class="token function">wget</span> http://security.ubuntu.com/ubuntu/pool/universe/m/mecab/libmecab2_0.996-1.2ubuntu1_amd64.deb
dpkg <span class="token parameter variable">-i</span> libmecab2_0.996-1.2ubuntu1_amd64.deb
dpkg <span class="token parameter variable">-i</span> mysql-community-server-core_8.0.25-1ubuntu16.04_amd64.deb
dpkg <span class="token parameter variable">-i</span> mysql-community-server-debug_8.0.25-1ubuntu16.04_amd64.deb
dpkg <span class="token parameter variable">-i</span> mysql-server_8.0.25-1ubuntu16.04_amd64.deb
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/bin/mysql  /usr/local/mysql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="my-cnf" tabindex="-1"><a class="header-anchor" href="#my-cnf"><span>my.cnf</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>log_error <span class="token operator">=</span> /tmp/mysql.log
    <span class="token comment"># Slow Query Log</span>
    slow-query-log <span class="token operator">=</span> <span class="token number">1</span>
    slow-query-log-file <span class="token operator">=</span> /tmp/mysql-slow.log
    long_query_time <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">#设置满请求时间, 设置查多少秒的查询算是慢查询</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function v(b,k){const n=e("ExternalLinkIcon");return l(),i("div",null,[p,o,s("p",null,[s("a",m,[t("mysql"),r(n)])]),u])}const h=a(d,[["render",v],["__file","mysql.html.vue"]]),g=JSON.parse('{"path":"/database/mysql/mysql.html","title":"MYSQL","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"下载地址","slug":"下载地址","link":"#下载地址","children":[]},{"level":2,"title":"创建数据库并授权用户","slug":"创建数据库并授权用户","link":"#创建数据库并授权用户","children":[]},{"level":2,"title":"创建备份用户","slug":"创建备份用户","link":"#创建备份用户","children":[{"level":3,"title":"mysql忘记密码","slug":"mysql忘记密码","link":"#mysql忘记密码","children":[]},{"level":3,"title":"yum安装mysql8.0","slug":"yum安装mysql8-0","link":"#yum安装mysql8-0","children":[]},{"level":3,"title":"ubuntu 编译","slug":"ubuntu-编译","link":"#ubuntu-编译","children":[]}]},{"level":2,"title":"deb安装","slug":"deb安装","link":"#deb安装","children":[]},{"level":2,"title":"my.cnf","slug":"my-cnf","link":"#my-cnf","children":[]}],"git":{"updatedTime":1713431046000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":1}]},"filePathRelative":"database/mysql/mysql.md"}');export{h as comp,g as data};

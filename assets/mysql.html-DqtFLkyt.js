import{_ as n,a,b as e,o as l}from"./app-BwP785Qz.js";const i={};function p(c,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MYSQL</span></a></h1><h2 id="下载地址" tabindex="-1"><a class="header-anchor" href="#下载地址"><span>下载地址</span></a></h2><p><a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noopener noreferrer">mysql</a></p><h2 id="创建数据库并授权用户" tabindex="-1"><a class="header-anchor" href="#创建数据库并授权用户"><span>创建数据库并授权用户</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>
<span class="line">    01.  CREATE DATABASE dinghai CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci<span class="token punctuation">;</span></span>
<span class="line">    02.  create user user02@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;password!2#4&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    03.  grant all privileges on test.* to user01@<span class="token string">&#39;localhost&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    04.  报错 grant process on *.* to atlas001_user@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建备份用户" tabindex="-1"><a class="header-anchor" href="#创建备份用户"><span>创建备份用户</span></a></h2><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre><code><span class="line">CREATE USER &#39;backup&#39;@&#39;localhost&#39; IDENTIFIED by &#39;9¬6QÙcãËCyOcÓaf«UÕæ6r×îìåð·çDBÔ3&#39;;</span>
<span class="line">grant select, show view ,trigger ,event ,lock tables, process, reload, replication client, super ON *.* TO &#39;backup&#39;@&#39;localhost&#39;;</span>
<span class="line">flush privileges; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="备份脚本" tabindex="-1"><a class="header-anchor" href="#备份脚本"><span>备份脚本</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token assign-left variable">date</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d%H%M%S<span class="token variable">)</span></span></span>
<span class="line"><span class="token assign-left variable">backuppath</span><span class="token operator">=</span>/data/mysql-backup</span>
<span class="line"><span class="token assign-left variable">dbhost</span><span class="token operator">=</span>localhost</span>
<span class="line"><span class="token assign-left variable">dbuser</span><span class="token operator">=</span>backup</span>
<span class="line"><span class="token assign-left variable">dbpasswd</span><span class="token operator">=</span><span class="token number">9</span>¬6QÙcãËCyOcÓaf«UÕæ6r×îìåð·çDBÔ3</span>
<span class="line"><span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">30</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$backuppath</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;<span class="token variable">$backuppath</span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;备份目录创建成功!&quot;</span> <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;目录创建失败！&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line">mysqldump -h<span class="token variable">$dbhost</span> -u<span class="token variable">$dbuser</span> -p<span class="token variable">$dbpasswd</span> --all-databases <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable">$backuppath</span>/<span class="token variable">$date</span>.sql.gz&quot;</span> <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;备份失败！&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token function">find</span> <span class="token variable">$backuppath</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.sql.gz&quot;</span> <span class="token parameter variable">-mtime</span> +<span class="token variable">$time</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql忘记密码" tabindex="-1"><a class="header-anchor" href="#mysql忘记密码"><span>mysql忘记密码</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">    01. my.cnf 添加skip-grant-tables </span>
<span class="line">    02. 重启mysql</span>
<span class="line">    03. mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> 免密登录</span>
<span class="line">    04. <span class="token keyword">select</span> host, user, authentication_string, plugin from user<span class="token punctuation">;</span></span>
<span class="line">    <span class="token number">5</span>.flush privileges<span class="token punctuation">;</span></span>
<span class="line">    <span class="token number">6</span>.alter user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;newpassword&#39;</span></span>
<span class="line">    <span class="token number">7</span>.去掉skip-grant-tables</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yum安装mysql8-0" tabindex="-1"><a class="header-anchor" href="#yum安装mysql8-0"><span>yum安装mysql8.0</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">    01.  <span class="token function">wget</span> https://dev.mysql.com/get/mysql80-community-release-el7-1.noarch.rpm</span>
<span class="line">    02.  yum localinstall mysql80-community-release-el7-1.noarch.rpm</span>
<span class="line">    03.  yum clean all</span>
<span class="line">    04.  yum makecache</span>
<span class="line">    05.  <span class="token function">groupadd</span> mysql</span>
<span class="line">    06.  <span class="token function">useradd</span> <span class="token parameter variable">-g</span> mysql mysql</span>
<span class="line">    <span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://repo.mysql.com/RPM-GPG-KEY-mysql-2023</span>
<span class="line">    07.  yum <span class="token function">install</span> mysql-community-server</span>
<span class="line">    09.  systemctl start mysqld</span>
<span class="line">    <span class="token number">10</span>.  <span class="token function">cat</span> /var/log/mysqld.log <span class="token operator">|</span> <span class="token function">grep</span> password</span>
<span class="line">    <span class="token number">11</span>.  mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span></span>
<span class="line">    <span class="token number">12</span>.  alter user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> identified by <span class="token string">&#39;&amp;?Á9:Ò])Û¡;ôØîÁõi´©|uï£±ö¡Yxrìyz&#39;</span></span>
<span class="line">    <span class="token number">13</span>.  flush privileges<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql"><span>安装mysql</span></a></h2><h3 id="dpkg安装" tabindex="-1"><a class="header-anchor" href="#dpkg安装"><span>dpkg安装</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">https://dev.mysql.com/downloads/mysql/</span>
<span class="line">选择对应版本，ubuntu linux， 对应OS version</span>
<span class="line">下载 <span class="token punctuation">(</span>mysql-server_8.4.4-1ubuntu22.04_amd64.deb-bundle.tar<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> <span class="token punctuation">(</span>mysql-server_8.4.4-1ubuntu22.04_amd64.deb-bundle.tar<span class="token punctuation">)</span> </span>
<span class="line">dpkg <span class="token parameter variable">-i</span> *.deb</span>
<span class="line"></span>
<span class="line">如果有问题 </span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> --fix-broken <span class="token function">install</span> <span class="token parameter variable">-y</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> clean</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> autoclean</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> autoremove <span class="token parameter variable">-y</span></span>
<span class="line"></span>
<span class="line">然后继续</span>
<span class="line">修改密码</span>
<span class="line">ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED WITH caching_sha2_password BY <span class="token string">&#39;你的密码&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可执行文件安装" tabindex="-1"><a class="header-anchor" href="#可执行文件安装"><span>可执行文件安装</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">ldd version <span class="token comment"># 确定用的是2.28还是其他版本</span></span>
<span class="line">https://dev.mysql.com/downloads/mysql/ <span class="token comment"># 下载地址 linux-Generic 可直接安装, source code 编译安装</span></span>
<span class="line"><span class="token function">groupadd</span> mysql</span>
<span class="line"><span class="token function">useradd</span> <span class="token parameter variable">-g</span> mysql mysql</span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> filename.tar.xz <span class="token comment"># 解压</span></span>
<span class="line"><span class="token function">mv</span> mysql  /usr/local/mysql</span>
<span class="line"><span class="token builtin class-name">cd</span> /usr/local/mysql/</span>
<span class="line"><span class="token function">mkdir</span> data</span>
<span class="line"><span class="token function">mkdir</span> temp</span>
<span class="line"><span class="token function">mkdir</span> log</span>
<span class="line"><span class="token function">touch</span> log/error.log</span>
<span class="line"><span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql.mysql /usr/local/mysql/</span>
<span class="line"><span class="token function">chmod</span> <span class="token parameter variable">-R</span> 0750 /usr/local/mysql/</span>
<span class="line"></span>
<span class="line">./bin/mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--console</span> <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql <span class="token parameter variable">--basedir</span><span class="token operator">=</span>/usr/local/mysql <span class="token parameter variable">--datadir</span><span class="token operator">=</span>/usr/local/mysql/data --log-error<span class="token operator">=</span>/usr/local/mysql/log/error.log</span>
<span class="line"></span>
<span class="line"><span class="token function">touch</span> /usr/local/mysql/my.cnf</span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/mysql/my.cnf /etc/my.cnf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>my.cnf配置</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>mysql<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">#设置mysql客户端默认字符集</span></span>
<span class="line">default-character-set<span class="token operator">=</span>utf8mb4</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># sql_mode=NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO</span></span>
<span class="line"><span class="token assign-left variable">user</span><span class="token operator">=</span>mysql</span>
<span class="line">skip-name-resolve</span>
<span class="line"></span>
<span class="line"><span class="token comment">#设置3306端口</span></span>
<span class="line">port <span class="token operator">=</span> <span class="token number">3306</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#缓存配置</span></span>
<span class="line"><span class="token assign-left variable">tmp_table_size</span><span class="token operator">=</span>1024M</span>
<span class="line"><span class="token assign-left variable">max_heap_table_size</span><span class="token operator">=</span>1024M</span>
<span class="line"></span>
<span class="line"><span class="token comment">#设置mysql的安装目录</span></span>
<span class="line"><span class="token assign-left variable">basedir</span><span class="token operator">=</span>/usr/local/mysql</span>
<span class="line"><span class="token comment">#设置mysql数据库的数据的存放目录 错误日志</span></span>
<span class="line"><span class="token assign-left variable">datadir</span><span class="token operator">=</span>/usr/local/mysql/data</span>
<span class="line"><span class="token assign-left variable">tmpdir</span><span class="token operator">=</span>/usr/local/mysql/temp</span>
<span class="line">pid-file<span class="token operator">=</span>/usr/local/mysql/mysql.pid</span>
<span class="line">log-error<span class="token operator">=</span>/usr/local/mysql/log/error.log</span>
<span class="line"><span class="token assign-left variable">socket</span><span class="token operator">=</span>/usr/local/mysql/temp/mysql.sock</span>
<span class="line"></span>
<span class="line"><span class="token comment">#允许最大连接数</span></span>
<span class="line"><span class="token assign-left variable">max_connections</span><span class="token operator">=</span><span class="token number">200</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">#创建新表时将使用的默认存储引擎</span></span>
<span class="line">default-storage-engine<span class="token operator">=</span>INNODB</span>
<span class="line"></span>
<span class="line"><span class="token comment">#此处是区分大写的，但是mysql8只有在初始化时设置lower_case_table_names=1才有效</span></span>
<span class="line"><span class="token comment">#lower_case_table_names=1</span></span>
<span class="line"><span class="token assign-left variable">max_allowed_packet</span><span class="token operator">=</span>500M</span>
<span class="line"></span>
<span class="line"><span class="token comment">#取消binlog</span></span>
<span class="line">skip-log-bin</span>
<span class="line"></span>
<span class="line"><span class="token comment">#开启load file</span></span>
<span class="line">local-infile<span class="token operator">=</span><span class="token number">1</span></span>
<span class="line"><span class="token assign-left variable">secure_file_priv</span><span class="token operator">=</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>client<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">socket</span><span class="token operator">=</span>/usr/local/mysql/temp/mysql.sock</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mysql.service</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Description</span><span class="token operator">=</span>mysql <span class="token function">service</span></span>
<span class="line"><span class="token assign-left variable">After</span><span class="token operator">=</span>network.target</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">User</span><span class="token operator">=</span>mysql</span>
<span class="line"><span class="token assign-left variable">Group</span><span class="token operator">=</span>mysql</span>
<span class="line"><span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/usr/local/mysql</span>
<span class="line"><span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">Type</span><span class="token operator">=</span>simple</span>
<span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/mysql/bin/mysqld --defaults-file<span class="token operator">=</span>/etc/my.cnf</span>
<span class="line"><span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/bin/kill <span class="token parameter variable">-15</span> <span class="token variable">$MAINPID</span></span>
<span class="line"><span class="token assign-left variable">Restart</span><span class="token operator">=</span>always</span>
<span class="line"><span class="token assign-left variable">RestartSec</span><span class="token operator">=</span><span class="token number">60</span></span>
<span class="line"><span class="token assign-left variable">StartLimitInterval</span><span class="token operator">=</span><span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ln -s /usr/local/mysql/bin/mysql /usr/bin/mysql</p><h3 id="ubuntu-编译" tabindex="-1"><a class="header-anchor" href="#ubuntu-编译"><span>ubuntu 编译</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> /usr/local/src</span>
<span class="line"><span class="token function">wget</span> https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-boost-8.0.18.tar.gz</span>
<span class="line"><span class="token function">apt</span> <span class="token function">install</span> build-essential cmake bison libncurses5-dev libssl-dev pkg-config</span>
<span class="line">cmake <span class="token parameter variable">-DCMAKE_INSTALL_PREFIX</span><span class="token operator">=</span>/usr/local/mysql <span class="token parameter variable">-DMYSQL_DATADIR</span><span class="token operator">=</span>/usr/local/mysql/data <span class="token parameter variable">-DWITH_BOOST</span><span class="token operator">=</span>boost <span class="token parameter variable">-DFORCE_INSOURCE_BUILD</span><span class="token operator">=</span>ON <span class="token operator">&amp;</span></span>
<span class="line"><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token function">groupadd</span> mysql</span>
<span class="line"><span class="token function">useradd</span> <span class="token parameter variable">-g</span> mysql mysql</span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/mysql/data</span>
<span class="line"><span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql:mysql /usr/local/mysql</span>
<span class="line"></span>
<span class="line"><span class="token function">vim</span> /etc/my.cnf</span>
<span class="line"><span class="token punctuation">[</span>client<span class="token punctuation">]</span></span>
<span class="line">socket <span class="token operator">=</span> /tmp/mysql.sock</span>
<span class="line"> </span>
<span class="line"><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span></span>
<span class="line">socket <span class="token operator">=</span> /tmp/mysql.sock</span>
<span class="line">basedir <span class="token operator">=</span> /usr/local/mysql</span>
<span class="line">datadir <span class="token operator">=</span> /usr/local/mysql/data</span>
<span class="line"></span>
<span class="line"><span class="token function">cp</span> /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld</span>
<span class="line"><span class="token function">chmod</span> +x /etc/init.d/mysqld</span>
<span class="line">update-rc.d mysqld defaults</span>
<span class="line"><span class="token function">service</span> mysqld start</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;# MySQL PATH\\nexport PATH=/usr/local/mysql/bin:$PATH\\n&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/profile</span>
<span class="line"><span class="token builtin class-name">source</span> /etc/profile</span>
<span class="line"></span>
<span class="line">alter user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;123456&#39;</span></span>
<span class="line"></span>
<span class="line">systemctl start mysqld <span class="token comment">#</span></span>
<span class="line">systemctl stop mysqld</span>
<span class="line">systemctl restart mysqld</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deb安装" tabindex="-1"><a class="header-anchor" href="#deb安装"><span>deb安装</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> /usr/local/src</span>
<span class="line"><span class="token function">mkdir</span> mysql-deb</span>
<span class="line"><span class="token builtin class-name">cd</span> mysql-deb</span>
<span class="line"><span class="token function">wget</span> <span class="token parameter variable">-c</span> https://downloads.mysql.com/archives/get/p/23/file/mysql-server_8.0.25-1ubuntu16.04_amd64.deb-bundle.tar</span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> mysql-server_8.0.25-1ubuntu16.04_amd64.deb-bundle.tar</span>
<span class="line">dpkg <span class="token parameter variable">-i</span> mysql-common_8.0.25-1ubuntu16.04_amd64.deb</span>
<span class="line">dpkg <span class="token parameter variable">-i</span> mysql-community-client-core_8.0.25-1ubuntu16.04_amd64.deb</span>
<span class="line">dpkg <span class="token parameter variable">-i</span> mysql-community-client-plugins_8.0.25-1ubuntu16.04_amd64.deb</span>
<span class="line">dpkg <span class="token parameter variable">-i</span> mysql-community-client_8.0.25-1ubuntu16.04_amd64.deb</span>
<span class="line">dpkg <span class="token parameter variable">-i</span> mysql-client_8.0.25-1ubuntu16.04_amd64.deb</span>
<span class="line">dpkg <span class="token parameter variable">-i</span> libmysqlclient21_8.0.25-1ubuntu16.04_amd64.deb</span>
<span class="line">dpkg <span class="token parameter variable">-i</span> libmysqlclient-dev_8.0.25-1ubuntu16.04_amd64.deb</span>
<span class="line"><span class="token function">wget</span> http://security.ubuntu.com/ubuntu/pool/universe/m/mecab/libmecab2_0.996-1.2ubuntu1_amd64.deb</span>
<span class="line">dpkg <span class="token parameter variable">-i</span> libmecab2_0.996-1.2ubuntu1_amd64.deb</span>
<span class="line">dpkg <span class="token parameter variable">-i</span> mysql-community-server-core_8.0.25-1ubuntu16.04_amd64.deb</span>
<span class="line">dpkg <span class="token parameter variable">-i</span> mysql-community-server-debug_8.0.25-1ubuntu16.04_amd64.deb</span>
<span class="line">dpkg <span class="token parameter variable">-i</span> mysql-server_8.0.25-1ubuntu16.04_amd64.deb</span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/bin/mysql  /usr/local/mysql</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="my-cnf" tabindex="-1"><a class="header-anchor" href="#my-cnf"><span>my.cnf</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">log_error <span class="token operator">=</span> /tmp/mysql.log</span>
<span class="line">    <span class="token comment"># Slow Query Log</span></span>
<span class="line">    slow-query-log <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    slow-query-log-file <span class="token operator">=</span> /tmp/mysql-slow.log</span>
<span class="line">    long_query_time <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">#设置满请求时间, 设置查多少秒的查询算是慢查询</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)])])}const r=n(i,[["render",p]]),o=JSON.parse('{"path":"/database/mysql/mysql.html","title":"MYSQL","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"下载地址","slug":"下载地址","link":"#下载地址","children":[]},{"level":2,"title":"创建数据库并授权用户","slug":"创建数据库并授权用户","link":"#创建数据库并授权用户","children":[]},{"level":2,"title":"创建备份用户","slug":"创建备份用户","link":"#创建备份用户","children":[]},{"level":2,"title":"备份脚本","slug":"备份脚本","link":"#备份脚本","children":[]},{"level":2,"title":"mysql忘记密码","slug":"mysql忘记密码","link":"#mysql忘记密码","children":[]},{"level":2,"title":"yum安装mysql8.0","slug":"yum安装mysql8-0","link":"#yum安装mysql8-0","children":[]},{"level":2,"title":"安装mysql","slug":"安装mysql","link":"#安装mysql","children":[{"level":3,"title":"dpkg安装","slug":"dpkg安装","link":"#dpkg安装","children":[]},{"level":3,"title":"可执行文件安装","slug":"可执行文件安装","link":"#可执行文件安装","children":[]},{"level":3,"title":"ubuntu 编译","slug":"ubuntu-编译","link":"#ubuntu-编译","children":[]}]},{"level":2,"title":"deb安装","slug":"deb安装","link":"#deb安装","children":[]},{"level":2,"title":"my.cnf","slug":"my-cnf","link":"#my-cnf","children":[]}],"git":{"updatedTime":1745722962000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":6,"url":"https://github.com/OldWitch"}]},"filePathRelative":"database/mysql/mysql.md"}');export{r as comp,o as data};

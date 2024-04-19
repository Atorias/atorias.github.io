import{_ as t,r as i,o as l,c as o,b as n,d as s,e as p,a}from"./app-DLNTDXQM.js";const c={},u=a(`<h1 id="php" tabindex="-1"><a class="header-anchor" href="#php"><span>php</span></a></h1><h2 id="php安装" tabindex="-1"><a class="header-anchor" href="#php安装"><span>PHP安装</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>    <span class="token number">1</span>.  安装epel的yum源 
        yum <span class="token function">install</span> <span class="token parameter variable">-y</span> https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
    <span class="token number">2</span>.  安装Remi的yum源
        yum <span class="token function">install</span> <span class="token parameter variable">-y</span> https://rpms.remirepo.net/enterprise/remi-release-7.rpm
    <span class="token number">3</span>.  安装yum-utils工具
        yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
    <span class="token number">4</span>.  先禁用所有php版本的yum下载源
        yum-config-manager <span class="token parameter variable">--disable</span> <span class="token string">&#39;remi-php*&#39;</span>
    <span class="token number">5</span>.  启用php7.4源
        yum-config-manager <span class="token parameter variable">--enable</span> remi-php74
    <span class="token number">6</span>.  安装php <span class="token number">7.4</span>
        yum <span class="token function">install</span> <span class="token parameter variable">-y</span> php php-devel
    <span class="token number">7</span>.  安装常用php扩展
        yum <span class="token function">install</span> php  php-cli php-fpm php-mysqlnd php-zip php-devel php-gd php-mcrypt php-mbstring php-curl php-xml php-pear php-bcmath php-json php-redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="php-fpm-conf" tabindex="-1"><a class="header-anchor" href="#php-fpm-conf"><span>php-fpm.conf</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#php-fpm.conf</span>
    <span class="token comment">#第二部分，全局配置</span>
    <span class="token punctuation">[</span>global<span class="token punctuation">]</span>
    <span class="token punctuation">;</span>pid <span class="token operator">=</span> /var/log/php-fpm/php-fpm.pid <span class="token comment">#pid文件存放的位置</span>
    <span class="token punctuation">;</span>error_log <span class="token operator">=</span> /var/log/php-fpm/php-fpm.log <span class="token comment">#错误日志存放的位置</span>
    <span class="token punctuation">;</span>log_level <span class="token operator">=</span> error <span class="token comment">#日志级别, alert, error, warning, notice, debug</span>
    rlimit_files <span class="token operator">=</span> <span class="token number">65535</span> <span class="token comment">#php-fpm进程能打开的文件数</span>
    events.mechanism <span class="token operator">=</span> epoll <span class="token comment">#使用epoll事件模型处理请求</span>

    <span class="token comment"># php-fpm.d/www.conf 错误日志</span>
    php_flag<span class="token punctuation">[</span>display_errors<span class="token punctuation">]</span> <span class="token operator">=</span> off
    <span class="token punctuation">;</span>php_admin_value<span class="token punctuation">[</span>error_log<span class="token punctuation">]</span> <span class="token operator">=</span> /soft/log/php/php-www_error.log
    php_admin_flag<span class="token punctuation">[</span>log_errors<span class="token punctuation">]</span> <span class="token operator">=</span> on

    <span class="token comment"># 将查询超过5s的连接记录至慢查询日志中</span>
    request_slowlog_timeout <span class="token operator">=</span> 5s
    slowlog <span class="token operator">=</span> /var/log/php/slow.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="php-ini" tabindex="-1"><a class="header-anchor" href="#php-ini"><span>php.ini</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token comment">#/etc/php.ini优化配置如下</span>

post_max_size <span class="token operator">=</span> 300M
upload_max_filesize <span class="token operator">=</span> 300M
max_file_uploads <span class="token operator">=</span> <span class="token number">20</span>
memory_limit <span class="token operator">=</span> 128M
date.timezone <span class="token operator">=</span> Asia/Shanghai

expose_php <span class="token operator">=</span> Off
display_errors <span class="token operator">=</span> Off
error_reporting <span class="token operator">=</span> E_ALL
log_errors <span class="token operator">=</span> On
error_log <span class="token operator">=</span> /var/log/php_error.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="compose" tabindex="-1"><a class="header-anchor" href="#compose"><span>compose</span></a></h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>`,9),r=n("code",null,"官网:",-1),d={href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"},v=a(`<h3 id="镜像管理" tabindex="-1"><a class="header-anchor" href="#镜像管理"><span>镜像管理</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 当前项目生效</span>
<span class="token function">composer</span> config repo.packagist <span class="token function">composer</span> https://mirrors.aliyun.com/composer/

<span class="token comment"># 取消当前项目配置</span>
<span class="token function">composer</span> config <span class="token parameter variable">--unset</span> repos.packagist

<span class="token comment"># 全局生效</span>
<span class="token function">composer</span> config <span class="token parameter variable">-g</span> repo.packagist <span class="token function">composer</span> https://mirrors.aliyun.com/composer/

<span class="token comment"># 取消全局配置</span>
<span class="token function">composer</span> config <span class="token parameter variable">-g</span> <span class="token parameter variable">--unset</span> repos.packagist

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-crm镜像管理工具" tabindex="-1"><a class="header-anchor" href="#_2-crm镜像管理工具"><span>2. CRM镜像管理工具</span></a></h3>`,3),k=n("code",null,"文档地址:",-1),m={href:"https://github.com/slince/composer-registry-manager/blob/master/README-zh_CN.md",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">composer</span> global require slince/composer-registry-manager

<span class="token comment"># 选择镜像</span>
<span class="token function">composer</span> repo:ls

-- --------------- ------------------------------------------------
     <span class="token function">composer</span>        https://packagist.org
     phpcomposer     https://packagist.phpcomposer.com
     aliyun          https://mirrors.aliyun.com/composer
     tencent         https://mirrors.cloud.tencent.com/composer
     huawei          https://mirrors.huaweicloud.com/repository/php
     laravel-china   https://packagist.laravel-china.org
     cnpkg           https://php.cnpkg.org
     sjtug           https://packagist.mirrors.sjtug.sjtu.edu.cn
-- --------------- ------------------------------------------------
<span class="token comment"># 使用镜像</span>
<span class="token function">composer</span> repo:use aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="laravel" tabindex="-1"><a class="header-anchor" href="#laravel"><span>laravel</span></a></h2><h3 id="service" tabindex="-1"><a class="header-anchor" href="#service"><span>service</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
    php artisan make:command AddService

 
 app<span class="token punctuation">\\</span>Console<span class="token punctuation">\\</span>Commands<span class="token punctuation">\\</span>AddService.php
  <span class="token operator">&lt;</span>?php

  namespace App<span class="token punctuation">\\</span>Console<span class="token punctuation">\\</span>Commands<span class="token punctuation">;</span> 

  use Illuminate<span class="token punctuation">\\</span>Console<span class="token punctuation">\\</span>GeneratorCommand<span class="token punctuation">;</span> 

  class AddService extends GeneratorCommand
  <span class="token punctuation">{</span>
   /**
    - 控制台命令名称
    *

    - @var string
    */

   protected <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string">&#39;make:service&#39;</span><span class="token punctuation">;</span> 
   /**
    - 控制台命令描述
    *

    - @var string
    */

   protected <span class="token variable">$description</span> <span class="token operator">=</span> <span class="token string">&#39;Create a new service class&#39;</span><span class="token punctuation">;</span> 
   /**
    - 生成类的类型
    *

    - @var string
    */

   protected <span class="token variable">$type</span> <span class="token operator">=</span> <span class="token string">&#39;Services&#39;</span><span class="token punctuation">;</span> 
   /**
    - 获取生成器的存根文件
    *

    - @return string
    */

   protected <span class="token keyword">function</span> <span class="token function-name function">getStub</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>

    <span class="token builtin class-name">return</span> __DIR__.<span class="token string">&#39;/stubs/service.stub&#39;</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span>

   /**
    - 获取类的默认命名空间
    *

    - @param string <span class="token variable">$rootNamespace</span>
    - @return string
    */

   protected <span class="token keyword">function</span> getDefaultNamespace<span class="token punctuation">(</span><span class="token variable">$rootNamespace</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>

    <span class="token builtin class-name">return</span> <span class="token variable">$rootNamespace</span><span class="token builtin class-name">.</span><span class="token string">&#39;\\Services&#39;</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 
 创建 app/Console/Commands/Stubs/service.stub
  <span class="token operator">&lt;</span>?php

  namespace DummyNamespace<span class="token punctuation">;</span> 

  class DummyClass
  <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
  
 app/Console/Kernel.php
  protected <span class="token variable">$commands</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> 
 
 protected <span class="token variable">$commands</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
   Commands<span class="token punctuation">\\</span>AddService::class
 <span class="token punctuation">]</span><span class="token punctuation">;</span> 
  

php artisan make:service MusicService
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="laravel-eloquent-orm" tabindex="-1"><a class="header-anchor" href="#laravel-eloquent-orm"><span>laravel-eloquent-orm</span></a></h2><h3 id="一对一-一个人只有一个身份证-一个身份证只属于一个人" tabindex="-1"><a class="header-anchor" href="#一对一-一个人只有一个身份证-一个身份证只属于一个人"><span>一对一: 一个人只有一个身份证，一个身份证只属于一个人</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>
<span class="token comment">// App\\User</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">identity_card</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasOne</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\IdentityCard&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// App\\IdentityCard</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\User&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一对多-一篇文章可以有多个评论-一个评论只属于一篇文章" tabindex="-1"><a class="header-anchor" href="#一对多-一篇文章可以有多个评论-一个评论只属于一篇文章"><span>一对多：一篇文章可以有多个评论，一个评论只属于一篇文章</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token comment">// App\\Article</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Comment&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// App\\Comment</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">article</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Article&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多对多-一个人可以扮演多个角色-一个角色可以被多个人扮演" tabindex="-1"><a class="header-anchor" href="#多对多-一个人可以扮演多个角色-一个角色可以被多个人扮演"><span>多对多：一个人可以扮演多个角色，一个角色可以被多个人扮演</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token comment">// App\\Role</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">users</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsToMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\User&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// App\\User</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">roles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsToMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Role&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程一对一-一个帖子属于一个作者-该作者就读一所学校。帖子可通过作者访问作者所在的学校" tabindex="-1"><a class="header-anchor" href="#远程一对一-一个帖子属于一个作者-该作者就读一所学校。帖子可通过作者访问作者所在的学校"><span>远程一对一：一个帖子属于一个作者，该作者就读一所学校。帖子可通过作者访问作者所在的学校</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token comment"># App\\Thread</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">authorSchool</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasOneThrough</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\School&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;App\\Author&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程一对多-一个帖子属于一个作者-该作者写过很多书。帖子可通过作者访问作者写过的所有书籍" tabindex="-1"><a class="header-anchor" href="#远程一对多-一个帖子属于一个作者-该作者写过很多书。帖子可通过作者访问作者写过的所有书籍"><span>远程一对多：一个帖子属于一个作者，该作者写过很多书。帖子可通过作者访问作者写过的所有书籍</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token comment"># App\\Thread</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">authorBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasManyThrough</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Book&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;App\\Author&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多态一对一-运营人员就一个图片-发布一篇博客或者一篇文章" tabindex="-1"><a class="header-anchor" href="#多态一对一-运营人员就一个图片-发布一篇博客或者一篇文章"><span>多态一对一：运营人员就一个图片，发布一篇博客或者一篇文章</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token comment"># App\\Image</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">imageable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># App\\Blog</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphOne</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Image&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;imageable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># App\\Article</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphOne</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Image&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;imageable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多态一对多-文章可以接受多条评论-视频也可以接受多条评论" tabindex="-1"><a class="header-anchor" href="#多态一对多-文章可以接受多条评论-视频也可以接受多条评论"><span>多态一对多：文章可以接受多条评论，视频也可以接受多条评论</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token comment"># App\\Comment</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">commentable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># App\\Video</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Comment&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;commentable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># App\\Article</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Comment&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;commentable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多态多对多-可以给一篇文章打上多个标签-也可以给一个视频打上多个标签。并且一个标签可以贴在多个文章上面。一个标签也可以贴在多个视频上" tabindex="-1"><a class="header-anchor" href="#多态多对多-可以给一篇文章打上多个标签-也可以给一个视频打上多个标签。并且一个标签可以贴在多个文章上面。一个标签也可以贴在多个视频上"><span>多态多对多：可以给一篇文章打上多个标签，也可以给一个视频打上多个标签。并且一个标签可以贴在多个文章上面。一个标签也可以贴在多个视频上</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token comment"># App\\Tag</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">articles</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphedByMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Article&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;taggable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">videos</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphedByMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Video&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;taggable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># App\\Article</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">tags</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphToMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Tag&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;taggable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># App\\Video</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">tags</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphToMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Tag&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;taggable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>关系 正向 反向
一对一 hasOne belongsTo
一对多 hasMany belongsTo
多对多 belongsToMany belongsToMany
远程一对一 hasOneThrough —
远程一对多 hasManyThrough —
多态一对一 morphTo morphOne
多态一对多 morphTo morphMany
多态多对多 morphedByMany morphToMany
一对一、一对多
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增" tabindex="-1"><a class="header-anchor" href="#增"><span>增</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$comment</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">App<span class="token punctuation">\\</span>Comment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;message&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A new comment.&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$post</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context">App<span class="token punctuation">\\</span>Post</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token function">comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token variable">$comment</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// insert into \`comments\` (\`message\`, \`post_id\`, \`updated_at\`, \`created_at\`) values (&#39;A new comment.&#39;, 1, &#39;2019-09-19 03:59:48&#39;, &#39;2019-09-19 03:59:48&#39;)</span>

<span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token function">comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">saveMany</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">App<span class="token punctuation">\\</span>Comment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;message&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A new comment.&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">App<span class="token punctuation">\\</span>Comment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;message&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Another comment.&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$comment</span> <span class="token operator">=</span> <span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token function">comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;message&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A new comment.&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// insert into \`comments\` (\`message\`, \`post_id\`, \`updated_at\`, \`created_at\`) values (A new comment., 1, 2019-09-19 04:07:43, 2019-09-19 04:07:43)</span>
<span class="token comment">// 还可以使用 firstOrNew, firstOrCreate 和 updateOrCreate</span>

<span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token function">comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">createMany</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;message&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A new comment.&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;message&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Another new comment.&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="改" tabindex="-1"><a class="header-anchor" href="#改"><span>改</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$post</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context">App<span class="token punctuation">\\</span>Post</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span><span class="token property">message</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Message&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Author Name&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// update \`comments\` set \`message\` = Message, \`name\` = Author Name, \`comments\`.\`updated_at\` = 2019-09-19 04:06:09 where \`id\` = 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="belongsto-建立模型关系" tabindex="-1"><a class="header-anchor" href="#belongsto-建立模型关系"><span>belongsTo 建立模型关系</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context">App<span class="token punctuation">\\</span>User</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$comment</span> <span class="token operator">=</span>  <span class="token class-name class-name-fully-qualified static-context">App<span class="token punctuation">\\</span>Comment</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$comment</span><span class="token operator">-&gt;</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">associate</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$comment</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除模型关系" tabindex="-1"><a class="header-anchor" href="#删除模型关系"><span>删除模型关系</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$comment</span><span class="token operator">-&gt;</span><span class="token function">account</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">dissociate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$comment</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="默认模型" tabindex="-1"><a class="header-anchor" href="#默认模型"><span>默认模型</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>
<span class="token comment"># belongsTo, hasOne, hasOneThrough, 和 morphOne</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\User&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">withDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\User&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">withDefault</span><span class="token punctuation">(</span><span class="token punctuation">[</span>

    <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Guest Author&#39;</span><span class="token punctuation">,</span>

<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\User&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">withDefault</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token variable">$post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Guest Author&#39;</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>belongsTo 或者 belongsToMany 当 Comment 模型被更新时，您要自动「触发」父级 Article 模型的 updated_at 时间戳的更新</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$touches</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;article&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,34);function h(g,f){const e=i("ExternalLinkIcon");return l(),o("div",null,[u,n("p",null,[r,s(),n("a",d,[s("https://getcomposer.org/"),p(e)])]),v,n("p",null,[k,s(),n("a",m,[s("https://github.com/slince/composer-registry-manager/blob/master/README-zh_CN.md"),p(e)])]),b])}const w=t(c,[["render",h],["__file","php.html.vue"]]),_=JSON.parse('{"path":"/languages/php.html","title":"php","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"PHP安装","slug":"php安装","link":"#php安装","children":[]},{"level":2,"title":"php-fpm.conf","slug":"php-fpm-conf","link":"#php-fpm-conf","children":[]},{"level":2,"title":"php.ini","slug":"php-ini","link":"#php-ini","children":[]},{"level":2,"title":"compose","slug":"compose","link":"#compose","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"镜像管理","slug":"镜像管理","link":"#镜像管理","children":[]},{"level":3,"title":"2. CRM镜像管理工具","slug":"_2-crm镜像管理工具","link":"#_2-crm镜像管理工具","children":[]}]},{"level":2,"title":"laravel","slug":"laravel","link":"#laravel","children":[{"level":3,"title":"service","slug":"service","link":"#service","children":[]}]},{"level":2,"title":"laravel-eloquent-orm","slug":"laravel-eloquent-orm","link":"#laravel-eloquent-orm","children":[{"level":3,"title":"一对一: 一个人只有一个身份证，一个身份证只属于一个人","slug":"一对一-一个人只有一个身份证-一个身份证只属于一个人","link":"#一对一-一个人只有一个身份证-一个身份证只属于一个人","children":[]},{"level":3,"title":"一对多：一篇文章可以有多个评论，一个评论只属于一篇文章","slug":"一对多-一篇文章可以有多个评论-一个评论只属于一篇文章","link":"#一对多-一篇文章可以有多个评论-一个评论只属于一篇文章","children":[]},{"level":3,"title":"多对多：一个人可以扮演多个角色，一个角色可以被多个人扮演","slug":"多对多-一个人可以扮演多个角色-一个角色可以被多个人扮演","link":"#多对多-一个人可以扮演多个角色-一个角色可以被多个人扮演","children":[]},{"level":3,"title":"远程一对一：一个帖子属于一个作者，该作者就读一所学校。帖子可通过作者访问作者所在的学校","slug":"远程一对一-一个帖子属于一个作者-该作者就读一所学校。帖子可通过作者访问作者所在的学校","link":"#远程一对一-一个帖子属于一个作者-该作者就读一所学校。帖子可通过作者访问作者所在的学校","children":[]},{"level":3,"title":"远程一对多：一个帖子属于一个作者，该作者写过很多书。帖子可通过作者访问作者写过的所有书籍","slug":"远程一对多-一个帖子属于一个作者-该作者写过很多书。帖子可通过作者访问作者写过的所有书籍","link":"#远程一对多-一个帖子属于一个作者-该作者写过很多书。帖子可通过作者访问作者写过的所有书籍","children":[]},{"level":3,"title":"多态一对一：运营人员就一个图片，发布一篇博客或者一篇文章","slug":"多态一对一-运营人员就一个图片-发布一篇博客或者一篇文章","link":"#多态一对一-运营人员就一个图片-发布一篇博客或者一篇文章","children":[]},{"level":3,"title":"多态一对多：文章可以接受多条评论，视频也可以接受多条评论","slug":"多态一对多-文章可以接受多条评论-视频也可以接受多条评论","link":"#多态一对多-文章可以接受多条评论-视频也可以接受多条评论","children":[]},{"level":3,"title":"多态多对多：可以给一篇文章打上多个标签，也可以给一个视频打上多个标签。并且一个标签可以贴在多个文章上面。一个标签也可以贴在多个视频上","slug":"多态多对多-可以给一篇文章打上多个标签-也可以给一个视频打上多个标签。并且一个标签可以贴在多个文章上面。一个标签也可以贴在多个视频上","link":"#多态多对多-可以给一篇文章打上多个标签-也可以给一个视频打上多个标签。并且一个标签可以贴在多个文章上面。一个标签也可以贴在多个视频上","children":[]}]},{"level":2,"title":"增","slug":"增","link":"#增","children":[]},{"level":2,"title":"改","slug":"改","link":"#改","children":[]},{"level":2,"title":"belongsTo 建立模型关系","slug":"belongsto-建立模型关系","link":"#belongsto-建立模型关系","children":[]},{"level":2,"title":"删除模型关系","slug":"删除模型关系","link":"#删除模型关系","children":[]},{"level":2,"title":"默认模型","slug":"默认模型","link":"#默认模型","children":[]}],"git":{"updatedTime":1713431046000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":1}]},"filePathRelative":"languages/php.md"}');export{w as comp,_ as data};

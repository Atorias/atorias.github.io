import{_ as a,o as e,c as s,a as l}from"./app-QlNul8DB.js";const n={},i=l(`<h1 id="firewalld" tabindex="-1"><a class="header-anchor" href="#firewalld"><span>firewalld</span></a></h1><h2 id="查看状态" tabindex="-1"><a class="header-anchor" href="#查看状态"><span>查看状态</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl status firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="开启防火墙" tabindex="-1"><a class="header-anchor" href="#开启防火墙"><span>开启防火墙</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="关闭防火墙" tabindex="-1"><a class="header-anchor" href="#关闭防火墙"><span>关闭防火墙</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看端口号" tabindex="-1"><a class="header-anchor" href="#查看端口号"><span>查看端口号</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-ntulp</span> <span class="token operator">|</span> <span class="token function">grep</span> port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看端口是否开启" tabindex="-1"><a class="header-anchor" href="#查看端口是否开启"><span>查看端口是否开启</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd --query-port<span class="token operator">=</span><span class="token number">666</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="添加端口" tabindex="-1"><a class="header-anchor" href="#添加端口"><span>添加端口</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd --add-port<span class="token operator">=</span><span class="token number">123</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="添加后必须重载" tabindex="-1"><a class="header-anchor" href="#添加后必须重载"><span>添加后必须重载</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="关闭端口" tabindex="-1"><a class="header-anchor" href="#关闭端口"><span>关闭端口</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--permanent</span> --remove-port<span class="token operator">=</span><span class="token number">123</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="关闭后必须重载" tabindex="-1"><a class="header-anchor" href="#关闭后必须重载"><span>关闭后必须重载</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="若遇到无法开启" tabindex="-1"><a class="header-anchor" href="#若遇到无法开启"><span>若遇到无法开启</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl unmask firewalld.service
systemctl start firewalld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,21),d=[i];function r(t,c){return e(),s("div",null,d)}const p=a(n,[["render",r],["__file","firewalld.html.vue"]]),o=JSON.parse('{"path":"/linux_tools/firewalld.html","title":"firewalld","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"查看状态","slug":"查看状态","link":"#查看状态","children":[]},{"level":2,"title":"开启防火墙","slug":"开启防火墙","link":"#开启防火墙","children":[]},{"level":2,"title":"关闭防火墙","slug":"关闭防火墙","link":"#关闭防火墙","children":[]},{"level":2,"title":"查看端口号","slug":"查看端口号","link":"#查看端口号","children":[]},{"level":2,"title":"查看端口是否开启","slug":"查看端口是否开启","link":"#查看端口是否开启","children":[]},{"level":2,"title":"添加端口","slug":"添加端口","link":"#添加端口","children":[]},{"level":2,"title":"添加后必须重载","slug":"添加后必须重载","link":"#添加后必须重载","children":[]},{"level":2,"title":"关闭端口","slug":"关闭端口","link":"#关闭端口","children":[]},{"level":2,"title":"关闭后必须重载","slug":"关闭后必须重载","link":"#关闭后必须重载","children":[]},{"level":2,"title":"若遇到无法开启","slug":"若遇到无法开启","link":"#若遇到无法开启","children":[]}],"git":{},"filePathRelative":"linux_tools/firewalld.md"}');export{p as comp,o as data};

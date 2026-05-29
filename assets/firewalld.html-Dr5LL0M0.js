import{_ as n,a,b as e,o as l}from"./app-BwP785Qz.js";const i={};function p(c,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="firewalld" tabindex="-1"><a class="header-anchor" href="#firewalld"><span>firewalld</span></a></h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看状态</span></span>
<span class="line">systemctl status firewalld</span>
<span class="line"><span class="token comment">## 开启防火墙</span></span>
<span class="line">systemctl start firewalld</span>
<span class="line"><span class="token comment">## 关闭防火墙</span></span>
<span class="line">systemctl stop firewalld</span>
<span class="line"><span class="token comment">## 查看端口号</span></span>
<span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-ntulp</span> <span class="token operator">|</span> <span class="token function">grep</span> port</span>
<span class="line"><span class="token comment">## 查看端口是否开启</span></span>
<span class="line">firewall-cmd --query-port<span class="token operator">=</span><span class="token number">666</span>/tcp</span>
<span class="line"><span class="token comment">## 添加端口</span></span>
<span class="line">firewall-cmd --add-port<span class="token operator">=</span><span class="token number">123</span>/tcp <span class="token parameter variable">--permanent</span></span>
<span class="line"><span class="token comment">## 添加后必须重载</span></span>
<span class="line">firewall-cmd <span class="token parameter variable">--reload</span></span>
<span class="line"><span class="token comment">## 关闭端口</span></span>
<span class="line">firewall-cmd <span class="token parameter variable">--permanent</span> --remove-port<span class="token operator">=</span><span class="token number">123</span>/tcp</span>
<span class="line"><span class="token comment">## 关闭后必须重载</span></span>
<span class="line">firewall-cmd <span class="token parameter variable">--reload</span></span>
<span class="line"><span class="token comment">## 查看所有端口</span></span>
<span class="line">firewall-cmd --list-all</span>
<span class="line"><span class="token comment">## 若遇到无法开启</span></span>
<span class="line">systemctl unmask firewalld.service</span>
<span class="line">systemctl start firewalld.service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])])}const r=n(i,[["render",p]]),d=JSON.parse('{"path":"/linux_tools/firewalld.html","title":"firewalld","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]}],"git":{"updatedTime":1764836284000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":2,"url":"https://github.com/OldWitch"}]},"filePathRelative":"linux_tools/firewalld.md"}');export{r as comp,d as data};

import{_ as t,o as e,c as s,a as n}from"./app-QlNul8DB.js";const a={},l=n(`<h1 id="systemctl" tabindex="-1"><a class="header-anchor" href="#systemctl"><span>systemctl</span></a></h1><h2 id="go的service配置" tabindex="-1"><a class="header-anchor" href="#go的service配置"><span>go的service配置</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>OA的golang后台程序
<span class="token comment">#After=mysqld.service redis.service</span>

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">User</span><span class="token operator">=</span>root
<span class="token assign-left variable">Group</span><span class="token operator">=</span>root
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/home/code/main
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/home/code
<span class="token assign-left variable">StandardOutput</span><span class="token operator">=</span>null
<span class="token assign-left variable">StandardError</span><span class="token operator">=</span>null
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志"><span>日志</span></a></h2><h2 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令"><span>常用指令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启动服务</span>
systemctl start <span class="token builtin class-name">test</span>
<span class="token comment"># 关闭服务</span>
systemctl stop <span class="token builtin class-name">test</span>
<span class="token comment"># 重启</span>
systemctl restart <span class="token builtin class-name">test</span>
<span class="token comment"># 开机启动</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token builtin class-name">test</span>
systemctl disable <span class="token builtin class-name">test</span>
systemctl is-enabled <span class="token builtin class-name">test</span>
<span class="token comment"># 查看服务</span>
systemctl status <span class="token builtin class-name">test</span>
systemctl is-active <span class="token builtin class-name">test</span> 
systemctl list-units
<span class="token comment"># 干掉服务</span>
systemctl <span class="token function">kill</span> <span class="token builtin class-name">test</span>
<span class="token comment"># 加载配置文件</span>
systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识"><span>基础知识</span></a></h2><h3 id="unit文件位置" tabindex="-1"><a class="header-anchor" href="#unit文件位置"><span>unit文件位置</span></a></h3><p><code>优先级高的会覆盖低的</code></p><table><thead><tr><th style="text-align:left;">路径</th><th style="text-align:left;">说明</th><th style="text-align:left;">优先级</th></tr></thead><tbody><tr><td style="text-align:left;">/etc/systemd/system</td><td style="text-align:left;">与安装的 RPM 软件包一起分发的 systemd 单元文件</td><td style="text-align:left;">低</td></tr><tr><td style="text-align:left;">/run/systemd/system</td><td style="text-align:left;">在运行时创建的 systemd 单元文件。该目录优先于安装了的服务单元文件的目录</td><td style="text-align:left;">中</td></tr><tr><td style="text-align:left;">/usr/lib/systemd/system</td><td style="text-align:left;">使用 systemctl enable 命令创建的 systemd 单元文件，以及为扩展服务添加的单元文件。这个目录优先于带有运行时单元文件的目录</td><td style="text-align:left;">高</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>System Unit Search Path  
       /etc/systemd/system.control/*  
       /run/systemd/system.control/*  
       /run/systemd/transient/*  
       /run/systemd/generator.early/*  
       /etc/systemd/system/*  
       /etc/systemd/system.attached/*  
       /run/systemd/system/*  
       /run/systemd/system.attached/*  
       /run/systemd/generator/*  
       <span class="token punctuation">..</span>.  
       /usr/lib/systemd/system/*  
       /run/systemd/generator.late/*  

User Unit Search Path
       ~/.config/systemd/user.control/*
       <span class="token environment constant">$XDG_RUNTIME_DIR</span>/systemd/user.control/*
       <span class="token environment constant">$XDG_RUNTIME_DIR</span>/systemd/transient/*
       <span class="token environment constant">$XDG_RUNTIME_DIR</span>/systemd/generator.early/*
       ~/.config/systemd/user/*
       <span class="token environment constant">$XDG_CONFIG_DIRS</span>/systemd/user/*
       /etc/systemd/user/*
       <span class="token environment constant">$XDG_RUNTIME_DIR</span>/systemd/user/*
       /run/systemd/user/*
       <span class="token environment constant">$XDG_RUNTIME_DIR</span>/systemd/generator/*
       <span class="token variable">$XDG_DATA_HOME</span>/systemd/user/*
       <span class="token environment constant">$XDG_DATA_DIRS</span>/systemd/user/*
       <span class="token punctuation">..</span>.
       /usr/lib/systemd/user/*
       <span class="token environment constant">$XDG_RUNTIME_DIR</span>/systemd/generator.late/*

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unit文件类型" tabindex="-1"><a class="header-anchor" href="#unit文件类型"><span>unit文件类型</span></a></h2><table><thead><tr><th style="text-align:left;">系统资源类型</th><th style="text-align:left;">单元文件扩展名</th><th style="text-align:left;">单元文件描述</th></tr></thead><tbody><tr><td style="text-align:left;">Service</td><td style="text-align:left;">.service</td><td style="text-align:left;">最常见Unit 文件类型，封装守护进程的启动、停止、重启和重载操作，也就是一直讲的服务</td></tr><tr><td style="text-align:left;">Target</td><td style="text-align:left;">.target</td><td style="text-align:left;">定义 target 信息及依赖关系，一般仅包含 Unit 段</td></tr><tr><td style="text-align:left;">Device</td><td style="text-align:left;">.device</td><td style="text-align:left;">对于 /dev 目录下的硬件设备，主要用于定义设备之间的依赖关系</td></tr><tr><td style="text-align:left;">Mount</td><td style="text-align:left;">.mount</td><td style="text-align:left;">定义文件系统的挂载点，可以替代过去的 /etc/fstab 配置文件</td></tr><tr><td style="text-align:left;">Automount</td><td style="text-align:left;">.automount</td><td style="text-align:left;">用于控制自动挂载文件系统，相当于 SysV-init 的 autofs 服务</td></tr><tr><td style="text-align:left;">Path</td><td style="text-align:left;">.path</td><td style="text-align:left;">用于监控指定目录或文件的变化，并触发其它 Unit 运行</td></tr><tr><td style="text-align:left;">Scope</td><td style="text-align:left;">.scope</td><td style="text-align:left;">这种 Unit 文件不是用户创建的，而是 Systemd 运行时产生的，描述一些系统服务的分组信息</td></tr><tr><td style="text-align:left;">Slice</td><td style="text-align:left;">.slice</td><td style="text-align:left;">用于表示一个 CGroup 的树</td></tr><tr><td style="text-align:left;">Snapshot</td><td style="text-align:left;">.snapshot</td><td style="text-align:left;">用于表示一个由 systemctl snapshot 命令创建的 Systemd Units 运行状态快照，可以切回某个快照</td></tr><tr><td style="text-align:left;">Socket</td><td style="text-align:left;">.socket</td><td style="text-align:left;">监控来自于系统或网络的数据消息</td></tr><tr><td style="text-align:left;">Swap</td><td style="text-align:left;">.swap</td><td style="text-align:left;">定义一个用户做虚拟内存的交换分区</td></tr><tr><td style="text-align:left;">Timer</td><td style="text-align:left;">.timer</td><td style="text-align:left;">用于配置在特定时间触发的任务，替代了 Crontab 的功能</td></tr></tbody></table><h2 id="unit文件字段详解" tabindex="-1"><a class="header-anchor" href="#unit文件字段详解"><span>unit文件字段详解</span></a></h2><p>总共有三个部分<code>[Unit]</code>、<code>[Service]</code>、<code>[Install]</code></p><h3 id="unit" tabindex="-1"><a class="header-anchor" href="#unit"><span>[Unit]</span></a></h3><p><code>单元文件可能包含 [Unit] 部分，该部分携带有关单元的通用信息，该信息不依赖于单元类型</code></p><h3 id="service" tabindex="-1"><a class="header-anchor" href="#service"><span>[Service]</span></a></h3><p><code>Type=simple</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>[Install]</span></a></h3><table><thead><tr><th style="text-align:left;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">Alias</td><td style="text-align:left;">为这个单元提供空格分开的额外名称列表。除 systemctl enable 以外，多数systemctl 命令可使用别名而不是实际的单元名称</td></tr><tr><td style="text-align:left;">RequiredBy</td><td style="text-align:left;">依赖于这个单元的单元列表。当启用此单元时，在 RequiredBy 中列出的单元会获得对这个单元的一个 Require 依赖项</td></tr><tr><td style="text-align:left;">WantedBy</td><td style="text-align:left;">依赖于这个单元的单位列表。当启用这个单元时，在 WantedBy 中列出的单元会得到一个 Want 依赖项</td></tr><tr><td style="text-align:left;">Also</td><td style="text-align:left;">指定要随这个单元一起安装或卸载的单元列表</td></tr><tr><td style="text-align:left;">DefaultInstance</td><td style="text-align:left;">仅限于实例化单元，这个选项指定启用单位的默认实例</td></tr></tbody></table>`,22),i=[l];function d(r,c){return e(),s("div",null,i)}const m=t(a,[["render",d],["__file","systemctl.html.vue"]]),v=JSON.parse('{"path":"/linux_tools/systemctl.html","title":"systemctl","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"go的service配置","slug":"go的service配置","link":"#go的service配置","children":[]},{"level":2,"title":"日志","slug":"日志","link":"#日志","children":[]},{"level":2,"title":"常用指令","slug":"常用指令","link":"#常用指令","children":[]},{"level":2,"title":"基础知识","slug":"基础知识","link":"#基础知识","children":[{"level":3,"title":"unit文件位置","slug":"unit文件位置","link":"#unit文件位置","children":[]}]},{"level":2,"title":"unit文件类型","slug":"unit文件类型","link":"#unit文件类型","children":[]},{"level":2,"title":"unit文件字段详解","slug":"unit文件字段详解","link":"#unit文件字段详解","children":[{"level":3,"title":"[Unit]","slug":"unit","link":"#unit","children":[]},{"level":3,"title":"[Service]","slug":"service","link":"#service","children":[]},{"level":3,"title":"[Install]","slug":"install","link":"#install","children":[]}]}],"git":{},"filePathRelative":"linux_tools/systemctl.md"}');export{m as comp,v as data};

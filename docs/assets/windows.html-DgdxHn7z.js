import{_ as e,o as a,c as n,a as s}from"./app-QlNul8DB.js";const t={},r=s(`<h1 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>windows</span></a></h1><h2 id="重装系统以后注意事项" tabindex="-1"><a class="header-anchor" href="#重装系统以后注意事项"><span>重装系统以后注意事项</span></a></h2><h3 id="antimalware-service-executable-cpu占用高" tabindex="-1"><a class="header-anchor" href="#antimalware-service-executable-cpu占用高"><span>Antimalware Service Executable CPU占用高</span></a></h3><h4 id="_1-排除设置" tabindex="-1"><a class="header-anchor" href="#_1-排除设置"><span>1. 排除设置</span></a></h4><pre><code>病毒和威胁防护设置 - 管理设置 - 排除所有目录
</code></pre><h4 id="_2-软件直接关闭" tabindex="-1"><a class="header-anchor" href="#_2-软件直接关闭"><span>2. 软件直接关闭</span></a></h4><p><a href="softwares/Defender_Control_2.1.0_Single.zip">Defender_Control_2.1.0_Single.zip</a></p><h3 id="关闭edge后台进程" tabindex="-1"><a class="header-anchor" href="#关闭edge后台进程"><span>关闭edge后台进程</span></a></h3><pre><code>edge浏览器设置-&gt;系统和性能-&gt;启动增强关闭
</code></pre><h2 id="windows为cmd-powershell设置代理" tabindex="-1"><a class="header-anchor" href="#windows为cmd-powershell设置代理"><span>Windows为cmd/powershell设置代理</span></a></h2><pre><code>设置代理
netsh winhttp set proxy 127.0.0.1:7890
取消代理
netsh winhttp reset proxy
查看代理
netsh winhttp show proxy
</code></pre>`,11),i=[r];function l(d,c){return a(),n("div",null,i)}const h=e(t,[["render",l],["__file","windows.html.vue"]]),p=JSON.parse('{"path":"/foundation/windows.html","title":"windows","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"重装系统以后注意事项","slug":"重装系统以后注意事项","link":"#重装系统以后注意事项","children":[{"level":3,"title":"Antimalware Service Executable CPU占用高","slug":"antimalware-service-executable-cpu占用高","link":"#antimalware-service-executable-cpu占用高","children":[]},{"level":3,"title":"关闭edge后台进程","slug":"关闭edge后台进程","link":"#关闭edge后台进程","children":[]}]},{"level":2,"title":"Windows为cmd/powershell设置代理","slug":"windows为cmd-powershell设置代理","link":"#windows为cmd-powershell设置代理","children":[]}],"git":{},"filePathRelative":"foundation/windows.md"}');export{h as comp,p as data};

import{_ as s,o as n,c as a,a as e}from"./app-QlNul8DB.js";const l={},i=e(`<h1 id="zlib" tabindex="-1"><a class="header-anchor" href="#zlib"><span>zlib</span></a></h1><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token builtin class-name">cd</span> /usr/local/src/
<span class="token function">wget</span> https://www.zlib.net/zlib-1.3.1.tar.gz
<span class="token function">mv</span> zlib-1.3.1 zlib
<span class="token builtin class-name">cd</span> zlib
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/zlib
<span class="token function">rm</span> <span class="token parameter variable">-y</span> /etc/ld.so.conf.d/zlib.conf
<span class="token function">touch</span> /etc/ld.so.conf.d/zlib.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/usr/local/zlib/lib&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ld.so.conf.d/zlib.conf
ldconfig <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[i];function t(o,r){return n(),a("div",null,c)}const p=s(l,[["render",t],["__file","zlib.html.vue"]]),b=JSON.parse('{"path":"/compile/zlib.html","title":"zlib","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"filePathRelative":"compile/zlib.md"}');export{p as comp,b as data};

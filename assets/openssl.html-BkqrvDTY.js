import{_ as n,a,b as e,o as l}from"./app-BwP785Qz.js";const p={};function i(c,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="openssl" tabindex="-1"><a class="header-anchor" href="#openssl"><span>openssl</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">yum <span class="token function">install</span> gcc <span class="token parameter variable">-y</span></span>
<span class="line">yum group <span class="token function">install</span> <span class="token string">&#39;Development Tools&#39;</span> <span class="token parameter variable">-y</span></span>
<span class="line">yum <span class="token function">install</span> perl-core zlib-devel <span class="token parameter variable">-y</span></span>
<span class="line"></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/ssl</span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">cd</span> /usr/local/src</span>
<span class="line"><span class="token function">wget</span> https://www.openssl.org/source/openssl-1.1.1q.tar.gz</span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> openssl-1.1.1q.tar.gz</span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;openssl&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    rf <span class="token parameter variable">-rf</span> openssl-old</span>
<span class="line">    <span class="token function">mv</span> openssl openssl-old</span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"><span class="token function">mv</span> openssl-1.1.1q openssl</span>
<span class="line"><span class="token builtin class-name">cd</span> openssl</span>
<span class="line"><span class="token function">make</span> clean</span>
<span class="line">./config  <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/openssl <span class="token parameter variable">--openssldir</span><span class="token operator">=</span>/usr/local/openssl/ssl shared zlib</span>
<span class="line"><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/bin/openssl</span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/bin/openssl /usr/bin/openssl</span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/include/openssl</span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/include/openssl /usr/include/openssl</span>
<span class="line"></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-f</span> /etc/ld.so.conf.d/openssl.conf</span>
<span class="line"><span class="token function">touch</span> /etc/ld.so.conf.d/openssl.conf</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;/usr/local/openssl/lib&#39;</span> <span class="token operator">&gt;</span> /etc/ld.so.conf.d/openssl.conf</span>
<span class="line">ldconfig <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const t=n(p,[["render",i]]),r=JSON.parse('{"path":"/compile/openssl.html","title":"openssl","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1713431046000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":1,"url":"https://github.com/OldWitch"}]},"filePathRelative":"compile/openssl.md"}');export{t as comp,r as data};

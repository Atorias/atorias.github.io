import{_ as s,o as n,c as a,a as e}from"./app-BoQnz2iZ.js";const l={},i=e(`<h1 id="openssl" tabindex="-1"><a class="header-anchor" href="#openssl"><span>openssl</span></a></h1><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> gcc <span class="token parameter variable">-y</span>
yum group <span class="token function">install</span> <span class="token string">&#39;Development Tools&#39;</span> <span class="token parameter variable">-y</span>
yum <span class="token function">install</span> perl-core zlib-devel <span class="token parameter variable">-y</span>

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/ssl

<span class="token builtin class-name">cd</span> /usr/local/src
<span class="token function">wget</span> https://www.openssl.org/source/openssl-1.1.1q.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> openssl-1.1.1q.tar.gz

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;openssl&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    rf <span class="token parameter variable">-rf</span> openssl-old
    <span class="token function">mv</span> openssl openssl-old
<span class="token keyword">fi</span>
<span class="token function">mv</span> openssl-1.1.1q openssl
<span class="token builtin class-name">cd</span> openssl
<span class="token function">make</span> clean
./config  <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/openssl <span class="token parameter variable">--openssldir</span><span class="token operator">=</span>/usr/local/openssl/ssl shared zlib
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/bin/openssl
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/bin/openssl /usr/bin/openssl
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/include/openssl
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/include/openssl /usr/include/openssl

<span class="token function">rm</span> <span class="token parameter variable">-f</span> /etc/ld.so.conf.d/openssl.conf
<span class="token function">touch</span> /etc/ld.so.conf.d/openssl.conf
<span class="token builtin class-name">echo</span> <span class="token string">&#39;/usr/local/openssl/lib&#39;</span> <span class="token operator">&gt;</span> /etc/ld.so.conf.d/openssl.conf
ldconfig <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function o(c,t){return n(),a("div",null,p)}const d=s(l,[["render",o],["__file","openssl.html.vue"]]),u=JSON.parse('{"path":"/compile/openssl.html","title":"openssl","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1713431046000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":1}]},"filePathRelative":"compile/openssl.md"}');export{d as comp,u as data};

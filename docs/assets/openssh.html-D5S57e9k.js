import{_ as s,o as n,c as a,a as e}from"./app-DtkUBie_.js";const t={},i=e(`<h1 id="openssh" tabindex="-1"><a class="header-anchor" href="#openssh"><span>openssh</span></a></h1><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">openssh_version</span><span class="token operator">=</span>openssh-9.6p1
<span class="token assign-left variable">date_time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d—%H:%M<span class="token variable">)</span></span>

<span class="token builtin class-name">cd</span> /usr/local/src
<span class="token function">wget</span> https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/<span class="token variable">$openssh_version</span>.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> openssh-9.6p1.tar.gz
<span class="token function">mv</span> openssh-9.6p1 openssh
<span class="token builtin class-name">cd</span> openssh
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/openssh <span class="token punctuation">\\</span>
    <span class="token parameter variable">--sysconfdir</span><span class="token operator">=</span>/etc/ssh <span class="token punctuation">\\</span>
    --with-ssl-dir<span class="token operator">=</span>/usr/local/openssl <span class="token punctuation">\\</span>
    --with-zlib<span class="token operator">=</span>/usr/local/zlib

<span class="token comment"># init启动脚本备份</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;/etc/init.d/sshd&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">mv</span> /etc/init.d/sshd /etc/init.d/sshd_<span class="token variable">$date_time</span>.bak
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot; /etc/init.d/sshd不存在 &quot;</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m Not backed up(可忽略)<span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token keyword">fi</span>
<span class="token function">cp</span> /usr/local/src/contrib/redhat/sshd.init /etc/init.d/sshd
<span class="token function">chmod</span> u+x /etc/init.d/sshd
<span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> sshd <span class="token comment">##自启动</span>
<span class="token function">chkconfig</span> <span class="token parameter variable">--list</span> <span class="token operator">|</span> <span class="token function">grep</span> sshd
<span class="token function">chkconfig</span> sshd on

<span class="token comment"># systemd启动脚本备份</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;/usr/lib/systemd/system/sshd.service&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">mv</span> /usr/lib/systemd/system/sshd.service /usr/lib/systemd/system/sshd.service_bak
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot; sshd.service不存在&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m Not backed up(可忽略)<span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># 备份ssh</span>
<span class="token function">cp</span> <span class="token parameter variable">-ra</span> /etc/ssh /etc/ssh_<span class="token variable">$date_time</span>.bak

<span class="token comment">#备份sshd.pam文件</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;/etc/pam.d/sshd.pam&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">mv</span> /etc/pam.d/sshd.pam /etc/pam.d/sshd.pam_<span class="token variable">$date_time</span>.bak
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot; sshd.pam不存在&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m Not backed up(可忽略)<span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token keyword">fi</span>
<span class="token function">cp</span> <span class="token parameter variable">-rf</span> /usr/local/src/openssh/contrib/redhat/sshd.pam /etc/pam.d/sshd.pam

<span class="token comment"># 迁移ssh_config</span>
<span class="token function">cp</span> <span class="token parameter variable">-rf</span> /usr/local/src/openssh/sshd_config /etc/ssh/sshd_config
<span class="token comment"># 给所有Subsystem 加上注释#</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/Subsystem/#Subsystem/g&#39;</span> /etc/ssh/sshd_config
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Subsystem sftp /usr/local/src/openssh/libexec/sftp-server&quot;</span> <span class="token operator">&gt;&gt;</span>/etc/ssh/sshd_config
<span class="token function">cp</span> <span class="token parameter variable">-rf</span> /usr/local/openssh/sbin/sshd /usr/sbin/sshd
<span class="token function">cp</span> <span class="token parameter variable">-rf</span> /usr/local/openssh/bin/ssh /usr/bin/ssh
<span class="token function">cp</span> <span class="token parameter variable">-rf</span> /usr/local/openssh/bin/ssh-keygen /usr/bin/ssh-keygen
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/#PasswordAuthentication\\ yes/PasswordAuthentication\\ yes/g&#39;</span> /etc/ssh/sshd_config
<span class="token comment">#grep -v &quot;[[:space:]]*#&quot; /etc/ssh/sshd_config  |grep &quot;PubkeyAuthentication yes&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;PermitRootLogin yes&#39;</span> <span class="token operator">&gt;&gt;</span>/etc/ssh/sshd_config

<span class="token comment">#重启sshd</span>
<span class="token function">service</span> sshd start <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
systemctl start sshd
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[33m--------------------------------------------------------------- <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot; 启动OpenSSH服务成功&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m Success<span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[33m--------------------------------------------------------------- <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
<span class="token function">sleep</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function l(c,o){return n(),a("div",null,p)}const d=s(t,[["render",l],["__file","openssh.html.vue"]]),u=JSON.parse('{"path":"/compile/openssh.html","title":"openssh","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1713431046000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":1}]},"filePathRelative":"compile/openssh.md"}');export{d as comp,u as data};

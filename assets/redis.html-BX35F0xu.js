import{_ as a,a as n,b as e,o as l}from"./app-BwP785Qz.js";const i={};function p(t,s){return l(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>redis</span></a></h1><h2 id="redis-service" tabindex="-1"><a class="header-anchor" href="#redis-service"><span>redis.service</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Description</span><span class="token operator">=</span>Advanced key-value store</span>
<span class="line"><span class="token assign-left variable">After</span><span class="token operator">=</span>network.target</span>
<span class="line"><span class="token assign-left variable">Documentation</span><span class="token operator">=</span>http://redis.io/documentation, man:redis-server<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Type</span><span class="token operator">=</span>notify</span>
<span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/redis-server /etc/redis/redis.conf <span class="token parameter variable">--supervised</span> systemd <span class="token parameter variable">--daemonize</span> no</span>
<span class="line"><span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/run/redis/redis-server.pid</span>
<span class="line"><span class="token assign-left variable">TimeoutStopSec</span><span class="token operator">=</span><span class="token number">0</span></span>
<span class="line"><span class="token assign-left variable">Restart</span><span class="token operator">=</span>always</span>
<span class="line"><span class="token assign-left variable">User</span><span class="token operator">=</span>redis</span>
<span class="line"><span class="token assign-left variable">Group</span><span class="token operator">=</span>redis</span>
<span class="line"><span class="token assign-left variable">RuntimeDirectory</span><span class="token operator">=</span>redis</span>
<span class="line"><span class="token assign-left variable">RuntimeDirectoryMode</span><span class="token operator">=</span><span class="token number">2755</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">UMask</span><span class="token operator">=</span>007</span>
<span class="line"><span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">LimitNOFILE</span><span class="token operator">=</span><span class="token number">65535</span></span>
<span class="line"><span class="token assign-left variable">PrivateDevices</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">ProtectHome</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">ProtectSystem</span><span class="token operator">=</span>strict</span>
<span class="line"><span class="token assign-left variable">ReadWritePaths</span><span class="token operator">=</span>-/var/lib/redis</span>
<span class="line"><span class="token assign-left variable">ReadWritePaths</span><span class="token operator">=</span>-/var/log/redis</span>
<span class="line"><span class="token assign-left variable">ReadWritePaths</span><span class="token operator">=</span>-/var/run/redis</span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">CapabilityBoundingSet</span><span class="token operator">=</span></span>
<span class="line"><span class="token assign-left variable">LockPersonality</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">MemoryDenyWriteExecute</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">NoNewPrivileges</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">PrivateUsers</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">ProtectClock</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">ProtectControlGroups</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">ProtectHostname</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">ProtectKernelLogs</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">ProtectKernelModules</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">ProtectKernelTunables</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">ProtectProc</span><span class="token operator">=</span>invisible</span>
<span class="line"><span class="token assign-left variable">RemoveIPC</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">RestrictAddressFamilies</span><span class="token operator">=</span>AF_INET AF_INET6 AF_UNIX</span>
<span class="line"><span class="token assign-left variable">RestrictNamespaces</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">RestrictRealtime</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">RestrictSUIDSGID</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">SystemCallArchitectures</span><span class="token operator">=</span>native</span>
<span class="line"><span class="token assign-left variable">SystemCallFilter</span><span class="token operator">=</span>@system-service</span>
<span class="line"><span class="token assign-left variable">SystemCallFilter</span><span class="token operator">=~</span> @privileged @resources</span>
<span class="line"></span>
<span class="line"><span class="token comment"># redis-server can write to its own config file when in cluster mode so we</span></span>
<span class="line"><span class="token comment"># permit writing there by default. If you are not using this feature, it is</span></span>
<span class="line"><span class="token comment"># recommended that you remove this line.</span></span>
<span class="line"><span class="token assign-left variable">ReadWriteDirectories</span><span class="token operator">=</span>-/etc/redis</span>
<span class="line"></span>
<span class="line"><span class="token comment"># This restricts this service from executing binaries other than redis-server</span></span>
<span class="line"><span class="token comment"># itself. This is really effective at e.g. making it impossible to an</span></span>
<span class="line"><span class="token comment"># attacker to spawn a shell on the system, but might be more restrictive</span></span>
<span class="line"><span class="token comment"># than desired. If you need to, you can permit the execution of extra</span></span>
<span class="line"><span class="token comment"># binaries by adding an extra ExecPaths= directive with the command</span></span>
<span class="line"><span class="token comment"># systemctl edit redis-server.service</span></span>
<span class="line"><span class="token assign-left variable">NoExecPaths</span><span class="token operator">=</span>/</span>
<span class="line"><span class="token assign-left variable">ExecPaths</span><span class="token operator">=</span>/usr/bin/redis-server /usr/lib /lib</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>
<span class="line"><span class="token assign-left variable">Alias</span><span class="token operator">=</span>redis.service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])])}const c=a(i,[["render",p]]),o=JSON.parse('{"path":"/linux_tools/redis.html","title":"redis","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"redis.service","slug":"redis-service","link":"#redis-service","children":[]}],"git":{"updatedTime":1740984355000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":1,"url":"https://github.com/OldWitch"}]},"filePathRelative":"linux_tools/redis.md"}');export{c as comp,o as data};

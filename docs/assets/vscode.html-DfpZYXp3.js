import{_ as i,r as l,o as d,c as t,b as e,d as s,e as r,a as n}from"./app-CELWb2CF.js";const c={},o=n(`<h1 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode"><span>vscode</span></a></h1><h2 id="remote-ssh-服务器pem权限设置" tabindex="-1"><a class="header-anchor" href="#remote-ssh-服务器pem权限设置"><span>remote-ssh 服务器pem权限设置</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>    右键 属性 安全 高级 禁用继承 选第二项 然后添加administrator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="离线版扩展" tabindex="-1"><a class="header-anchor" href="#离线版扩展"><span>离线版扩展</span></a></h2><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h3>`,5),v={href:"https://marketplace.visualstudio.com/vscode",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"Download Extension",-1),h=n(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p><code>vscode中打开扩展-&gt;右上角三个点-&gt;从VSIX安装</code></p><h2 id="光标" tabindex="-1"><a class="header-anchor" href="#光标"><span>光标</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>    vscode 同时编辑多处，多个光标 快捷键
    一、重命名变量

    <span class="token number">1</span>、首先看看自己需要同时修改多处的代码是不是要重命名一个变量，如果是的话，有现成的快捷键f2。选中一个变量，按f2，弹出一个小窗口，在里面输入内容后按回车，所有该变量都会被重命名。

    <span class="token number">2</span>、但是要注意，在js文件中，如果这个变量没有用var或者const或者let声明，会无法重命名。

    二、多光标

    <span class="token number">1</span>、按住alt，用鼠标左键点击，可以出现多个光标，输入的代码可以在光标处同时增加。

    <span class="token number">2</span>、按住Ctrl + Alt，再按键盘上向上或者向下的键，可以使一列上出现多个光标。

    <span class="token number">3</span>、选中一段文字，按shift+alt+i，可以在每行末尾出现光标

    <span class="token number">4</span>、光标放在一个地方，按ctrl+shift+L或者ctrl+f2，可以在页面中出现这个词的不同地方都出现光标。有时候这个快捷键的作用和f2重命名变量类似，但是它更加广泛，因为还可以对比如字符串相同的非同一变量或函数类的东西修改。

    <span class="token number">5</span>、按shift+alt，再使用鼠标拖动，也可以出现竖直的列光标，同时可以选中多列。

    <span class="token number">6</span>、任何光标操作，可以按Ctrl + U取消

    三、替换字符串

    <span class="token number">1</span>、按ctrl+f，可以搜索当前页面，然后按搜索框左边的小三角符号，可以切换成替换模式。有时候使用字符串替换，比多光标方便，但是注意别不小心替换掉不想替换的内容。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function u(p,b){const a=l("ExternalLinkIcon");return d(),t("div",null,[o,e("p",null,[e("a",v,[s("https://marketplace.visualstudio.com/vscode"),r(a)]),s(" 找到 "),m]),h])}const _=i(c,[["render",u],["__file","vscode.html.vue"]]),k=JSON.parse('{"path":"/foundation/vscode.html","title":"vscode","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"remote-ssh 服务器pem权限设置","slug":"remote-ssh-服务器pem权限设置","link":"#remote-ssh-服务器pem权限设置","children":[]},{"level":2,"title":"离线版扩展","slug":"离线版扩展","link":"#离线版扩展","children":[{"level":3,"title":"下载","slug":"下载","link":"#下载","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]}]},{"level":2,"title":"光标","slug":"光标","link":"#光标","children":[]}],"git":{"updatedTime":1713431046000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":1}]},"filePathRelative":"foundation/vscode.md"}');export{_ as comp,k as data};

<template><div><h1 id="windows下安装绿色版mysql" tabindex="-1"><a class="header-anchor" href="#windows下安装绿色版mysql"><span>windows下安装绿色版mysql</span></a></h1>
<h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本"><span>版本</span></a></h2>
<p>mysql.5.7</p>
<h2 id="安装过程" tabindex="-1"><a class="header-anchor" href="#安装过程"><span>安装过程</span></a></h2>
<ol>
<li>解压mysql绿色版文件夹，放置于你想要安装的位置。</li>
<li>进入解压的mysql文件夹，创建data文件夹和my.ini文件</li>
<li>打开my.ini文件写入一下内容</li>
</ol>
<div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    [mysqld]</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    bind-address</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    #mysql端口号设置</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    port</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 3307</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    #basedir（刚创建的data文件夹目录） 和 datadir视自己情况而定</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    basedir</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">D:\Program Files\mysqls\mysql-5.7.21-winx64</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    datadir</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">D:\Program Files\mysqls\mysql-5.7.21-winx64\data\</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    max_connections</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1000</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    character_set_server</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> utf8</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    #mysql7</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    sql_mode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    #mysql8</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    #sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    [client]</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    default-character-set</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">utf8</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    [mysql]</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    default-character-set</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">utf8</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>将bin目录加入到环境变量之中。</li>
<li>以管理员权限进入bin目录。</li>
<li>执行以下命令</li>
</ol>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    mysqld</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    mysqld</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --initialize</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --console</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>执行完毕后，会在 <em>root@localhost:</em> 后生成一个随机的mysql密码， 一定要将记住它。</li>
<li>启动mysql服务</li>
</ol>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    net</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mysql</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="9">
<li>命令行中登录mysql</li>
</ol>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    mysql</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -u</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> root</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    回车（Enter）后让你输入密码，该密码就是步骤7的密码</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10">
<li>进入Mysql后修改密码</li>
</ol>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    SET</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> PASSWORD</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> PASSWORD</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">'此处是你需要设置的密码'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>



<template><div><p>Docker挂载主机目录访问如果出现<code v-pre>cannot open directory : Permission denied</code>。<br>
解决办法：在挂载目录后多添加一个参数 <code v-pre>--privileged=true</code>即可</p>
<h1 id="容器数据卷作用" tabindex="-1"><a class="header-anchor" href="#容器数据卷作用"><span>容器数据卷作用</span></a></h1>
<p>Docker容器数据卷是Docker容器的持久化存储，数据卷是容器和宿主机之间的共享目录，容器的数据卷可以挂载到容器中，也可以挂载到宿主机中。<br>
Docker容器通过容器数据卷的方式完成数据的持久化重要资料的备份，通过目录的映射，容器内的数据备份+持久化到本地主机目录。<br>
简单来说是将Docker容器内的数据保存到宿主机的磁盘中。</p>
<h1 id="容器卷的特点" tabindex="-1"><a class="header-anchor" href="#容器卷的特点"><span>容器卷的特点</span></a></h1>
<ol>
<li>容器卷可在容器之间共享或重用数据。</li>
<li>卷中的更改可以直接实时生效，无需去定时备份。</li>
<li>数据卷中的更改不会包含在镜像的更新中。</li>
<li>数据卷的生命周期一直持续到没有容器使用它为止。</li>
</ol>
<h1 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h1>
<p>挂载容器卷</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --privileged=true</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 宿主机端口:容器端口</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 宿主机绝对路径目录:容器目录</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 容器名称</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 镜像名称:镜像版本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --privileged=true</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 80:80</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /var/www/html:/var/www/html</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> my-apache-app</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> httpd:2.4</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看挂载容器卷</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> inspect</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 容器名称or容器ID</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h1 id="读写规则映射" tabindex="-1"><a class="header-anchor" href="#读写规则映射"><span>读写规则映射</span></a></h1>
<h2 id="读写权限-默认-rw" tabindex="-1"><a class="header-anchor" href="#读写权限-默认-rw"><span>读写权限(默认):rw</span></a></h2>
<h2 id="只读-ro" tabindex="-1"><a class="header-anchor" href="#只读-ro"><span>只读:ro</span></a></h2>
<p>容器内部会被限制，只能读取不能写入，此时像写入只能由宿主机写入，容器内部会读到的</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --privileged=true</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 宿主机端口:容器端口</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 宿主机绝对路径目录:容器目录:ro</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 容器名称</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 镜像名称:镜像版本</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h1 id="卷的继承和共享" tabindex="-1"><a class="header-anchor" href="#卷的继承和共享"><span>卷的继承和共享</span></a></h1>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --privileged=true</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --volume-from</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 父类</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">即将要继承的容器</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 容器名称</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 镜像名称:镜像版本</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>



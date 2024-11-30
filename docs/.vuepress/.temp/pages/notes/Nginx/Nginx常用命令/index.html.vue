<template><div><h4 id="linux下常用命令" tabindex="-1"><a class="header-anchor" href="#linux下常用命令"><span>Linux下常用命令</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 首先进入Nginx的安装目录，一般情况下安装目录为  /usr/local/local/sbin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看版本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -v</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 启动</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./nginx</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 重启</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> reopen</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 重新载入配置文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> reload</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看nginx启动进程</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ps</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -ef</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> nginx</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="windos下常用命令" tabindex="-1"><a class="header-anchor" href="#windos下常用命令"><span>Windos下常用命令</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 首先进入nginx目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 1. 启动</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> nginx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ningx.exe</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 2. 暂停</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">nginx.exe</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> stop</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 快速暂停</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">nginx.exe</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> quit</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 完整有序的停止nginx</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 3. 重新加载配置文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">nginx.exe</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> reload</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 4. 查看nginx进程</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">tasklist</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /fi</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">imagename eq nginx.exe</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 5. 特殊设置nginx的配置文件路径</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> conf/nginx.conf</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="windows下nginx脚本-xxx-bat" tabindex="-1"><a class="header-anchor" href="#windows下nginx脚本-xxx-bat"><span>Windows下Nginx脚本（xxx.bat）</span></a></h4>
<div class="language-bat line-numbers-mode" data-ext="bat" data-title="bat"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span># 重启</span></span>
<span class="line"><span>@echo off</span></span>
<span class="line"><span>nginx -s reload</span></span>
<span class="line"><span>pause</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动</span></span>
<span class="line"><span>@echo off</span></span>
<span class="line"><span>start nginx.exe</span></span>
<span class="line"><span>pause</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 停止</span></span>
<span class="line"><span>@echo off</span></span>
<span class="line"><span>nginx -s stop</span></span>
<span class="line"><span>pause</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看进程（查看Nginx是否启动）</span></span>
<span class="line"><span>@echo off</span></span>
<span class="line"><span>tasklist /fi "imagename eq nginx.exe"</span></span>
<span class="line"><span>pause</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



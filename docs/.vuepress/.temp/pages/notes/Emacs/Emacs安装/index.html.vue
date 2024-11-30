<template><div><h3 id="下载emacs安装包-tar-gz" tabindex="-1"><a class="header-anchor" href="#下载emacs安装包-tar-gz"><span>下载Emacs安装包 tar.gz</span></a></h3>
<p>https://mirrors.ustc.edu.cn/gnu/emacs/</p>
<h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h3>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> list</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> gtk3-devel</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> libXpm-devel</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> libtiff-devel</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> gnutls-devel</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> giflib-devel</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> libjpeg-turbo-devel</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ncurses-devel</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> libpng-devel</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  emacs目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./configure</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --prefix=/home/xxx</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # prefix为安装目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">make</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">make</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



<template><div><h2 id="出现的问题" tabindex="-1"><a class="header-anchor" href="#出现的问题"><span>出现的问题</span></a></h2>
<p>Error mounting /dev/xx/run/media/cenos/软件：Filesystem type ntfs not configured in kernel.</p>
<h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h3>
<ol>
<li>
<p>添加 Centos的ntfs源</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> wget</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -O</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/yum.repos.d/epel.repo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> http://mirrors.aliyun.com/repo/epel-7.repo</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>更新本地源</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> update</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>安装ntfs-g3,安装之后无需重启就可以使用带（NTFS格式的）优盘或者硬盘</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> *</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ntfs</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">*</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>对应的会安装三个依赖：ntfs-g3 ntfs-g3-devel ntfsprogs</p>
</li>
</ol>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p><span style='color: red; font-size: 20px'>解除挂载!!!!!!!!!!</span></p>
<p>一定要先解除挂载 再把U盘拔下来，否则下次挂载不上也解除不了了</p>
<p>命令： umount /dev/sdb1</p>
</div>
</div>
</div>
</div></template>



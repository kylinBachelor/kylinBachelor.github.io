<template><div><ol>
<li>
<p>下载Nginx</p>
<p>下载地址：【http://nginx.org/en/download.html】</p>
</li>
<li>
<p>解压并放到服务器上</p>
</li>
<li>
<p>需要的依赖，如果不存在使用以下命令安装</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pcre-devel</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> openssl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> openssl-devel</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>进入Nginx目录</p>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 如果出现 -bash: ./configure: Permission denied  则执行 bash ./configure </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./configure</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --prefix=/usr/local/nginx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">make</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">make</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>



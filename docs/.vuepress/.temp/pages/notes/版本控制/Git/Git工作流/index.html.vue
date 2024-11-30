<template><div><h4 id="git工作流程" tabindex="-1"><a class="header-anchor" href="#git工作流程"><span>Git工作流程</span></a></h4>
<p><img src="@source/notes/版本控制/Git/Git工作流/assets/git工作流程.png" alt="Git工作流程图片"></p>
<ol>
<li>从远程仓库中克隆Git资源作为本地仓库。</li>
<li>从本地仓库中checkout代码然后进行代码修改。</li>
<li>在提交前先将代码提交到暂存区。</li>
<li>提交修改。提交到本地仓库。本地仓库中保存修改的各个历史版本。</li>
<li>在修改完成后，需要和团队成员共享代码，可以将代码push到远程仓库</li>
</ol>
<h4 id="操作命令" tabindex="-1"><a class="header-anchor" href="#操作命令"><span>操作命令</span></a></h4>
<ol>
<li>
<p>查看分支</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> branch</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>增加分支</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> branch</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> branch_新建分支名</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>切换分支</p>
<div class="language-ssh line-numbers-mode" data-ext="ssh" data-title="ssh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>git checkout branch_分支名</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>合并分支（合并前要切换当前分支至master）</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> merge</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> branch_1_将要融合分支</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>删除分支</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> branch</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> branch_1_将要删除的分支</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>查看当前仓库管理的远程仓库信息</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> remote</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>查看指定的远程仓库的详细信息</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> remote</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> show</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> origin</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>第一次将本地分支推到远程仓库</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> push</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --set-upstream</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> origin</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> branch_1</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>将本地分支推到远程分支</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> push</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">远程主机</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">名</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">本地分支</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">名</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">远程分支</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">名</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>将远程分支拉到本地分支</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pull</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">远程主机</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">名</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">远程分</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">支</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">本地分</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">支</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>删除本地合并后的分支</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> branch</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> branch_0</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>删除本地未合并分支</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> branch</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> branch_0</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>删除远程分支</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> push</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> origin</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">  --delete</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> branch_0</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>进行清除工作区的改变</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> restore</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [filename]</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>查看标签</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tag</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>打开标签</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tag</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> v1.0.0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 打开标签</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>将tag同步到远程服务器</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> push</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> origin</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> v1.0.0</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
</div></template>



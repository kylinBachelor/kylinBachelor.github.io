<template><div><h4 id="vue-cli项目中引用的外部js之间无法跳转的问题" tabindex="-1"><a class="header-anchor" href="#vue-cli项目中引用的外部js之间无法跳转的问题"><span>vue-cli项目中引用的外部JS之间无法跳转的问题</span></a></h4>
<p>项目中创建jsconfig.json文件，标记@的路径，如下所示</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">compilerOptions</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">        "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">target</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">es2020</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">        "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">baseUrl</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">        "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">paths</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">            "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">@/*</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">src/*</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vscode快捷键" tabindex="-1"><a class="header-anchor" href="#vscode快捷键"><span>VScode快捷键</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:center">快捷键</th>
<th style="text-align:center">功能</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Alt + ←  或  Alt+鼠标左键</td>
<td style="text-align:center">返回上一个光标的位置</td>
</tr>
<tr>
<td style="text-align:center">ctrl + shift + \</td>
<td style="text-align:center">左右括号之间的跳转</td>
</tr>
<tr>
<td style="text-align:center">shift+alt+上箭头/下箭头</td>
<td style="text-align:center">快速复制一行</td>
</tr>
<tr>
<td style="text-align:center">ctrl+d</td>
<td style="text-align:center">先选定一个单词，然后按下ctrl+d可以往下一次选择相同的单词</td>
</tr>
<tr>
<td style="text-align:center">ctrl+h</td>
<td style="text-align:center">替换</td>
</tr>
<tr>
<td style="text-align:center">ctrl + alt + 上箭头/下箭头</td>
<td style="text-align:center">添加多个光标</td>
</tr>
<tr>
<td style="text-align:center">Alt + 单击</td>
<td style="text-align:center">插入光标</td>
</tr>
<tr>
<td style="text-align:center">ctrl + `</td>
<td style="text-align:center">显示/隐藏集成终端</td>
</tr>
</tbody>
</table>
</div></template>



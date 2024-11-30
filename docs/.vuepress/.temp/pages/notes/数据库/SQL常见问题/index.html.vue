<template><div><h4 id="_1-extracted-sql-state-class-22-from-value-22001" tabindex="-1"><a class="header-anchor" href="#_1-extracted-sql-state-class-22-from-value-22001"><span>1. Extracted SQL state class ‘22’ from value ‘22001’</span></a></h4>
<p>再插入数据时报错如下</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Extracted </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">SQL</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> state</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> class </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">22</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> value</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">22001</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>经过查看日志，数据库中缺少一个字段</p>
<p>sql执行状态表如下：</p>
<table>
<thead>
<tr>
<th><strong>SQLSTATE 值</strong></th>
<th><strong>含义</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>22001</td>
<td>字符数据，发生右截断；例如，更新或插入值对于列来说太长（字符串），或者日期时间值由于太小而不能赋给主机变量。</td>
</tr>
<tr>
<td>22002</td>
<td>检测到空值或缺少指示符参数；例如，不能将空值赋给主机变量，因为没有指定指示符变量。</td>
</tr>
<tr>
<td>22003</td>
<td>数字值超出范围。</td>
</tr>
<tr>
<td>22004</td>
<td>不能从定义为 PARAMETER STYLE GENERAL 的过程或者从用非空自变量调用的类型保留方法中返回空值。</td>
</tr>
<tr>
<td>22007</td>
<td>检测到无效的日期时间格式；即指定了无效的字符串表示法或值。</td>
</tr>
<tr>
<td>22008</td>
<td>发生日期时间字段溢出；例如，对日期或时间戳记算术运算的结果不在有效日期范围之内。</td>
</tr>
<tr>
<td>2200G</td>
<td>大多数特定类型都不匹配。</td>
</tr>
<tr>
<td>22011</td>
<td>发生子字符串错误；例如，SUBSTR 的自变量超出范围。</td>
</tr>
<tr>
<td>22012</td>
<td>用零作除数是无效的。</td>
</tr>
<tr>
<td>22018</td>
<td>对于 CAST、DECIMAL、FLOAT、或 INTEGER 标量函数，字符值是无效的。</td>
</tr>
<tr>
<td>22019</td>
<td>LIKE 谓词有无效转义字符。</td>
</tr>
<tr>
<td>22021</td>
<td>某字符不在编码字符集中。</td>
</tr>
<tr>
<td>22024</td>
<td>以 NUL 结束的输入主机变量或参数不包含 NUL。</td>
</tr>
<tr>
<td>22025</td>
<td>LIKE 谓词字符串模式包含无效的转义字符。</td>
</tr>
<tr>
<td>2202D</td>
<td>配合变异方法使用了空实例。</td>
</tr>
<tr>
<td>2202H</td>
<td>在 TABLESAMPLE 子句中指定的样本大小无效。</td>
</tr>
<tr>
<td>22501</td>
<td>变长字符串的长度控制字段为负值或大于最大值。</td>
</tr>
<tr>
<td>22504</td>
<td>混合数据值是无效的。</td>
</tr>
<tr>
<td>22506</td>
<td>对日期时间专用寄存器的引用无效，因为 TOD 时钟发生故障或操作系统时区参数超出范围。</td>
</tr>
<tr>
<td>22522</td>
<td>CCSID 值根本无效，对数据类型或子类型无效，或对编码方案无效。</td>
</tr>
<tr>
<td>22526</td>
<td>键变换函数没有生成任何行或生成了重复的行。</td>
</tr>
<tr>
<td>22527</td>
<td>对多行 INSERT 操作检测到了无效的输入数据。</td>
</tr>
</tbody>
</table>
</div></template>



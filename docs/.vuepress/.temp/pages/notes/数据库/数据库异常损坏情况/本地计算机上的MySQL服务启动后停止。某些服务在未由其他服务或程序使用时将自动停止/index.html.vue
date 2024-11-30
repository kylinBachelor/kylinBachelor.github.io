<template><div><h1 id="本地计算机上的mysql服务启动后停止。某些服务在未由其他服务或程序使用时将自动停止" tabindex="-1"><a class="header-anchor" href="#本地计算机上的mysql服务启动后停止。某些服务在未由其他服务或程序使用时将自动停止"><span>本地计算机上的MySQL服务启动后停止。某些服务在未由其他服务或程序使用时将自动停止</span></a></h1>
<h2 id="_1-问题出现" tabindex="-1"><a class="header-anchor" href="#_1-问题出现"><span>1. 问题出现</span></a></h2>
<p>遇到的这个问题是因为突然停电，由于电脑是一个台式机导致电脑突然关机，就导致了MySQL数据库损坏的问题（无法启动）</p>
<p><img src="@source/notes/数据库/数据库异常损坏情况/本地计算机上的MySQL服务启动后停止。某些服务在未由其他服务或程序使用时将自动停止/assets/image-20241024085841542.png" alt="image-20241024085841542"></p>
<h2 id="_2-解决方式" tabindex="-1"><a class="header-anchor" href="#_2-解决方式"><span>2. 解决方式</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p><code v-pre>首先备份首先备份MySQL的data文件夹</code>！！！！！！！！！！！！！！</p>
</div>
<p><img src="@source/notes/数据库/数据库异常损坏情况/本地计算机上的MySQL服务启动后停止。某些服务在未由其他服务或程序使用时将自动停止/assets/image-20241024090602489.png" alt="image-20241024090602489"></p>
<p>在MySQL中每一个数据库在data文件夹下的体现就是一个目录。我们要恢复数据库时就是使用每个文件夹下的<code v-pre>xxx.idb</code>文件,</p>
<p>每个<code v-pre>idb</code>文件其实就是一个数据库表。</p>
<h2 id="_3-开始恢复" tabindex="-1"><a class="header-anchor" href="#_3-开始恢复"><span>3. 开始恢复</span></a></h2>
<ol>
<li>
<p>新找一台电脑，另一个数据库，我们称之为目标数据。</p>
</li>
<li>
<p>在目标数据库中创建一个新的数据库并创建数据库表，要求<code v-pre>创建的数据库表的结构和需要恢复的数据库表一致</code></p>
</li>
<li>
<p>创建好新数据库表之后使用下面的命令删除<code v-pre>新建表的表空间</code></p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>ALTER TABLE tableName DISCARD TABLESPACE;</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>将备份好的.idb文件复制到目标数据库<code v-pre>数据文件夹（data）</code>下，并使用以下命令导入表空间恢复数据库即可</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>ALTER TABLE tableName IMPORT TABLESPACE;</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="_4-恢复损坏的mysql数据库-其实就是重新初始化-重新安装了" tabindex="-1"><a class="header-anchor" href="#_4-恢复损坏的mysql数据库-其实就是重新初始化-重新安装了"><span>4. 恢复损坏的MySQL数据库（其实就是重新初始化，重新安装了）</span></a></h2>
<p>找到data目录，没有就创建一个，有就清空data目录下的内容</p>
<p><img src="@source/notes/数据库/数据库异常损坏情况/本地计算机上的MySQL服务启动后停止。某些服务在未由其他服务或程序使用时将自动停止/assets/image-20241024091849514.png" alt="image-20241024091849514"></p>
<ol>
<li>
<p>删除MySQL服务</p>
<p>cmd进入到数据库bin目录下，执行删除服务命令</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mysqld</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --remove</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mysql</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>重新安装服务</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>mysqld --install mysql</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>初始化data</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mysqld</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --initialize-insecure</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>启动服务</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">net</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mysql</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>修改密码</p>
<p>以管理员身份打开三个cmd窗口</p>
<ol>
<li>
<p>窗口1执行以下命令</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">net</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> stop</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mysql</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mysqld</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --console</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --skip-grant-tables</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --shared-memory</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>窗口2执行以下命令</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mysql</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -u</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> root</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 回车，这时候会让你输入密码，无需输入直接回车即可</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">use</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mysql</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">update</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> user</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> authentication_string=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">''</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> where</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> user=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">root</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>窗口3（关闭窗口1和窗口2）</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">net</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mysql</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mysql</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -u</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> root</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 回车即可，无需输入密码</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ALTER</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> USER</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">root</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">localhost</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> IDENTIFIED</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> BY</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">修改的密码</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>到此密码修改结束，可以连接数据库试试了。</p>
</li>
<li>
<p>将在第三步恢复好的数据库导出一个sql文件，恢复到重新初始化安装修复好的数据库上就可以了。</p>
</li>
</ol>
</div></template>



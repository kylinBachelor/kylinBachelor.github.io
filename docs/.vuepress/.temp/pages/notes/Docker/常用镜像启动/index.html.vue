<template><div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>Mysql</span></a></h2>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 3306:3306</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mysql8</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> MYSQL_ROOT_PASSWORD=root123</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /usr/mysqlConf:/etc/mysql/conf.d</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /usr/mysqlLog:/var/log/mysql</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /usr/mysqlData:/var/lib/mysql</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mysql:8.0</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--lower_case_table_names</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>3306:3306  物理机的3306端口对应镜像内部3306端口</li>
<li>---name 名称</li>
<li>-e root密码</li>
<li>-v 数据持久化物理机目录映射到镜像目录</li>
<li>-d 指定镜像</li>
<li>--lower_case_table_name 设置不区分大小写</li>
</ul>
<h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h2>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 6379:6379</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> redis6</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --privileged=true</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /usr/redis/redis.conf:/etc/redis/redis.conf</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /usr/redis/data:/data</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> redis:6.0.8</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> redis-server</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/redis/redis.conf</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



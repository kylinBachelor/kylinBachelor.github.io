<template><div><h1 id="一、启用shovel插件" tabindex="-1"><a class="header-anchor" href="#一、启用shovel插件"><span>一、启用Shovel插件</span></a></h1>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rabbitmq-plugins</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enable</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rabbitmq_shovel</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rabbitmq-plugins</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enable</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rabbitmq_shovel_management</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425184237327.png" alt="image-20240425184237327"></p>
<h1 id="二、配置shovel" tabindex="-1"><a class="header-anchor" href="#二、配置shovel"><span>二、配置Shovel</span></a></h1>
<p><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425185107197.png" alt="image-20240425185107197"></p>
<h1 id="三、测试" tabindex="-1"><a class="header-anchor" href="#三、测试"><span>三、测试</span></a></h1>
<h2 id="_1、测试计划" tabindex="-1"><a class="header-anchor" href="#_1、测试计划"><span>1、测试计划</span></a></h2>
<table>
<thead>
<tr>
<th>节点</th>
<th>交换机</th>
<th>路由键</th>
<th>队列</th>
</tr>
</thead>
<tbody>
<tr>
<td>深圳节点</td>
<td>exchange.shovel.test</td>
<td>exchange.shovel.test</td>
<td>queue.shovel.demo.shenzhen</td>
</tr>
<tr>
<td>上海节点</td>
<td>——</td>
<td>——</td>
<td>queue.shovel.demo.shanghai</td>
</tr>
</tbody>
</table>
<h2 id="_2、测试效果" tabindex="-1"><a class="header-anchor" href="#_2、测试效果"><span>2、测试效果</span></a></h2>
<h3 id="_1发布消息" tabindex="-1"><a class="header-anchor" href="#_1发布消息"><span>①发布消息</span></a></h3>
<p><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425185349525.png" alt="image-20240425185349525"></p>
<h3 id="_2源节点" tabindex="-1"><a class="header-anchor" href="#_2源节点"><span>②源节点</span></a></h3>
<p><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425185519801.png" alt="image-20240425185519801"></p>
<h3 id="_3目标节点" tabindex="-1"><a class="header-anchor" href="#_3目标节点"><span>③目标节点</span></a></h3>
<p><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425185729887.png" alt="image-20240425185729887"></p>
</div></template>



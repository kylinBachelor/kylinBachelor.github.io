<template><div><p>Federation插件的设计目标是使RabbitMQ在不同的Broker节点之间进行消息传递而无须建立集群。</p>
<p>它可以在不同的管理域中的Broker或集群间传递消息，这些管理域可能设置了不同的用户和vhost，也可能运行在不同版本的RabbitMQ和Erlang上。Federation基于AMQP 0-9-1协议在不同的Broker之间进行通信，并且设计成能够容忍不稳定的网络连接情况。</p>
<h1 id="二、federation交换机" tabindex="-1"><a class="header-anchor" href="#二、federation交换机"><span>二、Federation交换机</span></a></h1>
<h2 id="_1、总体说明" tabindex="-1"><a class="header-anchor" href="#_1、总体说明"><span>1、总体说明</span></a></h2>
<ul>
<li>各节点操作：启用联邦插件</li>
<li>下游操作：
<ul>
<li>添加上游连接端点</li>
<li>创建控制策略</li>
</ul>
</li>
</ul>
<h2 id="_2、准备工作" tabindex="-1"><a class="header-anchor" href="#_2、准备工作"><span>2、准备工作</span></a></h2>
<p>为了执行相关测试，我们使用Docker创建两个RabbitMQ实例。</p>
<p><span style="color:blue;"><strong>特别提示</strong></span>：由于Federation机制的最大特点就是跨集群同步数据，所以这两个Docker容器中的RabbitMQ实例不加入集群！！！是两个<span style="color:blue;"><strong>独立的broker实例</strong></span>。</p>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--name </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">rabbitmq-shenzhen</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-p </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">51000:5672</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-p </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">52000:15672</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-v </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">rabbitmq-plugin:/plugins</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-e </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">RABBITMQ_DEFAULT_USER=guest</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-e </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">RABBITMQ_DEFAULT_PASS=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">123456</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">rabbitmq:3.13-management</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--name </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">rabbitmq-shanghai</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-p </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">61000:5672</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-p </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">62000:15672</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-v </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">rabbitmq-plugin:/plugins</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-e </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">RABBITMQ_DEFAULT_USER=guest</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-e </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">RABBITMQ_DEFAULT_PASS=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">123456</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">rabbitmq:3.13-management</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、启用联邦插件" tabindex="-1"><a class="header-anchor" href="#_3、启用联邦插件"><span>3、启用联邦插件</span></a></h2>
<p>在上游、下游节点中都需要开启。</p>
<p>Docker容器中的RabbitMQ已经开启了rabbitmq_federation，还需要开启rabbitmq_federation_management</p>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rabbitmq-plugins</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enable</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rabbitmq_federation</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rabbitmq-plugins</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enable</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rabbitmq_federation_management</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>rabbitmq_federation_management插件启用后会在Management UI的Admin选项卡下看到：</p>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425152627455.png" alt="image-20240425152627455" tabindex="0" loading="lazy"><figcaption>image-20240425152627455</figcaption></figure>
<h2 id="_4、添加上游连接端点" tabindex="-1"><a class="header-anchor" href="#_4、添加上游连接端点"><span>4、添加上游连接端点</span></a></h2>
<p>在下游节点填写上游节点的连接信息：</p>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425164430500.png" alt="image-20240425164430500" tabindex="0" loading="lazy"><figcaption>image-20240425164430500</figcaption></figure>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425170737126.png" alt="image-20240425170737126" tabindex="0" loading="lazy"><figcaption>image-20240425170737126</figcaption></figure>
<h2 id="_5、创建控制策略" tabindex="-1"><a class="header-anchor" href="#_5、创建控制策略"><span>5、创建控制策略</span></a></h2>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425164648385.png" alt="image-20240425164648385" tabindex="0" loading="lazy"><figcaption>image-20240425164648385</figcaption></figure>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425165531899.png" alt="image-20240425165531899" tabindex="0" loading="lazy"><figcaption>image-20240425165531899</figcaption></figure>
<h2 id="_6、测试" tabindex="-1"><a class="header-anchor" href="#_6、测试"><span>6、测试</span></a></h2>
<h3 id="_1测试计划" tabindex="-1"><a class="header-anchor" href="#_1测试计划"><span>①测试计划</span></a></h3>
<p><span style="color:blue;"><strong>特别提示</strong></span>：</p>
<ul>
<li>普通交换机和联邦交换机名称要一致</li>
<li>交换机名称要能够和策略正则表达式匹配上</li>
<li>发送消息时，两边使用的路由键也要一致</li>
<li>队列名称不要求一致</li>
</ul>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425170044297.png" alt="image-20240425170044297" tabindex="0" loading="lazy"><figcaption>image-20240425170044297</figcaption></figure>
<h3 id="_2创建组件" tabindex="-1"><a class="header-anchor" href="#_2创建组件"><span>②创建组件</span></a></h3>
<table>
<thead>
<tr>
<th>所在机房</th>
<th>交换机名称</th>
<th>路由键</th>
<th>队列名称</th>
</tr>
</thead>
<tbody>
<tr>
<td>深圳机房（上游）</td>
<td>federated.exchange.demo</td>
<td>routing.key.demo.test</td>
<td>queue.normal.shenzhen</td>
</tr>
<tr>
<td>上海机房（下游）</td>
<td>federated.exchange.demo</td>
<td>routing.key.demo.test</td>
<td>queue.normal.shanghai</td>
</tr>
</tbody>
</table>
<p>创建组件后可以查看一下联邦状态，连接成功的联邦状态如下：</p>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425170652201.png" alt="image-20240425170652201" tabindex="0" loading="lazy"><figcaption>image-20240425170652201</figcaption></figure>
<h3 id="_3发布消息执行测试" tabindex="-1"><a class="header-anchor" href="#_3发布消息执行测试"><span>③发布消息执行测试</span></a></h3>
<p>在上游节点向交换机发布消息：</p>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425171228928.png" alt="image-20240425171228928" tabindex="0" loading="lazy"><figcaption>image-20240425171228928</figcaption></figure>
<p>看到下游节点接收到了消息：</p>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425171308430.png" alt="image-20240425171308430" tabindex="0" loading="lazy"><figcaption>image-20240425171308430</figcaption></figure>
<h1 id="三、federation队列" tabindex="-1"><a class="header-anchor" href="#三、federation队列"><span>三、Federation队列</span></a></h1>
<h2 id="_1、总体说明-1" tabindex="-1"><a class="header-anchor" href="#_1、总体说明-1"><span>1、总体说明</span></a></h2>
<p>Federation队列和Federation交换机的最核心区别就是：</p>
<ul>
<li>Federation Police作用在交换机上，就是Federation交换机</li>
<li>Federation Police作用在队列上，就是Federation队列</li>
</ul>
<h2 id="_2、创建控制策略" tabindex="-1"><a class="header-anchor" href="#_2、创建控制策略"><span>2、创建控制策略</span></a></h2>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425171911774.png" alt="image-20240425171911774" tabindex="0" loading="lazy"><figcaption>image-20240425171911774</figcaption></figure>
<h2 id="_3、测试" tabindex="-1"><a class="header-anchor" href="#_3、测试"><span>3、测试</span></a></h2>
<h3 id="_1测试计划-1" tabindex="-1"><a class="header-anchor" href="#_1测试计划-1"><span>①测试计划</span></a></h3>
<p>上游节点和下游节点中队列名称是相同的，只是下游队列中的节点附加了联邦策略而已</p>
<table>
<thead>
<tr>
<th>所在机房</th>
<th>交换机</th>
<th>路由键</th>
<th>队列</th>
</tr>
</thead>
<tbody>
<tr>
<td>深圳机房（上游）</td>
<td>exchange.normal.shenzhen</td>
<td>routing.key.normal.shenzhen</td>
<td>fed.queue.demo</td>
</tr>
<tr>
<td>上海机房（下游）</td>
<td>——</td>
<td>——</td>
<td>fed.queue.demo</td>
</tr>
</tbody>
</table>
<h3 id="_2创建组件-1" tabindex="-1"><a class="header-anchor" href="#_2创建组件-1"><span>②创建组件</span></a></h3>
<p>上游节点都是常规操作，此处省略。重点需要关注的是下游节点的联邦队列创建时需要指定相关参数：</p>
<p>创建组件后可以查看一下联邦状态，连接成功的联邦状态如下：</p>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425172528528.png" alt="image-20240425172528528" tabindex="0" loading="lazy"><figcaption>image-20240425172528528</figcaption></figure>
<h3 id="_3执行测试" tabindex="-1"><a class="header-anchor" href="#_3执行测试"><span>③执行测试</span></a></h3>
<p>在上游节点向交换机发布消息：</p>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425172625339.png" alt="image-20240425172625339" tabindex="0" loading="lazy"><figcaption>image-20240425172625339</figcaption></figure>
<p>但此时发现下游节点中联邦队列并没有接收到消息，这是为什么呢？这里就体现出了联邦队列和联邦交换机工作逻辑的区别。</p>
<p>对联邦队列来说，如果没有监听联邦队列的消费端程序，它是不会到上游去拉取消息的！</p>
<p>如果有消费端监听联邦队列，那么首先消费联邦队列自身的消息；如果联邦队列为空，<span style="color:blue;"><strong>这时候才</strong></span>会到上游队列节点中拉取消息。</p>
<p>所以现在的测试效果需要消费端程序配合才能看到：</p>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20240425182437573.png" alt="image-20240425182437573" tabindex="0" loading="lazy"><figcaption>image-20240425182437573</figcaption></figure>
</div></template>



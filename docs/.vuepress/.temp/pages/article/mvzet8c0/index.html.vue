<template><div><h1 id="一、思路" tabindex="-1"><a class="header-anchor" href="#一、思路"><span>一、思路</span></a></h1>
<ul>
<li>生产者发送100个消息</li>
<li>对照两种情况：
<ul>
<li>消费端没有设置prefetch参数：100个消息被全部取回</li>
<li>消费端设置prefetch参数为1：100个消息慢慢取回</li>
</ul>
</li>
</ul>
<h1 id="二、生产者端代码" tabindex="-1"><a class="header-anchor" href="#二、生产者端代码"><span>二、生产者端代码</span></a></h1>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Test</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> testSendMessage</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    for</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 100</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">        rabbitTemplate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">convertAndSend</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">                EXCHANGE_DIRECT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">                ROUTING_KEY</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">                "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Hello atguigu</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、消费者端代码" tabindex="-1"><a class="header-anchor" href="#三、消费者端代码"><span>三、消费者端代码</span></a></h1>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 2、正常业务操作</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">info</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">消费端接收到消息内容：</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> dataString</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// System.out.println(10 / 0);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">TimeUnit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">SECONDS</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sleep</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 3、给 RabbitMQ 服务器返回 ACK 确认信息</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">channel</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">basicAck</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">deliveryTag</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="四、测试" tabindex="-1"><a class="header-anchor" href="#四、测试"><span>四、测试</span></a></h1>
<h2 id="_1、未使用prefetch" tabindex="-1"><a class="header-anchor" href="#_1、未使用prefetch"><span>1、未使用prefetch</span></a></h2>
<ul>
<li>不要启动消费端程序，如果正在运行就把它停了</li>
<li>运行生产者端程序发送100条消息</li>
<li>查看队列中消息的情况：</li>
</ul>
<p><img src="@source/notes/MQ/RabbitMQ/assets/image-20231107155915253.png" alt="image-20231107155915253"></p>
<ul>
<li>
<p>说明：</p>
<ul>
<li>Ready表示已经发送到队列的消息数量</li>
<li>Unacked表示已经发送到消费端但是消费端尚未返回ACK信息的消息数量</li>
<li>Total未被删除的消息总数</li>
</ul>
</li>
<li>
<p>接下来启动消费端程序，再查看队列情况：</p>
</li>
</ul>
<p><img src="@source/notes/MQ/RabbitMQ/assets/image-20231107160233539.png" alt="image-20231107160233539"></p>
<ul>
<li>能看到消息全部被消费端取走了，正在逐个处理、确认，说明有多少消息消费端就并发处理多少</li>
</ul>
<h2 id="_2、设定prefetch" tabindex="-1"><a class="header-anchor" href="#_2、设定prefetch"><span>2、设定prefetch</span></a></h2>
<h3 id="_1yaml配置" tabindex="-1"><a class="header-anchor" href="#_1yaml配置"><span>①YAML配置</span></a></h3>
<div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">spring</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  rabbitmq</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    host</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 192.168.200.100</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    port</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 5672</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    username</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> guest</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    password</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 123456</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    virtual-host</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    listener</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      simple</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        acknowledge-mode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> manual</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        prefetch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 设置每次最多从消息队列服务器取回多少消息</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2测试流程" tabindex="-1"><a class="header-anchor" href="#_2测试流程"><span>②测试流程</span></a></h3>
<ul>
<li>停止消费端程序</li>
<li>运行生产者端程序发送100条消息</li>
<li>查看队列中消息的情况：</li>
</ul>
<p><img src="@source/notes/MQ/RabbitMQ/assets/image-20231107160820062.png" alt="image-20231107160820062"></p>
<ul>
<li>接下来启动消费端程序，持续观察队列情况：</li>
</ul>
<p><img src="@source/notes/MQ/RabbitMQ/assets/image-20231107160922632.png" alt="image-20231107160922632"></p>
<p><img src="@source/notes/MQ/RabbitMQ/assets/image-20231107160936216.png" alt="image-20231107160936216"></p>
<p><img src="@source/notes/MQ/RabbitMQ/assets/image-20231107160951639.png" alt="image-20231107160951639"></p>
<ul>
<li>能看到消息不是一次性全部取回的，而是有个过程</li>
</ul>
</div></template>



<template><div><h2 id="_1、创建非持久化交换机" tabindex="-1"><a class="header-anchor" href="#_1、创建非持久化交换机"><span>1、创建非持久化交换机</span></a></h2>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20231106192621173.png" alt="image-20231106192621173" tabindex="0" loading="lazy"><figcaption>image-20231106192621173</figcaption></figure>
<p>创建之后，可以在列表中看到：</p>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20231106192708597.png" alt="image-20231106192708597" tabindex="0" loading="lazy"><figcaption>image-20231106192708597</figcaption></figure>
<h2 id="_2、创建非持久化队列" tabindex="-1"><a class="header-anchor" href="#_2、创建非持久化队列"><span>2、创建非持久化队列</span></a></h2>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20231106195216265.png" alt="image-20231106195216265" tabindex="0" loading="lazy"><figcaption>image-20231106195216265</figcaption></figure>
<p>创建之后，可以在列表中看到：</p>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20231106195132627.png" alt="image-20231106195132627" tabindex="0" loading="lazy"><figcaption>image-20231106195132627</figcaption></figure>
<h2 id="_3、绑定" tabindex="-1"><a class="header-anchor" href="#_3、绑定"><span>3、绑定</span></a></h2>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20231106195748319.png" alt="image-20231106195748319" tabindex="0" loading="lazy"><figcaption>image-20231106195748319</figcaption></figure>
<h2 id="_4、发送消息" tabindex="-1"><a class="header-anchor" href="#_4、发送消息"><span>4、发送消息</span></a></h2>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> final</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> EXCHANGE_TRANSIENT</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">exchange.transient.user</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> final</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ROUTING_KEY_TRANSIENT</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">user</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    @</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Test</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> testSendMessageTransient</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">        rabbitTemplate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">convertAndSend</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">                EXCHANGE_TRANSIENT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">                ROUTING_KEY_TRANSIENT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">                "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Hello atguigu user~~~</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、查看已发送消息" tabindex="-1"><a class="header-anchor" href="#_5、查看已发送消息"><span>5、查看已发送消息</span></a></h2>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20231106200245531.png" alt="image-20231106200245531" tabindex="0" loading="lazy"><figcaption>image-20231106200245531</figcaption></figure>
<p>结论：临时性的交换机和队列也能够接收消息，但如果RabbitMQ服务器重启之后会怎么样呢？</p>
<h2 id="_6、重启rabbitmq服务器" tabindex="-1"><a class="header-anchor" href="#_6、重启rabbitmq服务器"><span>6、重启RabbitMQ服务器</span></a></h2>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rabbitmq</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>重启之后，刚才临时性的交换机和队列都没了。在交换机和队列这二者中，队列是消息存储的容器，队列没了，消息就也跟着没了。</p>
<h1 id="二、持久化的交换机和队列" tabindex="-1"><a class="header-anchor" href="#二、持久化的交换机和队列"><span>二、持久化的交换机和队列</span></a></h1>
<p>我们其实不必专门创建持久化的交换机和队列，因为它们默认就是持久化的。接下来我们只需要确认一下：存放到队列中，尚未被消费端取走的消息，是否会随着RabbitMQ服务器重启而丢失？</p>
<h2 id="_1、发送消息" tabindex="-1"><a class="header-anchor" href="#_1、发送消息"><span>1、发送消息</span></a></h2>
<p>运行以前的发送消息方法即可，不过要关掉消费端程序</p>
<h2 id="_2、在管理界面查看消息" tabindex="-1"><a class="header-anchor" href="#_2、在管理界面查看消息"><span>2、在管理界面查看消息</span></a></h2>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20231106200934265.png" alt="image-20231106200934265" tabindex="0" loading="lazy"><figcaption>image-20231106200934265</figcaption></figure>
<h2 id="_3、重启rabbitmq服务器" tabindex="-1"><a class="header-anchor" href="#_3、重启rabbitmq服务器"><span>3、重启RabbitMQ服务器</span></a></h2>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rabbitmq</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_4、再次查看消息" tabindex="-1"><a class="header-anchor" href="#_4、再次查看消息"><span>4、再次查看消息</span></a></h2>
<p>仍然还在：</p>
<figure><img src="@source/notes/MQ/RabbitMQ/assets/image-20231106201123268.png" alt="image-20231106201123268" tabindex="0" loading="lazy"><figcaption>image-20231106201123268</figcaption></figure>
<h1 id="三、结论" tabindex="-1"><a class="header-anchor" href="#三、结论"><span>三、结论</span></a></h1>
<p>在后台管理界面创建交换机和队列时，默认就是持久化的模式。</p>
<p>此时消息也是持久化的，不需要额外设置。</p>
</div></template>



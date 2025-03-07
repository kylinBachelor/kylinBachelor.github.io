<template><div><h1 id="那些年使用docker版rabbitmq踩过的坑" tabindex="-1"><a class="header-anchor" href="#那些年使用docker版rabbitmq踩过的坑"><span>那些年使用docker版rabbitmq踩过的坑</span></a></h1>
<h2 id="_1-拉取rabbitmq镜像" tabindex="-1"><a class="header-anchor" href="#_1-拉取rabbitmq镜像"><span>1. 拉取rabbitmq镜像</span></a></h2>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pull</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rabbitmq</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果拉取失败可配置镜像加速器，<code v-pre>亲测第一个可用，测试时间（2025年3月7日）</code></p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	"registry-mirrors"</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		"https://proxy.1panel.live"</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		"https://docker.1panel.top"</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		"https://docker.m.daocloud.io"</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		"https://docker.1ms.run"</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		"https://docker.ketches.cn"</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用命令行启动" tabindex="-1"><a class="header-anchor" href="#_2-使用命令行启动"><span>2. 使用命令行启动</span></a></h2>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># -d 参数：后台运行 Docker 容器</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># --name 参数：设置容器名称</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># -p 参数：映射端口号，格式是“宿主机端口号:容器内端口号”。5672供客户端程序访问，15672供后台管理界面访问</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># -e 参数：设置容器内的环境变量，这里我们设置了登录RabbitMQ管理后台的默认用户和密码</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--name </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">rabbitmq</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-p </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">5672:5672</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-p </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">15672:15672</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-e </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">RABBITMQ_DEFAULT_USER=admin</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-e </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">RABBITMQ_DEFAULT_PASS=admin123</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">rabbitmq</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-访问rabbitmq界面" tabindex="-1"><a class="header-anchor" href="#_3-访问rabbitmq界面"><span>3. 访问rabbitmq界面</span></a></h2>
<p>ip:15672</p>
<figure><img src="@source/article/technology/docker-rabbitmq/assets/image-20250307162339678.png" alt="image-20250307162339678" tabindex="0" loading="lazy"><figcaption>image-20250307162339678</figcaption></figure>
<p>如果无法访问需要进入容器内部用命令启用管理插件</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rabbitmq-plugins</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enable</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rabbitmq_management</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>执行以下命令，查看已启用的插件</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rabbitmq-plugins</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> list</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>需要确保 rabbitmq_management插件已在列表中。</p>
<p>再次访问即可看到界面</p>
</div></template>



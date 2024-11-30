<template><div><h1 id="jenkins的安装和删除" tabindex="-1"><a class="header-anchor" href="#jenkins的安装和删除"><span>jenkins的安装和删除</span></a></h1>
<blockquote>
<p>Jenkins官网：https://www.jenkins.io/</p>
</blockquote>
<h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装"><span>1. 安装</span></a></h2>
<h3 id="_1-1-前提条件" tabindex="-1"><a class="header-anchor" href="#_1-1-前提条件"><span>1.1 前提条件</span></a></h3>
<blockquote>
<p>Jenkins一个开源项目，是<code v-pre>基于Java</code>开发的一种持续集成工具,因此需要Java环境</p>
</blockquote>
<p>Jenkins版本和Java版本对应关系如下图：https://www.jenkins.io/doc/book/platform-information/support-policy-java/</p>
<p><img src="@source/notes/jenkins/安装/assets/image-20240717180606275.png" alt="image-20240717180606275"></p>
<h3 id="_1-2-jenkins-yum安装" tabindex="-1"><a class="header-anchor" href="#_1-2-jenkins-yum安装"><span>1.2 Jenkins yum安装</span></a></h3>
<blockquote>
<p>官网：https://www.jenkins.io/doc/book/installing/linux/</p>
</blockquote>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> wget</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -O</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/yum.repos.d/jenkins.repo</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    https://pkg.jenkins.io/redhat-stable/jenkins.repo</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rpm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --import</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> upgrade</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Add required dependencies for the jenkins package</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> fontconfig</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> java-17-openjdk</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> jenkins</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> daemon-reload</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-war包形式启动" tabindex="-1"><a class="header-anchor" href="#_1-3-war包形式启动"><span>1.3 war包形式启动</span></a></h3>
<blockquote>
<p>支持以Java 的形式直接启动服务：阿里云下载地址：https://mirrors.aliyun.com/jenkins/war-stable/latest</p>
</blockquote>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">java</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -jar</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> jenkins.war</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --httpPort=9090</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">nohup</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> java</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -jar</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  jenkins.war</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --httpPort=9090</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /dev/null</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> 2>&#x26;1</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x26;</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-卸载" tabindex="-1"><a class="header-anchor" href="#_2-卸载"><span>2. 卸载</span></a></h2>
<h3 id="_2-1-通过yum自动安装的卸载方式" tabindex="-1"><a class="header-anchor" href="#_2-1-通过yum自动安装的卸载方式"><span>2.1 通过yum自动安装的卸载方式</span></a></h3>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> stop</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> jenkins</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> remove</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> jenkins</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">--</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 删除Jenkins相关的文件和目录（请注意，这将删除所有配置和数据，请确保你已经做了备份）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /var/cache/jenkins</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /var/lib/jenkins</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/sysconfig/jenkins</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/systemd/system/jenkins.service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">--</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 删除Jenkins用户和组（这一步是可选的，只有在你确定不再需要这个用户的时候才执行）：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> userdel</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> jenkins</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> groupdel</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> jenkins</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">--</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 最后，重新加载systemd守护进程，以确保它没有再尝试运行Jenkins服务：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> daemon-reload</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



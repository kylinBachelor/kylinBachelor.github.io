<template><div><p>请保证机器可以访问外网</p>
<ol>
<li>
<p>安装gcc
yum -y install gcc</p>
</li>
<li>
<p>安装c++
yum -y install gcc-c++</p>
</li>
<li>
<p>安装包管理
sudo yum install -y yum-utils</p>
</li>
<li>
<p>设置仓库
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</p>
</li>
<li>
<p>更新yum软件包索引
yum makecache fast</p>
</li>
<li>
<p>安装docker 引擎
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</p>
</li>
<li>
<p>启动Docker
systemctl start docker</p>
</li>
<li>
<p>查看Docker版本
docker version</p>
</li>
<li>
<p>校验Docker Engine 是否安装成功
docker run hello-world</p>
</li>
<li>
<p>配置阿里云镜像加速器 https://cr.console.aliyun.com/cn-beijing/instances/mirrors
阿里云中有容器镜像服务，创建一个个人版本的就可以,针对Docker客户端版本大于 1.10.0 的用户,您可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tee</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/docker/daemon.json</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;&#x3C;-</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'EOF'</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">{</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  "registry-mirrors": ["https://cfst52be.mirror.aliyuncs.com"]</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">}</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">EOF</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 感觉restart不管用，最好是stop之后再start</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>



import{_ as i,c as a,a as n,o as e}from"./app-C0ayDqmc.js";const t={};function l(h,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h2 id="_1-通过容器制作" tabindex="-1"><a class="header-anchor" href="#_1-通过容器制作"><span>1. 通过容器制作</span></a></h2><h3 id="_1-1-制作一个带有java17环境的镜像" tabindex="-1"><a class="header-anchor" href="#_1-1-制作一个带有java17环境的镜像"><span>1.1 制作一个带有java17环境的镜像</span></a></h3><ol><li><p>启动镜像（centos）并使用容器卷挂载目录，使得容器内部可以有jdk安装包</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -it</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> centos_jdk17</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /home/soft:/usr/lib</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> centos</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>安装jdk环境</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 1. 安装jdk17 JAVA_HOME 即为jdk位置</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> JAVA_HOME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">usr</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">lib</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">jdk-17</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">0</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">10</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> CLASSPATH</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">JAVA_HOME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">jre</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">lib</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">rt</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">jar</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">JAVA_HOME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">lib</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dt</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">jar</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">JAVA_HOME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">lib</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">tools</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">jar</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PATH</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$PATH</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">JAVA_HOME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 2. 刷新配置</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 2. 检查环境</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">java</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_1-2-将容器打包成镜像" tabindex="-1"><a class="header-anchor" href="#_1-2-将容器打包成镜像"><span>1.2 将容器打包成镜像</span></a></h3><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 打包成镜像</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> commit</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [将要制作镜像的容器名] </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">将要生成的镜像名</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 标记镜像</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tag</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [镜像名] </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">harobr domain</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">harbor项目名称</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">仓库名称</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:版本号</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tag</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> centos_pigx_jdk17:latest</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 192.168.1.100/shunde/centos_pigx_jdk17:v1.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-推送镜像至harbor仓库" tabindex="-1"><a class="header-anchor" href="#_1-3-推送镜像至harbor仓库"><span>1.3 推送镜像至Harbor仓库</span></a></h3><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 登录至Harbor仓库</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> login</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [harbor </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">domain]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 推送</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> push</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 192.168.1.100/shunde/centos_pigx_jdk17:v1.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-制作镜像" tabindex="-1"><a class="header-anchor" href="#_2-制作镜像"><span>2. 制作镜像</span></a></h2><h3 id="_2-1-通过现有容器制作" tabindex="-1"><a class="header-anchor" href="#_2-1-通过现有容器制作"><span>2.1 通过现有容器制作</span></a></h3><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> commit</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -a</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">作者信息</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 容器id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-2-通过dockerfile制作" tabindex="-1"><a class="header-anchor" href="#_2-2-通过dockerfile制作"><span>2.2 通过Dockerfile制作</span></a></h3><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> build</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 镜像名:镜像版本</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,12)]))}const p=i(t,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/notes/Docker/%E5%88%B6%E4%BD%9C%E9%95%9C%E5%83%8F/","title":"Docker镜像制作","lang":"zh-CN","frontmatter":{"title":"Docker镜像制作","description":"1. 通过容器制作 1.1 制作一个带有java17环境的镜像 启动镜像（centos）并使用容器卷挂载目录，使得容器内部可以有jdk安装包 安装jdk环境 1.2 将容器打包成镜像 1.3 推送镜像至Harbor仓库 2. 制作镜像 2.1 通过现有容器制作 2.2 通过Dockerfile制作","head":[["meta",{"property":"og:url","content":"https://kylinBachelor.github.io/notes/Docker/%E5%88%B6%E4%BD%9C%E9%95%9C%E5%83%8F/"}],["meta",{"property":"og:site_name","content":"kylinBachelor"}],["meta",{"property":"og:title","content":"Docker镜像制作"}],["meta",{"property":"og:description","content":"1. 通过容器制作 1.1 制作一个带有java17环境的镜像 启动镜像（centos）并使用容器卷挂载目录，使得容器内部可以有jdk安装包 安装jdk环境 1.2 将容器打包成镜像 1.3 推送镜像至Harbor仓库 2. 制作镜像 2.1 通过现有容器制作 2.2 通过Dockerfile制作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-30T10:36:56.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-30T10:36:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker镜像制作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-30T10:36:56.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.83,"words":248},"git":{"updatedTime":1732963016000},"autoDesc":true,"filePathRelative":"notes/Docker/制作镜像/index.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"7acc78","sort":10096,"name":"Docker"},{"id":"42908d","sort":10099,"name":"制作镜像"}],"bulletin":false}');export{p as comp,d as data};
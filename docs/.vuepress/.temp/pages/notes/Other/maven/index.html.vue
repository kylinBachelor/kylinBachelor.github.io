<template><div><h1 id="maven依赖管理项目构建工具" tabindex="-1"><a class="header-anchor" href="#maven依赖管理项目构建工具"><span>Maven依赖管理项目构建工具</span></a></h1>
<blockquote>
<p>来源尚硅谷：https://www.bilibili.com/video/BV1JN411G7gX/?p=3&amp;spm_id_from=pageDriver&amp;vd_source=f9ba3419c44a2404c33309a196442515</p>
</blockquote>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<p>[TOC]</p>
<h2 id="一、maven简介" tabindex="-1"><a class="header-anchor" href="#一、maven简介"><span>一、Maven简介</span></a></h2>
<h3 id="_1、为什么学习maven" tabindex="-1"><a class="header-anchor" href="#_1、为什么学习maven"><span>1、为什么学习Maven</span></a></h3>
<h4 id="_1-1、maven是一个依赖管理工具" tabindex="-1"><a class="header-anchor" href="#_1-1、maven是一个依赖管理工具"><span>1.1、Maven是一个依赖管理工具</span></a></h4>
<p>①jar 包的规模</p>
<p>随着我们使用越来越多的框架，或者框架封装程度越来越高，项目中使用的jar包也越来越多。项目中，一个模块里面用到上百个jar包是非常正常的。</p>
<p>比如下面的例子，我们只用到 SpringBoot、SpringCloud 框架中的三个功能：</p>
<ul>
<li>Nacos 服务注册发现</li>
<li>Web 框架环境</li>
<li>视图模板技术 Thymeleaf</li>
</ul>
<p>最终却导入了 106 个 jar 包：</p>
<blockquote>
<p>org.springframework.security:spring-security-rsa🫙1.0.9.RELEASE:compile
com.netflix.ribbon: ribbon🫙2.3.0:compile
org.springframework.boot:spring-boot-starter-thymeleaf🫙2.3.6.RELEASE:compile
commons-configuration:commons-configuration🫙1.8:compile
org.apache.logging.log4j:log4j-api🫙2.13.3:compile
org.springframework:spring-beans🫙5.2.11.RELEASE:compile
org.springframework.cloud:spring-cloud-starter-netflix-ribbon🫙2.2.6.RELEASE:compile
org.apache.tomcat.embed:tomcat-embed-websocket🫙9.0.39:compile
com.alibaba.cloud:spring-cloud-alibaba-commons🫙2.2.6.RELEASE:compile
org.bouncycastle:bcprov-jdk15on🫙1.64:compile
org.springframework.security:spring-security-crypto🫙5.3.5.RELEASE:compile
org.apache.httpcomponents:httpasyncclient🫙4.1.4:compile
com.google.j2objc:j2objc-annotations🫙1.3:compile
com.fasterxml.jackson.core:jackson-databind🫙2.11.3:compile
io.reactivex:rxjava🫙1.3.8:compile
ch.qos.logback:logback-classic🫙1.2.3:compile
org.springframework:spring-web🫙5.2.11.RELEASE:compile
io.reactivex:rxnetty-servo🫙0.4.9:runtime
org.springframework:spring-core🫙5.2.11.RELEASE:compile
io.github.openfeign.form:feign-form-spring🫙3.8.0:compile
io.github.openfeign.form:feign-form🫙3.8.0:compile
com.netflix.ribbon:ribbon-loadbalancer🫙2.3.0:compile
org.apache.httpcomponents:httpcore🫙4.4.13:compile
org.thymeleaf.extras:thymeleaf-extras-java8time🫙3.0.4.RELEASE:compile
org.slf4j:jul-to-slf4j🫙1.7.30:compile
com.atguigu.demo:demo09-base-entity🫙1.0-SNAPSHOT:compile
org.yaml:snakeyaml🫙1.26:compile
org.springframework.boot:spring-boot-starter-logging🫙2.3.6.RELEASE:compile
io.reactivex:rxnetty-contexts🫙0.4.9:runtime
org.apache.httpcomponents:httpclient🫙4.5.13:compile
io.github.openfeign:feign-core🫙10.10.1:compile
org.springframework.boot:spring-boot-starter-aop🫙2.3.6.RELEASE:compile
org.hdrhistogram:HdrHistogram🫙2.1.9:compile
org.springframework:spring-context🫙5.2.11.RELEASE:compile
commons-lang:commons-lang🫙2.6:compile
io.prometheus:simpleclient🫙0.5.0:compile
ch.qos.logback:logback-core🫙1.2.3:compile
org.springframework:spring-webmvc🫙5.2.11.RELEASE:compile
com.sun.jersey:jersey-core🫙1.19.1:runtime
javax.ws.rs:jsr311-api🫙1.1.1:runtime
javax.inject:javax.inject🫙1:runtime
org.springframework.cloud:spring-cloud-openfeign-core🫙2.2.6.RELEASE:compile
com.netflix.ribbon:ribbon-core🫙2.3.0:compile
com.netflix.hystrix:hystrix-core🫙1.5.18:compile
com.netflix.ribbon:ribbon-transport🫙2.3.0:runtime
org.springframework.boot:spring-boot-starter-json🫙2.3.6.RELEASE:compile
org.springframework.cloud:spring-cloud-starter-openfeign🫙2.2.6.RELEASE:compile
com.fasterxml.jackson.module:jackson-module-parameter-names🫙2.11.3:compile
com.sun.jersey.contribs:jersey-apache-client4🫙1.19.1:runtime
io.github.openfeign:feign-hystrix🫙10.10.1:compile
io.github.openfeign:feign-slf4j🫙10.10.1:compile
com.alibaba.nacos:nacos-client🫙1.4.2:compile
org.apache.httpcomponents:httpcore-nio🫙4.4.13:compile
com.sun.jersey:jersey-client🫙1.19.1:runtime
org.springframework.cloud:spring-cloud-context🫙2.2.6.RELEASE:compile
org.glassfish:jakarta.el🫙3.0.3:compile
org.apache.logging.log4j:log4j-to-slf4j🫙2.13.3:compile
com.fasterxml.jackson.datatype:jackson-datatype-jsr310🫙2.11.3:compile
org.springframework.cloud:spring-cloud-commons🫙2.2.6.RELEASE:compile
org.aspectj:aspectjweaver🫙1.9.6:compile
com.alibaba.cloud:spring-cloud-starter-alibaba-nacos-discovery🫙2.2.6.RELEASE:compile
com.google.guava:listenablefuture🫙9999.0-empty-to-avoid-conflict-with-guava:compile
com.alibaba.spring:spring-context-support🫙1.0.10:compile
jakarta.annotation:jakarta.annotation-api🫙1.3.5:compile
org.bouncycastle:bcpkix-jdk15on🫙1.64:compile
com.netflix.netflix-commons:netflix-commons-util🫙0.3.0:runtime
com.fasterxml.jackson.core:jackson-annotations🫙2.11.3:compile
com.google.guava:guava🫙29.0-jre:compile
com.google.guava:failureaccess🫙1.0.1:compile
org.springframework.boot:spring-boot🫙2.3.6.RELEASE:compile
com.fasterxml.jackson.datatype:jackson-datatype-jdk8🫙2.11.3:compile
com.atguigu.demo:demo08-base-api🫙1.0-SNAPSHOT:compile
org.springframework.cloud:spring-cloud-starter-netflix-archaius🫙2.2.6.RELEASE:compile
org.springframework.boot:spring-boot-autoconfigure🫙2.3.6.RELEASE:compile
org.slf4j:slf4j-api🫙1.7.30:compile
commons-io:commons-io🫙2.7:compile
org.springframework.cloud:spring-cloud-starter🫙2.2.6.RELEASE:compile
org.apache.tomcat.embed:tomcat-embed-core🫙9.0.39:compile
io.reactivex:rxnetty🫙0.4.9:runtime
com.fasterxml.jackson.core:jackson-core🫙2.11.3:compile
com.google.code.findbugs:jsr305🫙3.0.2:compile
com.netflix.archaius:archaius-core🫙0.7.6:compile
org.springframework.boot:spring-boot-starter-web🫙2.3.6.RELEASE:compile
commons-codec:commons-codec🫙1.14:compile
com.netflix.servo:servo-core🫙0.12.21:runtime
com.google.errorprone:error_prone_annotations🫙2.3.4:compile
org.attoparser:attoparser🫙2.0.5.RELEASE:compile
com.atguigu.demo:demo10-base-util🫙1.0-SNAPSHOT:compile
org.checkerframework:checker-qual🫙2.11.1:compile
org.thymeleaf:thymeleaf-spring5🫙3.0.11.RELEASE:compile
commons-fileupload:commons-fileupload🫙1.4:compile
com.netflix.ribbon:ribbon-httpclient🫙2.3.0:compile
com.netflix.netflix-commons:netflix-statistics🫙0.1.1:runtime
org.unbescape:unbescape🫙1.1.6.RELEASE:compile
org.springframework:spring-jcl🫙5.2.11.RELEASE:compile
com.alibaba.nacos:nacos-common🫙1.4.2:compile
commons-collections:commons-collections🫙3.2.2:runtime
javax.persistence:persistence-api🫙1.0:compile
com.alibaba.nacos:nacos-api🫙1.4.2:compile
org.thymeleaf:thymeleaf🫙3.0.11.RELEASE:compile
org.springframework:spring-aop🫙5.2.11.RELEASE:compile
org.springframework.boot:spring-boot-starter🫙2.3.6.RELEASE:compile
org.springframework.boot:spring-boot-starter-tomcat🫙2.3.6.RELEASE:compile
org.springframework.cloud:spring-cloud-netflix-ribbon🫙2.2.6.RELEASE:compile
org.springframework:spring-expression🫙5.2.11.RELEASE:compile
org.springframework.cloud:spring-cloud-netflix-archaius🫙2.2.6.RELEASE:compile</p>
</blockquote>
<p>而如果使用 Maven 来引入这些 jar 包只需要配置三个『<strong>依赖</strong>』：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- Nacos 服务注册发现启动器 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.alibaba.cloud</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-cloud-starter-alibaba-nacos-discovery</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- web启动器依赖 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework.boot</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-boot-starter-web</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 视图模板技术 thymeleaf --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework.boot</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-boot-starter-thymeleaf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>②jar包的来源问题</p>
<ul>
<li>这个jar包所属技术的官网。官网通常是英文界面，网站的结构又不尽相同，甚至找到下载链接还发现需要通过特殊的工具下载。</li>
<li>第三方网站提供下载。问题是不规范，在使用过程中会出现各种问题。
<ul>
<li>jar包的名称</li>
<li>jar包的版本</li>
<li>jar包内的具体细节</li>
</ul>
</li>
<li>而使用 Maven 后，依赖对应的 jar 包能够<strong>自动下载</strong>，方便、快捷又规范。</li>
</ul>
<p>③jar包的导入问题</p>
<p>在web工程中，jar包必须存放在指定位置：</p>
<p><img src="@source/notes/Other/maven/assets/image-20231021101825708.png" alt="image-20231021101825708"></p>
<p>在使用Maven之后，通过配置依赖(jar包)的坐标，查找本地仓库中相应jar包，若本地仓库没有，则统一从镜像网站或中央仓库中下载：</p>
<p><img src="@source/notes/Other/maven/assets/image-20231021102831531.png" alt="image-20231021102831531"></p>
<p>④jar包之间的依赖</p>
<p>框架中使用的 jar 包，不仅数量庞大，而且彼此之间存在错综复杂的依赖关系。依赖关系的复杂程度，已经上升到了完全不能靠人力手动解决的程度。另外，jar 包之间有可能产生冲突。进一步增加了我们在 jar 包使用过程中的难度。</p>
<p>下面是前面例子中 jar 包之间的依赖关系：</p>
<p><img src="@source/notes/Other/maven/assets/img006.ab4f2e31.png" alt="images"></p>
<p>而实际上 jar 包之间的依赖关系是普遍存在的，如果要由程序员手动梳理无疑会增加极高的学习成本，而这些工作又对实现业务功能毫无帮助。</p>
<p>而使用 Maven 则几乎不需要管理这些关系，极个别的地方调整一下即可，极大的减轻了我们的工作量。</p>
<h4 id="_1-2、maven是一个构建工具" tabindex="-1"><a class="header-anchor" href="#_1-2、maven是一个构建工具"><span>1.2、Maven是一个构建工具</span></a></h4>
<p>①你没有注意过的构建</p>
<p>你可以不使用 Maven，但是构建必须要做。当我们使用 IDEA 进行开发时，构建是 IDEA 替我们做的。</p>
<p><img src="@source/notes/Other/maven/assets/image-20231021103758624.png" alt="image-20231021103758624"></p>
<p>②脱离 IDE 环境仍需构建</p>
<p><img src="@source/notes/Other/maven/assets/image.png" alt="img"></p>
<h4 id="_1-3、结论" tabindex="-1"><a class="header-anchor" href="#_1-3、结论"><span>1.3、结论</span></a></h4>
<ul>
<li><strong>管理规模庞大的 jar 包，需要专门工具。</strong></li>
<li><strong>脱离 IDE 环境执行构建操作，需要专门工具。</strong></li>
</ul>
<h3 id="_2-maven介绍" tabindex="-1"><a class="header-anchor" href="#_2-maven介绍"><span>2. Maven介绍</span></a></h3>
<p><a href="https://maven.apache.org/what-is-maven.html" target="_blank" rel="noopener noreferrer">https://maven.apache.org/what-is-maven.html</a></p>
<p>Maven 是一款为 Java 项目管理构建、依赖管理的工具（软件），使用 Maven 可以自动化构建、测试、打包和发布项目，大大提高了开发效率和质量。</p>
<p>Maven就是一个软件，掌握安装、配置、以及基本功能 <strong>（项目构建、依赖管理）</strong> 的理解和使用即可！</p>
<ol>
<li>
<p><strong>依赖管理：</strong></p>
<p>Maven 可以管理项目的依赖，包括自动下载所需依赖库、自动下载依赖需要的依赖并且保证版本没有冲突、依赖版本管理等。通过 Maven，我们可以方便地维护项目所依赖的外部库，避免版本冲突和转换错误等，而我们仅仅需要编写配置即可。</p>
</li>
<li>
<p><strong>构建管理：</strong></p>
<p>项目构建是指将源代码、配置文件、资源文件等转化为能够运行或部署的应用程序或库的过程</p>
<p>Maven 可以管理项目的编译、测试、打包、部署等构建过程。通过实现标准的构建生命周期，Maven 可以确保每一个构建过程都遵循同样的规则和最佳实践。同时，Maven 的插件机制也使得开发者可以对构建过程进行扩展和定制。主动触发构建，只需要简单的命令操作即可。</p>
<p><img src="@source/notes/Other/maven/assets/image_OSOE45UACw.png" alt=""></p>
</li>
</ol>
<p><strong>场景1：</strong> 例如我们项目需要第三方依赖如：Druid连接池、MySQL数据库驱动和Jackson JSON等处理。那么我们可以将想要的依赖项的信息编写到Maven工程的配置文件，Maven就会自动下载并复制这些依赖项到项目中，无需自己导入jar包，管理jar!</p>
<p><strong>场景2：</strong> 项目完成开发，我们想要打成war部署到服务器中，使用maven的构建命令可以快速打包！节省大量时间！</p>
<h3 id="_3-maven软件工作原理模型图-了解" tabindex="-1"><a class="header-anchor" href="#_3-maven软件工作原理模型图-了解"><span>3. Maven软件工作原理模型图（了解）</span></a></h3>
<p><img src="@source/notes/Other/maven/assets/image_6AVFQbaXLj.png" alt=""></p>
<h2 id="二、maven安装和配置" tabindex="-1"><a class="header-anchor" href="#二、maven安装和配置"><span>二、Maven安装和配置</span></a></h2>
<h3 id="_1-maven安装" tabindex="-1"><a class="header-anchor" href="#_1-maven安装"><span>1. Maven安装</span></a></h3>
<p><a href="https://maven.apache.org/docs/history.html" target="_blank" rel="noopener noreferrer">https://maven.apache.org/docs/history.html</a></p>
<p>各个工具选用版本：</p>
<table>
<thead>
<tr>
<th>工具</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>Maven</td>
<td>3.8.8</td>
</tr>
<tr>
<td>JDK</td>
<td>17</td>
</tr>
<tr>
<td>IDEA</td>
<td>2022.2</td>
</tr>
</tbody>
</table>
<p><strong>安装条件：</strong> maven需要本机安装java环境、必需包含java_home环境变量！</p>
<p><strong>软件安装：</strong> 右键解压即可（绿色免安装）</p>
<p><strong>软件结构：</strong></p>
<p><img src="@source/notes/Other/maven/assets/image-20231021110800113.png" alt="image-20231021110800113"></p>
<p><strong>bin</strong>：含有Maven的运行脚本</p>
<p>boot：含有plexus-classworlds类加载器框架</p>
<p><strong>conf</strong>：含有Maven的核心配置文件</p>
<p>lib：含有Maven运行时所需要的Java类库</p>
<p>LICENSE、NOTICE、README.txt：针对Maven版本，第三方软件等简要介绍</p>
<h3 id="_2-maven环境配置" tabindex="-1"><a class="header-anchor" href="#_2-maven环境配置"><span>2. Maven环境配置</span></a></h3>
<ol>
<li>
<p>配置MAVEN_HOME</p>
<p><img src="@source/notes/Other/maven/assets/image-20231021110938230.png" alt="image-20231021110938230"></p>
</li>
<li>
<p>配置Path</p>
<p><img src="@source/notes/Other/maven/assets/image_xNL5Fg_ucf.png" alt=""></p>
</li>
<li>
<p>命令测试（cmd窗口）</p>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mvn</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -v</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 输出版本信息即可，如果错误，请仔细检查环境变量即可！</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_3-maven功能配置" tabindex="-1"><a class="header-anchor" href="#_3-maven功能配置"><span>3. Maven功能配置</span></a></h3>
<blockquote>
<p>我们需要需改<strong>maven/conf/settings.xml</strong>配置文件，来修改maven的一些默认配置。我们主要休要修改的有三个配置：</p>
<p>1.依赖本地缓存位置（本地仓库位置）</p>
<p>2.maven下载镜像</p>
<p>3.maven选用编译项目的jdk版本</p>
</blockquote>
<ol>
<li>
<p>配置本地仓库地址</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  &#x3C;!-- localRepository</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   | The path to the local repository maven will use to store artifacts.</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   |</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   | Default: ${user.home}/.m2/repository</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  &#x3C;localRepository>/path/to/local/repo&#x3C;/localRepository></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  --></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> &#x3C;!-- conf/settings.xml 55行 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">localRepository</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">D:\maven-repository</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">localRepository</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置国内阿里镜像</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!--在mirrors节点(标签)下添加中央仓库镜像 160行附近--></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">mirror</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">alimaven</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">aliyun maven</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">http://maven.aliyun.com/nexus/content/groups/public/</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">mirrorOf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">central</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">mirrorOf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">mirror</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置jdk17版本项目构建</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!--在profiles节点(标签)下添加jdk编译版本 268行附近--></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">profile</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">jdk-17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">activation</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">activeByDefault</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">activeByDefault</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">jdk</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">jdk</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">activation</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">properties</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.source</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.source</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.compilerVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.compilerVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">properties</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">profile</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_4-idea配置本地maven软件" tabindex="-1"><a class="header-anchor" href="#_4-idea配置本地maven软件"><span>4. IDEA配置本地Maven软件</span></a></h3>
<blockquote>
<p>我们需要将配置好的maven软件，配置到idea开发工具中即可！ 注意：idea工具默认自带maven配置软件，但是因为没有修改配置，建议替换成本地配置好的maven！</p>
</blockquote>
<p>选择本地maven软件</p>
<p><img src="@source/notes/Other/maven/assets/image-20231021112046512.png" alt="image-20231021112046512"></p>
<p><strong>注意</strong>：</p>
<p>1、如果本地仓库地址不变化，只有一个原因，就是maven/conf/settings.xml配置文件编写错误！仔细检查即可！</p>
<p>2、一定保证User settings file对应之前修改的settings.xml的路径，若 不一致，选中Override复选框，手动选择配置文件</p>
<h2 id="三、基于idea创建maven工程" tabindex="-1"><a class="header-anchor" href="#三、基于idea创建maven工程"><span>三、基于IDEA创建Maven工程</span></a></h2>
<h3 id="_1-概念梳理maven工程的gavp" tabindex="-1"><a class="header-anchor" href="#_1-概念梳理maven工程的gavp"><span>1. 概念梳理Maven工程的GAVP</span></a></h3>
<p>Maven工程相对之前的项目，多出一组gavp属性，gav需要我们在创建项目的时候指定，p有默认值，我们先行了解下这组属性的含义：</p>
<p>Maven 中的 GAVP 是指 GroupId、ArtifactId、Version、Packaging 等四个属性的缩写，其中前三个是必要的，而 Packaging 属性为可选项。这四个属性主要为每个项目在maven仓库中做一个标识，类似人的姓-名！有了具体标识，方便后期项目之间相互引用依赖等！</p>
<p>GAV遵循一下规则：</p>
<p>​	1） <strong>GroupID 格式</strong>：com.{公司/BU }.业务线.[子业务线]，最多 4 级。</p>
<p>​		说明：{公司/BU} 例如：alibaba/taobao/tmall/aliexpress 等 BU 一级；子业务线可选。</p>
<p>​		正例：com.taobao.tddl 或 com.alibaba.sourcing.multilang</p>
<p>​	2） <strong>ArtifactID 格式</strong>：产品线名-模块名。语义不重复不遗漏，先到仓库中心去查证一下。</p>
<p>​		正例：tc-client / uic-api / tair-tool / bookstore</p>
<p>​	3） <strong>Version版本号格式推荐</strong>：主版本号.次版本号.修订号</p>
<p>​		1） 主版本号：当做了不兼容的 API 修改，或者增加了能改变产品方向的新功能。</p>
<p>​		2） 次版本号：当做了向下兼容的功能性新增（新增类、接口等）。</p>
<p>​		3） 修订号：修复 bug，没有修改方法签名的功能加强，保持 API 兼容性。</p>
<p>​		例如： 初始→1.0.0  修改bug → 1.0.1  功能调整 → 1.1.1等</p>
<p><strong>Packaging定义规则：</strong></p>
<p>​	指示将项目打包为什么类型的文件，idea根据packaging值，识别maven项目类型！</p>
<p>​	packaging 属性为 jar（默认值），代表普通的Java工程，打包以后是.jar结尾的文件。</p>
<p>​	packaging 属性为 war，代表Java的web工程，打包以后.war结尾的文件。</p>
<p>​	packaging 属性为 pom，代表不会打包，用来做继承的父工程。</p>
<h3 id="_2-idea构建maven-java-se工程" tabindex="-1"><a class="header-anchor" href="#_2-idea构建maven-java-se工程"><span>2. Idea构建Maven Java SE工程</span></a></h3>
<p>注意：此处省略了version，直接给了一个默认值：<strong>1.0-SNAPSHOT</strong></p>
<p>自己后期可以在项目中随意修改！</p>
<p><img src="@source/notes/Other/maven/assets/image-20231021143559114.png" alt="image-20231021143559114"></p>
<p>创建工程之后，若第一次使用maven，或者使用的是新的<strong>本地仓库</strong>，idea右下角会出现以下进度条，表示maven正在下载相关插件，等待下载完毕，进度条消失即可</p>
<p><img src="@source/notes/Other/maven/assets/image-20231021145024505.png" alt="image-20231021145024505"></p>
<p>验证maven工程是否创建成功，当创建完毕maven工程之后，idea中会自动打开Maven视图，如下图：</p>
<p><img src="@source/notes/Other/maven/assets/image-20231021145713433.png" alt="image-20231021145713433"></p>
<h3 id="_3-idea构建maven-java-web工程" tabindex="-1"><a class="header-anchor" href="#_3-idea构建maven-java-web工程"><span>3. Idea构建Maven Java Web工程</span></a></h3>
<ol>
<li>
<p>手动创建</p>
<ol>
<li>
<p>创建一个maven的javase工程</p>
<p><img src="@source/notes/Other/maven/assets/image-20231021150134082.png" alt="image-20231021150134082"></p>
</li>
<li>
<p>修改pom.xml文件打包方式</p>
<p>修改位置：项目下/pom.xml</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.atguigu</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">maven_web</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.0-SNAPSHOT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 新增一列打包方式packaging --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">war</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>设置<strong>web资源路径</strong>和<strong>web.xml路径</strong></p>
<p>点击File--&gt;Project Structure</p>
<p><img src="@source/notes/Other/maven/assets/image-20231021151040531.png" alt="image-20231021151040531"></p>
<p><img src="@source/notes/Other/maven/assets/image-20231021151627161.png" alt="image-20231021151627161"></p>
<p><img src="@source/notes/Other/maven/assets/image-20231021151753318.png" alt="image-20231021151753318"></p>
</li>
<li>
<p>刷新和校验</p>
<p><img src="@source/notes/Other/maven/assets/image-20231021152310802.png" alt="image-20231021152310802"></p>
<p><img src="@source/notes/Other/maven/assets/image-20231021151921943.png" alt="image-20231021151921943"></p>
</li>
</ol>
</li>
<li>
<p>插件创建</p>
<ol>
<li>
<p>安装插件JBLJavaToWeb</p>
<p>file / settings / plugins / marketplace</p>
<p><img src="@source/notes/Other/maven/assets/image_cHUU_rABB6.png" alt=""></p>
</li>
<li>
<p>创建一个javasemaven工程</p>
</li>
<li>
<p>右键、使用插件快速补全web项目</p>
<p><img src="@source/notes/Other/maven/assets/image_ZAPkM7VLgJ.png" alt=""></p>
</li>
</ol>
</li>
</ol>
<h3 id="_4-maven工程项目结构说明" tabindex="-1"><a class="header-anchor" href="#_4-maven工程项目结构说明"><span>4. Maven工程项目结构说明</span></a></h3>
<p>Maven 是一个强大的构建工具，它提供一种标准化的项目结构，可以帮助开发者更容易地管理项目的依赖、构建、测试和发布等任务。以下是 Maven Web 程序的文件结构及每个文件的作用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">|-- pom.xml                               # Maven 项目管理文件 </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">|-- src</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |-- main                              # 项目主要代码</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   |-- java                          # Java 源代码目录</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   |   `-- com/example/myapp         # 开发者代码主目录</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   |       |-- controller            # 存放 Controller 层代码的目录</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   |       |-- service               # 存放 Service 层代码的目录</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   |       |-- dao                   # 存放 DAO 层代码的目录</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   |       `-- model                 # 存放数据模型的目录</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   |-- resources                     # 资源目录，存放配置文件、静态资源等</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   |   |-- log4j.properties          # 日志配置文件</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   |   |-- spring-mybatis.xml        # Spring Mybatis 配置文件</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   |   `-- static                    # 存放静态资源的目录</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   |       |-- css                   # 存放 CSS 文件的目录</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   |       |-- js                    # 存放 JavaScript 文件的目录</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   |       `-- images                # 存放图片资源的目录</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |   `-- webapp                        # 存放 WEB 相关配置和资源</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |       |-- WEB-INF                   # 存放 WEB 应用配置文件</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |       |   |-- web.xml               # Web 应用的部署描述文件</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |       |   `-- classes               # 存放编译后的 class 文件</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    |       `-- index.html                # Web 应用入口页面</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    `-- test                              # 项目测试代码</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        |-- java                          # 单元测试目录</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        `-- resources                     # 测试资源目录</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>pom.xml：Maven 项目管理文件，用于描述项目的依赖和构建配置等信息。</li>
<li>src/main/java：存放项目的 Java 源代码。</li>
<li>src/main/resources：存放项目的资源文件，如配置文件、静态资源等。</li>
<li>src/main/webapp/WEB-INF：存放 Web 应用的配置文件。</li>
<li>src/main/webapp/index.jsp：Web 应用的入口页面。</li>
<li>src/test/java：存放项目的测试代码。</li>
<li>src/test/resources：存放测试相关的资源文件，如测试配置文件等。</li>
</ul>
<h2 id="四、基于idea进行maven工程构建" tabindex="-1"><a class="header-anchor" href="#四、基于idea进行maven工程构建"><span>四、基于IDEA进行Maven工程构建</span></a></h2>
<h3 id="_1-构建概念和构建过程" tabindex="-1"><a class="header-anchor" href="#_1-构建概念和构建过程"><span>1. 构建概念和构建过程</span></a></h3>
<p>项目构建是指将源代码、依赖库和资源文件等转换成可执行或可部署的应用程序的过程，在这个过程中包括编译源代码、链接依赖库、打包和部署等多个步骤。</p>
<p>项目构建是软件开发过程中至关重要的一部分，它能够大大提高软件开发效率，使得开发人员能够更加专注于应用程序的开发和维护，而不必关心应用程序的构建细节。</p>
<p>同时，项目构建还能够将多个开发人员的代码汇合到一起，并能够自动化项目的构建和部署，大大降低了项目的出错风险和提高开发效率。常见的构建工具包括 Maven、Gradle、Ant 等。</p>
<p><img src="@source/notes/Other/maven/assets/image_REm5kk7DnX.png" alt=""></p>
<h3 id="_2-命令方式项目构建" tabindex="-1"><a class="header-anchor" href="#_2-命令方式项目构建"><span>2. 命令方式项目构建</span></a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>mvn compile</td>
<td>编译项目，生成target文件</td>
</tr>
<tr>
<td>mvn package</td>
<td>打包项目，生成jar或war文件</td>
</tr>
<tr>
<td>mvn clean</td>
<td>清理编译或打包后的项目结构</td>
</tr>
<tr>
<td>mvn install</td>
<td>打包后上传到maven本地仓库</td>
</tr>
<tr>
<td>mvn deploy</td>
<td>只打包，上传到maven私服仓库</td>
</tr>
<tr>
<td>mvn site</td>
<td>生成站点</td>
</tr>
<tr>
<td>mvn test</td>
<td>执行测试源码</td>
</tr>
</tbody>
</table>
<p>war包打包插件和jdk版本不匹配：pom.xml 添加以下代码即可</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    &#x3C;!-- jdk17 和 war包版本插件不匹配 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.apache.maven.plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">maven-war-plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">3.2.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令触发练习：</p>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mvn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 命令</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 命令</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">#清理</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mvn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clean</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">#清理，并重新打包</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mvn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clean</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> package</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">#执行测试代码</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mvn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-可视化方式项目构建" tabindex="-1"><a class="header-anchor" href="#_3-可视化方式项目构建"><span>3. 可视化方式项目构建</span></a></h3>
<p><img src="@source/notes/Other/maven/assets/image-20231021153444864.png" alt="image-20231021153444864"></p>
<p>注意：打包（package）和安装（install）的区别是什么</p>
<p>打包是将工程打成jar或war文件，保存在target目录下</p>
<p>安装是将当前工程所生成的jar或war文件，安装到本地仓库，会按照坐标保存到指定位置</p>
<h3 id="_4-构建插件、命令、生命周期命令之间关系" tabindex="-1"><a class="header-anchor" href="#_4-构建插件、命令、生命周期命令之间关系"><span>4. 构建插件、命令、生命周期命令之间关系</span></a></h3>
<ul>
<li>
<p><strong>构建生命周期</strong></p>
<p>我们发现一个情况！当我们执行package命令也会自动执行compile命令！</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] --------------------------------[ jar ]---------------------------------</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] --- maven-resources-plugin:2.6:resources (default-resources) @ mybatis-base-curd ---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] --- maven-compiler-plugin:3.1:compile (default-compile) @ mybatis-base-curd ---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] --- maven-resources-plugin:2.6:testResources (default-testResources) @ mybatis-base-curd ---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] --- maven-compiler-plugin:3.1:testCompile (default-testCompile) @ mybatis-base-curd ---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] --- maven-surefire-plugin:2.12.4:test (default-test) @ mybatis-base-curd ---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ mybatis-base-curd ---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] Building jar: D:\javaprojects\backend-engineering\part03-mybatis\mybatis-base-curd\target\mybatis-base-curd-1.0-SNAPSHOT.jar</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] ------------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] BUILD SUCCESS</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] ------------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] Total time:  5.013 s</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] Finished at: 2023-06-05T10:03:47+08:00</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[INFO] ------------------------------------------------------------------------</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种行为就是因为构建生命周期产生的！构建生命周期可以理解成是一组固定构建命令的有序集合，触发周期后的命令，会自动触发周期前的命令！！！</p>
<p><strong>构建周期作用：会简化构建过程</strong></p>
<p>例如：项目打包   mvn clean package即可。 </p>
<p>主要两个构建生命周期：</p>
<ul>
<li>
<p>清理周期：主要是对项目编译生成文件进行清理</p>
<p>包含命令：clean </p>
</li>
</ul>
</li>
<li>
<p>默认周期：定义了真正构件时所需要执行的所有步骤，它是生命周期中最核心的部分</p>
<pre><code>  包含命令：compile -  test - package - install - deploy
</code></pre>
</li>
<li>
<p><strong>插件、命令、周期三者关系（了解）</strong></p>
<p>周期→包含若干命令→包含若干插件</p>
<p>使用周期命令构建，简化构建过程！</p>
<p>最终进行构建的是插件！</p>
</li>
</ul>
<h2 id="五、基于idea-进行maven依赖管理" tabindex="-1"><a class="header-anchor" href="#五、基于idea-进行maven依赖管理"><span>五、基于IDEA 进行Maven依赖管理</span></a></h2>
<h3 id="_1-依赖管理概念" tabindex="-1"><a class="header-anchor" href="#_1-依赖管理概念"><span>1. 依赖管理概念</span></a></h3>
<p>Maven 依赖管理是 Maven 软件中最重要的功能之一。Maven 的依赖管理能够帮助开发人员自动解决软件包依赖问题，使得开发人员能够轻松地将其他开发人员开发的模块或第三方框架集成到自己的应用程序或模块中，避免出现版本冲突和依赖缺失等问题。</p>
<p>我们通过定义 POM 文件，Maven 能够自动解析项目的依赖关系，并通过 Maven <strong>仓库自动</strong>下载和管理依赖，从而避免了手动下载和管理依赖的繁琐工作和可能引发的版本冲突问题。</p>
<p>总之，Maven 的依赖管理是 Maven 软件的一个核心功能之一，使得软件包依赖的管理和使用更加智能和方便，简化了开发过程中的工作，并提高了软件质量和可维护性。</p>
<h3 id="_2-maven工程核心信息配置和解读-gavp" tabindex="-1"><a class="header-anchor" href="#_2-maven工程核心信息配置和解读-gavp"><span>2. Maven工程核心信息配置和解读（GAVP）</span></a></h3>
<p>位置：pom.xml</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 模型版本 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modelVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">4.0.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modelVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 公司或者组织的唯一标志，并且配置时生成的路径也是由此生成， 如com.companyname.project-group，maven会将该项目打成的jar包放本地路径：/com/companyname/project-group --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.companyname.project-group</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 项目的唯一ID，一个groupId下面可能多个项目，就是靠artifactId来区分的 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">project</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 版本号 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.0.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!--打包方式</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    默认：jar</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    jar指的是普通的java项目打包方式！ 项目打成jar包！</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    war指的是web项目打包方式！项目打成war包！</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    pom不会讲项目打包！这个项目作为父工程，被其他工程聚合或者继承！后面会讲解两个概念</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">--></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">jar/pom/war</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-maven工程依赖管理配置" tabindex="-1"><a class="header-anchor" href="#_3-maven工程依赖管理配置"><span>3. Maven工程依赖管理配置</span></a></h3>
<p>位置：pom.xml</p>
<p>依赖管理和依赖添加</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   通过编写依赖jar包的gav必要属性，引入第三方依赖！</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   scope属性是可选的，可以指定依赖生效范围！</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   依赖信息查询方式：</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      1. maven仓库信息官网 https://mvnrepository.com/</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      2. mavensearch插件搜索</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    &#x3C;!-- 引入具体的依赖包 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">log4j</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">log4j</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.2.17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        &#x3C;!-- 依赖范围 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">scope</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">runtime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">scope</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依赖版本统一提取和维护</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!--声明版本--></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">properties</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  &#x3C;!--命名随便,内部制定版本号即可！--></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">junit.version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">4.12</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">junit.version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  &#x3C;!-- 也可以通过 maven规定的固定的key，配置maven的参数！如下配置编码格式！--></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project.build.sourceEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">UTF-8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project.build.sourceEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project.reporting.outputEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">UTF-8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project.reporting.outputEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">properties</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">junit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">junit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    &#x3C;!--引用properties声明版本 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">${junit.version}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-依赖范围" tabindex="-1"><a class="header-anchor" href="#_4-依赖范围"><span>4. 依赖范围</span></a></h3>
<p>通过设置坐标的依赖范围(scope)，可以设置 对应jar包的作用范围：编译环境、测试环境、运行环境</p>
<table>
<thead>
<tr>
<th>依赖范围</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>compile</strong></td>
<td>编译依赖范围，scope 元素的缺省值。使用此依赖范围的 Maven 依赖，对于三种 classpath 均有效，即该 Maven 依赖在上述三种 classpath 均会被引入。例如，log4j 在编译、测试、运行过程都是必须的。</td>
</tr>
<tr>
<td><strong>test</strong></td>
<td>测试依赖范围。使用此依赖范围的 Maven 依赖，只对测试 classpath 有效。例如，Junit 依赖只有在测试阶段才需要。</td>
</tr>
<tr>
<td><strong>provided</strong></td>
<td>已提供依赖范围。使用此依赖范围的 Maven 依赖，只对编译 classpath 和测试 classpath 有效。例如，servlet-api 依赖对于编译、测试阶段而言是需要的，但是运行阶段，由于外部容器已经提供，故不需要 Maven 重复引入该依赖。</td>
</tr>
<tr>
<td>runtime</td>
<td>运行时依赖范围。使用此依赖范围的 Maven 依赖，只对测试 classpath、运行 classpath 有效。例如，JDBC 驱动实现依赖，其在编译时只需 JDK 提供的 JDBC 接口即可，只有测试、运行阶段才需要实现了 JDBC 接口的驱动。</td>
</tr>
<tr>
<td>system</td>
<td>系统依赖范围，其效果与 provided 的依赖范围一致。其用于添加非 Maven 仓库的本地依赖，通过依赖元素 dependency 中的 systemPath 元素指定本地依赖的路径。鉴于使用其会导致项目的可移植性降低，一般不推荐使用。</td>
</tr>
<tr>
<td>import</td>
<td>导入依赖范围，该依赖范围只能与 dependencyManagement 元素配合使用，其功能是将目标 pom.xml 文件中 dependencyManagement 的配置导入合并到当前 pom.xml 的 dependencyManagement 中。</td>
</tr>
</tbody>
</table>
<h3 id="_5-maven工程依赖下载失败错误解决-重点" tabindex="-1"><a class="header-anchor" href="#_5-maven工程依赖下载失败错误解决-重点"><span>5. Maven工程依赖下载失败错误解决（重点）</span></a></h3>
<p>在使用 Maven 构建项目时，可能会发生依赖项下载错误的情况，主要原因有以下几种：</p>
<ol>
<li>下载依赖时出现网络故障或仓库服务器宕机等原因，导致无法连接至 Maven 仓库，从而无法下载依赖。</li>
<li>依赖项的版本号或配置文件中的版本号错误，或者依赖项没有正确定义，导致 Maven 下载的依赖项与实际需要的不一致，从而引发错误。</li>
<li>本地 Maven 仓库或缓存被污染或损坏，导致 Maven 无法正确地使用现有的依赖项。</li>
</ol>
<p>解决方案：</p>
<ol>
<li>
<p>检查网络连接和 Maven 仓库服务器状态。</p>
</li>
<li>
<p>确保依赖项的版本号与项目对应的版本号匹配，并检查 POM 文件中的依赖项是否正确。</p>
</li>
<li>
<p>清除本地 Maven 仓库缓存（lastUpdated 文件），因为只要存在lastupdated缓存文件，刷新也不会重新下载。本地仓库中，根据依赖的gav属性依次向下查找文件夹，最终删除内部的文件，刷新重新下载即可！</p>
<p>例如： pom.xml依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.alibaba</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">druid</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.2.8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件：</p>
<p><img src="@source/notes/Other/maven/assets/image_m3iQtBLARz.png" alt=""></p>
</li>
<li>
<p>或者可以将清除<strong>lastUpdated文件</strong>的操作写在一个脚本文件中，手动创建文件&quot;clearLastUpdated.bat&quot;，名字任意，但是后缀必须是bat，将以下内容复制到文件中</p>
<div class="language-bat line-numbers-mode" data-ext="bat" data-title="bat"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>cls </span></span>
<span class="line"><span>@ECHO OFF </span></span>
<span class="line"><span>SET CLEAR_PATH=D: </span></span>
<span class="line"><span>SET CLEAR_DIR=D:\maven-repository(本地仓库路径)</span></span>
<span class="line"><span>color 0a </span></span>
<span class="line"><span>TITLE ClearLastUpdated For Windows </span></span>
<span class="line"><span>GOTO MENU </span></span>
<span class="line"><span>:MENU </span></span>
<span class="line"><span>CLS</span></span>
<span class="line"><span>ECHO. </span></span>
<span class="line"><span>ECHO. * * * *  ClearLastUpdated For Windows  * * * * </span></span>
<span class="line"><span>ECHO. * * </span></span>
<span class="line"><span>ECHO. * 1 清理*.lastUpdated * </span></span>
<span class="line"><span>ECHO. * * </span></span>
<span class="line"><span>ECHO. * 2 查看*.lastUpdated * </span></span>
<span class="line"><span>ECHO. * * </span></span>
<span class="line"><span>ECHO. * 3 退 出 * </span></span>
<span class="line"><span>ECHO. * * </span></span>
<span class="line"><span>ECHO. * * * * * * * * * * * * * * * * * * * * * * * * </span></span>
<span class="line"><span>ECHO. </span></span>
<span class="line"><span>ECHO.请输入选择项目的序号： </span></span>
<span class="line"><span>set /p ID= </span></span>
<span class="line"><span>IF "%id%"=="1" GOTO cmd1 </span></span>
<span class="line"><span>IF "%id%"=="2" GOTO cmd2 </span></span>
<span class="line"><span>IF "%id%"=="3" EXIT </span></span>
<span class="line"><span>PAUSE </span></span>
<span class="line"><span>:cmd1 </span></span>
<span class="line"><span>ECHO. 开始清理</span></span>
<span class="line"><span>%CLEAR_PATH%</span></span>
<span class="line"><span>cd %CLEAR_DIR%</span></span>
<span class="line"><span>for /r %%i in (*.lastUpdated) do del %%i</span></span>
<span class="line"><span>ECHO.OK </span></span>
<span class="line"><span>PAUSE </span></span>
<span class="line"><span>GOTO MENU </span></span>
<span class="line"><span>:cmd2 </span></span>
<span class="line"><span>ECHO. 查看*.lastUpdated文件</span></span>
<span class="line"><span>%CLEAR_PATH%</span></span>
<span class="line"><span>cd %CLEAR_DIR%</span></span>
<span class="line"><span>for /r %%i in (*.lastUpdated) do echo %%i</span></span>
<span class="line"><span>ECHO.OK </span></span>
<span class="line"><span>PAUSE </span></span>
<span class="line"><span>GOTO MENU</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/Other/maven/assets/image-20231021161615994.png" alt="image-20231021161615994"></p>
</li>
</ol>
<h3 id="_6-maven工程build构建配置" tabindex="-1"><a class="header-anchor" href="#_6-maven工程build构建配置"><span>6. Maven工程Build构建配置</span></a></h3>
<p>项目构建是指将源代码、依赖库和资源文件等转换成可执行或可部署的应用程序的过程，在这个过程中包括编译源代码、链接依赖库、打包和部署等多个步骤。</p>
<p>默认情况下，构建不需要额外配置，都有对应的缺省配置。当然了，我们也可以在pom.xml定制一些配置，来修改默认构建的行为和产物！</p>
<p>例如：</p>
<ol>
<li>指定构建打包文件的名称，非默认名称</li>
<li>制定构建打包时，指定包含文件格式和排除文件</li>
<li>打包插件版本过低，配置更高版本插件</li>
</ol>
<p>构建配置是在pom.xml / build标签中指定！</p>
<p><strong>指定打包命名</strong></p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 默认的打包名称：artifactid+verson.打包方式 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">finalName</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">定义打包名称</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">finalName</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>指定打包文件</strong></p>
<p>如果在java文件夹中添加java类，会自动打包编译到classes文件夹下！</p>
<p>但是在java文件夹中添加xml文件，默认不会被打包！</p>
<p>默认情况下，按照maven工程结构放置的文件会默认被编译和打包！</p>
<p>除此之外、我们可以使用resources标签，指定要打包资源的文件夹要把哪些静态资源打包到 classes根目录下！</p>
<p>应用场景：mybatis中有时会将用于编写SQL语句的映射文件和mapper接口都写在src/main/java下的某个包中，此时映射文件就不会被打包，如何解决</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    &#x3C;!--设置要打包的资源位置--></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">resources</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">resource</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">            &#x3C;!--设置资源所在目录--></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">directory</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">src/main/java</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">directory</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">includes</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">                &#x3C;!--设置包含的资源类型--></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">**/*.xml</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">includes</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">resource</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">resources</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置依赖插件</strong></p>
<p>dependencies标签下引入开发需要的jar包！我们可以在build/plugins/plugin标签引入插件！</p>
<p>常用的插件：修改jdk版本、tomcat插件、mybatis分页插件、mybatis逆向工程插件等等！</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      &#x3C;!-- java编译插件，配jdk的编译版本 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.apache.maven.plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">maven-compiler-plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">configuration</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">source</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">source</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">encoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">UTF-8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">encoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">configuration</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      &#x3C;!-- tomcat插件 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.apache.tomcat.maven</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">tomcat7-maven-plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">         &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">2.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">configuration</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">port</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">8090</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">port</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">path</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">path</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">uriEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">UTF-8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">uriEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">server</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">tomcat7</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">server</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">configuration</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、maven依赖传递和依赖冲突" tabindex="-1"><a class="header-anchor" href="#六、maven依赖传递和依赖冲突"><span>六、Maven依赖传递和依赖冲突</span></a></h2>
<h3 id="_1-maven依赖传递特性" tabindex="-1"><a class="header-anchor" href="#_1-maven依赖传递特性"><span>1. Maven依赖传递特性</span></a></h3>
<p><strong>概念</strong></p>
<p>假如有Maven项目A，项目B依赖A，项目C依赖B。那么我们可以说 C依赖A。也就是说，依赖的关系为：C—&gt;B—&gt;A， 那么我们执行项目C时，会自动把B、A都下载导入到C项目的jar包文件夹中，这就是依赖的传递性。</p>
<p><strong>作用</strong></p>
<ul>
<li>简化依赖导入过程</li>
<li>确保依赖版本正确</li>
</ul>
<p><strong>传递的原则</strong></p>
<p>在 A 依赖 B，B 依赖 C 的前提下，C 是否能够传递到 A，取决于 B 依赖 C 时使用的依赖范围以及配置</p>
<ul>
<li>
<p>B 依赖 C 时使用 compile 范围：可以传递</p>
</li>
<li>
<p>B 依赖 C 时使用 test 或 provided 范围：不能传递，所以需要这样的 jar 包时，就必须在需要的地方明确配置依赖才可以。</p>
</li>
<li>
<p>B 依赖 C 时，若配置了以下标签，则不能传递</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.alibaba</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">druid</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.2.15</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">optional</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">optional</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>依赖传递终止</strong></p>
<ul>
<li>非compile范围进行依赖传递</li>
<li>使用optional配置终止传递</li>
<li>依赖冲突（传递的依赖已经存在）</li>
</ul>
<p><strong>案例：导入jackson依赖</strong></p>
<p>分析：jackson需要三个依赖</p>
<p><img src="@source/notes/Other/maven/assets/image_9ViibmeAvU.png" alt=""></p>
<p>依赖传递关系：data-bind中，依赖其他两个依赖</p>
<p><img src="@source/notes/Other/maven/assets/image_Wl0Lsj_BLk.png" alt=""></p>
<p>最佳导入：直接可以导入data-bind，自动依赖传递需要的依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.fasterxml.jackson.core</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">jackson-databind</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">2.10.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-maven依赖冲突特性" tabindex="-1"><a class="header-anchor" href="#_2-maven依赖冲突特性"><span>2. Maven依赖冲突特性</span></a></h3>
<p>当直接引用或者间接引用出现了相同的jar包! 这时呢，一个项目就会出现相同的重复jar包，这就算作冲突！依赖冲突避免出现重复依赖，并且终止依赖传递！</p>
<p><img src="@source/notes/Other/maven/assets/image_km7_szBRUw.png" alt=""></p>
<p>maven自动解决依赖冲突问题能力，会按照自己的原则，进行重复依赖选择。同时也提供了手动解决的冲突的方式，不过不推荐！</p>
<p><strong>解决依赖冲突（如何选择重复依赖）方式：</strong></p>
<ol>
<li>
<p>自动选择原则</p>
<ul>
<li>
<p>短路优先原则（第一原则）</p>
<p>A—&gt;B—&gt;C—&gt;D—&gt;E—&gt;X(version 0.0.1)</p>
<p>A—&gt;F—&gt;X(version 0.0.2)</p>
<p>则A依赖于X(version 0.0.2)。</p>
</li>
<li>
<p>依赖路径长度相同情况下，则“先声明优先”（第二原则）</p>
<p>A—&gt;E—&gt;X(version 0.0.1)</p>
<p>A—&gt;F—&gt;X(version 0.0.2)</p>
<p>在&lt;depencies&gt;&lt;/depencies&gt;中，先声明的，路径相同，会优先选择！</p>
</li>
</ul>
</li>
<li>
<p>手动排除</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.atguigu.maven</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pro01-maven-java</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.0-SNAPSHOT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">scope</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">compile</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">scope</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  &#x3C;!-- 使用excludes标签配置依赖的排除  --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">exclusions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    &#x3C;!-- 在exclude标签中配置一个具体的排除 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">exclusion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      &#x3C;!-- 指定要排除的依赖的坐标（不需要写version） --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commons-logging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commons-logging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">exclusion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">exclusions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>小案例</p>
<p>伪代码如下：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">前提：</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   A 1.1 -> B 1.1 -> C 1.1 </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   F 2.2 -> B 2.2 </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pom声明：</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   F 2.2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   A 1.1</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请问最终会导入哪些依赖和对应版本？</p>
</li>
</ol>
<h2 id="七、maven工程继承和聚合关系" tabindex="-1"><a class="header-anchor" href="#七、maven工程继承和聚合关系"><span>七、Maven工程继承和聚合关系</span></a></h2>
<h3 id="_1-maven工程继承关系" tabindex="-1"><a class="header-anchor" href="#_1-maven工程继承关系"><span>1. Maven工程继承关系</span></a></h3>
<ol>
<li>
<p>继承概念</p>
<p>Maven 继承是指在 Maven 的项目中，让一个项目从另一个项目中继承配置信息的机制。继承可以让我们在多个项目中共享同一配置信息，简化项目的管理和维护工作。</p>
</li>
<li>
<p>继承作用</p>
<p>在父工程中统一管理项目中的依赖信息。</p>
<p>它的背景是：</p>
<ul>
<li>对一个比较大型的项目进行了模块拆分。</li>
<li>一个 project 下面，创建了很多个 module。</li>
<li>每一个 module 都需要配置自己的依赖信息。</li>
</ul>
<p>它背后的需求是：</p>
<ul>
<li>在每一个 module 中各自维护各自的依赖信息很容易发生出入，不易统一管理。</li>
<li>使用同一个框架内的不同 jar 包，它们应该是同一个版本，所以整个项目中使用的框架版本需要统一。</li>
<li>使用框架时所需要的 jar 包组合（或者说依赖信息组合）需要经过长期摸索和反复调试，最终确定一个可用组合。这个耗费很大精力总结出来的方案不应该在新的项目中重新摸索。
通过在父工程中为整个项目维护依赖信息的组合既保证了整个项目使用规范、准确的 jar 包；又能够将以往的经验沉淀下来，节约时间和精力。</li>
</ul>
</li>
<li>
<p>继承语法</p>
<ul>
<li>
<p>父工程</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.atguigu.maven</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pro03-maven-parent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.0-SNAPSHOT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  &#x3C;!-- 当前工程作为父工程，它要去管理子工程，所以打包方式必须是 pom --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pom</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>子工程</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 使用parent标签指定当前工程的父工程 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">parent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  &#x3C;!-- 父工程的坐标 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.atguigu.maven</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pro03-maven-parent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.0-SNAPSHOT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">parent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 子工程的坐标 --></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 如果子工程坐标中的groupId和version与父工程一致，那么可以省略 --></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- &#x3C;groupId>com.atguigu.maven&#x3C;/groupId> --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pro04-maven-module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- &#x3C;version>1.0-SNAPSHOT&#x3C;/version> --></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>父工程依赖统一管理</p>
<ul>
<li>
<p>父工程声明版本</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 使用dependencyManagement标签配置对依赖的管理 --></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 被管理的依赖并没有真正被引入到工程 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencyManagement</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-core</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">6.0.10</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-beans</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">6.0.10</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-context</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">6.0.10</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-expression</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">6.0.10</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-aop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">6.0.10</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencyManagement</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>子工程引用版本</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 子工程引用父工程中的依赖信息时，可以把版本号去掉。  --></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 把版本号去掉就表示子工程中这个依赖的版本由父工程决定。 --></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 具体来说是由父工程的dependencyManagement来决定。 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-core</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-beans</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-context</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-expression</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-aop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
<h3 id="_2-maven工程聚合关系" tabindex="-1"><a class="header-anchor" href="#_2-maven工程聚合关系"><span>2. Maven工程聚合关系</span></a></h3>
<ol>
<li>
<p>聚合概念</p>
<p>Maven 聚合是指将多个项目组织到一个父级项目中，以便一起构建和管理的机制。聚合可以帮助我们更好地管理一组相关的子项目，同时简化它们的构建和部署过程。</p>
</li>
<li>
<p>聚合作用</p>
<ol>
<li>管理多个子项目：通过聚合，可以将多个子项目组织在一起，方便管理和维护。</li>
<li>构建和发布一组相关的项目：通过聚合，可以在一个命令中构建和发布多个相关的项目，简化了部署和维护工作。</li>
<li>优化构建顺序：通过聚合，可以对多个项目进行顺序控制，避免出现构建依赖混乱导致构建失败的情况。</li>
<li>统一管理依赖项：通过聚合，可以在父项目中管理公共依赖项和插件，避免重复定义。</li>
</ol>
</li>
<li>
<p>聚合语法</p>
<p>父项目中包含的子项目列表。</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.example</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">parent-project</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pom</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.0.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modules</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">child-project1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">child-project2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modules</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>聚合演示</p>
<p>通过触发父工程构建命令、引发所有子模块构建！产生反应堆！</p>
</li>
</ol>
<h2 id="八、maven私服" tabindex="-1"><a class="header-anchor" href="#八、maven私服"><span>八、Maven私服</span></a></h2>
<h3 id="_1-maven私服简介" tabindex="-1"><a class="header-anchor" href="#_1-maven私服简介"><span>1. Maven私服简介</span></a></h3>
<p>①私服简介</p>
<p>Maven 私服是一种特殊的Maven远程仓库，它是架设在局域网内的仓库服务，用来代理位于外部的远程仓库（中央仓库、其他远程公共仓库）。</p>
<blockquote>
<p>当然也并不是说私服只能建立在局域网，也有很多公司会直接把私服部署到公网，具体还是得看公司业务的性质是否是保密的等等，因为局域网的话只能在公司用，部署到公网的话员工在家里也可以办公使用。</p>
</blockquote>
<p>建立了 Maven 私服后，当局域网内的用户需要某个构件时，会按照如下顺序进行请求和下载。</p>
<p>请求本地仓库，若本地仓库不存在所需构件，则跳转到第 2 步；
请求 Maven 私服，将所需构件下载到本地仓库，若私服中不存在所需构件，则跳转到第 3 步。
请求外部的远程仓库，将所需构件下载并缓存到 Maven 私服，若外部远程仓库不存在所需构件，则 Maven 直接报错。</p>
<p>此外，一些无法从外部仓库下载到的构件，也能从本地上传到私服供其他人使用。</p>
<p><img src="@source/notes/Other/maven/assets/image-20231021164631791.png" alt="image-20231021164631791"></p>
<p>②Maven私服的优势</p>
<ol>
<li>
<p>节省外网带宽
消除对外部远程仓库的大量重复请求（会消耗很大量的带宽），降低外网带宽压力。</p>
</li>
<li>
<p>下载速度更快
Maven私服位于局域网内，从私服下载构建更快更稳定。</p>
</li>
<li>
<p>便于部署第三方构件
有些构件无法从任何一个远程仓库中获得（如：公司或组织内部的私有构件、Oracle的JDBC驱动等），建立私服之后，就可以将这些构件部署到私服中，供内部Maven项目使用。</p>
</li>
<li>
<p>提高项目的稳定性，增强对项目的控制
如果不建立私服，那么Maven项目的构件就高度依赖外部的远程仓库，若外部网络不稳定，则项目的构建过程也会变得不稳定。建立私服后，即使外部网络状况不佳甚至中断，只要私服中已经缓存了所需的构件，Maven也能够正常运行。私服软件（如：Nexus）提供了很多控制功能（如：权限管理、RELEASE/SNAPSHOT版本控制等），可以对仓库进行一些更加高级的控制。</p>
</li>
<li>
<p>降低中央仓库得负荷压力
由于私服会缓存中央仓库得构件，避免了很多对中央仓库的重复下载，降低了中央仓库的负荷。</p>
</li>
</ol>
<p>③常见的Maven私服产品</p>
<ol>
<li>Apache的Archiva</li>
<li>JFrog的Artifactory</li>
<li>Sonatype的Nexus（[ˈneksəs]）（当前最流行、使用最广泛）</li>
</ol>
<h3 id="_2-nexus下载安装" tabindex="-1"><a class="header-anchor" href="#_2-nexus下载安装"><span>2. Nexus下载安装</span></a></h3>
<p>下载地址：https://help.sonatype.com/repomanager3/product-information/download</p>
<p>解压，以管理员身份打开CMD，进入bin目录下，执行./nexus /run命令启动</p>
<p>访问 Nexus 首页</p>
<p>首页地址：http://localhost:8081/，8081为默认端口号</p>
<p><img src="@source/notes/Other/maven/assets/img001.612496a3.png" alt="images"></p>
<h3 id="_3-初始设置" tabindex="-1"><a class="header-anchor" href="#_3-初始设置"><span>3. 初始设置</span></a></h3>
<p><img src="@source/notes/Other/maven/assets/img002.e1ac8197.png" alt="images"></p>
<p><img src="@source/notes/Other/maven/assets/image-20231031171116756.png" alt="image-20231031171116756"></p>
<p>这里参考提示：</p>
<ul>
<li>用户名：admin</li>
<li>密码：查看 <strong>E:\Server\nexus-3.61.0-02-win64\sonatype-work\nexus3\admin.password</strong> 文件</li>
</ul>
<p><img src="@source/notes/Other/maven/assets/image-20231031171242874.png" alt="image-20231031171242874"></p>
<p>继续执行初始化：</p>
<p><img src="@source/notes/Other/maven/assets/img005.4b81e5ab.png" alt="images"></p>
<p><img src="@source/notes/Other/maven/assets/img006.43ebb0ac.png" alt="images"></p>
<p>匿名登录，启用还是禁用？由于启用匿名登录后，后续操作比较简单，这里我们演示禁用匿名登录的操作：</p>
<p><img src="@source/notes/Other/maven/assets/image-20231031171607378.png" alt="image-20231031171607378"></p>
<p>初始化完毕：</p>
<p><img src="@source/notes/Other/maven/assets/image-20231031171708085.png" alt="image-20231031171708085"></p>
<h3 id="_4-nexus上的各种仓库" tabindex="-1"><a class="header-anchor" href="#_4-nexus上的各种仓库"><span>4. Nexus上的各种仓库</span></a></h3>
<p><img src="@source/notes/Other/maven/assets/img009.7f737ed7.png" alt="images"></p>
<table>
<thead>
<tr>
<th>仓库类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>proxy</td>
<td>某个远程仓库的代理</td>
</tr>
<tr>
<td>group</td>
<td>存放：通过 Nexus 获取的第三方 jar 包</td>
</tr>
<tr>
<td>hosted</td>
<td>存放：本团队其他开发人员部署到 Nexus 的 jar 包</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>仓库名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>maven-central</td>
<td>Nexus 对 Maven 中央仓库的代理</td>
</tr>
<tr>
<td>maven-public</td>
<td>Nexus 默认创建，供开发人员下载使用的组仓库</td>
</tr>
<tr>
<td>maven-releases</td>
<td>Nexus 默认创建，供开发人员部署自己 jar 包的宿主仓库 要求 releases 版本</td>
</tr>
<tr>
<td>maven-snapshots</td>
<td>Nexus 默认创建，供开发人员部署自己 jar 包的宿主仓库 要求 snapshots 版本</td>
</tr>
</tbody>
</table>
<p>初始状态下，这几个仓库都没有内容：</p>
<p><img src="@source/notes/Other/maven/assets/img010.e3573d0b.png" alt="images"></p>
<h3 id="_5-通过-nexus-下载-jar-包" tabindex="-1"><a class="header-anchor" href="#_5-通过-nexus-下载-jar-包"><span>5. 通过 Nexus 下载 jar 包</span></a></h3>
<p>修改本地maven的核心配置文件settings.xml，设置新的本地仓库地址</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 配置一个新的 Maven 本地仓库 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">localRepository</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">D:/maven-repository-new</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">localRepository</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>把我们原来配置阿里云仓库地址的 mirror 标签改成下面这样：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">mirror</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">nexus-mine</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">mirrorOf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">central</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">mirrorOf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Nexus mine</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">http://localhost:8081/repository/maven-public/</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">mirror</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 url 标签是这么来的：</p>
<p><img src="@source/notes/Other/maven/assets/img012.5a3b1f11.png" alt="images"></p>
<p><img src="@source/notes/Other/maven/assets/image-20231031172137288.png" alt="image-20231031172137288"></p>
<p>把上图中看到的地址复制出来即可。如果我们在前面允许了匿名访问，到这里就够了。但如果我们禁用了匿名访问，那么接下来我们还要继续配置 settings.xml：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">server</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">nexus-mine</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">username</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">admin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">username</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">password</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">atguigu</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">password</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">server</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要<strong>格外注意</strong>：server 标签内的 id 标签值必须和 mirror 标签中的 id 值一样。</p>
<p>找一个用到框架的 Maven 工程，执行命令：</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mvn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clean</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> compile</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>下载过程日志：</p>
<blockquote>
<p>Downloading from nexus-mine: http://localhost:8081/repository/maven-public/com/jayway/jsonpath/json-path/2.4.0/json-path-2.4.0.pom
Downloaded from nexus-mine: http://localhost:8081/repository/maven-public/com/jayway/jsonpath/json-path/2.4.0/json-path-2.4.0.pom (2.6 kB at 110 kB/s)
Downloading from nexus-mine: http://localhost:8081/repository/maven-public/net/minidev/json-smart/2.3/json-smart-2.3.pom
Downloaded from nexus-mine: http://localhost:8081/repository/maven-public/net/minidev/json-smart/2.3/json-smart-2.3.pom (9.0 kB at 376 kB/s)
Downloading from nexus-mine: http://localhost:8081/repository/maven-public/net/minidev/minidev-parent/2.3/minidev-parent-2.3.pom
Downloaded from nexus-mine: http://localhost:8081/repository/maven-public/net/minidev/minidev-parent/2.3/minidev-parent-2.3.pom (8.5 kB at 404 kB/s)
Downloading from nexus-mine: http://localhost:8081/repository/maven-public/net/minidev/accessors-smart/1.2/accessors-smart-1.2.pom
Downloaded from nexus-mine: http://localhost:8081/repository/maven-public/net/minidev/accessors-smart/1.2/accessors-smart-1.2.pom (12 kB at 463 kB/s)</p>
</blockquote>
<p>下载后，Nexus 服务器上就有了 jar 包：</p>
<p><img src="@source/notes/Other/maven/assets/img014.cc0e87c3.png" alt="images"></p>
<p>若下载速度太慢，可以设置私服中中央仓库的地址为阿里云仓库地址</p>
<p><img src="@source/notes/Other/maven/assets/image-20231031175035345.png" alt="image-20231031175035345"></p>
<p>修改为：http://maven.aliyun.com/nexus/content/groups/public/</p>
<p><img src="@source/notes/Other/maven/assets/image-20231031175134745.png" alt="image-20231031175134745"></p>
<h3 id="_6-将-jar-包部署到-nexus" tabindex="-1"><a class="header-anchor" href="#_6-将-jar-包部署到-nexus"><span>6. 将 jar 包部署到 Nexus</span></a></h3>
<p>maven工程中配置：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">distributionManagement</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">snapshotRepository</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">nexus-mine</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Nexus Snapshot</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">http://localhost:8081/repository/maven-snapshots/</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">snapshotRepository</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">distributionManagement</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：这里 snapshotRepository 的 id 标签必须和 settings.xml 中指定的 mirror 标签的 id 属性一致。</p>
<p>执行部署命令：</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mvn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> deploy</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>Uploading to nexus-mine: http://localhost:8081/repository/maven-snapshots/com/atguigu/demo/demo07-redis-data-provider/1.0-SNAPSHOT/maven-metadata.xml
Uploaded to nexus-mine: http://localhost:8081/repository/maven-snapshots/com/atguigu/demo/demo07-redis-data-provider/1.0-SNAPSHOT/maven-metadata.xml (786 B at 19 kB/s)
Uploading to nexus-mine: http://localhost:8081/repository/maven-snapshots/com/atguigu/demo/demo07-redis-data-provider/maven-metadata.xml
Uploaded to nexus-mine: http://localhost:8081/repository/maven-snapshots/com/atguigu/demo/demo07-redis-data-provider/maven-metadata.xml (300 B at 6.5 kB/s)
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary:
[INFO]
[INFO] demo-imperial-court-ms-show 1.0-SNAPSHOT ........... SUCCESS [ 1.875 s]
[INFO] demo09-base-entity ................................. SUCCESS [ 21.883 s]
[INFO] demo10-base-util ................................... SUCCESS [ 0.324 s]
[INFO] demo08-base-api .................................... SUCCESS [ 1.171 s]
[INFO] demo01-imperial-court-gateway ...................... SUCCESS [ 0.403 s]
[INFO] demo02-user-auth-center ............................ SUCCESS [ 2.932 s]
[INFO] demo03-emp-manager-center .......................... SUCCESS [ 0.312 s]
[INFO] demo04-memorials-manager-center .................... SUCCESS [ 0.362 s]
[INFO] demo05-working-manager-center ...................... SUCCESS [ 0.371 s]
[INFO] demo06-mysql-data-provider ......................... SUCCESS [ 6.779 s]
[INFO] demo07-redis-data-provider 1.0-SNAPSHOT ............ SUCCESS [ 0.273 s]</p>
</blockquote>
<p><img src="@source/notes/Other/maven/assets/img015.b413af9d.png" alt="images"></p>
<h3 id="_7-引用别人部署的-jar-包" tabindex="-1"><a class="header-anchor" href="#_7-引用别人部署的-jar-包"><span>7. 引用别人部署的 jar 包</span></a></h3>
<p>maven工程中配置：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">repositories</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">repository</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">nexus-mine</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">nexus-mine</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">http://localhost:8081/repository/maven-snapshots/</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">snapshots</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">snapshots</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">releases</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">releases</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">repository</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">repositories</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、maven综合案例" tabindex="-1"><a class="header-anchor" href="#九、maven综合案例"><span>九、Maven综合案例</span></a></h2>
<h3 id="_1-项目需求和结构分析" tabindex="-1"><a class="header-anchor" href="#_1-项目需求和结构分析"><span>1. 项目需求和结构分析</span></a></h3>
<p><img src="@source/notes/Other/maven/assets/image123.png" alt="img"></p>
<p>需求案例：搭建一个电商平台项目，该平台包括用户服务、订单服务、通用工具模块等。</p>
<p>项目架构：</p>
<ol>
<li>用户服务：负责处理用户相关的逻辑，例如用户信息的管理、用户注册、登录等。
<ul>
<li>spring-context 6.0.6</li>
<li>spring-core 6.0.6</li>
<li>spring-beans 6.0.6</li>
<li>common-service</li>
</ul>
</li>
<li>订单服务：负责处理订单相关的逻辑，例如订单的创建、订单支付、退货、订单查看等。
<ul>
<li>spring-context 6.0.6</li>
<li>spring-core 6.0.6</li>
<li>spring-beans 6.0.6</li>
<li>spring-security 6.0.6</li>
<li>common-service</li>
</ul>
</li>
<li>通用模块：负责存储其他服务需要通用工具类，其他服务依赖此模块。
<ul>
<li>commons-io 2.11.0</li>
<li>junit 5.9.2</li>
</ul>
</li>
</ol>
<h3 id="_2-项目搭建和统一构建" tabindex="-1"><a class="header-anchor" href="#_2-项目搭建和统一构建"><span>2. 项目搭建和统一构建</span></a></h3>
<h4 id="_1父模块-micro-shop" tabindex="-1"><a class="header-anchor" href="#_1父模块-micro-shop"><span>①父模块 (micro-shop)</span></a></h4>
<p>创建工程：</p>
<p><img src="@source/notes/Other/maven/assets/image-20231023112630117.png" alt="image-20231023112630117"></p>
<p>pom.xml配置：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;?</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">xml</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> version</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> encoding</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">UTF-8</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">?></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> xmlns</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://maven.apache.org/POM/4.0.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">         xmlns</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">xsi</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://www.w3.org/2001/XMLSchema-instance</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">         xsi</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">schemaLocation</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modelVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">4.0.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modelVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.atguigu</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">micro-shop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.0-SNAPSHOT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    &#x3C;!--知识点：父工程的打包方式为pom--></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pom</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">properties</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">spring.version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">6.0.6</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">spring.version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">jackson.version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">2.15.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">jackson.version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">commons.version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">2.11.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">commons.version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">junit.version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">5.9.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">junit.version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.source</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.source</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project.build.sourceEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">UTF-8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project.build.sourceEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">properties</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    &#x3C;!-- 依赖管理 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencyManagement</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">            &#x3C;!-- spring-context会依赖传递core/beans --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-context</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">${spring.version}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">            &#x3C;!-- jackson-databind会依赖传递core/annotations --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.fasterxml.jackson.core</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">jackson-databind</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">${jackson.version}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">            &#x3C;!-- commons-io --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commons-io</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commons-io</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">${commons.version}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">            &#x3C;!-- https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-api --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.junit.jupiter</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">junit-jupiter-api</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">${junit.version}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">scope</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">test</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">scope</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencyManagement</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    &#x3C;!-- 统一更新子工程打包插件--></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        &#x3C;!-- jdk17 和 war包版本插件不匹配 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.apache.maven.plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">maven-war-plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">                &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">3.2.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可选操作：删除src目录</p>
<h4 id="_2通用模块-common-service" tabindex="-1"><a class="header-anchor" href="#_2通用模块-common-service"><span>②通用模块 (common-service)</span></a></h4>
<p>创建工程：</p>
<p><img src="@source/notes/Other/maven/assets/image-20231023114531521.png" alt="image-20231023114531521"></p>
<p><img src="@source/notes/Other/maven/assets/image-20231023114649705.png" alt="image-20231023114649705"></p>
<p>pom.xml配置：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;?</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">xml</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> version</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> encoding</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">UTF-8</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">?></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> xmlns</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://maven.apache.org/POM/4.0.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">         xmlns</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">xsi</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://www.w3.org/2001/XMLSchema-instance</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">         xsi</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">schemaLocation</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">parent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">micro-shop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.atguigu</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.0-SNAPSHOT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">parent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modelVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">4.0.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modelVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">common-service</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    &#x3C;!--知识点：打包方式默认就是jar，因此可以省略--></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">jar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">properties</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.source</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.source</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project.build.sourceEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">UTF-8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project.build.sourceEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">properties</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        &#x3C;!-- 配置spring-context，继承父工程版本，自动传递 core / beans --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.springframework</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">spring-context</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        &#x3C;!-- 配置jackson-databind，继承父工程版本，自动传递 core / annotations --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.fasterxml.jackson.core</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">jackson-databind</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        &#x3C;!-- 配置commons-io，继承父工程版本 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commons-io</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commons-io</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        &#x3C;!-- 配置junit，继承父工程版本 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">org.junit.jupiter</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">junit-jupiter-api</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">scope</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">test</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">scope</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3用户模块-user-service" tabindex="-1"><a class="header-anchor" href="#_3用户模块-user-service"><span>③用户模块 (user-service)</span></a></h4>
<p>创建工程：</p>
<p><img src="@source/notes/Other/maven/assets/image-20231023115404302.png" alt="image-20231023115404302"></p>
<p><img src="@source/notes/Other/maven/assets/image-20231023115707282.png" alt="image-20231023115707282"></p>
<p>pom.xml配置：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;?</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">xml</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> version</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> encoding</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">UTF-8</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">?></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> xmlns</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://maven.apache.org/POM/4.0.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">         xmlns</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">xsi</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://www.w3.org/2001/XMLSchema-instance</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">         xsi</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">schemaLocation</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">parent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">micro-shop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.atguigu</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.0-SNAPSHOT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">parent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modelVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">4.0.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modelVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">user-service</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    &#x3C;!-- web工程打包方式为war --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">war</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">properties</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.source</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.source</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project.build.sourceEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">UTF-8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project.build.sourceEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">properties</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        &#x3C;!-- 配置common-service，所需依赖会传递到当前工程（仅限compile范围） --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.atguigu</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">common-service</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.0-SNAPSHOT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依赖传递结果：</p>
<p><img src="@source/notes/Other/maven/assets/image-20231023120621402.png" alt="image-20231023120621402"></p>
<h4 id="_4订单模块-order-service" tabindex="-1"><a class="header-anchor" href="#_4订单模块-order-service"><span>④订单模块 (order-service)</span></a></h4>
<p>创建工程，并使用插件转为web工程：</p>
<p><img src="@source/notes/Other/maven/assets/image-20231023120733029.png" alt="image-20231023120733029"></p>
<p>pom.xml配置：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;?</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">xml</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> version</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> encoding</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">UTF-8</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">?></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> xmlns</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://maven.apache.org/POM/4.0.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">         xmlns</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">xsi</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://www.w3.org/2001/XMLSchema-instance</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">         xsi</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">schemaLocation</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">parent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">micro-shop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.atguigu</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.0-SNAPSHOT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">parent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modelVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">4.0.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modelVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">order-service</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    &#x3C;!-- web工程打包方式为war --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">war</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">packaging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">properties</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.source</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.source</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">17</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">maven.compiler.target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project.build.sourceEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">UTF-8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project.build.sourceEncoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">properties</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        &#x3C;!-- 配置common-service，所需依赖会传递到当前工程（仅限compile范围） --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.atguigu</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">common-service</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1.0-SNAPSHOT</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependencies</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">project</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，查看父工程的pom.xml，会发现其中已经自动聚合了子工程：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modules</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">common-service</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">user-service</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">order-service</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">modules</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



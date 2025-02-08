<template><div><h2 id="_1-什么是sci" tabindex="-1"><a class="header-anchor" href="#_1-什么是sci"><span>1. 什么是SCI</span></a></h2>
<p>ServletContainerInitializer 是 Jakarta EE (Servlet API) 规范预留的监听入口，当容器启动时会进行SCI的扫描，比监听器、过滤器这些更顶层。</p>
<h2 id="_2-官方" tabindex="-1"><a class="header-anchor" href="#_2-官方"><span>2. 官方</span></a></h2>
<p><a href="https://jakarta.ee/specifications/platform/10/apidocs/jakarta/servlet/servletcontainerinitializer" target="_blank" rel="noopener noreferrer">Jakarta ServletContainerInitializer 官网</a></p>
<figure><img src="@source/article/technology/sci机制/assets/image-20250208140404857.png" alt="image-20250208140404857" tabindex="0" loading="lazy"><figcaption>image-20250208140404857</figcaption></figure>
<figure><img src="@source/article/technology/sci机制/assets/image-20250208140450058.png" alt="image-20250208140450058" tabindex="0" loading="lazy"><figcaption>image-20250208140450058</figcaption></figure>
<h2 id="_3-sci机制" tabindex="-1"><a class="header-anchor" href="#_3-sci机制"><span>3. SCI机制</span></a></h2>
<h3 id="_3-1-servletcontainerinitializer-java" tabindex="-1"><a class="header-anchor" href="#_3-1-servletcontainerinitializer-java"><span>3.1 <em>ServletContainerInitializer.java</em></span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">package</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> jakarta</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">servlet</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> java</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">util</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Set</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ServletContainerInitializer</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	// Servlet 容器 [如:Tomcat] 启动项目时传递 此项目的 ServletContext</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> onStartup</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Set</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Class</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ></span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> classes</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ServletContext</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> servletContext</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">) </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">throws</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ServletException</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ol>
<li>
<p>ServletContainerInitializer 带有特殊引擎机制可被扫描注册和编程式注册</p>
</li>
<li>
<p>扫描注册由 Tomcat 这样的 Servlet 容器内置支持</p>
</li>
<li>
<p>编程式注册 需要 Tomcat 内部API支持、而非 servlet.api</p>
</li>
<li>
<p>未配置 @HandlesTypes 注解时、Set&lt;Class&lt;? &gt; classes 总是为空</p>
</li>
<li>
<p>扫描注册须声明: META-INF/services/jakarta.servlet.ServletContainerInitializer</p>
</li>
</ol>
</blockquote>
<h3 id="_3-2-handlestypes" tabindex="-1"><a class="header-anchor" href="#_3-2-handlestypes"><span>3.2 <em>@HandlesTypes</em></span></a></h3>
</div></template>



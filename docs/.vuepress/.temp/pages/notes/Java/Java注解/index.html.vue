<template><div><h2 id="注解定义" tabindex="-1"><a class="header-anchor" href="#注解定义"><span>注解定义</span></a></h2>
<p>使用<code v-pre>@interface</code>语法来定义注解（<code v-pre>Annotation</code>），格式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">public</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">interface</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> Report</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    String </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">level</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">info</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    String </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> ""</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注解的参数类似无参数方法，可以用<code v-pre>default</code>设定一个默认值（强烈推荐）。最常用的参数应当命名为<code v-pre>value</code>。</p>
<h2 id="元注解" tabindex="-1"><a class="header-anchor" href="#元注解"><span>元注解</span></a></h2>
<p>有一些注解可以修饰其他注解，这些注解就称为元注解（meta annotation）。Java标准库已经定义了一些元注解，我们只需要使用元注解，通常不需要自己去编写元注解。</p>
<h4 id="target" tabindex="-1"><a class="header-anchor" href="#target"><span>@Target</span></a></h4>
<p>最常用的元注解是<code v-pre>@Target</code>。使用<code v-pre>@Target</code>可以定义<code v-pre>Annotation</code>能够被应用于源码的哪些位置：</p>
<ul>
<li>类或接口：<code v-pre>ElementType.TYPE</code>；</li>
<li>字段：<code v-pre>ElementType.FIELD</code>；</li>
<li>方法：<code v-pre>ElementType.METHOD</code>；</li>
<li>构造方法：<code v-pre>ElementType.CONSTRUCTOR</code>；</li>
<li>方法参数：<code v-pre>ElementType.PARAMETER</code>。</li>
</ul>
<p>例如，定义注解<code v-pre>@Report</code>可用在方法上，我们必须添加一个<code v-pre>@Target(ElementType.METHOD)</code>：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ElementType</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">METHOD</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">public</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">interface</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> Report</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    String </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">level</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">info</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    String </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> ""</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="retention" tabindex="-1"><a class="header-anchor" href="#retention"><span>@Retention</span></a></h4>
<p>另一个重要的元注解<code v-pre>@Retention</code>定义了<code v-pre>Annotation</code>的生命周期：</p>
<ul>
<li>仅编译期：<code v-pre>RetentionPolicy.SOURCE</code>；</li>
<li>仅class文件：<code v-pre>RetentionPolicy.CLASS</code>；</li>
<li>运行期：<code v-pre>RetentionPolicy.RUNTIME</code>。</li>
</ul>
<p>如果<code v-pre>@Retention</code>不存在，则该<code v-pre>Annotation</code>默认为<code v-pre>CLASS</code>。因为通常我们自定义的<code v-pre>Annotation</code>都是<code v-pre>RUNTIME</code>，所以，务必要加上<code v-pre>@Retention(RetentionPolicy.RUNTIME)</code>这个元注解：</p>
<h4 id="repeatable" tabindex="-1"><a class="header-anchor" href="#repeatable"><span>@Repeatable</span></a></h4>
<p>使用<code v-pre>@Repeatable</code>这个元注解可以定义<code v-pre>Annotation</code>是否可重复。</p>
<h4 id="inherited" tabindex="-1"><a class="header-anchor" href="#inherited"><span>@Inherited</span></a></h4>
<p>使用<code v-pre>@Inherited</code>定义子类是否可继承父类定义的<code v-pre>Annotation</code>。<code v-pre>@Inherited</code>仅针对<code v-pre>@Target(ElementType.TYPE)</code>类型的<code v-pre>annotation</code>有效，并且仅针对<code v-pre>class</code>的继承，对<code v-pre>interface</code>的继承无效：</p>
</div></template>



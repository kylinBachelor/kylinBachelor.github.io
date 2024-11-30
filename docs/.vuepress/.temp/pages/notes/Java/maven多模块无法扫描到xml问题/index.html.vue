<template><div><p>一个SpringBoot项目，有多个模块，每个模块都有自己的pom.xml，但是maven无法扫描其它模块的xml文件。</p>
<p>查询解决办法：application.yml中配置spring.config.location，用的是<code v-pre>classpath: /mapper/**/*mapper.xml</code>,只会扫描当前module的配置需要在classpath:后面添加<code v-pre>*</code></p>
<div class="language-yml line-numbers-mode" data-ext="yml" data-title="yml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">mybatis-plus</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  mapper-locations</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> classpath*:mapper/**/*.xml</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



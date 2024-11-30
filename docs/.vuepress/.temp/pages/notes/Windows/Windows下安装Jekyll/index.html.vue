<template><div><h1 id="网站托管" tabindex="-1"><a class="header-anchor" href="#网站托管"><span>网站托管</span></a></h1>
<p>在这里就不进行赘述</p>
<h1 id="安装jekyll" tabindex="-1"><a class="header-anchor" href="#安装jekyll"><span>安装Jekyll</span></a></h1>
<p>jekyll相当于一个编译工具，安装后可以通过jekyll创建一个网站模板，可以实时修改内容，并可以实时通过本地url预览修改
后的效果。然后推送到Github,访问自己的博客。</p>
<ol>
<li>安装<a href="https://rubyinstaller.org/" target="_blank" rel="noopener noreferrer">Ruby</a></li>
<li>下载<a href="https://rubygems.org/pages/download" target="_blank" rel="noopener noreferrer">RubyGems</a>下载完成后解压到你想安装的位置，然后打开命令行进入Ruby根目录，分为两步执行以下命令</li>
</ol>
<div class="language-bat line-numbers-mode" data-ext="bat" data-title="bat"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    ruby setup.rb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    gem install jekyll</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果出现以下错误则执行命令
<img src="@source/notes/Windows/Windows下安装Jekyll/assets/gem_install_jekyll_error.png" alt="gem install jekyll 安装时出现的错误"></p>
<div class="language-bat line-numbers-mode" data-ext="bat" data-title="bat"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    输入ridk install，安装MSYS2 and MINGW development toolchain</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>
<p>完成安装后，使用jekyll创建一个博客模板，打开命令行执行</p>
<div class="language-bat line-numbers-mode" data-ext="bat" data-title="bat"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    jekyll new BlogTemplate</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">     cd</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> BlogTemplate</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">     jekyll server</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果出现以下错误则在模板中执行命令
<img src="@source/notes/Windows/Windows下安装Jekyll/assets/gem_install_jekyll_error.png" alt="jekyll server 运行jekyll时出现的错误"></p>
<div class="language-bat line-numbers-mode" data-ext="bat" data-title="bat"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    bundle add webrick</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为：从 Ruby 3.0 开始 webrick 已经不在绑定到 Ruby 中了,Ruby 3.0.0 Released 中的说明,webrick 需要手动进行添加。</p>
</li>
<li>
<p>打开 http://127.0.0.1:4000/ 即可浏览刚刚创建的模板</p>
</li>
</ol>
</div></template>



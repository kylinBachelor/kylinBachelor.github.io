import{_ as i,c as e,a,o as t}from"./app-C0ayDqmc.js";const n={};function l(h,s){return t(),e("div",null,s[0]||(s[0]=[a(`<p>各平台安装hugo的方法可以参考官方教程<a href="https://gohugo.io/getting-started/installing/" target="_blank" rel="noopener noreferrer">hugo安装教程</a></p><h2 id="使用安卓-choco-包管理器安装hugo" tabindex="-1"><a class="header-anchor" href="#使用安卓-choco-包管理器安装hugo"><span>使用安卓 choco 包管理器安装hugo</span></a></h2><h3 id="使用管理员权限打开powershell并运行" tabindex="-1"><a class="header-anchor" href="#使用管理员权限打开powershell并运行"><span>使用管理员权限打开powershell并运行</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Set-ExecutionPolicy</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Bypass</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -Scope</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Process</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -Force</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">System.Net.ServicePointManager</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:SecurityProtocol</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [System.Net.ServicePointManager]::SecurityProtocol -bor 3072</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> iex</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ((New-Object </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">System.Net.WebClient</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">).DownloadString(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&#39;https://community.chocolatey.org/install.ps1&#39;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="使用choco安装hugo" tabindex="-1"><a class="header-anchor" href="#使用choco安装hugo"><span>使用choco安装hugo</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">choco</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> hugo</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --confirm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="新建博客" tabindex="-1"><a class="header-anchor" href="#新建博客"><span>新建博客</span></a></h1><h2 id="新建博客站点" tabindex="-1"><a class="header-anchor" href="#新建博客站点"><span>新建博客站点</span></a></h2><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">hugo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> new</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> site</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> blogName</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用git管理博客系统，将新建的博客站点上传至github</p><h2 id="安装hugo主题meme" tabindex="-1"><a class="header-anchor" href="#安装hugo主题meme"><span>安装hugo主题meme</span></a></h2><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> submodule</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --depth</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://github.com/reuixiy/hugo-theme-meme.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> themes/meme</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="测试博客" tabindex="-1"><a class="header-anchor" href="#测试博客"><span>测试博客</span></a></h2><p>将 <em>themes/meme/config-examples/en</em> 复制替换到博客根目录下</p><h3 id="创建页面" tabindex="-1"><a class="header-anchor" href="#创建页面"><span>创建页面</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">~</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/blog $ hugo new </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">posts/hello-world.md</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">~</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/blog $ hugo new </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">about/_index.md</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行" tabindex="-1"><a class="header-anchor" href="#运行"><span>运行</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">~</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/blog $ hugo server -D    // 草稿博客也会显示</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">~</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/blog $ hugo server    // 草稿博客不显示</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果提示某个错误（这个错误忘记截图了），根据官方文档安装hugo-extended</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">choco</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> hugo-extended</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -confirm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>再次运行，根据提示的URL地址可查看此博客界面</p><h3 id="github上配置flowwork" tabindex="-1"><a class="header-anchor" href="#github上配置flowwork"><span>GitHub上配置flowWork</span></a></h3><p>打开GitHub上托管的博客目录，点击setting，左边找到Pages,右边会有Build and deployment,Source选择GitHub Actions,然后再选择你使用的模板，比如Hugo,配置不用改直接保存就行了， 之后本地写完博客后直接push就可以了，GitHub会帮你自动编译了，不需要你运行Hugo命令去编译博客后再push了</p><h4 id="最后贴上hugo官方中文网站" tabindex="-1"><a class="header-anchor" href="#最后贴上hugo官方中文网站"><span>最后贴上Hugo官方中文网站</span></a></h4><p>https://hugo.aiaide.com/post/</p>`,25)]))}const o=i(n,[["render",l],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/notes/Windows/Windows%E4%B8%8B%E5%AE%89%E8%A3%85Hugo/","title":"Windows下安装Hugo","lang":"zh-CN","frontmatter":{"title":"Windows下安装Hugo","aliases":null,"tags":["Windows","博客"],"description":"Windows下安装Hugo","createTime":"2024/11/30 14:15:41","draft":false,"head":[["meta",{"property":"og:url","content":"https://kylinBachelor.github.io/notes/Windows/Windows%E4%B8%8B%E5%AE%89%E8%A3%85Hugo/"}],["meta",{"property":"og:site_name","content":"kylinBachelor"}],["meta",{"property":"og:title","content":"Windows下安装Hugo"}],["meta",{"property":"og:description","content":"Windows下安装Hugo"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-30T10:36:56.000Z"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:tag","content":"博客"}],["meta",{"property":"article:modified_time","content":"2024-11-30T10:36:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows下安装Hugo\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-30T10:36:56.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.31,"words":393},"git":{"updatedTime":1732963016000},"filePathRelative":"notes/Windows/Windows下安装Hugo/index.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"fac604","sort":10035,"name":"Windows"},{"id":"e2ffff","sort":10040,"name":"Windows下安装Hugo"}],"bulletin":false}');export{o as comp,r as data};
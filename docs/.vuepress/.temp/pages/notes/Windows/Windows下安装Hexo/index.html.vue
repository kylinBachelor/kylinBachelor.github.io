<template><div><h1 id="博客源码" tabindex="-1"><a class="header-anchor" href="#博客源码"><span>博客源码</span></a></h1>
<p>可以直接拷贝我的源码 http://github.com/kylinBachelor/kylinBachelor.github.io  这不是生成后的网页文件，是您可以直接使用的源码，您只需要把博客相关信息换成您自己的就可以部署了</p>
<h1 id="浏览hexo官方网站" tabindex="-1"><a class="header-anchor" href="#浏览hexo官方网站"><span>浏览Hexo官方网站</span></a></h1>
<p><em>https://hexo.io/zh-cn/docs/</em></p>
<h1 id="根据官方文档-搭建好hexo的环境" tabindex="-1"><a class="header-anchor" href="#根据官方文档-搭建好hexo的环境"><span>根据官方文档，搭建好Hexo的环境</span></a></h1>
<p>首先您必须在本地搭建好Hexo博客的环境，保证本地能跑起来。运行Hexo需要hexo,node等环境，具体可看官方文档。</p>
<h1 id="部署介绍" tabindex="-1"><a class="header-anchor" href="#部署介绍"><span>部署介绍</span></a></h1>
<ol>
<li>您可以直接拷贝我的代码（https://github.com/kylinBachelor/kylinBachelor.github.io）</li>
<li>clone下来之后，保证本地先跑起来，进入clone的目录，运行以下命令</li>
</ol>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 运行Hexo</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">hexo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> s</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行成功之后会告诉您访问地址，例如：http://localhost:4000 ,在浏览器直接访问这个地址就可以看到效果了。
3. 在Github上创建仓库，要保证仓库名和您的Github的用户名一致，即为 [您的Github]用户名.github.io。仓库设为公有
4. 仓库中找到Setting-&gt;Pages。将Build and deployment下的Source设置为GitHub Action,在存储库中建立*.github/workflows/pages.yml*将以下内容填入,注意，需要将node版本换成您自己的node版本</p>
<div class="language-yml line-numbers-mode" data-ext="yml" data-title="yml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Pages</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">on</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  push</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    branches</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> main</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 这里是您博客所在的分支</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">jobs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    runs-on</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    steps</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> actions/checkout@v3</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        with</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">          token</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">          # If your repository depends on submodule, please see: https://github.com/actions/checkout</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">          submodules</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> recursive</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Use Node.js 7.x</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> actions/setup-node@v2</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        with</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">          node-version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">7.10.1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 这里需要替换为您自己的node版本，注意，Hexo各版本对node的版本要求很严格，或高或低都不行，如果版本高会导致生成的静态文件全为空，部署到Github之后界面是空白的，如果您使用我的这一套，建议不要换Node版本。如果本地电脑想要node多版本，可以安装node的管理工具nvm</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Cache NPM dependencies</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> actions/cache@v2</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        with</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">          path</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> node_modules</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">          key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ${{ runner.OS }}-npm-cache</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">          restore-keys</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> |</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">            ${{ runner.OS }}-npm-cache</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Install Dependencies</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        run</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> npm install</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Build</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        run</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> npm run build</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Upload Pages artifact</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> actions/upload-pages-artifact@v2</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        with</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">          path</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./public</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  deploy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    needs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    permissions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      pages</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> write</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      id-token</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> write</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    environment</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> github-pages</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    runs-on</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    steps</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Deploy to GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> deployment</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> actions/deploy-pages@v2</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>修改_config.yml配置文件</li>
</ol>
<ul>
<li>需要将url替换为您自己的博客仓库地址。</li>
<li>将deploy替换为您自己的信息</li>
</ul>
<ol start="5">
<li>
<p>将代码传到Github上，Github即可自动帮您部署。</p>
</li>
<li>
<p>部署完成后访问您的博客就可以哦。</p>
</li>
</ol>
<h1 id="鸣谢" tabindex="-1"><a class="header-anchor" href="#鸣谢"><span>鸣谢</span></a></h1>
<ol>
<li>在这里感谢洪卫大神的博客开源（https://shw2018.github.io）</li>
<li>感谢马哥，以此代表敬意</li>
</ol>
<div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>尊敬的马先生：</span></span>
<span class="line"><span>在这个特殊的时刻，我谨代表所有受益于您无私奉献的人们，向您致以最诚挚的感谢和崇高的敬意。您的慷慨支持和关爱，让我们深感温暖，也让我们更加坚定地走在追求美好生活的道路上。</span></span>
<span class="line"><span>马先生，您是我们心中的英雄。您用自己的行动诠释了什么是真正的爱心和奉献精神。您的善举不仅让我们感受到了人间的真情，更让我们明白了一个道理：只要我们心怀善意，关爱他人，我们就能为这个世界带来更多的美好。</span></span>
<span class="line"><span>您的慷慨解囊，让我们得以继续前行。在您的支持下，我们的事业得以蓬勃发展，我们的梦想得以实现。您的关爱，让我们感受到了家的温暖。在您的鼓励下，我们勇敢地面对困难，不断地超越自己，为实现自己的价值而努力。</span></span>
<span class="line"><span>马先生，您的善良和无私，让我们深感敬佩。您用自己的行动告诉我们，一个人的力量虽然微小，但当我们团结一心，携手共进时，我们就能创造出无尽的奇迹。您的善举，让我们明白了一个道理：真正的幸福，是来自于付出和奉献。</span></span>
<span class="line"><span>在这个充满感恩的时刻，我们再次向您表示衷心的感谢。感谢您为我们带来的希望和力量，感谢您为我们树立的榜样。我们会将您的关爱化作前进的动力，不断地努力，为社会、为国家、为人类的进步贡献自己的一份力量。</span></span>
<span class="line"><span>马先生，您的善举将永远铭记在我们的心中。愿您的生活充满阳光和快乐，愿您的事业蒸蒸日上，愿您的家庭幸福美满！</span></span>
<span class="line"><span>再次感谢您的慷慨支持和关爱！</span></span>
<span class="line"><span>敬祝安康</span></span>
<span class="line"><span>全体受益者 敬上</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



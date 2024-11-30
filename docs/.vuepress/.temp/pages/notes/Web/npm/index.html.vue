<template><div><h1 id="npm操作记录" tabindex="-1"><a class="header-anchor" href="#npm操作记录"><span>Npm操作记录</span></a></h1>
<h2 id="_1-npm-update-命令" tabindex="-1"><a class="header-anchor" href="#_1-npm-update-命令"><span>1. <code v-pre>npm update</code> 命令</span></a></h2>
<p><code v-pre>npm update</code> 命令用于更新项目中已安装的包到最新版本。</p>
<ol>
<li>
<p>基本用法</p>
<p>执行<code v-pre>npm update</code>命令后，npm会检查<code v-pre>node_modules</code>目录下所有包的版本，并尝试更新到符合<code v-pre>package.json</code>中指定的版本范围的最新版本。‌</p>
</li>
<li>
<p>特定包更新</p>
<p>如果你想更新一个或几个特定的包，可以使用以下命令：<code v-pre>npm update package1 package2...</code>。这将只更新在命令行中指定的包。</p>
</li>
<li>
<p>全局更新</p>
<p>如果你想要更新全局安装的npm包，可以使用<code v-pre>-g</code>标志：<code v-pre>npm update -g</code>。</p>
</li>
<li>
<p>锁定版本</p>
<p>在执行<code v-pre>npm update</code>时，<code v-pre>package-lock.json</code>文件会被更新，以反映更新后的依赖版本。这个文件确保了在不同环境中安装相同版本的依赖，提高了项目的可重复性。</p>
</li>
<li>
<p>忽略脚本</p>
<p>在更新过程中，可以使用<code v-pre>--ignore-scripts</code>标志来防止执行<code v-pre>package.json</code>中的<code v-pre>preinstall</code>、<code v-pre>install</code>、<code v-pre>postinstall</code>、<code v-pre>prepublish</code>和<code v-pre>prepare</code>脚本。</p>
</li>
</ol>
</div></template>



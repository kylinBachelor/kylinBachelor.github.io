import{_ as i,c as e,a,o as n}from"./app-C0ayDqmc.js";const l={};function t(d,s){return n(),e("div",null,s[0]||(s[0]=[a(`<h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本"><span>版本</span></a></h2><p>mysql.5.7</p><h2 id="安装过程" tabindex="-1"><a class="header-anchor" href="#安装过程"><span>安装过程</span></a></h2><ol><li>解压mysql绿色版文件夹，放置于你想要安装的位置。</li><li>进入解压的mysql文件夹，创建data文件夹和my.ini文件</li><li>打开my.ini文件写入一下内容</li></ol><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>    [mysqld]</span></span>
<span class="line"><span>    bind-address = 0.0.0.0</span></span>
<span class="line"><span>    #mysql端口号设置</span></span>
<span class="line"><span>    port = 3307</span></span>
<span class="line"><span>    #basedir（刚创建的data文件夹目录） 和 datadir视自己情况而定</span></span>
<span class="line"><span>    basedir=D:\\Program Files\\mysqls\\mysql-5.7.21-winx64</span></span>
<span class="line"><span>    datadir=D:\\Program Files\\mysqls\\mysql-5.7.21-winx64\\data\\</span></span>
<span class="line"><span>    max_connections=1000</span></span>
<span class="line"><span>    character_set_server = utf8</span></span>
<span class="line"><span>    #mysql7</span></span>
<span class="line"><span>    sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER</span></span>
<span class="line"><span>    #mysql8</span></span>
<span class="line"><span>    #sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</span></span>
<span class="line"><span>    [client]</span></span>
<span class="line"><span>    default-character-set=utf8</span></span>
<span class="line"><span>    [mysql]</span></span>
<span class="line"><span>    default-character-set=utf8</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>将bin目录加入到环境变量之中。</li><li>以管理员权限进入bin目录。</li><li>执行以下命令</li></ol><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    mysqld</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    mysqld</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --initialize</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --console</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>执行完毕后，会在 <em>root@localhost:</em> 后生成一个随机的mysql密码， 一定要将记住它。</li><li>启动mysql服务</li></ol><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    net</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="9"><li>命令行中登录mysql</li></ol><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    mysql</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -u</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> root</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    回车（Enter）后让你输入密码，该密码就是步骤7的密码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li>进入Mysql后修改密码</li></ol><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    SET</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> PASSWORD</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> =</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> PASSWORD</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&#39;此处是你需要设置的密码&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,13)]))}const r=i(l,[["render",t],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/notes/%E6%95%B0%E6%8D%AE%E5%BA%93/Windows%E4%B8%8B%E5%AE%89%E8%A3%85MySQL/","title":"Windows下安装MySQL","lang":"zh-CN","frontmatter":{"title":"Windows下安装MySQL","aliases":null,"tags":["MySQL","Windows"],"description":"Windows下安装MySQL","createTime":"2024/11/30 14:15:41","draft":false,"head":[["meta",{"property":"og:url","content":"https://kylinBachelor.github.io/notes/%E6%95%B0%E6%8D%AE%E5%BA%93/Windows%E4%B8%8B%E5%AE%89%E8%A3%85MySQL/"}],["meta",{"property":"og:site_name","content":"kylinBachelor"}],["meta",{"property":"og:title","content":"Windows下安装MySQL"}],["meta",{"property":"og:description","content":"Windows下安装MySQL"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-30T10:36:56.000Z"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:modified_time","content":"2024-11-30T10:36:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows下安装MySQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-30T10:36:56.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1,"words":301},"git":{"updatedTime":1732963016000},"filePathRelative":"notes/数据库/Windows下安装MySQL/index.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"324a5c","sort":10016,"name":"数据库"},{"id":"9bc1dc","sort":10026,"name":"Windows下安装MySQL"}],"bulletin":false}');export{r as comp,c as data};
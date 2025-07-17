import{_ as n,c as a,a as e,o as i}from"./app-CpFzMANX.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="前期工作" tabindex="-1"><a class="header-anchor" href="#前期工作"><span>前期工作</span></a></h1><p>需要为Windows创建定时任务，按时执行bat文件</p><h2 id="以天为单位备份-autobackupmysqldbbyday-bat" tabindex="-1"><a class="header-anchor" href="#以天为单位备份-autobackupmysqldbbyday-bat"><span>以天为单位备份（ AutoBackUpMysqlDbByDay.bat）</span></a></h2><div class="language-bat line-numbers-mode" data-ext="bat" data-title="bat"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>    @echo off</span></span>
<span class="line"><span>    rem 备份文件存放路径</span></span>
<span class="line"><span>    set SrcDir=C:\\mysql_bak</span></span>
<span class="line"><span>    set TwoDir=E:\\mysql_bak_copy</span></span>
<span class="line"><span>    rem 当前日期作为文件名一部分</span></span>
<span class="line"><span>    ::时间不是两位补0</span></span>
<span class="line"><span>    if &quot;%date:~5,2%&quot; lss &quot;10&quot; (set mm=0%date:~6,1%) else (set mm=%date:~5,2%)</span></span>
<span class="line"><span>    if &quot;%date:~8,2%&quot; lss &quot;10&quot; (set dd=0%date:~9,1%) else (set dd=%date:~8,2%)</span></span>
<span class="line"><span>    if &quot;%time:~0,2%&quot; lss &quot;10&quot; (set hh=0%time:~1,1%) else (set hh=%time:~0,2%)</span></span>
<span class="line"><span>    if &quot;%time:~3,2%&quot; lss &quot;10&quot; (set nn=0%time:~4,1%) else (set nn=%time:~3,2%)</span></span>
<span class="line"><span>    :: 年月日_时分秒</span></span>
<span class="line"><span>    set  timer=%date:~0,4%%mm%%dd%_%hh%%nn%</span></span>
<span class="line"><span>    rem 指定天数</span></span>
<span class="line"><span>    set DaysAgo=15</span></span>
<span class="line"><span>    &quot;C:\\Program Files\\mysql-5.7.10-winx64\\bin\\mysqldump.exe&quot; --opt -u 用户名 --password=密码 数据库名 &gt; %SrcDir%\\contract_db_%timer%.sql</span></span>
<span class="line"><span>    @echo on</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @echo off</span></span>
<span class="line"><span>    ::演示：删除指定路径下指定天数之前（以文件的最后修改日期为准）的文件。</span></span>
<span class="line"><span>    ::如果演示结果无误，把del前面的echo去掉，即可实现真正删除。</span></span>
<span class="line"><span>    ::forfiles /p %SrcDir% /s /m *.* /d -%DaysAgo% /c &quot;cmd /c echo del /f /q /a @path&quot;</span></span>
<span class="line"><span>    ::本例需要Win2003/Vista/Win7系统自带的forfiles命令的支持</span></span>
<span class="line"><span>    rem 删除过期文件</span></span>
<span class="line"><span>    forfiles /p %SrcDir% /s /m *.* /d -%DaysAgo% /c &quot;cmd /c   del /f /q /a @path&quot;</span></span>
<span class="line"><span>    rem  异盘拷贝</span></span>
<span class="line"><span>    copy  %SrcDir%\\xx_db_%timer%.sql %TwoDir%\\</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="以周为单位备份-autobackupmysqldbbyweekl-bat" tabindex="-1"><a class="header-anchor" href="#以周为单位备份-autobackupmysqldbbyweekl-bat"><span>以周为单位备份（AutoBackUpMysqlDbByWeekl.bat）</span></a></h1><div class="language-bat line-numbers-mode" data-ext="bat" data-title="bat"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>    @echo off</span></span>
<span class="line"><span>    rem 备份文件存放路径</span></span>
<span class="line"><span>    rem 备份文件存放路径</span></span>
<span class="line"><span>    set SrcDir=D:\\htgl\\autobak\\weekbak</span></span>
<span class="line"><span>    set TwoDir=C:\\htgl\\autobak\\weekbak</span></span>
<span class="line"><span>    rem 当前日期作为文件名一部分</span></span>
<span class="line"><span>    set &quot;Ymd=%date:~,4%%date:~5,2%%date:~8,2%&quot;</span></span>
<span class="line"><span>    rem 指定天数</span></span>
<span class="line"><span>    set DaysAgo=60</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;C:\\Program Files\\MySQL\\MySQL Server 5.7\\bin\\mysqldump.exe&quot; --opt -u 用户名 --password=密码 数据库名 &gt; %SrcDir%\\htgl_db_%Ymd%.sql</span></span>
<span class="line"><span>    @echo on</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @echo off</span></span>
<span class="line"><span>    ::演示：删除指定路径下指定天数之前（以文件的最后修改日期为准）的文件。</span></span>
<span class="line"><span>    ::如果演示结果无误，把del前面的echo去掉，即可实现真正删除。</span></span>
<span class="line"><span>    ::forfiles /p %SrcDir% /s /m *.* /d -%DaysAgo% /c &quot;cmd /c echo del /f /q /a @path&quot;</span></span>
<span class="line"><span>    ::本例需要Win2003/Vista/Win7系统自带的forfiles命令的支持</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    rem 删除过期文件</span></span>
<span class="line"><span>    forfiles /p %SrcDir% /s /m *.* /d -%DaysAgo% /c &quot;cmd /c   del /f /q /a @path&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    rem  异盘拷贝</span></span>
<span class="line"><span>    copy  %SrcDir%\\xx_db_%Ymd%.sql %TwoDir%\\</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const c=n(l,[["render",p],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/notes/%E6%95%B0%E6%8D%AE%E5%BA%93/Windows%E4%B8%8BMySQL%E5%A4%87%E4%BB%BD/","title":"Windows下MySQL备份","lang":"zh-CN","frontmatter":{"title":"Windows下MySQL备份","aliases":null,"tags":["MySQL","Windows"],"description":"Windows下MySQL备份","createTime":"2024/11/30 14:15:41","draft":false,"head":[["meta",{"property":"og:url","content":"https://kylinBachelor.github.io/notes/%E6%95%B0%E6%8D%AE%E5%BA%93/Windows%E4%B8%8BMySQL%E5%A4%87%E4%BB%BD/"}],["meta",{"property":"og:site_name","content":"攻城狮"}],["meta",{"property":"og:title","content":"Windows下MySQL备份"}],["meta",{"property":"og:description","content":"Windows下MySQL备份"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-30T10:36:56.000Z"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:modified_time","content":"2024-11-30T10:36:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows下MySQL备份\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-30T10:36:56.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.87,"words":561},"git":{"updatedTime":1732963016000},"filePathRelative":"notes/数据库/Windows下MySQL备份/index.md","categoryList":[{"id":"4358b5","sort":10025,"name":"notes"},{"id":"324a5c","sort":10028,"name":"数据库"},{"id":"6afe7a","sort":10126,"name":"Windows下MySQL备份"}],"bulletin":false}');export{c as comp,r as data};

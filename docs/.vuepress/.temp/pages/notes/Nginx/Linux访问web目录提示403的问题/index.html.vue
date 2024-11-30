<template><div><p>在Linux下http服务Nginx时，访问Web目录提示403Foridden，403表示你在请求一个资源文件但是Nginx不允许你查看。</p>
<h6 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法"><span>解决办法</span></a></h6>
<p>找到nginx配置文件nginx.conf,修改如下：</p>
<ol>
<li>将 user nobody 改为 user root;</li>
<li>将autoindex off 更改为 on,(Nginx默认是不支持浏览目录的)</li>
</ol>
<p>更改完成重启Nginx</p>
</div></template>



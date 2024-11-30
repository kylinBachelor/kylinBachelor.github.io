<template><div><h4 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h4>
<div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">user                            root;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">worker_processes                1;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">events {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  worker_connections            10240;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  log_format                    '$remote_addr - $remote_user [$time_local] ' '"$request" $status $body_bytes_sent ' '"$http_referer" "$http_user_agent"';</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  include                       mime.types;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  default_type                  application/octet-stream;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  sendfile                      on;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  #autoindex                    on;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  #autoindex_exact_size         off;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  autoindex_localtime           on;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  keepalive_timeout             65;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  gzip                          on;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  gzip_disable                  "msie6";</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  gzip_min_length               100;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  gzip_buffers                  4 16k;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  gzip_comp_level               1;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  gzip_types                  text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  gzip_types                    "*";</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  gzip_vary                     off;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server_tokens                 off;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  client_max_body_size          200m;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    listen                      80 default_server;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    server_name                 _;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    return                      403 /www/403/index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  include                       ../serve/*.conf;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="隐藏nginx版本信息" tabindex="-1"><a class="header-anchor" href="#隐藏nginx版本信息"><span>隐藏Nginx版本信息</span></a></h4>
<div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server_tokens         off;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="禁止ip直接访问80端口" tabindex="-1"><a class="header-anchor" href="#禁止ip直接访问80端口"><span>禁止IP直接访问80端口</span></a></h4>
<div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  listen                80 default;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server_name           _;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  return                500;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动web服务-vue项目为例" tabindex="-1"><a class="header-anchor" href="#启动web服务-vue项目为例"><span>启动Web服务（Vue项目为例）</span></a></h4>
<div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">server {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 项目启动端口</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  listen            80;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 域名（localhost）</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server_name       _;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 禁止 iframe 嵌套</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  add_header        X-Frame-Options SAMEORIGIN;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 访问地址 根路径配置</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location / {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    # 项目目录</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    root 	    html;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    # 默认读取文件</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    index           index.html;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    # 配置 history 模式的刷新空白</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    try_files       $uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 后缀匹配，解决静态资源找不到问题</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location ~* \.(gif|jpg|jpeg|png|css|js|ico)$ {</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    root           html/static/;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 图片防盗链</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location ~/static/.*\.(jpg|jpeg|png|gif|webp)$ {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    root              html;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    valid_referers    *.deeruby.com;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    if ($invalid_referer) {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">      return          403;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 访问限制</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location /static {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    root               html;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    # allow 允许</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    allow              39.xxx.xxx.xxx;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    # deny  拒绝</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    deny               all;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pc端和移动端使用不同的项目文件映射" tabindex="-1"><a class="header-anchor" href="#pc端和移动端使用不同的项目文件映射"><span>PC端和移动端使用不同的项目文件映射</span></a></h4>
<div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">server {</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">  ......</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location / {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    root /home/static/pc;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    if ($http_user_agent ~* '(mobile|android|iphone|ipad|phone)') {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">      root /home/static/mobile;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    }</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    index index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一个web服务-配置多个项目-location-匹配路由区别" tabindex="-1"><a class="header-anchor" href="#一个web服务-配置多个项目-location-匹配路由区别"><span>一个web服务，配置多个项目 (location 匹配路由区别)</span></a></h4>
<div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  listen                80;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server_name           _;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 主应用</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location / {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    root          html/main;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    index               index.html;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    try_files           $uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 子应用一</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location ^~ /store/ {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_pass          http://localhost:8001;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_redirect      off;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_set_header    Host $host;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_set_header    X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_set_header    X-Forwarded-For</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 子应用二</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location ^~ /school/ {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_pass          http://localhost:8002;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_redirect      off;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_set_header    Host $host;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_set_header    X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 静态资源读取不到问题处理</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  rewrite ^/api/profile/(.*)$ /(替换成正确路径的文件的上一层目录)/$1 last;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 子应用一服务</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  listen                8001;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server_name           _;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location / {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    root          html/store;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    index               index.html;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    try_files           $uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location ^~ /store/ {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    alias               html/store/;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    index               index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    try_files           $uri /store/index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 接口代理</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location  /api {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_pass          http://localhost:8089;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 子应用二服务</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  listen                8002;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server_name           _;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location / {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    root          html/school;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    index               index.html;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    try_files           $uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location ^~ /school/ {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    alias               html/school/;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    index               index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    try_files           $uri /school/index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 接口代理</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location  /api {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_pass          http://localhost:10010;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置负载均衡" tabindex="-1"><a class="header-anchor" href="#配置负载均衡"><span>配置负载均衡</span></a></h4>
<div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">upstream my_upstream {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server                http://localhost:9001;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server                http://localhost:9002;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server                http://localhost:9003;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  listen                9000;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server_name           test.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location / {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_pass          my_upstream;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_set_header    Host $proxy_host;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_set_header    X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ssl-配置-https" tabindex="-1"><a class="header-anchor" href="#ssl-配置-https"><span>SSL 配置 HTTPS</span></a></h4>
<div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  listen                      80;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server_name                 www.xxx.com;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 将 http 重定向转移到 https</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  return 301 https://$server_name$request_uri;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  listen                      443 ssl;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  server_name                 www.xxx.com;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  ssl_certificate             /etc/nginx/ssl/www.xxx.com.pem;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  ssl_certificate_key         /etc/nginx/ssl/www.xxx.com.key;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  ssl_session_timeout         10m;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  ssl_ciphers                 ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  ssl_protocols               TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  ssl_prefer_server_ciphers   on;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  location / {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    root                    /project/xxx;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    index                   index.html index.htm index.md;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    try_files               $uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



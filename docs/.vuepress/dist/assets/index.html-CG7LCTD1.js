import{_ as i,c as n,a,o as l}from"./app-gNybPUzB.js";const e={};function p(t,s){return l(),n("div",null,s[0]||(s[0]=[a(`<h4 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">user                            root;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">worker_processes                1;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">events {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  worker_connections            10240;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  log_format                    &#39;$remote_addr - $remote_user [$time_local] &#39; &#39;&quot;$request&quot; $status $body_bytes_sent &#39; &#39;&quot;$http_referer&quot; &quot;$http_user_agent&quot;&#39;;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  include                       mime.types;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  default_type                  application/octet-stream;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  sendfile                      on;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #autoindex                    on;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #autoindex_exact_size         off;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  autoindex_localtime           on;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  keepalive_timeout             65;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  gzip                          on;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  gzip_disable                  &quot;msie6&quot;;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  gzip_min_length               100;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  gzip_buffers                  4 16k;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  gzip_comp_level               1;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  gzip_types                  text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  gzip_types                    &quot;*&quot;;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  gzip_vary                     off;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server_tokens                 off;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  client_max_body_size          200m;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    listen                      80 default_server;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    server_name                 _;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    return                      403 /www/403/index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  include                       ../serve/*.conf;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="隐藏nginx版本信息" tabindex="-1"><a class="header-anchor" href="#隐藏nginx版本信息"><span>隐藏Nginx版本信息</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server_tokens         off;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="禁止ip直接访问80端口" tabindex="-1"><a class="header-anchor" href="#禁止ip直接访问80端口"><span>禁止IP直接访问80端口</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  listen                80 default;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server_name           _;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  return                500;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动web服务-vue项目为例" tabindex="-1"><a class="header-anchor" href="#启动web服务-vue项目为例"><span>启动Web服务（Vue项目为例）</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">server {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 项目启动端口</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  listen            80;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 域名（localhost）</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server_name       _;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 禁止 iframe 嵌套</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  add_header        X-Frame-Options SAMEORIGIN;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 访问地址 根路径配置</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location / {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 项目目录</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    root 	    html;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 默认读取文件</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    index           index.html;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 配置 history 模式的刷新空白</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    try_files       $uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 后缀匹配，解决静态资源找不到问题</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location ~* \\.(gif|jpg|jpeg|png|css|js|ico)$ {</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    root           html/static/;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 图片防盗链</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location ~/static/.*\\.(jpg|jpeg|png|gif|webp)$ {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    root              html;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    valid_referers    *.deeruby.com;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    if ($invalid_referer) {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">      return          403;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 访问限制</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location /static {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    root               html;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # allow 允许</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    allow              39.xxx.xxx.xxx;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # deny  拒绝</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    deny               all;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pc端和移动端使用不同的项目文件映射" tabindex="-1"><a class="header-anchor" href="#pc端和移动端使用不同的项目文件映射"><span>PC端和移动端使用不同的项目文件映射</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">server {</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">  ......</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location / {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    root /home/static/pc;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    if ($http_user_agent ~* &#39;(mobile|android|iphone|ipad|phone)&#39;) {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">      root /home/static/mobile;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    index index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一个web服务-配置多个项目-location-匹配路由区别" tabindex="-1"><a class="header-anchor" href="#一个web服务-配置多个项目-location-匹配路由区别"><span>一个web服务，配置多个项目 (location 匹配路由区别)</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  listen                80;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server_name           _;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 主应用</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location / {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    root          html/main;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    index               index.html;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    try_files           $uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 子应用一</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location ^~ /store/ {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_pass          http://localhost:8001;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_redirect      off;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_set_header    Host $host;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_set_header    X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_set_header    X-Forwarded-For</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 子应用二</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location ^~ /school/ {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_pass          http://localhost:8002;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_redirect      off;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_set_header    Host $host;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_set_header    X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 静态资源读取不到问题处理</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  rewrite ^/api/profile/(.*)$ /(替换成正确路径的文件的上一层目录)/$1 last;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 子应用一服务</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  listen                8001;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server_name           _;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location / {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    root          html/store;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    index               index.html;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    try_files           $uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location ^~ /store/ {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    alias               html/store/;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    index               index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    try_files           $uri /store/index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 接口代理</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location  /api {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_pass          http://localhost:8089;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 子应用二服务</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  listen                8002;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server_name           _;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location / {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    root          html/school;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    index               index.html;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    try_files           $uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location ^~ /school/ {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    alias               html/school/;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    index               index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    try_files           $uri /school/index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 接口代理</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location  /api {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_pass          http://localhost:10010;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置负载均衡" tabindex="-1"><a class="header-anchor" href="#配置负载均衡"><span>配置负载均衡</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">upstream my_upstream {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server                http://localhost:9001;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server                http://localhost:9002;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server                http://localhost:9003;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  listen                9000;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server_name           test.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location / {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_pass          my_upstream;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_set_header    Host $proxy_host;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_set_header    X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ssl-配置-https" tabindex="-1"><a class="header-anchor" href="#ssl-配置-https"><span>SSL 配置 HTTPS</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  listen                      80;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server_name                 www.xxx.com;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 将 http 重定向转移到 https</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  return 301 https://$server_name$request_uri;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">server {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  listen                      443 ssl;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  server_name                 www.xxx.com;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  ssl_certificate             /etc/nginx/ssl/www.xxx.com.pem;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  ssl_certificate_key         /etc/nginx/ssl/www.xxx.com.key;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  ssl_session_timeout         10m;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  ssl_ciphers                 ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  ssl_protocols               TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  ssl_prefer_server_ciphers   on;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  location / {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    root                    /project/xxx;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    index                   index.html index.htm index.md;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    try_files               $uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const h=i(e,[["render",p],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/notes/Nginx/Nginx%E5%B8%B8%E7%94%A8%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE/","title":"Nginx常用基础配置","lang":"zh-CN","frontmatter":{"title":"Nginx常用基础配置","aliases":null,"tags":["Nginx"],"description":"Nginx常用基础配置","createTime":"2024/11/30 14:15:41","draft":false,"head":[["meta",{"property":"og:url","content":"https://kylinBachelor.github.io/notes/Nginx/Nginx%E5%B8%B8%E7%94%A8%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE/"}],["meta",{"property":"og:site_name","content":"攻城狮"}],["meta",{"property":"og:title","content":"Nginx常用基础配置"}],["meta",{"property":"og:description","content":"Nginx常用基础配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-30T10:36:56.000Z"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:modified_time","content":"2024-11-30T10:36:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx常用基础配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-30T10:36:56.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.1,"words":631},"git":{"updatedTime":1732963016000},"filePathRelative":"notes/Nginx/Nginx常用基础配置/index.md","categoryList":[{"id":"4358b5","sort":10004,"name":"notes"},{"id":"18ce3d","sort":10035,"name":"Nginx"},{"id":"d5fb1e","sort":10101,"name":"Nginx常用基础配置"}],"bulletin":false}');export{h as comp,r as data};

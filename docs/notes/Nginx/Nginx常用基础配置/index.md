---
title: "Nginx常用基础配置"
aliases: 
tags: ["Nginx"]
description: "Nginx常用基础配置"
createTime: 2024/11/30 14:15:41
draft: false
---


#### 基础配置

```yaml
user                            root;
worker_processes                1;

events {
  worker_connections            10240;
}

http {
  log_format                    '$remote_addr - $remote_user [$time_local] ' '"$request" $status $body_bytes_sent ' '"$http_referer" "$http_user_agent"';
  include                       mime.types;
  default_type                  application/octet-stream;
  sendfile                      on;
  #autoindex                    on;
  #autoindex_exact_size         off;
  autoindex_localtime           on;
  keepalive_timeout             65;
  gzip                          on;
  gzip_disable                  "msie6";
  gzip_min_length               100;
  gzip_buffers                  4 16k;
  gzip_comp_level               1;
  gzip_types                  text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
  gzip_types                    "*";
  gzip_vary                     off;
  server_tokens                 off;
  client_max_body_size          200m;

  server {
    listen                      80 default_server;
    server_name                 _;
    return                      403 /www/403/index.html;
  }

  include                       ../serve/*.conf;
}
```

#### 隐藏Nginx版本信息

```yaml
http {
  server_tokens         off;
}
```

#### 禁止IP直接访问80端口

```yaml
server {
  listen                80 default;
  server_name           _;
  return                500;
}
```

#### 启动Web服务（Vue项目为例）

```yaml
server {
  # 项目启动端口
  listen            80;
  # 域名（localhost）
  server_name       _;
  # 禁止 iframe 嵌套
  add_header        X-Frame-Options SAMEORIGIN;
  
  # 访问地址 根路径配置
  location / {
    # 项目目录
    root 	    html;
    # 默认读取文件
    index           index.html;
    # 配置 history 模式的刷新空白
    try_files       $uri $uri/ /index.html;
  }
  
  # 后缀匹配，解决静态资源找不到问题
  location ~* \.(gif|jpg|jpeg|png|css|js|ico)$ { 
    root           html/static/;
  }
  
  # 图片防盗链
  location ~/static/.*\.(jpg|jpeg|png|gif|webp)$ {
    root              html;
    valid_referers    *.deeruby.com;
    if ($invalid_referer) {
      return          403;
    }
  }
  
  # 访问限制
  location /static {
    root               html;
    # allow 允许
    allow              39.xxx.xxx.xxx;
    # deny  拒绝
    deny               all;
  }
}
```

#### PC端和移动端使用不同的项目文件映射

```yaml
server {
  ......
  location / {
    root /home/static/pc;
    if ($http_user_agent ~* '(mobile|android|iphone|ipad|phone)') {
      root /home/static/mobile;
    }
    index index.html;
  }
}
```

#### 一个web服务，配置多个项目 (location 匹配路由区别)

```yaml
server {
  listen                80;
  server_name           _;
  
  # 主应用
  location / {
    root          html/main;
    index               index.html;
    try_files           $uri $uri/ /index.html;
  }
  
  # 子应用一
  location ^~ /store/ {
    proxy_pass          http://localhost:8001;
    proxy_redirect      off;
    proxy_set_header    Host $host;
    proxy_set_header    X-Real-IP $remote_addr;
    proxy_set_header    X-Forwarded-For
    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
  }
  
  # 子应用二
  location ^~ /school/ {
    proxy_pass          http://localhost:8002;
    proxy_redirect      off;
    proxy_set_header    Host $host;
    proxy_set_header    X-Real-IP $remote_addr;
    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
  }
  
  # 静态资源读取不到问题处理
  rewrite ^/api/profile/(.*)$ /(替换成正确路径的文件的上一层目录)/$1 last;
}

# 子应用一服务
server {
  listen                8001;
  server_name           _;
  location / {
    root          html/store;
    index               index.html;
    try_files           $uri $uri/ /index.html;
  }
  
  location ^~ /store/ {
    alias               html/store/;
    index               index.html index.htm;
    try_files           $uri /store/index.html;
  }
  
  # 接口代理
  location  /api {
    proxy_pass          http://localhost:8089;
  }
}

# 子应用二服务
server {
  listen                8002;
  server_name           _;
  location / {
    root          html/school;
    index               index.html;
    try_files           $uri $uri/ /index.html;
  }
  
  location ^~ /school/ {
    alias               html/school/;
    index               index.html index.htm;
    try_files           $uri /school/index.html;
  }
  
  # 接口代理
  location  /api {
    proxy_pass          http://localhost:10010;
  }
}
```

#### 配置负载均衡

```yaml
upstream my_upstream {
  server                http://localhost:9001;
  server                http://localhost:9002;
  server                http://localhost:9003;
}

server {
  listen                9000;
  server_name           test.com;

  location / {
    proxy_pass          my_upstream;
    proxy_set_header    Host $proxy_host;
    proxy_set_header    X-Real-IP $remote_addr;
    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

#### SSL 配置 HTTPS

```yaml
server {
  listen                      80;
  server_name                 www.xxx.com;
  # 将 http 重定向转移到 https
  return 301 https://$server_name$request_uri;
}

server {
  listen                      443 ssl;
  server_name                 www.xxx.com;
  ssl_certificate             /etc/nginx/ssl/www.xxx.com.pem;
  ssl_certificate_key         /etc/nginx/ssl/www.xxx.com.key;
  ssl_session_timeout         10m;
  ssl_ciphers                 ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
  ssl_protocols               TLSv1 TLSv1.1 TLSv1.2;
  ssl_prefer_server_ciphers   on;
  
  location / {
    root                    /project/xxx;
    index                   index.html index.htm index.md;
    try_files               $uri $uri/ /index.html;
  }
}
```



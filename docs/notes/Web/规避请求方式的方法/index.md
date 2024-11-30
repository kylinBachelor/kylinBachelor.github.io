---
title: "规避请求方式的方法"
aliases: 
tags: [Web, Nginx]
description: "规避请求方式的方法"
createTime: 2024/11/30 14:15:41
draft: false
---


#### vue-cli请求拦截器中添加以下代码

```js
if (config.method === 'delete' || config.method === 'put' || config.method === 'option') {
   config.headers['ORIGINAL_METHOD'] = config.method.toUpperCase();
   config.method = 'POST'
}
```

#### Nginx请求中的配置

```conf
location  /xxxx请求/{

  # 还原原始请求方法
  set $ori_method $request_method;
  if ($http_ORIGINAL_METHOD != '') {
   set $ori_method $http_ORIGINAL_METHOD;
  }
  proxy_method $ori_method;

  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_pass http://127.0.0.1:8880;
 }
```


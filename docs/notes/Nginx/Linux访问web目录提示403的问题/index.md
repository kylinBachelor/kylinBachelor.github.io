---
title: "Linux访问web目录提示403的问题"
aliases: 
tags: ["Nginx"]
description: "Linux访问web目录提示403的问题"
createTime: 2024/11/30 14:15:41
draft: false
---


在Linux下http服务Nginx时，访问Web目录提示403Foridden，403表示你在请求一个资源文件但是Nginx不允许你查看。

###### 解决办法

找到nginx配置文件nginx.conf,修改如下：

1. 将 user nobody 改为 user root;
2. 将autoindex off 更改为 on,(Nginx默认是不支持浏览目录的)

更改完成重启Nginx

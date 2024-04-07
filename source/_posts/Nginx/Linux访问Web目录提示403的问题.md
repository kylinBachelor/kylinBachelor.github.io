---
title: Linux访问Web目录提示403的问题
author: 野路子随笔
top: false
cover: false
toc: true
mathjax: false
date: 2023-12-11 16:10:05
img:
coverImg:
password:
summary: 解决Linux访问Web目录提示403的问题
tags:
- Nginx
- 403
categories:
- Nginx
---

在Linux下http服务Nginx时，访问Web目录提示403Foridden，403表示你在请求一个资源文件但是Nginx不允许你查看。

###### 解决办法

找到nginx配置文件nginx.conf,修改如下：

1. 将 user nobody 改为 user root;
2. 将autoindex off 更改为 on,(Nginx默认是不支持浏览目录的)

更改完成重启Nginx

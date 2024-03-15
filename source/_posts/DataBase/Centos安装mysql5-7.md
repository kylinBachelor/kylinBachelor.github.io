---
title: Centos安装mysql5.7
author: 麒麟学士
top: false
cover: false
toc: true
mathjax: false
date: 2023-12-11 17:04:55
img:
coverImg:
password:
summary: Centos安装MySQL记录
tags:
- Mysql
- CentOS
categories:
- Mysql
---

1. 删除关于mysql的文件
2. 下载rpm文件
3. 进入rpm文件夹   执行  yum install *.rpm
4. 初始化：mysqld --initialize --console
5. 启动：systemctl startmysqld
6. 查看初始密码：登录后修改密码

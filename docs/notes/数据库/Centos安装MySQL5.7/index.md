---
title: "Centos安装MySQL5.7"
aliases: 
tags: ["MySQL", "Centos"]
description: "Centos安装MySQL5.7"
createTime: 2024/11/30 14:15:41
draft: false
---


1. 删除关于mysql的文件
2. 下载rpm文件
3. 进入rpm文件夹   执行  yum install *.rpm
4. 初始化：mysqld --initialize --console
5. 启动：systemctl start mysqld
6. 查看初始密码：登录后修改密码
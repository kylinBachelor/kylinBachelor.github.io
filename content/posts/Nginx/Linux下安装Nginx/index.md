---
title: "Linux下安装Nginx"
aliases: 
tags: ["Nginx", "Linux"]
description: "Linux下安装Nginx"
date: 2024-05-09T12:59:44+08:00
draft: false
---

1. 下载Nginx

    下载地址：【http://nginx.org/en/download.html】

2. 解压并放到服务器上

3. 进入Nginx目录

    ```bash
    # 如果出现 -bash: ./configure: Permission denied  则执行 bash ./configure 
    ./configure
    make
    make install
    ```

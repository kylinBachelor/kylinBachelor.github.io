---
title: Linux下安装Nginx
author: 野路子随笔
top: false
cover: false
toc: true
mathjax: false
date: 2023-12-11 16:07:18
img:
coverImg:
password:
summary: 讲解了Linux下如何安装Nginx
tags:
- Nginx
- Linux
categories:
- Nginx
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

    


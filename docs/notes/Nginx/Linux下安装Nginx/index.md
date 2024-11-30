---
title: "Linux下安装Nginx"
aliases: 
tags: ["Nginx", "Linux"]
description: "Linux下安装Nginx"
createTime: 2024/11/30 14:15:41
draft: false
---

1. 下载Nginx

    下载地址：【http://nginx.org/en/download.html】

2. 解压并放到服务器上

3. 需要的依赖，如果不存在使用以下命令安装

    ```sh
    yum -y install pcre-devel
    yum -y install openssl openssl-devel
    ```

    

4. 进入Nginx目录

    ```bash
    # 如果出现 -bash: ./configure: Permission denied  则执行 bash ./configure 
    ./configure --prefix=/usr/local/nginx
    make
    make install
    ```

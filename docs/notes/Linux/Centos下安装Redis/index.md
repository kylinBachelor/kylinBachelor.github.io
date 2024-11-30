---
title: "Centos下安装Redis"
aliases: 
tags: ["Linux", "Redis"]
description: "Centos下安装Redis"
createTime: 2024/11/30 14:15:41
draft: false
---



### 下载Redis安装包并解压

```sh
# Linux解压命令
tar -zvxf redis-3.2.10.tar.gz
```

### 进入解压后的Redis目录

进入后可看到配置文件**redis.conf**

### 配置环境及安装Redis

1. 查看gcc是否存在

    ```sh
    gcc-v
    # 如果不存在进行在线安装
    yum install gcc-c++
    ```

2. 进入解压后的Redis目录

    ```sh
    make
    make
    make install  # 确认安装
    ```

    Redis的默认安装路径是/user/local/bin

3. 将redis配置文件拷贝止myredis-config目录下

4. Redis默认不是后台启动，需要修改配置文件

    ```sh
    daemonize yes
    ```

5. 启动redis

    + 回到bin目录下

    + 启动服务端

        ```sh
        redis-serve myredis-config/redis.conf
        ```

    + 启动客户端

        ```sh
        redis-cli -p 6739
        
        ping #返回pong则是正确的
        
        # 在客户端测试一下
        set name kylinBachelor
        get name
        
        ```

    + 查看redis进程

        ```sh
        ps -ef | grep redis
        ```


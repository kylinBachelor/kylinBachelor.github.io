---
title: "常用镜像启动"
aliases: 
tags: [Docker]
description: "常用镜像启动"
createTime: 2024/11/30 14:15:41
draft: false
---



## Mysql

```sh
docker run -p 3306:3306 --name mysql8 -e MYSQL_ROOT_PASSWORD=root123
-v /usr/mysqlConf:/etc/mysql/conf.d 
-v /usr/mysqlLog:/var/log/mysql
-v /usr/mysqlData:/var/lib/mysql 
-d mysql:8.0 
--lower_case_table_names=1
```

- 3306:3306  物理机的3306端口对应镜像内部3306端口
- ---name 名称
- -e root密码
- -v 数据持久化物理机目录映射到镜像目录
- -d 指定镜像
- --lower_case_table_name 设置不区分大小写



## Redis

```sh
docker run -p 6379:6379 --name redis6 --privileged=true 
-v /usr/redis/redis.conf:/etc/redis/redis.conf
-v /usr/redis/data:/data
-d redis:6.0.8 redis-server /etc/redis/redis.conf
```


---
title: "容器数据卷"
aliases: 
tags: [Docker]
description: "容器数据卷"
createTime: 2024/11/30 14:15:41
draft: false
---
Docker挂载主机目录访问如果出现`cannot open directory : Permission denied`。<br>
解决办法：在挂载目录后多添加一个参数 `--privileged=true`即可

# 容器数据卷作用
Docker容器数据卷是Docker容器的持久化存储，数据卷是容器和宿主机之间的共享目录，容器的数据卷可以挂载到容器中，也可以挂载到宿主机中。<br>
Docker容器通过容器数据卷的方式完成数据的持久化重要资料的备份，通过目录的映射，容器内的数据备份+持久化到本地主机目录。<br>
简单来说是将Docker容器内的数据保存到宿主机的磁盘中。

# 容器卷的特点
1. 容器卷可在容器之间共享或重用数据。
2. 卷中的更改可以直接实时生效，无需去定时备份。
3. 数据卷中的更改不会包含在镜像的更新中。
4. 数据卷的生命周期一直持续到没有容器使用它为止。
 
# 命令
挂载容器卷
```sh
docker run -d --privileged=true -p 宿主机端口:容器端口 -v 宿主机绝对路径目录:容器目录 --name 容器名称 镜像名称:镜像版本
docker run -d --privileged=true -p 80:80 -v /var/www/html:/var/www/html --name my-apache-app httpd:2.4
```
查看挂载容器卷
```sh
docker inspect 容器名称or容器ID
```
# 读写规则映射
## 读写权限(默认):rw
## 只读:ro
容器内部会被限制，只能读取不能写入，此时像写入只能由宿主机写入，容器内部会读到的
```sh
docker run -d --privileged=true -p 宿主机端口:容器端口 -v 宿主机绝对路径目录:容器目录:ro --name 容器名称 镜像名称:镜像版本
```

# 卷的继承和共享
```sh
docker run -d --privileged=true --volume-from 父类(即将要继承的容器) --name 容器名称 镜像名称:镜像版本
```
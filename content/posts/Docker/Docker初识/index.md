---
title: "Docker初识"
aliases: 
tags: ["Docker"]
description: "描述"
date: 2024-05-09T12:46:57+08:00
draft: true
---

Docker是开源的容器技术，采用的是容器虚拟化技术，是容器运行的载体。
## 官网
1. Docker官网: http://www.docker.cn
2. Docker Hub官网: https://hub.docker.com/

## Docker三要素
1. 镜像（image）: 相当于Java中的类
2. 容器（container）: 相当于Java中的new出来的一个一个实例
3. 仓库（repository）: 存放镜像的地方


## Docker帮助启动类命令
+ systemctl start docker : 启动docker
+ systemctl stop docker : 停止docker
+ systemctl restart docker : 重启docker
+ systemctl status docker : 查看docker状态
+ systemctl enable docker : 开启启动
+ docker info : 查看docker概要信息
+ docker --help : 查看docker总体帮助文档
+ docker 具体命令 --help : 查看docker命令帮助文档

## 镜像命令
+ docker images : 查看docker上安装的镜像
+ docker search [某个xxx镜像的名字] : 查看docker镜像库中的镜像
+ docker pull 镜像名字[:TAG] : 从官方镜像库中拉取镜像 tag标签为版本号，不写默认最新版
+ docker system df : 查看镜像/容器/数据卷所占的空间
+ docker rmi [-f] 镜像名字/镜像ID : 删除xxx镜像名字/镜像ID

## 容器命令
+ docker ps : 查看容器 
+ docker run [OPTIONS] image [COMMAND] [ARG...]
+ docker run 镜像名称/ID : 
+ 容器停止：
  1. run进去容器，exit退出，容器停止
  2. run进去容器，ctrl+p+q退出，容器不停止
  3. docker start 容器ID/容器名称 ： 启动已停止运行的容器
  4. docker stop 容器ID/容器名称 ： 停止容器
  5. docker kill 容器ID/容器名称 ： 强制停止容器
  
+ 删除容器
  1. docker rm 容器ID : 删除已停止的容器

+ 查看容器内部
  1. docker top 容器ID/name  : 查看容器内运行的进程
  2. docker inspect 容器ID/name : 查看容器内部细节
  3. docker logs -f 容器ID : 查看容器日志


## Docker启动示例

docker run --name nginx-test -p 8080:80 -d nginx

+ --name nginx-test：容器名称。
+ -p 8080:80： 端口进行映射，将本地 8080 端口映射到容器内部的 80 端口。
+   -d nginx： 设置容器在在后台一直运行。

## Example

1. 获取最新版本的node镜像：docker pull node:latest
2. 查看本地镜像，是否已安装了node: docker images
3. 运行容器：docker run -itd --name node-test node
4. 进入容器：docker exec -it node-test /bin/bash
5. 进入容器之后查看node版本：node -v



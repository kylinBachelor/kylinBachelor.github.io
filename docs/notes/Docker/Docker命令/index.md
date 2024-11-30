---
title: "Docker初识"
aliases: 
tags: ["Docker"]
description: "描述"
createTime: 2024/11/30 14:15:41
draft: false
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
+ systemctl enable docker : 开机启动
+ docker info : 查看docker概要信息
+ docker --help : 查看docker总体帮助文档
+ docker 具体命令 --help : 查看docker命令帮助文档

## 镜像命令
1. docker images : 查看docker上安装的镜像
    + -a:列出本地所有的镜像（含历史镜像）
    + -q:只显示镜像ID
2. docker search [options] [xxx镜像的名字] : 查看docker镜像库中的镜像
    + --limit:只列出N个镜像，默认25个
    + docker search --limit 5 redis
3. docker pull 镜像名字[:TAG] : 从官方镜像库中拉取镜像 tag标签为版本号，不写默认最新版
4. docker system df : 查看镜像/容器/数据卷所占的空间
5. docker rmi [-f] 镜像名字/镜像ID : 删除xxx镜像名字/镜像ID   -f表示强制删除
6. docker rmi [-f] $(docker ps -qa)：删除所有

## 容器命令
+ docker ps [options]: 查看容器 
    1. -a:列出当前所有正在运行的容器+历史上运行过的
    2. -l:显示最近创建的容器
    3. -n:显示最近n个创建的容器
    4. -q:静默模式，只显示容器编号
+ docker run [OPTIONS] image [COMMAND] [ARG...]
    1. options说明
        + --name=容器新名字 :  为容器指定一个名称
        + -d:后台运行容器并返回容器ID,即为启动守护式容器
        + -i:以交互模式运行容器，通常与-t同时使用
        + -t:为容器重新分配一个伪输入终端，通常与-i同时使用，也即启动交互式容器
        + -P:随机端口映射，大写P
        + -p:指定端口映射，小写p
+ 退出容器：
  1. run进去容器，exit退出，容器停止
  2. run进去容器，ctrl+p+q退出，容器不停止
+ 启动已停止运行的容器
    1. docker start 容器ID/容器名称 ： 启动已停止运行的容器
+ 重启容器
    1. docker restart 容器ID或容器名
+ 停止容器
    1. docker stop 容器ID/容器名称 ： 停止容器
    2. docker kill 容器ID/容器名称 ： 强制停止容器
+ 删除已停止的容器
  1. docker rm 容器ID : 删除已停止的容器
+ 查看容器内部
  1. docker top 容器ID/name  : 查看容器内运行的进程
  2. docker inspect 容器ID/name : 查看容器内部细节
  3. docker logs -f 容器ID : 查看容器日志

+ 重新进入已启动的容器内部交互
    1. docker exec -it 容器ID /bin/bash  ：  在容器中打开新的终端，并且可以启动新的进程，用exit退出不会导致容器的停止
    2. docker attach 容器ID  : 直接进入容器启动命令的终端，不会启动新的进程，用exit退出，会导致容器的停止

+ 从容器内拷贝文件到宿主机上
    1. docker cp 容器ID:容器内路径  目的主机路径

+ 导入导出容器
    1. 导出： docker export 容器ID > /XX/XX/XX/文件名.tar
    2. 导入： cat 文件名.tar | docker import - 镜像用户/镜像名：镜像版本号


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


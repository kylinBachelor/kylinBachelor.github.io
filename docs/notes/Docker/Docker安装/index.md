---
title: "Docker安装"
aliases: []
tags: ["Docker"]
description: "Docker安装"
createTime: 2024/11/30 14:15:41
draft: false
---


请保证机器可以访问外网

1. 安装gcc
    yum -y install gcc

2. 安装c++
    yum -y install gcc-c++

3. 安装包管理
    sudo yum install -y yum-utils

4. 设置仓库
    yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

5. 更新yum软件包索引
    yum makecache fast

6. 安装docker 引擎
    sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

7. 启动Docker
    systemctl start docker

8. 查看Docker版本
    docker version

9. 校验Docker Engine 是否安装成功
    docker run hello-world

10. 配置阿里云镜像加速器 https://cr.console.aliyun.com/cn-beijing/instances/mirrors
    阿里云中有容器镜像服务，创建一个个人版本的就可以,针对Docker客户端版本大于 1.10.0 的用户,您可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器

    ```sh
    sudo mkdir -p /etc/docker
    sudo tee /etc/docker/daemon.json <<-'EOF'
    {
      "registry-mirrors": ["https://cfst52be.mirror.aliyuncs.com"]
    }
    EOF
    sudo systemctl daemon-reload
    sudo systemctl restart docker # 感觉restart不管用，最好是stop之后再start
    ```

    

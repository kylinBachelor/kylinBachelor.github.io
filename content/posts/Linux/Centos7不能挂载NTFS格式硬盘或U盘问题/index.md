---
title: "Centos7不能挂载NTFS格式硬盘或U盘问题"
aliases: 
tags: [Linux]
description: "Centos7不能挂载NTFS格式硬盘或U盘问题"
date: 2024-06-26T10:42:07+08:00
draft: false
---



## 出现的问题

Error mounting /dev/xx/run/media/cenos/软件：Filesystem type ntfs not configured in kernel.

### 解决方法

1. 添加 Centos的ntfs源

    ```sh
    sudo wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
    ```

2. 更新本地源

    ```sh
    sudo yum update
    ```

3. 安装ntfs-g3,安装之后无需重启就可以使用带（NTFS格式的）优盘或者硬盘

    ```sh
    sudo yum install *ntfs*
    ```

    对应的会安装三个依赖：ntfs-g3 ntfs-g3-devel ntfsprogs

    

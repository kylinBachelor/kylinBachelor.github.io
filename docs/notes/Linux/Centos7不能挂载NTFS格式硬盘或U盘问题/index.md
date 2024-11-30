---
title: "Centos7不能挂载NTFS格式硬盘或U盘问题"
aliases: 
tags: [Linux]
description: "Centos7不能挂载NTFS格式硬盘或U盘问题"
createTime: 2024/11/30 14:15:41
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

    

> [!warning]
>
> > [!warning]
> >
> > > [!warning]
> > >
> > > <span style='color: red; font-size: 20px'>解除挂载!!!!!!!!!!</span>
> > >
> > > 一定要先解除挂载 再把U盘拔下来，否则下次挂载不上也解除不了了
> > >
> > > 命令： umount /dev/sdb1

---
title: "Linux下常用的命令"
aliases: 
tags: ["Linux", _]
description: "Linux下常用的命令"
createTime: 2024/11/30 14:15:41
draft: false
---

## 排查某端口是否被占用

```bash
netstat -anp | grep [端口号]
```

## 查看网络连接网络接口信息等

```bash
netstat -nlpt
```

## 查看系统版本

```bash
uname -a
# 适用于redhat系列
cat redhat-release
```

## 防火墙相关

```bash
# 1. 查看防火墙放行的服务
firewall-cmd --list-all
# 2. 在防火墙中放行某服务，并设为永久生效
firewall-cmd --permanent --add-service=&协议名
# 3. 放开端口
firewall-cmd --zone=public --add-port=3306/tcp --permanent
firewall-cmd --permanent --add-port=8088/tcp
# 关闭端口
firewall-cmd --zone=public --remove-port=3306/tcp --permanent
firewall-cmd --permanent --remove-port=8088/tcp
# 4. 刷新（重新加载防火墙配置）
firewall-cmd --reload
# 5. 查看防火墙状态
systemctl status firewalld
# 6. 关闭防火墙 
systemctl stop firewalld
# 7. 开启防火墙
systemctl start firewalld
```

## scp命令

> [!note]
>
> scp命令用于服务器之间文件的传输
>
> 执行命令之后需要输入 **源服务器用户的登录密码**

```sh
scp -r root@192.168.1.205:/Users/lengleng/Downloads/files/local /Users/lengleng/Downloads/files

# 解释说明
scp -r 源用户@源ip:源目录 目标目录
```



## SSH服务命令

```sh
# 启动SSH服务
service sshd start
# 重启SSH服务
service sshd restart
# 关闭SSH服务
service sshd stop
```

## 查看文件夹大小

```sh
du -sh <文件夹路径>

df -h <文件夹路径>
```



## 常用软件安装

1. Linux下常用的软件安装方式有三种
    + **tar安装**： 如果开发商提供的是 tar、tar.gz、tar.bz 格式的包（其中 tar 格式的为打包后没有压缩的包，gz 结尾的是按照 gzip 打包并压缩的软件包，tar.bz 是按照二进制方式打包并压缩的软件包），可以采用 tar 包安装，tar 安装方式本质上是解压软件开发商提供的软件包，之后在通过相应配置，完成软件的安装。
    + **rpm安装**：rpm 安装方式是 redhat Linux 系列推出的一个软件包管理器，类似于 Windows 下的 exe 安装程序，可以直接使用 rpm 命令安装。
    + **yum安装**：yum 安装本质上依然是 rpm 包安装，和 rpm 安装方式的不同之处是用户可以通过 yum 参数，指定安装的软件包，系统将自动从互联网上下载相应的 rpm 软件包。而无需用户关心软件包的下载地址，以及软件包的依赖关系。
2. 软件安装常用命令
    + 解压压缩命令：`tar`
    + 语法：`tar [选项] [压缩包]`
    + 解压gzip包：`tar -zxvf [包名]`
    + 解压 bz 包：`tar -jxvf [包名]`
    + 解压普通包：`tar -xvf [包名]`

| 取值 |            说明            |
| :--: | :------------------------: |
|  -c  |      指定特定目录压缩      |
|  -x  |    从备份文件中还原文件    |
|  -t  |     列出备份文件的内容     |
|  -r  |  添加文件到已经压缩的文件  |
|  -z  | 有gzip属性的（后缀是gz的） |
|  -j  | 有bz2属性的（后缀是bz的）  |
|  -Z  |      有cpmpress属性的      |
|  -v  |        显示所有进程        |
|  -O  |    将文件解压到标准输出    |
|  -f  |        使用档案名称        |

3. 安装卸载命令
    + 语法：`rpm [选项] [安装包]`
    + 查询是否安装了某软件：`rpm -qa|grep [软件包关键词]`
    + 卸载已经安装的软件包：`rpm -e 软件包全名`
    + 安装软件包并查看进度：`rpm -ivh 软件包路径`

| 取值 |                说明                 |
| :--: | :---------------------------------: |
| -ivh |          安装显示安装进度           |
| -Uvh |             升级软件包              |
| -qpl |      列出rpm软件包内的文件信息      |
| -qpi |       列出rpm软件包的描述信息       |
| -qr  |    查找指定文件属于哪个rpm软件包    |
| -Va  | 校验所有的rpm软件包，查找丢失的文件 |
|  -e  |               删除包                |
| -qa  |         查找已经安装的rpm包         |

## 权限操作

​    Linux 操作系统为文件定义了读、写、执行三种权限，不同的用户或者用户组可以具有不同的权限，系统采用 “r”、“w”、“x” 来分别表示文件的读、写、执行权限。使用 **ls  -l**+命令可以查看到用户在当前目录或者文件的操作权限。

举例：

```sh
drwxr -xr -x. 2 root root 4096 Sep 23 2011 bin
```

从左至右分别代表以下含义：

+ `d`：代表bin是目录而不是文件
+ rwx：代表拥有者具有读、写、执行的权限
+ r  -x：代表同组用户具有读、执行的权限，但是没有写的权限
+ r -x：代表其他组用户具有读、执行的权限，没有写权限

常用的变更权限命令为：`chmod`

语法：`chmod [选项] [参数]`

| 取值 | 说明                                 |
| ---- | ------------------------------------ |
| -c   | 显示指令执行过程，但只返回更改的部分 |
| -f   | 不显示错误信息                       |
| -r   | 递归授权                             |
| -v   | 显示指令过程                         |

chmod的参数可以分为两种，分别是权限模式和数字模式

**权限模式**

  权限模式使用u，g，o分别代表拥有者、同组用户、其它组用户，使用加号（+）和减号（-）代表赋予和收回权限，使用r、w、x代表读、写、执行权限。

```sh
# 例如：将文件F01的的执行权限给当前用户，写权限赋给用户所在的用户组和其它用户。
chmod -r U+X,G+W F01

# 将文件F01的读、写、执行权限赋给当前用户，将读、写权限赋给用户所在的用户组和其它用户
chmod -r u=rwx,g=rw,o=rw F01
```

**数字模式**

为了简化授权步骤，用户也可以采用数字模式进行授权，使用二进制的形式代表r、w、x三种权限，如`101(5) = r -x, 111(7) = rwx, 100(3) = r- -`

例如：将文件**f01**的读、写、执行权限赋给当前用户，将读和执行的权限赋给用户组、将写和执行权限赋给其它用户。

```sh
chmod 753 -r f01
```

例如：将文件 f01 的读、写、执行权限赋给所有用户。

```sh
chmod 777 -r f01
```


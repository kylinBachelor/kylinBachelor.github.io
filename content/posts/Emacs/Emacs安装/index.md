---
title: "Emacs安装"
aliases: 
tags: ["Emacs"]
description: "Emacs安装"
date: 2024-05-09T13:09:24+08:00
draft: false
---


### 下载Emacs安装包 tar.gz
https://mirrors.ustc.edu.cn/gnu/emacs/
### 安装依赖

```sh
yum list gtk3-devel
yum install libXpm-devel
yum install libtiff-devel
yum install gnutls-devel
yum install giflib-devel 
yum install libjpeg-turbo-devel
yum install ncurses-devel
yum install libpng-devel
```
### 安装

```sh
cd  emacs目录
./configure --prefix=/home/xxx # prefix为安装目录
make
make install
```
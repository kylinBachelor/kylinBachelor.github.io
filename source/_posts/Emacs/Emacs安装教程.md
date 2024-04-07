---
title: Emacs安装教程
author: 野路子随笔
top: false
cover: false
toc: true
mathjax: false
date: 2023-12-21 12:50:39
img:
coverImg:
password:
summary: Emacs在Linux如何进行编译安装
tags:
- Emacs
categories:
- Emacs
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
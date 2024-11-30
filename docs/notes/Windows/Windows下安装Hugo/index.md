---
title: "Windows下安装Hugo"
aliases: 
tags: [Windows, 博客]
description: "Windows下安装Hugo"
createTime: 2024/11/30 14:15:41
draft: false
---


# windows下安装hugo
各平台安装hugo的方法可以参考官方教程[hugo安装教程](https://gohugo.io/getting-started/installing/)
## 使用安卓 choco 包管理器安装hugo
### 使用管理员权限打开powershell并运行
```shell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
### 使用choco安装hugo
```shell
choco install hugo --confirm
```
# 新建博客
## 新建博客站点
```shell
hugo new site blogName
```
使用git管理博客系统，将新建的博客站点上传至github
## 安装hugo主题meme
```shell
git submodule add --depth 1 https://github.com/reuixiy/hugo-theme-meme.git themes/meme
```
## 测试博客
将 *themes/meme/config-examples/en* 复制替换到博客根目录下
### 创建页面
```shell
~/blog $ hugo new "posts/hello-world.md"
~/blog $ hugo new "about/_index.md"
```
### 运行
```shell
~/blog $ hugo server -D    // 草稿博客也会显示
~/blog $ hugo server    // 草稿博客不显示
```
如果提示某个错误（这个错误忘记截图了），根据官方文档安装hugo-extended
```shell
choco install hugo-extended -confirm
```
再次运行，根据提示的URL地址可查看此博客界面
### GitHub上配置flowWork
打开GitHub上托管的博客目录，点击setting，左边找到Pages,右边会有Build and deployment,Source选择GitHub Actions,然后再选择你使用的模板，比如Hugo,配置不用改直接保存就行了，
之后本地写完博客后直接push就可以了，GitHub会帮你自动编译了，不需要你运行Hugo命令去编译博客后再push了

#### 最后贴上Hugo官方中文网站

https://hugo.aiaide.com/post/
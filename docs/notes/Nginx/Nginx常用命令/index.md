---
title: "Nginx常用命令"
aliases: 
tags: ["Nginx", _]
description: "Nginx常用命令"
createTime: 2024/11/30 14:15:41
draft: false
---


#### Linux下常用命令

```bash
# 首先进入Nginx的安装目录，一般情况下安装目录为  /usr/local/local/sbin

# 查看版本
./nginx -v
# 启动
./nginx
# 重启
./nginx -s reopen
# 重新载入配置文件
./nginx -s reload
# 查看nginx启动进程
ps -ef | grep nginx
```


#### Windos下常用命令

```bash
# 首先进入nginx目录

# 1. 启动
start nginx
ningx.exe
# 2. 暂停
nginx.exe -s stop # 快速暂停
nginx.exe -s quit # 完整有序的停止nginx
# 3. 重新加载配置文件
nginx.exe -s reload
# 4. 查看nginx进程
tasklist /fi "imagename eq nginx.exe"
# 5. 特殊设置nginx的配置文件路径
start nginx -c conf/nginx.conf 
```

#### Windows下Nginx脚本（xxx.bat）

```bat
# 重启
@echo off
nginx -s reload
pause

# 启动
@echo off
start nginx.exe
pause

# 停止
@echo off
nginx -s stop
pause

# 查看进程（查看Nginx是否启动）
@echo off
tasklist /fi "imagename eq nginx.exe"
pause
```

---
title: Windows下软件启动脚本
author: 野路子随笔
top: false
cover: false
toc: true
mathjax: false
date: 2023-12-12 13:54:42
img:
coverImg:
password:
summary: Windows下软件启动脚本
tags:
- Windows
categories:
- Windows
---

# OpenSoftWare.bat
``` bat
    @echo off
    start /d "D:\Program Files (x86)\Tencent\WeChat\" WeChat.exe
    start /d "D:\Program Files (x86)\Tencent\WeChat\" WeChat.exe
    start /d "D:\Program Files (x86)\Tencent\QQ\Bin\" QQ.exe
    start /d "D:\Program Files\JetBrains\IntelliJ IDEA 2020.3.4\bin\" idea64.exe
    start /d "D:\Program Files\PremiumSoft\Navicat Premium 15\" navicat.exe
    start /d "D:\Program Files\Snipaste-1.16.2-x64\" Snipaste.exe
    exit
```

---
title: "Git切换分支"
aliases: 
tags: ["git"]
description: "Git切换分支"
date: 2024-05-09T18:37:52+08:00
draft: false
---


#### 切换分支的问题

在当前分支修改了代码，还没有commit当切换到其它分支的时候,就会弹出下面这个窗口

![分支切换问题弹窗](/img/git/git分支切换/Git分支切换问题.png)

#### Force Checkout

不会把冲突的那部分内容带到将要切换到的分支，如果点了Force Checkout 本地的修改就会全部消失。

如果force checkout ,可以右键local history--->show history 找到自己的代码，右键revert就可以还原了

#### Smart Checkout

会把冲突的那部分内容带到将要切换到的分支，

#### Don't Checkout

不切换分支，继续留在当前分支
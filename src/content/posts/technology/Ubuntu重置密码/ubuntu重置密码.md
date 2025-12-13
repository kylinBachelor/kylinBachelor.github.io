---
title: 在忘记密码的情况下Ubuntu如何重置密码
tags:
  - Ubuntu
categories:
  - Linux
date: 2025-11-17 14:15:41
updated: 2025-11-17 14:15:41
---


### 1. 重启系统，重启过程中长按`Shift`按键，出现如下界面

![image-20251117135826720](./assets/image-20251117135826720.png)



### 2 .选择 ``Advanced........`，`然后`Enter`

![image-20251117140058905](./assets/image-20251117140058905.png)



### 3. 选择内核版本高的 `recovery mode`模式的，然后按下`E` 按键

![image-20251117140429631](./assets/image-20251117140429631.png)



### 4. 找到 linux  /boot/vm.....开头的行

![image-20251117140602344](./assets/image-20251117140602344.png)



### 3. 修改命令参数

+ 删除recovery nomodeset
+ 在本行的最后面添加 rw single init=/bin/bash



![image-20251117141051758](./assets/image-20251117141051758.png)



### 4. 修改完之后按下ctrl+x重启就进入命令行界面了

例如修改密码    passwd root

然后输入密码就行了

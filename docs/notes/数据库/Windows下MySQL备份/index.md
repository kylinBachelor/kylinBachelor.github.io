---
title: "Windows下MySQL备份"
aliases: 
tags: ["MySQL", "Windows"]
description: "Windows下MySQL备份"
createTime: 2024/11/30 14:15:41
draft: false
---


# 前期工作
需要为Windows创建定时任务，按时执行bat文件
## 以天为单位备份（ AutoBackUpMysqlDbByDay.bat）
``` bat
    @echo off
    rem 备份文件存放路径
    set SrcDir=C:\mysql_bak
    set TwoDir=E:\mysql_bak_copy
    rem 当前日期作为文件名一部分
    ::时间不是两位补0
    if "%date:~5,2%" lss "10" (set mm=0%date:~6,1%) else (set mm=%date:~5,2%)
    if "%date:~8,2%" lss "10" (set dd=0%date:~9,1%) else (set dd=%date:~8,2%)
    if "%time:~0,2%" lss "10" (set hh=0%time:~1,1%) else (set hh=%time:~0,2%)
    if "%time:~3,2%" lss "10" (set nn=0%time:~4,1%) else (set nn=%time:~3,2%)
    :: 年月日_时分秒
    set  timer=%date:~0,4%%mm%%dd%_%hh%%nn%
    rem 指定天数
    set DaysAgo=15
    "C:\Program Files\mysql-5.7.10-winx64\bin\mysqldump.exe" --opt -u 用户名 --password=密码 数据库名 > %SrcDir%\contract_db_%timer%.sql
    @echo on

    @echo off
    ::演示：删除指定路径下指定天数之前（以文件的最后修改日期为准）的文件。
    ::如果演示结果无误，把del前面的echo去掉，即可实现真正删除。
    ::forfiles /p %SrcDir% /s /m *.* /d -%DaysAgo% /c "cmd /c echo del /f /q /a @path"
    ::本例需要Win2003/Vista/Win7系统自带的forfiles命令的支持
    rem 删除过期文件
    forfiles /p %SrcDir% /s /m *.* /d -%DaysAgo% /c "cmd /c   del /f /q /a @path"
    rem  异盘拷贝
    copy  %SrcDir%\xx_db_%timer%.sql %TwoDir%\
```
# 以周为单位备份（AutoBackUpMysqlDbByWeekl.bat）
``` bat
    @echo off
    rem 备份文件存放路径
    rem 备份文件存放路径
    set SrcDir=D:\htgl\autobak\weekbak
    set TwoDir=C:\htgl\autobak\weekbak
    rem 当前日期作为文件名一部分
    set "Ymd=%date:~,4%%date:~5,2%%date:~8,2%"
    rem 指定天数
    set DaysAgo=60

    "C:\Program Files\MySQL\MySQL Server 5.7\bin\mysqldump.exe" --opt -u 用户名 --password=密码 数据库名 > %SrcDir%\htgl_db_%Ymd%.sql
    @echo on

    @echo off
    ::演示：删除指定路径下指定天数之前（以文件的最后修改日期为准）的文件。
    ::如果演示结果无误，把del前面的echo去掉，即可实现真正删除。
    ::forfiles /p %SrcDir% /s /m *.* /d -%DaysAgo% /c "cmd /c echo del /f /q /a @path"
    ::本例需要Win2003/Vista/Win7系统自带的forfiles命令的支持

    rem 删除过期文件
    forfiles /p %SrcDir% /s /m *.* /d -%DaysAgo% /c "cmd /c   del /f /q /a @path"

    rem  异盘拷贝
    copy  %SrcDir%\xx_db_%Ymd%.sql %TwoDir%\
```

---
title: "Linux服务器常用巡检命令"
aliases: 
tags: [Linux]
description: "Linux服务器常用巡检命令"
createTime: 2024/11/30 14:15:41
draft: true
---

# 1. 查看系统信息

## 1.1 系统信息显示

> 命令：`uname -a` 

```
[root@linux100 ~]# uname -a
Linux linux100 4.15.0-70-generic #79-Ubuntu SMP Tue Nov 12 10:36:11 UTC 2019 x86_64 x86_64 x86_64 GNU/Linux
```



打印出来的信息说明：

|                    **字段**                    | **对应打印的值**  |                    **说明**                    |
| :--------------------------------------------: | :---------------: | :--------------------------------------------: |
|      操作系统类型 - Operating System Type      |       Linux       |      显示操作系统类型，如Linux、Unix等。       |
|               主机名 - Hostname                |     linux100      |               显示当前主机的名称               |
|           内核版本 - Kernel Version            | 4.15.0-70-generic |        显示当前系统正在使用的内核版本号        |
| 操作系统发行版版本号 - OS Distribution Version |        #79        |          显示操作系统发行版的版本号。          |
|        操作系统发行版 - OS Distribution        |      Ubuntu       | 显示操作系统的发行版信息，如Ubuntu、CentOS等。 |
|          操作系统架构 - Architecture           |      x86_64       |      显示操作系统的架构，如x86_64、i386等      |

## 1.2 显示操作系统发行版信息

> ```
> 命令：cat /etc/*release*
> ```

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelHtMruaibXbY07WAq5ArNu6icJPGnMD7zx92HuLj1fySnfyBaw4eHlQbwQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

## 1.3 通过LSB工具查询Linux发行版信息

lsb_release是一个Linux Standard Base（LSB）的工具，用于显示Linux发行版的信息。它通常用于查询和显示Linux发行版的版本号、发行代号、描述等信息。

```
# CentOS安装lsb_release包
[root@linux100 ~]# sudo yum install redhat-lsb

# 查看Linux版本
[root@linux100 ~]# lsb_release -a
LSB Version:    :core-4.1-amd64:core-4.1-noarch:cxx-4.1-amd64:cxx-4.1-noarch:desktop-4.1-amd64:desktop-4.1-noarch:languages-4.1-amd64:languages-4.1-noarch:printing-4.1-amd64:printing-4.1-noarch
Distributor ID: CentOS
Description:    CentOS Linux release 7.9.2009 (Core)
Release:        7.9.2009
Codename:       Core
```



## 1.4 通过hostnamectl来查询Linux系统信息

hostnamectl是一个用于管理系统主机名（hostname）的命令行工具，它通常在Linux系统中提供。它可以用来查询、设置和管理系统的主机名及其相关的信息。

```
[root@linux100 ~]# hostnamectl
   Static hostname: linux100
         Icon name: computer-vm
           Chassis: vm
        Machine ID: fb9d8715fff144aca93accad42cec460
           Boot ID: 49ec505cca3d4052a6115b36a670e7e6
    Virtualization: vmware
  Operating System: CentOS Linux 7 (Core)
       CPE OS Name: cpe:/o:centos:centos:7
            Kernel: Linux 3.10.0-1160.25.1.el7.x86_64
      Architecture: x86-64
```



## 1.5 显示系统运行时间、负载情况

> 命令：uptime

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelHOUAXBvOClzcaaHaW0ay9y8neg78GDBwYuXOmzdNYFtQ2jJOJ2KmlbA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

打印出来的信息说明：

|    **字段**    |        **对应打印的值**        |                           **说明**                           |
| :------------: | :----------------------------: | :----------------------------------------------------------: |
|    当前时间    |            10:52:57            |                      显示当前系统时间。                      |
|  系统运行时间  |            up 7 min            | 显示系统自上次启动以来的运行时间。通常以天、小时、分钟的格式显示。up 7 min表示运行了7分钟。 |
| 当前登录用户数 |             1 user             |             当前登录系统的用户个数，1user表示1人             |
|    平均负载    | load average: 0.05, 0.07, 0.05 | 显示系统在过去1分钟、5分钟、15分钟内的平均负载。负载是指系统处于运行和等待状态的进程数目的平均值。值显示该系统处于轻负载状态。 |

## 1.6 列出已加载的内核模块

> ```
> 命令：lsmod
> ```

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelHlCanxLx13BWUAI7wY6sT7aA3QibaUg7T9u00jDXlqFh5D1bumVoibLZA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

# 2.**资源****利用情况**

## 2.1 实时查看系统资源使用情况

> 命令：top

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelH2mGvBoGiapO7nIfGjqCWFclynhakheg3LVSicpmYDa3qyXMoq5l3TsLw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

打印出来的信息说明：

|                                                    |            **字段**            |                       **对应打印的值**                       |                           **说明**                           |
| :------------------------------------------------: | :----------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|         **第一行：** **总体信息** **top**          |            当前时间            |                        top - 11:56:43                        |                      显示当前系统时间。                      |
|                    系统运行时间                    |            up  1:10            | 显示系统自上次启动以来的运行时间。通常以天、小时、分钟的格式显示。up  1:10表示运行了1小时10分钟。 |                                                              |
|                   当前登录用户数                   |             1 user             |             当前登录系统的用户个数，1user表示1人             |                                                              |
|                      平均负载                      | load average: 0.00, 0.01, 0.05 | 显示系统在过去1分钟、5分钟、15分钟内的平均负载。负载值反映了系统在单位时间内处于可运行状态的平均进程数。 |                                                              |
|        **第二行：** **任务统计** **Tasks**         |  系统中各类任务数量的统计信息  | Tasks: 108 total,  1 running, 107 sleeping,  0 stopped,  0 zombie | 该系统总共有108个任务，其中有1个运行中的任务，107个睡眠中的任务，0个已停止的任务，0个僵尸进程。 |
|      **第三行：** **CPU使用情况** **%Cpu(s)**      |               us               |                            0.3 us                            |                   用户空间占用CPU的百分比                    |
|                         sy                         |             0.3 sy             |                   内核空间占用CPU的百分比                    |                                                              |
|                         ni                         |             0.0 ni             |            优先级较低的进程用户态占用CPU的百分比             |                                                              |
|                         id                         |            99.3 id             |                       CPU空闲的百分比                        |                                                              |
|                         wa                         |             0.0 wa             |                    CPU等待I/O完成的百分比                    |                                                              |
|                         hi                         |             0.0 hi             |                    硬中断占用CPU的百分比                     |                                                              |
|                         si                         |             0.0 si             |                    软中断占用CPU的百分比                     |                                                              |
|                         st                         |             0.0 st             |                  被虚拟机偷取的时间的百分比                  |                                                              |
|     **第四行：** **内存使用情况** **KiB Mem**      |             总内存             |                         995664 total                         |                    系统总可用的物理内存量                    |
|                      空闲内存                      |          491532 free           |                    当前已经被使用的内存量                    |                                                              |
|                      已用内存                      |          175596 used           |                  当前可用但未被使用的内存量                  |                                                              |
|                    缓存/缓冲区                     |       328536 buff/cache        |              被系统用作文件缓存和缓冲区的内存量              |                                                              |
| **第五行：** **系统交换空间使用情况** **KiB Swap** |           总交换空间           |                        2097148 total                         |                   系统总可用的交换空间大小                   |
|                    空闲交换空间                    |          2097148 free          |               当前可用但未被使用的交换空间大小               |                                                              |
|                    已用交换空间                    |             0 used             |                 当前已经被使用的交换空间大小                 |                                                              |
|                  **列表字段说明**                  |              PID               |                             668                              |                            进程ID                            |
|                        USER                        |              root              |                             用户                             |                                                              |
|                         PR                         |               20               | 优先级（Priority），表示进程的静态优先级。Linux进程的优先级范围是-20到19，数值越小，优先级越高。 |                                                              |
|                         NI                         |               0                | 优先级值（Nice Value），表示进程的动态优先级。通过`renice`命令可以调整进程的优先级值，数值越小，优先级越高。 |                                                              |
|                        VIRT                        |             273192             | 虚拟内存（Virtual Memory），表示进程当前使用的虚拟内存大小，以千字节（KB）为单位。虚拟内存包括进程使用的物理内存（RES）和交换空间。 |                                                              |
|                        RES                         |              4868              | 物理内存（Resident Memory），表示进程当前使用的物理内存大小，以千字节（KB）为单位。物理内存是指进程实际占用的内存空间。 |                                                              |
|                        SHR                         |              3736              | 共享内存（Shared Memory），表示进程使用的共享内存的大小，以千字节（KB）为单位。共享内存是多个进程之间共享的内存区域，通常用于进程之间的通信。 |                                                              |
|                         S                          |               S                | 当前进程状态（State），常见的状态包括：R（运行）、S（睡眠）、D（不可中断睡眠）、Z（僵尸）、T（停止）、<（高优先级）、N（低优先级）、+（位于前台）、L（锁住页）、s（会话领导者）、l（多线程）。 |                                                              |
|                        %CPU                        |              0.3               |                          CPU使用率                           |                                                              |
|                        %MEM                        |              0.5               |                          内存使用率                          |                                                              |
|                       TIME+                        |            0:06.98             |                           运行时间                           |                                                              |
|                      COMMAND                       |            vmtoolsd            |                           进程名称                           |                                                              |

> 具体查看参数：
>
> - 第一行load average(CPU负载)：三个参数分别指前1分钟、前5分钟、前15分钟的负载，数值越高负载越高，对比数值在增加的话则表明CPU负载越来越高。
> - 第三行%Cpu(s)：看**id的数值>20%则表示CPU运行流畅，<20%则表示CPU负载过重**。还有us过高就是用户进出优化，sy过高则需要提高服务器性能，wa过高就要关注磁盘io了。
> - 按shift+p或者大写的P可以将cpu占用情况由大到小排列出来，找到占用cpu最大的那个线程，即可造成CPU过大的线程。

## 2.2 查看运行内存使用情况

> 命令：
>
> free -g（单位GB）
>
> free -m（单位MB）

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelH9P43ibKMPjqgXp4GqNpaEibc5YWRKAYaezxOcIxCQFK5JAbklEiapeXSQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

打印出来的信息说明：

| **字段**  |          **说明**          |
| :-------: | :------------------------: |
|   total   |         内存总大小         |
|   used    |         使用的内存         |
|   free    | 除了 buff/cache 剩余的内存 |
|  Shared   |          共享内存          |
| Buff/cact |     缓冲、缓存区内存数     |
| available |    真实剩余的可用内存数    |

## 2.3 查看磁盘空间使用情况

> 命令：df -h

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelHkicVRJ0NeibsDfjp2GJ7AujrPgZ9kTogliaMsyr0CX3He5oMQoSWrBN6A/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)查看发现根挂载点使用率100%，明明清理了大文件，但还是使用率100%，这就有可能是大量进程在占用内存使用率。

**解决办法：**

通过执行命令 **lsof -n |grep deleted** ，查看已经删除的文件，空间没有释放，kill掉pid。

> **扩展：**
>
> 检查当前目录下，目录层级深度为1，空间占用情况：
>
> du -h -x --max-depth=1

## 2.4 查看磁盘IO

> 常用命令格式：iostat [参数] [时间] [次数]

例如：iostat -d -k -x 1 10

命令参数说明如下：

| **命令中间的参数** |              **参数说明**              |
| :----------------: | :------------------------------------: |
|         -c         |            显示CPU使用情况             |
|         -d         |            显示磁盘使用情况            |
|         -k         |             以K为单位显示              |
|         -m         |             以M为单位显示              |
|         -N         |         显示磁盘阵列(LVM) 信息         |
|         -n         |            显示NFS使用情况             |
|         -p         | 可以报告出每块磁盘的每个分区的使用情况 |
|         -t         |          显示终端和CPU的信息           |
|         -x         |              显示详细信息              |

```
[user1@Test_Server ~]$ iostat -x
Linux 3.10.0-693.2.2.el7.x86_64 (jellythink)    01/05/2019      _x86_64_        (1 CPU)

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           1.83    0.00    0.31    0.09    0.00   97.77

Device:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util
vda               0.03     0.78    0.24    1.38    12.64    20.67    41.01     0.02   10.98   55.50    3.17   0.71   0.12
```



打印出来的信息说明：

|                                       | **字段** |                         **对应的值**                         |                           **说明**                           |
| :-----------------------------------: | :------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| **avg-cpu** **显示CPU的平均使用情况** |  %user   |                             1.83                             | 用户进程占用CPU的百分比。这包括用户应用程序和用户级别的进程。 |
|                 %nice                 |   0.00   | 优先级较高的用户进程占用CPU的百分比。这些进程的优先级被提升了。 |                                                              |
|                %system                |   0.31   |       系统进程占用CPU的百分比。这包括内核级别的进程。        |                                                              |
|                %iowait                |   0.09   | 等待I/O操作完成占用CPU的百分比。如果CPU大部分时间都在等待I/O操作完成，这个值会比较高。 |                                                              |
|                %steal                 |   0.00   | 被虚拟化环境中其他虚拟机“偷走”的CPU时间的百分比。这个值主要用于虚拟化环境。 |                                                              |
|                 %idle                 |  97.77   |          CPU空闲时间的百分比。这是CPU未被使用的时间          |                                                              |
| **某个设备在系统的IO性能和负载情况**  |  Device  |                             vda                              |      设备名称，表示正在监视的磁盘或者其他IO设备的名称。      |
|                rrqm/s                 |   0.03   | 每秒向该设备发出的读请求并在请求队列中排队的请求数（合并请求） |                                                              |
|                wrqm/s                 |   0.78   | 每秒向该设备发出的写请求并在请求队列中排队的请求数（合并请求） |                                                              |
|                  r/s                  |   0.24   |               每秒从设备读取的块数（读取速率）               |                                                              |
|                  w/s                  |   1.38   |               每秒向设备写入的块数（写入速率）               |                                                              |
|                 rkB/s                 |  12.64   |             每秒从设备读取的数据量（以MB为单位）             |                                                              |
|                 wkB/s                 |  20.67   |             每秒向设备写入的数据量（以MB为单位）             |                                                              |
|               avgrq-sz                |  41.01   |                平均每个IO请求的大小（块大小）                |                                                              |
|               avgqu-sz                |   0.02   |                 平均IO请求在设备队列中的长度                 |                                                              |
|                 await                 |  10.98   |         平均IO请求的等待时间，包括排队时间和服务时间         |                                                              |
|                r_await                |  55.50   |                   平均读取IO请求的等待时间                   |                                                              |
|                w_await                |   3.17   |                   平均写入IO请求的等待时间                   |                                                              |
|                 svctm                 |   0.71   |                     平均IO请求的服务时间                     |                                                              |
|                 %util                 |   0.12   |    设备的利用率，即设备处于活动状态的时间占总时间的百分比    |                                                              |

> 可通过观察一下字段的数值来了解系统的CPU负载情况：
>
> - 如果`%user`和`%system`的值比较高，说明系统主要受到用户进程和系统进程的影响；
> - 如果`%iowait`的值较高，说明系统大部分时间都在等待I/O操作完成；
> - 如果`%idle`的值接近零，说明系统的CPU资源被充分利用，而如果`%idle`的值较高，则说明系统CPU有较多空闲时间。
> - 从%util可知，该设备在一秒中有百分之几的时间用于IO操作。

## 2.5 显示当前系统网络连接和网络监听情况

> ```
> 命令：netstat -tulnp
> ```

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelHg3jRm9nRYDTNialCHXTDqskVSicU6cUDuyZh2XVz3bMRmqvpS2CaJzPQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)打印出来的信息说明：

|     **字段**     |                           **说明**                           |
| :--------------: | :----------------------------------------------------------: |
|      Proto       |                   显示协议类型，如TCP或UDP                   |
|      Recv-Q      |                 表示接收队列中的未读取字节数                 |
|      Send-Q      |                表示发送队列中的未发送字节数。                |
|  Local Address   |     表示本地地址和端口号，即服务器正在监听的地址和端口。     |
| Foreign Address  | 表示远程地址和端口号，即与本地地址建立的连接的远程主机地址和端口。 |
|      State       | 表示连接状态，如ESTABLISHED（已建立）、LISTEN（监听）、TIME_WAIT（等待关闭）等。 |
| PID/Program name |       表示与连接或监听端口相关联的进程的PID和程序名称        |

> 由上面信息可知：
>
> - **是否建立连接** ：通过State可知服务器是否与客户端建立了连接；
> - **监听端口** ：通过Local Address列中，可以找到正在监听的端口号以及关联的IP地址，这些是服务器正在监听的端口
> - **进程关联** ：通过`PID/Program name`列，可以查看与网络连接或监听端口相关联的进程的PID和程序名称，从而找到哪些进程在使用这些网络资源。

## 2.6 显示当前系统上运行的进程

> ```
> 命令：ps aux
> ```

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelHfKGzSKib6FFkAo2udPq8JSvXgqYp0vrz6hiad5gTU8Ny4mgibhYF1J0Mg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

打印出来的信息说明：

| **字段** |                           **说明**                           |
| :------: | :----------------------------------------------------------: |
|   USER   |          进程的用户名，表示该进程是由哪个用户启动的          |
|   PID    |               进程ID，唯一标识系统中的每个进程               |
|   %CPU   |              CPU使用率，表示进程占用CPU的百分比              |
|   %MEM   |             内存使用率，表示进程占用内存的百分比             |
|   VSZ    | 虚拟内存大小（Virtual Size），表示进程虚拟内存的大小，以KB为单位 |
|   RSS    | 常驻内存集（Resident Set Size），表示进程实际使用的物理内存大小，以KB为单位 |
|   TTY    |               控制终端，表示进程关联的控制终端               |
|   STAT   | 进程状态，包括运行状态（R）、睡眠状态（S）、僵尸状态（Z）等  |
|  START   |              进程启动时间，表示进程启动的时间点              |
|   TIME   |              CPU时间，表示进程累计占用CPU的时间              |
| COMMAND  |         进程的命令行，表示启动进程时使用的命令和参数         |

> **扩展：**
>
> 1）只显示包含指定进程名的行：ps aux | grep <进程名>
>
> 2）ps -ef 和 ps aux 两者都可用于列出系统的所有进程信息，但ps aux更适合快速查看当前系统中的进程情况。

# 3. 查看日志

## 3.1 通过`journalctl命令`查看系统日志

> 命令：`journalctl`

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelHtxj63Dseltb4wR5a3Qfu2WP3eqCZ19zenmzxSGLY6ic1xl1JBP3KZeg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

## 3.2 通过tail查看系统日志

> ```
> 查看日志文件多少行代码：tail -n [行数] [日志文件]
> ```

# 4. 服务状态

## 4.1 查看指定服务的状态

> ```
> 命令：systemctl status <service>
> ```

```
比如查看防火墙的状态：
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelH0cxMOIB7Jbzz16YydXv9dbc5MzLsmT0icWakIT0vkFeeGPhgwFouXrw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

## 4.2 查看已启用的服务

> ```
> 命令：systemctl list-unit-files --state=enabled
> ```

# 5. 网络状态

## 5.1 显示网络接口信息

> ```
> 命令：ifconfig` 或 `ip addr
> ```

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelHotpFFsCwib8QVA6UxvptfjqfiaxXlym44WcTLcdKtW2ib5arzDhk9Xw6w/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelHLiaibs14azicLicsSE64MWhbfaicwXsMof6Liauyeyje82sN1MaCRScj8ycg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

## 5.2 测试网络连通性

> 命令格式：`ping <IP地址或域名>`

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelHu7Gpu48ic6ZDvBvOrpI96mib4VCncdQB1iaTLagfEibGzB1MEib7MNSuVBQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)如果有类似以上的输出，则网络通畅了。

| **字段** |                           **说明**                           |
| :------: | :----------------------------------------------------------: |
| icmp_seq |  数据包的序列号，每个数据包都有一个唯一的序列号，以便于识别  |
|   ttl    | 数据包的生存时间（Time to Live），也称为跳数。它指示了数据包在网络中可以传递的最大路由器跳数。如果ttl值超过0而数据包还未到达目标，那么数据包会被丢弃 |
|   time   | 往返时间（Round-Trip Time，RTT），表示从发送数据包到收到回应数据包所花费的时间，单位是毫秒（ms） |

## 5.3 跟踪数据包的路由路径

> 命令格式：`traceroute <IP地址或域名>`

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelHyzVFIEU2XTfmm3uWkwFZsJohoEMNdMwdmTcbks479YabJLvcnZqmuQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)上面示例中，显示了从本地主机到目标主机（192.168.243.102）经过的1个路由器或中间节点的信息，包括它们的IP地址（192.168.243.102）、主机名（linux102）、以及数据包往返时间RTT（0.161 ms  0.132 ms  0.097 ms）。

## 5.4 查看网络IO

> 命令：nload

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelHPjrIXFJusBXkOGSRGDfsdl6d6ia7wtEunAxnyRnvBWC2kYrQyv3zibgg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

nload 默认分为上下两块：

上半部分：Incoming，是进入网卡的流量；

下半部分：Outgoing，是从这块网卡出去的流量。

参数详情表：

| 参数 |   描述   |
| :--: | :------: |
| Curr | 当前流量 |
| Avg  | 平均流量 |
| Min  | 最小流量 |
| Max  | 最大流量 |
| Ttl  | 总和流量 |

Curr当前网速 ，MAX 最大网速。当 curr 接近Max 时为负荷比较高的状态

# 6. 检查安全性

## 6.1  查看当前开放的网络连接，检查是否有异常连接

> ```
> 命令：ss -tulwn
> ```

![图片](https://mmbiz.qpic.cn/mmbiz_png/RyLXZtIaJxCqt0tJg5KmyquJe0ZyxelHuibn0AvYib9AosUnVEmk07e0LSmJtSMVy5J7kldicD07HkF3dEgchks6A/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)打印出来的信息说明：

|      **字段**      |                           **说明**                           |
| :----------------: | :----------------------------------------------------------: |
|       Netid        | 显示网络标识符，表示套接字类型。常见的Netid值有：*  **tcp** ：表示TCP协议，用于传输可靠的、面向连接的数据流。*  **udp** ：表示UDP协议，用于传输不可靠的、面向数据报的数据。*  **raw** ：表示原始套接字（Raw Socket），允许应用程序直接访问网络层的数据包。*  **icmp** ：表示ICMP协议，用于在IP网络上发送控制消息。*  **udplite** ：表示UDP Lite协议，类似于UDP，但提供了部分数据包校验和的功能。 |
|       State        | 显示套接字的状态。常见的状态包括 LISTEN（正在监听传入连接）、 ESTAB（套接字已建立连接）、 CLOSED（套接字已关闭）、 TIME-WAIT（等待关闭的连接的套接字）等 |
|       Recv-Q       |                      接收队列中的字节数                      |
|       Send-Q       |                      发送队列中的字节数                      |
| Local Address:Port |                       本地地址和端口号                       |
|    Peer Address    |                       远程地址和端口号                       |

# 7.其他

## 7.1 查看Oracle数据库资源使用情况

根据以下sql来查询表空间使用情况:

```
SELECT a.tablespace_name "表空间名",
total "表空间大小",
free "表空间剩余大小",
(total - free) "表空间使用大小",
total / (1024 * 1024 * 1024) "表空间大小(G)",
free / (1024 * 1024 * 1024) "表空间剩余大小(G)",
(total - free) / (1024 * 1024 * 1024) "表空间使用大小(G)",
round((total - free) / total, 4) * 100 "使用率 %"
FROM (
 SELECT tablespace_name, SUM(bytes) free
 FROM dba_free_space
 GROUP BY tablespace_name
) a,(
    SELECT tablespace_name, SUM(bytes) total
    FROM dba_data_files
    GROUP BY tablespace_name
) b
WHERE a.tablespace_name = b.tablespace_name;
```



如果表空间的使用率超过了80%（自定义预警值）的时候，则需要通过清理某些表数据来释放空间，或进行表空间扩展。
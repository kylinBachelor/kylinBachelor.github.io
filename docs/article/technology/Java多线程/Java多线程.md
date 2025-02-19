---
title: Java多线程
tags:
  - Java
  - 多线程
createTime: 2025/02/19 10:45:33
---



# Java 多线程



## 1. 什么是多线程

说到线程不得不说进程：

### 1.1 进程

**进程是计算机中的一个重要概念，指的是一个可并发执行的程序在给定的工作空间和数据集合上的一次执行过程。**‌它是操作系统进行资源分配和调度的一个独立或基本单位。进程是动态的，由操作系统创建并独立执行，可能在某个条件不足时被暂时“阻塞”，当条件满足时又被“唤醒”并继续执行，直到任务完成。进程具有生命周期，并在不同的状态之间动态转换。‌

解释比较晦涩难懂，可以先看下面这张图：

![image-20250219105941964](assets/image-20250219105941964.png)

对你没有看错，每一个应用程序就是一个进程。



### 1.2 线程

那什么是线程呢？

线程可以理解为在进程中独立运行的一系列的子任务，比如QQ.exe运行时，就有很多的子任务在同时运行，你可以同时下载文件，视频聊天，发送信息。这每一项的任务都可以理解为 **线程** 在工作。

使用多线程，可以在同一时间内运行更多不同种类的任务。



## 2. 多线程的使用

线程的创建只有一种方式就是使用Thread

### 2.1 继承Thread

```java
/** 线程要执行的任务代码如下 **/
public class MyThread extends Thread {
    @Override
    synchronized public void run() {
        System.out.println("第一个Thread");
    }
}


/** 运行类代码如下 **/
public class main {
    public static void main(String[] args) {
        MyThread myThread = new MyThread();
        Thread thread = new Thread(myThread);
        thread.start(); // 启动多线程
        System.out.println("运行结束了~！！！！！");
    }
}
```



### 2.2 实现Runable

```java
/** 线程要执行的任务代码如下 **/
public class MyRunable implements Runnable{
    @Override
    public void run() {
        System.out.println("runable运行中");
    }
}

/** 运行类代码如下 **/
public class main {
    public static void main(String[] args) {
        Runable myRunable = new MyRunable();
        Thread thread = new Thread(myRunable);
        thread.start();
        System.out.println("运行结束了~！！！！！");
    }
}
```



## 3. 线程的方法

### 3.1 isAlive()

作用：判断当前的线程是否处于活动状态。

```java
public class MyThread extends Thread {
    @Override
    synchronized public void run() {
        System.out.println("当前线程的活动状态为->" + this.isAlive());
    }
}


public class main {
    public static void main(String[] args) {
        Thread myThread = new MyThread();
        System.out.println("begin:" + myThread.isAlive() );
        myThread.start();
        System.out.println("end:" + myThread.isAlive() );
        System.out.println("运行结束了~！！！！！");
    }
}
```



### 3.2 sleep()  **不会释放锁**

作用：在指定的毫秒数内让当前“正在执行的线程休眠（暂停执行）。这个“正在执行的线程”是指this.currentThread()返回的线程。

> **注意**：sleep休眠是不会释放锁的

```java
public class MyThread extends Thread {
    @Override
    synchronized public void run() {
        try {
            Thread.sleep(2000l);
            Thread.get
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```



### 3.3 getId()

**作用**：获得线程的唯一标识



### 3.4 停止线程

#### 3.4.1 使用退出标志

​	即当run方法完成之后终止。



#### 3.4.2 使用stop方法

​	不推荐该方法，因为sotp和suspend及resume一样，都是作废过期的方法，使用他们可能会产生不可预料的后果



#### 3.4.3 使用interrupt方法



### 3.5 yield()

  **放弃当前的CPU资源**，将CPU让给其他的任务去占用。但是放弃的时间不确定，有可能刚刚放弃，马上又获得CPU的时间片。










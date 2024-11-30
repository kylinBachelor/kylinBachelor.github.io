---
title: "Java泛型"
aliases: 
tags: [Java]
description: "Java泛型"
createTime: 2024/11/30 14:15:41
draft: false
---



```java

类<K, V, T> ： 使用 类<类型k, 类型v, 类型 t> test = new 类<>()

类<K extend  父类或实现的接口>  ： K 必须是实现了父类或者接口的类

类<K extend 类 & 接口> ：  K 必须是实现类父类且实现了接口的类
    
类<K super 类> ： 和extend一样，其实就是反过来，K必须是某个类的父类或者类本身

```


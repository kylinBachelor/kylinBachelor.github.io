---
title: "Java反射-Reflection"
aliases: 
tags: [Java,反射]
description: "Java反射"
createTime: 2024/11/30 14:15:41
draft: false
---

# 获取Class对象的三种方式

```java
// 第一种方式  类名.class
Class<User> userClass = User.class;
// 第二种方式 对象.getClass();
User user  = new User();
Class<?> userClass = user.getClass();
// 第三种方式  Class.forName("类全路径");  类的静态块会立马被执行
Class<?> strClass = Class.forName("java.lang.String");
```

# 获取类声明的字段

```java
// 获得类声明的字段，获得public  private的都可以，但是无法获得父类型的字段
Field[] fileds = userClass.getDeclaredFields();
// 只获得public字段，包括父类的public字段
Field[] fields = userClass.getFields();
// 若要获得父类的所有字段先获得父类对象然后获得父类的所有字段
Field[] fieldsFu = userClass.getSuperFields().getDeclaredFields();
```

## 方法概述

总的来说，带Declared的可获取到所有(包括父类)public，不带Declared的可获取到本类public的字段

```java
getDeclaredFields();              getFields();
getDeclaredField();               getField();
getDeclaredMethods();             getMethods();
getDecalreMethod();               getMethod();
getDeclareConstructors();         getConstructors();
getDeclareConstructor();          getConstructor();
getDeclareAnnotations();          getDnnotations();
getDeclareAnnotation();           getnnotation();
```


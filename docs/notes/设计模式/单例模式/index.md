---
title: "单例模式"
tags: ["设计模式"]
description: "单例模式"
createTime: 2024/11/30 14:15:41
---


## 饿汉式（静态常量）

1.  构造器私有化，防止使用new构造对象
2.  类的内部创建对象
3.  向外暴露一个静态的公共方法：getInstance

<!--listend-->

```java
class Singleton {
    // 1. 构造器私有化，外部无法new
    private Singleton() {}
    // 2. 本类内部创建实例对象
    private final static Singleton instance = new Singleton();
    // 3. 提供一个公有的静态方法，返回实例对象
    public static Singleton getInstance() {
        return instance;
    }
}
```


### 优缺点

1.  优点：这种写法比较简单，就是在类装载的时候完成了实例化，避免了线程同步问题。
2.  缺点：在类装载的时候完成实例化，没有达到lazy loading的效果，如果从始至终未使用过这个实例，则会造成内存的浪费。
3.  这种方式基于classLoader机制避免了多线程的同步问题，不过，instance在类装载时就实例化，在单例模式中大多数都是调用getInstance方法，但是导致类装载的原因有很多，因此不能确定有其它的方式（或者其它的静态方法）导致类装载，这时候
    初始化instance就没有达到lazy loading的效果
4.  总而言之，这种单例模式可用，可能造成内存的浪费


## 饿汉式（静态代码块）

```java
class Singleton {
    // 1. 构造器私有化
    private Singleton() {}
    // 2. 本类内部创建实例对象
    private static Singleton instance;
    // 3. 在静态代码块中创建单例对象
    static {
        instance = new Singleton();
    }
    // 4. 提供一个公有的静态方法，返回实例对象
    public static Singleton getInstance() {
        return instance;
    }
}
```


### 优缺点

1.  这种方式和使用静态常量的方式其实类似的，只不过将实例化的过程放在了静态代码块之中了，也是在类装载的时候，就执行静态代码块之中的代码，初始化类的实例。优缺点和静态常量方式是一样的。
2.  这种单例模式可用，但是可能造成内存的浪费。


## 懒汉式（线程不安全）

```java
class Singleton {
    private static instance;
    private Singleton() {}
    // 提供一个公有的静态方法，当使用到该方法时才去创建instance
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```


### 优缺点

1.  起到了lazy loading的效果，但是只能在单线程下使用。
2.  如果在多线程下，一个线程进入了判空语句块，还未来得及往下执行，另一个线程也通过了这个语句，这时便会产生多个实例，所以在多线程环境下不可使用这种方式。


## 懒汉式（线程安全，同步方法）

```java
class Singleton {
    private static instance;
    private Singleton() {}
    // 提供一个公有的静态方法，当使用到该方法时才去创建instance
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```


### 优缺点

1.  解决了 **线程安全** 的问题
2.  效率太低了，每个线程想要获得类的实例的时候，执行getInstance()都要进行同步。而其实这个方法执行一次就够了。


## 懒汉式（线程安全，同步代码块）

```java
class Singleton {
    private static Singleton instance;
    private Singleton() {}
    // 提供一个公有的静态方法，当使用到该方法时才去创建instance
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized(Singleton.class) {
                instance = new Singleton();
            }
        }
        return instance;
    }
}
```


### 优缺点

1.  这种方式并不能起到线程同步的作用
2.  **开发中不能使用**


## 双重检查

```java
class Singleton {
    private static volatile Singleton instance;
    private Singleton() {}
    // 提供一个公有的静态方法，当使用到该方法时才去创建instance
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized(Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```


## 静态内部类

```java
class Singleton {
    private static volatile Singleton instance;
    // 构造器私有化
    private Singleton() {}
    // 写一个静态内部类，该类中有一个静态属性 Singleton
    private static class SingletonInstance {
        private static final Singleton INSTANCE = new Singleton();
    }
    // 提供一个公有的静态方法，直接返回SingletonInstance.INSTANCE
    public static synchronized Singleton getInstance () {
        return SingletonInstance.INSTANCE;
    }
}
```


### 优缺点

1.  这种方式采用了类装载的机制保证初始化实例时只有一个线程。
2.  静态内部类方式在Singleton类被装载时并不会立即实例化，调用getInstance方法，才会装载SingletonInstance类，从而完成Singleton的实例化
3.  类的静态属性只会在第一次加载类的时候初始化，所以在这里JVM帮我们保证了线程的安全性，在类进行初始化时，别的线程是无法进入的
4.  避免了线程不安全，利用静态内部类特点实现延迟加载，效率高


## 枚举

```java
enum Singleton {
    INSTANCE;
    public void sayOK() {
        System.out.println("is ok-----");
    }
}
```


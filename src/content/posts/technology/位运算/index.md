---
title: "Java位运算"
tags: 
  - 位运算
categories:
  - Java
description: "Java位运算"
createTime: 2025-08-11 14:15:41

---



## 1. 与预算

```java
public class 与运算 {

	public static void main(String[] args) {
		// 与运算：只有当两个对应位都为 1 时，结果位才为 1，否则为 0
		int a = 5; // 0101
        int b = 3; // 0011
        int result = a & b; // 0001
        System.out.println("5 & 3 = " + result);

	}
}
```



## 2 .或运算

```java
public class 或运算 {
	public static void main(String[] args) {
		// 或运算的规则是：只要两个对应位中有一个为 1，结果位就为 1，只有当两个位都为 0 时，结果位才为 0。
		int a = 5; //  0101
        int b = 3; //  0011
        int result = a | b; //  0111
        System.out.println("5 | 3 = " + result);
	}
}

```



## 3. 异或运算

```java
public class 异或运算 {
	public static void main(String[] args) {
		// 异或运算的规则是：当两个对应位不同时，结果位为 1，相同时结果位为 0。
		 int a = 5; // 0101
        int b = 3; // 0011
        int result = a ^ b; //  0110
        System.out.println("5 ^ 3 = " + result);
	}
}
```



## 4. 取反运算

```java
public class 取反运算 {
	public static void main(String[] args) {
		// 取反运算会将每一位取反，即 0 变为 1，1 变为 0。
		int a = 5; //  0101
        int result = ~a; //  1010
        System.out.println("~5 = " + result);
	}
}
```



## 5. 左移运算

```java
public class 左移运算 {

	public static void main(String[] args) {
		// 左移运算会将二进制位向左移动指定的位数，右边空出的位用 0 填充。
		int a = 5; //  0101
        int result = a << 2; //  010100
        System.out.println("5 << 2 = " + result);

	}

}
```



## 6. 右移运算

```java
public class 右移运算 {
	public static void main(String[] args) {
		// 右移运算会将二进制位向右移动指定的位数，左边空出的位用符号位填充（正数用 0 填充，负数用 1 填充）。
		int a = 5; //  0101 
        int result = a >> 1; //  0010 
        System.out.println("5 >> 1 = " + result);
	}
}
```



## 7.无符号右移运算

```java
public class 无符号右移运算 {

	public static void main(String[] args) {
		int a = -5; //  11111111111111111111111111111011
        int result = a >>> 1; //  01111111111111111111111111111101
        System.out.println("-5 >>> 1 = " + result);
	}

}

```



## 8. 实际应用

```java
class 权限 {
	public static final int READ_PERMISSION = 1; // 0001
    public static final int WRITE_PERMISSION = 2; // 0010
    public static final int EXECUTE_PERMISSION = 4; // 0100

    private int permissions;

    public 权限() {
        this.permissions = 0;
    }

    // 添加权限
    public void addPermission(int permission) {
        permissions = permissions | permission;
    }

    // 检查权限
    public boolean hasPermission(int permission) {
        return (permissions & permission) == permission;
    }

    public static void main(String[] args) {
    	权限 manager = new 权限();
        manager.addPermission(READ_PERMISSION);
        manager.addPermission(WRITE_PERMISSION);
        System.out.println( manager.hasPermission(READ_PERMISSION));
        System.out.println(manager.hasPermission(EXECUTE_PERMISSION));
    }

}
```





```java
class 交换变量值 {
	public static void main(String[] args) {
	    int a = 5;
        int b = 3;
        System.out.println(" a = " + a + ", b = " + b);
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
        System.out.println(" a = " + a + ", b = " + b);
	}
}

/**
a = a ^ b -> 00101 ^ 00011 = 00110 6
b = a ^ b -> 00110 ^ 00011 = 00101 5
a = a ^ b -> 00110 ^ 00101 = 00011 3
*/
```

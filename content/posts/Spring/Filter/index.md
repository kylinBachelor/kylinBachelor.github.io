---
title: "Filter"
aliases: 
tags: [Spring]
description: "Filter"
date: 2024-06-15T14:37:42+08:00
draft: true
---

# Spring Security

## 1. 生命周期

> === Filter作为特殊的API,其实由开发者完成，但Filter对象必须由规范实现者持有

- [x] xjakarta.servlet.Filter接口设计了三个声明周期的方法 init   destory doFilter

- [x] init    --- 规范实现者创建Filter对象时会调用一次init()方法并传入FilterConfig

- [x] destory --- 规范实现者销毁Filter对象之前会调用destory()

- [x] doFilter -- 规范实现者会在Filter URL 匹配当次请求时调用doFilter()

- [x] FilterChain --- 过滤器链对象用于控制当前请求继续向下执行

- [x] init | destory 被手动调用时 不视为声明周期

+ jakarta.servlet.Filter

```java
package jakarta.servlet;

import java.io.IOException;

public interface Filter {
    default void init(FilterConfig filterConfig) throws ServletException {
    }

    void doFilter(ServletRequest var1, ServletResponse var2, FilterChain var3) throws IOException, ServletException;

    default void destroy() {
    }
}
```

> === 官方为了便于开发者使用Filter组件，提供了HttpFilter的过渡实现

+ jakarta.servlet.http.HttpFilter

    ```java
    public abstract class HttpFilter extends GenericFilter {
        private static final long serialVersionUID = 7478463438252262094L;
    
        public HttpFilter() {
        }
    
        public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
            if (req instanceof HttpServletRequest && res instanceof HttpServletResponse) {
                this.doFilter((HttpServletRequest)req, (HttpServletResponse)res, chain);
            } else {
                throw new ServletException("non-HTTP request or response");
            }
        }
    
        protected void doFilter(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws IOException, ServletException {
            chain.doFilter(req, res);
        }
    
    ```

## 2. 注册方式

> Filter相比于Servlet组件【3种】【Filter注册方式有以下四种】

### web.xml

### @webFilter

### ServletContext URL

### ServletContext Servlet




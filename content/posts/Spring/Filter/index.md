---
title: "Filter"
aliases: 
tags: [Spring]
description: "Filter"
date: 2024-06-15T14:37:42+08:00
draft: false
---

# Filter

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

> === Filter相比于Servlet组件【3种】【Filter注册方式有以下四种】

- [x] web.xml
- [x] @WebFilter
- [x] ServletContext URL
- [x] ServletContext Servlet

### 2.1 web.xml

> === 通过将Filter类配置到web.xml完成Filter注册

+ **CustomWebFilter**.java

    ```java
    public class CustomWebFilter extend HttpFilter {
        protected void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain chain) {
            System.out.println("customFilter.....");
            chain.doFilter(response, response);
            
        }
    }
    ```

+ **Web.xml**

    ```xml
    <filter>
        <description>CustomWebFilter  for  something … </description>
        <display-name>CustomWebFilter√ display-name></display-name>
        <filter-name>CustomWebFilter√filter-name></filter-name>
        <filter-class>com.example.filter.CustomWebFilter></filter-class>
        <async-supported>false</async-supported>
        <init-param>
            <param-name>init-key-name</param-name>
            <param-value>init-key-value</param-value>
        </init-param>
        <filter-mapping>
            <filter-name>CustomWebFilter</filter-name>
            <url-pattern>/*</url-pattern>
    		<!-- <servlet-name>servletName</servlet-name> --> 
            <!-- <dispatcher>FORWARD</dispatcher> -->
        </filter-mapping>
    </filter>
    ```

    > :warning:
    >
    > 1. web.xml方式下Filter对象的创建必须由规范实现者反射完成 如： Tomcat 
    > 2. 基于web.xml必须为Filter提供<span style='color: red'>无参构造方法</span>

+ **jakarta.servlet.DispatcherType Filter拦截器的类型**

    ```java
    package jakarta.servlet;
    
    public enum DispatcherType {
        FORWARD,
        INCLUDE,
        REQUEST,
        ASYNC,
        ERROR;
    
        private DispatcherType() {
        }
    }
    ```

    

+ **jakarta.servlet.FilterConfig 初始化Filter获取拦截器的相关信息**

    ```java
    public interface FilterConfig {
        
        String getFilterName();
    
        ServletContext getServletContext();
    
        String getInitParameter(String var1);
    
        Enumeration<String> getInitParameterNames();
    }
    ```

    

### 2.2 @WebFilter

> === @WebFilter注解由Servlet3.0版本提供，为了基于JAVA配置提代web.xml

```java
@WebFilter(
    description = "Filter some description",
    displayName = "filter",
    initParams = {@WebInitParam(name="kye1", value="value1")},
    urlPatterns = "/*",
    asyncSupported = true,
    servletNames = {"servlet1", "servlet2"},
    dispatcherTypes = {DispatcherType.REQUEST})
)
public class CustomWebFilter extends HttpFilter{
    
    @Override
    protected void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain chain) {
        System.out.println("do something......");
        chain.doFilter(request, response);
    }
    
}
```

> :warning:Warning:
>
> 注解的方式也必须提供Filter的无参构造方法。

### 2.3 ServletContext URL

> === Servlet 3.0 开始 允许以编程 API 方式 完成 Filter 组件注册

- [x] ServletContext 注册 Filter 组件必须在项目初始化之前 通常是 SCI 引擎方式注册

+ **CustomWebFilter[以下代码逻辑正确但是时机不对]**

    ~~~java
    package com.example.filter;
    import jakarta.servlet.DispatcherType;
    import jakarta.servlet.FilterChain;
    import jakarta.servlet.FilterRegistration;
    import jakarta.servlet.ServletContext;
    import jakarta.servlet.ServletException;
    import jakarta.servlet.http.HttpFilter;
    import jakarta.servlet.http.HttpServletRequest;
    import jakarta.servlet.http.HttpServletResponse;
    import java.io.IOException;
    import java.util.EnumSet;
    public class CustomWebFilter extends HttpFilter {
        @Override
        protected void doFilter(HttpServletRequest request,
                                HttpServletResponse response,
                                FilterChain chain) throws IOException,ServletException {
            System.out.println("do something . ");
            ServletContext servletContext = request.getServletContext();
            // FilterRegistration.Dynamic registration =
            // servletContext.addFilter("CustomWebFilter", CustomWebFilter.class);
            FilterRegistration.Dynamic registration =
                servletContext.addFilter("CustomWebFilter", new
                                         CustomWebFilter());
            registration.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, " /* ");
            chain.doFilter(request, response);
        }
    }
    ~~~

    > :warning:
    >
    > 1. 走到Servlet | Filter 生命周期方法中，意味着项目早已完成了初始化，无法更新ServletContext
    > 2. 动态注册Filter显然可以不再提供无参构造方法,因为你可以自己去new一个Filter
    > 3. isMatchAfter 参数表示决定多个相同 URL Filter 匹配规则

    

### 2.4 ServletContext Servlet

> === Filter 还允许不指定 URL mapping 但必须指定 Servlet 的拦截方式

- [x] Filter 不指定 URL 方式时 | 必须指定拦截那些 Servlet

+ **OtherWebFilter**

    ~~~java
    public class OtherWebFilter extends HttpFilter {
        @Override
        protected void doFilter(HttpServletRequest request,
                                HttpServletResponse response,
                                FilterChain chain) throws IOException,ServletException {
            
            System.out.println("do something . ");
            ServletContext servletContext = request.getServletContext();
            FilterRegistration.Dynamic registration =
                servletContext.addFilter("CustomWebFilter", CustomWebFilter.class);
            registration.addMappingForServletNames(
                EnumSet.allOf(DispatcherType.class),
                true,
                "servlet1", "servlet2"
            );
            chain.doFilter(request, response);
        }
    }
    ~~~

    

> :notebook:
>
> - [x] 对于没有无参构造的 Filter 而言 你只能通过 API 方式动态完成注册
> - [x] spring-webmvc : org.springframework.web.filter.CorsFilter [没有无参构造]

## 3. ServletContainerInitializer

> === ServletContainerInitializer 简称为SCI引擎 Servlet规范预定机制

### 3.1 SCI机制

- [x] SCI引擎允许项目启动之前，定制初始化行为，且可获取**ServletContext**
- [x] SCI需声明 **META-INF/services/jakarta.servlet.ServletContainerInitializer**
    - 内容为**a.b.c.ServletContainerInitializerImpl [实现类全路径名称]**

+ **jakarta.servlet.ServletContainerInitializer**

    ```java
    package jakarta.servlet;
    import java.util.Set;
    
    public interface ServletContainerInitializer {
        public void onStartup(Set<Class<? > classes,ServletContext ctx) throws ServletException;
    }
    ```

+ **com.sci.WebComponentInitializer**

    ```java
    public class WebComponentInitializer implements ServletContainerInitializer {
        @Override
        public void onStartup(Set<Class<? > initializerClasses, ServletContext servletContext) throws ServletException{
            assert initializerClasses = null;
            FilterRegistration.Dynamic registration = servletContext.addFilter("s", CustomWebFilter.class);
            registration.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class),true, "/* ");
            // do other things ...
        }
    }
    ```

    > :warning:
    >
    > - [x] 直接实现 ServletContainerInitializer | initializerClasses 参数总是为 null

### 3.2 **@HandlerType**

> === **@HandlesTypes 仅能用在 SCI 引擎处获取指定接口类型及其子类型给到initializerClasses**

+ **com.sci.WebInitializer**

    ```java
    package com.sci;
    import jakarta.servlet.ServletContext;
    import jakarta.servlet.ServletException;
    
    public interface WebInitializer {
        void onStartup(ServletContext servletContext) throws ServletException;
    }
    ```

    

+ **com.sci.WebComponentInitializer**

    ```java
    package com.sci;
    import jakarta.servlet.ServletContainerInitializer;
    import jakarta.servlet.ServletContext;
    import jakarta.servlet.ServletException;
    import jakarta.servlet.annotation.HandlesTypes;
    import java.lang.reflect.Constructor;
    import java.lang.reflect.InvocationTargetException;
    import java.lang.reflect.Modifier;
    import java.util.Set;
    
    @HandlesTypes(WebInitializer.class)
    public class WebComponentInitializer implements ServletContainerInitializer {
        
        @Override
        public void onStartup(Set<Class<? > initializerClasses,
                              ServletContext servletContext) throws ServletException
        {
            assert initializerClasses = null;
            for (Class<?> initializerClass : initializerClasses) {
                if (!initializerClass.isInterface()
                    &
                    !Modifier.isAbstract(initializerClass.getModifiers())
                    &
                    WebInitializer.class.isAssignableFrom(initializerClass))
                {
                    Constructor<?>[] constructors =
                        initializerClass.getDeclaredConstructors();
                    for (Constructor<?> constructor : constructors) {
                        if (constructor.getParameterCount() = 0) {
                            try {
                                    WebInitializer o = (WebInitializer)
                                    constructor.newInstance();
                                o.onStartup(servletContext);
                            } catch (InstantiationException |
                                     IllegalAccessException |
                                     InvocationTargetException e) {
                                throw new RuntimeException(e);
                            }
                        }
                    }
                }
            }
        }
    }
    ```

    

> :notebook:
>
> 1. initializerClasses 对应 @HandlesTypes 注解接口全部子类型
> 2. @HandlesTypes 机制显然有助于分散 多个初始化逻辑动作 良好组织代码封装

## 4. 优先级

> === Filter 仅在多个 Filter 同时匹配一个 URL 请求时才具备优先级概念

1. aFilter /a - 仅匹配 /a
2. bFilter /b - 仅匹配 /b
3. cFilter /a * - /a 任意 此时访问 /a 则顺序为 aFilter > cFilter
4. dFilter *
5. eFilter *
6. 当Filter URL Mapping 且都能匹配当前请求 执行顺序如下
7. web.xml <filter-mapping> 先后声明顺序决定
8. @WebFilter Filter 类名称字母先后顺序 dFiler eFilter 则 dFiler 先
9. ServletContext 受到注册顺序 & isMatchAfter 参数影响




























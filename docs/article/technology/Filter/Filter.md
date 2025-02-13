---
title: Jakarta Filter
tags:
  - Filter
createTime: 2025/02/14 18:45:31
---

# Jakarta Filter

*web组件，过滤器，监听器 这三大组件必须在容器启动之前注册。`必须必须必须`*

## 1. 介绍

过滤器 是Java web 三大组件之一、执行优先级比 web组件（servlet）高 `[若是拦截到]`，小插曲：`（尽量避免在 SpringMVC 环境去使用 Filter、可使用 SpringMVC 拦截实现相同功能）`



```java
package jakarta.servlet;

import java.io.IOException;

public interface Filter {
    // Filter初始化
    default void init(FilterConfig filterConfig) throws ServletException {
    }
	
    // 实现过滤的逻辑
    void doFilter(ServletRequest var1, ServletResponse var2, FilterChain var3) throws IOException, ServletException;
	
    // 销毁Filter
    default void destroy() {
    }
}
```



过滤器 API 由 jakarta.servlet 包中的 Filter、FilterChain 和 FilterConfig 接口定义。您可以通过实现 Filter 接口来定义过滤器。

Filter 接口中最重要的方法是 doFilter，它传递 request、response 和 filter 链对象。

过滤器是一个对象，它可以转换请求或响应的标头和/或内容。过滤器与 Web 组件的不同之处在于，过滤器本身通常不会创建响应。相反，过滤器提供的功能可以 “附加” 到任何类型的 Web 资源。因此，过滤器不应依赖于它充当过滤器的 Web 资源;这样，它可以由多种类型的 Web 资源组成。

过滤器可以执行的主要任务如下：

1. 查询请求并采取相应措施。
2. 阻止请求和响应对进一步传递。
3. 修改请求标头和数据。您可以通过提供请求的自定义版本来实现此目的。
4. 修改响应标头和数据。您可以通过提供响应的自定义版本来实现此目的。
5. 与外部资源交互。

过滤器的应用包括身份验证、日志记录、图像转换、数据压缩、加密、标记化流、XML 转换等。

您可以将 Web 资源配置按特定顺序按零个、一个或多个筛选条件链进行筛选。此链在部署包含组件的 Web 应用程序时指定，并在 Web 容器加载组件时实例化。



## 2. Filter有四种注册方式

1. web.xml
2. 注解
3. API
4. 指定注册到servlet，意为我这个过滤器只过滤这个servlet的请求

### 2.1 web.xml

```xml
<!-- 定义Filter -->
<filter>
    <filter-name>filterName</filter-name>
    <filter-class>x.y.z.filterName</filter-class>
</filter>

<!-- filter过滤映射 -->
<filter-mapping>
    <filter-name>filterName</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```





### 2.2 注解

使用 @WebFilter 注释在 Web 应用程序中定义过滤器。此注释在类上指定，并包含有关正在声明的过滤器的元数据。带注释的过滤器必须至少指定一个 URL 模式。这是通过在 Comments 上使用 urlPatterns 或 value 属性来完成的。所有其他属性都是可选的，具有默认设置。当注释上的唯一属性是 URL 模式时，请使用 value 属性;当还使用其他属性时，请使用 urlPatterns 属性。

用 `@WebFilter` 注释注释的类必须实现 `jakarta.servlet.Filter` 接口。

要将配置数据添加到过滤器中，请指定 @WebFilter 注解的 initParams 属性。initParams 属性包含 @WebInitParam 注释。以下代码片段定义了一个过滤器，并指定了初始化参数：

```java
import jakarta.servlet.Filter;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.annotation.WebInitParam;

@WebFilter(filterName = "TimeOfDayFilter", urlPatterns = {"/*"},
initParams = {@WebInitParam(name = "mood", value = "awake")})
public class TimeOfDayFilter implements Filter {
    ...
}
```



```java
package com.example.mvc.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebFilter("/*")
public class CustomFilter extends HttpFilter {

    @Override
    protected void doFilter(HttpServletRequest request, 
                            HttpServletResponse response, 
                            FilterChain chain) throws IOException, ServletException {
        
        super.doFilter(request, response, chain);
    }
}
```



### 2.3 API

使用ServletContext注册Filter

```java

ServletContext servletContext = `通过某些机制比如SCI获得 ServletContext`
FilterRegistration.Dynamic registration = servletContext.addFilter("filterName", "x.y.z.FilterName");

registration.addMappingForServletNames(拦截请求类型, true, "指定拦截的servlet名称");
```



### 2.4 指定注册到servlet

```java
ServletContext servletContext = `通过某些机制比如SCI获得 ServletContext`
FilterRegistration.Dynamic registration = servletContext.addFilter("filterName", "x.y.z.FilterName");

registration.addMappingForServletNames(拦截请求类型, true, "指定拦截的servlet名称");
```


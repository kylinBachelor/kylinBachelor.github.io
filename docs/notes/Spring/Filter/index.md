---
title: "Filter"
aliases: 
tags: [Spring]
description: "Filter"
createTime: 2024/11/30 14:15:41
draft: false
---

# Filter

> === jakarta.servlet.Filter 是 servlet 的规范重要组件之一 【拦截请求】

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



## 1. 生命周期

> === Filter [init | doFilter | destroy] 对应三个生命周期行为

### 1.1 init

- [x] Tomcat 持有该 Filter 对象后 利用该对象 调用 init 方法 [并传入 FilterConfig]
- [x] Filter init 初始化方法没有延迟概念 [Servlet 则可延迟到第一次请求]

```java
public void init(FilterConfig filterConfig) throws ServletException {}
```



### 1.2 destory

- [x] Tomcat 销毁该 Filter 对象时 先利用该对象 调用 destroy 方法

```java
public void destroy() {}
```



### 1.3 doFilter

- [x] doFilter仅当该Filter匹配到请求时执行 | FilterChain 具有放行机制保证【规范保证】
- [x] 若开发者自定义实现 FilterChain 则无法保证放行机制

```java
protected void doFilter(HttpServletRequest req,
                        HttpServletResponse res,
                        FilterChain chain)
    throws IOException, ServletException {
    chain.doFilter .
}
```

## 2. 注册方式

> === Filter 注册可分为配置式和编程式，具体可划分为四种注册方式（Servlet是三种）

- [x] 配置式注册：由Tomcat反射创建Filter对象，因此必须提供无参的构造方法
- [x] 编程式注册：必须在ServletContext初始化结束之前完成注册





### 2.1 配置式注册

#### 2.1.1 web.xml

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

    > [!warning]
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

    

#### 2.2.2 @WebFilter

> === @WebFilter注解由Servlet3.0版本提供，为了基于JAVA配置替代web.xml

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

    > [!warning]
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

    

> [!note]
>
> - [x] 对于没有无参构造的 Filter 而言 你只能通过 API 方式动态完成注册
> - [x] spring-webmvc : org.springframework.web.filter.CorsFilter [没有无参构造]

### 2.2 ServletContainerInitializer

> === ServletContainerInitializer 简称为SCI引擎 Servlet规范预定机制

#### 2.2.1 SCI机制

- [x] SCI引擎允许项目启动之前，定制初始化行为，且可获取**ServletContext**
- [x] SCI需声明 **META-INF/services/jakarta.servlet.ServletContainerInitializer**
    + 内容为**a.b.c.ServletContainerInitializerImpl [实现类全路径名称]**
- [x] ServletContainerInitializer 一般用于 servelt | Filter 注册

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

#### 2.2.2 **@HandlerType**

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

    

> [!note]
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
7. web.xml `<filter-mapping>` 先后声明顺序决定
8. @WebFilter Filter 类名称字母先后顺序 dFiler eFilter 则 dFiler 先
9. ServletContext 受到注册顺序 & isMatchAfter 参数影响



## 5. Spring-webMvc

> === spring-webMvc  |  spring-web 是spring框架的web功能模块而非框架

- [x] spring-web抽象  |  封装web http相关的技术基础的API
- [x] spring-webmvc  围绕servlet.api 规范进行实现的

+ **Dependendy**

    ```xml
    <dependency>
        <groupId>org.springframework </groupId>
        <artifactId>spring-webmvc </artifactId>
        <version>6.1.8 </version>
    </dependency>
    ```

### 5.1 OncePerRequestFilter

> === OncePerRequestFilter Filter 的实现之一 保证规范实现外的单次请求仅执行一次

+ **org.springframework.web.filter.GenericFilterBean**

    ```java
    public abstract class GenericFilterBean implements
        Filter,
        BeanNameAware,
        EnvironmentAware,
        EnvironmentCapable,
        ServletContextAware,
        InitializingBean,
        DisposableBean {
        public final void init(FilterConfig filterConfig) throws ServletException {
            // 已实现
        }
    }
    ```

+ **org.springframework.web.filter.OncePerRequestFilter**

    ```java
    // 根据封装逻辑 你需要实现 doFilterInternal 生命周期
    public abstract class OncePerRequestFilter extends GenericFilterBean {
        public final void doFilter(ServletRequest request,
                                   ServletResponse response,
                                   FilterChain filterChain)
            throws ServletException, IOException {
            // ...
            doFilterInternal(request, response, filterChain);
        }
        // 子类需要实现这个 doFilterInternal
        protected abstract void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException;
    }
    ```

    

### 5.2 **CharacterEncodingFilter**

> === spring-web 抽象并实现编码控制过滤器

+ **org.springframework.web.filter.CharacterEncodingFilter**

    ```java
    public class CharacterEncodingFilter extends OncePerRequestFilter {
        private String encoding;
        private boolean forceRequestEncoding = false;
        private boolean forceResponseEncoding = false;
    }
    ```

    > [!note]
    >
    > - [x] request.setCharacterEncoding(encoding) - 仅 POST 有效 [GET 需 URL 参数转换]
    >
    > - [x] response.setCharacterEncoding(encoding) - 不区分请求方式
    
    

### 5.3 CorsFilter

> === spring-web 提供的跨域 filter 处理 [CorsFilter 只能通过 API 方式注册]

+ **org.springframework.web.filter.CorsFilter**

    ```java
    public class CorsFilter extends OncePerRequestFilter {
        private final CorsConfigurationSource configSource;
        private CorsProcessor processor = new DefaultCorsProcessor();
        public CorsFilter(CorsConfigurationSource configSource) {
            Assert.notNull(configSource, "CorsConfigurationSource must not benull");
            this.configSource = configSource;
        }
    }
    ```

    > [!note]
    >
    > 1. CorsFilter 会根据 request 对象进行跨域判断和处理
    > 2. **CorsFilter 会根据 request 对象进行跨域判断和处理**



+ **CorsFilter:doFilterInternal**

    ```java
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse
                                    response,
                                    FilterChain filterChain) throws ServletException, IOException {
        CorsConfiguration corsConfiguration =
            this.configSource.getCorsConfiguration(request);
        boolean isValid = this.processor.processRequest(corsConfiguration, request,
                                                        response);
        if (!isValid | CorsUtils.isPreFlightRequest(request)) {
            return;
        }
        filterChain.doFilter(request, response);
    }
    ```

+ **org.springframework.web.cors.DefaultCorsProcessor**

    ```java
    import java.io.IOException;
    import java.nio.charset.StandardCharsets;
    import java.util.ArrayList;
    import java.util.Collection;
    import java.util.List;
    import jakarta.servlet.http.HttpServletRequest;
    import jakarta.servlet.http.HttpServletResponse;
    import org.apache.commons.logging.Log;
    import org.apache.commons.logging.LogFactory;
    import org.springframework.http.HttpHeaders;
    import org.springframework.http.HttpMethod;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.server.ServerHttpRequest;
    import org.springframework.http.server.ServerHttpResponse;
    import org.springframework.http.server.ServletServerHttpRequest;
    import org.springframework.http.server.ServletServerHttpResponse;
    import org.springframework.lang.Nullable;
    import org.springframework.util.CollectionUtils;
    public class DefaultCorsProcessor implements CorsProcessor {
        private static final Log logger = LogFactory.getLog(DefaultCorsProcessor.class);
        static final String ACCESS_CONTROL_REQUEST_PRIVATE_NETWORK ="Access-Control-Request-Private-Network";
        static final String ACCESS_CONTROL_ALLOW_PRIVATE_NETWORK = "Access-ControlAllow-Private-Network";
        @Override
        @SuppressWarnings("resource")
        public boolean processRequest(@Nullable CorsConfiguration config,
                                      HttpServletRequest request,
                                      HttpServletResponse response) throws IOException {
            Collection<String> varyHeaders = response.getHeaders(HttpHeaders.VARY);
            if (!varyHeaders.contains(HttpHeaders.ORIGIN)) {
                response.addHeader(HttpHeaders.VARY, HttpHeaders.ORIGIN);
            }
            if (!varyHeaders.contains(HttpHeaders.ACCESS_CONTROL_REQUEST_METHOD)) {
                response.addHeader(HttpHeaders.VARY,
                                   HttpHeaders.ACCESS_CONTROL_REQUEST_METHOD);
            }
            if (!varyHeaders.contains(HttpHeaders.ACCESS_CONTROL_REQUEST_HEADERS)) {
                response.addHeader(HttpHeaders.VARY,
                                   HttpHeaders.ACCESS_CONTROL_REQUEST_HEADERS);
            }
            if (!CorsUtils.isCorsRequest(request)) {
                return true;
            }
            if (response.getHeader(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN) = null)
            {
                logger.trace("Skip: response already contains \"Access-ControlAllow-Origin\"");
                return true;
            }
            boolean preFlightRequest = CorsUtils.isPreFlightRequest(request);
            if (config = null) {
                if (preFlightRequest) {
                    rejectRequest(new ServletServerHttpResponse(response));
                    return false;
                }
                else {
                    return true;
                }
            }
            return handleInternal(new ServletServerHttpRequest(request),
                                  new ServletServerHttpResponse(response),
                                  config,
                                  preFlightRequest);
        }
    }
    ```

    > [!note]
    >
    > 1. spring-webmvc 提供的 Filter 也是人提供的 同样需要注册 [注册给 Tomcat]
    > 2. Filter 作为 Spring 容器对象 通常没有意义[方便你取得该对象] Spring 不会帮你注册
    > 3. Filter 作为 Spring 容器对象 在 SpringBoot 环境会利用 SCI 帮你注册
    > 4. SpringBoot 环境你应该使用 SpringBoot 提供的 SCI 机制注册 Web 组件

### 5.4 **SpringServletContainerInitializer**

> === spring-web 提供的 SCI 引擎 可完成 spring-webmvc 环境初始化 | Web组件注册

+ **org.springframework.web.SpringServletContainerInitializer**

    ```java
    import java.lang.reflect.Modifier;
    import java.util.ArrayList;
    import java.util.Collections;
    import java.util.List;
    import java.util.ServiceLoader;
    import java.util.Set;
    import jakarta.servlet.ServletContainerInitializer;
    import jakarta.servlet.ServletContext;
    import jakarta.servlet.ServletException;
    import jakarta.servlet.annotation.HandlesTypes;
    import org.springframework.core.annotation.AnnotationAwareOrderComparator;
    import org.springframework.lang.Nullable;
    import org.springframework.util.ReflectionUtils;
    @HandlesTypes(WebApplicationInitializer.class)
    public class SpringServletContainerInitializer implements
        ServletContainerInitializer {
        @Override
        public void onStartup(@Nullable Set<Class<? > webAppInitializerClasses,
                              ServletContext servletContext)
            throws ServletException {
            
        }
    }
    ```

+ **org.springframework.web.WebApplicationInitializer**

    ```java
    public interface WebApplicationInitializer {
        void onStartup(ServletContext servletContext) throws ServletException;
    }
    ```

+ **spring-web-6.1.8.jar/META-INF/services/jakarta.servlet.ServletContainerInitializer**

    ```java
    org.springframework.web.SpringServletContainerInitializer
    ```



### 5.5 **初始化**

> === SCI 搭建 spring-webmvc

* **Dependency**

    ```xml
    <dependency>
        <groupId>org.springframework </groupId>
        <artifactId>spring-webmvc </artifactId>
        <version>6.1.8 </version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core </groupId>
        <artifactId>jackson-databind </artifactId>
        <version>2.17.1 </version>
    </dependency>
    ```

* **SpringContextConfiguration**

    ```java
    import org.springframework.context.annotation.ComponentScan;
    import org.springframework.context.annotation.Configuration;
    import org.springframework.web.servlet.config.annotation.EnableWebMvc;
    @Configuration
    @ComponentScan
    @EnableWebMvc
    public class SpringContextConfiguration {
    }
    ```

    

+ **SpringWebmvcInitializer**

    ```java
    import jakarta.servlet.Filter;
    import org.springframework.web.cors.CorsConfiguration;
    import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
    import org.springframework.web.filter.CharacterEncodingFilter;
    import org.springframework.web.filter.CorsFilter;
    import org.springframework.web.servlet.support
        .AbstractAnnotationConfigDispatcherServletInitializer;
    import java.nio.charset.StandardCharsets;
    public class SpringWebmvcInitializer extends
        AbstractAnnotationConfigDispatcherServletInitializer {
        @Override
        protected Class<?>[] getRootConfigClasses() {
            return null;
        }
        @Override
        protected Class<?>[] getServletConfigClasses() {
            return new Class[]{SpringContextConfiguration.class};
        }
        public static final String DISPATCHER_SERVLET_URL_MAPPING = "/*";
        @Override
        protected String[] getServletMappings() {
            return new String[]{DISPATCHER_SERVLET_URL_MAPPING};
        }
        @Override
        protected boolean isAsyncSupported() {
            return super.isAsyncSupported();
        }
        @Override
        protected Filter[] getServletFilters() {
            CorsConfiguration config = new CorsConfiguration();
            config.setAllowCredentials(true);
            config.addAllowedOrigin("*");
            config.addAllowedHeader("*");
            config.addAllowedMethod("*");
            UrlBasedCorsConfigurationSource source = new
                UrlBasedCorsConfigurationSource();
            source.registerCorsConfiguration(" * ", config);
            return new Filter[] {
                new CharacterEncodingFilter(StandardCharsets.UTF_8.name(), true,
                                            false),
                new CorsFilter(source)
            };
        }
    }
    ```

    

### 5.6 DelegatingFilterProxy

> === Spring-web模块提供特殊的 Filter 能代理注册Filter执行

```java
public class DelegatingFilterProxy extends GenericFilterBean {
    @Nullable
    private String contextAttribute;
    @Nullable
    private WebApplicationContext webApplicationContext;
    @Nullable
    private String targetBeanName;
    private boolean targetFilterLifecycle;
    @Nullable
    private volatile Filter delegate;
    private final Object delegateMonitor;

    public DelegatingFilterProxy() {
        this.targetFilterLifecycle = false;
        this.delegateMonitor = new Object();
    }

    public DelegatingFilterProxy(Filter delegate) {
        this.targetFilterLifecycle = false;
        this.delegateMonitor = new Object();
        Assert.notNull(delegate, "Delegate Filter must not be null");
        this.delegate = delegate;
    }

    public DelegatingFilterProxy(String targetBeanName) {
        this(targetBeanName, (WebApplicationContext)null);
    }

    public DelegatingFilterProxy(String targetBeanName, @Nullable WebApplicationContext wac) {
        this.targetFilterLifecycle = false;
        this.delegateMonitor = new Object();
        Assert.hasText(targetBeanName, "Target Filter bean name must not be null or empty");
        this.setTargetBeanName(targetBeanName);
        this.webApplicationContext = wac;
        if (wac != null) {
            this.setEnvironment(wac.getEnvironment());
        }

    }

    public void setContextAttribute(@Nullable String contextAttribute) {
        this.contextAttribute = contextAttribute;
    }

    @Nullable
    public String getContextAttribute() {
        return this.contextAttribute;
    }

    public void setTargetBeanName(@Nullable String targetBeanName) {
        this.targetBeanName = targetBeanName;
    }

    @Nullable
    protected String getTargetBeanName() {
        return this.targetBeanName;
    }

    public void setTargetFilterLifecycle(boolean targetFilterLifecycle) {
        this.targetFilterLifecycle = targetFilterLifecycle;
    }

    protected boolean isTargetFilterLifecycle() {
        return this.targetFilterLifecycle;
    }

    protected void initFilterBean() throws ServletException {
        synchronized(this.delegateMonitor) {
            if (this.delegate == null) {
                if (this.targetBeanName == null) {
                    this.targetBeanName = this.getFilterName();
                }

                WebApplicationContext wac = this.findWebApplicationContext();
                if (wac != null) {
                    this.delegate = this.initDelegate(wac);
                }
            }

        }
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        Filter delegateToUse = this.delegate;
        if (delegateToUse == null) {
            synchronized(this.delegateMonitor) {
                delegateToUse = this.delegate;
                if (delegateToUse == null) {
                    WebApplicationContext wac = this.findWebApplicationContext();
                    if (wac == null) {
                        throw new IllegalStateException("No WebApplicationContext found: no ContextLoaderListener or DispatcherServlet registered?");
                    }

                    delegateToUse = this.initDelegate(wac);
                }

                this.delegate = delegateToUse;
            }
        }

        this.invokeDelegate(delegateToUse, request, response, filterChain);
    }

    public void destroy() {
        Filter delegateToUse = this.delegate;
        if (delegateToUse != null) {
            this.destroyDelegate(delegateToUse);
        }

    }

    @Nullable
    protected WebApplicationContext findWebApplicationContext() {
        if (this.webApplicationContext != null) {
            WebApplicationContext var2 = this.webApplicationContext;
            if (var2 instanceof ConfigurableApplicationContext) {
                ConfigurableApplicationContext cac = (ConfigurableApplicationContext)var2;
                if (!cac.isActive()) {
                    cac.refresh();
                }
            }

            return this.webApplicationContext;
        } else {
            String attrName = this.getContextAttribute();
            return attrName != null ? WebApplicationContextUtils.getWebApplicationContext(this.getServletContext(), attrName) : WebApplicationContextUtils.findWebApplicationContext(this.getServletContext());
        }
    }

    protected Filter initDelegate(WebApplicationContext wac) throws ServletException {
        String targetBeanName = this.getTargetBeanName();
        Assert.state(targetBeanName != null, "No target bean name set");
        Filter delegate = (Filter)wac.getBean(targetBeanName, Filter.class);
        if (this.isTargetFilterLifecycle()) {
            delegate.init(this.getFilterConfig());
        }

        return delegate;
    }

    protected void invokeDelegate(Filter delegate, ServletRequest request, ServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        delegate.doFilter(request, response, filterChain);
    }

    protected void destroyDelegate(Filter delegate) {
        if (this.isTargetFilterLifecycle()) {
            delegate.destroy();
        }

    }
}

```

> [!note]
>
> 1. DelegatingFilterProxy 可使得其它Filter无需再强制进行Servlet规范注册。
> 2. 没有规范注册的 Filter 可编程式的控制执行顺序或进行其它机制封装。



### 5.7 DelegatingFilterProxy特殊能力

> === DelegatingFilterProxy允许获取 Spring Bean Filter 进行代理
>
> 允许延迟查找Filter Bean 示例，这很重要，因为容器需要Filter在启动之前注册实例，但是Spring通常使用ContextLoaderListener加载Spring Bean,这在需要注册实例之后才完成。

- [x] DelegatingFilterProxy 对 Sprin Bean Filter 进行代理非常特殊
- [x] SCI 执行要比 WebApplicationContext初始化早得多

~~~java
~~~


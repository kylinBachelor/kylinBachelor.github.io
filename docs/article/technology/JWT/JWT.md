---
title: "浅谈JWT,需要了解的认证登录方案"
tags: 
  - JWT
description: 浅谈JWT,需要了解的认证登录方案
createTime: 2025/2/20 16:08:33
---



JWT是目前常用的用于身份验证和授权机制。能够在不同的应用程序之间安全的传输用户的身份信息。



## 1. 传统的认证方式(cookie-session)

1. 用户输入用户名密码,登录系统
2. 到达服务器后，服务器会验证用户名、密码是否正确，密码正确则生成session信息，将sessionId返回给客户端,客户端存入cookie
3. 下次客户端再次请求时，自动带上cookie，服务端最终通过携带的session信息进行校验。

![image-20250219162038448](assets/image-20250219162038448.png)

### 1.1 缺点

1. cookie是无法跨域的(即使是子域也不行)，比如在天猫商城网站中会有天猫超时、天猫国际这些链接，且域名是不一样的，不能让用户跳转一次登录一次吧。
2. 如果部署的是分布式的，还要考虑各部署服务的session同步问题。当然了可以通过各服务之间同步或者中间加一层比如利用redis存储session.



## 2. JWT该出场了

JWT是一种cookie-session改造版的具体的实现。他可以让你不用再服务端存储认证信息（比如token）,完全由客户端提供，服务端只需要根据JWT的解密算法就可以验证用户的合法性，且过程是安全的。



### 2.1 JWT数据结构

JWT的最终的形式其实就是一个字符串，它由三部分组成 头部、载荷、签名。这三部分在字符串中用“.”分隔开。

各部分是由base64生成的字符串。

![image-20250219163611278](assets/image-20250219163611278.png)

#### 2.2.1 头部

头部是以JSON格式存储，是用来指明加密算法和令牌类型，例如

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```



#### 2.2.2 载荷

载荷是用来存储具体需要的用户信息，比如：用户名的信息，姓名、年龄、性别等

```json
{
    "name": "用户名",
    "sex": "性别男"
}
```



#### 2.2.3 签名

签名有一个计算公式

```json
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  Secret
)
```

使用`HMACSHA256`算法计算得出，这个方法有两个参数，前一个参数是 （base64 编码的头部 + base64 编码的载荷）用点号相连，后一个参数是自定义的字符串密钥，密钥不要暴露在客户端，只应该服务器知道。



## 3. JWT怎么保证安全性的呢

保证安全性的关键就是 `HMACSHA256` 或者与它同类型的加密算法，因为加密过程是不可逆的，所以不能根据传到前端的 JWT 传反解到密钥信息。

另外，不同的头部和载荷加密之后得到的签名都是不同的，所以，如果有人改了载荷部分的信息，那最后加密出的结果肯定就和改之前的不一样的，所以，最后验证的结果就是不合法的请求。



**别人拿到JWT还安全吗**

假设载荷部分存储了权限级别相关的字段，强盗拿到 JWT 串后想要修改为更高权限的级别，上面刚说了，这种情况下是肯定不会得逞的，因为加密出来的签名会不一样，服务器可能很容易的判别出来。

那如果强盗拿到后不做更改，直接用呢，那就没有办法了，为了更大程度上防止被强盗盗取，应该使用 HTTPS 协议而不是 HTTP 协议，这样可以有效的防止一些中间劫持攻击行为。

有同学就要说了，这一点也不安全啊，拿到 JWT 串就可以轻松模拟请求了。确实是这样，但是前提是你怎么样能拿到，除了上面说的中间劫持外，还有什么办法吗？

除非强盗直接拿了你的电脑，那这样的话，对不起，不光 JWT 不安全了，其他任何网站，任何认证方式都不安全。



## 4. 问题

JWT 有个问题，导致很多开发团队放弃使用它，那就是一旦颁发一个 JWT 令牌，服务端就没办法废弃掉它，除非等到它自身过期。有很多应用默认只允许最新登录的一个客户端正常使用，不允许多端登录，JWT 就没办法做到，因为颁发了新令牌，但是老的令牌在过期前仍然可用。这种情况下，就需要服务端增加相应的逻辑。



## 5. 简单示例

1. 引入maven包

   ```xml
   <dependency>
       <groupId>com.auth0</groupId>
       <artifactId>java-jwt</artifactId>
       <version>3.10.3</version>
   </dependency>
   ```

2. 登陆时创建令牌

   ```java
   public static String create(){
     try {
       Algorithm algorithm = Algorithm.HMAC256("secret");
       String token = JWT.create()
         .withIssuer("auth0")
         .withSubject("subject")
         .withClaim("name","zhangsan")
         .withClaim("introduce","zhangsan awesome")
         .sign(algorithm);
       System.out.println(token);
       return token;
     } catch (JWTCreationException exception){
       //Invalid Signing configuration / Couldn't convert Claims.
       throw exception;
     }
   }
   ```

3. 登录成功后，再次发起请求的时候将 token 放到 header 或者请求体中，服务端对 token 进行验证。

   ```java
   public static Boolean verify(String token){
     try {
       Algorithm algorithm = Algorithm.HMAC256("secret");
       JWTVerifier verifier = JWT.require(algorithm)
         .withIssuer("auth0")
         .build(); //Reusable verifier instance
       DecodedJWT jwt = verifier.verify(token);
       String payload = jwt.getPayload();
       String name = jwt.getClaim("name").asString();
       String introduce = jwt.getClaim("introduce").asString();
       System.out.println(payload);
       System.out.println(name);
       System.out.println(introduce);
       return true;
     } catch (JWTVerificationException exception){
       //Invalid signature/claims
       return false;
     }
   }
   ```

4. 用 create 方法生成 token，并用 verify 方法验证一下。

   ```java
   public static void main(String[] args){
     String token = create();
     Boolean result = verify(token);
     System.out.println(result);
   }
   ```

5. 结果

   ```tex
   eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdWJqZWN0IiwiaW50cm9kdWNlIjoi6Iux5L-K5r2H5rSSIiwiaXNzIjoiYXV0aDAiLCJuYW1lIjoi5Y-k5pe255qE6aOO562dIn0.ooQ1K_XyljjHf34Nv5iJvg1MQgVe6jlphxv4eeFt8pA
   eyJzdWIiOiJzdWJqZWN0IiwiaW50cm9kdWNlIjoi6Iux5L-K5r2H5rSSIiwiaXNzIjoiYXV0aDAiLCJuYW1lIjoi5Y-k5pe255qE6aOO562dIn0
   zhangsan
   zhangsan awesome
   true
   ```

   
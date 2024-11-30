---
title: maven多模块无法扫描到xml问题
aliases: []
tags:
  - maven
  - Java
createTime: 2024/11/30 14:15:41 
---

一个SpringBoot项目，有多个模块，每个模块都有自己的pom.xml，但是maven无法扫描其它模块的xml文件。

查询解决办法：application.yml中配置spring.config.location，用的是``` classpath: /mapper/**/*mapper.xml ```,只会扫描当前module的配置需要在classpath:后面添加```*```
```yml
mybatis-plus:
  mapper-locations: classpath*:mapper/**/*.xml
```

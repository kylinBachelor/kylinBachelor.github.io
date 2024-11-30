---
title: "Centos下安装Nacos"
aliases: 
tags: ["Linux", "Nacos"]
description: "Centos下安装Nacos"
createTime: 2024/11/30 14:15:41
draft: false
---

### 下载安装包

github：https://github.com/alibaba/nacos/releases

国内：https://nacos.io/download/release-history/

### 解压并移动至安装目录

```sh
tar -zxvf nacos-server-2.2.3.tar.gz 
mv nacos /usr/local
```

### 需要配置Java环境

```sh
export JAVA_HOME=/usr/local/java/jdk17.0.4.1
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH={JAVA_HOME}/bin:$PATH
```

### 编辑application.properties

```sh
cd /usr/local/nacos/conf
vim application.properties

spring.datasource.platform=mysql
db.num=1
db.url.0=jdbc:mysql://10.114.12.177:3306/nacos-config?serverTimezone=GMT%2B8&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true
db.user=root
db.password=123456
```

### 启动

```sh
cd /usr/local/nacos/bin
sh startup.sh -m standalone
```


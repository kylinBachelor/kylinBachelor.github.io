---
title: "23.Shovel"
aliases: 
tags: [RabbitMQ MQ]
description: "RabbitMQ"
date: 2024-05-09T18:22:15+08:00
draft: false
---

# 一、启用Shovel插件

```shell
rabbitmq-plugins enable rabbitmq_shovel
rabbitmq-plugins enable rabbitmq_shovel_management
```

![image-20240425184237327](./img/MQ/RabbitMQ20240525/image-20240425184237327.png)



# 二、配置Shovel

![image-20240425185107197](./img/MQ/RabbitMQ20240525/image-20240425185107197.png)



# 三、测试

## 1、测试计划

| 节点     | 交换机               | 路由键               | 队列                       |
| -------- | -------------------- | -------------------- | -------------------------- |
| 深圳节点 | exchange.shovel.test | exchange.shovel.test | queue.shovel.demo.shenzhen |
| 上海节点 | ——                   | ——                   | queue.shovel.demo.shanghai |



## 2、测试效果

### ①发布消息

![image-20240425185349525](./img/MQ/RabbitMQ20240525/image-20240425185349525.png)



### ②源节点

![image-20240425185519801](./img/MQ/RabbitMQ20240525/image-20240425185519801.png)



### ③目标节点

![image-20240425185729887](./img/MQ/RabbitMQ20240525/image-20240425185729887.png)


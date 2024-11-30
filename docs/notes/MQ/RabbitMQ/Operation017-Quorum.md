---
title: 20.仲裁队列
aliases: null
tags:
  - RabbitMQ MQ
description: RabbitMQ
createTime: 2024/11/30 14:15:41
draft: false
permalink: /article/3xkprcev/
---

# 一、创建仲裁队列

> <span style="color:blue;font-weight:bolder;">说明</span>：鉴于仲裁队列的功能，肯定是需要在前面集群的基础上操作！



## 1、创建交换机

和仲裁队列绑定的交换机没有特殊，我们还是创建一个direct交换机即可

交换机名称：exchange.quorum.test

![image-20231206164511238](./assets/image-20231206164511238.png)



## 2、创建仲裁队列

队列名称：queue.quorum.test

![image-20231206164838398](./assets/image-20231206164838398.png)



![image-20231206165113573](./assets/image-20231206165113573.png)



## 3、绑定交换机

路由键：routing.key.quorum.test

![image-20231206164951831](./assets/image-20231206164951831.png)



# 二、测试仲裁队列

## 1、常规测试

像使用经典队列一样发送消息、消费消息



### ①生产者端

```java
public static final String EXCHANGE_QUORUM_TEST = "exchange.quorum.test";
public static final String ROUTING_KEY_QUORUM_TEST = "routing.key.quorum.test";

@Test
public void testSendMessageToQuorum() {
    rabbitTemplate.convertAndSend(EXCHANGE_QUORUM_TEST, ROUTING_KEY_QUORUM_TEST, "message test quorum ~~~");
}
```



![image-20231206170401658](./assets/image-20231206170401658.png)



### ②消费者端

```java
public static final String QUEUE_QUORUM_TEST = "queue.quorum.test";

@RabbitListener(queues = {QUEUE_QUORUM_TEST})
public void quorumMessageProcess(String data, Message message, Channel channel) throws IOException {
    log.info("消费端：" + data);
    channel.basicAck(message.getMessageProperties().getDeliveryTag(), false);
}
```



![image-20231206170424609](./assets/image-20231206170424609.png)



## 2、高可用测试

### ①停止某个节点的rabbit应用

```shell
# 停止rabbit应用
rabbitmqctl stop_app
```



### ②查看仲裁队列对应的节点情况

![image-20231206170906222](./assets/image-20231206170906222.png)



### ③再次发送消息

收发消息仍然正常
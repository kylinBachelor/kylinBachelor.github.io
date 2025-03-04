---
title: "RocketMQ初识"
aliases: 
tags: [RocketMQ MQ]
description: "RocketMQ初识"
createTime: 2024/11/30 14:15:41
draft: false
---


#### RocketMQ概述

官网：https://rocketmq.apache.org/zh/docs/domainModel/01main

RocketMQ中消息的生命周期分为三部分：消息生产，消息存储，消息消费。

生产者生产消息并发送至RocketMQ服务端，消息被存储在服务端的主题中，消费者通过订阅主题消费消息。

##### 消息生产者（Producer）

用于产生消息的运行实体，一般集成于业务调用链路的上游。生产者是轻量级、匿名、无身份的。

##### 消息存储

+ 主题（Topic）

  消息传输和存储的分组容器，主题内部由多个队列组成，消息的存储和水平扩展实际是通过主题内的队列实现的。

+ 队列（MessageQueue）

  消息传输和存储的实际单元容器，类比于其它消息队列中的分区。RocketMQ通过流式特性的无限队列结构来存储消息，消息在队列内具备顺序性存储特性。

+ 消息（Message）

  最小的传输单元。消息具备不可变性，在初始化发送和完成存储后即不可变

##### 消息消费

+ 消费分组（ConsumerGroup）

  RocketMQ发布订阅模型中定义的独立的消费身份，用于统一管理底层运行的多个消费者（Consumer）。同一个消费组的多个消费者必须保持**消费逻辑和配置一致**，共同分担该消费组订阅的消息，实现消费能力的水平扩展。

+ 消费者（Consumer）

  消费消息的运行实体，一般集成在业务调用链路的下游。消费者必须被指定到某一个消费组中。

+ 订阅关系（Subscription）

  发布订阅模型中消息过滤、重试、消费进度的规则配置。订阅关系以消费组粒度进行管理，消费组通过定义订阅关系控制指定消费组下的消费者如何实现消息过滤、消费重试及消费进度恢复等。

  RocketMQ的订阅关系除过滤表达式之外都是持久化的，即服务器重启或请求断开，订阅关系依然保留。

#### RocketMQ基本概念

1. 消息（Message）

    消息是消息系统所传输信息的物理载体，生产和消费数据的最小单位，每条消息必须属于一个主题。

2. 主题（Topic）

    Topic表示一类消息的集合，每个主题必须包含若干条消息，每条消息只能属于一个主题，是RocketMQ进行消费订阅的基本单位。topic:message  1:n,  message:topic: 1:1

    一个生产者可以同时发送多种topic的消息；而一个消费者只对某种特定的Topic感兴趣，即只可以订阅和消费一种topic的消息。producer:topic   1:n, consumer:topic  1:1  

3. 标签（Tag）

    为消息设置的标签，用于同一主题下区分不同类型的消息。来自同一业务单元的消息，可以根据不同业务目的，在同一主题下设置不同的标签，标签能够有效地保持代码的清晰度和连贯性，并优化RocketMQ提 供的查询系统。消费者可以根据Tag实现对不同子主题的不同消费逻辑，实现更好的扩展性。

    Topic是消息的一级分类，Tag是消息的二级分类。

4. 队列

    存储消息的物理实体。一个Topic中可以包含多个Queue，每个Queue中存放的就是该Topic的消息。一 个Topic的Queue也被称为一个Topic中消息的分区（Partition）。

    一个Topic的Queue中的消息只能被一个消费者组中的一个消费者消费。**一个Queue中的消息不允许同 一个消费者组中的多个消费者同时消费。**

5. 消息标识

    RocketMQ中每个消息拥有唯一的MessageId，且可以携带具有业务标识的key，以方便对消息的查询。不过需要注意的是，MessageId有两个：在生产者send()消息时会自动生成一个MessageId(msgId)，当消息到达Broker之后，Broker也会自动生成一个MessageId(offsetMsgId)。msgId、offsetMsgId与key都称为消息标识。

    + msgId：由producer端生成，

        其生成规则为： producerIp + 进程pid + MessageClientIDSetter类的ClassLoader的hashCode + 当前时间 + AutomicInteger自增计数器

    + offsetMsgId：由broker端生成，其生成规则为：brokerIp + 物理分区的offset（Queue中的 偏移量）

    + key：由用户指定的业务相关的唯一标识

#### RocketMQ四部分

1. Producer

    消息生产者，负责生产消息。Producer通过MQ的负载均衡模块选择相应的Broker集群队列进行消息投 递，投递的过程支持快速失败并且低延迟。

    RocketMQ中的消息生产者都是以生产者组（Producer Group）的形式出现的。生产者组是同一类生产者的集合，这类Producer发送相同Topic类型的消息。一个生产者组可以同时发送多个主题的消息。

2. Consumer

    消息消费者，负责消费消息。一个消息消费者会从Broker服务器中获取到消息，并对消息进行相关业务 处理。

    RocketMQ中的消息消费者都是以消费者组（Consumer Group）的形式出现的。消费者组是同一类消 费者的集合，这类Consumer消费的是同一个Topic类型的消息。消费者组使得在消息消费方面，实现 负载均衡（将一个Topic中的不同的Queue平均分配给同一个Consumer Group的不同的Consumer，注 意，并不是将消息负载均衡）和容错（一个Consmer挂了，该Consumer Group中的其它Consumer可 以接着消费原Consumer消费的Queue）的目标变得非常容易。

3. Name Server

    NameServer是一个Broker与Topic路由的注册中心，支持Broker的动态注册与发现。

    主要包括两个功能：

    + **Broker管理**：接受Broker集群的注册信息并且保存下来作为路由信息的基本数据；提供心跳检测 机制，检查Broker是否还存活。
    + **路由信息管理**：每个NameServer中都保存着Broker集群的整个路由信息和用于客户端查询的队列 信息。Producer和Conumser通过NameServer可以获取整个Broker集群的路由信息，从而进行消 息的投递和消费。

    路由注册：

    NameServer通常也是以集群的方式部署，不过，NameServer是无状态的，即NameServer集群中的各 个节点间是无差异的，各节点间相互不进行信息通讯。那各节点中的数据是如何进行数据同步的呢？在 Broker节点启动时，轮询NameServer列表，与每个NameServer节点建立长连接，发起注册请求。在 NameServer内部维护着⼀个Broker列表，用来动态存储Broker的信息。

    

4. Broker

    Broker充当着消息中转角色，负责存储消息、转发消息。Broker在RocketMQ系统中负责接收并存储从 生产者发送来的消息，同时为消费者的拉取请求作准备。Broker同时也存储着消息相关的元数据，包括 消费者组消费进度偏移offset、主题、队列等。

# Nginx负载均衡

在高并发的情况下，一台服务器的负载承受不住，我们就需要使用服务器集群来解决高并发问题，但是这就出现一个问题，就是客户端的请求如何分配给多个服务器，所以在服务器集群中，需要一个服务器充当一个 **【负载均衡器-Ningx】** 用户的所有的请求都会由负载均衡器进行接收，调度者根据每台服务器的负载情况通过**负载均衡算法**将请求分配给某一台后端服务器进行处理。

负载均衡算法：

1. 轮询（Round Robin）
2. IP哈希(IP Hash)
3. 加权轮询(Weighted Round Robin)
4. 最少连接（Least Connection）



## 1. 轮询

这是**默认的负载均衡算法**，Nginx按照请求的顺序依次将请求分配给后端的服务器。每个服务器按照其权重来处理请求，然后按顺序循环分配。这种算法简单且平均地将负载分配给后端服务器，适用于后端服务器配置相同、处理能力相当的场景。

```conf
http {
    upstream backend {
        server 192.168.1.101:8080;
        server 192.168.1.102:8080;
        server 192.168.1.103:8080;
    }
 
    server {
        listen 80;
        
        location / {
            proxy_pass http://backend;
        }
    }
}
```

## 2. IP哈希

Nginx根据客户端的IP地址进行哈希运算，并根据计算结果将请求分配给固定的后端服务器。这种算法保证了相同的客户端IP每次请求都会被分配到相同的服务器，适用于需要保持会话状态的应用。

```conf
http {
    upstream backend {
        ip_hash;
        server 192.168.1.101:8080;
        server 192.168.1.102:8080;
        server 192.168.1.103:8080;
    }
 
    server {
        listen 80;
        
        location / {
            proxy_pass http://backend;
        }
    }
}
```

## 3. 加权轮询（Weighted Round Robin）

Nginx根据每个后端服务器的配置权重将请求分配给服务器。权重越高的服务器，处理的请求就越多。这种方式适用于后端服务器之间配置不同、处理能力不同的情况下。

```conf
http {
    upstream backend {
        server 192.168.1.101:8080 weight=3;
        server 192.168.1.102:8080 weight=2;
        server 192.168.1.103:8080 weight=1;
    }
 
    server {
        listen 80;
        
        location / {
            proxy_pass http://backend;
        }
    }
}
```

## 4. 最少连接（Least Connection）

Nginx会统计每个后端服务器当前的活动连接数，并将请求分配给活动连接数最少的服务器，以实现负载均衡。这种算法适用于后端服务器配置和处理能力不同、连接持续时间不均衡的场景。

```conf
http {
    upstream backend {
        least_conn;
        server 192.168.1.101:8080;
        server 192.168.1.102:8080;
        server 192.168.1.103:8080;
    }
 
    server {
        listen 80;
        
        location / {
            proxy_pass http://backend;
        }
    }
}
```




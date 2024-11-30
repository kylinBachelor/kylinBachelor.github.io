# Docker-compose

> Compose 是 Docker 公司推出的一个软件，可以管理多个Docker容器组成一个应用。需要定义一个YAML格式的配置文件 
>
> docker-compose.yaml,写好多个容器之间的调用关系。然后只要一个命令就能同时 **启动/关闭** 这些容器。
>
> Docker-compose 允许用户通过一个单独的docker-compose.yml文件来定义一组相关联的应用容器为一个项目。
>
> 即 **容器的编排管理**。

```docker-compose
version: '2.3'
services:
  pigx999:
    image: docker_pigx_boot
    container_name: docker_pigx_boot_9999
    volumes:
      - /home/deploy/docker/9999:/home/deploy
      - /Users/lengleng/Downloads/files:/Users/lengleng/Downloads/files
    ports:
      - 9999:9999
  pigx998:
    image: docker_pigx_boot
    container_name: docker_pigx_boot_9998
    volumes:
      - /home/deploy/docker/9998:/home/deploy
      - /Users/lengleng/Downloads/files:/Users/lengleng/Downloads/files
    ports:
      - 9998:9999
  pigx997:
    image: docker_pigx_boot
    container_name: docker_pigx_boot_9997
    volumes:
      - /home/deploy/docker/9997:/home/deploy
      - /Users/lengleng/Downloads/files:/Users/lengleng/Downloads/files
    ports:
      - 9997:9999

```

##　1. Ｄocker-compose 安装

文件： [docker-compose-Linux-x86_64](./assets/docker-compose-Linux-x86_64) 

```sh
mv docker-compose-Linux-x86_64 /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose

# 开发环境可以授予最高权限
chmod 777 /usr/local/bin/docker-compose
```

## 2. 卸载
```bash
rm -rf /usr/local/bin/docker-compose

reboot
```

## 3. yml配置文件及常用指令

Docker compose 默认使用 docker-compose.yml 。当然也可以使用 -f 参数指定具体文件。

### 3.1 yml文件级

Docker Compose 的 YAML 文件包含 4 个一级 key:version、services、networks、volumes

+ version 是必须指定的，而且总是位于文件的第一行。它定义了 Compose 文件格式(主要是 API)的版本。注意，version 并非定义 Docker Compose 或 Docker 引擎的版本号。
+ services 用于定义不同的应用服务。Docker Compose 会将每个服务部署在各自的容器中。
+ networks 用于指引 Docker 创建新的网络。默认情况下，Docker Compose 会创建 bridge 网络。 这是一种单主机网络，只能够实现同一主机上容器的连接。当然，也可以使用 driver 属性来指定不 同的网络类型。
+ volumes 用于指引 Docker 来创建新的卷。

## 2. compose常用命令

+ docker-compose -h : 查看帮助
+ **docker-compose up : 启动所有docker-compose服务**
+ **docker-compose up -d : 启动所有docker-compose服务并后台运行**
+ docker-compose down : 停止并删除容器、网络、卷、镜像。
+ docker-compose exec yml里面的服务id bash : 进入容器实例内部，
+ docker-compose ps : 查看当前compose编排过的所有容器
+ docker-compose top : 展示当前docker-compose编排过的容器进程
+ docker-compose logs yml里面的服务id : 查看容器输出日志
+ docker-compose config : 检查yml配置
+ docker-compose config -q : 检查配置，有问题才输出
+ **docker-compose restart : 重启服务**
+ **docker-compose start : 启动服务**
+ **docker-compose stop : 停止服务**



## 3. 伪示例

```dockerfile
version 3
services:
	# build1
	mycentos: # 服务名称, 构建镜像时的镜像名就是该服务名
		build: . # 相对当前docker-compose.yml 文件所在目录，基于Dockerfile构建镜像
		container_name: mycentosContainer # 容器名称
		ports: # 宿主机与容器端口的映射关系
			- "8080:8080"
	# build2
	mycentos: # 服务名称
		build:
			context: . # 相对当前 docker-compose.yml 文件所在目录
			dockerfile: Dockerfile-alternate # 基于名称为 Dockerfile-alternate 的文件构建镜像
		container_name: mycentosContainer # 容器名称
		ports: # 宿主机与容器端口的映射关系
			- "8080:8080"
	microservice:
		image: order_docker:1.0
		container_name: ms01
		ports:
			- "1000:100"
			- "6000:6000"
		volumns:
			- /data1:/dta
			- /data2:/data2
		depends_on:
			- redis
			- mysql
		networks:
			- xx_net
	redis:
		image: redis:6.8.0
		ports::
			- "6379:6379"
		volumns:
			- /app/redis/redis.conf:/etc/redis/redis.conf
			- /app/redis/data:/data
		command: redis-server /etc/redis/redis.conf
		networks:
			- xx_net
	mysql:
		image: mysql:5.7
		environment:
			MYSQL_ROOT_PASSWORD: '12345'
			MYSQL_ALLOW_EMPTY_PASSWORD: 'no'
			MYSQL_DATABASE: 'db1'
			MYSQL_USER: 'ROOT'
			MYSQL_PASSWROD: 'ROOT'
		ports:
			- "3306:3306"
		volumes:
			- /app/mysql/db:/var/lib/mysql
            - /app/mysql/conf/my.cnf:/etc/my.cnf
            - /app/mysql/init:/docker-entrypoint-initdb.d
        networks:
        	- xx_net
        command: --default-authentication-plugin=mysql_native_password # 解决外部无法访问
			
networks:
	- xx_net:
```




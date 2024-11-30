# Docker镜像制作

## 1. 通过容器制作

### 1.1 制作一个带有java17环境的镜像

1. 启动镜像（centos）并使用容器卷挂载目录，使得容器内部可以有jdk安装包

    ```sh
    docker run -it --name centos_jdk17 -v /home/soft:/usr/lib centos
    ```

2. 安装jdk环境

    ```sh
    # 1. 安装jdk17 JAVA_HOME 即为jdk位置
    export JAVA_HOME=/usr/lib/jdk-17.0.10
    export CLASSPATH=.:${JAVA_HOME}/jre/lib/rt.jar:${JAVA_HOME}/lib/dt.jar:${JAVA_HOME}/lib/tools.jar
    export PATH=$PATH:${JAVA_HOME}/bin
    
    # 2. 刷新配置
    source /etc/profile
    
    # 2. 检查环境
    java -version
    ```



### 1.2 将容器打包成镜像



```sh
# 打包成镜像
docker commit [将要制作镜像的容器名] [将要生成的镜像名]


# 标记镜像
docker tag [镜像名] [harobr domain]/[harbor项目名称]/[仓库名称]:版本号
docker tag centos_pigx_jdk17:latest 192.168.1.100/shunde/centos_pigx_jdk17:v1.0
```



### 1.3 推送镜像至Harbor仓库

```sh
# 登录至Harbor仓库
docker login [harbor domain]

# 推送
docker push 192.168.1.100/shunde/centos_pigx_jdk17:v1.0
```



## 2. 制作镜像

### 2.1 通过现有容器制作

```sh
docker commit -a "作者信息" 容器id
```



### 2.2 通过Dockerfile制作

```sh
docker build -t 镜像名:镜像版本 .
```




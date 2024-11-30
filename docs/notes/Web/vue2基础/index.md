---
title: "Vue2基础"
aliases: 
tags: [Web, Vue, _]
description: "Vue2基础"
createTime: 2024/11/30 14:15:41
draft: false
---


# 框架和库
## 一、JS 库
在原生 JS 中，如果我们要获取一个节点：

```js
const app = document.getElementById('app');
```

在 jQuery 中，如果我们要获取一个节点：

```js
const app = $('#app');
```
### 库的概念
库，就是一组方法的集合，通常这些方法都会有特定的功能。例如：

- jQuery：大部分的方法都是关于**节点**操作的功能；
- lodash：大部分的方法都是关于**数据**操作的功能；

在一个项目中，可以使用多个库。
## 二、框架
框架，就是针对我们的项目，给我们提供了一整套完整的解决方案。

在使用框架时，控制权在框架身上，开发者需要按照框架的规则来编写代码。但是，我们依然可以在项目中再去引入其他的库。
## 三、前端主流框架
现在，前端主流框架主要有三个：

1. Angular：诞生于 2009 年，后被谷歌收购；
2. React：2013 年推出正式版，起源于 Facebook 内部的项目 Instagram；
3. Vue：2014 年由尤雨溪发布；

# Prop

Vue 中提供了 Prop 的属性，来实现父组件向子组件传值。

## 一、父组件传递数据

父组件在向子组件传递数据时，基础语法如下：

```html
<子组件名 属性名="传递的数据值"></子组件名>
```

其中，属性名可以自己任意定义。

### 传递的数据类型

在传递数据时，除了普通的静态字符串外，其他任意类型的数据，在传递时都需要添加 `v-bind`：

```html
<Child str="hello" v-bind:num="20" v-bind:arr="[1, 2, 3]"></Child>
```

## 二、子组件接收数组

子组件中，都通过 `props` 属性来接收外部传递的数据。

基础语法如下：

```js
export default {
    props: ['属性名一', '属性名二', ...]
}
```

子组件中通过 `props` 接收的数据，都可以直接使用：

```html
<template>
 <p>{{num}}</p>
</template>
<script>
export default {
    props: ['num'],
    computed: {
        sum() {
            return this.num + this.num;
        }
    }
}
</script>
```

## 三、单向数据流

### 概念

当父组件将数据传递给子组件后，父组件如果更新数据，子组件会同步更新，但是，**子组件中不能修改 props 接收到的数据**。

如果修改 props 的值，会出现类似以下的报错：

![image-20220726110221300](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/jianglan/20220726110221.png)

### 解决方案

如果确实有需要修改 props 的需求，可以有如下两种解决方案：

#### 1、将 props 赋值给 data

```js
export default {
    props: ['num'],
    data() {
        return {
            count: this.num
        }
    }
}
```

但是注意，data 中只能接收到 props 的初始值。后续 props 的值发生改变，data 不会再同步更新。

#### 2、将 props 赋值给 computed

```js
export default {
    props: ['num'],
    computed: {
        count() {
            return this.num;
        }
    }
}
```

## 四、Props 验证

```js
export default {
    props: {
        msg: String,
        num: [String, Number],
        name: {
            type: String,
            required: true,  // 父组件必须传
        },
        gender: {
            type: String,
            default: "男",  // 默认值
        },
        friends: {
            type: Array,
            default: () => ["张三"],  // 数组的默认值
        },
        student: {
            type: Object,
            default: () => ({ name: "张三" }),   // 对象的默认值
        },
    },
};
```

# axios 基本使用

## 一、下载

在任何项目中，如果要使用 axios 来发送网络请求，都需要先安装下载：

```bash
npm i axios
```

## 二、使用

### 1、引入

```js
import axios from 'axios';
```

### 2、发送请求

```js
axios({
    url: '',  // 请求路径
    method: 'POST', // 请求类型，例如 GET、POST、DELETE、PUT...
    data: {
        参数名: 参数值
    }
})

axios({
    url: '',  // 请求路径
    method: 'GET', // 请求类型，例如 GET、POST
    params: {
        参数名: 参数值
    }
})
```

注意：除了 GET 请求在传参需要使用 `params` 属性外，其他类型的请求，传参都是通过 `data` 属性。

### 3、接收请求结果

axios 返回的结果是一个 Promise 对象，因此，我们可以选择用 `then()` 方法来接收后端返回的结果，也可以选择使用 `async await` 来接收后端返回的结果。

```js
axios({
    // ...
}).then(res => {
    console.log('后端返回的结果', res.data);
})
```

```js
async 方法名() {
    const res = await axios({
        // ...
    });
    console.log('后端返回的结果', res.data)
}
```


# 身份认证

身份认证，就是在项目需要权限访问的页面中，对用户的**登录状态**进行判断。简单来说就是：

- 如果用户登录了，就可以访问对应的页面；
- 如果用户没有登录，我们就提示用户去登录；

## 一、用户登录

当用户登录成功后，后端会返回一个 token 给前端，我们需要将 token 保存在本地存储中：

```js
export default {
    methods: {
        async login() {
            // 发送登录请求
            const res = await this.$api.users.login(this.form);
            if (res.code) {
                // 将 token 保存到本地存储
                localStorage.token = res.token;
                this.$router.push("/home");
            } else {
                this.$message.error("账号或密码错误，登录失败。");
            }
        }
    }
}
```

## 二、获取用户信息

在系统首页的路由中，添加一个“前置守卫”，在守卫钩子函数中发送请求，通过 token 来获取用户信息：

```js
import api from '@/api';
const routes = [
    {
        path: '/home',
        name: 'Home', 
        component: HomeView,
        // 路由前置守卫
        beforeEnter: async (to, from, next) => {
            const token = localStorage.token;
            if (token) {
                // 根据 token 获取用户信息
                const res = await api.users.getUserInfo();
                console.log(res);
                return;
            } 
            alert('你还未登录，请先登录');
            next('/login');
        }
    }
]
```

## 三、保存用户信息

我们需要将请求回来的用户信息保存到状态机的 state 中，因此，我们需要在主仓库中进行配置：

```js
export default new Vuex.Store({
    state: {
        userInfo: {},   // 用户信息的初始值
    },
    getters: {
        username: state => state.userInfo.username   // 筛选用户信息中的用户名
    },
    mutations: {
        // 接收最新的用户数据，并保存到 state 中
        SET_USER_INFO(state, payload) {
            state.userInfo = payload;
        }
    }
})
```

仓库配置完成后，回到导航守卫中，将获取到的用户信息，通过 mutations 保存到 state 中：

```js
import store from '@/store';
const routes = [
    {
        //...
        // 路由前置守卫
        beforeEnter: async (to, from, next) => {
            const token = localStorage.token;
            if (token) {
                // 根据 token 获取用户信息
                const res = await api.users.getUserInfo();
                if (res.code) {
                    store.commit('SET_USER_INFO', res.data); // 调用 mutations 将用户信息保存到 state
                    next();   // 让用户进入对应的页面
                    return;
                }
            } 
            alert('你还未登录，请先登录');
            next('/login');
        }
    }
]
```

## 四、渲染用户信息

在组件中，要获取仓库 state 或 getters 中的数据来渲染，有两种方式：

1. 直接在 `template` 中通过 `$store` 来获取并渲染数据；
2. 可以将仓库的数据交给组件自己的计算属性，然后渲染计算属性即可；

```html
<p>欢迎你，{{$store.getters.username}}</p>
<p>欢迎你，{{username}}</p>
```

```js
export default {
    computed() {
        username() {
            return this.$store.getters.username;
        }
    }
}
```

## 五、验证 token 是否过期

如果要验证 token 是否过期，需要通过 axios 请求，**将 token 添加到请求头中**，发送到后端来进行验证。

考虑到实际开发中，每一个请求都需要携带 token，随时对 token 的有效期进行验证，所以，我们可以直接在 axios 的请求拦截器中来统一添加请求头的 token：

```js
// 请求拦截器：当前端的请求在发送到后端去之前，会拦截下来
axios.interceptors.request.use((config) => {
    // 所有请求在发往后端去之间，都先拦截下来，给请求头中添加 token
    config.headers.Authorization = localStorage.token;
    return config;
})
```

## 六、处理 token 过期

如果后端 token 验证已过期，会返回一个 401 的报错，所以，我们需要在 axios 的响应拦截器中拦截到这个报错，然后进行处理：

```js
import router from "@/router";
import { MessageBox } from 'element-ui';

// 响应拦截器：当后端返回的结果到达前端页面之前，会被拦截下来
axios.interceptors.response.use((res) => {
    // 响应成功时执行的函数
    return res.data;
}, (err) => {
    // 响应失败时执行的函数
    if (err && err.response && err.response.status) {
        if (err.response.status === 401) {
            MessageBox.alert('登录已过期，请重新登录', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    router.replace('/login');
                }
            });
        }
    }
    return Promise.reject(err.message);
});
```

以上步骤完成后，后续，不管是用户没有登录，直接访问权限页面，还是登录已过期，访问权限页面，我们都会提示用户重新登录，并强制跳转到登录页面。

# 路由与 SPA

## 一、SPA

SPA 的全称是“Single Page Application”，翻译成“单页应用”。单页应用，指的就是应用程序中只有一个 `.html` 页面。

### 实现原理

单页应用的原理，实际上就是通过切换页面中的组件，来达到类似多页应用的效果。

## 二、路由

路由的作用，就是用来管理**浏览器路径**和**页面组件**之间的关系。

每当浏览器的路径发生变化时，路由就可以检测到，同时会更新页面，显示当前路径对应的组件。

例如，我们有登录、注册、首页三个页面。

那么路由中管理的对应关系：

```bash
/login     --->  Login.vue
/register  --->  Register.vue
/home      --->  Home.vue
```

# 关于 Vuex

## 一、概念

Vuex，是 Vue 官方提供的“状态管理模式”，我们将其称为“状态机”。

状态，实际上指的就是 Vue 应用中的数据。大部分的状态（数据）我们都是在组件自己的 data 中进行管理，但是，部分公共状态（数据），我们可以交给状态机来进行管理。

## 二、工作原理

Vuex 的工作原理，实际上就是在 Vue 项目中，引入了一个公共仓库。我们可以将项目中的公共数据，都保存在 Vuex 的仓库中。这样的话，当组件中想要使用公共数据时，就可以直接从仓库中获取。同样的道理，如果我们想要修改仓库中的数据，仓库也会提供修改方法给我们调用即可。

## 三、五大核心属性

```js
export default new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
```

- `state`：状态，用来保存公共数据；
- `getters`：依赖 state 计算出的新数据，可以理解为是仓库中的计算属性；
- `mutations`：修改 state 的方法，唯一修改 state 的途径；
- `actions`：异步操作的方法；
- `modules`：仓库的模块化；


# 搭建 Vue 项目

## 一、安装 CLI 工具

### 1、查看 CLI 版本号

我们可以通过查看版本号来判断本机是否已经安装过 CLI 工具：

```bash
vue -V
# @vue/cli 5.0.6
```

如果本机电脑中安装的版本是 1.x 或 2.x，需要先执行以下命令，卸载旧版本，再重新安装最新的版本。

```bash
npm uninstall vue-cli -g
```

如果本机电脑中安装的版本是 3.x 或以上，就不需要卸载，可以直接安装最新的版本进行覆盖。

如果提示“**Vue 不是内部或外部命令**”，则表示本机电脑中没有安装过 CLI 工具。

### 2、安装 CLI

安装最新的 CLI，要求本机电脑的 Node.js 版本在 8.9 以上。可以通过以下命令，查看本机电脑中 Node.js 的版本号：

```bash
node -v
# v14.19.1
```

执行以下命令，全局安装 CLI 工具：

```bash
npm install -g @vue/cli
```

## 二、搭建 Vue 项目

### 1、创建项目

将终端定位到需要创建项目的路径中，执行以下命令：

```bash
vue create vue-demo
```

其中，`vue-demo` 是项目名称，会作为项目根目录的文件名。

### 2、选择安装方式

```bash
? Please pick a preset: (Use arrow keys)
  Default ([Vue 3] babel, eslint)
  Default ([Vue 2] babel, eslint)
> Manually select features
```

这里我们选择第三个 `Manually select features`，自定义安装。

### 3、选择安装插件

```bash
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert
selection, and <enter> to proceed)
>(*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 ( ) Router
 ( ) Vuex
 ( ) CSS Pre-processors
 ( ) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
```

这里我们暂时只选择安装第一个 Babel 插件，其他插件全都不安装。

注意要取消 Linter / Formatter 插件。

### 4、选择 Vue 版本

```bash
? Choose a version of Vue.js that you want to start the project with
  3.x
> 2.x
```

我们主要以 Vue2 的学习为主，所以这里选择 2.x 的版本安装。

### 5、选择配置代码位置

```bash
? Where do you prefer placing config for Babel, ESLint, etc.?
> In dedicated config files
  In package.json
```

`In dedicated config files` 表示生成新文件来保存插件的配置代码，`In package.json` 表示将配置代码添加在 `package.json` 文件中。

这里我们选第一个。

### 6、是否保存供以后使用

```bash
? Save this as a preset for future projects? (y/N) n
```

当前项目的配置已经可以生效了。

由于我们当前的配置比较简单，因此这里选择 `n`，暂时不保存。

## 三、启动项目

**将终端定位到项目的根目录**，执行以下命令启动项目：

```bash
npm run serve
```

启动成功后，会出现类似以下提示：

```bash
DONE  Compiled successfully in 484ms


App running at:
- Local:   http://localhost:8080/
- Network: http://10.211.55.3:8080/
```

浏览器访问提示中的路径，就可以看到项目的欢迎界面了。

# 自定义事件

自定义事件，指的就是父组件将自己的 `methods` 方法，作为“自定义事件”传给子组件，让子组件来调用父组件这个方法。

## 一、父组件设置自定义事件

```html
<template>
    <div>
        <h1>父组件</h1>
        <EventChild v-on:fatherEvent="fatherEvent"></EventChild>
    </div>
</template>

<script>
import EventChild from "./EventChild.vue";
export default {
    components: {
        EventChild,
    },
    methods: {
        fatherEvent(value) {
            console.log("父组件的方法");
        },
    },
};
</script>
```

## 二、子组件调用自定义事件

```html
<template>
    <div>
        <h3>子组件</h3>
        <button v-on:click="$emit('fatherEvent', 100)">按钮</button>
        <button v-on:click="childEvent">按钮</button>
    </div>
</template>

<script>
export default {
    methods: {
        childEvent() {
            this.$emit('fatherEvent', 'hello');
        }
    }
};
</script>
```

## 三、应用场景

1. 子组件修改父组件的数据；
2. 子组件给父组件传值；

# 请求封装

请求封装，主要分为两个部分：

1. axios 配置的封装处理；
2. 请求 API 的封装处理；

## 一、axios 配置的封装处理

通常，我们会在项目的 `src` 目录中，新建一个 `utils` 目录，然后在 `utils` 中新建一个 `request.js` 文件，用来作为 axios 的配置文件。

### 1、配置公共路径

所有的请求路径中，都会有相同的一部分，指向服务器的地址。通常，可以通过配置 axios 的公共路径，将服务器地址提取出来。

```js
import axios from "axios";
axios.defaults.baseURL = "http://47.98.128.191:3000";
```

后续，我们发送的所有 axios 请求的 URL，就都不需要再写基础路径了。

### 2、处理返回的数据格式

axios 得到的数据是一个响应对象，而后端真正返回给前端的数据，在响应对象的 `data` 属性中。因此，我们可以对 axios 返回的数据格式进行筛选处理：

```js
axios.interceptors.response.use(res => res.data);
```

说明：这里给 axios 设置了一个响应拦截器。当请求的结果在返回给前端的过程中，会先被“响应拦截器”拦截下来，然后响应拦截器中对数据进行处理，最后将 `res.data` 返回给前端。

### 3、运行配置文件

配置完成后，我们需要在 `main.js` 中引入该文件，让文件的配置运行生效：

```js
import './utils/request.js'
```

## 二、请求 API 的封装处理

因为在实际的项目开发中，会涉及到很多的网络请求，每一个网络请求的代码都有可能分布在各个组件中。

网络请求的代码太散，会导致我们写很多重复的代码，同时后期更新维护也很不方便。因此，**我们需要将项目中所有的网络请求集中到一起来进行管理。**

### 1、创建目录文件

我们在 `src` 中创建一个 `api` 目录，用来管理项目中所有的请求 API。

```bash
src
 |--- api
 |     |--- modules
 |     |       |--- students.js   # 设置所有关于学生的请求
 |     |       |--- classes.js    # 设置所有关于班级的请求
 |     |       |--- ...        # 设置所有关于 xx 的请求
 |     |--- index.js              # 汇总 modules 中所有模块的请求
```

### 2、封装请求模块 API

我们以学生请求为例：

```js
import axios from 'axios';

const students = {
    get(params) {
        return axios({
            url: '/students/getStudents',
            method: 'GET',
            params: params
        })
    },
    delete() {

    },
    add() {

    },
    update() {

    }
}

export default students;
```

### 3、汇总请求模块 API

```js
import students from './modules/students.js'
import classes from './modules/classes.js'

const api = {
    students: students,
    classes: classes
    // ... 其他模块
}

export default api;
```

### 4、全局挂载 API

为了在组件中方便使用 api 对象，我们在 Vue 中，会将 api 对象通过 `prototype` 挂载到全局。

在 `main.js` 中配置以下代码，来实现 api 的全局挂载：

```js
import api from '@/api';
Vue.prototype.$api = api;
```

## 三、组件中调用 API

```js
export default {
    data() {
        return {
            tableData: [],
        };
    },
    created() {
        this.getStudents();
    },
    methods: {
        async getStudents() {
            const res = await this.$api.students.get();
            if (res.code) {
                this.tableData = res.data.rows;
            }
        },
    },
};
```
# 动态路由控制权限
在一般的管理系统中，在项目的权限页面中，除了要判断用户是否登录外，我们还需要对“已登录”的用户权限等级进行区分。

不同等级的用户，在系统首页中看到的菜单不一样。同时，为了防止低权限用户通过地址访问其他高权限页面，所以，我们需要将所有的权限路由都替换成动态路由。

只有当用户登录成功后，我们才开始配置对应权限的路由。

总结下来，我们需要做两件事情：

1. 首页菜单的分权限显示；
2. 路由分权限进行动态配置；

## 一、权限菜单渲染

首先，需要发送请求获取当前用户权限能访问的菜单数据。

### 1、配置状态机

```js
export default new Vuex.Store({
    state: {
        authMenus: [], // 权限菜单数据
    },
    mutations: {
        SET_AUTH_MENUS(state, payload) {
            state.authMenus = payload;
        }
    },
    actions: {
        async getAuthMenusAsync({ commit }) {
            const res = await api.users.getAuthMenus();
            if (res.code) {
                commit('SET_AUTH_MENUS', res.data);
            }
        }
    }
})
```

### 2、筛选菜单数据

在菜单组件中，调用 action 的方法，发送请求获取权限数据，然后根据权限数据来筛选菜单数据：

```js
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            menus: [
                // ... 完整的菜单数据
            ],
        };
    },
    created() {
        this.getAuthMenusAsync();
    },
    computed: {
        ...mapState(["authMenus"]),
        // 根据权限数据 authMenus，筛选完整菜单 menus，得到一个权限菜单 filterMenus
        filterMenus() {
            return this.menus
                .map((item) => {
                    const authChild = item.children.filter((child) => {
                        return this.authMenus.includes(child.path);
                    });
                    // 返回一级菜单对象
                    return { ...item, children: authChild };
                })
                .filter((item) => item.children.length);
        },
    },
    methods: {
        ...mapActions(["getAuthMenusAsync"]),
    },
};
```

为了能够查看到首页中菜单渲染的效果，可以先将 home 的路由配置成静态路由。

```js
// router/index.js 
const routes = [
    // ...
    {
        path: '/home',
        name: 'Home', 
        component: HomeView
    }
]
```

## 二、配置动态路由

我们直接将首页以及首页下的所有二级路由，全都配置成动态路由。所以，首先需要先将之前配置的 home 的静态路由删掉。

```js
const routes = [
    // ...
    // {
    //  path: '/home',
    //  name: 'Home',  // 路由名称，可选
    //  component: HomeView
    // }
]
```

### 1、判断用户是否登录

```js
router.beforeEach(async (to, from, next) => {
    // 当用户进入的页面不是登录也不是注册
    if (!to.path.includes('login') && !to.path.includes('register')) {
        const token = localStorage.token;
        if (token) {
            // 发送请求验证 token 是否过期，如果 token 没有过期，就获取用户信息
            const res = await api.users.getUserInfo();
            if (res.code) {
                next();
                return;
            }
        }
        MessageBox.alert('你还未登录，请先登录', '提示', {
            confirmButtonText: '确定',
            callback: action => {
                next('/login');
            }
        });
        return;
    }
    // 代码执行到这，表示用户进入的页面是登录或注册页面
    next();
})
```

以上配置完成后，**用户可以随意进入登录和注册页**。同时，如果**本地没有 token，在进入权限页面时会提示用户去登录**，如果**本地有 token，但是 token 过期，也会提示用户去登录**。

### 2、配置动态路由

我们在 router 目录中，创建一个 `addRoutes.js` 文件，专门用来实现动态路由的配置。

首先，先将完整的子路由配置，以及路由对应的组件，在 `addRoutes.js` 文件保存：

```js
import HomeView from '../views/home/HomeView.vue'
import StudentsList from '../views/students/StudentsList.vue'
// ... 引入所有路由对应的组件

// 项目中完整的路由
const fullRoutes = [
    // ... 完整的路由对象的配置
]
```

封装一个生成动态路由的方法，并暴露出去：

```js
const addRoutes = () => {

}

export default addRoutes;
```

在全局导航守卫中，当我们确认**用户已登录，且登录状态未过期**时，就可以调用该方法来生成动态路由的配置。

```js
import addRoutes from './addRoutes';
router.beforeEach(async (to, from, next) => {
    // 当用户进入的页面不是登录也不是注册
    if (!to.path.includes('login') && !to.path.includes('register')) {
        // ...
        if (token) {
            // 发送请求验证 token 是否过期，如果 token 没有过期，就获取用户信息
            const res = await api.users.getUserInfo();
            if (res.code) {
                store.commit('SET_USER_INFO', res.data); // 将用户信息保存到仓库
                next();
                addRoutes();   // 开始生成动态路由
                return;
            }
        }
        // ...
    }
    // ...
})
```

配置动态路由，需要先获取到权限菜单数据。

前面我们在菜单组件中调用了请求获取了数据，但是，按照当前的代码执行，在配置动态路由时，菜单组件还没有创建，也就没办法发送请求获取权限数据。

因此，我们将菜单组件中发送请求的代码，换到配置动态路由的方法中来：

```js
export default {
    // created() {
    //     this.getAuthMenusAsync();
    // },
    // methods: {
    //     ...mapActions(["getAuthMenusAsync"]),
    // },
}
```

动态路由配置代码参考如下：

```js
const addRoutes = async () => {
    // 等待请求完成，并将数据保存到 state 中
    await store.dispatch('getAuthMenusAsync');

    router.addRoute({
        path: '/home',
        name: 'Home',
        component: HomeView,
        children: fullRoutes.filter(item => store.state.authMenus.includes(item.path))
    })
    router.addRoute({
        path: '*',
        name: 'NotFound',
        component: NotFound,
    })
}
```

# 路由配置

## 一、基础配置

在项目的 `/src/router/index.js` 文件中，来进行路由配置：

```js
const routes = [
 {
  path: '/home',
  name: 'Home',  // 路由名称，可选
  component: HomeView
 },
 {
  path: '/login',
  name: 'Login',  // 路由名称，可选
  component: LoginView
 },
 {
  path: '/register',
  name: 'Register',  // 路由名称，可选
  component: RegisterView
 }
]
```

项目中的每一个页面，都在 `routes` 数组中对应着一个对象。每一个对象都有三个属性：

1. `path`：浏览器路径；
2. `name`：路由名称（可选）；
3. `component`：组件；

## 二、路由出口

当用户在浏览器中访问某一个路径时，路由会判断当前路径的 path，然后找到该路径所对应的组件。

但是，路由找到组件后，并不知道组件在什么位置进行渲染，因此，我们需要给路由设置一个路由出口。

Vue Router 中提供了一个 `<router-view>` 标签，用来作为路由出口。

例如，我们可以在 `App.vue` 中设置一个路由出口：

```html
<template>
    <div>
        <router-view></router-view>
    </div>
</template>
```

 `<router-view>` 标签所在的位置，就是当前路径对应组件渲染的位置。

## 三、路由懒加载

传统的路由组件的加载方式，是在页面刷新时，就先将所有的组件都提前加载在内存中。当路由路径匹配成功后，直接渲染内存中的组件。

例如：

```js
import HomeView from '../views/home/HomeView.vue'
import LoginView from '../views/login/LoginView.vue'
```

路由懒加载，指的是只有当用户访问到对应的路由后，才开始加载对应的组件。

```js
const RegisterView = () => import('../views/register/RegisterView.vue');
```

路由配置参考如下：

```js
const routes = [
    {
        path: '/home',
        name: 'Home',  // 路由名称，可选
        component: HomeView
    },
    {
        path: '/login',
        name: 'Login',  // 路由名称，可选
        component: LoginView
    },
    {
        path: '/register',
        name: 'Register',  // 路由名称，可选
        component: RegisterView
    }
]
```

## 四、路由重定向

路由重定向，指的就是可以将一个 `path` 直接重定向到另一个 `path`。

例如，将 `/` 路径重定向到 `/home`，就表示只要用户访问 `/` 时，会直接跳转到 `/home`。

```js
const routes = [
    // 重定向
    {
        path: '/',
        redirect: '/home'
    },
    // .. 其他路由配置
]
```

## 五、404 页面配置

```js
const NotFound = () => import('../views/not-found/NotFound.vue')

const routes = [
    // ...其他路由配置
    // 404 页面
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }
]
```

## 六、路由模式

Vue Router 中，路由分为两种模式：

1. `history`：
2. `hash`：浏览器的路径中会出现 `#`

如果我们需要配置成 `history` 模式：

```js
const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes
})
```

如果我们需要配置成 `hash` 模式：

```js
const router = new VueRouter({
 routes
})
```

# state、getters 和 mutations 的使用

## 一、state 的使用

### 1、设置 state

state 对象中用来保存公共数据。

```js
export default new Vuex.Store({
    state: {
        userInfo: { username: '张三' }
    }
})
```

### 2、获取 state

在所有的组件中，都可以直接通过 `this.$store` 获取到仓库对象。仓库对象身上有一个 state 属性，用来获取仓库中 state 中所有的数据。

```vue
<p>欢迎你，{{$store.state.userInfo.username}}</p>
```

或者将仓库数据交给组件自己的计算属性：

```html
<p>欢迎你，{{username}}</p>

<script>
export default {
    computed: {
        username() {
            return this.$store.state.userInfo.username;
        }
    }
}
</script>
```

## 二、mutations

### 1、设置 mutations

mutations 用来设置修改 state 数据的方法：

```js
export default new Vuex.Store({
    state: {
        userInfo: { username: '张三' }
    },
    mutations: {
        SET_USER_INFO(state, payload) {
            state.userInfo = payload;
        }
    }
})
```

mutations 的参数说明：

- `state`：mutations 中的每一个方法，默认的第一个参数都是 state，用来接收仓库中的 state 对象；
- `payload`：payload 用来接收外部调用当前方法时传递的参数，可选；

### 2、调用 mutations

组件中，要调用 mutations 的方法，需要通过 `commit()` 的方法：

```js
this.$store.commit('SET_USER_INFO', { username: '李四' });
```

如果是在组件以外的其他文件中，要调用 mutations 的方法，需要先引入 store：

```js
import store from '@/store';

store.commit('SET_USER_INFO', { username: '李四' });
```

## 三、getters 的使用

在仓库中，可以通过 getters 来对 state 中的数据进行计算，从而得到一条新的数据。

### 1、设置 getters

仓库中通过 getters 处理 state：

```js
export default new Vuex.Store({
    state: {
        userInfo: { username: '张三' }
    },
    getters: {
        username(state) {
            return state.userInfo.username;
        }
        // username: state => state.userInfo.username 简写
    }
})
```

getters 中所有的属性都是方法，每一个 getters 的方法，默认的第一个参数都是 `state`，用来接收仓库中的 state 对象。

注意：getters 的方法中不能修改state。

### 2、获取 getters

```html
<p>欢迎你，{{$store.getters.username}}</p>
```

```html
<p>欢迎你，{{username}}</p>

<script>
export default {
    computed: {
        username() {
            return this.$store.getters.username;
        }
    }
}
</script>
```

# 准备工作

## 一、VSCode 安装插件

在 VSCode 中安装以下插件：

![image-20220719124911669](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/jianglan/20220719124911.png)

## 二、项目结构

```bash
vue-demo
 |--- node_modules
 |--- public
 |     |--- favicon.ico    # 浏览器标题栏的小图标
 |     |--- index.html     # 项目页面
 |--- src
 |   |--- assets    # 静态资源文件，例如图片、字体图标等
 |   |--- components  # 组件
 |    |--- App.vue   # 最外层容器组件
 |    |--- main.js    # 项目入口文件
```

# 生命周期函数

## 一、概念

### 1、组件的生命周期

组件的生命周期，指的就是一个组件从创建到销毁的整个过程，在整个过程中我们可以将其分成四个阶段：

1. 组件创建阶段：在内存中将组件创建出来
2. 组件挂载阶段：将内存中的组件渲染到页面中
3. 组件更新阶段：当组件内部数据发生改变时，组件重新渲染
4. 组件销毁阶段：当组件从节点中消失

### 2、生命周期函数

生命周期函数，指的是 Vue 在组件生命周期的各个阶段，提供了对应的一些函数。当组件的生命周期到达某一个阶段时，就会自动调用对应的生命周期函数。

## 二、生命周期函数

Vue 中总共提供了 8 个生命周期函数。

```html
<template>
    <div>
        <h1>生命周期函数</h1>
        <p>{{ msg }}</p>
        <button @click="msg = 'world'">更新</button>
        <button @click="$destroy()">销毁</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "hello",
        };
    },
    beforeCreate() {
        console.log("beforeCreate 组件创建前", this.msg);
    },
    created() {
        console.log("created 组件创建完成", this.msg);
    },
    beforeMount() {
        console.log("beforeMount 组件挂载前");
    },
    mounted() {
        console.log("mounted 组件挂载完成");
    },
    beforeUpdate() {
        console.log("beforeUpdate 组件更新前");
    },
    updated() {
        console.log("updated 组件更新完成");
    },
    beforeDestroy() {
        console.log("beforeDestroy 组件销毁前");
    },
    destroyed() {
        console.log("beforeDestroy 组件销毁完成");
    },
};
</script>
```

# 动态路由优化

前面我们实现了动态菜单和动态路由的基本配置，但是会有一些 bug，所以我们还需要对它们做进一步的优化。

## 一、防止已登陆用户重复登录

正常情况下来说，一个已经登录了的用户，除非退出登录，否则是不能再手动跳转到登录页面去重新登录的。

所以，我们需要在全局导航守卫中对“跳转到登录”做进一步的判断：

```js
router.beforeEach(async (to, from, next) => {
    // 当用户进入的页面不是登录也不是注册(例如进入首页)
    if (!to.path.includes('login') && !to.path.includes('register')) {
        // ....
    }
    // 判断用户是否想要进入登录页
    if (to.path.includes('login')) {
        const token = localStorage.token;
        // 如果有 token，判定为已登录，不让用户进入登录页面
        if (token) {
            next(false);  // 停留在当前页面
            return;
        }
    }
    next();
})
```

以上配置代码的逻辑是：如果进入登录页的用户，本地还有 token，我们就判定为是已登录用户，就强制让其停留在当前页面，不能跳转到登录页。

但是注意！！！这样处理了之后会有另一个 bug，就是用户在页面中，如果因为正常的 token 过期想要跳转到登录页，也跳转不过去了。因为我们刚刚在导航守卫里限制的是“只要本地有 token，就不让用户去重新登录”。

解决方案也很简单，我们直接在 `utils/request.js` 文件的 axios 响应拦截器中，当判断用户是 401 身份过期后，我们就将本地存储的 token 删掉，再跳转到登录页：

```js
axios.interceptors.response.use((res) => {
    return res.data;
}, (err) => {
    if (err && err.response && err.response.status) {
        if (err.response.status === 401) {
            MessageBox.alert('登录已过期，请重新登录', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    localStorage.removeItem('token');  // 删除 token
                    router.replace('/login');
                }
            });
        }
    }
    return Promise.reject(err.message);
});
```

以上配置完成后，就可以让已登录用户无法进入登录页面，同时也可以让 token 过期的用户进入到登录页面。

## 二、退出登录

已登录的用户如果想要切换账号登录，必须退出登录后，再重新登录。

所以我们可以在页面中给用户一个“退出”按钮，然后在退出登录的事件中做以下处理：

```js
export default {
    methods: {
        logout() {
            localStorage.removeItem("token");
            this.$router.push("/login");
            // 刷新页面（重置路由、重置权限菜单的数据）
            location.reload();
        },
    }
}
```

## 三、防止重复添加动态路由

由于我们是在导航守卫中进行的“动态路由”的添加，所以每次进入导航守卫时，都有可能重复的添加动态路由，导致我们浏览器的控制台的中会不断的抛出黄色警告说路由重复：

![image-20220804183105018](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/jianglan/20220804183105.png)

因此，我们需要在 `router/addRoutes.js` 中添加一个判断，来阻止动态路由的重复添加：

```js
const addRoutes = async () => {
    // 判断权限数据是否为空，为空的话才进入 if 请求权限数据、添加动态路由
    // 目的就是为了防止重复请求权限数据、重复添加动态路由
    if (store.state.authMenus.length === 0) {
        // 等待请求完成，并将数据保存到 state 中
        await store.dispatch('getAuthMenusAsync');
        router.addRoute({
            path: '/home',
            name: 'Home',
            component: HomeView,
            children: fullRoutes.filter(item => {
                return store.state.authMenus.includes(item.path);
            })
        })
        // 404 放到所有路由的最后
        router.addRoute({
            path: '*',
            name: 'NotFound',
            component: NotFound,
        })
    }
}
```

## 四、筛选 path 的动态路由

在我们的项目中，有一个页面的路由路径是带动态参数的动态路由，例如修改学生的路由路径配置如下：

```js
{
    path: 'studentsUpdate/:id',
    // ...
}
```

这种动态路径，如果按照我们之前筛选路由的方式来添加动态路由，就会匹配不上，所以，我们还需要对前面筛选动态路由进行修改：

```js
const addRoutes = async () => {
    // ....
    router.addRoute({
        path: '/home',
        name: 'Home',
        component: HomeView,
        children: fullRoutes.filter(item => {
            // item.path.split('/')[0] 获取动态路由路径的前半部分
            return store.state.authMenus.includes(item.path.split('/')[0]); 
        })
    })
    // ...
}
```

# 路由跳转

Vue Router 中提供了两种路由跳转的方式：

1. 标签（组件）跳转
2. API 跳转

##  一、标签（组件）跳转

Vue Router 中提供了一个 `<router-link>` 来实现路由的跳转：

```html
<router-link to="/register">没有账号？去注册</router-link>
```

 其中，`to` 属性用来设置跳转的路径。

### to

`to` 属性的值，除了可以给一个路径字符串以外，还可以设置成对象：

```html
<router-link :to="{ path: '/register' }">没有账号？去注册</router-link>
<router-link :to="{ name: 'Register' }">没有账号？去注册</router-link>
```

## 二、API 跳转

```js
export default {
    methods: {
        register() {
            alert("注册成功");
            
            this.$router.push("/login");
            
            this.$router.push({
                path: "/login",
            });
            
            this.$router.push({
                name: "Login",
            });
        },
    },
};
```

## 三、其他跳转方式

### 1、replace 跳转

replace 跳转，指的就是跳转后的新路由会替换掉旧路由的访问记录，意味着用户能再返回上一个页面。

```html
<router-link to="/home" replace>首页</router-link>
<router-link to="/home" :replace="true">首页</router-link>
```

```js
export default {
    methods: {
        toHome() {
            this.$router.replace('/home');
        }
    }
};
```

### 2、其他跳转

```js
this.$router.go(1);     // 前进一个页面
this.$router.go(-1);    // 回退一个页面
this.$router.go(0);     // 刷新当前页面
this.$router.forward(); // 前进一个页面
this.$router.back();    // 回退一个页面
```
# actions

## 一、创建 action 方法

```js
export default new Vuex.Store({
    actions: {
        方法名(context, payload) {
            // 发送异步请求
        }
    }
})
```

参数说明：

- `context`：当前的 store 对象；
- `payload`：接收外部传递的参数，可选；

## 二、调用 action 方法

在组件中，如果要调用 action 的方法，需要通过 `dispatch()` 方法：

```js
this.$store.dispatch('getSubjectsAsync');
```

## 三、处理 action 请求结果

action 的请求结果，通常有两种处理方法：

1. **请求结果多个组件需要使用**：将请求结果保存到 state 中；
2. **请求结果只有一个组件需要使用**：将请求结果 return 返回给组件；

### 1、请求结果保存到 state

action 中不能直接修改 state，所以，如果要**将 action 的请求结果保存到 state 中**，需要经过以下步骤：

1. action 调用 mutations 的方法，并将数据传递给 mutations；
2. mutations 中接收到数据后，用新数据去修改 state；

示例代码：

```js
export default new Vuex.Store({
    state: {
        subjects: [],  // 专业数据的初始值
    },
    mutations: {
        SET_SUBJECTS(state, payload) {
            state.subjects = payload.rows;
        }
    },
    actions: {
        async getSubjectsAsync(context) {
            const res = await api.subjects.get();
            if (res.code) {
                context.commit('SET_SUBJECTS', res.data);
            }
        }
    }
})
```

# 事件总线

## 一、工作原理

事件总线，主要用来是实现非父子组件之间的传值。它的工作原理：通过 `new Vue()` 再创建一个新的 vue 实例对象 `bus`，将这个新的实例对象作为桥梁，来实现两个组件之间的传值。

例如：当组件 A 想要传值给组件 B 时，步骤如下图所示：

![](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/jianglan/20220726140840.png)

## 二、工作步骤

### 1、创建事件总线 bus

我们可以在项目的 `src` 目录中，新建一个 `/utils/bus.js` 文件，然后在该文件中，来生成 bus 对象：

```js
import Vue from "vue";
const bus = new Vue();
export default bus;
```

### 2、给 bus 添加事件

我们需要在“**接收数据**”的组件中，给事件总线身上添加一个事件。

```js
import bus from "./bus.js";
export default {
    data() {
        return {
            num: "",
        };
    },
    mounted() {
        // 给事件总线身上添加一个事件(箭头函数默认不会执行)
        bus.$on("getData", (data) => {
            // console.log("组件B接收到其他组件传递的数据", data);
            this.num = data;
        });
    },
};
```

### 3、调用 bus 的事件

我们在需要“传递数据”的组件中，来调用事件总线身上的方法，同时传值：

```js
import bus from "./bus.js";
export default {
    data() {
        return {
            num: 1,
        };
    },
    methods: {
        postData() {
            // 调用事件总线身上的方法，同时传值
            bus.$emit('getData', this.num);
        },
    },
};
```

## 三、注意事项

在使用事件总线时，**负责“接收数据”的组件，需要提前先渲染出来**，执行生命周期函数，同时给事件总线添加事件。

如果“接收数据”和“传递数据”的组件是同时渲染出来的，我们就可以用事件总线来实现两个组件之间的传值。但是，如果“接收数据”的组件，比“传递数据”的组件后渲染，就不能使用事件总线。

# 组件

## 一、组件的概念

我们可以把每一个页面都划分成一块一块的小区域，这些小区域经过各种方式的组合，拼凑成的一个完整的页面。

在 Vue 应用中，这些构成完整页面的每一块区域，都可以变成一个单独的“组件”。

## 二、单文件组件

单文件组件，是指每一个以 `.vue` 为后缀名的文件，都是一个组件（建议组件名以大驼峰命名法进行命名）。

每一个单文件组件都是由三部分组成：

1. template：必须的
2. script：可选的
3. style：可选的

## 三、组件嵌套

我们通常都需要在一个组件中，去嵌套渲染另一个组件。使用步骤如下：

1. 引入子组件：
2. 注册子组件：
3. 渲染子组件：

### 1、引入子组件

```html
<script>
import Child from './components/Child.vue';
</script>
```

### 2、注册子组件

```html
<script>
import Child from './components/Child.vue';
export default {
    components: {
        Child
    }
}
</script>
```

### 3、渲染子组件

```html
<template>
  <Child></Child>
</template>
```
# 自定义指令

Vue 中提供了许多以  `v-` 开头的特殊属性用来标签身上，这些特殊属性都称为“指令”。

自定义指令，指的就是我们可以自己定义一个以 `v-` 开头的指令用来标签身上，而指令具体的功能，也由我们自己来定义。

## 一、基础语法

自定义指令分为全局指令和局部指令。

### 1、全局指令

全局指令可以作用于应用中的所有组件。

```js
import Vue from 'vue';

Vue.directive('指令名', {
    // 指令内容
});
```

### 2、局部指令

局部指令只可以作用于当前组件。

```js
export default {
    directives: {
        指令名: {
            // 指令内容
        }
    }
}
```

## 二、钩子函数

每一个自定义指令的对象中，都提供了以下几个钩子函数：

1. `bind`：只会执行一次，当指令第一次绑定到元素身上时执行，我们可以在这里面做一些一次性的初始化设置；
2. `inserted`：当指令所在元素被添加到父节点中时执行；
3. `update`：组件更新时执行；
4. `unbind`：指调用一次，当指令与元素解绑时执行；

语法结构：

```js
Vue.directive('指令名', {
    inserted(el, binding) {
        
    }
});
```

## 三、示例

例如我们要根据不同权限用户来控制按钮的权限。

我们可以在 src 目录中创建一个 `directives/index.js` 文件，设置以下代码：

```js
import store from "@/store";
import Vue from "vue";

Vue.directive('auth', {
    inserted(el, binding) {
        // 如果当前登录用户不是最高权限
        if (store.state.userInfo.auth != 2) {
            // el.remove();
            el.disabled = true;   // 有禁用功能
            el.classList.add('is-disabled');  // 有禁用样式
        }
    }
});
```

然后在 `main.js` 中引入该文件：

```js
import './directives'
```

最后，在需要控制权限的按钮身上使用该指令即可：

```html
<el-button v-auth size="mini" type="danger" @click="handleDelete(scope.row)">
    删除
</el-button>
```
# 嵌套路由

嵌套路由，指的是在原有路由的基础上，继续添加下一级路由。

## 一、配置嵌套路由

```js
const routes = [
    {
        path: '/home',
        name: 'Home', 
        component: HomeView,
        // 嵌套路由
        children: [
            {
                path: 'studentsList',  // 子路由的 path 不要以“/”开头
                name: 'StudentsList',
                component: StudentsList
            },
            {
                path: 'studentsAdd',
                name: 'StudentsAdd',
                component: StudentsAdd
            },
        ]
    },
]
```

配置完成后，我们就可以在浏览器中通过 `/home/studentsList` 来进行访问。

## 二、配置子路由出口

子路由配置成功后，还需要在父级路由的组件中，来设置子路由组件的出口。

```html
<el-main>
    <router-view></router-view>
</el-main>
```

## 三、嵌套路由的跳转

我们在前面学习的路由跳转方式，都可以用来做嵌套路由的跳转。需要注意的是，**在跳转嵌套路由时，必须设置完整的跳转路径。**

例如，我们想要跳转到首页中的学生列表：

```html
<router-link to="/home/studentsList">学生列表</router-link>
```

```js
this.$router.push('/home/studentsList')
```

# 辅助函数

如果用传统的方式去获取 Vuex 中的数据或方法，每次都需要通过 `this.$store` 去进行操作，这样的操作方式比较繁琐。所以，Vuex 中还给我们提供了辅助函数的形式，来优化对 Vuex 的操作。

## 一、辅助函数的概念

Vuex 总共提供了四个辅助函数：

- `mapState()`：获取 state 数据
- `mapGetters()`：获取 getters 数据
- `mapMutations()`：获取 mutations 方法
- `mapActions()`：获取 actions 方法

mapState 和 mapGetters 这两个辅助函数的原理，就是将 state 和 getters 中数据，拿到组件自己的 computed 中来，变成组件自己的计算属性来使用。

mapMutations 和 mapActions 这两个辅助函数的原理，就是 mutations 和 actions 中的方法，拿到组件自己的 methods 中来，变成组件自己的方法来调用。

## 二、使用

### 1、引入

```js
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
```

### 2、调用

```js
export default {
    computed: {
        ...mapState(['state中的数据名', 'state中的数据名']),
        // 例如：...mapState(['userInfo', 'subjects']),
        ...mapGetters(['getters中的数据名'])
        // 例如：...mapGetters(['username']),
    },
    methods: {
        ...mapMutations(['mutations中的方法名', 'mutations中的方法名']),
        // 例如：...mapMutations(['SET_SUBJECTS']),
        ...mapActions(['actions中的方法名'])
        // 例如：...mapActions(['getSubjectsAsync']),
    }
}
```
通过以上辅助函数的调用获取后，Vuex 中的数据和方法，都会变成组件自己的计算属性和方法。

# 数据与渲染

## 一、数据

每一个组件中，都有一个 `data` 属性，用来设置当前组件所需要的数据。

```html
<script>
export default {
    data() {
        return {
            // 组件所需要的数据
            msg: "Hello",
            name: "张三",
        };
    }
};
</script>
```

## 二、渲染数据

### 1、模板语法

```html
<template>
    <div>
        <h1>{{ msg }}</h1>
        <h1>{{ name }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 组件所需要的数据
            msg: "Hello",
            name: "张三",
        };
    },
};
</script>
```

说明：双括号可以放所有的 JS 表达式。
JS 表达式，指的就是这一段代码执行完成后，会留下一个最终的值。例如：

```js
const num = 10;

num > 0 ? '正数': '负数';
```

### 2、v-text 和 v-html

```html
<template>
    <div>
        <h2 v-text="name"></h2>
        <h2 v-html="msg"></h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "<a href='#'>Hello</a>",
            name: "张三",
        };
    },
};
</script>
```

# 动态组件

## 一、基础语法

```html
<template>
    <div>
        <div>
            <button @click="currentTab = 'TabA'">TabA</button>
            <button @click="currentTab = 'TabB'">TabB</button>
        </div>
        <div>
            <component :is="currentTab"></component>
        </div>
    </div>
</template>

<script>
    import TabA from "./TabA.vue";
    import TabB from "./TabB.vue";
    export default {
        data() {
            return {
                currentTab: "TabA",
            };
        },
        components: {
            TabA,
            TabB,
        },
    };
</script>
```

## 二、生命周期

所有的动态组件在切换时，默认都会不断的进行销毁和重建。

每一个组件被切换走时，都会触发销毁阶段的两个生命周期函数：

```js
export default {
    beforeDestroy() {
        
    },
    destroyed() {
        
    }
}
```

每一个组件被切换显示时，都会触发创建阶段和挂载阶段的四个生命周期函数：

```js
export default {
    beforeCreate() {
        
    },
    created() {
        
    },
    beforeMount() {
        
    },
    mounted() {
        
    }
}
```
# 过滤器

Vue 中的过滤器，就是我们可以传递一个数据给过滤器，然后在过滤器对数据进行处理，最后返回一个过滤之后的新数据。

## 一、创建过滤器

过滤器分为全局过滤器和局部过滤器。

### 1、全局过滤器

全局过滤器可以作用于应用中的所有组件。

```js
import Vue from 'vue';

Vue.filter('过滤器名', function(value) {
    return 新数据;
});
```

### 2、局部过滤器

局部过滤器只作用于当前组件。

```js
export default {
    filters: {
        过滤器名(value) {
            return 新数据;
        }
    }
}
```

## 二、使用过滤器

过滤器可以用在纯文本中，也可以用在标签的属性中。

```html
<p>文本内容 | 过滤器名</p>
<p v-bind:class="内容 | 过滤器名"></p>
```

## 三、示例

我们对学生列表中学生的性别进行数据过滤。

```js
export default {
    filters: {
        genderFilter(value) {
            if (value == 1 || value == "男") {
                return "男";
            } else if (value === 0 || value == "女") {
                return "女";
            }
            return "保密";
        },
    },
}
```

最后，在列表中渲染时使用过滤器：

```html
<el-table-column label="性别">
    <template slot-scope="scope">
        <el-tag>{{scope.row.gender | genderFilter}}</el-tag>
    </template>
</el-table-column>
```

# 动态路由

动态路由，指的就是路由的路径中，有一部分内容是动态发生变化的，这种路由我们就称为“动态路由”。

例如，我们要通过动态路由进入到“修改学生”的页面：

```bash
/home/studentsUpdate/001
/home/studentsUpdate/002
/home/studentsUpdate/003
```

其中，`001` 等数字就是当前路径中动态的部分。

## 一、配置动态路由

```js
const routes = [
    {

        path: '/home',
        name: 'Home',  // 路由名称，可选
        component: HomeView,
        children: [
            {
                path: 'studentsUpdate/:id',
                name: 'StudentsUpdate',
                component: StudentsUpdate
            }
        ]
    }
]
```

其中，`id` 可以是任意变量名。

## 二、跳转动态路由

默认情况下，动态路由在跳转时，必须在跳转路径中设置动态部分。

例如跳转到学生修改页面：

```js
export default {
    methods: {
        handleEdit(row) {
            this.$router.push(`/home/studentsUpdate/${row._id}`);
        }
    }
}
```

如果我们希望，在跳转时，动态部分可有可无，那么我们在配置动态路由时，可以添加一个 `?`：

```js
const routes = [
    {

        path: '/home',
        name: 'Home',  // 路由名称，可选
        component: HomeView,
        children: [
            {
                path: 'studentsUpdate/:id?',
                name: 'StudentsUpdate',
                component: StudentsUpdate
            }
        ]
    }
]
```

## 三、获取动态路由的参数

Vue Router 中提供了两种获取动态路由参数的方式。

### 1、通过 $route 获取

```js
export default {
    created() {
        console.log(this.$route.params)
    }
}
```

### 2、通过 props 获取

如果我们想要在组件中通过 props 来获取动态路由的参数，需要先在路由配置中添加以下属性：

```js
const routes = [
    {

        path: '/home',
        name: 'Home',  // 路由名称，可选
        component: HomeView,
        children: [
            {
                path: 'studentsUpdate/:id',
                name: 'StudentsUpdate',
                component: StudentsUpdate,
                props: true
            }
        ]
    }
]
```

配置成功后，就可以直接在组件的 props 中获取动态路由的参数了：

```js
export default {
    props: ["id"],
    created() {
        console.log(this.id);
    },
}
```

# 模块化

我们可以通过 modules 这个属性，对仓库进行模块化拆分，可以将一个 store，拆分成多个模块。

## 一、仓库配置模块化

### 1、创建模块文件

```bash
store
  |--- modules
  |       |--- students.js
  |       |--- classes.js
  |       |--- subjects.js
  |       |--- ...
  |--- index.js         # 主仓库的配置文件
```

### 2、配置模块

```js
export default {
    // 解决命名空间冲突
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {}
}
```

每一个模块都需要设置一个 `namespaced: true` 的属性，如果不设置这个属性，那么所有模块文件中的代码，最终还是会编译成主仓库的内容。

剩下的五大核心属性，和主仓库中的用法一模一样。

案例代码：

```js
export default {
    // 解决命名空间冲突
    namespaced: true,
    state: {
        subjects: [],  // 专业数据的初始值
    },
    mutations: {
        SET_SUBJECTS(state, payload) {
            state.subjects = payload.rows;
        }
    },
    actions: {
        async getSubjectsAsync(context) {
            const res = await api.subjects.get();
            if (res.code) {
                context.commit('SET_SUBJECTS', res.data);
            }
        }
    }
}
```

### 3、主仓库引入模块

```js
import subjects from './modules/subjects'

export default new Vuex.Store({
    modules: {
        subjects
    }
})
```

## 二、组件中使用模块

组件中要使用模块中的数据或方法，也有两种方式：

1. 原生方式（不用辅助函数）
2. 辅助函数

### 1、原生方式（不用辅助函数）

在组件中用原生的方式获取**仓库模块**中的 state 和 getters 时：

```js
export default {
    computed: {
        计算属性名() {
            return this.$store.state.模块名.state数据名
        },
        计算属性名() {
            return this.$store.getters['模块名/getters数据名']
        },
    }
}
```

在组件中用原生的方式调用**仓库模块**中的 mutations 和 actions 方法：

```js
export default {
    methods: {
        方法名() {
            this.$store.commit('模块名/mutations方法名')
        },
        方法名() {
            this.$store.dispatch('模块名/actions方法名')
        }
    }
}
```

### 2、辅助函数

如果在组件中需要通过辅助函数的形式来获取模块中的数据和方法。

在引入辅助函数时，需要用模块化的方式来引入：

```js
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers("模块名");
```

拿到辅助后，后续的用法就和之前辅助函数的用法一样了。

```js
export default {
    computed: {
        ...mapState(['state中的数据名', 'state中的数据名']),
        // 例如：...mapState(['userInfo', 'subjects']),
        ...mapGetters(['getters中的数据名'])
        // 例如：...mapGetters(['username']),
    },
    methods: {
        ...mapMutations(['mutations中的方法名', 'mutations中的方法名']),
        // 例如：...mapMutations(['SET_SUBJECTS']),
        ...mapActions(['actions中的方法名'])
        // 例如：...mapActions(['getSubjectsAsync']),
    }
}
```

### 3、组件中使用多个仓库模块

```js
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers("subejctsModule");
const { 
    mapState: classesState, 
    mapGetters: classesGetters, 
    mapMutations: classesMutations, 
    mapActions: classesActions
} = createNamespacedHelpers("classesModule");
```

# 指令

Vue 中，给标签身上提供了一系列的以 `v-` 开头的特殊属性，称为“指令”。

## 一、v-show

v-show 指令可以通过布尔值来控制元素的显示或隐藏：

```html
<h1 v-show="false">Hello</h1>
```

v-show 的值，可以是一个固定的布尔值，也可以是 data 中的一个动态数据：

```html
<template>
    <div>
        <h1 v-show="isShow">Hello</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: false
            };
        },
    };
</script>
```

如果 v-show 的值不是一个布尔值，会自动隐式转换为布尔值后进行判断。

## 二、v-bind

v-bind 用来实现属性的动态绑定。

### 基本用法

当我们希望 HTML 标签身上的某些属性的值，是一个动态的数据时，就可以用 v-bind 来处理该属性：

```html
<template>
    <div>
        <a href="https://www.woniuxy.com">蜗牛学苑</a>
        <a v-bind:href="link">蜗牛学苑</a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: 'https://www.woniuxy.com'
            };
        },
    };
</script>
```

### 动态渲染图片

如果需要通过 v-bind 来动态渲染图片，需要分两种情况考虑：

1. 动态渲染网络图片
2. 动态渲染本地图片

#### 1、动态渲染网络图片

示例代码：

```html
<template>
    <div>
        <img v-bind:src="imgPath" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgPath: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
            };
        },
    };
</script>
```

#### 2、动态渲染本地图片

因为 Vue 项目中，是通过 webpack 来进行代码的编译，因此，本地图片也会被 webpack 进行打包处理。所以，我们在动态渲染本地图片时，需要使用以下两种方式：

```vue
<template>
    <div>
        <img v-bind:src="imgPath1" />
        <img v-bind:src="require(`../../assets/${imgPath2}`)" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgPath1: require('../../assets/logo.png'),
                imgPath2: 'logo.png'
            };
        },
    };
</script>
```

# keep-alive

## 一、基础语法

Vue 中提供了一组标签 `<keep-alive>`，所有被 `<keep-alive>` 包裹的组件，都会被缓存，可以让组件在切换时不被销毁。

```html
<keep-alive>
 <!-- 其他组件 -->
</keep-alive>
```

示例代码：

```html
<keep-alive>
    <component :is="currentTab"></component>
</keep-alive>
```

## 二、生命周期函数

所有被 `<keep-alive>` 包裹的组件，除了首次显示时，会执行创建和挂载的生命周期函数，后续我们再在这些组件之间进行切换时，都不会再反复触发原本的生命周期函数了。

但是，所有被 `<keep-alive>` 包裹的组件会额外的新增两个生命周期函数：

```js
export default {
    activated() {
        console.log('进入组件时');
    },
    deactivated() {
        console.log('离开组件时');
    }
};
```

## 三、筛选组件

`<keep-alive>` 身上还提供了两个属性，用来对缓存的组件进行筛选：

- `include`：值是字符串或正则，用来设置需要缓存的组件名称；
- `exclude`：值是字符串或正则，设置不需要缓存的组件名称；

示例代码：

```html
<keep-alive exclude="TabA">
    <component :is="currentTab"></component>
</keep-alive>
```

```html
<keep-alive :include="/(TabA)|(TabB)/">
    <component :is="currentTab"></component>
</keep-alive>
```

# 混入

Vue 中的混入，就是用来提取多个组件中公共的 JS 代码。

## 一、创建混入对象

我们在 src 中创建一个 `mixins` 目录，在该目录中来创建混入对象：

```js
const pageMixin = {
    data() {
        return {
            pageData: {
                currentPage: 1,
                pageSize: 5,
            }
        };
    },
    methods: {
        handlePageData(pageData) {
            this.pageData = pageData;
        }
    }
}
export default pageMixin;
```

## 二、引入混入对象

```js
import pageMixin from "@/mixins/pageMixin.js";

export default {
    mixins: [pageMixin]
}
```

组件中引入的混入对象，会和组件自己的属性方法等做合并。

# query 路由传参

Vue Router 中除了用动态路由传参外，路由也提供了专门的传参方法。

## 一、传递参数

例如，我们要跳转“修改学生”的页面，并将学生 id 传递过去：

```html
<router-link to="/home/studentsUpdate?id=001">修改</router-link>
```

```js
this.$router.push('/home/studentsUpdate?id=001');
```

除了用 `?` 将路径和参数分割开以外，还可以有 query 属性：

```html
<router-link :to="{ path: '/home/studentsUpdate?id=001', query: { id: '001'}}">修改</router-link>
```

```js
this.$router.push({
    path: '/home/studentsUpdate',
    query: {
        id: '001',
        // 其他参数
    }
});
```

以上两种语法，最终运行的效果是一样的。

## 二、路由配置

**`query` 的传参方式，路由不需要做额外配置。**

注意：`query` 的传参方式，路由是一个普通路由，在路由配置时不需要设置成动态路由。

## 三、接收参数

在组件中，如果要接收通过 `query` 传递的参数，接收时通过以下方式：

```js
console.log(this.$route.query);
```

通常，我们需要用路由传递多个参数时，可以选择使用 query 的传参方式。


# 事件处理

## 一、绑定事件

Vue 中提供了一个 `v-on` 的指令来绑定事件：

```html
<template>
    <div>
        <h1>{{ num }}</h1>
        <button v-on:click="num++">+1</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 1,
            };
        },
    };
</script>
```

## 二、事件方法

每一个组件中，都有一个 `methods` 属性，用来设置组件的方法。

```html
<template>
    <button v-on:click="decrement">-1</button>
</template>
<script>
    export default {
        data() {
            return {
                num: 1
            }
        },
        methods: {
            decrement() {
                this.num--;
            },
            setNumber() {

            },
            // ...
        }
    }
</script>
```

说明：在方法中访问 data 中的数据需要通过 `this` 进行访问。

## 三、事件传参

```html
<template>
    <div>
        <button v-on:click="setNumber(10)">赋值 10</button>
        <button v-on:click="setNumber(20)">赋值 20</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                num: 1
            }
        },
        methods: {
            setNumber(newValue) {
                this.num = newValue;
            },
            // ...
        }
    }
</script>
```

## 四、修饰符

### 1、事件修饰符

- `.prevent`：阻止事件的默认行为，等同于原生 JS 中的 `event.preventDefault()`；
- `.stop`：阻止事件的传播，等同于原生 JS 中的 `event.stopPropagation()`；

示例代码：

```html
<a href="#" v-on:click.prevent="toLink">链接</a>
<a href="#" v-on:click.prevent>链接</a>
<a href="#" v-on:click.prevent.stop>链接</a>
```

### 2、按键修饰符

- `.enter`：当按下回车键时触发对应的事件；

示例代码：

```html
<input v-on:keyup.enter="inputEvent" />
```

### 3、系统修饰键

- `.ctrl`
- `.shift`
- `.alt`

示例代码：

```html
<a href="https://www.woniuxy.com" v-on:click.ctrl="doSomething">跳转</a>
```

# 插槽

## 一、基础语法

Vue 提供了一个 `<slot>` 标签，叫做“插槽”。

我们可以在 `<template>` 中使用插槽来作为“占位符”，后续组件外部可以传递数据、组件、标签等内容到插槽所在的位置。

### 1、定义插槽

```html
<template>
    <div>
        <h3>子组件</h3>
        <slot></slot>
    </div>
</template>
```

### 2、给插槽传递内容

```html
<SlotChild>
    <p>这是父组件传递给子组件插槽的内容</p>
    <p>这是父组件传递给子组件插槽的内容</p>
</SlotChild>
```

## 二、具名插槽（命名插槽）

### 1、插槽命名

```html
<template>
    <div>
        <h3>子组件</h3>
        <slot name="before"></slot>
        <hr>
        <slot name="after"></slot>
    </div>
</template>
```

### 2、给指定插槽传递内容

```html
<SlotChild>
    <template v-slot:before>
        <p>这是父组件传递给子组件第一个插槽的内容</p>
    </template>

    <template #after>
        <p>这是父组件传递给子组件第二个插槽的内容</p>
    </template>
</SlotChild>
```

注意：`v-slot` 只能在 `<template>` 或组件身上使用。

`v-slot:` 可以简写为 `#`。

## 三、后备内容（插槽的默认值）

```html
<template>
    <div>
        <h3>子组件</h3>
        <slot name="before">
            <p>这是插槽的默认内容</p>
        </slot>
        <hr />
        <slot name="after">
            <p>这是插槽的默认内容</p>
        </slot>
        <hr />
        <slot>
            <p>这是插槽的默认内容</p>
        </slot>
    </div>
</template>
```

## 四、作用域插槽

当数据在子组件中，但是渲染数据的节点是父组件来提供的，这种情况下，我们就需要使用作用域插槽。

### 1、子组件通过插槽传值

```html
<template>
    <div>
        <h3>子组件</h3>
        <slot :students="students"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            students: [
                { id: 1, name: "张三" },
                { id: 2, name: "李四" },
                { id: 3, name: "王五" },
            ],
        };
    },
};
</script>
```

### 2、父组件通过 v-slot 接收值

```html
<template>
    <div>
        
        <SlotChild>
            <template v-slot="{ students }">
                <ul>
                    <li v-for="item in students" :key="item.id">
                        {{ item.name }}
                    </li>
                </ul>
            </template>
        </SlotChild>
        
        <SlotChild>
            <template v-slot="{ students }">
                <ol>
                    <li v-for="item in students" :key="item.id">
                        {{ item.name }}
                    </li>
                </ol>
            </template>
        </SlotChild>
        
    </div>
</template>
```

# 可视化图表

## 一、下载

```bash
npm install echarts --save
```

## 二、使用

### 1、引入

```js
import * as echarts from "echarts";
```

### 2、初始化

```js
var myChart;
export default {
    mounted() {
        myChart = echarts.init(document.getElementById("chart-one"));
    }
}
```

### 3、处理渲染数据

```js
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("classesModule");
export default {
    created() {
        this.getClassesAsync();
    },
    computed: {
        ...mapState(["classes"]),
        chartOneData() {
            return {
                title: {
                    text: "班级人数统计",
                },
                tooltip: {},
                xAxis: {
                    data: this.classes.map((item) => item.name),
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: this.classes.map((item) => item.students.length),
                    },
                ],
            };
        },
    },
    methods: {
        ...mapActions(["getClassesAsync"]),
    },
};
```

### 4、渲染

```js
export default {
    watch: {
        classes() {
            myChart.setOption(this.chartOneData);
        },
    }
}
```

# 路由元信息

## 一、基础语法

### 1、设置路由元信息

在配置路由时，每一个路由对象，除了必填的 `path` 和 `component` 属性外，Vue Router 还给它们提供了一个属性 `meta`，用来设置路由元信息。

```js
const routes = [
    {
        // ...,
        children: [
            {
                path: 'studentsList', 
                name: 'StudentsList',
                component: StudentsList,
                // 路由元信息
                meta: {

                }
            },
        ]
    }
]
```

除了路由提供了基本属性外，如果我们还想要给路由对象身上添加一个额外的信息，就可以在 `meta` 对象中设置。

### 2、获取路由元信息

在组件中，通过 `this.$route` 可以获取到当前页面的路由信息对象。在该对象身上，就有一个 `meta` 属性，可以获取到当前路由的元信息数据。

```js
export default {
    created() {
        console.log(this.$route.meta);
    }
}
```

## 二、应用场景

### 1、面包屑

我们可以通过路由元信息来实现面包屑组件的渲染。

#### 1）设置路由元信息

将面包屑需要用到的标题，都设置在路由元信息中：

```js
const routes = [
    // ...
    {
        //...
        children: [
            {
                path: 'studentsList',  
                name: 'StudentsList',
                component: StudentsList,
                meta: {
                    title: ['学生管理', '学生列表']
                }
            },
            {
                path: 'studentsAdd',
                name: 'StudentsAdd',
                component: StudentsAdd,
                meta: {
                    title: ['学生管理', '新增学生']
                }
            },
            {
                path: 'studentsUpdate/:id?',
                name: 'StudentsUpdate',
                component: StudentsUpdate,
                props: true,
                meta: {
                    title: ['学生管理', '修改学生']
                }
            },
        ]
    },
    // ...
]
```

#### 2）渲染路由元信息

```html
<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }"> 首页 </el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in title" :key="index">
            {{ item }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    computed: {
        title() {
            return this.$route.meta.title;
        },
    },
};
</script>
```

### 2、区分组件缓存

#### 1）设置路由元信息

```js
const routes = [
    // ...
    {
        //...
        children: [
            {
                path: 'studentsList',  
                name: 'StudentsList',
                component: StudentsList
            },
            {
                path: 'studentsAdd',
                name: 'StudentsAdd',
                component: StudentsAdd,
                meta: {
                    isKeepAlive: true
                }
            },
            {
                path: 'studentsUpdate/:id?',
                name: 'StudentsUpdate',
                component: StudentsUpdate,
                props: true
            },
        ]
    },
    // ...
]
```

#### 2）按条件渲染组件

```html
<keep-alive>
    <router-view v-if="$route.meta.isKeepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.isKeepAlive"></router-view>
```

# 列表渲染

## 一、基础语法

Vue 中提供了 `v-for` 的指令用来循环产生节点。

基础语法如下：

```bash
<标签名 v-for="item in 数组" v-bind:key="值"></标签名>
<标签名 v-for="(item, index) in 数组" v-bind:key="值"></标签名>
```

说明：

1. `item` 是任意变量名，在每一次循环中用来接收数组中的每一项；
2. `index` 用来接收每一次循环元素的下标，不需要时可以省略不写。
3. `key` 是每一个循环产生的元素身上必须的一个属性，属性值要求是**数字或字符串**，且在当前循环中是**唯一、固定不变**的；

## 二、key

所有通过 `v-for` 循环产生的元素身上，都需要动态（`v-bind`）添加一个 key 属性。

1. key 属性的值只能是**数字或字符串**；
2. key 属性的值在当前 v-for 的循环中必须是**唯一**的；
3. key 属性的值是**固定不变**的，因此不建议使用 index 作为 key 的值；
4. key 属性必须设置在真实节点上；

## 三、template

Vue 中提供了一组标签 `<template>`，该标签是一个空（虚拟）标签，浏览器解析完成后，不会在页面中渲染该标签。

`<template>` 可以搭配 `v-for` 指令使用：

```html
<template>
    <div>
        <template v-for="(item, index) in exercises">
            <p v-bind:key="item._id">{{ index + 1 }}. {{ item.topic }}</p>
            <textarea v-bind:key="item._id + 'a'"></textarea>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            exercises: [
                { _id: "001", topic: "为什么组件的 data 必须是函数？" },
                { _id: "002", topic: "什么是响应式系统？" },
                { _id: "003", topic: "v-show 的作用是什么？" },
            ],
        };
    }
};
</script>
```

注意：在 Vue2 中，`v-bind:key` 属性不能设置在 `<template>` 身上，只能在循环内部的真实节点身上设置 key 属性。但是，在真实节点身上设置 key 时，要注意，key 值不能重复。

## 四、其他数据类型

v-for 除了可以遍历**数组**以外，还可以遍历**对象、数字、字符串**。

### 1、遍历对象

```html
<template>
    <ul>
        <li v-for="(value, key, index) in student" v-bind:key="key"></li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            student: {
                name: '张三',
                age: 20,
                gender: '男'
            }
        };
    }
};
</script>
```

说明：

- value：获取到对象的值；
- key：获取到对象的键；
- index：获取到对象的下标，从 0 开始递增；

### 2、遍历字符串

```html
<template>
    <ul>
        <li v-for="(item, index) in msg" v-bind:key="index"></li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            msg: 'hello'
        };
    }
};
</script>
```

说明：

- item：获取到字符串中的每一个字符；
- index：获取到每一个字符的下标，从 0 开始递增；

### 3、遍历数字

```html
<template>
    <ul>
        <li v-for="(item, index) in 3" v-bind:key="item"></li>
    </ul>
</template>
```

说明：

- item：从 1 开始递增，到遍历的数字结束；
- index：下标，从 0 开始递增；


# 响应式原理

在 Vue 实例或组件中，data 中的数据都会加入到 Vue 的响应式系统。

每当 data 中的数据发生改变时，Vue 的响应式系统会检测到数据的变化，然后自动更新对应的页面节点。

## 一、核心概念

响应式原理的核心：

1. **数据劫持**：把 data 对象中的普通数据变成“响应式数据”；
2. **发布订阅者模式（观察者模式）**：

## 二、数据劫持

```js
class Vue {
    constructor(option) {
        this.$el = document.querySelector(option.el);
        this.$data = option.data();
        new Observer(this.$data);
    }
}

class Observer {
    constructor(data) {
        this.$data = data;
        this.walk();
    }
    walk() {
        for (let key in this.$data) {
            this.defineReactive(this.$data, key);
        }
    }
    defineReactive(data, key, value = data[key]) {
        Object.defineProperty(data, key, {
            // 当我们访问 data.name 属性时，会自动触发 get 方法
            get() {
                console.log('有人在访问我的数据了', key);
                return value;
            },
            set(newValue) {
                console.log('有人在修改我的数据了', key);
                value = newValue;
            }
        })
    }
}
```

### 处理 this 的数据

前面我们把 this.$data 对象中的数据都进行了数据劫持，但是在 Vue 中源码中，this 身上也有和 this.$data 中相同的一份数据，所以，我们还要在 this 身上添加一份相同的数据：

```js
class Vue {
    constructor(option) {
        this.$el = document.querySelector(option.el);
        this.$data = option.data();
        this.proxy();  // 调用
        new Observer(this.$data);
    }
    // 将 this.$data 身上所有的属性，添加一份到 this 身上
    proxy() {
        for (let key in this.$data) {
            Object.defineProperty(this, key, {
                get() {
                    return this.$data[key];
                },
                set(newValue) {
                    this.$data[key] = newValue;
                }
            });
        }
    }
}
```

## 三、数据渲染

```js
class Vue {
    constructor(option) {
        // ...
        new Compiler(this.$el, this.$data);
    }
    // ...
}

// 负责将数据渲染到页面
class Compiler {
    constructor(el, data) {
        this.$el = el;
        this.$data = data;
        this.compile();
    }
    compile() {
        const node = this.$el.firstElementChild;
        const key = node.innerText.slice(2, -2);
        node.innerText = this.$data[key];
    }
}
```

## 四、发布订阅者模式

创建观察者和订阅者：

```js
// 观察者：每一条数据每被用一次，就产生一个对应的观察者
class Watcher {
    constructor(render) {
        this.render = render;
        window.target = this;
        this.update();
        window.target = null;
    }
    // 只要执行 update 方法，页面当前节点就会更新
    update() {
        this.render();
    }
}
// 订阅者：每一条数据对应着一个订阅者，用来管理该数据所有的观察者
class Dep {
    constructor() {
        this.subs = [];
    }
    // 将 watcher 添加到 dep 的数组中
    addSubs(watcher) {
        this.subs.push(watcher);
    }
    // 通知当前负责的所有 watcher 更新节点
    notify() {
        this.subs.forEach((watcher) => {
            watcher.update();
        })
    }
}
```

生成观察者

```js
class Compiler {
    //...
    compile() {
        //...
        const render = () => {
            node.innerText = this.$data[key];
        }
        new Watcher(render);
    }
}
```

生成订阅者以及数据发生改变时更新页面：

```js
class Observer {
    // ....
    defineReactive(data, key, value = data[key]) {
        const dep = new Dep();
        Object.defineProperty(data, key, {
            // 当我们访问 data.name 属性时，会自动触发 get 方法
            get() {
                console.log('有人在访问我的数据了', key);
                if (window.target) {
                    dep.addSubs(window.target);
                }
                return value;
            },
            set(newValue) {
                console.log('有人在修改我的数据了', key);
                value = newValue;
                dep.notify();   // 订阅者通知观察者更新节点
            }
        })
    }
}
```



## 五、总结

1. 通过 `Object.defineProperty()` 对 data 中的数据进行“数据劫持”；
2. 每劫持一条 data 中的数据，就产生一个对应的订阅者（dep）；
3. 每一条数据被一个节点使用时，产生一个对应的观察者（watcher）；
4. 同一条数据下的观察者（watcher）都统一交给该数据的订阅者（dep）管理；
5. 当数据发生改变时，该数据的订阅者（dep）会通知它负责的所有观察者（watcher）去更新节点；

# 导航守卫

导航，指的是“路由正在发生改变”，实际上就是“路由正在跳转”。

而导航守卫，就是在路由跳转过程中，将路由拦截下来，然后经过一系列的操作后，由守卫来决定当前路由是否可以继续跳转。

## 一、分类

Vue Router 中大致将导航守卫分为三大类：

1. 全局守卫：作用于项目中所有路由；
2. 路由独享守卫：只作用于指定路由；
3. 组件内守卫：作用于与当前组件有关的路由；

## 二、全局守卫

全局守卫又可以分为以下三类：

1. 全局前置守卫：
2. 全局解析守卫：
3. 全局后置守卫：

### 1、全局前置守卫

全局前置守卫，指的是在进入任何一个路由之前，都会触发该守卫。

```js
router.beforeEach((to, from, next) => {
    
})
```

例如，我们可以通过全局前置守卫来对用户的登录状态进行验证：

```js
// 设置全局前置守卫
router.beforeEach((to, from, next) => {
    if (to.path.includes('home')) {
        const token = localStorage.token;
        if (token) {
            next();
        } else {
            alert('你还未登录，请先登录');
            next('/login');
        }
    } else {
        next();
    }
})
```

## 三、路由独享守卫

路由独享守卫又可以分为以下三类：

1. 路由前置守卫：
2. 路由解析守卫：
3. 路由后置守卫：

### 1、路由前置守卫

```js
const routes = [
    {
        path: '/home',
        name: 'Home',  
        component: HomeView,
        // 路由独享前置守卫
        beforeEnter: (to, from, next) => {

        }
    }
]
```

案例代码：

```js
const routes = [
    // ...
    {
        path: '/home',
        name: 'Home',  // 路由名称，可选
        component: HomeView,
        // 路由独享前置守卫
        beforeEnter: (to, from, next) => {
            const token = localStorage.token;
            if (token) {
                next();
            } else {
                alert('你还未登录，请先登录');
                next('/login');
            }
        },
        children: [
            // ...
        ]
    }
    // ...
]
```

## 四、组件内守卫

组件内守卫也可以分为以下三类：

1. 进入路由前：
2. 路由发生改变：
3. 离开路由前：

### 1、离开路由前的守卫

```js
export default {
    beforeRouteLeave(to, from, next) { 

    }
}
```

案例代码：

```js
export default {
    data() {
        return {
            isUpdate: false
        }  
    },
    methods: {
       updateStudents() {
            // ...
            // 如果修改成功
            this.isUpdate = true;
        }  
    },
    // 当离开组件前
    beforeRouteLeave(to, from, next) {
        if (!this.isUpdate) {
            // 进入 if，说明当前的数据还未提交
            this.$confirm("你还有数据未提交，确认离开吗？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                next();
            }).catch(() => {});
        } else {
            // 进入 else，说明当前的数据已经提交
            next();
        }
    },
}
```

# 条件渲染

Vue 中提供下列三个指令来实现条件渲染：

- `v-if`
- `v-else`
- `v-else-if`

## 一、基础语法

```html
<h2 v-if="true">这是一个h2</h2>
<h3 v-else-if="false">这是一个h3</h3>
<h4 v-else>这是一个h4</h4>
```

注意：

1. `v-else` 和 `v-else-if` 都必须搭配 `v-if` 一起使用，且必须是兄弟元素的关系；
2. 当多个条件指令同时使用时，只要其中一个条件成立，后续的都不会再执行；

## 二、template

条件指令也可以搭配 `<template>` 使用：

```html
<template v-if="false">
    <h2>这是一个h2</h2>
    <h3>这是一个h3</h3>
    <h4>这是一个h4</h4>
</template>
```

## 三、v-if 和 v-show 的区别

v-if 和 v-show 都可以用来控制元素的显示和隐藏。区别在于：

1. v-if 是通过控制元素节点**是否渲染**，来实现的元素的显示和隐藏；
2. v-show 是通过控制元素节点的 `display: none` 的 **CSS 样式**，来实现的元素的显示和隐藏；
3. **v-if 有更高的切换开销**，也就意味在频繁的切换元素时，使用 v-if 消耗会更大；
4. **v-show 有更高的初次渲染开销**，也就意味着当初始条件为 false 时，v-show 依然需要渲染元素节点，然后给元素身上添加  `display: none` 的样式；

因此，当我们需要在页面中进行频繁的切换时，建议使用 v-show，否则就使用 v-if。

# 默认子路由

通常一个父级路由下都会有很多的子路由，每一个子路由都会有自己的 `path`，例如：

```js
const routes = [
    {
        path: '/home',
        name: 'Home',
        component: HomeView,
        children: [
            {
                path: 'studentsList',
                name: 'StudentsList',
                component: StudentsList
            },
            // ...
        ]
    }
]
```

## 一、基础语法

当我们希望，访问 `/home` 时，也能渲染一个子组件，我们就可以给 Home 设置一个默认子路由：

```js
const routes = [
    {
        path: '/home',
        component: HomeView,
        children: [
            {
                path: '',
                name: 'Home',
                component: HomeCharts,
            },
            {
                path: 'studentsList',
                name: 'StudentsList',
                component: StudentsList
            },
            // ...
        ]
    }
]
```

注意：默认子路由和父级路由其实就是同一个路由，所以父级路由的 name 属性，需要设置在默认子路由上。

## 二、动态设置默认子路由

如果我们的 Home 路由是通过 `addRoute` 动态添加的，那么默认子路由也可以动态生成：

```js
import HomeCharts from '@/views/charts/HomeCharts.vue'
router.addRoute({
    path: '/home',
    component: HomeView,
    children: [
        // 默认子路由
        {
            path: '',
            name: 'Home',
            component: HomeCharts,
            meta: {
                title: ['图表统计']
            }
        },
        // 其他权限子路由
        ...fullRoutes.filter(item => {
            return store.state.authMenus.includes(item.path.split('/')[0]);
        })
    ]
})
```

# 计算属性

## 一、基础语法

Vue 给组件提供了一个 `computed` 属性，用来设置组件自己的计算属性。

```html
<template>
    <h1>{{ 计算属性名 }}</h1>
</template>
<script>
    export default {
        computed: {
            计算属性名() {
                // 其他代码
                return 计算属性值;
            },
            计算属性名() {
                // 其他代码
                return 计算属性值;
            }
        }
    }
</script>
```

说明：`计算属性名` 是我们自己定义的任意变量名。每一个计算属性的方法中，都必须 `return` 一个最终的结果，作为当前计算属性的值。

## 二、应用场景

当我们在 `<template>` 中需要使用一个数据，但是得到这个数据的过程比较复杂，这种情况下，我们就可以将“得到数据的过程”通过 `computed` 写在 `<script>` 中去。

```html
<template>
    <div>
        <h2>{{ reverseMsg }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Hello World",
        };
    },
    computed: {
        reverseMsg() {
            return this.msg.split("").reverse().join("");
        },
    },
};
</script>
```

通常，我们会选择使用计算属性的几个条件：

1. 希望从一些旧数据中，经过一系列的操作，得到一条新数据；
2. 得到新数据的过程比较复杂；
3. 我们通过旧数据计算出新数据时，不会改变旧数据；

## 三、computed 和 methods 的区别

1. computed 是属性，在使用时不需要调用；
2. methods 是方法，在使用是需要通过小括号来调用；
3. **computed 有缓存**，当同一个计算属性被使用多次时，只会执行一次；
4. methods 没有缓存，当同一个方法被调用多次时，每一次都会重新执行；

## 四、computed 的缓存

computed 的缓存，指的是当计算属性第一次被使用后，就会将计算结果缓存下来。如果后续再次使用同一个计算属性时，就可以直接读取缓存中之前的计算结果。

但是，**当计算属性中依赖的原数据发生变化时，计算属性会重新计算。**

## 五、计算属性的修改

默认情况下，计算属性不能修改，如果修改计算属性，会出现类似以下的报错：

![image-20220721152643216](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/jianglan/20220721152643.png)

如果要修改计算属性，我们需要手动给计算属性添加一个 `set` 方法：

```js
export default {
    computed: {
        计算属性名: {
            get() {
                return 计算属性值;
            },
            set(value) {
                // 用 value 接收到新数据，然后来修改计算属性的值;
            }
        }
    }
}
```

说明：计算属性的修改，实际上修改的不是计算属性本身，而是修改的计算属性在 `get` 方法中依赖的原数据。

示例代码：

```html
<template>
    <div>
        <h1>{{ fullName }}</h1>
        <button v-on:click="fullName = '李四'">修改</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: "张",
                lastName: "三",
            };
        },
        computed: {
            fullName: {
                get() {
                    return this.firstName + this.lastName;
                },
                set(newValue) {
                    this.firstName = newValue[0];
                    this.lastName = newValue[1];
                },
            }
        }
    };
</script>
```

# 侦听器

## 一、基础语法

Vue 给所有的组件都提供了一个 `watch` 属性，用来设置组件内部的侦听器。

侦听器的作用，就是用来侦听指定数据的变化，当前 watch 侦听的数据发生变化时，会执行对应的函数。

语法结构：

```js
export default {
    watch: {
        侦听的数据名(变化后的值, 变化前的值) {
            // 当侦听的数据发生变化时，执行当前函数
        }
    }
}
```

示例代码：

```html
<template>
    <div>
        <h1>{{ num }}</h1>
        <button v-on:click="num++">+1</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 1,
            };
        },
        watch: {
            num(newValue, oldValue) {
                console.log("num 发生变化了", newValue, oldValue, this.num);
            },
        },
    };
</script>
```

## 二、侦听引用类型数据

watch 在侦听引用类型的数据时，默认是侦听引用地址的变化。

如果我们想要去侦听引用类型的数据的变化，可以分两种情况考虑：

1. 只侦听对象中单个属性的变化
2. 侦听整个对象中任意属性的变化

### 1、侦听对象中单个属性的变化

```js
export default {
    data() {
        return {
            student: {
                name: "张三",
                age: 20,
            },
        };
    },
    watch: {
        "student.age"() {
            console.log("student.age 发生变化了");
        },
    },
};
```

### 2、侦听对象中任意属性的变化

```js
export default {
    data() {
        return {
            student: {
                name: "张三",
                age: 20,
            },
        };
    },
    watch: {
        student: {
            handler() {
                console.log("student 发生变化了");
            },
            deep: true, // 深度侦听
        },
    },
};
```

## 三、立即侦听

侦听器默认在页面刷新一进来时不会执行，如果希望页面首次加载时也执行侦听器，那么我们可以设置“立即侦听”：

```js
export default {
    data() {
        return {
            student: {
                name: "张三",
                age: 20,
            },
        };
    },
    watch: {
        student: {
            handler() {
                console.log("student 发生变化了");
            },
            immediate: true, // 立即侦听
        },
    },
};
```

## 四、computed 和 watch 的区别

computed 和 watch 有相似的功能，就是都可以在指定的旧数据发生变化时，执行一个方法。

但是，computed 和 watch 的区别在于：

1. computed 是**一对多**：一个计算属性可以对应多条数据，计算属性中的任意一条旧数据发生变化，计算属性都会重新执行方法；
2. watch 是**一对一**：一个侦听器只能侦听一条数据，每一条旧数据发生变化，都会执行对应的侦听器的方法；
3. computed 的重点在于得到一条新数据；
4. watch 的重点在于要实时监控数据的变化，当数据发生变化时我们可以自己决定要做什么操作；
5. watch 中可以用来处理异步操作，但是 computed 不行；


# 样式处理

Vue 中的样式处理，我们可以分为“静态样式”和“动态样式”来进行学习。

## 一、静态样式

在每一个单文件组件的 `<style>` 中，都可以设置静态样式：

```html
<style>
h1 {
    color: red;
}
</style>
```

除了直接在  `<style>` 中设置样式外，我们还可以在外部创建 `.css` 文件，然后在 `<style>` 中引入外部样式文件。

```html
<style>
@import './common.css';  /* 末尾记得加分号 */
</style>
```

注意：直接在 `<style>` 中设置的样式，不管是内部样式，还是引入的外部样式，默认都是全局的。

## 二、局部样式

如果想要设置局部样式，需要在 `<style>` 上添加一个 `scoped` 属性。

```html
<style scoped>
    h1 {
        color: red;
    }
</style>
```

如果我们希望外部引入的样式，也能够实现局部样式的效果，那么，我们需要通过以下方式来实现：

```html
<style scoped src="./common.css"></style>
```

`scoped` 的原理，就是给当前**组件中所有的元素**以及**子组件最外层元素**身上，都添加一个以 `data-v-` 开头的特殊属性。同时， `<style>` 中所有的选择器也会添加上 `[data-v-xxx]` 属性选择器，从而实现局部样式的效果。

## 三、动态样式

### 1、动态 class

当我们元素身上只有动态 class 时，可以使用以下方式来设置：

```html
<template>
    <div>
        <p v-bind:class="{ active: isActive, done: isDone }">Hello</p>
        <p v-bind:class="[ isActive ? 'active': '', isDone ? 'done': '' ]">Hello</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isActive: false,
                isDone: true
            }
        }
    }
</script>
<style>
    .active { ... }
    .done { ... }
</style>
```

当我们元素身上既有动态 class 又有静态 class 时，可以使用以下方式来设置：

```html
<template>
    <div>
        <p v-bind:class="{ active: isActive, done: true }">Hello</p>
        <p class="done" v-bind:class="{ active: isActive }">Hello</p>
        <p v-bind:class="[ isActive ? 'active': '', 'done' ]">Hello</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isActive: false
            }
        }
    }
</script>
<style>
    .active { ... }
    .done { ... }
</style>
```

### 2、动态 style

```html
<template>
 <div
        v-bind:style="{
            width: w + 'px',
            height: h,
            backgroundColor: bgColor,
        }"
     ></div>
</template>

<script>
export default {
    data() {
        return {
            w: 100,
            h: "100px",
            bgColor: "orange",
        };
    },
};
</script>
```

# 数据变更检测

当一个 Vue 组件被创建时，它将 `data` 里的所有的数据都加入到 Vue 的**响应式系统**中。
当这些数据的值发生改变时，Vue 内部会检测到数据的变化，Vue 会通知页面产生“响应”，即更新渲染为最近的数据。

## 一、检测变化的注意事项

正常情况下，当数据发生改变，Vue 内部都可以检测到，一旦检测到数据变化了，Vue 会自动更新页面。

但是，有以下四种情况的数据变化，是 Vue 内部检测不到的。

1. 对象属性的**新增**；
2. 对象属性的**删除**；
3. 通过**下标**（索引）操作数组项；
4. 对数组**长度**的修改；

检测不到数据变化，就意味着，数据发生了改变，但是页面不会自动更新。

示例代码：

```html
<template>
    <div>
        <p>对象的操作：{{ student }}</p>
        <button v-on:click="setStudent">添加属性</button>
        <button v-on:click="setStudent">删除属性</button>
        <p>数组的操作：{{ teachers }}</p>
        <button v-on:click="setTeachers">通过下标操作数据</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            student: { name: "张三" },
            teachers: ["江老师", "王老师", "雷老师"],
        };
    },
    methods: {
        setStudent() {
            this.student.age = 20;
            delete this.student.name;
            console.log(this.student);
        },
        setTeachers() {
            this.teachers[3] = "hello";
            this.teachers.length = 0;
            console.log(this.teachers);
        },
    },
};
</script>
```

## 二、解决方案

### 1、对象属性的新增

```js
export default {
    data() {
        return {
            student: { name: '张三' }
        }
    },
    methods: {
        setStudent() {
            // 方法一：
            this.student = {
                ...this.student,
                age: 20
            }
            // 方法二：
            this.$set(this.student, 'gender', '男');
            // 方法三：
            this.student = Object.assign({}, this.student, { age: 20, gender: '男' });
        }
    }
}
```

### 2、数组下标的操作

```js
export default {
    data() {
        return {
            teachers: ["江老师", "王老师", "雷老师"],
        }
    },
    methods: {
        setTeachers() {
            // 方法一：
            this.teachers.splice(0, 1, '张老师');
            // 方法二：
            this.$set(this.teachers, 0, '张老师');
        }
    }
}
```

### 3、数组长度的操作

```js
export default {
    data() {
        return {
            teachers: ["江老师", "王老师", "雷老师"],
        }
    },
    methods: {
        setTeachers() {
            // 长度清零
            this.teachers = [];
            // 将长度改为 2
            this.teachers.splice(2);
        }
    }
}
```

# 表单输入绑定

## 一、双向数据绑定

Vue 给所有的表单元素身上提供了一个 `v-model` 的指令，用来实现“数据”与“表单元素”之间的双向数据绑定。

1. 数据发生改变时，页面的表单元素的状态会更新；
2. 从页面中修改表单元素的状态时，对应的数据也会更新；

示例代码：

```html
<template>
    <div>
        <input type="text" v-model="msg" />
        <button v-on:click="msg = 'world'">修改数据</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Hello",
        };
    },
};
</script>
```

### v-model 的原理

v-model 实际上，就是 `v-bind:value` 属性和 `v-on:input` 事件的“语法糖”。

```html
<input
       type="text"
       ref="inputValue"
       v-bind:value="msg"
       v-on:input="msg = $refs.inputValue.value"
       />
```

## 二、v-model 与单选按钮

```html
<input type="radio" v-model="gender" value="男" /><label>男</label>
<input type="radio" v-model="gender" value="女" /><label>女</label>
```

```js
export default {
    data() {
        return {
            gender: '女'
        }
    }
}
```

## 三、v-model 与复选框

当我们只需要获取复选框的选中状态时：

```html
<input type="checkbox" v-model="isAgree" />
<label> 我已阅读并同意以上协议 </label>
```

```js
export default {
    data() {
        return {
            isAgree: false
        }
    }
}
```

当我们需要获取被选中复选框的内容时：

```html
<input type="checkbox" v-model="likes" value="吃饭" /><label>吃饭</label>
<input type="checkbox" v-model="likes" value="睡觉" /><label>睡觉</label>
<input type="checkbox" v-model="likes" value="打豆豆" /><label>打豆豆</label>
```

```js
export default {
    data() {
        return {
            likes: []
        }
    }
}
```

## 四、v-model 与下拉列表

```html
<select v-model="city">
    <option value="四川">四川</option>
    <option value="云南">云南</option>
    <option value="贵州">贵州</option>
</select>
```

```js
export default {
    data() {
        return {
            city: '四川'
        }
    }
}
```

## 五、修饰符

v-model 在搭配输入框使用时，还可以使用以下三种修饰符：

1. `.lazy`：将 v-model 原本的 input 事件改为 change 事件，表现为输入框失焦后才修改数据；
2. `.number`：将输入框的值使用 `parseFloat()` 转换为数字进行保存，如果不能转换则保留原本的值；
3. `.trim`：去掉输入框中值前后的空格后进行保存；

```html
<input type="text" v-model.lazy="msg" />
<input type="text" v-model.number="msg" />
<input type="text" v-model.trim="msg" />
```
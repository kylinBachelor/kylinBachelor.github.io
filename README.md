# 浏览Hexo官方网站
*https://hexo.io/zh-cn/docs/*

# 根据官方文档，搭建好Hexo的环境
首先您必须在本地搭建好Hexo博客的环境，保证本地能跑起来。运行Hexo需要hexo,node等环境，具体可看官方文档。

# 部署介绍
1. 您可以直接拷贝我的代码（https://github.com/kylinBachelor/kylinBachelor.github.io）
2. clone下来之后，保证本地先跑起来，进入clone的目录，运行以下命令
```sh
# 安装依赖
npm install
# 运行Hexo
hexo s
```
运行成功之后会告诉您访问地址，例如：http://localhost:4000 ,在浏览器直接访问这个地址就可以看到效果了。
3. 在Github上创建仓库，要保证仓库名和您的Github的用户名一致，即为 [您的Github]用户名.github.io。仓库设为公有
4. 仓库中找到Setting->Pages。将Build and deployment下的Source设置为GitHub Action,在存储库中建立*.github/workflows/pages.yml*将以下内容填入,注意，需要将node版本换成您自己的node版本
```yml
name: Pages
on:
  push:
    branches:
      - main # 这里是您博客所在的分支
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          # If your repository depends on submodule, please see: https://github.com/actions/checkout
          submodules: recursive
      - name: Use Node.js 7.x
        uses: actions/setup-node@v2
        with:
          node-version: '7.10.1' # 这里需要替换为您自己的node版本，注意，Hexo各版本对node的版本要求很严格，或高或低都不行，如果版本高会导致生成的静态文件全为空，部署到Github之后界面是空白的，如果您使用我的这一套，建议不要换Node版本。如果本地电脑想要node多版本，可以安装node的管理工具nvm
      - name: Cache NPM dependencies
        uses: actions/cache@v2
        with:
          path: node_modules
          key: ${{ runner.OS }}-npm-cache
          restore-keys: |
            ${{ runner.OS }}-npm-cache
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./public
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

4. 修改_config.yml配置文件
+ 需要将url替换为您自己的博客仓库地址。
+ 将deploy替换为您自己的信息

5. 将代码传到Github上，Github即可自动帮您部署。

6. 部署完成后访问您的博客就可以哦。

# 鸣谢
1. 在这里感谢洪卫大神的博客开源（https://shw2018.github.io）
2. 感谢马哥积极指导。

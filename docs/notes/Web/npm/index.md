# Npm操作记录

## 1. `npm update` 命令

`npm update` 命令用于更新项目中已安装的包到最新版本。

1. 基本用法

    执行`npm update`命令后，npm会检查`node_modules`目录下所有包的版本，并尝试更新到符合`package.json`中指定的版本范围的最新版本。‌

2. 特定包更新

    如果你想更新一个或几个特定的包，可以使用以下命令：`npm update package1 package2...`。这将只更新在命令行中指定的包。

3. 全局更新

    如果你想要更新全局安装的npm包，可以使用`-g`标志：`npm update -g`。

4. 锁定版本

    在执行`npm update`时，`package-lock.json`文件会被更新，以反映更新后的依赖版本。这个文件确保了在不同环境中安装相同版本的依赖，提高了项目的可重复性。

5. 忽略脚本

    在更新过程中，可以使用`--ignore-scripts`标志来防止执行`package.json`中的`preinstall`、`install`、`postinstall`、`prepublish`和`prepare`脚本。
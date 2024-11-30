---
title: "Vscode使用"
aliases: 
tags: [Vscode]
description: "Vscode使用"
createTime: 2024/11/30 14:15:41
draft: false
---


#### vue-cli项目中引用的外部JS之间无法跳转的问题

项目中创建jsconfig.json文件，标记@的路径，如下所示

```json
{
    "compilerOptions": {
        "target": "es2020",
        "baseUrl": "./",
        "paths": {
            "@/*": ["src/*"]
        }
    }
}
```

#### VScode快捷键

|           快捷键           |                           功能                           |
| :------------------------: | :------------------------------------------------------: |
| Alt + ←  或  Alt+鼠标左键  |                   返回上一个光标的位置                   |
|      ctrl + shift + \      |                    左右括号之间的跳转                    |
|  shift+alt+上箭头/下箭头   |                       快速复制一行                       |
|           ctrl+d           | 先选定一个单词，然后按下ctrl+d可以往下一次选择相同的单词 |
|           ctrl+h           |                           替换                           |
| ctrl + alt + 上箭头/下箭头 |                       添加多个光标                       |
|         Alt + 单击         |                         插入光标                         |
|          ctrl + `          |                    显示/隐藏集成终端                     |
---
title: "El Table分页回显选中的数据"
aliases: 
tags: [Web, ElementUI]
description: "El Table分页回显选中的数据"
createTime: 2024/11/30 14:15:41
draft: false
---



1. 使用官方文档上的这两个方法

    | 方法              | 解释说明                                                     |
    | :---------------- | ------------------------------------------------------------ |
    | row-key           | 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 [http://user.info](https://link.zhihu.com/?target=http%3A//user.info)[0].id，此种情况请使用 Function。 |
    | reserve-selection | 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key） |

    

2. 示例如下

    vue:

    ```vue
    <el-table
          style="width: 100%"
          :data="tableData"
          ref="showTable"
          :header-cell-style="{ textAlign: 'center' }"
          :cell-style="{ 'text-align': 'center' }"
          :row-key="(row) => { return row.userId }"
        >
          <el-table-column :reserve-selection="true" type="selection" width="55"></el-table-column>
          <el-table-column type="index" width="55" label="序号" key="2"></el-table-column>
          <el-table-column label="姓名" prop="nickName" key="3"></el-table-column>
    </el-table>
    ```

    其中**:row-key="(row) => { return row.userId }"**中的row.userId是每行的唯一标识

    Js:

    ```js
    // 多选回显数据  其中echo是需要回显的数据
    echoSelected() {
      this.tableData.forEach(item => {
        for (const data of this.echo) {
          if (data.userId === item.userId) {
            this.$nextTick(() => {
              this.$refs.showTable.toggleRowSelection(item, true);
            })
          }
        }
      })
    },
    ```

    

---
title: "El Table可录入"
aliases: 
tags: [Web, ElementUI]
description: "El Table可录入"
createTime: 2024/11/30 14:15:41
draft: false
---


#### 点击进入编辑

当鼠标移入单元格，显示可以编辑的样式，单击单元格进入编辑状态，鼠标移除单元格，则保存编辑的数据，key-value形式

```vue
<template>
	<el-table
          :data="tableData"
          @selection-change="selectionHandler"
          stripe
          ref="showTable"
          style="width: 100%"
          :height="screenHeight"
          :header-cell-style="{background: '#E1EEFB', color: '#000000',fontSize: '18px',textAlign: 'center',}"
          :cell-style="{'text-align':'center',padding: '0.5rem 0',fontSize: '18px',}"
          @cell-mouse-enter="handleCellEnter"
          @cell-mouse-leave="handleCellLeave"
          @cell-click="handleCellClick"
      >
        <el-table-column
            label="立项金额（万元）"
            prop="projectEstablishAmount"
            min-width="120"
            :show-overflow-tooltip="true"
        >
          <div class="item" slot-scope="scope">
            <el-input class="item__input" v-model="scope.row.projectEstablishAmount" placeholder="请输入内容"></el-input>
            <div class="item__txt">{{scope.row.projectEstablishAmount=='0' ? null : scope.row.projectEstablishAmount}}</div>
          </div>
        </el-table-column>
    </el-table>
</template>
export default {
	data() {
		return {
			tableData: [],
			// 保存进入编辑的cell,以 key-value 的形式存储，真正保存时，再进行根据需要去解析
      		clickCellMap: {id: amountValue},
		}
	}
}
<script>
    /** 表格立项金额的编辑 **/
    /** 鼠标移入cell */
    handleCellEnter (row, column, cell, event) {
      if (this.pageParam.projectEstablishResult == '1') {
        const property = column.property // 此处属性为点击的单元格的prop
          if (property === 'projectEstablishAmount' && ['1'].includes(row.projectEstablishResult) && (row.indexText==null || row.indexText=='')) {
            cell.querySelector('.item__txt').classList.add('item__txt--hover');
            this.currentAmount = row.projectEstablishAmount;
          }
      }
    },
    /** 鼠标移出cell */
    handleCellLeave (row, column, cell, event) {
      if (this.pageParam.projectEstablishResult == '1') {
        const property = column.property
        if (['projectEstablishAmount'].includes(property) && ['1'].includes(row.projectEstablishResult) && (row.indexText==null || row.indexText=='')) {
          cell.querySelector('.item__txt').classList.remove('item__txt--hover');
          // 保存cell
          this.saveCellClick(row, cell);
          // 取消编辑状态
          cell.querySelector('.item__txt').style.display = 'block'
          cell.querySelector('.item__input').style.display = 'none'
        }
      }
    },
    /** 点击cell */
    handleCellClick (row, column, cell, event) {
      if (this.pageParam.projectEstablishResult == '1') {
        const property = column.property
        if (['projectEstablishAmount'].includes(property) && ['1'].includes(row.projectEstablishResult) && (row.indexText==null || row.indexText=='')) {
          cell.querySelector('.item__txt').style.display = 'none';
          cell.querySelector('.item__input').style.display = 'block';
          cell.querySelector('input').focus();
        }
      }
    },
    /** 保存进入编辑的cell */
    saveCellClick (row, cell) {
      if (this.pageParam.projectEstablishResult == '1') {
        const id = row.projectId;
        const amount = row.projectEstablishAmount;
        if (amount == null || amount == '') {
          amount = 0;
        }
        if (!isNaN(parseFloat(amount)) && isFinite(amount)) {
          this.clickCellMap[id] = amount;
          if (this.currentAmount != amount) {
            let formatNum = 1000000000;
            let formatSumAmout = (this.projectYearEstablishSumAmount == null || this.projectYearEstablishSumAmount == '') ? 0 : this.projectYearEstablishSumAmount
            let formatCurrentAmount = (this.currentAmount == null || this.currentAmount == '') ? 0 : this.currentAmount
            this.projectYearEstablishSumAmount = (Number(formatSumAmout)*formatNum + Number(amount)*formatNum - Number(formatCurrentAmount)*formatNum)/formatNum;
            this.projectYearEstablishSumAmount = this.projectYearEstablishSumAmount.toFixed(4);
          }
        } else { // 非数值型的数据，不允许录入
          this.$message({message: "录入的非数值型的数据，无法录入", type: "error"});
          row.projectEstablishAmount = this.currentAmount;
        }
      }
      
    }



</script>

<style lang="scss" scoped>
    .item{
      .item__input{
        display: none;
        width: 100px;
        /* 调整elementUI中样式 如果不需要调整请忽略 */
        .el-input__inner{
          height: 24px!important;
        }
        /* 调整elementUI中样式 如果不需要调整请忽略 */
        .el-input__suffix{
          i{
            font-size: 12px !important;
            line-height: 26px !important;
          }
        }
      }
      .item__txt{
        box-sizing: border-box;
        border: 1px solid transparent;
        width: 100px;
        line-height: 24px;
        padding: 0 8px;
      }
      .item__txt--hover{
        border: 1px solid #dddddd;
        border-radius: 4px;
        cursor: text;
      }
}
    
</style>
```


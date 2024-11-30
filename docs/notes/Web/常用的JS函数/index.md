---
title: "常用的JS函数"
aliases: 
tags: [JS, Web, _]
description: "常用的JS函数"
createTime: 2024/11/30 14:15:41
draft: false
---


#### 时间格式化

```js
function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = newRegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

// 调用示例
let date = newDate();
dateFormat("YYYY-mm-dd HH:MM:SS", date);
```

#### 将平行数据转化为树

```js
/**
*node: 第一级的父节点
*treeData: 将要转换为树的平行数据
*/
function change2Tree(nodes, treeData) {
  nodes.forEach(v => {
    v.children = treeData.filter(v1 => v1.parentCode === v.itemCode)
    if (v.children.length > 0) {
      this.change2Tree(v.children, treeData)
    }
  })
}

// 调用示例
let nodeArr = [];
let treeData = [];
change2Tree(nodeArr, treeData);
```

#### 删除数组内指定属性的对象

```js
 /**
 * 删除fileList内指定的属性的对象
 * @param arr 数组
 * @param attr 对象属性
 * @param value 对象值
 */
function removeByValue(arr, attr, value) {
  let index = 0;
  let flag = false;
  for (let i in arr) {
    if (arr[i][attr] === value) {
      index = i;
      flag = true
      break;
    } else {
      flag = false
    }
  }
  if (flag) {
    arr.splice(index, 1);
  }
}
```

#### 将指定日期增加n个年/月

```js
/* 日期增加运算 */
function DateAdd(interval, number, date) {
    switch (interval) {
    case "y": {
        date.setFullYear(date.getFullYear() + number);
        return date;
        break;
    }
    case "q": {
        date.setMonth(date.getMonth() + number * 3);
        return date;
        break;
    }
    case "m": {
        date.setMonth(date.getMonth() + number);
        return date;
        break;
    }
    case "w": {
        date.setDate(date.getDate() + number * 7);
        return date;
        break;
    }
    case "d": {
        date.setDate(date.getDate() + number);
        return date;
        break;
    }
    case "h": {
        date.setHours(date.getHours() + number);
        return date;
        break;
    }
    case "m": {
        date.setMinutes(date.getMinutes() + number);
        return date;
        break;
    }
    case "s": {
        date.setSeconds(date.getSeconds() + number);
        return date;
        break;
    }
    default: {
        date.setDate(d.getDate() + number);
        return date;
        break;
    }
    }
}

/** 示例：增加三个月  **/
var newDate = DateAdd("m", 3, new Date());

```

#### 两个小数之间的加法(小数相加精确结果)

```js
//js 小数相加精确结果
function accAdd(arg1, arg2) {
  if (isNaN(arg1)) {
    arg1 = 0;
  }
  if (isNaN(arg2)) {
    arg2 = 0;
  }
  arg1 = Number(arg1);
  arg2 = Number(arg2);
  var r1, r2, m, c;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  c = Math.abs(r1 - r2);
  m = Math.pow(10, Math.max(r1, r2));
  if (c > 0) {
    var cm = Math.pow(10, c);
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace(".", ""));
      arg2 = Number(arg2.toString().replace(".", "")) * cm;
    } else {
      arg1 = Number(arg1.toString().replace(".", "")) * cm;
      arg2 = Number(arg2.toString().replace(".", ""));
    }
  } else {
    arg1 = Number(arg1.toString().replace(".", ""));
    arg2 = Number(arg2.toString().replace(".", ""));
  }
  return (arg1 + arg2) / m;
}
```


### 比较两个对象（深比较） 相等是true  不等 false
```js
//比较两个对象（深比较） 相等是true  不等 false
        function deepEqual(compareObj1, compareObj2) {
            if (typeof compareObj1 != 'object' ||  typeof compareObj1 != 'object') {
                if (compareObj1 != compareObj2) return false;
            }
            // 当 compareObj1 和 compareObj2 都是对象 都不为空时开始比较
            let obj1Keys = Object.keys(compareObj1); // compare1的key  这是一个key数组
            let obj2Keys = Object.keys(compareObj2); // compare2的key  这是一个key数组
            if (obj1Keys.length !== obj2Keys.length) return false; // 长度不一样直接返回false
            for (let i = 0; i < obj1Keys.length; i++) {
                // 总体规则就是如果是true则继续比较，如果发现一个false则直接返回
                let compareObj1Value = compareObj1[obj1Keys[i]];
                let compareObj2Value = compareObj2[obj1Keys[i]];
                if (typeof compareObj1Value == 'object' && typeof compareObj2Value == 'object') {
                    if (!deepEqual(compareObj1Value, compareObj2Value)) {
                        return false;
                    }
                } else if (compareObj1Value != compareObj2Value) { // 有一个不为对象类型时直接比较值
                    return false;
                } 
            }
            return true;
        }
```
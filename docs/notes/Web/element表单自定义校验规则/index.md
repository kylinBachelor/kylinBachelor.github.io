---
title: "Element表单自定义校验规则"
aliases: 
tags: [Web, ElementUI]
description: "Element表单自定义校验规则"
createTime: 2024/11/30 14:15:41
draft: false
---


Form表单提供了表单校验功能，只需要通过rules属性传入特定的验证规则，并将Form-Item的prop属性设置为需要校验的字段名即可。

#### 普通表单验证

```vue	
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
```

#### 自定义校验规则

具体可见<https://element.eleme.cn/#/zh-CN/component/form>

+ 定义规则校验方法：比如判断密码是否为空

  ```js
  checkPass:function (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
  ```

+ rule属性中使用 **[validator: 校验方法]** 即可

  ```vue
  rules: {
    checkPass: [
      {validator: checkPass, trigger: blur}
      ]
  }
  ```

  

#### 常用的校验

```js
// 邮箱验证
 checkEmail: function (rule, value, callback) {
   const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (regEmail.test(value)) {
     return callback();
   }
   callback(new Error("邮箱格式有误"));
 },

 //手机号验证
 checkMobilePhone: function(rule, value, callback) {
   const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
   if (regMobile.test(value)) {
     return callback();
   }
   callback(new Error("手机号格式有误"));
 },
 //座机号校验
 checkPhone: function(rule, value, callback) {
   const regMobile = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
   if (regMobile.test(value)) {
     return callback();
   }
   callback(new Error("电话号码格式有误"));
 },

 //身份证号码校验
 checkIDCard: function(rule, value, callback) {
   const regIDCard = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[0-2])(([0-2][1-9])|10|20|30|31)\d{3}(\d|X|x)$/;
   if (regIDCard.test(value)) {
     return callback();
   }
   callback(new Error("身份证号格式有误"));
 },

 //社会信用代码, 例如：12500114709462931G
 checkSCC: function(rule, value, callback) {
   //同时支持18位和15位社会信用代码 Social Credit Code
   const regSCC = /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/;
   if (value) {
     if (regSCC.test(value)) {
       callback();
     } else {
       callback(new Error("社会信用代码格式有误"));
     }
   } else {
     callback(new Error("请输入统一社会信用代码"));
   }
 }
 // 密码格式校验
 checkPwd: function (rule, value, callback) {
     let pattern = /^(?=.*[\d])(?=.*[a-zA-Z]).{8,}$/;
     if (!pattern.test(value)) {
       callback(
         new Error("密码必须包含数字、字母(区分大小写)，且长度为8位~20位")
       );
     } else {
       callback();
     }
};
```


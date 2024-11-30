---
title: "常见达梦数据库操作"
aliases: 
tags: ["达梦数据库", "数据库"]
description: "常见达梦数据库操作"
createTime: 2024/11/30 14:15:41
draft: false
---


#### 查看表结构

```sql
select
distinct
utc.COLUMN_ID 排序,
ucc.comments as 中文名,
utc.column_name as 字段名,
concat(utc.data_type,'(',utc.data_length, ')') as 类型,
'否' as 主键,
'否' as 外键,
'' as 备注
from user_tab_columns utc,user_col_comments ucc
where utc.column_name = ucc.column_name and utc.Table_Name = ucc.Table_Name

AND utc.TABLE_NAME='PORTAL_FUNCTIONAL_PERMISSIONS' -- 表明
AND ucc.owner='PORTAL'  -- 模式SCHEMA名
order by utc.COLUMN_ID
```

#### 常用函数

```sql
-- 1. 时间格式化 时间戳-》YYYY-MM-DD形式
FROM_UNIXTIME(create_time/1000,'YYYY-MM-DD hh:mm:ss')

-- 2. json类型字段查询
JSON_VALUE(jsonparam, '$.key') -- value为非数组情况
JSON_VALUE(jsonparam, '$.key[0]') -- value为数组的情况下
select lower(rawtohex(sys_guid())) -- id生成
```


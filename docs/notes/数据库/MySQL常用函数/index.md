---
title: "MySQL常用函数"
aliases: 
tags: ["MySQL", _]
description: "MySQL常用函数"
createTime: 2024/11/30 14:15:41
draft: false
---


## 1. with....as

with...as也叫子查询，用来定义一个sql片段，且该片段会被整个sql语句反复使用很多次，这个sql片段就相当于是一个公用临时表

例如：

```sql
-- 针对一个别名
with temp as (select * from aTable)
select * from temp
-- 针对多个别名
with
tmp as (select * from tb_name),
tmp2 as (select * from tb_name2),
tmp3 as (select * from tb_name3),
....
tempn as (select * from tb_namen)
select * from tmp,tmp2 where tmp.id=tmp2.id
```

## 2. find_in_set

用法示例

```sql
-- find_in_set(搜索字段，被搜索字段)用来查询被搜索字段以逗号分隔的数据
select find_in_set('a', 'a,b,c,d,e')
```

## 3. case  when  then

```sql
SELECT name, (CASE
             WHEN sex=1 THEN '男'
             WHEN sex=2 THEN '女'
             WHEN sex=3 THEN '神仙'
             ELSE '性别出现异常'
            END
        ) AS 性别 FROM person;
```

## 4. IFNULL

```SQL
-- 如果成绩为空则显示为0
SELECT ifnull(score, 0) FROM student;
```

## 5.IF

```SQL
-- 如果分数大于90分则为几个，否则为不及格
SELECT IF(score>90,'及格','不及格') FROM student;
```

## 6. IF....ELSE

```SQL
IF search_condition THEN
	statement_list
 
ELSEIF search_condition THEN
	statement_list
 
ELSE
	statement_list
 
END IF;
```

## 7. data_format

时间格式化

```sql
select date_format(NOW(),'%Y-%m-%d') 
```

## 8. upsert

语法：

```sql
UPSERT INTO table_name (字段1, 字段2，……) VALUES (字段1值, 字段2值, ……);
```



mysql数据库中没有upsert可用下方示例替换

```sql
-- 说明
INSERT INTO table_name (字段1, 字段2, ……)
values (字段1值, 字段2值, ……)
ON DUPLICATE KEY UPDATE
-- 示例
INSERT INTO employee (id, name, email) 
VALUES (2, 'Danny', 'danny.liu@krem.corp')
ON DUPLICATE KEY UPDATE;
```



PostgreSQL数据库中没有upsert可用下方示例替换

```sql
-- 说明
INSERT INTO table_name (字段1, 字段2, ……)
values (字段1值, 字段2值, ……)
ON CONFLICT 冲突字段 冲突动作;
-- 示例
INSERT INTO employees (id, name, email) 
VALUES (2, 'Danny', 'danny.liu@krem.corp')
ON CONFLICT (id) DO UPDATE;
```

## 9. 获取明天的时间

```sql
SELECT DATE_ADD(now(), INTERVAL 1 DAY) AS tomorrow;
```

## 10. 事务的使用

```sql
START TRANSACTION;
SELECT value FROM serial_number FOR UPDATE;
UPDATE serial_number SET value = value + 1;
COMMIT;
```

代码说明：

+ START TRANSACTION：开启一个事务
+ SELECT value FROM serial_number FOR UPDATE;使用FOR UPDATE语句锁定serial_number表的记录，确保其他事务不能同时读取和修改该记录。
+ UPDATE serial_number SET value = value + 1：将序列号的值加1。
+ COMMIT：提交事务。

## 11.UUID()：生成唯一主键

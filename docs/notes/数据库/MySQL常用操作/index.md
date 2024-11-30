# MySQL常用操作

## 1. 数据库基本操作

```sql
#查看数据库
show databases

#创建数据库
create database db DEFAULT CHARSET utf8 COLLATE utf8_general_ci;

#使用数据库
use db;
```

## 2. 用户操作

```sql
#创建用户
create user '用户名'@'IP地址' identified by '密码';

#删除用户
drop user '用户名'@'IP地址';

#修改用户
rename user '用户名'@'IP地址' to '新用户名'@'IP地址';

#修改密码
set password for '用户名'@'IP地址' = Password('新密码')
```

创建用户时：

用户名：创建的用户名称

IP地址：指定用户可以从哪个服务器登陆，本地用户localhost，任意远程机用“%”

密码：该用户登陆的密码

## 3. 权限相关

```sql

#查看权限：
show grants for '用户'@'IP地址' 

#授权：
grant 权限 on 数据库.表 to '用户'@'IP地址'

#取消授权：
revoke 权限 on 数据库.表 from '用户'@'IP地址'
```

权限：用户的操作权限，如SELECT，INSERT，UPDATE等，如果要授予所的权限则使用ALL。

```sql
GRANT SELECT, INSERT ON student.user TO 'scott'@'%';
```

通过下面的命令让指定用户可以给其他用户授权

```sql
GRANT privileges ON databasename.tablename TO 'username'@'host' WITH GRANT OPTION;
```

## 4. 对表的操作

```sql
#查询所有的表
show tables;

#创建表
CREATE TABLE `user` (
  `id` int(11) NOT NULL auto_increment,   # not null表示不能为空,auto_increment表示自增
  `name` varchar(255) DEFAULT 'javayz',   # default 表示默认值
  PRIMARY KEY (`id`)                       # 把id列设置成主键
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#清空表
truncate table 表名

#删除表
drop table 表名

#添加列
alter table 表名 add 列名 类型

#删除列
alter table 表名 drop column 列名

#修改列类型
alter table 表名 modify column 列名 类型;

#修改列名、列类型
alter table 表名 change 原列名 新列名 类型;

#添加主键
alter table 表名 add primary key(列名);

#删除主键
alter table 表名 drop primary key;

#添加外键
alter table 从表 add constraint 外键名称（形如：FK_从表_主表） foreign key 从表(外键字段) references 主表(主键字段);

#删除外键
alter table 表名 drop foreign key 外键名称

#修改默认值
ALTER TABLE user ALTER name SET DEFAULT 'javayz2';

#删除默认值
ALTER TABLE user ALTER name DROP DEFAULT;
```

## 5. 对数据的操作

```sql
#增
insert into 表 (列名,列名...) values (值,值,...)

#删
delete from 表 where 条件

#改
update 表 set 字段='值' where 条件

#查
select 值 from 表 where 条件

#通配符like %匹配多个字符,_匹配单个字符
select * from 表 where name like '%java_'  

#limit 限制输出行数
select * from 表 limit 3   #前3行
select * from 表 limit 3,5;  #从第3行开始的5行

#order by 排序   
select * from 表 order by 列 asc  #asc正序，desc逆序

#group by分组（group by 必须在where之后，order by之前）
select name from 表 group by name 
```


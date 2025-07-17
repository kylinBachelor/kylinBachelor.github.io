---
title: "MySQL索引"
aliases: 
tags: ["MySQL", "SQL"]
description: "MySQL索引"
createTime: 2024/11/30 14:15:41
draft: false
---



在 MySQL 数据库的学习和使用中，索引是一个非常重要的概念。如果你经常遇到查询速度慢的问题，那很可能是没有合理使用索引。这篇文章将用通俗易懂的语言，带小白们全面了解 MySQL 索引的相关知识。

## 一、什么是 MySQL 索引

想象一下，你去图书馆找一本书，如果图书馆的书没有任何分类和编号，你可能要翻遍整个图书馆才能找到想要的书。但如果有了图书索引目录，你就能根据书名、作者等信息快速定位到书的位置。

MySQL 索引就相当于图书馆的索引目录，它是数据库表中一列或多列的值进行排序后的结构。通过索引，数据库引擎可以快速定位到表中符合条件的记录，而不用扫描整个表，从而大大提高查询效率。

## 二、索引的作用

1. **提高查询速度**：这是索引最主要的作用。没有索引时，查询可能需要扫描表中的所有记录，即 “全表扫描”，当表中数据量很大时，查询会非常慢。有了索引后，能直接定位到目标记录，大幅减少查询时间。

1. **加速排序和分组操作**：当查询中包含ORDER BY（排序）、GROUP BY（分组）等操作时，索引可以避免数据库进行额外的排序操作，提高这些操作的效率。

但要注意，索引不是越多越好，它也有缺点：

- 索引会占用额外的存储空间。

- 当对表进行插入、更新、删除操作时，索引也需要进行相应的维护，会降低这些操作的效率。

## 三、MySQL 索引的类型

MySQL 提供了多种类型的索引，不同类型的索引适用于不同的场景。

### 1. 主键索引（Primary Key）

- 主键索引是一种特殊的唯一索引，一个表只能有一个主键索引。

- 主键索引要求索引列的值唯一且不为NULL。

- 在建表时指定主键，数据库会自动创建主键索引。

- 示例：

```
CREATE TABLE student (
    id INT NOT NULL PRIMARY KEY,  -- 主键，自动创建主键索引
    name VARCHAR(50),
    age INT
);
```

### 2. 唯一索引（Unique）

- 唯一索引要求索引列的值必须唯一，但允许为NULL（多个NULL值不视为重复）。

- 可以通过CREATE UNIQUE INDEX语句创建，也可以在建表时指定。

- 示例：

```
-- 建表时创建唯一索引
CREATE TABLE user (
    id INT,
    username VARCHAR(50) NOT NULL UNIQUE,  -- 对username创建唯一索引
    password VARCHAR(50)
);

-- 建表后创建唯一索引
CREATE UNIQUE INDEX idx_username ON user(username);
```

### 3. 普通索引（Index）

- 普通索引是最基本的索引类型，没有唯一性限制，允许列值重复和为NULL。

- 可以通过CREATE INDEX语句创建，也可以在建表时用INDEX关键字指定。

- 示例：

```
-- 建表时创建普通索引
CREATE TABLE product (
    id INT,
    name VARCHAR(100),
    price DECIMAL(10,2),
    INDEX idx_name (name)  -- 对name创建普通索引
);

-- 建表后创建普通索引
CREATE INDEX idx_price ON product(price);
```

### 4. 复合索引（Composite Index）

- 复合索引是由多个列组合而成的索引。

- 遵循 “最左前缀原则”，即查询时只有使用了复合索引中最左边的列，索引才可能被使用。

- 示例：

```
-- 对name和price创建复合索引
CREATE INDEX idx_name_price ON product(name, price);
```

在上述复合索引中，查询条件包含name时索引可能被使用；如果只使用price作为查询条件，该复合索引不会被使用。

### 5. 全文索引（Full - Text）

- 全文索引用于在大量文本数据中快速查找关键字，适用于CHAR、VARCHAR、TEXT等类型的列。

- MySQL 中的MyISAM和InnoDB（5.6 及以上版本）存储引擎支持全文索引。

- 示例：

```
CREATE TABLE article (
    id INT,
    title VARCHAR(200),
    content TEXT,
    FULLTEXT INDEX idx_content (content)  -- 对content创建全文索引
);
```

查询时使用MATCH AGAINST语法：

```
SELECT * FROM article WHERE MATCH(content) AGAINST('MySQL 索引');
```

## 四、索引的创建与删除

### 创建索引

1. 在建表时创建：

```
CREATE TABLE table_name (
    column1 data_type,
    column2 data_type,
    ...,
    INDEX index_name (column1, column2, ...)
);
```

1. 建表后创建：

- 普通索引：CREATE INDEX index_name ON table_name(column_name);

- 唯一索引：CREATE UNIQUE INDEX index_name ON table_name(column_name);

- 复合索引：CREATE INDEX index_name ON table_name(column1, column2, ...);

### 删除索引

```
DROP INDEX index_name ON table_name;
```

## 五、使用索引的注意事项

1. **不要过度索引**：每个索引都会占用存储空间，并且会降低插入、更新和删除操作的效率。只在经常用于查询条件、排序、分组的列上创建索引。

1. **小表不适合建索引**：如果表中数据量很小，全表扫描的速度可能比使用索引更快，这时建索引反而会增加额外的开销。

1. **避免在频繁变动的列上建索引**：当列的值经常被修改时，索引也需要频繁维护，会影响性能。

1. **索引列不要参与计算**：如果查询条件中索引列参与了计算，索引将无法被使用。例如：SELECT * FROM product WHERE price + 10 > 100;，这里price参与了计算，索引不会生效。

1. **避免使用****NULL****判断**：如果索引列可能为NULL，查询时使用IS NULL或IS NOT NULL，索引可能无法有效使用，尽量将索引列设置为NOT NULL。

1. **合理使用复合索引**：根据查询需求创建复合索引，并且遵循最左前缀原则。

## 六、如何查看索引是否被使用

可以使用EXPLAIN语句来分析查询语句，查看索引是否被使用。

示例：

```
EXPLAIN SELECT * FROM product WHERE name = '手机';
```

在输出结果中，如果type列的值为ref、range、index等，说明索引可能被使用了；如果type列的值为ALL，说明进行了全表扫描，索引没有被使用。

## 七、总结

MySQL 索引是提高查询效率的重要手段，但在使用时要根据实际业务场景合理创建和使用。我们需要了解不同类型索引的特点和适用场景，避免盲目创建索引。同时，要定期分析查询性能，根据需要调整索引策略，让数据库始终保持良好的性能。

希望这篇文章能帮助小白们理解 MySQL 索引的相关知识，在实际开发中正确使用索引，提升项目的性能。
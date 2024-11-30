## 1. 问题出现

遇到的这个问题是因为突然停电，由于电脑是一个台式机导致电脑突然关机，就导致了MySQL数据库损坏的问题（无法启动）

![image-20241024085841542](assets/image-20241024085841542.png)



## 2. 解决方式



> [!warning]
>
> `首先备份首先备份MySQL的data文件夹`！！！！！！！！！！！！！！

![image-20241024090602489](assets/image-20241024090602489.png)

在MySQL中每一个数据库在data文件夹下的体现就是一个目录。我们要恢复数据库时就是使用每个文件夹下的`xxx.idb`文件,

每个`idb`文件其实就是一个数据库表。

## 3. 开始恢复

1. 新找一台电脑，另一个数据库，我们称之为目标数据。

2. 在目标数据库中创建一个新的数据库并创建数据库表，要求`创建的数据库表的结构和需要恢复的数据库表一致`

3. 创建好新数据库表之后使用下面的命令删除`新建表的表空间`

   ```sql	
   ALTER TABLE tableName DISCARD TABLESPACE;
   ```

4. 将备份好的.idb文件复制到目标数据库`数据文件夹（data）`下，并使用以下命令导入表空间恢复数据库即可

   ```sql
   ALTER TABLE tableName IMPORT TABLESPACE;
   ```



## 4. 恢复损坏的MySQL数据库（其实就是重新初始化，重新安装了）

找到data目录，没有就创建一个，有就清空data目录下的内容

![image-20241024091849514](assets/image-20241024091849514.png)



1. 删除MySQL服务

   cmd进入到数据库bin目录下，执行删除服务命令

   ```sh
   mysqld --remove mysql
   ```

2. 重新安装服务

   ```sql
   mysqld --install mysql
   ```

3. 初始化data

   ```sh
   mysqld --initialize-insecure
   ```

4. 启动服务

   ```sh
   net start mysql
   ```

5. 修改密码

   以管理员身份打开三个cmd窗口

   1. 窗口1执行以下命令

      ```sh
      net stop mysql
      mysqld --console --skip-grant-tables --shared-memory
      ```

   2. 窗口2执行以下命令

      ```sh
      mysql -u root -p # 回车，这时候会让你输入密码，无需输入直接回车即可
      use mysql
      update user set authentication_string='' where user='root';
      
      ```

   3. 窗口3（关闭窗口1和窗口2）

      ```sh
      net start mysql
      mysql -u root -p # 回车即可，无需输入密码
      ALTER USER 'root'@'localhost' IDENTIFIED BY '修改的密码';
      ```

   到此密码修改结束，可以连接数据库试试了。

6. 将在第三步恢复好的数据库导出一个sql文件，恢复到重新初始化安装修复好的数据库上就可以了。






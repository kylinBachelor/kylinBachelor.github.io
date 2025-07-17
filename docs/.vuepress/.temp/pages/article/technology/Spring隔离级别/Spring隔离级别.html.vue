<template><div><p>Spring提供了五种的隔离级别：</p>
<ol>
<li><code v-pre>DEFAULT(默认)</code>：使用底层数据库的默认隔离级别。如果数据库没有特定的设置，通常默认为 READ_COMMITTED</li>
<li><code v-pre>READ_UNCOMMITTED(读未提交)</code>：最低的隔离级别，允许事务读取尚未提交的数据，可能会导致脏读、不可重复读和幻读。</li>
<li><code v-pre>READ_COMMITTED(读已提交)</code>：仅允许读取已经提交的数据，避免了藏独，但可能会出现不可重复读和幻读的问题、</li>
<li><code v-pre>REPEATABLE_READ(可重复读)</code>：确保在同一个事务内的多次读取结果一致，避免脏读和不可重复读，但可能会有幻读问题。</li>
<li><code v-pre>SERIALIZABLE(可串行化)</code>：最高的隔离级别，通过强制事务按顺序执行，完全避免脏读、不可重复读和幻读，代价是性能显著下降。</li>
</ol>
<p><code v-pre>脏读</code>：一个事务读取了另一个尚未提交的事务数据，如果数据回滚则数据是不一致的。</p>
<p><code v-pre>不可重复读</code>：在同意事务内的多次读取，前后数据不一致，因为其他事务修改了该数据并提交。</p>
<p><code v-pre>幻读</code>：在一个事务内的多次查询，查询结果集不同，因为其他事务插入或删除了数据。</p>
</div></template>



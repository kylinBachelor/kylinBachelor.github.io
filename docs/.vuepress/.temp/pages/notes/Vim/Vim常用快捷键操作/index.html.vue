<template><div><h3 id="移动光标" tabindex="-1"><a class="header-anchor" href="#移动光标"><span>移动光标</span></a></h3>
<ol>
<li><code v-pre>h</code>：左移</li>
<li><code v-pre>j</code>：下移</li>
<li><code v-pre>k</code>：上移</li>
<li><code v-pre>l</code>：右移</li>
<li><code v-pre>w</code>：移动到下一个单词的开头</li>
<li><code v-pre>e</code>：移动到下一个单词的结尾</li>
<li><code v-pre>b</code>：移动到上一个单词的开头</li>
<li><code v-pre>0</code>：移动到行首</li>
<li><code v-pre>$</code>：移动到行尾</li>
<li><code v-pre>gg</code>：移动到文件开头</li>
<li><code v-pre>G</code>：移动到文件末尾</li>
<li><code v-pre>H</code>：移动到屏幕的上半部分</li>
<li><code v-pre>M</code>：移动到屏幕的中间部分</li>
<li><code v-pre>L</code>：移动到屏幕的下半部分</li>
<li><code v-pre>nG</code>：移动到第n行</li>
<li><code v-pre>fx</code>：移动到下一个字符处</li>
<li><code v-pre>tx</code>：移动到前一个x字符处</li>
<li><code v-pre>Fx</code>：移动到下一个x字符处，相当于fx的反向操作</li>
<li><code v-pre>Tx</code>：移动到前一个x字符处，相当于tx的反向操作</li>
<li><code v-pre>;</code>：重复上一次f、t、F、T命令</li>
<li><code v-pre>,</code>：反向重复上一次f、t、F、T命令</li>
<li><code v-pre>*</code>：移动到下一个相同单词</li>
<li><code v-pre>#</code>：移动到上一个相同单词</li>
<li><code v-pre>%</code>：移动到括号匹配处</li>
<li><code v-pre>Ctrl + o</code>：回到上一个跳转位置</li>
<li><code v-pre>Ctrl + i</code>：回到下一个跳转位置</li>
<li><code v-pre>Ctrl + u</code>：向上滚动半屏</li>
<li><code v-pre>Ctrl + d</code>：向下滚动半屏</li>
<li><code v-pre>Ctrl + b</code>：向上翻页</li>
<li><code v-pre>Ctrl + f</code>：向下翻页</li>
<li><code v-pre>Ctrl + e</code>：向下滚动一行</li>
<li><code v-pre>Ctrl + y</code>：向上滚动一行</li>
</ol>
<h3 id="编辑操作" tabindex="-1"><a class="header-anchor" href="#编辑操作"><span>编辑操作</span></a></h3>
<ul>
<li><code v-pre>J</code> ：合并当前行与下一行</li>
<li><code v-pre>K</code> ：合并当前行与上一行</li>
<li><code v-pre>u</code> ：撤销</li>
<li><code v-pre>Ctrl + r</code> ：重做</li>
<li><code v-pre>x</code> ：删除当前字符</li>
<li><code v-pre>X</code> ：删除前一个字符</li>
<li><code v-pre>dd</code> ：删除当前行</li>
<li><code v-pre>D</code> ：删除当前字符到行尾</li>
<li><code v-pre>dw</code> ：删除当前单词</li>
<li><code v-pre>cw</code> ：修改当前单词</li>
<li><code v-pre>yy</code> ：复制当前行</li>
<li><code v-pre>p</code> ：粘贴</li>
<li><code v-pre>P</code> ：粘贴到上一行</li>
<li><code v-pre>cc</code> ：删除当前行并进入编辑模式</li>
<li><code v-pre>~</code> ：切换大小写</li>
<li><code v-pre>&gt;&gt;</code> ：向右缩进</li>
<li><code v-pre>&lt;&lt;</code> ：向左缩进</li>
<li><code v-pre>==</code> ：自动缩进</li>
</ul>
<h3 id="查找替换" tabindex="-1"><a class="header-anchor" href="#查找替换"><span>查找替换</span></a></h3>
<ul>
<li><code v-pre>/pattern</code> ：向下查找pattern</li>
<li><code v-pre>?pattern</code> ：向上查找pattern</li>
<li><code v-pre>n</code> ：重复上一次查找</li>
<li><code v-pre>N</code> ：反向重复上一次查找</li>
<li><code v-pre>:s/old/new</code> ：替换当前行第一个old为new</li>
<li><code v-pre>:s/old/new/g</code> ：替换当前行所有old为new</li>
<li><code v-pre>:n1,n2s/old/new/g</code> ：替换第n1到n2行所有old为new</li>
<li><code v-pre>:%s/old/new/g</code> ：替换所有行所有old为new</li>
<li><code v-pre>:%s/^/new/</code> ：每行行首插入new</li>
<li><code v-pre>:%s/$/new/</code> ：每行行尾插入new</li>
<li><code v-pre>:%s/old/new/gc</code> ：替换所有行所有old为new，并显示替换过程</li>
</ul>
</div></template>



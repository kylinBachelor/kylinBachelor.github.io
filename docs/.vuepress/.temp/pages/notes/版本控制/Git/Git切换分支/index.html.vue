<template><div><h4 id="切换分支的问题" tabindex="-1"><a class="header-anchor" href="#切换分支的问题"><span>切换分支的问题</span></a></h4>
<p>在当前分支修改了代码，还没有commit当切换到其它分支的时候,就会弹出下面这个窗口</p>
<figure><img src="@source/notes/版本控制/Git/Git切换分支/assets/Git分支切换问题.png" alt="分支切换问题弹窗" tabindex="0" loading="lazy"><figcaption>分支切换问题弹窗</figcaption></figure>
<h4 id="force-checkout" tabindex="-1"><a class="header-anchor" href="#force-checkout"><span>Force Checkout</span></a></h4>
<p>不会把冲突的那部分内容带到将要切换到的分支，如果点了Force Checkout 本地的修改就会全部消失。</p>
<p>如果force checkout ,可以右键local history---&gt;show history 找到自己的代码，右键revert就可以还原了</p>
<h4 id="smart-checkout" tabindex="-1"><a class="header-anchor" href="#smart-checkout"><span>Smart Checkout</span></a></h4>
<p>会把冲突的那部分内容带到将要切换到的分支，</p>
<h4 id="don-t-checkout" tabindex="-1"><a class="header-anchor" href="#don-t-checkout"><span>Don't Checkout</span></a></h4>
<p>不切换分支，继续留在当前分支</p>
</div></template>



import{_ as s,c as a,a as e,o as i}from"./app-gNybPUzB.js";const l={};function p(d,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="nginx负载均衡" tabindex="-1"><a class="header-anchor" href="#nginx负载均衡"><span>Nginx负载均衡</span></a></h1><p>在高并发的情况下，一台服务器的负载承受不住，我们就需要使用服务器集群来解决高并发问题，但是这就出现一个问题，就是客户端的请求如何分配给多个服务器，所以在服务器集群中，需要一个服务器充当一个 <strong>【负载均衡器-Ningx】</strong> 用户的所有的请求都会由负载均衡器进行接收，调度者根据每台服务器的负载情况通过<strong>负载均衡算法</strong>将请求分配给某一台后端服务器进行处理。</p><p>负载均衡算法：</p><ol><li>轮询（Round Robin）</li><li>IP哈希(IP Hash)</li><li>加权轮询(Weighted Round Robin)</li><li>最少连接（Least Connection）</li></ol><h2 id="_1-轮询" tabindex="-1"><a class="header-anchor" href="#_1-轮询"><span>1. 轮询</span></a></h2><p>这是<strong>默认的负载均衡算法</strong>，Nginx按照请求的顺序依次将请求分配给后端的服务器。每个服务器按照其权重来处理请求，然后按顺序循环分配。这种算法简单且平均地将负载分配给后端服务器，适用于后端服务器配置相同、处理能力相当的场景。</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    upstream backend {</span></span>
<span class="line"><span>        server 192.168.1.101:8080;</span></span>
<span class="line"><span>        server 192.168.1.102:8080;</span></span>
<span class="line"><span>        server 192.168.1.103:8080;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen 80;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            proxy_pass http://backend;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-ip哈希" tabindex="-1"><a class="header-anchor" href="#_2-ip哈希"><span>2. IP哈希</span></a></h2><p>Nginx根据客户端的IP地址进行哈希运算，并根据计算结果将请求分配给固定的后端服务器。这种算法保证了相同的客户端IP每次请求都会被分配到相同的服务器，适用于需要保持会话状态的应用。</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    upstream backend {</span></span>
<span class="line"><span>        ip_hash;</span></span>
<span class="line"><span>        server 192.168.1.101:8080;</span></span>
<span class="line"><span>        server 192.168.1.102:8080;</span></span>
<span class="line"><span>        server 192.168.1.103:8080;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen 80;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            proxy_pass http://backend;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-加权轮询-weighted-round-robin" tabindex="-1"><a class="header-anchor" href="#_3-加权轮询-weighted-round-robin"><span>3. 加权轮询（Weighted Round Robin）</span></a></h2><p>Nginx根据每个后端服务器的配置权重将请求分配给服务器。权重越高的服务器，处理的请求就越多。这种方式适用于后端服务器之间配置不同、处理能力不同的情况下。</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    upstream backend {</span></span>
<span class="line"><span>        server 192.168.1.101:8080 weight=3;</span></span>
<span class="line"><span>        server 192.168.1.102:8080 weight=2;</span></span>
<span class="line"><span>        server 192.168.1.103:8080 weight=1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen 80;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            proxy_pass http://backend;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-最少连接-least-connection" tabindex="-1"><a class="header-anchor" href="#_4-最少连接-least-connection"><span>4. 最少连接（Least Connection）</span></a></h2><p>Nginx会统计每个后端服务器当前的活动连接数，并将请求分配给活动连接数最少的服务器，以实现负载均衡。这种算法适用于后端服务器配置和处理能力不同、连接持续时间不均衡的场景。</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    upstream backend {</span></span>
<span class="line"><span>        least_conn;</span></span>
<span class="line"><span>        server 192.168.1.101:8080;</span></span>
<span class="line"><span>        server 192.168.1.102:8080;</span></span>
<span class="line"><span>        server 192.168.1.103:8080;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen 80;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            proxy_pass http://backend;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const t=s(l,[["render",p],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/notes/Nginx/%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1/","title":"Nginx负载均衡","lang":"zh-CN","frontmatter":{"description":"Nginx负载均衡 在高并发的情况下，一台服务器的负载承受不住，我们就需要使用服务器集群来解决高并发问题，但是这就出现一个问题，就是客户端的请求如何分配给多个服务器，所以在服务器集群中，需要一个服务器充当一个 【负载均衡器-Ningx】 用户的所有的请求都会由负载均衡器进行接收，调度者根据每台服务器的负载情况通过负载均衡算法将请求分配给某一台后端服务器...","head":[["meta",{"property":"og:url","content":"https://kylinBachelor.github.io/notes/Nginx/%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1/"}],["meta",{"property":"og:site_name","content":"攻城狮"}],["meta",{"property":"og:title","content":"Nginx负载均衡"}],["meta",{"property":"og:description","content":"Nginx负载均衡 在高并发的情况下，一台服务器的负载承受不住，我们就需要使用服务器集群来解决高并发问题，但是这就出现一个问题，就是客户端的请求如何分配给多个服务器，所以在服务器集群中，需要一个服务器充当一个 【负载均衡器-Ningx】 用户的所有的请求都会由负载均衡器进行接收，调度者根据每台服务器的负载情况通过负载均衡算法将请求分配给某一台后端服务器..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-30T10:36:56.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-30T10:36:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx负载均衡\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-30T10:36:56.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.1,"words":631},"git":{"updatedTime":1732963016000},"autoDesc":true,"filePathRelative":"notes/Nginx/负载均衡/index.md","categoryList":[{"id":"4358b5","sort":10004,"name":"notes"},{"id":"18ce3d","sort":10035,"name":"Nginx"},{"id":"c36541","sort":10100,"name":"负载均衡"}],"bulletin":false}');export{t as comp,r as data};

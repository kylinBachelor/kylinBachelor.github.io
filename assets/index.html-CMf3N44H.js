import{_ as a,c as i,a as t,o as s}from"./app-C0ayDqmc.js";const n="/assets/image-20241115103837372-DFnJDV1M.png",r="/assets/image-20241115105231198-BZWx_5AY.png",o="/assets/image-20241115132125907-DVb1dAQ6.png",p="/assets/image-20241115132540596-BX6SLVZA.png",d={};function c(l,e){return s(),i("div",null,e[0]||(e[0]=[t('<h2 id="_1-缓存一般使用思路简介" tabindex="-1"><a class="header-anchor" href="#_1-缓存一般使用思路简介"><span>1. 缓存一般使用思路简介</span></a></h2><figure><img src="'+n+'" alt="image-20241115103837372" tabindex="0" loading="lazy"><figcaption>image-20241115103837372</figcaption></figure><ol><li>客户端请求服务</li><li>服务去redis试着拿取数据。</li><li>redis将数据返回给服务，如果返回的结果有数据则执行上图第七步，如果没有数据则继续向下执行。</li><li>服务从数据库中查询数据。</li><li>数据库将查询结果返回给服务。</li><li>数据库返回数据则添加到redis中。</li><li>请求数据返回给客户端。</li></ol><h2 id="_2-缓存穿透" tabindex="-1"><a class="header-anchor" href="#_2-缓存穿透"><span>2. 缓存穿透</span></a></h2><figure><img src="'+r+'" alt="image-20241115105231198" tabindex="0" loading="lazy"><figcaption>image-20241115105231198</figcaption></figure><h3 id="_2-1-描述" tabindex="-1"><a class="header-anchor" href="#_2-1-描述"><span>2.1 描述</span></a></h3><p>通过接口访问一个缓存和数据库都不存在的数据。</p><p>服务出于容错考虑，当请求从持久层查不到数据则不写入缓存，这将导致请求这个不存在的数据每次都要到持久层去查询，失去了缓存的意义。此时，缓存起不到保护后端持久层的意义，就像被穿透了一样。导致数据库存在被打挂的风险。</p><h3 id="_2-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-2-解决方案"><span>2.2 解决方案</span></a></h3><p>1.接口请求参数的校验。对请求的接口进行鉴权，数据合法性的校验等；比如查询的userId不能是负值或者包含非法字符等。</p><p>2.当数据库返回空值时，将空值缓存到redis，并设置合理的过期时间。</p><p>3.<strong>布隆过滤器</strong>。使用布隆过滤器存储所有可能访问的 key，不存在的 key 直接被过滤，存在的 key 则再进一步查询缓存和数据库。</p><h2 id="_3-缓存击穿" tabindex="-1"><a class="header-anchor" href="#_3-缓存击穿"><span>3. 缓存击穿</span></a></h2><figure><img src="'+o+'" alt="image-20241115132125907" tabindex="0" loading="lazy"><figcaption>image-20241115132125907</figcaption></figure><h3 id="_3-1-描述" tabindex="-1"><a class="header-anchor" href="#_3-1-描述"><span>3.1 描述</span></a></h3><p>某个热点 key，在缓存过期的一瞬间，同时有大量的请求打进来，由于此时缓存过期了，所以请求最终都会走到数据库，造成瞬时数据库请求量大、压力骤增，导致数据库存在被打挂的风险。</p><h3 id="_3-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_3-2-解决方案"><span>3.2 解决方案</span></a></h3><p>1.加互斥锁。当热点key过期后，大量的请求涌入时，只有第一个请求能获取锁并阻塞，此时该请求查询数据库，并将查询结果写入redis后释放锁。后续的请求直接走缓存。</p><p>2.设置缓存不过期或者后台有线程一直给热点数据续期。</p><h2 id="_4-缓存雪崩" tabindex="-1"><a class="header-anchor" href="#_4-缓存雪崩"><span>4. 缓存雪崩</span></a></h2><figure><img src="'+p+'" alt="image-20241115132540596" tabindex="0" loading="lazy"><figcaption>image-20241115132540596</figcaption></figure><h3 id="_4-1-描述" tabindex="-1"><a class="header-anchor" href="#_4-1-描述"><span>4.1 描述</span></a></h3><p>大量的热点数据过期时间相同，导致数据在同一时刻集体失效。造成瞬时数据库请求量大、压力骤增，引起雪崩，导致数据库存在被打挂的风险。</p><h3 id="_4-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_4-2-解决方案"><span>4.2 解决方案</span></a></h3><p>1.<strong>将热点数据的过期时间打散</strong>。给热点数据设置过期时间时加个随机值。</p><p>2.加互斥锁。当热点key过期后，大量的请求涌入时，只有第一个请求能获取锁并阻塞，此时该请求查询数据库，并将查询结果写入redis后释放锁。后续的请求直接走缓存。</p><p>3.设置缓存不过期或者后台有线程一直给热点数据续期。</p>',27)]))}const g=a(d,[["render",c],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/notes/Redis/Redis%E7%BC%93%E5%AD%98%E5%87%BB%E7%A9%BF-%E7%A9%BF%E9%80%8F-%E9%9B%AA%E5%B4%A9/","title":"Redis缓存击穿-穿透-雪崩","lang":"zh-CN","frontmatter":{"title":"Redis缓存击穿-穿透-雪崩","description":"1. 缓存一般使用思路简介 image-20241115103837372image-20241115103837372 客户端请求服务 服务去redis试着拿取数据。 redis将数据返回给服务，如果返回的结果有数据则执行上图第七步，如果没有数据则继续向下执行。 服务从数据库中查询数据。 数据库将查询结果返回给服务。 数据库返回数据则添加到redis...","head":[["meta",{"property":"og:url","content":"https://kylinBachelor.github.io/notes/Redis/Redis%E7%BC%93%E5%AD%98%E5%87%BB%E7%A9%BF-%E7%A9%BF%E9%80%8F-%E9%9B%AA%E5%B4%A9/"}],["meta",{"property":"og:site_name","content":"kylinBachelor"}],["meta",{"property":"og:title","content":"Redis缓存击穿-穿透-雪崩"}],["meta",{"property":"og:description","content":"1. 缓存一般使用思路简介 image-20241115103837372image-20241115103837372 客户端请求服务 服务去redis试着拿取数据。 redis将数据返回给服务，如果返回的结果有数据则执行上图第七步，如果没有数据则继续向下执行。 服务从数据库中查询数据。 数据库将查询结果返回给服务。 数据库返回数据则添加到redis..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-30T10:36:56.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-30T10:36:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis缓存击穿-穿透-雪崩\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-30T10:36:56.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.58,"words":775},"git":{"updatedTime":1732963016000},"autoDesc":true,"filePathRelative":"notes/Redis/Redis缓存击穿-穿透-雪崩/index.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"9a0913","sort":10057,"name":"Redis"},{"id":"5e71e5","sort":10058,"name":"Redis缓存击穿-穿透-雪崩"}],"bulletin":false}');export{g as comp,m as data};
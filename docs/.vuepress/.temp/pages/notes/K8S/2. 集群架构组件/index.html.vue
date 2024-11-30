<template><div><h1 id="k8s集群架构组件" tabindex="-1"><a class="header-anchor" href="#k8s集群架构组件"><span>k8s集群架构组件</span></a></h1>
<p><img src="@source/notes/K8S/2. 集群架构组件/assets/image-20240711160204601.png" alt="image-20240711160204601"></p>
<h2 id="_1-集群架构节点角色功能" tabindex="-1"><a class="header-anchor" href="#_1-集群架构节点角色功能"><span>1. 集群架构节点角色功能</span></a></h2>
<h3 id="_1-1-master-node-主控节点" tabindex="-1"><a class="header-anchor" href="#_1-1-master-node-主控节点"><span>1.1 Master Node（主控节点）</span></a></h3>
<p>k8s集群控制节点，对集群进行调度管理，接受集群外的用户去集群操作请求。</p>
<p>Master Node 由 API Server、Scheduler、ClusterState Store（ETCD 数据库）和 Controller ManagerServer 所组成。</p>
<h4 id="_1-1-1-api-server" tabindex="-1"><a class="header-anchor" href="#_1-1-1-api-server"><span>1.1.1 API Server</span></a></h4>
<p>集群统一入口，以Restful方式交给etcd存储。</p>
<h4 id="_1-1-2-scheduler" tabindex="-1"><a class="header-anchor" href="#_1-1-2-scheduler"><span>1.1.2 Scheduler</span></a></h4>
<p>做节点调度，选择Node节点进行一个部署。</p>
<h4 id="_1-1-3-controller-managerserver" tabindex="-1"><a class="header-anchor" href="#_1-1-3-controller-managerserver"><span>1.1.3 Controller ManagerServer</span></a></h4>
<p>做资源的控制，处理集群中常规的后台任务，一个资源对应一个控制器。</p>
<h4 id="_1-1-4-etcd" tabindex="-1"><a class="header-anchor" href="#_1-1-4-etcd"><span>1.1.4 ETCD</span></a></h4>
<p>主要做数据存储，用于保存集群相关的数据。</p>
<h3 id="_1-2-work-node-工作节点" tabindex="-1"><a class="header-anchor" href="#_1-2-work-node-工作节点"><span>1.2 Work Node（工作节点）</span></a></h3>
<p>集群工作节点，运行用户业务应用容器；</p>
<p>Worker Node 包含 kubelet、kube-proxy 和 ContainerRuntime;</p>
<h4 id="_1-2-1-kubelet" tabindex="-1"><a class="header-anchor" href="#_1-2-1-kubelet"><span>1.2.1 kubelet</span></a></h4>
<p>管理本机容器，生命周期。。。。。</p>
<h4 id="_1-2-2-kube-proxy" tabindex="-1"><a class="header-anchor" href="#_1-2-2-kube-proxy"><span>1.2.2 kube-proxy</span></a></h4>
<p>提供网络代理、负载均衡。</p>
<h2 id="_2-核心概念" tabindex="-1"><a class="header-anchor" href="#_2-核心概念"><span>2. 核心概念</span></a></h2>
<h3 id="_2-1-pod" tabindex="-1"><a class="header-anchor" href="#_2-1-pod"><span>2.1 pod</span></a></h3>
<ul>
<li>k8s中最小的部署单元</li>
<li>一组容器的集合</li>
<li>共享网络的</li>
<li>生命周期时短暂的</li>
</ul>
<h3 id="_2-2-controller" tabindex="-1"><a class="header-anchor" href="#_2-2-controller"><span>2.2 Controller</span></a></h3>
<p>创建pod</p>
<ul>
<li>确保预期的pod副本数量</li>
<li>无状态应用部署</li>
<li>有状态的应用部署</li>
<li>确保所有的node运行同一个pod</li>
<li>一次性任务和定时任务</li>
</ul>
<h3 id="_2-3-service" tabindex="-1"><a class="header-anchor" href="#_2-3-service"><span>2.3 Service</span></a></h3>
<ul>
<li>定义一组pod的访问规则</li>
<li>Master</li>
</ul>
</div></template>



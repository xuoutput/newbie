# vue2的入门
开始梳理一下vue2的入门，主要还是一些模块的使用，反正vue2就是路由和模块

## vue lifecycle
    可以通过例子vuelifecycyle.html来观察

beforecreate : 可以在这加个loading事件 
created ：在这结束loading，还做一些初始化，实现函数自执行 
mounted ： 在这发起axios请求，拿回数据，配合路由钩子做一些事情
beforeDestory： destoryed ：当前组件已被删除，清空相关内容

[Vue2.0 探索之路——生命周期和钩子函数的一些理解][1]

[1]: https://segmentfault.com/a/1190000008010666

<button v-on="click: addTasks"> </button>
<button v-on="dblclick: addTasks"> </button>
<button v-on="submit: addTasks"> </button>

<pre>{{$data | json}} </pre>

老外的那个例子来讲些vue基础

## 路由就是使用 vue-router


你也可以自定义一个json的filters ，方法同methods
有时候删除不一定要定义methods 也可以用filters

## vuex 状态保存

## axios    

## element-ui

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


## vue2 getstart

通过下面语句可以动态查看data
```
<pre>{{$data | json}} </pre>
```
你也可以自定义一个json的filters ，方法同methods
有时候删除不一定要定义methods 也可以用filters



老外的那个例子来讲些vue基础

主要讲解用到了

v-bind 

v-text {{}} v-if v-show v-for v-on ref v-model .prevant

el data methdos computed filters mounted

过滤器|只用在mustache和v-bind表达式中，在v-for中用的话写一个computed

做一个，todolist的例子，实现增删改功能。
上面部分是tasks，下面部分是完成打钩的tasks。
![getstart](getstart.png)

___

v-bind和v-model都是双向绑定，但v-model特别的用在表单中就好了

还有这个**响应式**是要在vue实例中的data中有过初始化的才有响应式

```
<div>{{meg}}</div>
<div>{{name}}</div>

var vm = new Vue({
  data: {
      msg: ''       //这个msg是响应的,name不是响应式的，也可以说在vue实例中没name这个东西，不存在给name响应式。
  }
})
```


## 路由就是使用 vue-router



## vuex 状态保存

## axios    

## element-ui

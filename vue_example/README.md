VUE2.0学习
# vue2.0学习地址和技术栈
* Vue2.0中文网：https://vuefe.cn/
* vue全家桶变为vue2.0+vue-router+fetch
* 我们下文中所出现的vue都指代vue2.0

# vue2.0介绍
## vue是什么？
* https://vuefe.cn/guide
* vue也是一个数据驱动框架，做spa页面的
* Vue的`核心库`只关注视图层,但是vue并不只关注视图，和angular一样也有指令，过滤器这些东西
* vue有非常强大的单文件组件
  + 就是css+html+js都写在一个.vue文件中，这样定义的组件很简洁，清晰，组件化分的很彻底
  + 而angular中的js文件只能写js
  + 虽然react中可以写css-in-js，但是缺乏选择器功能，即便可以在js中引入css文件，但还是不方便

## vue和其他框架的对比
* https://vuefe.cn/guide/comparison.html
* vue比市面上的其他框架功能更完善，性能更高效


# vue快速开始
## 用vue-cli开始
* github地址:https://github.com/vuejs/vue-cli

```javascript
# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$  vue init webpack my-project
# 安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev
```
* 你只需要关注你配置的东西就可以了，不需要关注webpack的配置项，因为webpack的配置很难，很多人不会，也是为了简便开发


## 自己创建Vue的开发环境
### 准备工作
* 升级webstorm到最新版本，老版本对.vue文件的开发是有bug的
* 下载webstorm为Vue提供的插件vue-for-idea，这个插件可以让webstorm支持以.vue结尾的文件能够运行
### 修改webpack的配置文件
* 把之前react中配置的webpack.publish.config.js和webpack.develop.config.js直接拿过来用
* 下载vue-loader加载器
  + `npm  install vue-loader -save-dev`
* 配置webpack的loader部分

```javascript
 {
    test: /\.js$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
    loader: 'babel'// 加载模块 "babel" 是 "babel-loader" 的缩写
},
 {
    test: /\.vue$/,
    loader: 'vue'
}

```
* 单独配置一个vue属性，和entry属性是同级别的
```javascript
vue: {
        loaders: {
            js: 'babel'
        }
    }
```

* 在项目根目录生成一个.babelrc文件

```javascript
{
  "presets": ["es2015","stage-0","stage-1","stage-2","stage-3"]
//  "plugins": ["transform-runtime"]
}


```
* 修改自动识别.vue的扩展文件名

```javascript
 resolve: {
        extensions: ['', '.js', '.json', '.scss', '.vue'],
    },
```
* 注意在publish和develop中都要配置
* src/js文件中创建main.js

```javascript
import Vue from 'vue'
import AppContainer from '../containers/AppContainer'

const app = new Vue({
    render: h => h(AppContainer),
}).$mount('#app')


// new Vue({
//     el:'#app',
//     render: h => h(App)
// })

```
* 在src/container中创建AppContainer.vue文件

```javascript
<template>
    <div>
        {msg}
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>

```

* 当你第一次创建.vue文件的时候IDE会问你用什么语法去解析，你选择html语法
* 接下来就可以直接运行npm  run develop了




# vue中的主要知识点
## data属性
* data属性里面的key值会自动挂载到vue实例上
* data属性可以实现同angular中的双向绑定一样的效果
* data有点类似于angular中的$scope，但是不一样，它里面只能赋值数据


## vue解决的痛点有哪些
* vue把angular中$scope对象挂载的内容不能区分的痛点给解决了，数据就挂载到data属性上，方法挂载到method属性上



# 其他东西介绍
* webpack2：https://gist.github.com/sokra/27b24881210b56bbaff7




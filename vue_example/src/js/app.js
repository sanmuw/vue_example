import Vue from 'vue'
import AppContainer from '../containers/AppContainer'

var data = { a: 1 }
const app=new Vue({
    el:'#app',
    data:data,
    render: h => h(AppContainer)
})

console.log(app.a==data.a)
app.a=2
console.log(data.a)

// const app = new Vue({
//     render: h => h(AppContainer),
// }).$mount('#app')
//




// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 所有的click响应速度直接提升
import fastclick from 'fastclick'
// css reset的作用就是让各个浏览器的css样式有一个统一的基准,而这个基准更多的就是"清零"!
import 'styles/reset.css'
import 'styles/border.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
fastclick.attach(document.body)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

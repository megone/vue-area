// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
 
import areas from '@/components/common/Area' // 地址组件

Vue.config.productionTip = false

/* 使用插件框架elementUI */
Vue.use(MintUI)

/* 公用组件 */
 
Vue.component('areas', areas)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

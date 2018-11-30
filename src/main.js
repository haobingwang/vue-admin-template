import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

// 引入 moment 处理时间
import moment from 'moment'
Object.defineProperty(Vue.prototype, '$moment', { value: moment })

// 引入 loglevel 记录日志
import * as log from 'loglevel'

// 在开发测试环境中记录所有消息
console.log('log level: ' + log.getLevel())
if (process.env.NODE_ENV === 'development') {
  log.setLevel('trace')
}
log.info('log level: ' + log.getLevel())

// log.trace('trace 消息')
// log.debug('debug 消息')
// log.info('info 消息')
// log.warn('warn 消息')
// log.error('error 消息')

// 在 Vue 组件中使用
Object.defineProperty(Vue.prototype, '$log', { value: log })
// this.$log.trace('trace 消息')
// this.$log.debug('debug 消息')
// this.$log.info('info 消息')
// this.$log.warn('warn 消息')
// this.$log.error('error 消息')

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

import Vue from 'vue'
import App from './components/App.vue'
import home from './pages/home'
import gallery from './pages/gallery'
import blog from './pages/blog'
import support from './pages/support'
import VueRouter from 'vue-router'
import components from './lib/components'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [{
    name: 'home',
    path: '/',
    component: home
  },
  {
    name: 'gallery',
    path: '/gallery',
    component: gallery
  },
  {
    name: 'blog',
    path: '/blog',
    component: blog
  },
  {
    name: 'support',
    path: '/support',
    component: support
  }]
})

Vue.use(VueRouter)
Vue.use(components)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

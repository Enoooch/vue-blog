import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './pages/App.vue'
import home from './pages/home'
import gallery from './pages/gallery'
import blog from './pages/blog'
import support from './pages/support'
import VueRouter from 'vue-router'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// *** basic globally register components ***
// import components from './lib/components'
// Vue.use(components)

// *** automatic globally register components ***
const requireComponent = require.context(
  './components',
  false,
  /.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})

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
  }],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

Vue.use(VueRouter)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

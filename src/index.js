import Vue from 'vue'
import App from './pages/App.vue'
import home from './pages/home'
import gallery from './pages/gallery'
import blog from './pages/blog'
import support from './pages/support'
import VueRouter from 'vue-router'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import scrollReveal from './lib/animation'

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
  }]
})

Vue.use(VueRouter)

new Vue({
  el: '#app',
  mounted () {
    scrollReveal()
  },
  render: h => h(App),
  router
})

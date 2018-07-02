
import Menu from '../components/menu.vue'
import Footer from '../components/footer.vue'
import blur from '../components/blur.vue'

const components = {
  install: function (Vue) {
    Vue.component('Menu', Menu)
    Vue.component('Footer', Footer)
    Vue.component('blur', blur)
  }
}

export default components

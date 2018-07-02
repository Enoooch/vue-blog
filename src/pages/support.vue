<template lang="pug">
#support
  section.content.full.center
    blur#banner(imgLarge="/img/support.jpeg", imgSmall="/img/support-blur.jpg")
    .shadow
    .txt
      .title Support
    Menu
  // Footer
</template>

<script>

import Menu from '../components/menu.vue'
import Footer from '../components/footer.vue'
import blur from '../components/blur.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    Menu, Footer, blur
  }
}
</script>

<style scoped lang="sass">
#support
  #banner
    // background: linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(../assets/img/support.jpeg) 50% 50% / cover no-repeat
</style>

<template lang="pug">
#gallery
  section.content.full.center
    #banner
    .txt
      .title Gallery
    Menu
  // Footer
</template>

<script>

import Menu from '../components/menu.vue'
import Footer from '../components/footer.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    Menu, Footer
  }
}
</script>

<style scoped lang="sass">
  #gallery
    #banner
      background: linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(../assets/gallery.jpeg) 50% 50% / cover no-repeat
</style>

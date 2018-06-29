<template lang="pug">
#gallery
  section#banner.content.full.center
    .txt
      .title Gallery
    Menu
  Footer
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
</style>

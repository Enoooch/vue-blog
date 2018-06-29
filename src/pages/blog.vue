<template lang="pug">
#blog
  section#banner.content.full.center
    .txt
      .title Blog
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
#blog
</style>

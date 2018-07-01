<template lang="pug">
#home
  section.content.full.center
    #banner
    .txt
      .title BorderLands
      .sub-title With Imagination
    Menu
    .arrow
      svg(height='24', viewbox='0 0 24 24', width='24', xmlns='http://www.w3.org/2000/svg')
        path(d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z')
        path(d='M0-.75h24v24H0z', fill='none')
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
  methods: {

  },
  components: {
    Menu, Footer
  }
}
</script>

<style lang="sass" src="../assets/home.sass"></style>

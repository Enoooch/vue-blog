<template lang="pug">
  header.menu(:class='{ scrolled: scrolled }')
    .center
      router-link(to="/") home
      router-link(to="/gallery") gallery
      router-link(to="/blog") blog
      router-link(to="/support") support
      //- router-link(to="/privacy") privacy
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {

  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let windowHeight = window.innerHeight
        || document.documentElement.clientWidth
        || document.body.clientWidth
      if (window.scrollY + 70 >= windowHeight) {
        this.scrolled = true
      } else this.scrolled = false
    }
  },
  components: {

  }
}
</script>

<style scoped lang="sass">
  .menu
    position: fixed
    top: 0
    left: 0
    width: 100%
    z-index: 2
    padding: 30px
    transition: background .2s ease
    .center
      text-transform: uppercase
      // animation: fadeIn 3s both
      a
        text-decoration: none
        margin: 0 15px
        opacity: .45
        color: white
        letter-spacing: .7px
        font-size: 12px
        transition: color .2s ease
        &:before
          content: ""
          position: absolute
          width: 100%
          height: 1px
          bottom: -5px
          left: 0
          background-color: white
          visibility: hidden
          transform: scaleX(0)
          transition: all .25s
        &:hover
          opacity: 1
          &:before
            transform: scaleX(1)
            visibility: visible
  .scrolled
    background: white
    box-shadow: 0 -5px 15px 0 #CED4DA
    .center
      a
        color: black
        &:before
          background-color: black
</style>

<template lang="pug">
  header.menu
    .center
      router-link(to="/") home
      router-link(to="/gallery") gallery
      router-link(to="/blog") blog
      router-link(to="/support") support
</template>

<script>
export default {
  data() {
    return {

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
</style>

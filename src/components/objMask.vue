<template lang="pug">
  .mask-container
    img(:src="src", :class="{r2l: r2l}")
    .mask(:class="{r2l: r2l}")
</template>

<script>

export default {
  props: {
    src: '',
    r2l: false,
  },
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="sass">
.mask-container
  width: 100%
  font-size: 0
  overflow: hidden
  padding-bottom: 55%
  img
    object-fit: cover
    position: absolute
    right: 0
    top: 0
    bottom: 0
    left: 0
    margin: auto
    // transition: all 275ms ease-in-out 600ms
    transform: translateX(-120%)
  .mask
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 50%
    width: 120%
    background: #222223
    opacity: 1
    // transition: all 650ms ease-in-out 500ms
    transform: translateX(-120%)
  .r2l
    transform: translateX(120%)
</style>

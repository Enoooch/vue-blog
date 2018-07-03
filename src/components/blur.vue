<template lang="pug">
  .placeholder
    img.img-small(:src="imgSmall", @load="onLoad_s()", :class="{loaded: loaded_s}", v-if="imgSmall")
    img.img-small.loaded(:style="{backgroundColor: bgColor}", v-else)
    img.img-large(:src="imgLarge", @load="onLoad_l()", :class="{loaded: loaded_l}")
</template>

<script>
export default {
  props: {
    imgLarge: {
      type: String,
      default: ''
      // required: true
    },
    imgSmall: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: '#fff'
    }
  },
  data() {
    return {
      loaded_s: false,
      loaded_l: false,
    }
  },
  methods: {
    onLoad_s () {
      this.loaded_s = true
    },
    onLoad_l () {
      this.loaded_l = true
    }
  }
}
</script>

<style scoped lang="sass">
  .placeholder
    width: 100%
    background-color: #000
    background-size: cover
    background-repeat: no-repeat
    position: relative
    overflow: hidden
    display: flex
    align-items: center
    justify-content: center
    img
      position: absolute
      opacity: 0
      width: 100%
      object-fit: cover
      transition: opacity 1s linear
      &.loaded
        opacity: 1
    .img-small
      filter: blur(50px)
      transform: scale(1)
      transition: opacity .6s linear
</style>

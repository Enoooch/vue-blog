<template lang="pug">
  .placeholder
    img.img-small(:src="imgSmall", @load="onLoad()", :class="{loaded: loaded}")
    img.img-large(:src="imgLarge", @load="onLoad()", :class="{loaded: loaded}")
</template>

<script>
export default {
  props: ['imgLarge', 'imgSmall'],
  data() {
    return {
      loaded: false
    }
  },
  methods: {
    onLoad () {
      this.loaded = true
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
</style>

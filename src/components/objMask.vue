<template lang="pug">
  .mask-container
    img(:src="src")
    .mask

</template>

<script>
export default {
  props: {
    src: ''
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
  background: white
  img
    object-fit: cover
    left: -100%
    transition: all 275ms ease-in-out 600ms
  .mask
    position: absolute
    top: 0
    bottom: 0
    left: -120%
    right: 0
    width: 120%
    background: #222223
    transition: all 650ms ease-in-out 500ms
  .img-reveal
    left: 0
  .reveal
    left: 100%
</style>

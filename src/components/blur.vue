<template lang="pug">
  .placeholder(:data-large="imgLarge")
    img.img-small(:src="imgSmall")
    .pb
    img.img-large
</template>

<script>
export default {
  props: ['imgLarge', 'imgSmall'],
  data() {
    return {

    }
  },
  mounted () {
    var placeholder = document.querySelector('.placeholder'),
      small = placeholder.querySelector('.img-small'),
      large = placeholder.querySelector('.img-large')

    // 1: load small image and show it
    var img = new Image()
    img.src = small.src
    img.onload = function () {
      small.classList.add('loaded')
    }

    // 2: load large image
    large.src = placeholder.dataset.large
    large.onload = function () {
      large.classList.add('loaded')
    }
    // placeholder.appendChild(imgLarge)
  },
  components: {

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
      width: 100vw
      height: 100vh
      object-fit: cover
      transition: opacity 1s linear
      &.loaded
        opacity: 1
    .img-small
      filter: blur(50px)
      transform: scale(1)
    .pb
      width: 100%
      height: 100%
      padding-bottom: 100%
</style>

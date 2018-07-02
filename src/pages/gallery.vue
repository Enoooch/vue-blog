<template lang="pug">
#gallery
  section.content.full.center
    blur#banner(imgLarge="/img/gallery.jpeg", imgSmall="/img/gallery-blur.jpg")
    .shadow
    .txt
      .title Gallery
    Menu
  // Footer
</template>

<script>

export default {
  data() {
    return {

    }
  },
  components: {}
}
</script>

<style scoped lang="sass">
  #gallery
    #banner
      // background: linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(../assets/img/gallery.jpeg) 50% 50% / cover no-repeat
</style>

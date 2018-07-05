<template lang="pug">
#support
  section.content.full.center
    blur#banner(imgLarge="/img/support.jpeg", imgSmall="/img/support-blur.jpg")
    .shadow
    .banner-txt
      .title Support
    Menu
  Footer
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
#support
  #banner
    // background: linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(../assets/img/support.jpeg) 50% 50% / cover no-repeat
</style>

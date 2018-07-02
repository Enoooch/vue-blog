<template lang="pug">
#blog
  section.content.full.center
    blur#banner(imgLarge="/img/blog.jpeg", imgSmall="/img/blog-blur.jpg")
    .shadow
    .txt
      .title Blog
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
#blog
  #banner
    // background: linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(../assets/img/blog.jpeg) 50% 50% / cover no-repeat
</style>

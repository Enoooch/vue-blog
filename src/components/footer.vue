<template lang="pug">
  footer#footer © 2020 Enoch /
    a(href="mailto:tjc.enoch.c@gmail.com") &nbsp;Contact
    .placeholder
    a(href="http://www.beian.miit.gov.cn", target="_blank") 浙ICP备18025059号-1
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped lang="sass">
  #footer
    background-color: white
    font-size: 12px
    text-align: center
    padding: 80px 0
    color: #ADB5BD
    a
      text-decoration: none
      color: inherit
    .placeholder
      margin: 20px auto
</style>

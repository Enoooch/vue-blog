<template lang="pug">
  #sharp
</template>

<script>

import sharp from 'sharp'
import fs from 'fs'

export default {
  data() {
    return {

    }
  },
  mounted() {
    const testFolder = '../assets/img/'
    fs.readdir(testFolder, (err, files) => {
      files.forEach(file => {
        console.log(file)
      })
    })
  },
  components: {

  }
}
</script>

<style scoped lang="sass">

</style>

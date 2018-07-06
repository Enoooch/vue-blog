<template lang="pug">
#blog
  section.content.full.center
    blur#banner(imgLarge="/img/blog.jpeg", imgSmall="/img/blog-blur.jpg")
    .shadow
    .banner-txt
      .title Blog
    Menu
  section.list
    article
      .txt
        h3 Thomas Cook it.
        p Thomas Cook Scheduled Business (TCSB) is part of the Thomas Cook Group of companies, offering flights, hotels, car hire in 1500 destinations, long-haul holidays and city breaks. They help 21,000 visitors every day, carrying 88,000+ passengers to the US and 18,000 passengers to Bangkok every year.
        p TCSB needed a replacement complaint handling system. We deployed TravelCRM Complaint Handling from project initiation to go-live in under a three-month time period. Thomas Cook also use Travelink for the fulfilment of direct passenger and travel agent bookings, along with a number of our legacy products: EasySell, TravelCat, TravelConnect, TravelCRM and TravelGateway.
        p Positive feedback was consistently received from the customer throughout the delivery of the project; delivered on time and on budget. Training was also successfully delivered using the “train the trainer” approach and Thomas Cook will rely on Inspiretec throughout 2018 on a number of other projects which are to be announced soon.
  section.img-grid
    article
      objMask(src="/img/o.jpg")
  Footer
</template>

<script>

import { scrollReveal, objMask } from '../lib/animation'

export default {
  data() {
    return {

    }
  },
  mounted () {
    scrollReveal()
    objMask()
  },
  components: {}
}
</script>

<style scoped lang="sass">
#blog
  #banner
    // background: linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(../assets/img/blog.jpeg) 50% 50% / cover no-repeat
  .list
    background: #fff
    overflow: hidden
    article
      margin-top: 1.36999rem
      width: 90%
      max-width: 1800px
      margin-left: auto
      margin-right: auto
      padding-left: 2rem
      padding-right: 2rem
  .img-grid
    font-size: 0
    article
      max-height: 600px
      overflow: hidden
      display: flex
      align-items: center
      justify-content: center
</style>

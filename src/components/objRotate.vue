<template lang="pug">
  article(:class="{left: left}", ref="container")
    .txt
      a(:href="link")
        h3 {{title}}
      p {{content}}
    .img(ref="inner")
      slot
    .txt
      a
        h3 {{title}}
      p {{content}}
</template>

<script>

import { TweenLite } from 'gsap'

export default {
  props: {
    title: '',
    content: '',
    left: false,
    link: ''
  },
  data() {
    return {
      mouse: {
        x: 0,
        y: 0
      },
      originX: 0,
      originY: 0,
    }
  },
  mounted() {
    this.rotate(this.$refs.container,this.$refs.inner)
  },
  methods: {
    onMouseEnterHandler(e) {

    },
    onMouseMoveHandler(e) {
      var container = this.$refs.container
      var inner = this.$refs.inner
      var cx = Math.ceil(container.clientWidth / 2.0)
      var cy = Math.ceil(container.clientHeight / 2.0)
      var dx = e.clientX - container.offsetLeft - cx
      var dy = e.clientY - container.getBoundingClientRect().top - cy

      var tiltx = - (dy / cy)
      var tilty = (dx / cx)
      var radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2))
      var degree = (radius * 2)
      TweenLite.to(inner, 1.2, {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'})
    },
    onMouseLeaveHandler(e) {
      TweenLite.to(this.$refs.inner, 1.2, {ease: 'power1.in', transform: 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)'})
    },
    rotate(container, inner) {
      container.onmouseenter = this.onMouseEnterHandler
      container.onmousemove = this.onMouseMoveHandler
      container.onmouseleave = this.onMouseLeaveHandler
    }
  },
  components: {

  }
}
</script>

<style scoped lang="sass">
  article
    display: table
    width: 100%
    perspective: 300px
    margin: 0 0 10rem
    .txt
      display: table-cell
      vertical-align: middle
      width: 45%
      &:nth-child(3)
        display: none
      a
        display: block
        color: #222223
        text-decoration: none
        transition: color 250ms ease, background-color 250ms ease
        margin-left: 10%
        cursor: pointer
        &:hover
          color: #9e9e9e
        h3
          line-height: 1.2rem
          font-size: 1.44rem
          margin-bottom: .53279rem
          padding-top: .46721rem
          font-size: 1.5rem
      p
        color: #7c7c7c
        max-width: 80%
        margin-left: 0
        margin-right: 0
        text-align: left
        line-height: 30px
        margin-left: 10%
        font-size: 0.85rem
    .img
      display: table-cell
      width: 55%
      // transition: all 500ms cubic-bezier(.215,.61,.355,1)
    @media screen and (max-width:768px)
      display: block
      padding: 3%
      .txt
        display: block
        width: 100%
        a
          text-align: center
          margin-left: 0
        p
          text-align: center
          margin-left: 0
          max-width: 100%
      .img
        display: block
        width: 100%
  .left
    .txt
      &:nth-child(1)
        display: none
      &:nth-child(3)
        display: table-cell
    @media screen and (max-width:768px)
      .txt
        &:nth-child(1)
          display: block
        &:nth-child(3)
          display: none
</style>

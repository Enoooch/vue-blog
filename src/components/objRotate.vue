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
export default {
  props: {
    title: '',
    content: '',
    left: false,
    link: ''
  },
  data() {
    return {
      container: null,
      inner: null,
      mouse: {
        x: 0,
        y: 0
      },
      originX: 0,
      originY: 0,
    }
  },
  created() {

  },
  mounted() {
    this.container = this.$refs.container
    this.inner = this.$refs.inner
    this.rotate(this.$refs.container,this.$refs.inner)
    window.addEventListener('scroll', this.setOrigin(this.$refs.container))
  },
  methods: {
    setOrigin(e) {
      this.originX = e.offsetLeft + e.clientWidth / 2
      this.originY = e.getBoundingClientRect().top + e.clientHeight / 2
      // console.log(e.offsetLeft,e.clientWidth,this.originX, this.originY)
    },
    updatePosition(event) {
      var e = event || window.event
      this.mouse.x = e.clientX - this.originX
      this.mouse.y = (e.clientY - this.originY) * -1
      console.log(this.mouse.x, this.mouse.y)
    },
    updateTransformStyle(x, y, inner) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)"
      inner.style.transform = style
      inner.style.webkitTransform = style
      inner.style.mozTranform = style
      inner.style.msTransform = style
      inner.style.oTransform = style
    },
    update(event) {
      this.updatePosition(event)
      this.updateTransformStyle(
        ((this.mouse.y) / this.container.offsetHeight / 2),
        ((this.mouse.x) / this.container.offsetWidth / 2),
        this.$refs.inner
      )
    },
    onMouseEnterHandler(event) {
      this.update(event)
    },
    onMouseLeaveHandler() {
      this.$refs.inner.style = ""
    },
    onMouseMoveHandler(event) {
      this.update(event)
    },
    rotate(container, inner) {
      this.$refs.container.onmousemove = this.onMouseMoveHandler
      this.$refs.container.onmouseleave = this.onMouseLeaveHandler
      this.$refs.container.onmouseenter = this.onMouseEnterHandler
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
    margin: 5rem 0
    perspective: 30px
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
      transition: transform 0.8s ease
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

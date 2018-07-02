<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont icon-fanhui"></div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'cityHeader'
  }
</script>

<style lang="stylus" scoped type="text/stylus">
  @import '~styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .16rem
    .icon-fanhui
      position: absolute
      top: 0
      left: 0
      width: .32rem
      text-align: center
      font-size: .2rem
      color: #fff
</style>

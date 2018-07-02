<template>
  <div class="header ">
    <div class="header-left">
       <div  class="iconfont icon-fanhui"></div>
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont icon-jiantou"></span>
      </div>
    </router-link>
  </div>
</template>

<script>

  export default {

  }
</script>

<style lang="stylus" scoped type="text/stylus">

  @import '~styles/varibles.styl'

.header
   background $bgColor
   height:.64rem
   color: #fff
   .header-left
     width: .64rem
     float left
     text-align: center
     .icon-fanhui
         height .64rem
         line-height .64rem
         font-size: .2rem
  .header-right
      float right
      min-width: 0.52rem
      padding: 0 .05rem
      text-align: center
      height:.64rem
      line-height .64rem
      font-size: .4rem
      color: #fff
      .icon-jiantou
          margin-left: -.04rem
          font-size: .4rem
          color: #fff
</style>

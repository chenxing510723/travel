<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info border-1px">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc" style="font-size: 12px">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
 export default{
     props:{
         list:Array
     }
 }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~styles/mixin.styl'
.title
     line-height .64rem
     font-size .32rem
     text-indent .4rem
   .item
       overflow: hidden
       display: flex
       height: 1.9rem
       font-size .1rem
       line-height .60rem
       .item-img
         width: 2rem
         padding .1rem
       .item-info
         flex 1
         padding: .1rem
         min-width: 0
         border-1px(#ff9300)
       .item-button
         background: #ff9300
         color:#fff
</style>


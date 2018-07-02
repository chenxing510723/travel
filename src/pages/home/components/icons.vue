<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class='icon-img'>
            <img width="90%"  class='icon-img-content' :src='item.imgUrl' />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          autoplay: false
        }
      }
    },
    computed:{
        pages() {
            let pages = [];
            this.list.forEach((item,index)=>{
                let page=Math.floor(index/8);
                if(!pages[page]){
                    pages[page] =[]
                }
                pages[page].push(item)
            })
          return pages
        }
    }
  }
</script>

<style lang="stylus" scoped type="text/stylus">
 .icons
   .icon
      width:25%
      text-align center
      display inline-block
      font-size .32rem
      margin-top .32rem
      .icon-desc
          line-height .64rem


 /* .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()*/
</style>

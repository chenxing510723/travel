<template>
  <div class="list" ref="wrapper">
   <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title ">{{key}}</div>
        <div class="item-list">
          <div
            class="item"
            v-for="innerItem of item"
            :key="innerItem.id"
          @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
export default {
    props: {
        cities:Object,
        hotCities:Array,
        letter: String
      },
    mounted () {
            this.scroll = new BScroll(this.$refs.wrapper,{
                click : true
            })
        },
    watch:{
        letter (){
            if(this.letter){
             let el=this.$refs[this.letter][0];
              this.scroll.scrollToElement(el)
            }
        }
    },
    methods:{
      handleCityClick (city) {
          this.$store.commit('hotcity', city);
          this.$router.push('/')
      }
    }

}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    font-size .32rem
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>

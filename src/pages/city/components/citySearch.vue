<template>
  <div>
    <div class="search">
      <input v-model="keyWord" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
   <div
      class="search-content"
      ref="search"
      v-show="keyWord"
    >

      <ul>
        <li
          class="search-item "
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
      props:{
         cities : Object
      },
      data () {
          return {
            keyWord:'',
            timer:null,
            list:[]
          }
      },
      computed:{
        hasNoData(){
            return !this.list.length
        }
      },
      mounted (){
          this.scroll = new BScroll(this.$refs.search)
      },
      watch:{
        keyWord () {
              if(this.timer){
                  clearTimeout(this.timer)
              }
              if(!this.keyWord){
                  this.list = [];
                   return
              }
            this.timer = setTimeout(() => {
                  const value = [];
               for (let i in this.cities){
                 this.cities[i].forEach((item) => {

                     if(item.spell.indexOf(this.keyWord) > -1 || item.name.indexOf(this.keyWord) > -1){
                       value.push(item)
                     }
                   })
               }
               this.list = value
            },100)
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

<style lang="stylus" scoped type="text/stylus">
  @import '~styles/varibles.styl'
  .search
    height: .36rem
    padding: .1rem
    background: $bgColor
    font-size .2rem
    .search-input
      box-sizing: border-box
      width: 100%
      height: .3rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>

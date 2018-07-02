<template>
  <div>
    <HomeHeader ></HomeHeader>
    <swiper :list="swiperList"> </swiper>
    <icons  :list="iconList" ></icons>
    <recommend :list="recommend"></recommend>
  </div>
</template>

<script>
  import HomeHeader from './components/header.vue'
  import swiper from './components/Swiper'
  import icons from './components/icons'
  import recommend from './components/recommend'
 /* import { mapState } from 'vuex'*/
  export default {
  name: 'Home',
    components: {
      HomeHeader,
      swiper,
      icons,
      recommend
    },
  created(){
      this.$axios.get('/api/index.json').then(res => {
           this.swiperList = res.data.data.swiperList;
           this.iconList = res.data.data.iconList;
           this.recommend = res.data.data.recommendList
      })
  },
    data () {
      return {
        swiperList:[],
        iconList:[],
        recommend:[]
      }
    }
    /* data () {
      return {
        lastCity: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    computed: {
     // ...mapState(['city'])
    },
    methods: {
      getHomeInfo () {
        axios.get('/api/index.json?city=' + this.city)
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    },
    mounted () {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    activated () {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    }*/
  }
</script>

<style>

</style>

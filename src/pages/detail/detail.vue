<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
 import DetailBanner from './components/banner'
 import DetailHeader from './components/header'
 import DetailList from './components/list'
 export default{
   name:'detail',
   components: {
     DetailBanner,
     DetailHeader,
     DetailList
   },
      data () {
         return {
           sightName: '',
           bannerImg: '',
           gallaryImgs: [],
           list: []
         }
      },
     mounted (){
         this.$axios.get('/api/detail.json', {
             params:{
                 id: this.$route.params.id
             }
         }).then((res) => {
             this.sightName = res.data.data.sightName;
             this.bannerImg = res.data.data.bannerImg;
             this.gallaryImgs = res.data.data.gallaryImgs;
             this.list = res.data.data.categoryList
         })
     }
 }
</script>

<style lang="stylus" scoped>
  .content
    height: 25rem
</style>

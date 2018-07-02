<template>
  <div>
       <CityHeader></CityHeader>
       <citySearch :cities="cities"></citySearch>
       <cityList
         :hotCities="hotCities"
         :letter = "letter"
         :cities="cities"
       >

       </cityList>
       <cityAlphabet
         :cities="cities"
         @change="handleLetterChange"
       >
       </cityAlphabet>
  </div>
</template>

<script>
  import CityHeader from './components/cityHeader.vue'
  import citySearch from './components/citySearch.vue'
  import cityList from './components/cityList.vue'
  import cityAlphabet from './components/alphabet.vue'
  export default{
      components:{
        CityHeader,
        citySearch,
        cityList,
        cityAlphabet
      },
    data () {
         return {
           hotCities:[],
           cities:{},
           letter:''
         }
    },
    methods:{
      handleLetterChange(letter) {
          this.letter = letter;
      },
    },
    mounted(){
          this.$axios.get('/api/city.json').then((res) => {
              this.cities = res.data.data.cities;
              this.hotCities = res.data.data.hotCities
          })
      }
  }
</script>

<style lang="stylus" scoped type="text/stylus">

</style>

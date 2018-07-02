<template>
    <ul class="list">
      <li
        class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleLetterStart"
        @touchMove="handleLetterMove"
        @touchEnd="handleLetterEnd"
      >
      {{item}}
      </li>
    </ul>
</template>

<script>
  export default {
    props:{
      cities : Object
    },
    computed:{
        letters () {
          const letters = [];
           for(let  i in this.cities){
             letters.push(i)
            }
            return letters
        }
    },
    data () {
        return {
          touchStatus: false,
          startY: 0,
          timer:null
        }
    },
    updated(){
        /*cities 初始的时候是一个对象，alphabet一开始是空的，请求到的数据传入，重新渲染
         触发updated
        */
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods:{
      handleLetterClick(e){
          this.$emit('change',e.target.innerText)
      },
      handleLetterStart(e){
           this.$emit('change',e.target.innerText)
            this.touchStatus = true
      },
      handleLetterMove(e){
           if(this.touchStatus){
              if(this.timer){
                  clearTimeout(this.timer)
              }
             this.timer = setTimeout(() => {
               const touchY = e.touchs[0].clientY - 39;
               const index = Math.floor((touchY-this.startY)/22);
               if(index >= 0 && index < this.letters.length){
                 this.$emit('change' , this.letters[index])
               }

             },10)
           }
      },
      handleLetterEnd(){
          this.touchStatus = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      font-size .32rem
      text-align: center
      color: $bgColor
</style>

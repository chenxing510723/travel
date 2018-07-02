<template>
  <div id="app" >
   <keep-alive exclude="detail"> <!--detail组件不缓存-->
     <router-view></router-view>
   </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style></style>

<template>
  <div id="HomePage" >
    <Sort></Sort>
    <DisplayPosts :apexComName="''" class='ds'></DisplayPosts>
   <SideBar> </SideBar>

  </div>
</template>

<script>
import Sort from "./Sort.vue"
import DisplayPosts from "./DisplayPosts.vue"
import HomeSideBar from "./HomeSideBar.vue"

export default {
  name: 'HomePage',
  components:{
    'DisplayPosts':DisplayPosts,
    'SideBar':HomeSideBar,
    'Sort':Sort,
  
  },
}

</script>

<style scoped>
.ds{
  width: 60%
}
</style>

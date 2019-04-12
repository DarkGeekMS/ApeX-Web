<template>
  <div id="HomePage" >
     <!-- <HotPosts></HotPosts> -->
     <DisplayPosts :apexComName="''"></DisplayPosts>
     <SideBar> </SideBar>

  </div>
</template>

<script>

import DisplayPosts from "./DisplayPosts.vue"
import HomeSideBar from "./HomeSideBar.vue"
import HotPosts from "./HotPosts.vue"
export default {
  name: 'HomePage',
  components:{
    'DisplayPosts':DisplayPosts,
    'SideBar':HomeSideBar,
    'HotPosts':HotPosts
  },
  data(){
    return{
      title:'title '
    }
  }
}

</script>

<style scoped>

</style>

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
import RecentPosts from "./RecentPosts.vue"
export default {
  name: 'HomePage',
  components:{
    'DisplayPosts':DisplayPosts,
    'SideBar':HomeSideBar,
    'RecentPosts':RecentPosts,
  },
}

</script>

<style scoped>

</style>

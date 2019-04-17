<template>
  <div id="HomePage" >
     <!-- <HotPosts></HotPosts> -->
      <DisplayPosts :apexComName="''"></DisplayPosts>
     <SideBar> </SideBar> 
     <!-- <post></post> -->
  </div>
</template>

<script>

import DisplayPosts from "./DisplayPosts.vue"
import post from "./Post.vue"
import HomeSideBar from "./HomeSideBar.vue"
import RecentPosts from "./RecentPosts.vue"
export default {
  name: 'HomePage',
  components:{
    'DisplayPosts':DisplayPosts,
    'SideBar':HomeSideBar,
    'RecentPosts':RecentPosts,
    'post':post
  },
}

</script>

<style scoped>

</style>

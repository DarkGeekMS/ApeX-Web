<template>
  <div id="HomePage" >
     <!-- <HotPosts></HotPosts> -->
     <DisplayPosts class="ds" :apexComName="''"></DisplayPosts>
     <SideBar> </SideBar>

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
.ds{
  width: 60%
}
</style>

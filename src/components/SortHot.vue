<template>
  <div id="SortHot" >
    <DisplayPosts :apexComName="ap" :sortparam="'votes'" class='ds'></DisplayPosts>
  </div>
</template>

<script>

import DisplayPosts from "./DisplayPosts.vue"


export default {
props:['ap'],
name: 'SortHot',

  components:{
    'DisplayPosts':DisplayPosts,
  },
}

</script>

<style scoped>
#SortHot
{
  background-color: #DAE0E6;
  height: 100%;
  min-height:720px;
  margin-top: 0px;
  min-width: 100%;
}
.ds{
  width:60%;
}
</style>

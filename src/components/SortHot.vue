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
  data(){
    return{
  }
},


}

</script>

<style scoped>

</style>

<template>
  <div id="SortNew" >
    <DisplayPosts :apexComName="ap" :sortparam="'comments'" class='ds'></DisplayPosts>
  </div>
</template>

<script>

import DisplayPosts from "./DisplayPosts.vue"


export default {
props:['ap'],
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
.ds{
  width: 60%
}
</style>

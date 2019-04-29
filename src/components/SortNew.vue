<template>
  <div id="SortNew" >
    <DisplayPosts :apexComName="ap" :sortparam="'date'" class='ds'></DisplayPosts>
  </div>
</template>

<script>

import DisplayPosts from "./DisplayPosts.vue"


export default {
props:['ap'],
  name: 'HomePage',
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
#SortNew
{
  background-color: #DAE0E6;
  height: 100%;
  min-height:720px;
  margin-top: 0px;
  min-width: 100%;
}
.ds{
  width: 60%
}
</style>

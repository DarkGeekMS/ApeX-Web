<template>
  <div id="hiddenposts" >
    <DisplayPosts :user="true" :userName="userName" :sortparam="'hidden'" class='ds'></DisplayPosts>
  </div>
</template>

<script>

import DisplayPosts from "./DisplayPosts.vue"


export default {
name: 'HiddenPosts',
props:['userName'],

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
#hiddenposts
{
  background-color: #DAE0E6;
  height: 100%;
  min-height:720px;
  width: 90%;
  margin-top: 4%;
}
.ds{
  width:60%;
}
</style>

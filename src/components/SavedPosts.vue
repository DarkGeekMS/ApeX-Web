<template>
  <div id="SavedPosts" >
    <DisplayPosts :user="true" :userName="userName" :sortparam="'saved'" class='ds'></DisplayPosts>
  </div>
</template>

<script>

import DisplayPosts from "./DisplayPosts.vue"


export default {
name: 'SavedPosts',
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
#SavedPosts
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

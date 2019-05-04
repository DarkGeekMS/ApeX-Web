<template>
  <div id="userposts" >
    <DisplayPosts :user="true" :userName="userName" :sortparam="'personal'" class='ds'></DisplayPosts>
  </div>
</template>

<script>

import DisplayPosts from "./DisplayPosts.vue"


export default {
name: 'UserPosts',
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
#userposts
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

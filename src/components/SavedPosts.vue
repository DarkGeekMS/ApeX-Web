<template>
  <div id="SavedPosts" >
    <DisplayPosts :user="true" :userName="userName" :sortparam="'saved'" class='ds'></DisplayPosts>
    <UserProfileSavedComments :userName="userName" ></UserProfileSavedComments>
  </div>
</template>

<script>

import DisplayPosts from "./DisplayPosts.vue"
import UserProfileSavedComments from "./UserProfileSavedComments.vue"
export default {
name: 'SavedPosts',
props:['userName'],

  components:{
    'DisplayPosts':DisplayPosts,
    'UserProfileSavedComments':UserProfileSavedComments,
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
  width: 90%;
  margin-top: 4%;
}
.ds{
  width:60%;
}
</style>

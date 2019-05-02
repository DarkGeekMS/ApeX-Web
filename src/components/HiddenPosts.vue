<template>
  <div id="hiddenposts" >
    <DisplayPosts :user="true" :sortparam="'personal'" class='ds'></DisplayPosts>
  </div>
</template>

<script>

import DisplayPosts from "./DisplayPosts.vue"


export default {
name: 'HiddenPosts',

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
  margin-top: 0px;
  min-width: 100%;
}
.ds{
  width:60%;
}
</style>

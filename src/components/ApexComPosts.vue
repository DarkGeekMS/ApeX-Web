
<template id="posts desing">
  <!-- class="postsBox" -->
   <div  id="postslist">
    <DisplayPosts class="box"></DisplayPosts>
  </div>
</template>

<script>
import DisplayPosts from './DisplayPosts.vue'


export default {
  data () {
    return {
  }
},
  components:{
    'DisplayPosts':DisplayPosts,

  }
}
</script>

<style scoped>
.box{
  width:100%;
  height:auto;
  background-color:white;
  margin:5% 0%;
  padding:4% 3%;
  border-radius: 8px;
}
</style>


<template id="posts desing">
  <!-- class="postsBox" -->
   <div  id="postslist">


    <DisplayPosts></DisplayPosts>
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
    DisplayPosts,

  }
}
</script>

<style scoped>
#postslist{
  width:810px;
  height:auto;
  background-color:#eee;
  margin:124px 15px;
  padding:15px 15px;
  border-radius: 8px;
}
</style>

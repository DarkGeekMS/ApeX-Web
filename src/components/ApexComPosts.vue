
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
    'DisplayPosts':DisplayPosts,

  }
}
</script>

<style scoped>

</style>

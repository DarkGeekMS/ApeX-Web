
<template id="posts desing">
  <!-- class="postsBox" -->
   <div  id="postslist">
    <DisplayPosts class="box" v-bind:apexComName="ApexComName"></DisplayPosts>
  </div>
</template>

<script>
import DisplayPosts from './DisplayPosts.vue'

/**
 * @vue-prop  {string} apexComName - community name
 */

export default {
  props:['ApexComName'],
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
  margin:-8% -11%;
  padding:4% 3%;
  border-radius: 8px;
  margin-top: 3%;
}
</style>


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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* padding: 0;
  margin: 0;
  list-style: none;
  
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  justify-content: space-around; */
}
.box{
  width:100%;
  height:auto;
  margin:-8% -11%;
  padding:0% 0%;
  border-radius: 8px;
  margin-top: 3%;
}
</style>

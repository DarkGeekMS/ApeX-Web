
<template id="posts desing">
  <!-- class="postsBox" -->
   <div  id="postslist">
     <div class="sort">
       <Sort :apex="apexComId" style="padding-top:10px"></Sort>
     </div>
  </div>
</template>

<script>
import DisplayPosts from './DisplayPosts.vue'
import Sort from './Sort.vue'

/**
 * @vue-prop  {string} apexComId - community name
 */

export default {
  props:['apexComId'],
  components:{
    'DisplayPosts':DisplayPosts,
    'Sort':Sort
  }
}
</script>

<style scoped>
.sort{
  margin-top:-58px;
  width: 167%;
  /* margin-right: -60%; */
  margin-left: -7%;
  /* margin-right:0%; */
  /* height:30px; */
}
* {

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
#postslist{
  margin-top:-2%;
}
</style>

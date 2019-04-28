
<template id="posts desing">
  <!-- class="postsBox" -->
   <div  id="postslist">
     <div class="sort">
       <Sort :apex="apexComName" style="padding-top:10px"></Sort>
     </div>
    <DisplayPosts class="box" v-bind:apexComName="apexName"></DisplayPosts>
  </div>
</template>

<script>
import DisplayPosts from './DisplayPosts.vue'
import Sort from './Sort.vue'

/**
 * @vue-prop  {string} apexComName - community name
 */

export default {
  props:['apexComName'],
  data () {
    return {
      apexName:this.apexComName,
  }
},
  components:{
    'DisplayPosts':DisplayPosts,
    'Sort':Sort
  }
}
</script>

<style scoped>
.sort{
  margin-top:-58px;
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

<template id="addmoderatorpagedesign">
<div class="main">
<div class="form-group has-feedback has-search" style="display:inline-block">
        <span class="glyphicon glyphicon-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search for user to Add as moderator" v-model="searchVal" v-on:keyup.enter="search()">
</div>

<router-view class="moderatorcomponent"></router-view>


</div>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'

export default {
props:['apexComId'],
components:{
},
  data () {
    return {
      searchVal:''
    }
  },
  methods:
  {
     /**
     * when search value isn't empty transfer to localStorage and go to route search
     */
      search: function(){
        if( this.searchVal != '')
        {
          // console.log(this.searchVal)
          // this.$localStorage.set('searchModerator' , this.searchVal),
          this.$router.push({name:'Moderators' , params: {query:this.searchVal}})
        }
      },
  },
  mounted()
  {

  },
}
</script>

<style scoped>

.moderatorcomponent{
  width:100%;
  height:auto;
  background-color:white;
  margin:1% 0%;
  padding:4% 3%;
  border-radius: 20%;
}

</style>

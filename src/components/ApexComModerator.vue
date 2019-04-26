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
props:['apexComName'],
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
          this.$localStorage.set('search' , this.searchVal),
          this.$router.push({ name:'Moderators'} )
        }
      }
  },
  mounted()
  {

  }
}
</script>

<style scoped>
* {
  width: 70%;
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
.moderatorcomponent{
  width:100%;
  height:auto;
  background-color:white;
  margin:1% 0%;
  padding:4% 3%;
  border-radius: 20%;
}

</style>

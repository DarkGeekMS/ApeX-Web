<template id="addmoderatorpagedesign">
<div>
<ApexComDeleteModerators 
    v-bind:apexComName="apexComName"
    class="moderatorcomponent"
></ApexComDeleteModerators>

<div class="form-group has-feedback has-search" style="display:inline-block">
        <span class="glyphicon glyphicon-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search for user to Add as moderator" v-model="searchVal" v-on:keyup.enter="search()">
</div>

<router-view class="moderatorcomponent"></router-view>


</div>
</template>

<script>
import axios from 'axios'
import ApexComDeleteModerators from './ApexComDeleteModerators.vue'
import {AllServices} from '../MimicServices/AllServices.js'

export default {
props:['apexComName'],
components:{
    'ApexComDeleteModerators':ApexComDeleteModerators
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
          this.$router.push({ name:'AddModerators'} )
        }
      }
  },
  mounted()
  {
    
  }
}
</script>

<style scoped>
.moderatorcomponent{
  width:100%;
  height:auto;
  background-color:white;
  margin:1% 0%;
  padding:4% 3%;
  border-radius: 8px;
}

</style>

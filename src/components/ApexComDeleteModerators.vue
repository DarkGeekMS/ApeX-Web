<template id="showmoderaorspagedesign">
<div >
<!-- <h4 v-if="!moderatorsList.lenght" >there is nothing to show </h4> -->
  <div id="moderatorsbox" class="box" v-for="(moderator,index) in moderatorsList" :key="moderator.id">
    <router-link class="accountLink" :to="{name:'UserProfile' , params: {userName:moderator.userName}}"> {{moderator.userName}}</router-link>
    <button id="remove button" class="button" v-on:click="deleteModerator(moderator.userName,index)">delete</button>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import {AllServices} from '../MimicServices/AllServices.js'

export default {
props:{
    apexComName:String
},
  data () {  
    return {
        moderatorsList:[],
    }
  },
  methods:
  {
      deleteModerator:function(userName,index){
          var data = AllServices.addOrDeleteModerator(userName,this.apexComName);
          if(data){
          this.moderatorsList.splice(index, 1);
          }
          else{
              console.log(error);
              }
      },
    /**
    * request the data for certain community
    */
     getAbout(){
         var about= AllServices.getAbout(this.apexComName).then((about) =>{
         this.moderatorsList=about.moderators;
         })
   },
  },
  mounted()
  {
      this.getAbout();
  }
}
</script>

<style scoped>
.button{
  width:25%;
  margin-top:0%;
  margin-left:0%;
  margin-right: 0%; 
  margin-bottom: 0%;
  color:skyBlue;
  background-color:white;
  padding: 0%;
  float:right;
  border-width: 3px;
  border-radius: 8px;
  cursor:pointer;
  border-color: skyblue;
  border-style: solid;
  text-transform: uppercase;
  height:38px;
}
.button:hover {opacity: 0.75}
.box{
  width:100%;
  height:auto;
  background-color:white;
  margin:1% 0%;
  padding:4% 3%;
  border-radius: 8px;
  display:inline-block;
}
.accountLink{
  text-decoration: none;
  color:black;
}
</style>

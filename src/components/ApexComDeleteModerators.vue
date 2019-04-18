<template id="showmoderaorspagedesign">
<div >
<h4 v-if="!moderatorsList.length" >there is nothing to show </h4>
  <div id="moderatorsbox" class="box" v-for="(moderator,index) in moderatorsList" :key="moderator.id">
    <router-link style="font-size: 1.2vw;" class="accountLink" :to="{name:'UserProfile' , params: {userName:moderator.userName}}"> {{moderator.userName}}</router-link>
    <button id="remove button" class="button" v-on:click="deleteModerator(moderator.userName,index)">delete</button>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import {AllServices} from '../MimicServices/AllServices.js'

export default {
props:['apexComName'],
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
  border-radius: 20%;
  font-size: 1.2vw;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor:pointer;
  border-color: skyblue;
  border-style: solid;
  text-transform: uppercase;
  height:auto;
}
.button:hover {opacity: 0.75}
.box{
  width:100%;
  height:auto;
  background-color:white;
  margin:1% 0%;
  padding:4% 3%;
  border-radius: 20%;
  display:inline-block;
}
.accountLink{
  text-decoration: none;
  color:black;
}
</style>

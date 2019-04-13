<template id="ApexComDesign">
<div id="all">
  <div class="Apexcom" id="Apexcom">
    <div class="apexcomName" id="apexcomName">
      <h1 id="Name">
        <img class="image" src="../../public/Logo_small.png" >
        {{ApexComName}}</h1>
    </div>
  
    <div class="navBar" id="navbar">
        <router-link id="postslink" class="navbarLinks" :to="{name:'Posts'}">Posts</router-link>
        <router-link v-show="isModerator()" id="subscribersListlink" class="navbarLinks" :to="{name:'Subscribers'}">subscribers</router-link>
        <router-link v-show="isModerator()" id="reportlink" class="navbarLinks" :to="{name:'Reports'}">view reports</router-link>
    </div>
</div>
    <SideBar class="sidebar" v-bind:apexComName="ApexComName"
    v-bind:rules="rules"
    v-bind:description="description"
    v-bind:moderators="moderators"
    v-bind:subscribersCount="subscribersCount"
    
    ></SideBar> 
    <div class="routerview">
    <router-view></router-view>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import SideBar from './ApexComSideBar.vue'
import {AllServices} from '../MimicServices/AllServices.js'

/**
 * @vue-data {JWT} [token='']  user Token
 * @vue-data {string} [loggeduser='']  name of logged in user
 * @vue-data {number} subscribersCount - Number of subscribers for certain community
 * @vue-data {string} description - community description
 * @vue-data {array} moderators - moderators for certain community
 * @vue-data  {array} rules - rules of certain community
 */

export default {
  props:['ApexComName'],
  components:{
    'SideBar':SideBar
  },
  data () {
    return {
      token:this.$localStorage.get('token'),
      userName:this.$localStorage.get('userName'),
      //userName:'moderator1',
      description:'',
      moderators:[],
      rules:[],
      subscribersCount: 0,
    }
  },
  methods:{

    /**
    * check if the user is moderator
    */
    CheckModerator:function(name)
    {
      console.log(name.userName);
      if( name.userName == this.userName){
        
      return true;
      }
    },
    /**
    * loop on moderators to check if user is moderator of this community 
    */
    isModerator:function(){
      var moderator = this.moderators.find(this.CheckModerator);
      if(moderator !== undefined){
          return true;
        }
      else{
          return false;
        }
    },
    /**
    * request the data for certain community
    */
     getAbout(){
         var about= AllServices.getAbout(this.ApexComName);
         this.description=about.description;
         this.moderators=about.moderators;
         this.rules=about.rules;
         this.subscribersCount=about.subscribersCount;
   },

  },
  mounted()
  {
  this.getAbout();
  }
}
</script>

<style scoped>

.Apexcom{
  width:auto;
  height:65px;
  margin-top:3%;
  margin-bottom:5%;
}
.apexcomName{
  background-color: deepSkyBlue;
  width:auto;
  height: 85px;
  padding:1px;
  color: #eee;
}
#Name{
  padding-left: 8%;
}
.navBar{
  background-color: rgb(219, 240, 255);
  width:auto;
  height:auto;
  margin:0% 0%;
  padding:1%;
  padding-left: 7%;
}
.navbarLinks{
  color: deepSkyBlue;
  padding: 0px 1%;
  padding-bottom: 1%;
  text-decoration: none;
  margin:1%;
}
.routerview{
  width:56%;
  margin: 8% 0%;
  margin-left: 4%;
  border-radius:8px;
  padding: 2%;
  background-color: #eee;
  float:left;
}
.sidebar{
  width:25%;
  height: auto;
  margin:8%;
  margin-left: 3%;
  margin-right: 6%;
  background-color:white;
  float:right;
}
.router-link-active{
  border-bottom: 3px solid deepSkyBlue;
}
.image{
  width:4%;
  height:50px;
  margin-top:0%;
  margin-bottom:1%;
  margin-right:0%;
  margin-left:0%;
  border-radius: 25px;
  box-sizing: border-box;
}
</style>

<template id="ApexComDesign">
<div id="all">
  <div class="Apexcom" id="Apexcom">
    <div class="apexcomName" id="apexcomName">
      <div class="imagediv">
      <h1 style=" font-size: 2.7vw; display:inline;" id="Name">{{apexComName}}</h1>
      <!-- <div class="img"> -->
        <img style="box-sizing: border-box; border-radius: 50%;" width="60px" height="60px" class="image" src="../../public/Logo_small.png" >
      
      <!-- </div> -->
      
      </div>
    </div>

    <div class="navBar" id="navbar">
        <router-link style="font-size: 1.2vw;"  id="postslink" class="navbarLinks" :to="{name:'Posts'}">Posts</router-link>
        <router-link style="font-size: 1.2vw;"   id="subscribersListlink" class="navbarLinks" :to="{name:'Subscribers'}">subscribers</router-link>
        <!-- <router-link style="font-size: 1.2vw;"  v-show="isModerator() || isAdmin()" id="reportlink" class="navbarLinks" :to="{name:'Reports'}">view reports</router-link> -->
        <router-link style="font-size: 1.2vw;" id="reportlink" class="navbarLinks" :to="{name:'Reports'}">view reports</router-link>
        <router-link style="font-size: 1.2vw;"  v-show="isAdmin()"  id="addmoderatorlink" class="navbarLinks" :to="{name:'Moderators'}">add moderator</router-link>
         <router-link style="font-size: 1.2vw;"  v-show="isAdmin()"  id="deletemoderatorlink" class="navbarLinks" :to="{name:'DeleteModerators'}">delete moderator</router-link>

    </div>
</div>
    <SideBar class="sidebar" v-bind:apexComName="apexComName"
    ></SideBar>
    <div class="routerview">
    <router-view></router-view>
    </div>
</div>
</template>

<script>
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
  props:['apexComName'],
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
      if(this.loggedIn){
      var moderator = this.moderators.find(this.CheckModerator)
      if(moderator !== undefined){
          return true;
        }
      else{
          return false;
        }
      }
    },
    /**
      *check if user is an admin
      */
      isAdmin:function()
      {
        if(this.loggedIn){
        AllServices.userType().then((data) =>{
        if(data.type ==1){
          return true;
          }
        else{
          return false;
        }
        })
        }
      },
    /**
    * request the data for certain community
    */
     getAbout(){
         AllServices.getAbout(this.apexComName).then((about) =>{
         this.description=about.description;
         this.moderators=about.moderators;
         this.rules=about.rules;
         this.subscribersCount=about.subscribersCount;
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
#all{
  height:100%;
}
.Apexcom{
  width:100%;
  height: 50%;
  margin-top:4%;
  margin-bottom:2%;
  height: auto;
}
.apexcomName{
  background-color: deepSkyBlue;
  width:auto;
  padding-top:3%;
  color: white;
  height: auto;
}
#Name{
  padding-left: 1%;
  padding-top: 1%;
  display:inline;
}
.navBar{
  background-color: rgb(219, 240, 255);
  width:100%;
  height:auto;
  margin-bottom:1%;
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
  margin-top: 5%;
  margin-bottom: 0%;
  margin-left: 4%;
  border-radius:20%;
  padding: 2%;
  float:left;
}
.sidebar{
  width:25%;
  height: auto;
  margin-top:4%;
  margin-bottom: 0%;
  margin-left: 3%;
  margin-right: 6%;
  float:right;
}
.router-link-active{
  border-bottom: 3px solid deepSkyBlue;
}
img{
  width:50px;
  height:50px;
  margin-top:0%;
  margin-bottom:0%;
  margin-right:0%;
  margin-left:3%;
  float: left;
}
.imagediv{
  margin-top:0%;
  margin-bottom:2%;
  width:100%;
  height:auto;
  display:inline-block;
}
@media (max-width: 1024px){
.Apexcom{
  margin-top:40px;
  
}
}
@media (max-width: 425px){
img{
  margin-top:6px;
}
}
@media (max-width: 313px){
img{
  margin-top:8px;
}
}



</style>

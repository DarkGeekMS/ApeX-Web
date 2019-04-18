<template id="ApexComDesign">
<div id="all">
  <div class="Apexcom" id="Apexcom">
    <div class="apexcomName" id="apexcomName">
      <div class="imagediv">
      <h1 id="Name">{{apexComName}}</h1>
      <div class="img">
        <img style="box-sizing: border-box; border-radius: 50%;" width="100%" height="100%" class="image" src="../../public/Logo_small.png" >

      </div>

      </div>
    </div>

    <div class="navBar" id="navbar">
        <router-link id="postslink" class="navbarLinks" :to="{name:'Posts'}">Posts</router-link>
        <router-link  id="subscribersListlink" class="navbarLinks" :to="{name:'Subscribers'}">subscribers</router-link>
        <router-link v-show="isModerator() || isAdmin()" id="reportlink" class="navbarLinks" :to="{name:'Reports'}">view reports</router-link>
        <router-link  id="addmoderatorlink" class="navbarLinks" :to="{name:'Moderators'}">add moderator</router-link>
         <router-link  id="deletemoderatorlink" class="navbarLinks" :to="{name:'DeleteModerators'}">delete moderator</router-link>
    <!-- v-show="isAdmin()" -->
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
  padding-top:3%;
  color: white;
}
#Name{
  padding-left: 1%;
  display:inline;
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
  float:right;
}
.router-link-active{
  border-bottom: 3px solid deepSkyBlue;
}
.img{
  width:4%;
  height:50px;
  margin-top:-1%;
  margin-bottom:0%;
  margin-right:0%;
  margin-left:3%;
  float: left;
}
.image{

  vertical-align: middle;
}
.imagediv{
  margin-right:4%;
  margin-left:0%;
  /* display: inline; */
  width:100%;
  height:50px;
}
</style>

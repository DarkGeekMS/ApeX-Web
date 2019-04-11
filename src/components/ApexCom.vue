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
        <router-link  id="subscribersListlink" class="navbarLinks" :to="{name:'Subscribers'}">subscribers</router-link>
        <router-link  id="reportlink" class="navbarLinks" :to="{name:'Reports'}">view reports</router-link>
        <!-- v-show="isModerator()" -->
    </div>
</div>
    <SideBar class="sidebar" v-bind:apexComName="ApexComName"
    v-bind:rules="rules"
    v-bind:description="description"
    v-bind:moderators="moderators"
    v-bind:subscribersCount="subscribersCount"
    v-bind:subscribed="subscribed"
    v-bind:state="state"
    ></SideBar> 
    <div class="routerview">

    <router-view></router-view>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import {globalStore} from '../main.js'
import SideBar from './ApexComSideBar.vue'
import {AllServices} from '../MimicServices/AllServices.js'

export default {
  props:['ApexComName'],
  components:{
    'SideBar':SideBar
  },
  data () {
    return {
      // ApexComName:'Apex-com name',
      token:globalStore.token,
      userName:globalStore.Username,
      description:'',
      moderators:[],
      rules:[],
      subscribersCount: '',
      subscribers:[],
      subscribed:true,
      state:'subscribed',
    }
  },
  methods:{
    CheckUser:function(name)
    {
      if( name == this.userName){
      return true;
      }
    },
    CheckModerator:function(name)
    {
      if( name == this.userName){
      return true;
      }
    },
    isModerator:function(){
      var moderator = this.moderators.find(this.CheckModerator);
      if(moderator == this.userName){
          return true;
        }
      else{
          return false;
        }
    },
     getAbout(){
         var about= AllServices.getAbout(this.ApexComName);
         this.description=about.description;
         this.moderators=about.moderators;
         this.rules=about.rules;
         this.subscribersCount=about.subscribersCount;
   },
   getsubscribers(){
      this.subscribers= AllServices.getSubscribers();
      var subscribe = this.subscribers.find(this.CheckUser);
    if(subscribe == this.userName){
      this.subscribed = true;
      this.state='subscribed';
    }
    else{
      this.subscribed=false;
      this.state='subscribe';
    }
   },

  },
  mounted()
  {
  //   axios.get('http://localhost/about', {
  //   params: {
  //     ApexCom_id :this.ApexComName,
  //     Token:this.token
  //   }
  // })
  // .then(function (response) {
  //   this.rules = response.rules;
  //   this.subscribersCount = response.subscribersCount;
  //   this.description = response.description;
  //   this.moderators=response.moderators;

  //   var moderator = this.moderators.find(this.CheckModerator);
  //   if(moderator == this.userName){
  //     this.isModerator = true;
  //   }
  //   else{
  //     this.isModerator=false;
  //   }

  // })
  // .catch(function (error) {
  //   console.log(error);
  // });


  // axios.get('http://localhost/get_subscribers', {
  //   params: {
  //     ApexCom_id :this.ApexComName,
  //     token:this.token
  //   }
  // })
  // .then(function (response) {
  //   this.Subscribers=response.data;
  //   var subscribe = this.subscribers.find(this.CheckUser);
  //   if(subscribe == this.userName){
  //     this.subscribed = true;
  //     this.state='subscribed';
  //   }
  //   else{
  //     this.subscribed=false;
  //     this.state='subscribe';
  //   }
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  this.getAbout();
  this.getsubscribers();
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

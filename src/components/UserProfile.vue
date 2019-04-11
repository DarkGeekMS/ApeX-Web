<template id="profiledesign">
<div id='userprofile'>
    <div id='firstnavbar'>
        <a class="navbarlinks" href="#">posts</a>
        <a v-show="notGuest()" class="navbarlinks" href="#">saved</a>
        <a v-show="notGuest()" class="navbarlinks" href="#">hidden</a>
        <a v-show="isModerator" class="navbarlinks" href="#">report</a>

    </div> 
        <SideBar 
        v-bind:userName="userName"
        v-bind:karmaCount="karmaCount"
        v-bind:picture="picture"
                class="sidebar" ></SideBar>
</div>
</template>

<script>
import axios from 'axios'
import {globalStore} from '../main.js'
import SideBar from './UserProfileSideBar.vue'
import {AllServices} from '../MimicServices/AllServices.js'

export default {
  props:['userName'],
    components:{
    'SideBar':SideBar
  },
  data () {
    return {
      token:globalStore.token,
      loggeduser:globalStore.Username,
      karmaCount:1,
      picture:'https://images.app.goo.gl/BzmBcoc4giGqgSFV7.jpg',
      personalPosts:[],
      savedPosts:[],
      hiddenPosts:[],
      reports:[],
    }
  },
  methods:
  {
    notGuest:function(){
      if(this.userName != this.loggeduser){
        return false;
      }
      else{
        return true;
      }
    },
    getUserProfile:function(){
      var data= AllServices.getUserInfo();
      this.karmaCount = data.karma;
      this.picture = data.picture;
      //this.userName = data.userName;
      this.savedPosts = data.saved;
      this.hiddenPosts = data.hidden;
      this.personalPosts = data.personalPosts;
      this.reports = data.reports;
   },
   getUserData:function(){
      var data= AllServices.getUserInfoById(this.userName);
      this.karmaCount = data.karma;
      this.picture = data.picture;
     // this.userName = data.userName;
      this.personalPosts = data.personalPosts;

      // var img =new Image();
      // var reader = new filereader();
      // var vm = this;
      // reader.onload = function(e){
      // vm.Image = e.target.result;
      //}


   },

  },
  mounted()
  {
    if(this.userName == globalStore.Username){
      this.getUserProfile();
    }
    else{
      this.getUserData();
    }
  }
}
</script>

<style scoped>
#firstnavbar{
    background-color: #eee;
    width:100%;
    height: 60px;
    text-transform: uppercase; 
    padding-top:2%;
    padding-bottom: 0%;
    margin-top: 3%;
    margin-bottom: 0%;
    margin-left: 0%;
}
.navbarlinks{
    padding-top: 0%;
    padding-bottom: 0%;
    padding-right: 1%;
    padding-left: 2%;
    text-decoration: none;
    color: black;
    margin-top: 0%;
    margin-bottom: 0%;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    
}
.navbarlinks:hover{
    color:deepskyblue;
}
#sidebar{
    width:25%;
    height: auto;
    margin:8%;
    margin-left: 3%;
    margin-right: 6%;
    background-color:white;
    float:right;
}
</style>

<template id="profiledesign">
<div id='userprofile'>
    <div id='firstnavbar'>
        <a id="posttab" class="navbarlinks" href="#">posts</a>
        <a id="savedtab" v-show="notGuest()" class="navbarlinks" href="#">saved</a>
        <a id="hiddentab" v-show="notGuest()" class="navbarlinks" href="#">hidden</a>
        <a id="reporttab" v-show="isModerator() && notGuest()" class="navbarlinks" href="#">report</a>

    </div> 
        <SideBar 
        v-bind:userName="userName"
        v-bind:karmaCount="karmaCount"
        v-bind:image="image"
        v-bind:cakeDay="cakeDay"
        v-bind:blockList ="blockList"
        class="sidebar" ></SideBar>
</div>
</template>

<script>
import axios from 'axios'
import SideBar from './UserProfileSideBar.vue'
import {AllServices} from '../MimicServices/AllServices.js'

/**
 * @vue-data {JWT} [token='']  user Token
 * @vue-data {string} [loggeduser='']  name of logged in user
 * @vue-data {boolean} [loggedIn='']  check if user is logged in
 * @vue-data {number} karmaCount - Number of karma
 * @vue-data {string} [image]  Url of user profile image 
 * @vue-data {array} personalPosts - user personal posts
 * @vue-data  {array} savedPosts - user saved posts
 * @vue-data  {array} hiddenPosts - user hidden posts
 * @vue-data  {array} reports - reports of communities that the user is moderator of
 */

export default {
  props:['userName'],
    components:{
    'SideBar':SideBar
  },
  data () {
    return {
      //token:this.$localStorage.get('token'),
      //loggeduser:this.$localStorage.get('userName'),
      //loggedIn:this.$localStorage.get('login'),
      karmaCount:1,
      image:'',
      personalPosts:[],
      savedPosts:[],
      hiddenPosts:[],
      reports:[],
      cakeDay:'',
      blockList:[],
    }
  },
  methods:
  {
    /**
     *check if user is moderator 
    */
    isModerator:function()
      {
        if(this.loggedIn){
        var data= AllServices.userType().then((data) =>{
        if(data.type ==2){
          return true;
          }
        else{
          return false;
          }
        })
        }
      },
    /**
    * check if the user requesting his profile or other user profile 
    */
    notGuest:function(){
      if(this.loggedIn){
      if(this.userName != this.loggeduser){
        return false;
      }
      else{
        return true;
      }
      }else{
        return false;
      }
    },
    /**
    * get user profile info 
    */
    getUserProfile:function(){
      var data= AllServices.getUserInfo().then((data) =>{
      this.karmaCount = data.karma;
      this.image = data.image;
      //this.userName = data.userName;
      this.savedPosts = data.saved;
      this.hiddenPosts = data.hidden;
      this.personalPosts = data.personalPosts;
      this.reports = data.reports;
      this.cakeDay = data.cakeDay;
      this.blockList = data.blockList;
      })
   },
    /**
    * get user account data for another user
    */
   getUserData:function(){
      var data= AllServices.getUserInfoById(this.userName).then((data) =>{
      this.karmaCount = data.karma;
      this.image = data.image;
     // this.userName = data.userName;
      this.personalPosts = data.personalPosts;
      this.cakeDay = data.cakeDay;
      })
   },
   /**
    * get user account data for a guset
    */
   getUserDataForGuest:function(){
     var data= AllServices.getUserInfoByIdforGuest(this.userName).then((data) =>{
      this.karmaCount = data.karma;
      this.image = data.image;
     // this.userName = data.userName;
      this.personalPosts = data.personalPosts;
      this.cakeDay = data.cakeDay;
     })
   }

  },
  mounted()
  {
    if(this.loggedIn){
    if(this.userName == this.loggeduser){
      this.getUserProfile();
    }
    else{
      this.getUserData();
    }
    }
    else{
      this.getUserDataForGuest();
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
    float:right;
}
</style>

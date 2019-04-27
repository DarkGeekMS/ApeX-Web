<template id="profiledesign">
<div id='userprofile'>
    <div id='firstnavbar'>
      
        <a style="font-size: 16px;"  id="posttab" class="navbarlinks" href="#">posts</a>
        <a style="font-size: 16px;"  id="savedtab" v-show="notGuest()" class="navbarlinks" href="#">saved</a>
        <a style="font-size: 16px;"  id="hiddentab" v-show="notGuest()" class="navbarlinks" href="#">hidden</a>
        <!-- <a style="font-size: 16px;"  id="reporttab" v-show="isModerator() && notGuest()" class="navbarlinks" href="#">report</a> -->
        <router-link style="font-size: 16px;" v-show="isModerator() && notGuest()" id="reportlink" class="navbarlinks" :to="{name:'Report'}">view reports</router-link>
        <router-link style="font-size: 16px;" v-show="notGuest()" id="reportlink" class="navbarlinks" :to="{name:'blockLlist'}">block list</router-link>
    </div>
    <div class="sort">
    <Sort style="padding-top:10px"></Sort>
  </div>
        <SideBar
        v-bind:settings="true"
        v-bind:userName="userName"
        class="sidebar" ></SideBar>
    <router-view class="routerview"></router-view>
</div>
</template>

<script>
import SideBar from './UserProfileSideBar.vue'
import Sort from './Sort.vue'
import {AllServices} from '../MimicServices/AllServices.js'
import $ from'jquery/dist/jquery.min.js'


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
    'SideBar':SideBar,
    'Sort':Sort
  },
  data () {
    return {
      token:this.$localStorage.get('token'),
      loggeduser:this.$localStorage.get('userName'),
      loggedIn:this.$localStorage.get('login'),
      karmaCount:1,
      image:'',
      personalPosts:[],
      savedPosts:[],
      hiddenPosts:[],
      reports:[],
      cakeDay:'',
      // blockList:[],
    //   blockList:[
    //       {userName:'user1'},
    // {userName:'user2'},
    // {userName:'user3'},
    // {userName:'user4'}
    //     ],
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
        AllServices.userType().then((data) =>{
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
      AllServices.getUserInfo().then((data) =>{
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
      AllServices.getUserInfoById(this.userName).then((data) =>{

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
     AllServices.getUserInfoByIdforGuest(this.userName).then((data) =>{
       alert(this.userName+'inside');
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
    $('#selectted').text('u/' + this.$localStorage.get('userName') );
    var remclass = $('#classed').prop('class');
    $('#classed').removeClass(remclass);
    $('#classed').addClass("glyphicon glyphicon-user");
  }
}
</script>

<style scoped>
* {
  /* box-sizing: border-box; */

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
#userprofile{
  margin-top:50px;
}
#firstnavbar{
    width:100%;
    /* height: 60px; */
    text-transform: uppercase;
    background-color: white;
    padding-top:18px;
    padding-bottom: 10px;
    margin-bottom: 0%;
    margin-left: 0%;
}
.navbarlinks{
    padding-top: 0%;
    padding-bottom: 10px;
    margin-right: 3%;
    margin-left: 3%;
    text-decoration: none;
    color: black;
    font-weight: 500;
}
.navbarlinks:hover{
    color:deepskyblue;
}
.sort{
  margin-top:-57px;
  /* margin-right:0%; */
  /* height:30px; */
}
.sidebar{
  margin-top:4%;
    /* width:23%;
    height: auto;
    margin:8%;
    margin-left: 3%;
    margin-right: 4%;
    float:right; */
}
.routerview{
  margin-top: 0%;
  margin-bottom: 0%;
  margin-left: 4%;
  border-radius:20%;
}
.router-link-active{
  border-bottom: 3px solid deepSkyBlue;
  color: deepskyblue;
}
</style>

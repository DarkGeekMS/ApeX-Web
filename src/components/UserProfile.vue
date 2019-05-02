<template id="profiledesign" v-if="this.userName">
<div id='userprofile'>
    <div id='firstnavbar'>

        <a style="font-size: 16px;"  id="posttab" class="navbarlinks" href="#">posts</a>
        <a style="font-size: 16px;"  id="savedtab" v-show="notGuest" class="navbarlinks" href="#">saved</a>
        <a style="font-size: 16px;"  id="hiddentab" v-show="notGuest" class="navbarlinks" href="#">hidden</a>
        <router-link style="font-size: 16px;" v-show="isModerator && notGuest" id="reportlink" class="navbarlinks" :to="{name:'Report'}">view reports</router-link>
        <router-link style="font-size: 16px;" v-show="notGuest" id="reportlink" class="navbarlinks" :to="{name:'blockLlist'}">block list</router-link>
    </div>
        <SideBar
        v-bind:settings="false"
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
 * @vue-data {string} [loggeduser='']  name of logged in user
 * @vue-data {boolean} loggedIn  check if user is logged in
 * @vue-prop  {string} userName - user name
 * @vue-data  {boolean} [isModerator=false] - boolean indicates if the user is moderator or not
 * @vue-data  {boolean} [notGuest=false] - boolean indicates if the user is in his profile or other user profile
 */

export default {
  props:['userName'],
    components:{
    'SideBar':SideBar,
  },
  data () {
    return {
      loggeduser:this.$localStorage.get('userName'),
      loggedIn:this.$localStorage.get('login'),
      isModerator:false,
      notGuest:false,
    }
  },
  methods:
  {
    /**
     *check if user is moderator
    */
    isModeratorFunction:function()
      {
        AllServices.userType().then((data) =>{
        if(data.user.type ==2){
          this.isModerator= true;
          }
        else{
          this.isModerator= false;
          }
        })
      },
    /**
    * check if the user requesting his profile or other user profile
    */
    notGuestFunction:function(){
      if(this.userName != this.loggeduser){
        this.notGuest= false;
      }
      else{
        this.notGuest= true;
      }
    },
    /**
    * get user profile info
    */
    getUserProfile:function(){
      AllServices.getUserInfo().then((data) =>{
      this.savedPosts = data.posts.saved_posts;
      this.hiddenPosts = data.hidden_posts;
      this.personalPosts = data.posts;
      })
   },
    /**
    * get user account data for another user
    */
   getUserData:function(){
      AllServices.getUserInfoById(this.userName).then((data) =>{
      this.karmaCount = data.userData.karma;
      this.image = data.userData.avatar;
      this.id = data.userData.id;
      this.fullName = data.userData.fullname;
      this.personalPosts = data.posts;
      })
   },
   /**
    * get user account data for a guset
    */
   getUserDataForGuest:function(){
     AllServices.getUserInfoByIdforGuest(this.userName).then((data) =>{
      this.karmaCount = data.userData.karma;
      this.image = data.userData.avatar;
      this.id = data.userData.id;
      this.fullName = data.userData.fullname;
      this.personalPosts = data.posts;
     })
   }

  },
  mounted()
  {
    if(this.loggedIn){
    this.notGuestFunction();
    this.isModeratorFunction();
    }
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
#userprofile{
  margin-top:50px;
}
#firstnavbar{
    width:100%;
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
.sidebar{
  margin-top:4%;
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

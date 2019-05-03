<template id="ApexComDesign">
<div id="all">
    <div id="Apexcom" class="apexcom" >
      <div class="apexcomName" id="apexcomName">
      <div class="imagediv">
        <h1 style=" font-size: 28px; display:inline;" id="Name">{{apexComName}}</h1>
        <div class="img">
          <img style="box-sizing: border-box; border-radius: 50%;" class="image" :src="image" >
        </div>
      </div>
    </div>

      <div class="navBar" id="navbar">
      <router-link id="postslink" class="navbarLinks" :to="{name:'Posts'}">Posts</router-link>
      <router-link  v-show="isModerator" id="subscribersListlink" class="navbarLinks" :to="{name:'Subscribers'}">subscribers</router-link>
      <router-link  v-show="isModerator" id="reportlink" class="navbarLinks" :to="{name:'Reports'}">view reports</router-link>
      <router-link v-show="isAdmin" id="addmoderatorlink" class="navbarLinks"  :to="{name:'AddModerators'}">add moderator</router-link>

    </div>
      </div>
  <SideBar class="sidebar" v-bind:apexComId="apexComId"></SideBar>
    <router-view class="routerview"></router-view>
</div>
</template>

<script>
import SideBar from './ApexComSideBar.vue'
import {AllServices} from '../MimicServices/AllServices.js'
import { EventBus } from '../main.js'
/**
 * @vue-prop  {string} apexComId - community Id
 * @vue-data {JWT} [token='']  user Token
 * @vue-data {string} [userName='']  user name
 * @vue-data {array} moderators - moderators for certain community
 * @vue-data  {string} apexComName - community name
 * @vue-data  {string} image - community image
 * @vue-data  {boolean} [isAdmin=false] - boolean indicates if the user is admin or not
 * @vue-data  {boolean} [isModerator=false] - boolean indicates if the user is moderator or not
 */

export default {
  props:['apexComId'],
  components:{
    'SideBar':SideBar,
  },
  data () {
    return {
      token:this.$localStorage.get('token'),
      userName:this.$localStorage.get('userName'),
      loggedIn:this.$localStorage.get('login'),
      apexComName:'',
      moderators:[],
      isModerator:false,
      isAdmin:false,
      image:'',
    }
  },
  methods:{
    /**
      *get the details of certain community for user
      */
     getAbout(){
         AllServices.getAbout(this.apexComId).then((about) =>{
         this.apexComName=about.name;
         this.moderators=about.moderators;
         this.image='http://35.232.3.8'+about.avatar;
         console.log(this.moderators);
         this.isModeratorFunction();
         })
   },
   /**
      *get the details of certain community for guest
      */
   getAboutGuest(){
         AllServices.getAboutGuest(this.apexComId).then((about) =>{
         console.log(about);
         this.apexComName=about.name;
         this.moderators=about.moderators;
         this.image='http://35.232.3.8'+about.avatar;
         });
   },
    /**
    * loop on moderators to check if user is moderator for this community
    */
    isModeratorFunction:function(){
      for (let i = 0; i < this.moderators.length; i++){
        if(this.moderators[i].username===this.userName){
           this.isModerator= true;
           return;
        }
         }
         this.isModerator= false;
    },
    /**
      *check if user is an admin
      */
      isAdminFunction:function()
      {
        AllServices.userType().then((data) =>{
        if(data.user.type ==3){
          this.isAdmin= true;
          }
        else{
          this.isAdmin= false;
        }
        })
      },
  },
  mounted()
  {
  if(this.loggedIn){
   this.getAbout();
   this.isAdminFunction();

   }
   else{
     this.getAboutGuest();
   }
  },
  beforeRouteUpdate (to, from, next) {
    // this.getContent(to.params.uid);
    if(to.params.apexComId !==from.params.apexComId){
      if(this.loggedIn){
          this.getAbout();
          this.isAdminFunction();
   }
   else{
     this.getAboutGuest();
   }
    }
    console.log('route updated');
    next();
  }
}
</script>

<style scoped>
#all{
  margin-top: 50px;
  height:100%;
}
.apexcomName{
  background-color: deepSkyBlue;
  padding-top:38px;
  color: white;
  box-sizing: border-box;
}
/* .navbarbutton{
  padding-bottom: 1%;
  margin-left: 3%;
  display: inline-block;
  background: none;
  border-color: none;
  border-width: 0px;
  border-bottom: 3px solid;
} */
#Name{
  padding-left: 1%;
  padding-top: 1%;
  display:inline;
}
.transparent{
  padding-top: 20px;
}
.sort{
  margin-top:-58px;
}
.navBar{
  background-color: rgb(219, 240, 255);
  margin-top: 0%;
  margin-bottom:0%;
  padding-top:20px;
  padding-bottom:10px;
  padding-left: 7%;
  box-sizing: border-box;
}
.navbarLinks{
  color: deepSkyBlue;
  padding-top: 0%;
  padding-bottom: 9px;
  margin-right: 0%;
  margin-left: 3%;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
}
.routerview{
  margin-top: 4%;
  margin-bottom: 0%;
  margin-left: 4%;
  border-radius:20%;
  width:60%;

}
.sidebar{
  margin-top:4%;
}
.router-link-active{
  border-bottom: 3px solid deepSkyBlue;
}
img{
  width:100%;
  height:100%;
}
.imagediv{
  margin-top:0%;
  margin-bottom:25px;
  width:100%;
  display:inline-block;
}
.img{
  width: 50px;
  display:inline;
  margin-top:-0.5%;
  margin-bottom:0%;
  margin-right:0%;
  margin-left:3%;
  float: left;
}
@media(max-width:768px){
  .img{
    display:none
  }
}
@media(max-width:768px){
  .img{
    display:none
  }
}
@media(max-width:700px){
  .router-link-active{
  border-bottom: 0px;
}
}

</style>

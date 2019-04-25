<template id="ApexComDesign">
<div id="all">
  <div class="Apexcom" id="Apexcom">
    <div class="apexcomName" id="apexcomName">
      <div class="imagediv">
        <h1 style=" font-size: 28px; display:inline;" id="Name">{{apexComName}}</h1>
        <div class="img">
          <img style="box-sizing: border-box; border-radius: 50%;" class="image" :src="image" > 
        </div>
      </div>
    </div>
    <div class="navBar" id="navbar">
      <router-link  id="postslink" class="navbarLinks" :to="{name:'Posts'}">Posts</router-link>
      <router-link  v-show="isModerator() || isAdmin()" id="subscribersListlink" class="navbarLinks" :to="{name:'Subscribers'}">subscribers</router-link>
      <router-link  v-show="isModerator() || isAdmin()" id="reportlink" class="navbarLinks" :to="{name:'Reports'}">view reports</router-link>
      <!-- <router-link id="reportlink" class="navbarLinks" :to="{name:'Reports'}">view reports</router-link> -->
      <!-- <router-link  id="addmoderatorlink" class="navbarLinks" :to="{name:'AddModerators'}">add moderator</router-link> -->
      <router-link v-show="isAdmin()"  id="addmoderatorlink" class="navbarLinks" :to="{name:'Moderators'}">add moderator</router-link>
      <!-- <router-link  id="deletemoderatorlink" class="navbarLinks" :to="{name:'DeleteModerators'}">delete moderator</router-link> -->
      <!-- <router-link v-show="isAdmin()"  id="deletemoderatorlink" class="navbarLinks" :to="{name:'DeleteModerators'}">delete moderator</router-link> -->
    </div>
      </div>
  <div class="sort">
    <Sort ></Sort>
  </div>
  <SideBar class="sidebar" v-bind:apexComName="apexComName"></SideBar>
    <router-view class="routerview"></router-view> 
</div>
</template>

<script>
import SideBar from './ApexComSideBar.vue'
import {AllServices} from '../MimicServices/AllServices.js'
import Sort from './Sort.vue'

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
    'SideBar':SideBar,
    'Sort':Sort
  },
  data () {
    return {
      token:this.$localStorage.get('token'),
      userName:this.$localStorage.get('userName'),
      //userName:'moderator1',
      // description:'',
      moderators:[],
      // rules:[],
      // subscribersCount: 0,
      image:''
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
        //  this.description=about.description;
         this.moderators=about.moderators;
        //  this.rules=about.rules;
        //  this.subscribersCount=about.subscribersCount;
         this.image=about.image;
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
  margin-top: 50px;
  height:60%;
}
.main{
  /* height:100%; */
  /* position: relative; */
  /* max-height:3%; */
  /* height:auto; */
}
.Apexcom{
  /* max-height:3%; */
  /* height:100%; */
  
  /* min-height:108%;
  max-height:60%; */
  /* position:relative; */
  /* width:100%; */
  /* height: 50%; */
  /* position:relative; */
}
  /* margin-top:3.7%;
  /* margin-bottom:2%; */
  /* height: auto; */
/* }  */
.apexcomName{
  background-color: deepSkyBlue;
  /* width:auto; */
  /* width:100%; */
  /* margin-top: 50px; */
  padding-top:38px;
  color: white;
  box-sizing: border-box;
  /* height: auto; */
  /* max-height:65%; */
}
#Name{
  padding-left: 1%;
  padding-top: 1%;
  display:inline;
}
.sort{
  margin-top:-58px;
  /* margin-right:0%; */
  /* height:30px; */
}
.navBar{
  background-color: rgb(219, 240, 255);
  /* max-height:35%; */
  /* width:100%; */
  /* width:100%; */
  margin-top: 0%;
  /* height:auto; */
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
  /* width:56%; */
  margin-top: 4%;
  margin-bottom: 0%;
  margin-left: 4%;
  border-radius:20%;
  width:60%;
  /* padding: 2%; */
  /* float:left; */
  
}
.sidebar{
  /* margin-top:4%; */
  /* margin-right: 4%; */
  /* width:23%; */
  /* height: auto;
  margin-top:4%;
  margin-bottom: 0%;
  margin-left: 3%;
  margin-right: 4%;
  float:right; */
}
.router-link-active{
  border-bottom: 3px solid deepSkyBlue;
}
img{
  width:100%;
  height:100%;
  /* height:4; */
  /* display: flex; */
  /* margin-top:0%;
  margin-bottom:0%;
  margin-right:0%;
  margin-left:3%; */
  /* float: left; */
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

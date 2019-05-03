<template id="profiledesign">
<div id='userprofile'>
    <div id='firstnavbar'>

        <router-link  style="font-size: 16px;"  id="posttab" class="navbarlinks" :to="{ name: 'UserPosts'}">posts</router-link>
        <router-link  style="font-size: 16px;"  id="savedtab" v-show="notGuest" class="navbarlinks" :to="{ name: 'Saved'}" >saved</router-link>
        <router-link  style="font-size: 16px;"  id="hidden tab" v-show="notGuest" class="navbarlinks" :to="{ name: 'Hidden'}">hidden</router-link>
        <router-link style="font-size: 16px;" v-show="notGuest" id="blocklistab" class="navbarlinks" :to="{name:'blockLlist'}">block list</router-link>
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
import $ from'jquery/dist/jquery.min.js'


/**
 * @vue-data {string} [loggeduser='']  name of logged in user
 * @vue-data {boolean} loggedIn  check if user is logged in
 * @vue-prop  {string} userName - user name
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
      notGuest:false,
    }
  },
  methods:
  {
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
  },
  mounted()
  {
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

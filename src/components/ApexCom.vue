<template id="ApexComDesign">
  <div class="Apexcom" id="Apexcom">
    <h1 id="apexcomName">{{ApexComName}}</h1>

    <div class="navBar" id="navbar">
        <router-link id="postslink" class="navbarLinks" to="/ApexCom/ApexComName">Posts</router-link>
        <router-link  id="subscribersListlink" class="navbarLinks" to="/ApexCom/subscribersList">subscribers</router-link>
    </div>

      <SideBar v-bind:apexComName="ApexComName"></SideBar> 
    <div class="routerview">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {globalStore} from '../main.js'
import SideBar from './ApexComSideBar.vue'

export default {
  components:{
    'SideBar':SideBar
  },
  data () {
    return {
      ApexComName:'Apex-com name',
    }
  },
}
</script>

<style scoped>
.Apexcom{
  background-color: deepSkyBlue;
  width:auto;
  height:65px;
  margin:50px 0px;
  padding:15px;
}
#apexcomName{
  margin-top:0%;
}
.navBar{
  background-color: #eee;
  width:auto;
  height:auto;
  margin:0px -14px;
  padding:15px;
}
.navbarLinks{
  color: deepSkyBlue;
  padding: 14px 16px;
  text-decoration: none;
  margin:7px;
}
.navbarLinks:hover {
  background-color: white;
  border-radius: 8px;
}
.AccountLink{
  text-decoration: none;
}
.router-link-active{
  background-color:white;
  border-radius: 8px;
}
.routerview{
  width:60%;
  margin: 8% 0%;
  border-radius:8px;
  padding: 2%;
  background-color: #eee;
  float:left;
}
</style>

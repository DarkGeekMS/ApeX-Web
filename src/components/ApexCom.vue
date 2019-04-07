<template id="ApexComDesign">
<div id="all">
  <div class="Apexcom" id="Apexcom">
    <div class="apexcomName" id="apexcomName">
      <h1 id="Name">{{ApexComName}}</h1>
    </div>
  
    <div class="navBar" id="navbar">
        <router-link id="postslink" class="navbarLinks" to="/ApexCom/ApexComName">Posts</router-link>
        <router-link  id="subscribersListlink" class="navbarLinks" to="/ApexCom/subscribersList">subscribers</router-link>
    </div>
</div>
    <SideBar class="sidebar" v-bind:apexComName="ApexComName"></SideBar> 
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
  width:auto;
  height:65px;
  margin:4% 0%;
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

</style>

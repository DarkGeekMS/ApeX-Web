<template id="profiledesign">
<div id='userprofile'>
    <div id='firstnavbar'>
        <a class="navbarlinks" href="#">posts</a>
        <a class="navbarlinks" href="#">saved</a>
        <a class="navbarlinks" href="#">hidden</a>
    </div> 
        <SideBar class="sidebar" ></SideBar>
</div>
</template>

<script>
import axios from 'axios'
import {globalStore} from '../main.js'

import SideBar from './UserProfileSideBar.vue'

export default {
    components:{
    'SideBar':SideBar
  },
  data () {
    return {
      token:globalStore.token,
    }
  },
  methods:
  {
  },
  mounted()
  {
  }
}
</script>

<style scoped>
#firstnavbar{
    width:100%;
    height: 50px;
    text-transform: uppercase;
    padding-top:2%;
    padding-bottom: 0%;
    background-color:white;
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

.navbarlinks:active{
   border-bottom: 3px solid deepSkyBlue;
}

</style>

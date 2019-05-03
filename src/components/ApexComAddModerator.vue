<template id="addmoderatorpagedesign">
<div >
  <div class="header">
       <h1>  {{ query }} </h1>
       <br/> 
       <p> Search results </p>
    </div>
  <div id="main" v-for='(user,index) in users' :key="'A'+index" v-show="exist">
  <router-link  id="subDiv" :to="{ name: 'UserProfile', params: {userName:user.username}}"> 
      <div id="sub1">
         <img width="45px" :src="'http://35.232.3.8'+user.avatar" />
         <a class="name"> {{user.username}} <br/> <span class="memb"> {{user.karma}} karma </span> </a>       
       </div> 
       <br/><br/>
       </router-link>
       <button v-bind:class="{button1:(isModerator(user.username)),button:!(isModerator(user.username))}" type="button" v-on:click="addModerator(user.id)">{{state}}</button>
  </div> 
    <div id="subDiv" style="text-align:center;font-size: 17px;font-weight: 600; " v-show="!exist"> {{error}} ''{{query}}'' </div>
</div>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'
import { constants } from 'crypto';
import { EventBus } from '../main.js'
import swal from 'sweetalert'

/**
 * @vue-data {string} state bytton state delete or add 
 * @vue-data {boolean} [exist=true] if there is matching
 * @vue-data {string} [error=''] if there is no matching
 * @vue-prop  {string} apexComId - community Id
 * @vue-data {string} state bytton state delete or add
 * @vue-prop  {string} query - stores the string that user wants to search for
*/
export default {
props:['apexComId','query'],
  data () {
    return {
      exist:true,
      error:'',
      users:[],
      moderators:[],
      state:'add moderator',
    }
  },
  methods:
  {
    /**
      *used by admin to add moderator
      */
      addModerator:function(userId){
          AllServices.addOrDeleteModerator(userId,this.apexComId).then((data) =>{
          if(data){ 
            swal('Done :)');
            this. getAbout();
            EventBus.$emit('changeModeratot',true);
          }
          else{
            swal('sorry something went wrong');
              }
        })
      },
      isModerator:function(name){
      for (let i = 0; i < this.moderators.length; i++){
        if(this.moderators[i].username==name){
        this.state='delete'
           return true; 
        }
         }
         this.state='add moderator'
         return false;

      },
      /**
      *get the details of certain community for user
      */
     getAbout(){
         AllServices.getAbout(this.apexComId).then((about) =>{
         this.moderators=about.moderators;
         })
     },
      /**
      *send the query to be searched for
      */
      searchUser:function(searchVal){
        AllServices.searchU(searchVal).then((data) =>{
          if(data.users.length == 0)
          {
            this.exist = false,
            this.error = 'Sorry, there were no users results for'
          }
          else{
            this.users = data.users,
            this.exist = true
          }
        })

      }
  },
  mounted()
  {
    this.searchUser(this.query);
    this.getAbout();
  },
  beforeRouteUpdate (to, from, next) {
    this.searchUser(to.params.query);
    this.getAbout();
    next();
  }
}
</script>

<style scoped>
*{
  display: inline-block;
  box-sizing: border-box; 
  text-decoration: none;
  margin:0%;
}
.button{
  width:30%;
  margin-top:0%;
  margin-left:0%;
  margin-right: 2%;
  margin-bottom: 0%;
  color:white;
  background-color:skyblue;
  padding: 1%;
  float:right;
  border-width: 3px;
  border-radius: 20%;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor:pointer;
  border-color: skyblue;
  border-style: solid;
  text-transform: uppercase;
  height:auto;
  overflow: hidden;
}
.button1{
  width:30%;
  margin-top:0%;
  margin-left:0%;
  margin-right: 2%;
  margin-bottom: 0%;
  color:deepskyblue;
  background-color:white;
  padding: 1%;
  float:right;
  border-width: 3px;
  border-radius: 20%;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor:pointer;
  border-color: skyblue;
  border-style: solid;
  text-transform: uppercase;
  height:auto;
  overflow: hidden;
}
.button1:hover {opacity: 0.7}
.button:hover {opacity: 0.7}
#subDiv{
  width:94%;
  height:100%;
  margin: 0% 6%;
  padding:10px ;
  overflow: hidden
}
#main{
    margin:2%;
    width: 90%;
    height:100%;
    background-color: white;
    border-radius:15px;
}
#sub1{
  width:35%;
  height:100%;
  float:left;
} 
img{
  border-radius:50%; 
  margin-top: -17px;
}
.name{
  font-size: 14px;
  margin-left:7%;
  text-decoration: none;
}
.memb{
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: rgb(135, 138, 140);
}
.header{
  width:100%;
  padding-left:2%;
  margin-top: 43px;
}
.header h1{
    font-size: 22px;
    font-weight: 700;
}
.header p{
  color:#999;
}
@media(max-width:1250px){
  #main{
    width:61%;
  }
}

@media(max-width:945px){
  #main{
    width:95%;
  }
} 
@media(max-width:529px){
  div #sub1{
    width: 40%
  }
}  
@media(max-width:390px){
  div #sub1{
    width: 90%
  }
}  
@media(max-width:204px){
  div #sub1{
    display: none
  }
}
</style>

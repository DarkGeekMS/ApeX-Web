<template id="addmoderatorpagedesign">
<div>

<a href="#" id="subDiv" v-show="exist" v-for='user in users' :key="user.id" > 
      <div id="sub1">
         <img width="20%" :src="'../../public/'+user.avatar"/>
         <a style="font-size: 1.2vw;"  class="name"> {{user.name}} </a>
       </br>
         <div class="memb"> {{user.karma}} karma </div>
       </div> 
       <div id="sub2">
         <button class="button" style="display:inline-block;" type="button" v-on:click="addModerator(user.userName)"> add moderator</button>  
       </div>
       
       </br></br>
    </a>
    <div id="subDiv" style="text-align:center;font-size: 17px;font-weight: 600; " v-show="!exist"> {{error}} ''{{this.$localStorage.get('search')}}'' 
    </div>

</div>
</template>

<script>
import axios from 'axios'
import ApexComDeleteModerators from './ApexComDeleteModerators.vue'
import {AllServices} from '../MimicServices/AllServices.js'

export default {
props:['apexComName'],
  data () {  
    return {
      exist:true,
      error:'',
      users:[]
    }
  },
  methods:
  {
      addModerator:function(userName){
          console.log(this.apexComName);
          var data = AllServices.addOrDeleteModerator(userName,this.apexComName);
          if(data){
          }
          else{
              console.log(error);
              }
      },
  },
  mounted()
  {
    var result = AllServices.searchApexAndUser();
    if( typeof result === 'string')
    {
        this.exist = false,
        this.error = result
    }
    else{
      this.users = result[1]

    }
    
  }
}
</script>

<style scoped>
.button{
  width:30%;
  margin-top:0%;
  margin-left:0%;
  margin-right: 2%; 
  margin-bottom: 0%;
  color:white;
  background-color:skyblue;
  padding: 0%;
  float:right;
  border-width: 3px;
  border-radius: 20%;
  font-size: 1.2vw;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor:pointer;
  border-color: skyblue;
  border-style: solid;
  text-transform: uppercase;
  height:auto;
}
.button:hover {opacity: 0.7}

img{
  border-radius:50%; 

}
.name{
  color:black;
  margin-left:2%;
  text-decoration: none;
}
.memb{
    font-size: 1vw;
    font-weight: 400;
    color: rgb(135, 138, 140);
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: 25%;
}
#subDiv{
  display: block;
  width:100%;
  height:100%;
  text-decoration: none;
  box-sizing: border-box;
  margin: 3% auto;
  padding-left:1% ;

}
#sub1{
  width:20%;
  height:100%;
  float:left;
}
#sub2{
  width:80%;
  height:100%;
  float:right;
}

</style>

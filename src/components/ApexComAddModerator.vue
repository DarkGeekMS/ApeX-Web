<template id="addmoderatorpagedesign">
<div >
  <div class="header">
       <h1>  {{ searchValue }} </h1>
       <br/> 
       <p> Search results </p>
    </div>
  <div id="main">
  <router-link id="subDiv" v-show="exist" v-for='(user,index) in users' :key="'A'+index" :to="{ name: 'UserProfile', params: {userName:user.name}}"> 
      <div id="sub1">
         <img width="45px" :src=user.avatar />
         <a class="name"> {{user.name}} <br/> <span class="memb"> {{user.karma}} karma </span> </a>       
       </div> 
       <br/><br/>
       <button class="button" type="button" v-on:click="addModerator(user.id)">add moderator</button>
    </router-link>
    
    <div id="subDiv" style="text-align:center;font-size: 17px;font-weight: 600; " v-show="!exist"> {{error}} ''{{this.$localStorage.get('searchModerator')}}'' </div>
  </div>
</div>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'
/**
 * @vue-data {string} [users=""] users that reflect with search value  
 * @vue-data {boolean} [exist=true] if there is matching
 * @vue-data {string} [error=''] if there is no matching
*/
export default {
props:['apexComId'],
  data () {
    return {
      exist:true,
      error:'',
      users:[],
      searchValue:''
    }
  },
  methods:
  {
      addModerator:function(userName){
          console.log(this.apexComId);
          var data = AllServices.addOrDeleteModerator(userName,this.apexComId);
          if(data){
          }
          else{
              console.log(error);
              }
      },
  },
  beforeUpdate()
  {
    console.log('heyup');
    
    AllServices.searchU().then((data) =>{
          if( typeof data === 'string')
          {
            this.exist = false,
            this.error = data
          }
          else{
            this.users = data[2],
            this.exist = true
          }
        })
      console.log(this.exist);
      console.log(this.users);
      console.log(this.searchValue);    
  },
  created(){
    console.log('hey');
    setInterval(() => {
        this.searchValue = this.$localStorage.get('searchModerator');
    }, 1000)

  },
  
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
.button:hover {opacity: 0.7}
#subDiv{
  display: block;
  width:94%;
  height:100%;
  margin: 0% 6%;
  padding:10px ;
  overflow: hidden
}
#main{
    margin:2%;
    width: 70%;
    height:100%;
    background-color: white;
    border-radius:15px;
    display: inline;
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
  background-color: white;
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

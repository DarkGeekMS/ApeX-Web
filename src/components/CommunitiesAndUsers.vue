<template>
  <div id="mainDiv" >
    <router-link  id="subDiv" v-show="exist" v-for='(apex,index) in apexs' :key="index" :to="{ name:'ApexCom', params: {ApexComId:apex.id} }" > 
      <div id="sub1">
         <img width="38px" :src="'http://35.232.3.8'+ apex.avatar" />
         <a class="name"> {{apex.name}} <br/> <span class="memb"> {{apex.numOfMeb}} Members </span></a>
         <span >  </span>
       </div> 
       <div class="about"  style="display:inline-block;float:right">{{apex.description}} </div>
       <br/><br/>
    </router-link>

    <router-link id="subDiv" v-show="exist" v-for='(user,index) in users' :key="'A'+index" :to="{ name: 'UserProfile', params: {userName:user.username}}"> 
      <div id="sub1">
         <img width="45px" :src="'http://35.232.3.8' + user.avatar" />
         <a class="name"> {{user.username}} <br/> <span class="memb"> {{user.karma}} karma </span> </a>       
       </div> 
       <br/><br/>
    </router-link>
    
    <div id="subDiv" style="text-align:center;font-size: 17px;font-weight: 600; " v-show="!exist"> {{error}} ''{{this.$localStorage.get('search')}}'' </div>
  </div>

</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'
/**
 * @vue-data {string} [apexs=""] apexComs that reflect with search value
 * @vue-data {string} [users=""] users that reflect with search value  
 * @vue-data {boolean} [exist=true] if there is matching
 * @vue-data {string} [error=''] if there is no matching
*/

export default {
  data(){
    return{
      exist:true,
      error:'',
      apexs:[],
      users:[]
    }
  },
  mounted () {
    if(this.$localStorage.get('login'))
    {
      if(AllServices.getState())
      {
        var result = AllServices.searchUser();
        if( typeof result === 'string')
        {
            this.exist = false,
            this.error = result
        }
        else{
          this.apexs = result[1],
          this.users = result[2],
          this.exist = true
        }
      }
      else{
        AllServices.searchUser().then((data) =>{
          if( (data.apexComs.length == 0 ) && (data.users.length == 0))
          {
            this.exist = false,
            this.error = 'Sorry, there were no community results for'
          }
          else{
            this.apexs = data.apexComs,
            this.users = data.users,
            this.exist = true
          }
        })
      }     
    }
    else{
      if(AllServices.getState())
      {
        var resultT = AllServices.searchGuest();
        if( typeof resultT === 'string')
        {
            this.exist = false,
            this.error = resultT
        }
        else{
          this.apexs = resultT[1],
          this.users = resultT[2],
          this.exist = true
        }
      }
      else{
        AllServices.searchGuest().then((data) =>{
          if( (data.apexComs.length == 0 ) && (data.users.length == 0))
          {
            this.exist = false,
            this.error = 'Sorry, there were no community results for'
          }
          else{
            this.apexs = data.apexComs,
            this.users = data.users,
            this.exist = true
          }
        })
      } 
    }
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
a{
  text-decoration-line: none
}
#mainDiv{
    margin:2%;
    width: 70%;
    height:100%;
    background-color: white;
    border-radius:15px;
}

#subDiv{
  display: block;
  width:94%;
  height:100%;
  margin: 3% auto ;
  padding:10px ;
  overflow: hidden
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
  color:black;
  font-size: 14px;
  margin-left:7%;
}
.memb{
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: rgb(135, 138, 140);
}
.about{
  font-size: 13px;
  line-height: 18px;
  color: rgb(135, 138, 140);
  -webkit-box-flex: 1;
  flex-grow: 1;
  overflow-wrap: break-word;
  overflow: hidden;
  width:60%;  
}
@media(max-width:1250px){
  #mainDiv{
    width:61%;
  }
}

@media(max-width:945px){
  #mainDiv{
    width:95%;
  }
}

@media(max-width:800px){
  div .about{
    width:40%;
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
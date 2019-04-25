<template>
  <div id="mainDiv" >
    <a href="" id="subDiv" v-show="exist" v-for='(apex,index) in apexs' :key="index" > 
      <div id="sub1">
         <img width="20%" :src="'../../public/'+apex.avatar"/>
         <a class="name"> {{apex.name}} </a>
         <div class="memb"> {{apex.numOfMeb}} Member </div>
       </div> 
       <div id="sub2">
         <div class="about" style="display:inline-block">{{apex.description}} </div>
         <button class="btn btn-primary log" style="display:inline-block; width:15%" type="button"> JOIN</button>  
       </div>
       
       <br/><br/>
    </a>
    <a href="" id="subDiv" v-show="exist" v-for='(user,index) in users' :key="'A'+index" > 
      <div id="sub1">
         <img width="20%" :src="'../../public/'+user.avatar"/>
         <a class="name"> {{user.name}} </a>
       <br/>
         <div class="memb"> {{user.karma}} karma </div>
       </div> 
       <div id="sub2">
         <button class="btn btn-primary log" style="display:inline-block; width:15%" type="button"> FOLLOW</button>  
       </div>
       
       <br/><br/>
    </a>
    <div id="subDiv" style="text-align:center;font-size: 17px;font-weight: 600; " v-show="!exist"> {{error}} ''{{this.$localStorage.get('search')}}'' 
    </div>
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
 /* props:{
    myProperty:{
      type: Object
    }
  }, */
  data(){
    return{
      exist:true,
      error:'',
      apexs:[],
      users:[]
    }
  },
  mounted () {
    var result = AllServices.searchApexAndUser();
    if( typeof result === 'string')
    {
        this.exist = false,
        this.error = result
    }
    else{
      this.apexs = result[0],
      this.users = result[1],
      this.exist = true

    }
   
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
#mainDiv{
    margin:2%;
    width: 70%;
    height:100%;
    background-color: white;
    border-radius:15px;
}

#subDiv{
  display: block;
  width:100%;
  height:100%;
  margin: 3% auto;
  padding-left:1% ;

}
#sub1{
  width:20%;
  height:100%;
  float:left;
} 

img{
  border-radius:50%; 

}
.name{
  color:black;
  margin-left:2%;
}
.memb{
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    color: rgb(135, 138, 140);
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: 25%;
  }
#sub2{
  width:80%;
  height:100%;
  float:right;
}
.about{
  font-size: 13px;
  line-height: 18px;
  color: rgb(135, 138, 140);
  -webkit-box-flex: 1;
  flex-grow: 1;
  overflow-wrap: break-word;
  overflow: hidden;
  margin-left: 5%;
  width:60%;  
}
.log{
  float:right;
  margin-right: 1%;
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
  div .about{
    display: none
  }
} 



</style>
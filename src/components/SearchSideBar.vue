<template>
  <div id="main">
    <img width="100%" style="padding:0" src="../../public/searchBanner.png" >
    
    <img  class="think" src="../../public/thinking.png" >
      <br/>  <br/>  
     <p > Have an idea for a new community? </p>

     <button  style=" cursor: no-drop" type="button" class="btn btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" @click="create()">CREATE COMMUNITY</button>
  </div>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'

  export default {

    data () {
      return {
      }
    },
    methods:{
      create: function() {
        var type = AllServices.userType().then((data)=>{
          if(data.type == 1){
            this.$router.push({ name:'CreateApexCom'} )
          }
        })
      }
    }
}
</script>

<style scoped>
*{
  box-sizing: border-box
}

p{
  padding:0.7%;
  color:#7c7c7c;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  overflow-wrap: break-word;

}
button{
  padding:0.7%;
  width:80%;
  height:40px;
  font-weight: 500;
  font-size: 17px;
  margin-left: 9%;
  margin:5% 10%;
  border-radius: 15px;
}
.think{
  width:20%;
  margin-left: 35%;
  margin-top: -20%;
}

#main{
  float:right;
  width:300px;
  max-height: 50%;
  color:black;
  background-color: white;
  border-radius: 5%;
  margin-top: 2.2%;
  margin-right: 15px;
} 

@media(max-width:945px){
  #main{
    display:none
  }
}
 </style>

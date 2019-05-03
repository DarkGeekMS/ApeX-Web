<template>
  <div id="main">
    <img width="100%" style="padding:0" src="../../public/searchBanner.png" >
    
    <img  class="think" src="../../public/thinking.png" >
      <br/>  <br/>  
     <p > Have an idea for a new community? </p>

     <button  style=" cursor: no-drop" type="button" class="btn btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" @click="create()" id="comm">CREATE COMMUNITY</button>
     <div class="warn2">To prevent spam, you must be an admin to create communities. </div>
  </div>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'
import $ from'jquery/dist/jquery.min.js'


  export default {

    data () {
      return {
      }
    },
    mounted(){
      $('#comm').hover(function() {
      $('.warn2').show();
        }, function() {
      $('.warn2').hide();
      });
    },
    methods:{
      create: function() {
          AllServices.userType().then((data)=>{
          if(data.type == 1){
            this.$router.push({ name:'CreateApexCom'} );
            $('#comm').css('cursor','pointer');
          }else{
            $('#comm').css('cursor','no-drop')
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

@media(max-width:933px){
  #main{
    display:none
  }
}
.warn2{
  border: none;
  width: 65%;
  overflow: hidden;
  line-height: 15px;
  padding: 0.3%;
  color:white;
  background-color: #000;
  border-radius: 10px;
  padding: 7px;
  padding-left: 15px;
  font-size: 12px;
  transition: all ease-in-out 0.5s;
  margin-left:52px;
  margin-top:-8px;
  text-align:center;
  display:none;
}
 </style>

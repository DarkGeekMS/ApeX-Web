<template>
  <div id="one">
  <div id="main">
    <div class="row">
     
     <div id="g"> <img width="70px" src="../../public/Logo_small.png" > <h5>Posting to Apex</h5></div>
      </div>
      <div id="g"><h5 v-show="login">1.Remember the human</h5></div>
      <div id="g"> <h5 v-show="login"> 2.Behave like you would in real life </h5></div>
      <div id="g"> <h5 v-show="login"> 3.Look for the original source of content </h5></div>
      <div id="g"> <h5 v-show="login"> 4.Search for duplicates before posting</h5></div>
      <div id="g">  <h5 v-show="login"> 5.Behave like you would in real life </h5></div>
      <div id="g"> <h5 v-show="login"> 6.Read the community’s rules </h5></div>

  

    
    </div>
</div>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'

  /**
  * @vue-data {boolean} [login=false] if user is logged in 
  */
  export default {

    data () {
      return {
        login: false
      }
    },
    created () {
      setInterval(() => {
        this.login = this.$localStorage.get('login')
      }, 1000)
    },
    methods:{
     
      create: function() {
        var type = AllServices.userType().then((data)=>{
        if(data.type == 1){
          return true;
          }
        })
      }
    }
}
</script>

<style scoped>
*{
  padding:0.7%;
  box-sizing: border-box
}

img{
  border-radius:50%;
  margin-left:2%;

}
#g{
   border-bottom: 1px solid rgb(237, 239, 241)
}
h5{
  display: inline-block;
  padding-left: 4%;
  font-size:14px;
    
    color:rgb(28,28,28);
  
   
}
p{
  color:#7c7c7c;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  overflow-wrap: break-word;

}
button{
  width:90%;
  height:37px;
  font-weight: 500;
  font-size: 17px;
  margin-left: 5%;
  margin-top:4%;
  border-radius: 10px;
}

#main{
  display: inline-block;
  width:312px;
  max-height: 50%;
  color:black;
  background-color: white;
  border-radius: 10px;
  height:auto;
  padding: 3%
  
} 
#one
{
  position: absolute;
  top: 100px;
  left: 71%;
}

@media(max-width:959px){
  #one{
    display:none
  }
}
 </style>

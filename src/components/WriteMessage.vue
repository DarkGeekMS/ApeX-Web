<template>
<div class = "send-message">
        <br>
            to <br>
            <input class = "in" type="text" v-model="reciever" ><br>
            subject <br>
            <input class = "in" type="text" v-model="subject" ><br>
            message <br>
            <textarea id="text" class = "in"  v-model="content"  rows="5" ></textarea><br>
            <button class="Send" v-on:click="send">SEND</button>

            
    </div>
</template>
<script>
import axios from 'axios'
import {AllServices} from '../MimicServices/AllServices.js'


export default {
  name: 'WriteMessage',
  data(){
        return{
         content:'',
         reciever:'',
         subject:''
        }
  },
  created () {
  },
  methods:{
      send:function() {
         //TODD:request to backend 
        AllServices.sendMessage(this.reciever,this.subject,this.content).then((data) => {
 
      });
}
  }
}

</script>

<style scoped>


.Send:hover {opacity: 0.75}

.Send{
  font-size: 17px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: white;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
border: none;
border-radius: 8px;
padding-left: 1%;
padding-right : 1%;
position: relative;
background-color: #710404;
}
.send-message{
   padding-left:2%;
   background-color:white;
   padding-right:25%;
   margin-left:20%;
   margin-right:20%;
   margin-bottom:0%;
   padding-bottom:1%;
   padding-top:0%;
   margin-top:1%;
   font-size:20px;
}
.in{
    width:100%;
    resize:vertical;
}
#text{
    font-size: 15px;

}
</style>

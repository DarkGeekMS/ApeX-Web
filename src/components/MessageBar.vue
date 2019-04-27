<template>
<div class = "container3">
    <div class = "bar">
        <button  class="But" v-on:click="sendMessage" id="send">Send A Private Message</button>
        <button  class="But" v-on:click="showInbox" id="inbox">Inbox</button>
        <button  class="But" v-on:click="showSent" id="sent">Sent</button>

    </div>
    <div class = "bar2" v-show="inbox">
        <button  class="But2"  id="all" v-on:click="showAll">All</button>
        <button  class="But2"  id="read" v-on:click="showRead">Read</button>
        <button  class="But2"  id="unread" v-on:click="showUnread">Unread</button>
    </div>
    

    <div class = "sentMessages" v-show="sent" v-for="msg in sentArr" v-bind:key="msg.id">
        <Message  v-bind:date= msg.date  v-bind:title= msg.title v-bind:content= msg.content v-bind:sender= msg.user v-bind:type= 0></Message>
    </div>
<div>
    <div class = "allMessages" v-show="all" v-for="msg in allArr" v-bind:key="msg.id">
        <Message  v-bind:date= msg.date  v-bind:title= msg.title v-bind:content= msg.content v-bind:sender= msg.user v-bind:type= 1></Message>
    </div>
</div>
<div>
    <div class = "readMessages" v-show="read" v-for="msg in readArr" v-bind:key="msg.id">
        <Message  v-bind:date= msg.date  v-bind:title= msg.title v-bind:content= msg.content v-bind:sender= msg.user v-bind:type= 1></Message>
    </div>
</div>
<div>
    <div class = "unreadMessages" v-show="unread" v-for="msg in unreadArr" v-bind:key="msg.id">
        <Message  v-bind:date= msg.date  v-bind:title= msg.title v-bind:content= msg.content v-bind:sender= msg.user v-bind:type= 1></Message>
    </div>
</div>  
    <WriteMessage v-show="send"></WriteMessage>
</div>
</template>

<script>
import axios from 'axios'
import WriteMessage from "./WriteMessage.vue"
import Message from "./Message.vue"
import {AllServices} from '../MimicServices/AllServices.js'
import $ from'jquery/dist/jquery.min.js'


export default {
  name: 'MessageBar',
  data(){
        return{
            send:true,
            all:false,
            read:false,
            unread:false,
            sent:false,
            inbox:false,
            sentArr:[],
            allArr:[],
            readArr:[],
            unreadArr:[]
        }
  },
  created () {
  },
  mounted(){
     $('#selectted').text('Messages');
        var remclass = $('#classed').prop('class');
        $('#classed').removeClass(remclass);
        $('#classed').addClass("glyphicon glyphicon-envelope");
  },
  methods:{
      sendMessage:function() {
         this.send=true;
         this.all=false;
         this.read=false;
         this.unread=false;
         this.sent=false;
        this.inbox=false;

      },
      showInbox:function() {
        this.send=false;
         this.all=false;
         this.read=false;
         this.unread=false;
         this.sent=false;
         this.inbox=true;
         AllServices.getAllMessages().then((data) => {
         if(data){
             this.sentArr=data.sent;
             this.allArr=data.all;
             this.readArr=data.read;
             this.unreadArr =data.unread;
                  }
      });
      },
      showRead:function() {
        this.send=false;
         this.all=false;
         this.read=true;
         this.unread=false;
         this.sent=false;
        
      },
      showUnread:function() {
        this.send=false;
         this.all=false;
         this.read=false;
         this.unread=true;
         this.sent=false;
         
      },
      showAll:function() {
        this.send=false;
         this.all=true;
         this.read=false;
         this.unread=false;
         this.sent=false;
         
    
      },
      showSent:function() {
         this.send=false;
         this.all=false;
         this.read=false;
         this.unread=false;
         this.sent=true;
        this.inbox=false;
          AllServices.getAllMessages().then((data) => {
         if(data){
             this.sentArr=data.sent;
             this.allArr=data.all;
             this.readArr=data.read;
             this.unreadArr =data.unread;
                  }
});   
  }},
  components:{
      'WriteMessage':WriteMessage,
      'Message':Message
  }
}
</script>

<style scoped>
.bar{
border: none;
padding-left :7%;
width:100%;
height:15%;
background-color: #710404;
}
.bar2{
border: none;
padding-left :10%;
width:100%;
height:12%;
background-color: #710404;
}

.But{
padding-left:3%;
padding-right:3%;
font-size: 20px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: white;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
background-color: #710404;
border:none;
}
.But:focus{
    opacity: 0.75;
}
.But2{
padding-left:1%;
padding-right:1%;
font-size: 15px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: white;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
background-color: #710404;
border:none;
}
.But2:focus{
    opacity: 0.75;
}

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
.container3{
    margin-top:50px;
    width : 100%;
}
.sentMessages,.readMessages,.allMessages,.unreadMessages{
    width : 65%;
    margin:auto;
}

</style>

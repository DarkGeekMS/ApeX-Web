<template>
<div class = "container2" v-if="this.showMessage">
   <p class = "title">{{title}}:</P>
   <div class = "sub">
       <div class="first-line">
        
        <div class="block-container" v-if="this.type">from</div>
        <div class="block-container" v-if="!this.type">to</div>
        <router-link 
          :to="{name:'UserProfile' ,
           params: {userName:sender}}">
            {{sender}}
          </router-link>
          sent {{time}}
       </div>
       <br>
       <div class="second-line">
            {{content}}
       </div>
       <br>
       <div class = "first-line">
        <button class = "buttons"  id = "Permalink" v-on:click="showReplies">Permalink</button>
        <div class="block-container" v-if="this.type">
        <button class = "buttons"  id = "Delete" v-on:click="deleteMsg">Delete</button>
        <button class = "buttons"  id = "BlockUser"  v-on:click="blockButton"  v-show="!this.block">Block User</button>

        <div class="block-container" v-if="this.block">
            Are You Sure?
            <button id = "yes" class = "buttons" v-on:click="blockUser">Yes</button>
            <button id = "no" class = "buttons" v-on:click="blockButton">No</button>
        </div>
        <button class = "buttons"  id = "Reply" v-on:click="showReply">Reply</button>
        </div>
   </div>
   <div class="block-container2">
    <WriteReply v-on:ReplyOnMessage="addDemoReply" class="box" buttonType="3" v-bind:parentID=ID  v-show = "showReplyBox" v-bind:style="{width:'70%'}"></WriteReply>
</div>
<br>
    <div class="block-container" v-show="permalink" v-for="msg in replies" v-bind:key="msg.id">
    <Reply  v-bind:date= msg.date  v-bind:content= msg.content v-bind:sender= msg.user v-bind:type= "typeBar"></Reply>
    </div>

</div>
</div>
    </template>

<script>
import axios from 'axios'
import WriteComment from "./WriteComment.vue"
import MessageReply from "./MessageReply.vue"
import {AllServices} from '../MimicServices/AllServices.js'

export default {
  name: 'Message',
  props:{
    content:String,
    date:Date,
    title:String,
    sender:String,
    ID:String,
    type:Number   // sent : 0   // inbox : 1
    
    
  },
  components:{
'WriteReply':WriteComment,
'Reply':MessageReply
  },
  data(){
        return{
           time:'',
            showReplyBox:false,
            showMessage:true,
            block:false,
            permalink:false,
            replies:[],
            typeBar:0
        }
  },
  created () {
    setInterval(() => this.DateFormat(this.date), 1000);
    
  },
  methods:{
     DateFormat:function(date){
  // Make a fuzzy time
var delta = Math.round((+new Date - date) / 1000);

var minute = 60,
    hour = minute * 60,
    day = hour * 24,
    week = day * 7;

var fuzzy;

if (delta < 60) {
    fuzzy = 'just now';
}  else if (delta < 2 * minute) {
    fuzzy = 'a minute ago.'
} else if (delta < hour) {
    fuzzy = Math.floor(delta / minute) + ' minutes ago.';
} else if (Math.floor(delta / hour) == 1) {
    fuzzy = '1 hour ago.'
} else if (delta < day) {
    fuzzy = Math.floor(delta / hour) + ' hours ago.';
} else if (delta < day * 2) {
    fuzzy = 'yesterday';
}
this.time=fuzzy;
},
showReply:function(){
    this.showReplyBox=!this.showReplyBox;
    },
deleteMsg:function(){
    AllServices.deleteMessage(this.ID).then((data) => {
    if(data)
        this.showMessage=!this.showMessage;
   

    });
    
},
blockButton:function(){
    this.block=!this.block;
},
blockUser:function(){
    AllServices.blockUser(this.ID).then((data) => {
   
      });
},
showReplies:function(){
    this.permalink = !this.permalink;
    if(this.permalink){
    AllServices.getReplies(this.ID).then((data) => {
   if(data){    
    if(this.type == 1)
        this.typeBar = 0;
    else
        this.typeBar =1;
    this.replies = data;
        }
      });
    }
},
addDemoReply:function(con){
    this.replies.push(
        {
             id:Math.random().toString(36).substr(2, 5),
             content:con,
             user:this.sender,
             date:new Date()
        }
    );
}
}
}
</script>

<style scoped>
.sub{
    margin-left:3%;
}
.first-line{
    font-size:70%;
    position: static;
    top: 0;
    left: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: center;
    color:gray;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

}
.title{
    font-size:180% ;
    font-weight:bold;
}
.buttons{
 border:none;
 background-color:white;
}
#yes{
    color:red;
}
#no{
    color:blue;

}
.container2{
    background-color:white;
    margin-top:5%;
    width:70%;
    height:auto;
    
}
.block-container{
    display:inline;
}
.block-container2{
    display:flex;
}
.second-line{
    font-size:95%;
}

</style>

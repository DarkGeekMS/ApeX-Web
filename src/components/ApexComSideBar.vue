<template>
    <div class="sidebar" >
      <div class="box" id="descroption box">
       <h3 class="Header" id="descroption box header">Community Details</h3>
      <div class="content">
          <h3 id="Apex-com-name">
         <img class="image" src="../../public/Logo_small.png" >
         {{apexComName}}</h3>
       <p id="subscribers Count">{{subscribersCount}} subscribers</p>
       <p id="description">{{description}}</p>
       <button id="subscribebutton" v-bind:class="{button1:subscribed,button:!subscribed}" v-on:mouseover="changeState('unsubscribe')" v-on:mouseleave="changeState('subscribed')" type="button" v-on:click="subscribe()">
       <span> {{state}} </span> </button>
       <button id="create post button" class="button" type="button">create post</button>
       <button id="deteteApexCom" v-show="isAdmin()" class="button" type="button" v-on:click="deleteAC()">delete</button>
       </div>
       </div>

       <div class="box" id="rules box">
      <h3 class="Header" id="rules box header">Rules</h3>
      <div class="content">
      <ol  id="ruleslist">
        <li id="ruleslistitem" v-for="rule in rules" :key="rule.id">{{rule}}</li>
      </ol>
    </div>
    </div>
    
    <div  id="moderators box">
      <h3 class="Header" id="moderators box header">Moderators</h3>
      <div class="content" >
      <ul class="list" style="list-style-type:none;" id="moderatorslist">
        <li  id="moderators list item" v-for="moderator in moderators" :key="moderator.id">
          <!-- <a id="moderators account link" class="accountLink" href="#link">{{moderator.userName}}</a> -->
          <router-link class="accountLink" :to="{name:'UserProfile' , params: {userName:moderator.userName}}"> {{moderator.userName}}</router-link>
        </li>
      </ul>
    </div>
    </div>
      </div>
</template>


<script>
import {globalStore} from '../main.js'
import axios from 'axios'
import {AllServices} from '../MimicServices/AllServices.js'

export default {
    props:{
       apexComName:String,
       description:String,
       moderators:Array,
       rules:Array,
       subscribersCount: Number,
       },
    data(){
        return{
            token:this.$localStorage.get('token'),
            subscribers:[],
            subscribed:false,
            state:'subscribe',
            userName:this.$localStorage.get('userName'),
            loggedIn:this.$localStorage.get('login'),
            //userName:'subscriber1',
        }

    },
    methods:
    {
      changeState:function(state)
      {
        if(this.subscribed)
        {
          this.state=state;
        }
      },
      deleteAC:function()
      {

        var response = AllServices.deleteApexCom(this.apexComName);
      if(response){
      alert('Done :)')
    }
    else{
      alert('sorry something went wrong :)')
    }
      },
      CheckUser:function(name)
    {
      console.log(this.userName);
      if( name.userName == this.userName){
      return true;
      }
    },
    getSubscribers(){
        this.subscribers= AllServices.getSubscribers(this.apexComName);
        var subscribe = this.subscribers.find(this.CheckUser);
        console.log(subscribe);
        if(subscribe !== undefined){
          this.subscribed = true;
          this.state='subscribed';
        }
        else{
          this.subscribed=false;
          this.state='subscribe';
    }
   },

      isAdmin:function()
      {
        if(this.loggedIn){
        var data= AllServices.userType();
        if(data ==1){
          return true;
          }
        else{
          return false;
        }
        }
      },

    subscribe:function()
    {
      if(this.loggedIn){
      var data = AllServices.subscribe(this.apexComName);
      if(data){
      if(this.subscribed){
      this.subscribed = false;
      this.state='subscribe';
    }
    else{
      this.subscribed=true;
      this.state='subscribed';
    }
    }
    else{
      alert('something wrong happened try again later');
    }
      }
      else{
        alert('login first,please');
      }
    },
  },
 mounted(){
   if(this.loggedIn){
   this.getSubscribers();
   }
 }
 
}
</script>

<style scoped>

.Header{
  background-color: skyBlue;
  padding:12px;
  margin: 0%;
  height:auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
#description{
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  color: #1a1a1b;
  overflow-wrap: break-word;
}

.content{
  margin-top:0%;
  margin-bottom: 8%;
  background-color:#eee;
  border-bottom-left-radius:8px; 
  border-bottom-right-radius:8px;
  padding:5%;
}
.button{
  width:100%;
  margin:2% 0%;
  background-color:skyBlue;
  color: #eee;
  padding: 0%;
  border-width: 3px;
  border-radius: 8px;
  cursor:pointer;
  border-color: skyblue;
  border-style: solid;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 32px;
  text-transform: uppercase;
  height:38px;
}
.button:hover {opacity: 0.75}
.button1:hover {opacity: 0.75}

.button1{
  width:100%;
  margin:2% 0%;
  color:skyBlue;
  background-color: #eee;
  padding: 0%;
  border-width: 3px;
  border-radius: 8px;
  cursor:pointer;
  border-color: skyblue;
  border-style: solid;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 32px;
  text-transform: uppercase;
  height:38px;
}
.image{
  width:16%;
  height:50px;
  margin-top:0%;
  margin-bottom:0%;
  margin-right:0%;
  margin-left:0%;
  border-radius: 25px;
  box-sizing: border-box;
}
.accountLink{
  text-decoration: none;
  color: black;
}
.list{
  padding-left: 0%;
}
#ruleslistitem{
  font-size: 17px;
font-weight: 500;
line-height: 24px;
}
#ruleslist{
  padding-left: 6%;
}
</style>

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
       <button id="createpostbutton" class="button" type="button">create post</button>
       <button id="deteteApexCom" v-show="isAdmin()" class="button" type="button" v-on:click="deleteAC()">delete</button>
       </div>
       </div>

       <div class="box" id="rules box" >
      <h3 class="Header" id="rules box header">Rules</h3>
      <div class="content">
      <ol  id="ruleslist">
        <li id="ruleslistitem" v-for="rule in rules" :key="rule.id">{{rule}}</li>
      </ol>
    </div>
    </div>

    <div  id="moderators box" >
      <h3 class="Header" id="moderators box header">Moderators</h3>
      <div class="content" >
      <ul class="list" style="list-style-type:none;" id="moderatorslist">
        <li  id="moderatorslistitem" v-for="moderator in moderators" :key="moderator.id">
          <router-link class="accountLink" :to="{name:'UserProfile' , params: {userName:moderator.userName}}"> {{moderator.userName}}</router-link>
        </li>
      </ul>
    </div>
    </div>
      </div>
</template>


<script>
import axios from 'axios'
import {AllServices} from '../MimicServices/AllServices.js'

/**
 * @vue-data {JWT} [token='']  user Token
 * @vue-data {string} [loggeduser='']  name of logged in user
 * @vue-data {boolean} [loggedIn='']  check if user is logged in
 * @vue-data {array}   subscribers - list of community subscribers
 * @vue-data {string}   [state='subscribe'] - user state subsribed or not
 * @vue-data {boolean}   [subscribed=false] - check if user is subscriber or not
 * @vue-prop {number} subscribersCount - Number of subscribers for certain community
 * @vue-prop {string} description - community description
 * @vue-prop {array} moderators - moderators for certain community
 * @vue-prop  {array} rules - rules of certain community
 * @vue-prop  {string} apexComName - community name
 */

export default {
    props:{
       apexComName:String,
      //  description:String,
      //  moderators:Array,
      //  rules:Array,
      //  subscribersCount: Number,
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
            // apexComName:'',
            description:'',
            moderators:[],
            rules:[],
            subscribersCount:0,
        }

    },
    methods:
    {
      /**
      *change the state from subscribed to unsubscribed
      */
      changeState:function(state)
      {
        if(this.subscribed)
        {
          this.state=state;
        }
      },
      /**
      *send request to delete certain community
      */
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
      /**
      *check if user is subscribed or not
      */
      CheckUser:function(name)
    {
      console.log(this.userName);
      if( name.userName == this.userName){
      return true;
      }
    },
    /**
    * get the list of subscribers to this community
    */
    getSubscribers(){
      if(this.loggedIn){
        this.subscribers= AllServices.getSubscribers(this.apexComName).then((data) =>{
        var subscribe = this.subscribers.find(this.CheckUser);
        if(subscribe !== undefined){
          this.subscribed = true;
          this.state='subscribed';
        }
        else{
          this.subscribed=false;
          this.state='subscribe';
    }
    })
      }
      else{
          this.subscribed=false;
          this.state='subscribe';
    }
   },
      /**
      *check if user is an admin
      */
      isAdmin:function()
      {
        if(this.loggedIn){
        var data= AllServices.userType().then((data) =>{
        if(data.type ==1){
          return true;
          }
        else{
          return false;
        }
        })
        }
      },
      /**
      *send request to subscribe or unsubsribe certain community
      */
    subscribe:function()
    {
      if(this.loggedIn){
      var data = AllServices.subscribe(this.apexComName).then((data) =>{
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
    })
      }
      else{
        alert('login first,please');
      }
    },
    getAbout(){
         var about= AllServices.getAbout(this.ApexComName).then((about) =>{
         this.description=about.description;
         this.moderators=about.moderators;
         this.rules=about.rules;
         this.subscribersCount=about.subscribersCount;
         });
   },
    
  },
 mounted(){
   if(this.loggedIn){
   this.getSubscribers();
   }
   this.getAbout();
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
  color: white;
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
  background-color: white;
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
#moderatorslistitem{
  margin-bottom: 2%;
  font-size: 15px;
}
</style>

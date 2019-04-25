<template>
    <div class="sidebar" >
      <div id="main">
      <div class="box" id="descroption box">
       <h3 class="Header" id="descroption box header">Community Details</h3>
      <div class="content">
          <h3 style="color:#1a1a1b; display:inline; font-size: 20px;" id="Apexcomname">{{apexComName}}</h3>
          <div class="img">
        <img style="box-sizing: border-box; border-radius: 50%;" class="image" :src="image" > 
      </div>

         <p style=" color:#1a1a1b;
    font-weight: 550;  margin-top: 8%;">Members</p>
         
       <p style=" color:#1a1a1b; margin-left:8%;" id="subscribers Count">{{subscribersCount}}</p>
       <p id="description">{{description}}</p>
       <button id="subscribebutton" v-bind:class="{button1:subscribed,button:!subscribed}" v-on:mouseover="changeState('unsubscribe')" v-on:mouseleave="changeState('subscribed')" type="button" v-on:click="subscribe()">
       <span> {{state}} </span> </button>
       <button id="createpostbutton" class="button" type="button">create post</button>
       <button id="deteteApexCom" v-show="isAdmin()" class="button" type="button" v-on:click="deleteAC()">delete</button>
       </div>
       </div>

       <div class="box" id="rules box" v-show="rules.length !==0">
      <h3 class="Header" id="rules box header">Rules</h3>
      <div class="content">
      <ol  id="ruleslist">
        <li id="ruleslistitem" v-for="rule in rules" :key="rule.id">{{rule}}</li>
      </ol>
    </div>
    </div>

    <div class="box" id="moderators box" v-show="moderators.length !==0">
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
      </div>
</template>


<script>
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
            image:''
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
        AllServices.getSubscribers(this.apexComName).then((data) =>{
          this.subscribers=data.subscribers;
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
        AllServices.userType().then((data) =>{
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
      AllServices.subscribe(this.apexComName).then((data) =>{
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
         AllServices.getAbout(this.ApexComName).then((about) =>{
         this.description=about.description;
         this.moderators=about.moderators;
         console.log(this.moderators.length);
         this.rules=about.rules;
         this.image=about.image;
         this.subscribersCount=about.subscribersCount;
         });
   },

  },
 mounted(){
   this.getSubscribers();
   this.getAbout();
 }

}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
#main{
  width:22%;
  float:right;
   /* width:23%; */
   /* position:absolute; */
   /* max-height:50%; */
   /* max-width:80%; */
  /* height: auto; */
  margin-top:4%;
  margin-bottom: 0%;
  margin-left: 3%;
  margin-right: 5%;
}
.sidebar{
  /* float:right; */
   /* width:23%; */
   /* position:absolute; */
   /* max-height:50%; */
  /* height: auto; */
  /* margin-top:4%; */
  /* margin-bottom: 0%; */
  /* margin-left: 3%; */
  /* margin-right: 4%; */
  /* box-sizing: border-box; */
}
.Header{
  background-color: skyBlue;
  color:#1a1a1b;
  padding:4%;
  margin: 0%;
  /* height:auto; */
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  font-size: 16px;
  font-weight: 400;
  overflow-wrap: break-word;
}
#description{
  font-family: "Noto Sans", Arial, sans-serif;
  color:#1a1a1b;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  overflow-wrap: break-word;
  /* overflow-wrap: break-word; */
}
.box{
  margin-top: 0%;
  margin-bottom: 5%;
}

.content{
  margin-top:0%;
  margin-bottom: 0%;
  background-color:white;
  border-bottom-left-radius:20%;
  border-bottom-right-radius:20%;
  padding-top:8%;
  padding-bottom:5%;
  padding-left:5%;
  padding-right:5%;
  overflow-wrap: break-word;
  color:#1a1a1b;
}
.button{
  width:100%;
  margin:2% 0%;
  background-color:skyBlue;
  color: white;
  padding: 1%;
  border-width: 3px;
  border-radius: 20%;
  cursor:pointer;
  border-color: skyblue;
  border-style: solid;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  overflow: hidden;
  /* height:auto; */
}
.button:hover {opacity: 0.75}
.button1:hover {opacity: 0.75}

.button1{
  width:100%;
  margin:2% 0%;
  color:skyBlue;
  background-color: white;
  padding: 1%;
  border-width: 3px;
  border-radius: 20%;
  cursor:pointer;
  border-color: skyblue;
  border-style: solid;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  /* height:auto; */
  margin-left:5%;
  margin-right:5%;
  overflow: hidden;
}
img{
  width: 100%;
}
.img{
  width: 15%;
  display:inline;
  margin-top:-3%;
  margin-bottom:0%;
  margin-right:3%;
  margin-left:0%;
  float: left;
}
.accountLink{
  text-decoration: none;
  /* color: black; */
}
.list{
  padding-left: 0%;
}

#ruleslistitem{
  font-size: 14px;
font-weight: 500;
color:#1a1a1b;
}
#ruleslist{
  padding-left: 6%;
}
#moderatorslistitem{
  margin-bottom: 2%;
  font-size: 14px;
  color:#1a1a1b;
}
.imagediv{
  display: inline;
}
@media(max-width:960px){
  #main{
    display:none
  }
}
p{
  /* color:#7c7c7c;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  overflow-wrap: break-word; */
}
/* @media (max-width: 605px){
img{
  margin-top:4px;
}
}
@media (max-width: 529px){
img{
  margin-top:8px;
}
} */

</style>

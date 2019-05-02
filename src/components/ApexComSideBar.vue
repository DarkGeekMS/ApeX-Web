<template>
      <div id="main">
      <div class="box" id="descroption box">
       <h3 class="Header" id="descroption box header">Community Details</h3>
      <div class="content">
          <h3 style="color:#1a1a1b; display:inline; font-size: 20px;" id="Apexcomname">{{apexComName}}</h3>
          <div class="img">
        <img style="box-sizing: border-box; border-radius: 50%;" class="image" :src="image" >
      </div>


      <div class="sub">
       <p id="subscribersCount">{{subscribersCount}}</p>
       <p id="subscribers">Members</p>
       </div>
       <p id="description">{{description}}</p>
       <button id="subscribebutton" v-bind:class="{button1:subscribed,button:!subscribed}" v-on:mouseover="changeState('unsubscribe')" v-on:mouseleave="changeState('subscribed')" type="button" v-on:click="subscribe()">
       <span> {{state}} </span> </button>
       <button id="createpostbutton" class="button" type="button" v-on:click="createPost()">create post</button>
       <button id="deteteApexCom" v-show="isAdmin" class="button" type="button" v-on:click="deleteAC()">delete</button>
       </div>
       </div>

       <div class="box" id="rules box" v-show="rules.length !==0">
      <h3 class="Header" id="rules box header">Rules</h3>
      <div class="content">
        <P id="ruleslistitem">{{rules}}</p>
    </div>
    </div>

    <div class="box" id="moderators box" v-show="moderators.length !==0">
      <h3 class="Header" id="moderators box header">Moderators</h3>
      <div class="content" >
        <div id="moderatorsbox" class="box2" v-for="(moderator,index) in moderators" :key="moderator.id">
          <router-link style="font-size: 14px;" class="accountLink" v-if="moderator.username" :to="{name:'UserProfile' , params: {userName:moderator.username}}"> {{moderator.username}}</router-link>
          <button v-show="isAdmin" style="width:35%; float: right; margin:0%" id="remove button" class="button1" v-on:click="deleteModerator(moderator.userID,index)">delete</button>
        </div>

    </div>
    </div>
      </div>
</template>


<script>
import {AllServices} from '../MimicServices/AllServices.js'
import { constants } from 'crypto';

/**
 * @vue-data {JWT} [token='']  user Token
 * @vue-data {string} [userName='']  user name
 * @vue-data {boolean} [loggedIn=false]  check if user is logged in
 * @vue-data {array}   subscribers - list of community subscribers
 * @vue-data {string}   [state='subscribe'] - user state subsribed or not
 * @vue-data {boolean}   [subscribed=false] - check if user is subscriber or not
 * @vue-data {number} subscribersCount - Number of subscribers for certain community
 * @vue-data {string} description - community description
 * @vue-data {array} moderators - moderators for certain community
 * @vue-data  {string} rules - rules of certain community
 * @vue-prop  {string} apexComId - community Id
 * @vue-data  {string} apexComName - community name
 * @vue-data  {string} image - community image
 * @vue-data  {boolean} [isAdmin=false] - boolean indicates if the user is admin or not
 */

export default {
    props:{
       apexComId:String,
       },
    data(){
        return{
            token:this.$localStorage.get('token'),
            subscribers:[],
            subscribed:false,
            state:'subscribe',
            userName:this.$localStorage.get('userName'),
            loggedIn:this.$localStorage.get('login'),
            apexComName:'',
            description:'',
            moderators:[],
            rules:'',
            subscribersCount:0,
            image:'',
            isAdmin:false
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

        var response = AllServices.deleteApexCom(this.apexComId);
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
      if( name.username == this.userName){
      return true;
      }
    },
    /**
    * get the list of subscribers to this community
    */
    getSubscribers(){
        AllServices.getSubscribers(this.apexComId).then((data) =>{
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
   },
   /**
       * if user is logged in , can go to create post 
      */
      createPost: function(){
        if( this.loggedIn )
        {
          this.$router.push('/Submit');
        }
        else{
           this.$modal.show('demo-login');
        }
      },
      /**
      *check if user is an admin
      */
      isAdminFunction:function()
      {
        AllServices.userType().then((data) =>{
        if(data.user.type == 3){
          this.isAdmin= true;
          }
        else{
          this.isAdmin= false;
        }
        })
      },
      /**
      *send request to subscribe or unsubsribe certain community
      */
    subscribe:function()
    {
      if(this.loggedIn){
      AllServices.subscribe(this.apexComId).then((data) =>{
        console.log(data);
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
        alert('you have to log in, first');
      }
    },
    /**
      *used by admin to delete moderator
      */
    deleteModerator:function(userName,index){
          var data = AllServices.addOrDeleteModerator(userName,this.apexComId);
          if(data){
          this.moderators.splice(index, 1);
          }
          else{
              alert('sorry something went wrong');
              }
      },
      /**
      *get the details of certain community for user
      */
    getAbout(){
         AllServices.getAbout(this.apexComId).then((about) => {
           console.log(about);
         this.description=about.description;
         this.moderators=about.moderators;
         this.rules=about.rules;
         this.apexComName=about.name;
         this.image=about.avatar;
         this.subscribersCount=about.subscribers_count;
         });
   },
   /**
      *get the details of certain community for guest
      */
   getAboutGuest(){
         AllServices.getAboutGuest(this.apexComId).then((about) =>{
           console.log(about);
         this.description=about.description;
         this.moderators=about.moderators;
         this.apexComName=about.name;
         this.rules=about.rules;
         this.image=about.avatar;
         this.subscribersCount=about.subscribers_count;
         });
   },

  },
 mounted(){ 
   if(this.loggedIn){
   this.getAbout();
   this.isAdminFunction();
   this.getSubscribers();
   }
   else{
     this.getAboutGuest();
   }
 },

}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
#main{
  width:22%;
  float:right;
  margin-top:4%;
  margin-bottom: 0%;
  margin-left: 3%;
  margin-right: 5%;
}
#subscribersCount{
color:#1a1a1b;
 font-size: 16px;
 font-weight: 500;
  margin-left:0%;
  margin-bottom: 0%;
}
#subscribers{
color:#1a1a1b; font-size: 12px;
    font-weight: 500; word-break: break-word;  margin-top: 0%;
}
.sub{
  margin-top: 8%;
  margin-left: 0%;
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
}
.box{
  margin-top: 0%;
  margin-bottom: 5%;
  display:block;
}
.box2{
  margin-top: 0%;
  margin-bottom: 7%;
  display: block;
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
  color:#1a1a1b;
  overflow-wrap: break-word;
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
  overflow: hidden;
}
img{
  width: 100%;
}
.img{
  width: 35px;
  display:inline;
  margin-top:-8px;
  margin-bottom:5%;
  margin-right:3%;
  margin-left:0%;
  float: left;
}
.accountLink{
  text-decoration: none;
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
#remove-button{
  float: right;
}

</style>

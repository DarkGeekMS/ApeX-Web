<template>
    <div class="sidebar" >

      <div class="content" id="descroption box">
       <h3 class="Header" id="descroption box header">Community Details</h3>
       <h3 id="Apex-com-name">r/{{apexComName}}</h3>
       <p id="subscribers Count">{{subscribersCount}} subscribers</p>
       <p id="description">{{description}}</p>
       <button id="subscribebutton" v-bind:class="{button1:subscribed,button2:!subscribed}" type="button" v-on:click="subscribe()">
       <span v-show="subscribed" v-on:mouseover="state='unsubscribe'" v-on:mouseleave="state='subscribed'"> {{state}} </span>  
       <span v-show="!subscribed"> {{state}} </span>
        </button>
       <button id="create post button" class="button" type="button">create post</button>
       </div>

       <div class="content" id="rules box">
      <h3 class="Header" id="rules box header">Rules</h3>
      <ol id="rules list">
        <li id="rules list item" v-for="rule in rules" :key="rule.id">{{rule}}</li>
      </ol>
    </div>

    <div class="content" id="moderators box">
      <h3 class="Header" id="moderators box header">Moderators</h3>
      <ul style="list-style-type:none;" id="moderators list">
        <li id="moderators list item" v-for="moderator in moderators" :key="moderator.id">
          <a id="moderators account link" class="AccountLink" href="#link">{{moderator.userName}}</a>
        </li>
      </ul>
    </div>
      </div>
</template>


<script>
import {globalStore} from '../main.js'
export default {
    props:{
       apexComName:String
       },
    data(){
        return{
            token:globalStore.token,
      description:'',
      moderators:[],
      rules:[],
      subscribersCount: '',
      subscribers:['omar',
      'basma',
      'mohamed',
      'ahmed'],
      subscribed:true,
      state:'subscribed'
        }
    },
    methods:
  {
    subscribe:function()
    {
      if(this.subscribed){
      this.subscribed = false;
      this.state='subscribe';
    }
    else{
      this.subscribed=true;
      this.state='subscribed';
    }
      axios.post('http://localhost/subscribe', {
      ApexCom_id:this.ApexComName,
      Token:this.token
      })
      .then(function (response) {
        if(response){
          
          console.log('done :)');
          }
        else{
          alert('something wrong happened try again later');
          }
          })
      .catch(function (error) {
      console.log(error);
      });
    },
    CheckUser:function(name)
    {
      if( name == 'basma'){
      return true;}
    },
  },
  created(){
    var subscribe = this.subscribers.find(this.CheckUser);
    if(subscribe == 'basmaa'){
      this.subscribed = true;
      this.state='subscribed';
      console.log('calledif');
    }
    else{
      this.subscribed=false;
      this.state='subscribe';
      console.log('calledelse');
    }
},
  mounted()
  {
    axios.get('http://localhost/about', {
    params: {
      ApexCom_id :this.ApexComName,
      Token:this.token
    }
  })
  .then(function (response) {
    this.rules = response.rules;
    this.subscribersCount = response.subscribersCount;
    this.description = response.description;
    this.moderators=response.moderators;
  })
  .catch(function (error) {
    console.log(error);
  });
  axios.get('http://localhost/get_subscribers', {
    params: {
      ApexCom_id :this.ApexComName,
      token:this.token
    }
  })
  .then(function (response) {
    this.Subscribers=response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
  },
}
</script>

<style scoped>

.Header{
  background-color: skyBlue;
  padding:12px;
  margin: 0%;
  height:auto;
  border-radius: 8px;
}

.content
{
  margin-top:0%;
  margin-bottom: 8%;
  background-color:#eee;
  border-radius: 8px;
  padding:1px;
}
.button{
  width:150px;
  margin:5px 70px;
  background-color:skyBlue;
  color: #eee;
  padding: 7px;
  border-width: 1px;
  border-radius: 8px;
  cursor:pointer;
  border-style: solid;
}
.button1{
  width:150px;
  margin:5px 70px;
  color:skyBlue;
  background-color: #eee;
  padding: 7px;
  border-width: 1px;
  border-radius: 8px;
  cursor:pointer;
  border-color: skyblue;
  border-style: solid;
}
.button2{
  width:150px;
  margin:5px 70px;
  background-color:skyBlue;
  color: #eee;
  padding: 7px;
  border-radius: 8px;
  cursor:pointer;
  border-width: 1px;
  border-style: solid;
}
</style>

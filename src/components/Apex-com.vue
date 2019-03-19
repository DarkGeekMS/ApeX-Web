<template id="ApexComDesign">
  <div class="Apexcom" id="Apexcom">
    <h1 id="apexcomName">{{ApexComName}}</h1>
    <div class="navBar" id="navbar">
        <router-link id="postslink" class="navbarLinks" to="/ApexComName">Posts</router-link>
        <router-link id="subscribersListlink" class="navbarLinks" to="/subscribersList">subscribers</router-link>
    </div>
  <div class="sideBar" id="sidebar">
    <!-- description of Apex-com -->
    <div class="content" id="descroption box">
     <h3 class="Header" id="descroption box header">Community Details</h3>
     <h3 id="Apex-com-name">r/{{ApexComName}}</h3>
     <p id="subscribers Count">{{subscribersCount}} subscribers</p>
     <p id="description">{{description}}</p>
     <button id="subscribe button" class="button" type="button" v-on:click="subscribe()">subscribe</button>
     <button id="create post button" class="button" type="button">create post</button>
     </div>
     <!-- list of rules -->
     <div class="content" id="rules box">
    <h3 class="Header" id="rules box header">Rules</h3>
    <ol id="rules list">
      <li id="rules list item" v-for="rule in rules" :key="rule.id">{{rule}}</li>
    </ol>
  </div>
  <!-- list of moderators -->
  <div class="content" id="moderators box">
    <h3 class="Header" id="moderators box header">Moderators</h3>
    <ul style="list-style-type:none;" id="moderators list">
      <li id="moderators list item" v-for="moderator in moderators" :key="moderator.id">
        <a id="moderators account link" class="AccountLink" href="#link">{{moderator.userName}}</a>
      </li>
    </ul>
  </div>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      ApexComName:'Apex-com name',
      userID: '',
      description:'',
      moderators:[],
      rules:[],
      subscribersCount: ''
    }
  },
  methods:
  {
    subscribe:function()
    {
      this.$http.post('http://localhost/subscribe',{
        ApexCom_id:this.ApexComName,
        userID:this.userID
      }).then(function(data){
        alert('subscribed');
      });
    },
  },
  created()
  {
    this.$http.get('http://localhost/about',{params: {ApexCom_id :this.ApexComName,
    userID:this.userID
    }}).then(function(response){
    this.rules = response.rules;
    this.subscribersCount = response.subscribersCount;
    this.description = response.description;
    this.moderators=response.moderators;
    });
  },
}
</script>

<style scoped>
.Apexcom{
  background-color: deepSkyBlue;
  width:auto;
  height:65px;
  margin:0 -7px;
  padding:15px;
}
.sideBar{
  width:300px;
  height: auto;
  margin:40px 86px;
  float: right;
  background-color:white;
  border-radius: 8px;
}
.Header{
  background-color: skyBlue;
  padding:12px;
  margin: 0;
  height:auto;
  border-radius: 8px;
}
.button{
  width:150px;
  margin:5px 70px;
  background-color:skyBlue;
  padding: 7px;
  border-width: 0px;
  border-radius: 8px;
  cursor:pointer;
}
.content
{
  margin:20px 4px;
  background-color:#eee;
  border-radius: 8px;
  padding:1px;
}
.navBar{
  background-color: #eee;
  width:auto;
  height:auto;
  margin:15px -14px;
  padding:15px;
}
.navbarLinks{
  color: deepSkyBlue;
  padding: 14px 16px;
  text-decoration: none;
  margin:7px;
}
.navbarLinks:hover {
  background-color: white;
  border-radius: 8px;
}
.AccountLink{
  text-decoration: none;
}
.router-link-active{
  background-color:white;
  border-radius: 8px;
}
</style>


<template>
  <div class="title">
    <h1>{{ApexComName}}</h1>
    <div class="navBar">
      <a href="#posts">Posts</a>
      <a href="#subscribers">subscribers</a>
    </div>
  <div class="sideBox">
    <!-- description of Apex-com -->
    <div class="content">
     <h3 class="Header">Community Details</h3>
     <h3>r/{{ApexComName}}</h3>
     <p>{{subscribersCount}} subscribers</p>
     <p>{{description}}</p>
     <button type="button" v-on:click="subscribe()">subscribe</button>
     <button type="button">create post</button>
     </div>
     <!-- list of rules -->
     <div class="content">
    <h3 class="Header">Rules</h3>
    <ol>
      <li v-for="rule in rules">{{rule}}</li>
    </ol>
  </div>
  <!-- list of moderators -->
  <div class="content">
    <h3 class="Header">Moderators</h3>
    <ul style="list-style-type:none;">
      <li  v-for="moderator in moderators">
        <a v-bind:href="geturl(moderator.userID)">{{moderator.userName}}</a>
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
    geturl:function(moderatorID)
    {
      this.$http.get('http://localhost/user_data',{params: { userID:this.userID ,
      moderatorID
    }}).then(function(response){
      return respose;
    });
    }
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
  }
}
</script>

<style scoped>
.title{
  background-color: deepSkyBlue;
  width:auto;
  height:40px;
  margin:0 -7px;
  padding:15px;
}
.title h1{
  margin: 4px 16px ;
  padding: 0;
}
.sideBox{
  width:300px;
  height: auto;
  margin:40px 150px;
  float: right;
  background-color:white;
}
.Header{
  background-color: DodgerBlue;
  padding:12px;
  margin: 0;
  height:auto;
}
button{
  width:150px;
  margin:5px 70px;
  background-color:DodgerBlue;
  padding: 7px;
  border-width: 0px;
  border-radius: 8px;
}
.content
{
  margin:20px 4px;
  background-color:#eee;
}
.navBar{
  background-color: #eee;
  width:auto;
  height:auto;
  margin:15px -14px;
  padding:15px;
}
.navBar a {
  color: deepSkyBlue;
  padding: 14px 16px;
  text-decoration: none;
}
.navBar a:hover,a:active {
  background-color: white;
}
</style>

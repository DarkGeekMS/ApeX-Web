<template id="profilesidebardesign">
<div id='sidebar'>
    <div class="box" id="infobox">
        <div class="bluebackgroung">
          <div class="img">
             <img width="100" height="100" class="image" v-bind:src="picture" />
          </div>
        </div> 
        <div class="content">
          <a class="link" href="#account" > {{userName}} </a>
          <h5 id="karma">Karma</h5>
          <h5 id="karmanumber"> {{karmaCount}} </h5>
          <button v-show="notGuest" id="create post button" class="button" type="button">new post</button>
          <button v-on:click="deleteUser()" id="create post button" class="button" type="button">delete user</button>
        </div>       
    </div> 
</div>
</template>

<script>
import axios from 'axios'
import {globalStore} from '../main.js'
export default {
  data () {
    return {
      token:globalStore.token,
      userName:'UserName',
      karmaCount:1,
      picture:'../../public/Logo_small.png',
    }
  },
  methods:
  {
    notGuest:function(){    
    },
    deleteUser:function(){
       
    },
  },
  mounted()
  {
    axios.get('http://localhost/info', {
    params: {
      Token:this.token
    }
  })
  .then(function (response) {
    this.karma = response.karmaCount;
    this.picture = response.picture;
    this.userName = response.userName;
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}
</script>

<style scoped>
.bluebackgroung{
  background-color: deepskyblue;
  padding-top: 12%;
  padding-bottom:0%;
  padding-left:4%;
  padding-right:65%;
  height: 94px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.image{
  border-radius: 4px;
}
.img{ 
  padding:3px;
  background-color: #eee;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom:10%;
}
.content{
  background-color: #eee;
  height: auto;
  padding-top: 20%;
  padding-bottom:5%;
  padding-left:8%;
  padding-right:8%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.name{
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: rgb(34, 34, 34);
  margin-top: 4%;
}
.link{
  text-decoration: none;
  color: black;
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
#karmanumber{
  font-size: 12px;
  font-weight: 400;
}

</style>

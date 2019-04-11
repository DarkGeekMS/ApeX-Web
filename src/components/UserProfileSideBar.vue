<template id="profilesidebardesign">
<div id='sidebar'>
    <div class="box" id="infobox">
        <div class="bluebackgroung">
          <div class="img">
             <!-- <img width="100" height="100" class="image" v-bind:src="picture" /> -->
             <!-- <a :href="picture" download>
                    <img :src="picture" alt="image" width="100" height="100" class="image"/>
             </a> -->

             <a @click.prevent="downloadItem(picture)" :href="picture" width="100" height="100" class="image">
             </a>

          </div>
        </div> 
        <div class="content">
          <a class="link" href="#account" > {{userName}} </a>
          <!-- chaaange routes -->
          <h5 id="karma">Karma</h5>
          <h5 id="karmanumber"> {{karmaCount}} </h5>
          <button id="createpostbutton" class="button" type="button">new post</button>
          <button v-show="isAdmin()" v-on:click="deleteUser()" id="deletebutton" class="button" type="button">delete user</button>
        </div>       
    </div> 
</div>
</template>

<script>
import axios from 'axios'
import {globalStore} from '../main.js'
export default {
  props:{
      userName:String,
      karmaCount:Number,
      picture:String,
       },
  data () {
    return {
      token:globalStore.token,
    }
  },
  methods:
  {

     downloadItem (url) {
    Axios.get(url, { responseType: 'blob' })
      .then(({ data }) => {
        let blob = new Blob([data], { type: 'image/png' })
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = 'image.png'
        link.click()
      .catch(error => {
        console.error(error)
      })
    })
  },

    isAdmin:function(){
      axios.get('http://localhost/me', {
    params: {
      Token:this.token
    }
  })
  .then(function (response) {
    if(response==1){
      return false;
    }
    else{
      return true;
    }
  })
  .catch(function (error) {
    console.log(error);
  });
    },
    deleteUser:function(){
    axios.get('http://localhost/del_user', {
    params: {
      userID:this.userName,
      Token:this.token
    }
  })
  .then(function (response) {
    if(response==1){
      return false;
    }
    else{
      return true;
    }
  })
  .catch(function (error) {
    console.log(error);
  }); 
    },
  },
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
.Header{
  background-color: skyBlue;
  padding:12px;
  margin-top: 10%;
  margin-bottom: 0%;
  height:auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
#apexcomlistbox{
  background-color: #eee;
  height: auto;
  padding: 4%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

</style>

<template id="subscribers list design">
<div class="list" id="subscribers list">
  <h4 v-if="subscribersList.length ==0" >there is nothing to show </h4>
  <div id="subscribers box" class="box" v-for="(subscriber,index) in subscribersList" :key="subscriber.id">
    <!-- <img width="100%" height="100%" class="image" :src="image" /> -->
    <router-link class="accountLink" :to="{name:'UserProfile' , params: {userName:subscriber.userName}}"> {{subscriber.userName}}</router-link>
    <button id="remove button" class="removeButton" v-on:click="blockUser(subscriber.userName,index)">block</button>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import {AllServices} from '../MimicServices/AllServices.js'

/**
 * @vue-data {JWT} [token='']  user Token
 * @vue-data {array}   subscribers - list of community subscribers
 * @vue-prop  {string} apexComName - community name
 */

export default {
  props:['apexComName'],
  data () {
    return {
      token:this.$localStorage.get('token'),
      subscribersList:[]
    }
  },
  methods:
  {
    /**
      *send request to block certain user from certain community
      */
    blockUser:function(userName,index)
    {
      var data = AllServices.blockSubscriber(userName,this.apexComName);
      if(data){
      this.subscribersList.splice(index, 1);
      }
    },
      getsubscribers(){
        AllServices.getSubscribers(this.apexComName).then((data) =>{
          console.log(data);
        this.subscribersList=data;
      })
    }
  },
  mounted()
  {
  this.getsubscribers();
  }
}
</script>

<style scoped>
.box{
  width:100%;
  height:auto;
  background-color:white;
  margin:1% 0%;
  padding:4% 3%;
  border-radius: 20%;
  display:inline-block;
}
.removeButton{
  background-color:skyBlue;
  width:20%;
  height:auto;
  padding:0% 1%;
  margin:0% 2%;
  float:right;
  cursor:pointer;
  color:white;
  border-width: 3px;
  border-radius: 20%;
  cursor:pointer;
  border-color: skyblue;
  border-style: solid;
  font-size: 1.2vw;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  height: auto;
}

.removeButton:hover {opacity: 0.75}
.accountLink{
  text-decoration: none;
  color:black;
  font-size: 1.2vw
}
</style>

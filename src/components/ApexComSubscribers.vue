<template id="subscribers list design">
<div class="list" id="subscribers list">
  <!-- <h3 v-if="this.subscribersList==0" >there is nothing to show </h3> -->
  <div id="subscribers box" class="box" v-for="(subscriber,index) in subscribersList" :key="subscriber.id">
    <!-- <img width="100%" height="100%" class="image" :src="image" /> -->
    <router-link class="accountLink" :to="{name:'UserProfile' , params: {userName:subscriber.userName}}"> {{subscriber.userName}}</router-link>
    <button id="remove button" class="removeButton" v-on:click="blockUser(subscriber,index)">BLOCK</button>
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
  props:['ApexComName'],
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
      var data = AllServices.blockSubscriber(userName,this.ApexComName);
      if(data){
      this.subscribersList.splice(index, 1);
      }
      else{
        console.log(error);
      }
    },
      getsubscribers(){
      this.subscribersList= AllServices.getSubscribers(this.ApexComName);
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
  border-radius: 8px;
  display:inline-block;
}
.removeButton{
  background-color:skyBlue;
  width:auto;
  height:auto;
  padding:1% 1%;
  margin:-1% 2%;
  float:right;
  cursor:pointer;
  color:white;
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
}

.removeButton:hover {opacity: 0.75}
.accountLink{
  text-decoration: none;
}
</style>

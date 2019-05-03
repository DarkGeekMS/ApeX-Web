<template id="subscribers list design">
<div id="subscriberslist">
  <h4 v-show="subscribersList.length ==0" >there is nothing to show </h4>
  <div v-show="subscribersList.length !==0" id="subscribers box" class="box" v-for="(subscriber,index) in subscribersList" :key="subscriber.id">
    <div class="name">
    <router-link class="accountLink" :to="{name:'UserProfile' , params: {userName:subscriber.username}}"> {{subscriber.username}}</router-link>
      </div>
    <button id="removebutton" class="removeButton" v-on:click="blockUser(subscriber.id,index)">block</button>
  </div>
</div>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'
import { EventBus } from '../main.js'
import swal from 'sweetalert'
/**
 * @vue-data {JWT} [token='']  user Token
 * @vue-data {array}   subscribersList - list of community subscribers
 * @vue-prop  {string} apexComId - community ID
 */

export default {
  props:['apexComId'],
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
    blockUser:function(userid,index)
    {
      console.log(userid+'blooock');
      console.log(this.apexComId);
      AllServices.blockSubscriber(userid,this.apexComId).then((data) =>{
        console.log(data.state);
      if(data.state=='Blocked'){
        swal('Blocked');
      this.subscribersList.splice(index, 1);
      }
      else{
        swal('sorry something went wrong');
      }
      })
    },
    /**
    * get the list of subscribers to this community
    */
      getsubscribers(){
        AllServices.getSubscribers(this.apexComId).then((data) =>{
          console.log(data.subscribers);
        this.subscribersList=data.subscribers;
      })
    }
  },
  mounted()
  {
  this.getsubscribers();
  EventBus.$on('changeSubscribers', data => {
     console.log('event ya basha');
         this.getsubscribers();
    });
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.box{
  width:100%;
  height:auto;
  background-color:white;
  margin:1% 0%;
  padding:4% 3%;
  border-radius: 20%;
  display:inline-block;
}
#removebutton{
  background-color:skyBlue;
  width:20%;
  height:auto;
  padding:1%;
  margin:2% 2%;
  float:right;
  cursor:pointer;
  color:white;
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

.removeButton:hover {opacity: 0.75;}
.accountLink{
  text-decoration: none;
  font-size: 16px;
  
}
.name{
  width:50%;
  margin:0% 0%;
  padding: 3% 0%;
  float:left;
  display: inline;
}
</style>

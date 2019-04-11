<template id="subscribers list design">
<div class="list" id="subscribers list">
  <div id="subscribers box" class="box" v-for="(subscriber,index) in SubscribersList" :key="subscriber.id">
    <a id="subscribers account link" class="accountLink" href="#userAccount">{{subscriber}}</a>
    <button id="remove button" class="removeButton" v-on:click="blockUser(subscriber,index)">Remove</button>
  </div>
 
</div>
</template>

<script>
import axios from 'axios'
import {globalStore} from '../main.js'
import {AllServices} from '../MimicServices/AllServices.js'

export default {
  props:['ApexComName'],
  data () {
    return {

      token:this.$localStorage.get('token'),
      SubscribersList:[]
    }
  },
  methods:
  {
    blockUser:function(userName,index)
    {
      var data = AllServices.deleteSubscriber(userName,this.ApexComName);
      if(data){
      this.SubscribersList.splice(index, 1);
      }
      else{
        console.log(error);
      }
    
    //   axios.post('http://localhost/block', {
    //     ApexCom_id:this.ApexComName,
    //     user_id:userName,
    //     token:this.token
    //   })
    //   .then(function (response) {
    //     if(response){
    //       alert('done :)');
          
    //       }
    //     else{
    //       alert('something wrong happened try again later');
    //       }
    //       })
    //   .catch(function (error) {
    //   console.log(error);
    //   });
    },
      getsubscribers(){
      this.SubscribersList= AllServices.getSubscribers(this.ApexComName);
      }
  },
  mounted()
  {
  //   axios.get('http://localhost/get_subscribers', {
  //   params: {
  //     ApexCom_id :this.ApexComName,
  //     token:this.token
  //   }
  // })
  // .then(function (response) {
  //   this.SubscribersList=response.data;
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

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
}
.removeButton{
  background-color:skyBlue;
  width:auto;
  height:auto;
  border-radius: 8px;
  padding:1% 1%;
  margin:-1% 2%;
  float:right;
  cursor:pointer;
}
.accountLink{
  text-decoration: none;
}
</style>

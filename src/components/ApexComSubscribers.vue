<template id="subscribers list design">
<div class="list" id="subscribers list">
  <div id="subscribers box" class="box" v-for="(subscriber,index) in SubscribersList" :key="subscriber.id">
    <a id="subscribers account link" class="accountLink" href="#userAccount">{{subscriber.userName}}</a>
    <button id="remove button" class="removeButton" v-on:click="blockUser(subscriber.userName,index)">Remove</button>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import {globalStore} from '../main.js'
export default {
  data () {
    return {
      ApexComName:'',
      token:globalStore.token,
      SubscribersList:[{userName:'omar'},{userName:'omar'},{userName:'omar'}
      ]
    }
  },
  methods:
  {
    blockUser:function(userName,index)
    {
      axios.post('http://localhost/block', {
        ApexCom_id:this.ApexComName,
        user_id:userName,
        token:this.token
      })
      .then(function (response) {
        if(response){
          alert('done :)');
          this.SubscribersList.splice(index, 1);
          }
        else{
          alert('something wrong happened try again later');
          }
          })
      .catch(function (error) {
      console.log(error);
      });
    },
  },
  mounted()
  {
    axios.get('http://localhost/get_subscribers', {
    params: {
      ApexCom_id :this.ApexComName,
      token:this.token
    }
  })
  .then(function (response) {
    this.SubscribersList=response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
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

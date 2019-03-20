<template id="subscribers list design">
<div class="list" id="subscribers list">
  <div id="subscribers box" class="box" v-for="subscriber in SubscribersList" :key="subscriber.id">
    <a id="subscribers account link" class="accountLink" href="#userAccount">{{subscriber.userName}}</a>
    <button id="remove button" class="removeButton" v-on="block(subscriber.userName)">Remove</button>
  </div>
</div>
</template>

<script>
import {globalStore} from '../main.js'
export default {
  data () {
    return {
      ApexComName:'',
      token:globalStore.token,
      SubscribersList:[]
    }
  },
  methods:
  {
    blockUser:function(userName)
    {
      axios.post('http://localhost/block', {
        ApexCom_id:this.ApexComName,
        user_id:userName,
        token:this.token
      })
      .then(function (response) {
        if(response){
          alert('done :)');}
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
.list{
  width:810px;
  height:auto;
  background-color:#eee;
  margin:124px 15px;
  padding:15px 15px;
  border-radius: 8px;
}
.box{
  
  width:770px;
  height:auto;
  background-color:white;
  margin:20px 5px;
  padding:15px 15px;
}
.removeButton{
  background-color:skyBlue;
  width:auto;
  height:auto;
  border-radius: 8px;
  padding:12px 12px;
  margin:10px 20px;
  float:right;
  cursor:pointer;
}
.accountLink{
  text-decoration: none;
}
</style>

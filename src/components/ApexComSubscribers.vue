<template id="subscribers list design">
<div id="subscriberslist">
  <h4 v-show="subscribersList.length ==0" >there is nothing to show </h4>
  <div v-show="subscribersList.length !==0" id="subscribers box" class="box" v-for="(subscriber,index) in subscribersList" :key="subscriber.id">
    <div class="name">
    <router-link class="accountLink" :to="{name:'UserProfile' , params: {userName:subscriber.username}}"> {{subscriber.username}}</router-link>
    <div class="img">
        <img style="box-sizing: border-box; border-radius: 50%;" class="image" :src="subscriber.image" > 
      </div>
      </div>
    <button id="removebutton" class="removeButton" v-on:click="blockUser(subscriber.id,index)">block</button>
  </div>
</div>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'

/**
 * @vue-data {JWT} [token='']  user Token
 * @vue-data {array}   subscribers - list of community subscribers
 * @vue-prop  {string} apexComName - community name
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
      console.log(userid);
      console.log(this.apexComId);
      var data = AllServices.blockSubscriber(userid,this.apexComId);
      if(data){
      this.subscribersList.splice(index, 1);
      }
    },
      getsubscribers(){
        AllServices.getSubscribers(this.apexComId).then((data) =>{
          console.log(data);
        this.subscribersList=data.subscribers;
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
  /* height: auto; */
  overflow: hidden;
}

.removeButton:hover {opacity: 0.75;}
.accountLink{
  text-decoration: none;
  /* color:black; */
  font-size: 16px;
  
}
img{
  width: 100%;
}
.img{
  width: 10%;
  display:inline;
  margin-top:-2%;
  margin-bottom:0%;
  margin-right:2%;
  margin-left:0%;
  float: left;
}
.name{
  width:50%;
  margin:0% 0%;
  padding: 3% 0%;
  float:left;
  display: inline;
}
</style>

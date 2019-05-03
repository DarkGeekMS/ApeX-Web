<template id="block design">
<div id="block">
  <h4 v-show="blockList.length ==0" >there is nothing to show </h4>
  <div v-show="blockList.length !=0" id="box" class="box" v-for="(user,index) in blockList" :key="user.id">
    <div class="name">
    <p style="font-size:16px">{{user.username}}</p>
      </div>
    <button id="button" v-on:click="unblockUser(user.id,index)">unblock</button>
  </div>
</div>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'
import swal from 'sweetalert'
/**
 * @vue-data {JWT} [token='']  user Token
 * @vue-data {array}   blockList - list of blocked user
 * @vue-prop  {string} userName - user name
 */

export default {
  props:['userName'],
  data () {
    return {
      token:this.$localStorage.get('token'),
      blockList:[]
    }
  },
  methods:
  {
    /**
    * used to unblock user
    */
    unblockUser:function(name,index){
    AllServices.blockUser(name).then((data) =>{
     if(data){
         swal('this user have been unblocked successfully');
         this.blockList.splice(index, 1);
       }
       else{
         swal('sorry something worng happend');
       }
       })
    },
    /**
    * returns the block list of certian user
    */
    getBlockList:function(){
        AllServices.getBlockList().then((data) =>{
          console.log(data);
        this.blockList=data.blocklist;
      })
    }
  },
  mounted()
  {
  this.getBlockList();
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
#block{
  width:60%;
  margin-top:4%;
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
#button{
  background-color:white;
  width:20%;
  height:auto;
  padding:1%;
  margin:2% 2%;
  float:right;
  cursor:pointer;
  color:skyBlue;
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

#button:hover {opacity: 0.75;}
.name{
  width:50%;
  margin:0% 0%;
  padding: 3% 0%;
  float:left;
  display: inline;
}
</style>

<template>
<div class="list">
  <div class="box" v-for="sub in SubscribersList">
    <a  href="#userAccount">{{sub.userName}}</a><button>Remove</button>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      ApexComName:'',
      userID:'',
      SubscribersList:[]
    }
  },
    created()
    {
      this.$http.get('http://localhost/get_subscribers',{params: {ApexCom_id :this.ApexComName, 
      userID:this.userID}}).then(function(response){
        //missing
    });
  },
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
.box h3{
  display:inline-block;
}
button{
  background-color:DodgerBlue;
  width:auto;
  height:auto;
  border-radius: 8px;
  padding:12px 12px;
  margin:10px 20px;
  float:right;
}
</style>

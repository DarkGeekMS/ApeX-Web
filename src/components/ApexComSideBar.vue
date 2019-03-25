<template>
    <div class="sidebar" >

      <div class="content" id="descroption box">
       <h3 class="Header" id="descroption box header">Community Details</h3>
       <h3 id="Apex-com-name">r/{{apexComName}}</h3>
       <p id="subscribers Count">{{subscribersCount}} subscribers</p>
       <p id="description">{{description}}</p>
       <button id="subscribebutton" class="button" type="button" v-on:click="subscribe()">subscribe</button>
       <button id="create post button" class="button" type="button">create post</button>
       </div>

       <div class="content" id="rules box">
      <h3 class="Header" id="rules box header">Rules</h3>
      <ol id="rules list">
        <li id="rules list item" v-for="rule in rules" :key="rule.id">{{rule}}</li>
      </ol>
    </div>

    <div class="content" id="moderators box">
      <h3 class="Header" id="moderators box header">Moderators</h3>
      <ul style="list-style-type:none;" id="moderators list">
        <li id="moderators list item" v-for="moderator in moderators" :key="moderator.id">
          <a id="moderators account link" class="AccountLink" href="#link">{{moderator.userName}}</a>
        </li>
      </ul>
    </div>
      </div>
</template>


<script>
export default {
    props:{
       apexComName:String
       },
    data(){
        return{
            token:globalStore.token,
      description:'',
      moderators:[],
      rules:[],
      subscribersCount: ''
        }
    },
    methods:
  {
    subscribe:function()
    {
      axios.post('http://localhost/subscribe', {
      ApexCom_id:this.ApexComName,
      Token:this.token
      })
      .then(function (response) {
        if(response){
          console.log('done :)');
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
    axios.get('http://localhost/about', {
    params: {
      ApexCom_id :this.ApexComName,
      Token:this.token
    }
  })
  .then(function (response) {
    this.rules = response.rules;
    this.subscribersCount = response.subscribersCount;
    this.description = response.description;
    this.moderators=response.moderators;
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}
</script>

<style scoped>

.sidebar{
  width:25%;
  height: auto;
  margin:6% 6%;
  background-color:white;
  float:right;
}
.Header{
  background-color: skyBlue;
  padding:12px;
  margin: 0;
  height:auto;
  border-radius: 8px;
}
.button{
  width:150px;
  margin:5px 70px;
  background-color:skyBlue;
  padding: 7px;
  border-width: 0px;
  border-radius: 8px;
  cursor:pointer;
}
.content
{
  margin:20px 4px;
  background-color:#eee;
  border-radius: 8px;
  padding:1px;
}
</style>



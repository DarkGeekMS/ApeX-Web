import Vue from 'vue'
import axios from 'axios'

export  const MimicApexCom =new Vue({
  methods:{
    getAbout: function(mimic,ApexComName){

      if(mimic){
  var about={
    rules:['rule1','rule2','rule3'],
    subscribersCount:78,
    description:'this is just the mimic server',
    moderators:['moderator1','moderator2','moderator3'],
  }
  return about
}
else {
  axios.get('http://34.66.175.211/about', {
    params: {
      ApexCom_id :ApexComName,
      Token:this.token
    }
  })
  .then(function (response) {
    // this.rules = response.rules;
    // this.subscribersCount = response.subscribersCount;
    // this.description = response.description;
    // this.moderators=response.moderators;
return response;
  })
  .catch(function (error) {
   // console.log(error);
  });
    }
  },

  getSubscribers: function(mimic,ApexComName){
    if(mimic){
var subscribersList=[
  'subscriber1','subscriber2','subscriber3'
]
return subscribersList
}
else {
 axios.get('http://34.66.175.211/get_subscribers', {
    params: {
      ApexCom_id :ApexComName,
      token:this.token
    }
  })
  .then(function (response) {
    this.Subscribers=response.data;
  })
  .catch(function (error) {
    // console.log(error);
  });
  }
}

}
})

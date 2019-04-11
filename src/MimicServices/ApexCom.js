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
  axios.get('http://localhost/about', {
    params: {
      ApexCom_id :ApexComName,
      Token:this.token
    }
  })
  .then(function (response) {
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
 axios.get('http://localhost/get_subscribers', {
    params: {
      ApexCom_id :ApexComName,
      Token:this.$localStorage.get('token')
    }
  })
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    // console.log(error);
  });
  }
},

deleteSubscriber: function(mimic,userName,ApexComName){
  if(mimic){

return true;
}            
else {
  axios.post('http://localhost/block', {
        ApexCom_id:ApexComName,
        user_id:userName,
        Token:this.$localStorage.get('token')
      })
      .then(function (response) {
        return response
          })
      .catch(function (error) {
      // console.log(error);
      });
    }
    },

deleteApexCom: function(mimic,apexComName){
      if(mimic){
    
    return true;
    }            
    else {
      axios.post('http://localhost/del_ac', {
         ApexCom_id:apexComName,
         Token:this.$localStorage.get('token')
        })
        .then(function (response) {
          return response
            })
        .catch(function (error) {
        // console.log(error);
        });
}
    },
subscribe: function(mimic,apexComName){
      if(mimic){
        return true;
    }            
    else {
      axios.post('http://localhost/subscribe', {
      ApexCom_id:apexComName,
      Token:this.$localStorage.get('token')
      })
      .then(function (response) {
        return response
      })
      .catch(function (error) {
      // console.log(error);
      });
}
    },
  }
})
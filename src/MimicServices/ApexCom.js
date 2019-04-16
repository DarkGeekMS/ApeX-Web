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
    moderators:[{userName:'moderator1'},
    {userName:'moderator1'},
    {userName:'moderator1'},
    {userName:'moderator1'}],
  }
  var promise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve(about);
    }, 300);
  });
return promise;
}
else {
  return axios.post('http://35.232.3.8/api/about', {
      ApexCom_id :ApexComName,
      Token:this.token
  })
  .then(response=> {
    return response.data;
   })
  .catch(function (error) {
    alert(error)
    // console.log(error);
  });
    }
  },

getSubscribers: function(mimic,ApexComName){
    if(mimic){
var subscribersList=[
  {userName:'subscriber1'},
  {userName:'subscriber2'},
  {userName:'subscriber3'},
  {userName:'subscriber4'}
]
return subscribersList;
}
else {
 axios.post('http://35.232.3.8/api/get_subscribers', {

      ApexCom_id :ApexComName,
      Token:this.$localStorage.get('token')

  })
  .then(response=> {
    return response.data;
   })
  .catch(function (error) {
    alert(error)
    // console.log(error);
  });
  }
},

BlockSubscriber: function(mimic,userName,ApexComName){
  if(mimic){

return true;
}
else {
  axios.post('http://35.232.3.8/api/block', {
        ApexCom_id:ApexComName,
        user_id:userName,
        Token:this.$localStorage.get('token')
      })
      .then(function (response) {
        return response
          });
      // .catch(function (error) {
      // // console.log(error);
      // });
    }
    },

deleteApexCom: function(mimic,apexComName){
      if(mimic){

    return true;
    }
    else {
      axios.delete('http://35.232.3.8/api/del_ac',{params: {
         ApexCom_id:apexComName,
         Token:this.$localStorage.get('token')
    }
        })
        .then(function (response) {
          return response;
            });
        // .catch(function (error) {
        // // console.log(error);
        // });
}
    },
subscribe: function(mimic,apexComName){
      if(mimic){
        return true;
    }
    else {
      axios.post('http://35.232.3.8/api/subscribe', {
      ApexCom_id:apexComName,
      Token:this.$localStorage.get('token')
      })
      .then(function (response) {
        return response
      });
      // .catch(function (error) {
      // // console.log(error);
      // });
}
    },
  }
})

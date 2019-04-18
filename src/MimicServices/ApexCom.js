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
    moderators:[
      {userName:'moderator1'},
    {userName:'moderator1'},
    {userName:'moderator1'},
    {userName:'moderator1'}
  ],
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

getSubscribers: function(mimic,apexComName){
    if(mimic){
var subscribersList=[
  {userName:'subscriber1'},
  {userName:'subscriber2'},
  {userName:'subscriber3'},
  {userName:'subscriber4'}
]
var promise = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(subscribersList);
  }, 300);
});
return promise;
}
else {
 return axios.post('http://35.232.3.8/api/get_subscribers', {

      ApexCom_id :apexComName,
      Token:this.$localStorage.get('token')

  })
  .then(response => {
    return response.data;
   })
  .catch(function (error) {
    alert(error)
    // console.log(error);
  });
  }
},

blockSubscriber: function(mimic,userName,apexComName){
  if(mimic){

return true;
}
else {
  axios.post('http://35.232.3.8/api/block', {
        ApexCom_id:apexComName,
        user_id:userName,
        Token:this.$localStorage.get('token')
      })
      .then(function (response) {
        return response;
          })
          .catch(function (error) {
            alert(error)
            // console.log(error);
          });
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
            })
            .catch(function (error) {
              alert(error)
              // console.log(error);
            });
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
        return response;
      })
      .catch(function (error) {
        alert(error)
        // console.log(error);
      });
}
},
addOrDeleteModerator: function(mimic,userName,apexComName){
  if(mimic){
    return true;
  }
else {
   axios.post('http://localhost/api/add_moderator', {
        ApexCom_id:apexComName,
        user_id:userName,
        Token:this.$localStorage.get('token')
      })
      .then(function (response) {
        return response;
          })
          .catch(function (error) {
            alert(error)
            // console.log(error);
          });
    }
    },
reviewReports: function(mimic,apexComName){
      if(mimic){
        var report=[
          {post:{
          id:'555',
          posted_by:'Nourhan',
          apex_id:'555',
          title:'dj',
          content:'Experience enjoyable JavaScript development with WebStorm. With smart code completion, safe refactoring, and first-class support for Node.js, Angular and React. Download free trial 😀😂🍔😍',
          locked:false,
          commenetnum:5,
          votes:9,
          img_name:'',
          video_url:'https://www.youtube.com/embed/Va0Rq147SRU'},
          reason:"It's threatening self-harm or suicide",
          id:8099,
        },
        // {comment:{
        //   content:'this is the review report mimic service',
        //   idx:9,
        //   level:1,
        //   parentIdx:67,
        //   parentID:9,
        //   ID:9,
        //   date:'march 9 2019'
        //   },
        //   reason:"It's personal and confidential information",
        // },
        ];
      
      var promise = new Promise(function(resolve) {
        setTimeout(function() {
          resolve(report);
        }, 300);
      });
      return promise;
    }
    else {
       return axios.post('http://localhost/api/report_action', {
            ApexCom_id:apexComName,
            Token:this.$localStorage.get('token')
          })
          .then(response => {
            return response.data;
           })
          .catch(function (error) {
            alert(error)
            // console.log(error);
          });
        }
        },
ignoreReport:function(mimic,apexComName){
  if(mimic){
    return true;
  }
  else{
            axios.post('http://localhost/api/report_action', {
            ApexCom_id:apexComName,
            Token:this.$localStorage.get('token')
          })
          .then(function (response) {
            return response;
              })
              .catch(function (error) {
                alert(error)
                // console.log(error);
              });
  }

}
  }
})

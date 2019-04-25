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
  image:'https://i.imgur.com/AMFz23O.jpg',
  }
  var promise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve(about);
    }, 300);
  });
return promise;
}
else {
  return axios.post(this.$localStorage.get('baseUrl') + 'api/about', {
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
  {userName:'subscriber1',
  image:'https://i.imgur.com/AMFz23O.jpg'},
  {userName:'subscriber2',
  image:'https://i.imgur.com/AMFz23O.jpg'},
  {userName:'subscriber3',image:'https://i.imgur.com/AMFz23O.jpg'},
  {userName:'subscriber4',image:'https://i.imgur.com/AMFz23O.jpg'}
]
var promise = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(subscribersList);
  }, 300);
});
return promise;
}
else {
 return axios.post(this.$localStorage.get('baseUrl') + 'api/get_subscribers', {

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
  axios.post('api/block', {
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
      axios.delete(this.$localStorage.get('baseUrl') + 'api/del_ac',{params: {
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
      axios.post(this.$localStorage.get('baseUrl') + 'api/subscribe', {
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
   axios.post(this.$localStorage.get('baseUrl') + 'api/add_moderator', {
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
        var report={
          reportedComment:[{post:{
            id:'333',
            posted_by:'Nada',
            apex_id:'333',
            title:'dj',
            content:'I love javascript ,vue ,html ,css 🐸🐸🐸',
            videolink:'',
            img:'https://i.ytimg.com/vi/inYarqDCCGA/maxresdefault.jpg',
            created_at:"2019-03-23 17:20:45",
            updates_at:null,
            apex_com_name:"health aware",
            post_writer_user:"Nada"},
            reason:"It's threatening self-harm or suicide",
          id:8099,
          comment:{
            user:'double',
            content:'this is the review report mimic service',
            idx:0,
            level:1,
            parentIdx:0,
            parentID:'o0',
            ID:'0-',
            // date:'march 9 2019'
            },
            userName:'nourhan'
        }],
        reportedpost:[
          {post:{
            id:'333',
            posted_by:'Nada',
            apex_id:'333',
            title:'dj',
            content:'I love javascript ,vue ,html ,css 🐸🐸🐸',
            videolink:'',
            img:'https://i.ytimg.com/vi/inYarqDCCGA/maxresdefault.jpg',
            created_at:"2019-03-23 17:20:45",
            updates_at:null,
            apex_com_name:"health aware",
            post_writer_user:"Nada"},
            reason:"It's threatening self-harm or suicide",
            id:8099,
            userName:'nourhan'
        },
        {post:{
          id:'555',
          posted_by:'Nada',
          apex_id:'555',
          title:'dj',
          content:'Experience enjoyable JavaScript development with WebStorm. With smart code completion, safe refactoring, and first-class support for Node.js, Angular and React. Download free trial 😀😂🍔😍',
          locked:false,
          commenets_count:5,
          votes:9,
          img:'',
          videolink:'https://www.youtube.com/embed/Va0Rq147SRU',
          created_at:"2019-03-23 17:20:45",
          updates_at:null,
          apex_com_name:"health care",
          post_writer_user:"double"

        },
          reason:"It's threatening self-harm or suicide",
          id:8099,
          userName:'nourhan'
      }
        ]};

      var promise = new Promise(function(resolve) {
        setTimeout(function() {
          resolve(report);
        }, 300);
      });
      return promise;
    }
    else {
       return axios.post(this.$localStorage.get('baseUrl') + 'api/report_action', {
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
            axios.post(this.$localStorage.get('baseUrl') + 'api/report_action', {
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

import Vue from 'vue'
import axios from 'axios'

export  const MimicApexCom =new Vue({
  methods:{
    getAbout: function(mimic,ApexComName){
      alert(ApexComName);
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
  getAboutGuest: function(mimic,ApexComName){
    alert(ApexComName+'serve');
    if(mimic){
var about={
  rules:['rule1','rule2','rule3'],
  subscribersCount:78,
  description:'this is just the mimic server',
  moderators:[
    {userName:'moderator1'},
  {userName:'moderator2'},
  {userName:'moderator3'},
  {userName:'moderator4'}
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
return axios.get(this.$localStorage.get('baseUrl') + 'api/about',{params: {
    ApexCom_id :ApexComName,}
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
  alert(apexComName);
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
  alert(apexComName);
  alert(userName);
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
  alert(apexComName);
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
  alert(apexComName);
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
  alert(apexComName);
  alert(userName);
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
  alert(apexComName);
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
ignoreReport:function(mimic,reportID){
  alert(reportID);
  if(mimic){
    return true;
  }
  else{
            axios.post(this.$localStorage.get('baseUrl') + 'api/report_action', {
            repoer_id:reportID,
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
searchU: function(mimic)
{
  if(mimic ==  true)
  {
    if(this.$localStorage.get('searchModerator') == 'Ayat' )
    {
       var result = [
         [{
            apex_id:1,
            content:'Experience enjoyable JavaScript development with WebStorm. With smart code completion, safe refactoring, and first-class support for Node.js, Angular and React. Download free trial 😀😂🍔😍',
            id:1,
            postedby:'AyatMostafa',
            title:'posttitle',
            votes:150
          },],
         [{
           id:1,
           name:'AyatMostafa',
           numOfMeb: 0,
           avatar:'https://b.thumbs.redditmedia.com/ooMk56fzWZCheEvB0mfTlsKk7P86TEu_BylqPJ-36EQ.png',
           description: "Aww, cripes. I didn't know I'd have to write a description. How many words is that so far, like a hundred? Soooo, yeah. Mildly interesting stuff.",
         },],
         [{
            id:1,
            name:'ayatmostafa',
            avatar:'https://i.ytimg.com/vi/inYarqDCCGA/maxresdefault.jpg?fbclid=IwAR2SOsEdCa3c9PC8x4UaNgKXEynjKgq-R_LlYn9WMsCrutAjjdCpXOZkCOs',
            karma:10
          },
          {
            id:1,
            name:'ayatmostafa',
            avatar:'https://i.ytimg.com/vi/inYarqDCCGA/maxresdefault.jpg?fbclid=IwAR2SOsEdCa3c9PC8x4UaNgKXEynjKgq-R_LlYn9WMsCrutAjjdCpXOZkCOs',
            karma:10
          },
          {
            id:1,
            name:'ayatmostafa',
            avatar:'https://i.ytimg.com/vi/inYarqDCCGA/maxresdefault.jpg?fbclid=IwAR2SOsEdCa3c9PC8x4UaNgKXEynjKgq-R_LlYn9WMsCrutAjjdCpXOZkCOs',
            karma:10
          },
          {
            id:1,
            name:'ayatmostafa',
            avatar:'https://i.ytimg.com/vi/inYarqDCCGA/maxresdefault.jpg?fbclid=IwAR2SOsEdCa3c9PC8x4UaNgKXEynjKgq-R_LlYn9WMsCrutAjjdCpXOZkCOs',
            karma:10
          }
        ]
      ]
      var promise1 = new Promise(function(resolve){
        setTimeout(function() {
          resolve(result);
        }, 300)
        });
      return result
    }
    else{
      return 'Sorry, there were no results for'
    }
  }
  else
  {
    axios.post(this.$localStorage.get('baseUrl') + 'api/search',{
    query: this.$localStorage.get('searchModerator'),
    token: this.$localStorage.get('token')
    }).then(response => {
      var result= response.data;
      return result
    }).catch(error => {
      return error
    })
  }
},
  }
})

import Vue from 'vue'
import axios from 'axios'

export  const MimicApexCom =new Vue({
  methods:{
    getAbout: function(mimic,ApexComName, baseUrl){
      // alert(ApexComName);
      if(mimic){
  var about={
    "contributers_count": 2,
    moderators: [
        
          {"userID": "t2_3",
          username:'nourhan',},
          {"userID": "t2_3",
          username:'nourhan',},
          {"userID": "t2_3",
          username:'nourhan',},
          {"userID": "t2_3",
          username:'nourhan'}
    ],
    subscribers_count: 0,
    name: "New dawn",
    description: "The name says it all.",
    rules: "NO RULES",
  avatar:'https://i.imgur.com/AMFz23O.jpg',
  }
  var promise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve(about);
    }, 300);
  });
return promise;
}
else {
  return axios.post(baseUrl + 'api/AboutApexcom', {
      ApexCom_ID :ApexComName,
      token:this.$localStorage.get('token')
  })
  .then(response=> {
    return response.data;
   })
  .catch(function (error) {
    // console.log(error);
  });
    }
  },
  getAboutGuest: function(mimic,ApexComName, baseUrl){
    if(mimic){
var about={
  "contributers_count": 2,
  "moderators": [
      {
          "userID": "t2_3",
          username:'nourhan',},
          {"userID": "t2_3",
          username:'nourhan',},
          {"userID": "t2_3",
          username:'nourhan',},
          {"userID": "t2_3",
          username:'nourhan'}
  ],
  subscribers_count: 0,
  name: "New dawn",
  description: "The name says it all.",
  rules: "NO RULES",
avatar:'https://i.imgur.com/AMFz23O.jpg',
banner:'https://i.imgur.com/AMFz23O.jpg',
};

var promise = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(about);
  }, 300);
});
return promise;
}
else {
return axios.get(baseUrl + 'api/AboutApexcom',{params: {
    ApexCom_ID :ApexComName,}
})
.then(response=> {
  console.log(response.data);
  console.log(ApexComName);
  return response.data;
 })
.catch(function (error) {
  alert(error)
  // console.log(error);
});
  }
},

getSubscribers: function(mimic,apexComName, baseUrl){
  // alert(apexComName);
    if(mimic){
var subscribers=[
  {
      id: "t2_1017",
      fullname: null,
      username: "ms16",
      avatar: "https://i.imgur.com/AMFz23O.jpg",
  }
]
var promise = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(subscribers);
  }, 300);
});
return promise;
}
else {
 return axios.post(baseUrl + 'api/GetSubscribers', {
      ApexCommID :apexComName,
      token:this.$localStorage.get('token')
  })
  .then(response => {
    return response.data;
   })
  .catch(function (error) {
    // console.log(error);
  });
  }
},

blockSubscriber: function(mimic,userName,apexComName, baseUrl){
  // alert(apexComName);
  // alert(userName);
  if(mimic){
    var data=[
      {
          state: "blocked",
      }
    ]
    var promise = new Promise(function(resolve) {
      setTimeout(function() {
        resolve(data);
      }, 300);
    });
    return promise;
}
else {
        return axios.post(baseUrl + 'api/ApexcomBlockUser', {
        ApexCom_id:apexComName,
        user_id:userName,
        token:this.$localStorage.get('token')
      })
      .then(response => {
        return response.data;
       })
      .catch(function (error) {
        // console.log(error);
      });
    }
    },

deleteApexCom: function(mimic,apexComName, baseUrl){
  // alert(apexComName);
      if(mimic){

    return true;
    }
    else {
      return axios.delete(baseUrl + 'api/DeleteApexcom',{
        params: {
         Apex_ID:apexComName,
         token:this.$localStorage.get('token')
    }
        })
        .then(response => {
          return response.data;
         })
        .catch(function (error) {
          // console.log(error);
        });
}
    },
subscribe: function(mimic,apexComName, baseUrl){
        if(mimic){
          var data=[
            {
                state: "subscribed",
            }
          ]
          var promise = new Promise(function(resolve) {
            setTimeout(function() {
              resolve(data);
            }, 300);
          });
          return promise;
    }
    else {
      return axios.post(baseUrl + 'api/Subscribe', {
      ApexCom_ID:apexComName,
      token:this.$localStorage.get('token')
      })
      .then(response => {
        return response.data;
       })
      .catch(function (error) {
        // console.log(error);
      });
}
},
addOrDeleteModerator: function(mimic,userName,apexComName, baseUrl){
  if(mimic){
    var data=[
      {
          state: "blocked",
      }
    ]
    var promise = new Promise(function(resolve) {
      setTimeout(function() {
        resolve(data);
      }, 300);
    });
    return promise;
  }
else {
       return axios.post(baseUrl + 'api/AddModerator', {
        ApexComID:apexComName,
        UserID:userName,
        token:this.$localStorage.get('token')
      })
      .then(response => {
        return response.data;
       })
      .catch(function (error) {
        // console.log(error);
      });
    }
    },
reviewReports: function(mimic,apexComName, baseUrl){
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
       return axios.post(baseUrl + 'api/ReviewReports', {
            ApexCom_id:apexComName,
            token:this.$localStorage.get('token')
          })
          .then(response => {
            console.log(response+'server');
            return response.data;
           })
          .catch(function (error) {
            // console.log(error);
          });
        }
        },
ignoreReport:function(mimic,userID,reportID, baseUrl){
  // alert(reportID);
  if(mimic){
    return true;
  }
  else{
           return axios.post(baseUrl + 'api/IgnoreReport', {
            user_id:userID,
            reported_id:reportID,
            token:this.$localStorage.get('token')
          })
          .then(response => {
            return response.data;
           })
          .catch(function (error) {
            // console.log(error);
          });
  }

},
searchU: function(mimic, query,baseUrl)
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
      return promise1
    }
    else{
      return 'Sorry, there were no results for'
    }
  }
  else
  {
    console.log(query+'mk');
        return axios.get(baseUrl + 'api/Search',{
        params: {
          query: query,
          token: this.$localStorage.get('token')
        }
        }).then(response => {
          return response.data;
        }).catch(error => {
          return error
        })
      
  }
},
  }
})

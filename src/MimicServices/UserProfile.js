import Vue from 'vue'
import axios from 'axios'

export  const MimicUserProfile =new Vue({
  methods:{
    getUserInfo: function(mimic, baseUrl){
      if(mimic){
  var profileInfo={
      userName:'',
      image:'https://i.imgur.com/AMFz23O.jpg',
      karma:9,
      saved:[{},{}],
      hidden:[{},{}],
      personalPosts:[{},{}],

      cakeDay:'March 15, 2019',
  }
    var promise = new Promise(function(resolve) {
        setTimeout(function() {
          resolve(profileInfo);
        }, 300);
      });
return promise;
}
else {
    return axios.post(baseUrl + 'api/ProfileInfo',{
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
getUserInfoById: function(mimic,userName, baseUrl){

    if(mimic){
var profileInfo={
    userName:'',
    image:'https://i.imgur.com/AMFz23O.jpg',
    karma:9,
    personalPosts:[{},{}],
    cakeDay:'March 15, 2019',
    fullName:'nourhan'
}
var promise = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(profileInfo);
  }, 300);

});
return promise;
}
else {
    return axios.post(baseUrl + 'api/UserData',  {
      Token:this.$localStorage.get('token'),
      userid:userName
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
reviewReports: function(mimic,userName, baseUrl){
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
        img:'',
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
        user_id:userName,
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
getUserType: function(mimic, baseUrl){

  if(mimic){
  var info={
      id: "t2_2",
        fullname: null,
        email: "111@gmail.com",
        username: "MohamedRamzy123",
        avatar: " ",
        karma: 1,
        notification: 1,
        type: 1,
        created_at: "2019-03-18 09:36:09",
        updated_at: "2019-03-18 09:36:09"
    }

    var promise = new Promise(function(resolve) {
      setTimeout(function() {
        resolve(info);
      }, 300);
    });
    return promise;
}
else {
    return axios.post(baseUrl + 'api/Me', {
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

deleteUser: function(mimic,userName, baseUrl){

  if(mimic){
    return true;
}
else {
    axios.delete(baseUrl + 'api/DeleteUser',{params: {
    userID:userName,
    Token:this.$localStorage.get('token')}
})
.then(function (response) {
  return response;
})
.catch(function (error) {
  alert(error);
  // console.log(error);
});
}
},
getUserInfoByIdforGuest:function(mimic,userName, baseUrl){
  // alert(userName);
  if(mimic){
    var profileInfo={
        userName:'',
        image:'https://i.imgur.com/AMFz23O.jpg',
        karma:9,
        personalPosts:[{},{}],
        cakeDay:'ِjune 15, 2019',
        fullName:''
    }
    var promise = new Promise(function(resolve) {
      setTimeout(function() {
        resolve(profileInfo);
      }, 300);
    });
    return promise;
    }
    else {
        return axios.get(baseUrl + 'api/UserData', {
        params: {
          userid:userName
        }
      })
      .then(response=> {
        return response.data;
       })
      .catch(function (error) {
        alert(error);
        // console.log(error);
      });
      }
    },
blockUser:function(mimic,userName, baseUrl){
  if(mimic){
    var promise = new Promise(function(resolve) {
      setTimeout(function() {
        resolve('The user has been blocked successfully');
      }, 300);
    });
      return promise;
    }
    else {
      return axios.post(baseUrl + 'api/BlockUser', {
        userid:userName,
        Token:this.$localStorage.get('token')
    })
    .then(response=> {
      return response.data;
     })
    .catch(function (error) {
      alert(error);
      // console.log(error);
    });
    }
},
getBlockList(mimic, baseUrl){
  if(mimic){
    var info=[{userName:'user1'},{userName:'user1'},{userName:'user1'},{userName:'user1'},{userName:'user1'},{userName:'user1'}]

      var promise = new Promise(function(resolve) {
        setTimeout(function() {
          resolve(info);
        }, 300);
      });
      return promise;
  }
  else {
      return axios.post(baseUrl + 'api/BlockList', {
               token:this.$localStorage.get('token')
              })
              .then(response=> {
                return response.data;
               })
              .catch(function (error) {
                // console.log(error);
              });
}
}
  }
});

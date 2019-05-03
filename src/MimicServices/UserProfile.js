import Vue from 'vue'
import axios from 'axios'

export  const MimicUserProfile =new Vue({
  methods:{
    getUserInfo: function(mimic, baseUrl){
      if(mimic){
  var profileInfo={
      userName:'',
      image:'',
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
          token:this.$localStorage.get('token')
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
  userData: {
    username: "King",
    fullname: "Martin Luther King",
    karma: 1,
    avatar: ""
},
posts: [
    {
        id: "t3_6",
        posted_by: "t2_4",
        apex_id: "t5_2",
        title: "Anything",
        img: null,
        videolink: null,
        content: null,
        locked: 0,
        created_at: "2019-03-23 17:20:35",
        updated_at: null,
        current_user_vote: 0,
        current_user_saved_post: false,
        votes: 0,
        comments_count: 0,
        apex_com_name: "New dawn",
        post_writer_username: "King"
    }
]
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
      username:userName,
      token:this.$localStorage.get('token'),

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

getUserType: function(mimic, baseUrl){

  if(mimic){
  var info={
    "user": {
      "id": "t2_2",
      "fullname": null,
      "email": "111@gmail.com",
      "username": "MohamedRamzy123",
      "avatar": "https://i.imgur.com/AMFz23O.jpg",
      "karma": 1,
      "notification": 1,
      "type": 1,
      "created_at": "2019-03-18 09:36:09",
      "updated_at": "2019-03-18 09:36:09"
  }
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
    var promise1 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(true);
      }, 300);
    });
    return promise1;
}
else {
   return axios.delete(baseUrl + 'api/DeleteUser',{params: {
    UserID:userName,
    token:this.$localStorage.get('token')}
})
.then(response=> {
  return response.data;
 })
.catch(function (error) {
  // console.log(error);
});
}
},
getUserInfoByIdforGuest:function(mimic,userName, baseUrl){
  // alert(userName);
  if(mimic){
    var profileInfo={
      userData: {
        username: "King",
        fullname: "Martin Luther King",
        karma: 1,
        avatar: "https://i.imgur.com/AMFz23O.jpg"
    },
    posts: [
        {
            id: "t3_6",
            posted_by: "t2_4",
            apex_id: "t5_2",
            title: "Anything",
            img: null,
            videolink: null,
            content: null,
            locked: 0,
            created_at: "2019-03-23 17:20:35",
            updated_at: null,
            current_user_vote: 0,
            current_user_saved_post: false,
            votes: 0,
            comments_count: 0,
            apex_com_name: "New dawn",
            post_writer_username: "King"
        }
    ]
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
          username:userName
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
        blockedID:userName,
        token:this.$localStorage.get('token')
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
    var info=[{username:'user1',id:'t2'},{username:'user1',id:'t2'},{username:'user1',id:'t2'},{username:'user1',id:'t2'},{username:'user1',id:'t2'},{username:'user1',id:'t2'}]

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

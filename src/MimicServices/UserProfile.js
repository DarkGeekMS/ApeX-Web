import Vue from 'vue'
import axios from 'axios'

export  const MimicUserProfile =new Vue({
  methods:{
    getUserInfo: function(mimic){
      if(mimic){
  var profileInfo={
      userName:'',
      image:'https://i.imgur.com/AMFz23O.jpg',
      karma:9,
      saved:[{},{}],
      hidden:[{},{}],
      reports:[{},{}],
      personalPosts:[{},{}],
      blockList:[
        {userName:'user1'},
  {userName:'user2'},
  {userName:'user3'},
  {userName:'user4'}
      ],
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
    return axios.post('http://35.232.3.8/api/info',{
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
getUserInfoById: function(mimic,userName){

    if(mimic){
var profileInfo={
    userName:'',
    image:'https://i.imgur.com/AMFz23O.jpg',
    karma:9,
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
    return axios.post('http://35.232.3.8/api/user_data',  {
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

getUserType: function(mimic){

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
    return axios.post('http://35.232.3.8/api/me', {
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

deleteUser: function(mimic,userName){

  if(mimic){
    return true;
}
else {
    axios.delete('http://35.232.3.8/api/del_user',{params: {
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
getUserInfoByIdforGuest:function(mimic,userName){
  if(mimic){
    var profileInfo={
        userName:'',
        image:'https://i.imgur.com/AMFz23O.jpg',
        karma:9,
        personalPosts:[{},{}],
        cakeDay:'ِjune 15, 2019',
    }
    var promise = new Promise(function(resolve) {
      setTimeout(function() {
        resolve(profileInfo);
      }, 300);
    });
    return promise;
    }
    else {
        return axios.get('http://35.232.3.8/api/user_data', {
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
blockUser:function(mimic,userName){
  if(mimic){
    var promise = new Promise(function(resolve) {
      setTimeout(function() {
        resolve('The user has been blocked successfully');
      }, 300);
    });
      return promise;
    }
    else {
      return axios.post('http://localhost/api/block_user', {
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
}

  }
});

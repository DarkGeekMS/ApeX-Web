import Vue from 'vue'
import axios from 'axios'

export  const MimicUserProfile =new Vue({
  methods:{
    getUserInfo: function(mimic){
      if(mimic){
  var profileInfo={
      userName:'',
      image:'',
      karma:9,
      saved:[{},{}],
      hidden:[{},{}],
      reports:[{},{}],
      personalPosts:[{},{}],
  }
  return profileInfo
}
else {
    axios.get('http://34.66.175.211/info', {
        params: {
          Token:this.$localStorage.get('token')
        }
      })
      .then(function (response) {
          return response
      })
      .catch(function (error) {
        //   alert('sorry something went wrong')
        // console.log(error);
      });
    }
  },
  getUserInfoById: function(mimic,userName){

    if(mimic){
var profileInfo={
    userName:'',
    image:'',
    karma:9,
    personalPosts:[{},{}],
}
return profileInfo
}
else {
    axios.get('http://34.66.175.211/user_data', {
    params: {
      Token:this.$localStorage.get('token'),
      userid:userName
    }
  })
  .then(function (response) {
      return response
  })
  .catch(function (error) {
    // console.log(error);
  });
  }
},

getUserType: function(mimic){

  if(mimic){
return 1
}
else {
    axios.get('http://localhost/me', {
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


deleteUser: function(mimic,userName){

  if(mimic){
return true
}
else {
  axios.post('http://localhost/del_user', {
    userID:userName,
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
getUserInfoByIdforGuest:function(userName){
  if(mimic){
    var profileInfo={
        userName:'',
        image:'',
        karma:9,
        personalPosts:[{},{}],
    }
    return profileInfo;
    }
    else {
        axios.get('http://localhost/user_data', {
        params: {
          userid:userName
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
}

  }
})




// axios.get('http://localhost/me', {
//          Token:this.token
//         })
//           .then(function (response) {
//             if(response.ID ==2){
//           return true;
//           }
//         else{
//           return false;
//           }
//           })
//       .catch(function (error) {
//       console.log(error);
//       });

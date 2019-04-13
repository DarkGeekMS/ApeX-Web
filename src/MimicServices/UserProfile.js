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
  return profileInfo;
}
else {
    axios.post('http://35.232.3.8/api/info',{
          Token:this.$localStorage.get('token')
      })
      .then(function (response) {
          return response;
      });
      // .catch(function (error) {
      //   //   alert('sorry something went wrong')
      //   // console.log(error);
      // });
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
return profileInfo;
}
else {
    axios.post('http://35.232.3.8/api/user_data',  {
      Token:this.$localStorage.get('token'),
      userid:userName
  })
  .then(function (response) {
      return response;
  });
  // .catch(function (error) {
  //   // console.log(error);
  // });
  }
},

getUserType: function(mimic){

  if(mimic){
return 1;
}
else {
    axios.post('http://35.232.3.8/api/me', {
             Token:this.$localStorage.get('token')
            })
              .then(function (response) {
                return response;
              });
          // .catch(function (error) {
          // // console.log(error);
          // });
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
});
// .catch(function (error) {
//   // console.log(error);
// });
}
},
getUserInfoByIdforGuest:function(mimic,userName){
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
        axios.get('http://35.232.3.8/api/user_data', {
        params: {
          userid:userName
        }
      })
      .then(function (response) {
          return response;
      });
      // .catch(function (error) {
      //   // console.log(error);
      // });
      }
    }

  }
});

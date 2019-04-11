import Vue from 'vue'
import axios from 'axios'

export  const MimicUserProfile =new Vue({
  methods:{
    getUserInfo: function(mimic){
      if(mimic){
  var profileInfo={
      userName:'historiaAckerman',
      picture:'',
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
          Token:this.token
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
    userName:'historiaAckerman',
    picture:'',
    karma:9,
    personalPosts:[{},{}],
}
return profileInfo
}
else {
    axios.get('http://34.66.175.211/user_data', {
    params: {
      Token:this.token,
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
  }
})

import Vue from 'vue'
import axios from 'axios'

export  const MimicUserSettings =new Vue({
  methods:{
    deleteAcc: function(mimic,Pass){
      if(mimic==true){

        if(pass!="")
        {
          var promise1 = new Promise(function(resolve, reject) {
            setTimeout(function() {
              resolve('delete acc successfully');
            }, 300);
          });
return promise1;
}
                else{
                  var promise1 = new Promise(function(resolve, reject) {
                    setTimeout(function() {
                      resolve('enter Password first');
                    }, 300);
                  });
        return promise1;
                }
              }
else {
  return axios.delete(this.$localStorage.get('baseUrl') + 'api/del_user',
 {
    UserID:this.$localStorage.get('userName') ,
    token:this.$localStorage.get('token'),
    passwordConfirmation:Pass
    }).then(response => {
      return response.data;
    })
 }
},

getPrefs:function (mimic) {
  if(mimic==true)
  {
    data:{
username:'mmamama'
email:'dsads'
fullname:'nja'
avatar:''
notication:1

    }
    var promise1 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(data);
      }, 300);
    });
return promise1;

  }
  else{

    return axios.get(this.$localStorage.get('baseUrl') + 'api/prefs',
   {
      UserID:this.$localStorage.get('userName') ,
      token:this.$localStorage.get('token')
      }).then(response => {
        return response.data;
      })
  }
},

updatePrefs:function (mimic,email,avatar,username) {
  if(mimic==false){
    return axios.post(this.$localStorage.get('baseUrl') + 'api/updateprefs',
   {
     token:this.$localStorage.get('token'),
    email:email,
    avatar:avatar,
    username:username
      }).then(response => {
        return response.data;
      })

  }
},

changePass:function (mimic,password,withCode,username,key) {
  if(mimic==false){
    return axios.patch(this.$localStorage.get('baseUrl') + 'api/changepassword',
   {
     token:this.$localStorage.get('token'),
    password:password,
    withCode:withCode,
    username:username,
    key:key
      }).then(response => {
        return response.data;
      })

  }
}


  }
})

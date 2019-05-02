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
  return axios.delete(baseUrl + 'api/DeleteUser',
 {
    UserID:this.$localStorage.get('userName') ,
    token:this.$localStorage.get('token'),
    passwordConfirmation:Pass
    }).then(response => {
      return response.data;
    })
 }
},

getPrefs:function (mimic, baseUrl) {
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
    return axios.post(baseUrl + 'api/GetPreferences',
   {
      token:this.$localStorage.get('token')
      }).then(response => {
        return response.data;
      })
  }
},

updatePrefs:function (mimic,fd, baseUrl) {
  if(mimic==false){
    console.log(fd)
    return axios.post(baseUrl + 'api/UpdatePreferences',fd).then(response => {
        console.log(response)
        return response.data;
      })

  }
},

changePass:function (mimic,password,username,key, baseUrl) {
  if(mimic==false){
    return axios.patch(baseUrl + 'api/ChangePassword',
   {
     token:this.$localStorage.get('token'),
     withCode:0,
    password:password,
    username:username,
    key:key
      }).then(response => {
        return response.data;
      })

  }
}


  }
})

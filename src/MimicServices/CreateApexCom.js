import Vue from 'vue'
import axios from 'axios'

export  const MimicCreateApexCom =new Vue({
  methods:{
    CreateApexCom: function(mimic,Name,Description,Rules,Avatar,Banner){
      if(mimic==true){

        if(Name!=''&& Description!=''&& Rules!='')
        {
          var promise1 = new Promise(function(resolve, reject) {
            setTimeout(function() {
              resolve(true);
            }, 300);
          });
return promise1;
}
                else{
                  var promise1 = new Promise(function(resolve, reject) {
                    setTimeout(function() {
                      resolve(false);
                    }, 300);
                  });
        return promise1;
                }
              }
else {
  return axios.post(this.$localStorage.get('baseUrl') + 'api/site_admin',
 {
    name:Name ,
    description: Description,
    rules:Rules,
    avatar:Avatar,
    banner:Banner,
    token:this.$localStorage.get('token')
    }).then(response => {
      return response.data;
    })
 }
    }
  }
})

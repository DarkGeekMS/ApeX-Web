import Vue from 'vue'
import axios from 'axios'

export  const MimicCreateApexCom =new Vue({
  methods:{
    CreateApexCom: function(mimic,fd, baseUrl){
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
  return axios.post(baseUrl + 'api/SiteAdmin',fd).then(response => {
      return response.data;
    })
 }
    }
  }
})

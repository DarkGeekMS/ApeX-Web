import Vue from 'vue'
import axios from 'axios'
import swal from 'sweetalert';
export  const MimicCreatePosts =new Vue({
  data(){
return {
token:'1',



}

  },
  methods:{
    getApexSubscribed: function(mimic, baseUrl)
    {
      if(mimic ==  true)
      {
        var names = [
          {
            id : '1',
            name : 'apex1'
          },
          {
            id : '2',
            name : 'apex2'
          }];
        var promise1 = new Promise(function(resolve){
            setTimeout(function() {
              resolve(names);
            }, 300)
        });
        return promise1
      }
      else
      {
        if(this.$localStorage.login){
         return axios.post(baseUrl + 'api/GetApexcoms', {
        token:this.$localStorage.get('token'),
        general:0
        }).then(response => {

          return response.data;

        }).catch(function () {

           return false
        });
      }
      else{
        return axios.get(baseUrl + 'api/ApexComs', {

        }).then(response => {

          return response.data;

        }).catch(function () {
           return false
        });
      }

      }

    },
    submitPost: function(fd, mimic, baseUrl){
      console.log(fd)

      if(mimic){
         if(this.$localStorage.login){



         var promise1 = new Promise(function(resolve) {
          setTimeout(function() {
            resolve(true);
          }, 300);
        });
        return promise1;
      }
       promise1 = new Promise(function(resolve) {
          setTimeout(function() {
            resolve(false);
          }, 300);
        });
      }
else {

  if((fd.get('video_url')==null) &&(fd.get('img_name')==null)){
   return axios.post(baseUrl + "api/SubmitPost", fd)
    .then(response=>{

      swal({
        title: "Submitted Successfully!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
      return  response.data;
       }).catch(function (){
      swal("Oops!", "Something went wrong!", "error");
      return false;
   })


  }
  else if(fd.get('img_name')==null){
   return axios.post(baseUrl + "api/SubmitPost", fd)
    .then(response=>{

      swal("Post Submitted successfully", "You clicked the button!", "success");
      return response.data;
   }).catch(function (){
    swal("Oops!", "Something went wrong!", "error");
     return false;
   })

  }
  else if(fd.get('video_url')==null){
   return axios.post(baseUrl + "api/SubmitPost", fd)
    .then(response=>{
      swal("Post Submitted successfully", "You clicked the button!", "success");
      return response.data;
   }).catch(function (){
     swal("Oops!", "Something went wrong!", "error");
     return false;
   })

  }
  else {
  return  axios.post(baseUrl + "api/SubmitPost", fd)
    .then(response=>{
      swal("Post Submitted successfully", "You clicked the button!", "success");
      return response.data;
   }).catch(function (){
    swal("Oops!", "Something went wrong!", "error");
     return false;
   })
        }
      }
    }
  }
})

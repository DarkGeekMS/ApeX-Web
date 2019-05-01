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
    submitPost: function(fd, mimic, baseUrl){

      if(mimic){
         if(this.$localStorage.login){

         //   return true;

         var promise1 = new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(true);
          }, 300);
        });
        return promise1;
      }
      var promise1 = new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(false);
          }, 300);
        });
      }
else {
  if((fd.get('video_url')==null) &&(fd.get('img_name')==null)){
    axios.post(baseUrl + "api/SubmitPost", fd)
    .then(response=>{
      swal('Post Submitted successfully');
      return  response.data;
       }).catch(function (error){
      swal("Oops!", "Something went wrong!", "error");
      return false;
   })


  }
  else if(fd.get('img_name')==null){
    axios.post(baseUrl + "api/SubmitPost", fd)
    .then(response=>{
      swal('Post Submitted successfully');
      return response.data;
   }).catch(function (error){
    swal("Oops!", "Something went wrong!", "error");
     return false;
   })

  }
  else if(fd.get('video_url')==null){
    axios.post(baseUrl + "api/SubmitPost", fd)
    .then(response=>{
      swal('Post Submitted successfully');
      return response.data;
   }).catch(function (error){
     swal("Oops!", "Something went wrong!", "error");
     return false;
   })

  }
  else {
    axios.post(baseUrl + "api/SubmitPost", fd)
    .then(response=>{
      swal('Post Submitted successfully');
      return response.data;
   }).catch(function (error){
    swal("Oops!", "Something went wrong!", "error");
     return false;
   })
        }
      }
    }
  }
})

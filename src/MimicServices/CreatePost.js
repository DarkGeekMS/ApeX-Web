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

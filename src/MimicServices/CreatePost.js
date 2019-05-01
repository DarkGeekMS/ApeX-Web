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
    submitPost:function(apexComId,title,bodyPost,imgName,videoUrl, isLocked,mimic, baseUrl){
      
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
  if((imgName==null) &&(videoUrl==null)){
  

    return axios.post(baseUrl + "api/SubmitPost",{
      
      ApexCom_id:apexComId,
      title:title, 
      token:this.$localStorage.get('token'),
      body:bodyPost,
      isLocked:isLocked
      

   },
   {
     headers:{"Content-Type": "application/json"
             }}).then(response=>{
     
      swal('Post Submitted successfully');
      
      return  response.data;
      
    
       }).catch(function (error){
       
    swal("Oops!", "Something went wrong!", "error");

        alert(error);
     return false;
   })


  }
  else if(imgName==null){
    axios.post(baseUrl + "api/SubmitPost",{
      
      ApexCom_id:apexComId,
      title:title, 
      token:this.$localStorage.get('token'),
    
      video_url:videoUrl,
      isLocked:isLocked


   },
   {headers:{  "Content-Type": "application/json"}
    }).then(response=>{
      
    
      swal('Post Submitted successfully');
      
      return response.data;
     

 
   }).catch(function (){
    swal("Oops!", "Something went wrong!", "error");
    
    
     return false;
   })

  }
  else if(videoUrl==null){

    axios.post(baseUrl + "api/SubmitPost",{
      
      ApexCom_id:apexComId,
      title:title, 
      token:this.$localStorage.get('token'),
      img_name:imgName,
      isLocked:isLocked

    
   
   

   },{headers:{  'Content-Type': 'application/x-www-form-urlencoded'}
  }).then(response=>{
      
     
      swal('Post Submitted successfully');
      return response.data;
     

 
   }).catch(function (){
   
     swal("Oops!", "Something went wrong! الصوره ", "error");
 
 
  
     return false;
   })

  }
  else {
    axios.post(baseUrl + "api/SubmitPost",{
      
      ApexCom_id:apexComId,
      title:title, 
      token:this.$localStorage.get('token'),
      body:bodyPost,
      img_name:imgName,
      video_url:videoUrl,
      isLocked:isLocked

   }).then(response=>{
      
      swal('Post Submitted successfully');
     
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

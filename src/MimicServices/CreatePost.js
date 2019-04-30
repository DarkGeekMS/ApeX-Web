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
    submitPost: function(apexComId,title,bodyPost,imgName,videoUrl, isLocked,token,mimic, baseUrl){
      
      if(mimic){
         if(this.$localStorage.login){

            return true;

         }
            return false;
                }

else {
  if((imgName==null) &&(videoUrl==null)){
    axios.post(baseUrl + "api/SubmitPost",{
      
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

      return true;
       }).catch(function (error){
    swal("Oops!", "Something went wrong!", "error");
 
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
      
      return true;
     

 
   }).catch(function (error){
    swal("Oops!", "Something went wrong!", "error");
    
    // console.log(videoUrl);
     return false;
   })

  }
  else if(videoUrl==null){
    var formData = new FormData();
    var imagefile = imgName;
    formData.append("image", imagefile.files[0]);
    axios.post(baseUrl + "api/SubmitPost",{
      
      ApexCom_id:apexComId,
      title:title, 
      token:this.$localStorage.get('token'),
      
      img_name:formData,
      isLocked:isLocked

    
   
   

   },{headers:{  'Content-Type': 'application/x-www-form-urlencoded'}
  }).then(response=>{
      
    
      swal('Post Submitted successfully');
      return true;
     

 
   }).catch(function (error){
    
    swal("Oops!", "Something went wrong!", "error");
  //console.log(imgName);
 // console.log(apexComId);
  //console.log(imgName);
  //console.log(isLocked);
 
  
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
      return true;
    
 
   }).catch(function (error){
    swal("Oops!", "Something went wrong!", "error");
  
     return false;
   })


        }
      }
    }
  
  }


})

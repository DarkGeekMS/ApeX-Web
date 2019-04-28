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
         console.log(title);
         console.log(apexComId);
         console.log(bodyPost);
         console.log(isLocked);
         console.log(videoUrl);
         console.log(imgName);
         console.log(token);
        console.log(error);
         alert(error);
         return false;
       })
      
 }
    }
  
  }


})

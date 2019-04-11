import Vue from 'vue'
import axios from 'axios'
export  const MimicCreatePosts =new Vue({
  methods:{
    submitPost: function(mimic){
      if(mimic===true){
  
            return true;
       
                }
else {
    axios.post( "http://127.0.0.1:8000/api/submit_post"  ,{

        ApexCom_id:this.apexComId,
        _token:this.$localStorage.get('token'),
        body:this.bodyPost,
        img_name:this.imgName,
        video_url:this.videoUrl,
        isLocked:this.isLocked

 


       }).then(function(response){

         if(response){
           //TODO it will  display your Post which you have created soon 
          
         }
       })
 }
    }
  }


})

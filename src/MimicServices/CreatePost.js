import Vue from 'vue'
import axios from 'axios'

export  const MimicCreatePosts =new Vue({
  data(){
return {
token:'1',



}

  },
  methods:{
    submitPost: function(videoUrl,apexComId,bodyPost,imgName,token,isLocked,mimic){
      
      if(true){
         if(token=='1' && apexComId=='1'){
            return true;
         }
            return false;
                }

else {
    axios.post( this.$localStorage.get('baseUrl') + "api/submit_post"  ,{

        ApexCom_id:apexComId,
        _token:token,
        body:bodyPost,
        img_name:imgName,
        video_url:videoUrl,
        isLocked:isLocked




       }).then(function(response){

         if(response){
           //TODO it will  display your Post which you have created soon

         }
       })
 }
    },
    getApexNames:function(){
    if(mimic==true){
        var names=["apexname1","apexname2","apexname3","apexname4"];
     
        var promise = new Promise(function(resolve) {
          setTimeout(function() {
            resolve(names);
          }, 300);
        });
      return promise;
      
    }
    else{
     // axios.get();
      
///TODO COMPLETE THE REQUEST 
    }

    }
  }


})

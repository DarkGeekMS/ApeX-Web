import Vue from 'vue'
import axios from 'axios'

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
    axios.post(baseUrl + "api/SubmitPost"  ,{

        ApexCom_id:apexComId,
        title:title, 
        token:token,
        body:bodyPost,
        img_name:imgName,
        video_url:videoUrl,
        isLocked:isLocked




       },{
       headers: {
        "Content-Type": "application/x-www-form-urlencoded",

      }}
       ).then(function(response){

         if(response){
        
         return true;

         }
         return false;
       })
 }
    },
    getApexNames:function(mimic, baseUrl){
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

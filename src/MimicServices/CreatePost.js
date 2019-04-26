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
      
      if(mimic){
         if(this.$localStorage.login){
        
          // this.$router.push('/ShowCreatedPost');
       
            return true;
            
         }
            return false;
                }

else {
    axios.post( this.$localStorage.get('baseUrl') + "api/submit_post"  ,{

        ApexCom_id:apexComId,
        _token:token,
        body:bodyPost,
        avatar:imgName,
        video_url:videoUrl,
        isLocked:isLocked




       },{
       headers: {
        "Content-Type": "application/x-www-form-urlencoded",

      }}
       ).then(function(response){

         if(response){
          this.$router.push('/ShowCreatedPost');

         }
       })
 }
    },
    getApexNames:function(mimic){
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

import Vue from 'vue'
import axios from 'axios'
export  const MimicPosts=new Vue({

methods:{
Post(mimic===true){

if(mimic)








}
     save(request){
        if(request.token=="1" && request.ID=="1"){
    
            return true;
    
        }
        return false;
    
    
    },
    
    
     Hide(request){
        if(request.name=="1" && request.ID=="1"){
    
            return true;
        }
        return false;
    
    },
    
     vote(request){
        if(request.name=="1"  && request.ID=="1"){
    
            if(request.direction==1 || request.direction==-1 || request.direction==0){
    
                return 200;
            }
    
    
        }
    
    
    },
    
    
     deletePost(request){
        if(request.name=="1" && request.ID=="1"){
    
            return true;
    
    
        }
    
    
    }
    


}

})



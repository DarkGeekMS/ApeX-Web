import Vue from 'vue'
import axios from 'axios'
export  const MimicPost=new Vue({
methods:{

    save:function(token,ID,mimic){

        if(mimic){

                if(token=="1" && ID=="1"){

                    return true;

              }
                return false;


             }
             else{

                axios.post( "http://34.66.175.211/save",
                {
<<<<<<< HEAD
        
                    ID:ID,
                    token:token
        
        
=======

                    ID:this.PostId ,
                    token:this.$localStorage.get('token')


>>>>>>> 4ade68bf740a93cc796b63e6bd5e425923405eca
                }).then(response=>{
                  if(response){
                    alert('Post saved successfully');
                  }
                } ).catch(function ()
                {
                    // console.log(error);

                });
             }




                },

                deletePost:function(name,ID,mimic){
                    if(mimic){
                        if(name=="1" && ID=="1"){

                            return true;


                        }
                        return false;


                    }

            else{


<<<<<<< HEAD
                axios.post("http://localhost/DelComment",{
                    ID    : name,
                    token : ID
           
=======
                axios.post("http://34.66.175.211/DelComment",{
                    ID    : this.PostId,
                    token : this.$localStorage.get('token')

>>>>>>> 4ade68bf740a93cc796b63e6bd5e425923405eca
            }).then(response=>{
              if(response){
                this.Deleted = true;
                alert("Deleted successfully");
              }

            }).catch(function ()
            {
             //console.log(error);


              });
            }




            },
               Hide(name,ID,mimic){
                   if(mimic===true){
                    if(name==="1" && ID==="1"){

                        return true;
                    }
                    return false;

                   }
              else{

                axios.post("http://34.66.175.211/Hide",
                {
<<<<<<< HEAD
                    name    : name,
                    ID : ID
        
        
=======
                    name    : this.PostId,
                    ID : this.$localStorage.get('token')


>>>>>>> 4ade68bf740a93cc796b63e6bd5e425923405eca
                }).then(response => {
                  if(response){
                  alert("Hidden successfully");}
                }).catch(function ()
                {
                   //console.log(error);
                });

              }

            },
            upvote(name,ID,direction,mimic){
                if(mimic){
                    if(name=="1"  && ID=="1"){

                        if(direction==1){

                          return 200;
                       }

           }
           else{
            axios.post("http://34.66.175.211/vote",
            {

              ID       : ID,
              name     : name,
              direction:direction

            }).then(response => {
              if(response){
                 alert("upvote successfully");}

            }).catch(function ()
            {
         // console.log(error);

        });

              }
            }
            },

 downvote(name,ID,direction,mimic){
                if(mimic){
                    if(name=="1"  && ID=="1"){

                        if(direction==-1){

                          return 200;
                       }

           }
           else{
            axios.post("http://34.66.175.211/vote",
                   {


                    ID:ID,
                    name:name,
                    direction:direction

                  }).then(function (response) {
                    return response
                }).catch(function ()
                  {
                  // console.log(error);
                 });

              }







    }








},
defaultVote(name,ID,direction,mimic){
  if(mimic){
      if(name=="1"  && ID=="1"){
  
          if(direction==0){
 
            return 200;
         }

}
else{
axios.post("http://localhost/vote",
{

ID       : ID,
name     : name,
direction:direction

}).then(response => {
if(response){
   alert("upvote successfully");}

}).catch(function ()
{
// console.log(error);

});

}
}
}


}})

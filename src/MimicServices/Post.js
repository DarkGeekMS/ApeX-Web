import Vue from 'vue'
import axios from 'axios'
export  const MimicPosts=new Vue({

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

                    ID:this.PostId ,
                    token:this.$localStorage.get('token')


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

                deletePost(name,ID,mimic){
                    if(mimic){
                        if(name=="1" && ID=="1"){

                            return true;


                        }
                        return false;


                    }

            else{


                axios.post("http://34.66.175.211/DelComment",{
                    ID    : this.PostId,
                    token : this.$localStorage.get('token')

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
                    name    : this.PostId,
                    ID : this.$localStorage.get('token')


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

              ID       : this.$localStorage.get('token'),
              name     : this.PostId,
              direction:1

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


                    ID:this.$localStorage.get('token'),
                    name:this.PostId,
                    direction:0

                  }).then(function (response) {
                    return response
                }).catch(function ()
                  {
                  // console.log(error);
                 });

              }







    }








}


}})

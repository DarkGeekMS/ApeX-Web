import Vue from 'vue'
import axios from 'axios'
import swal from 'sweetalert';
export  const MimicPost=new Vue({
  
methods:{
  EditPost: function(ID,cont,mimic, baseUrl){
    if( mimic == true)
    {
        if(this.$localStorage.login)
        {
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
return promise1;
    }
    else
    {
        var self = this;
        return axios.patch(baseUrl + 'api/EditText', {
            name: ID,
            content: cont,
            token: this.$localStorage.get('token')

         })
       .then(function (response) {
           return true;
        })
       .catch(function (error) {
           return false;
        });
    }
},
    save:function(token,ID,mimic, baseUrl){
   
        if(mimic){
          if(this.$localStorage.login){
             if(token=="1" && ID=="1"){
                return true;
              }

                swal("Log In First!!");
                return false;
             }
            }

             else {
                axios.post(baseUrl + "api/Save",
             {
                ID:ID,
                token:token
            }).then(response => {
              swal('success :)');
            return true;
            }).catch(function(error){
               swal('wrong :(');
              return false;
            })
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

                axios.DELETE(baseUrl + "api/Delete",{
                    ID    : name,
                    token : ID

            }).then(response=>{

                this.Deleted = true;
                return true;


            }).catch(function (error)
            {
             return false;


              });
            }




            },
               Hide(name,ID,mimic, baseUrl){
              
                   if(mimic===true){

                    if(name==="1" && ID==="1"){

                        return true;
                    }
                    return false;

                   }
              else{

                axios.post(baseUrl + "api/Hide",
                {
                    name    : name,
                    token : ID

                }).then(response => {
                  
                  swal('Post Hidden Successfully :)');

                 return true;
                }).catch(function (error)
                {
                  swal("Oops!", "Something went wrong!", "error");
                   return false;
                });

              }

            },
            upvote(name,ID,direction,mimic, baseUrl){
             
                if(mimic){
                  if(this.$localStorage.login){

                    if(name=="1"  && ID=="1"){

                        if(direction==1){

                          return 200;
                       }

           }

                  }
                  alert("Log In First!!");
                  return false;}

           else{
            axios.post(baseUrl + "api/Vote",
            {

              token    : this.$localStorage.get('token'),
              name     : name,
              dir      :direction

            }).then(response => {
              
              swal('upvoted success :)');
              return response.data;
             
            }).catch(function (error)
            { 
            
              swal("Oops!", "Something went wrong!", "error");
              return false;

        });

              }
            }
            ,

 downvote(name,ID,direction,mimic, baseUrl){
   
                if(mimic){
                  if(this.$localStorage.login){
                    if(name=="1"  && ID=="1"){

                        if(direction==-1){

                          return 200;
                       }
                      }
                      return false;
           }
          }
           else{
            
            axios.post(baseUrl + "api/Vote",
                   {


                    token:this.$localStorage.get('token'),
                    name:name,
                    dir:direction

                  }).then(response=> {
                   
                    swal('downvoted success :)');
                    return response.data;
                }).catch(function (error)
                  {
                    swal("Oops!", "Something went wrong!", "error");
                
                 });

              }







    }
  

}
,
isLocked(ID,mimic, baseUrl){
    if( mimic == true)
    {
        if(this.$localStorage.login)
            return false;
        return true;
    }
    else
    {
        axios.post(baseUrl + 'api/Save', {
        ID: ID,
        token:this.$localStorage.get('token')
         })
       .then(function (response) {
           return true;
        })
       .catch(function (error) {
           return false;
        });
    }
}

})

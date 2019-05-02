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
       // var self = this;
        return axios.patch(baseUrl + 'api/EditText', {
            name: ID,
            content: cont,
            token: this.$localStorage.get('token')

         })
       .then(function (response) {
         swal('edited successfully :)');
         return response;
       
        })
       .catch(function (error) {
        swal("Oops!", "Something went wrong!", "error");
   
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
            //return true;
            return response;
            }).catch(function(error){
               swal('wrong :(');
              return false;
            })
             }
              },

  deletePost:function(postID,token,mimic,baseUrl){
                    if(mimic){
                        if(postID=="1" && token=="1"){

                            return true;


                        }
                        return false;


                    }

            else{
             
                axios.DELETE(baseUrl + "api/Delete",{
                    name    : postID,
                    token : token

            }).then(response =>{
            
                  swal('deleted successfully :)');
                  return response.data;
             


            }).catch(function ()
            {
            
             swal("Oops!", "Something went wrong!", "error");
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

                 return response.data;
                }).catch(function (error)
                {
                  swal("Oops!", "Something went wrong!", "error");
                   return false;
                });

              }

            },
  upvote(ID,points,upVoted,downVoted,mimic, baseUrl){
              if( mimic == true)
              {
                  var p;
                  p = points;
      
                  if(upVoted)
                  {
                      if(downVoted)
                      {
                          p++;
                      }
                      p++;
      
                  }
                  else
                      p--;
                  if(this.$localStorage.login)
                  {
                  var promise1 = new Promise(function(resolve, reject) {
                      setTimeout(function() {
                        resolve({votes:p});
                      }, 300);
                    });
      
          return promise1;
                  }
      
                      return false;
              }
              else
              {
             return axios.post(baseUrl + 'api/Vote', {
             name: ID,
             dir: 1,
             token: this.$localStorage.get('token')
              })
            .then(function (response) {
              swal('Successfully :)');
              return response.data;
      
             })
            .catch(function (error)
            {
              return {
                  done:false,
                  points:points
              }
             });
              }
             }
            ,

  downvote(ID,points,downVoted,upVoted,mimic, baseUrl){
  if( mimic == true)
  {
      var p = points;
      if(downVoted)
      {
          if(upVoted)
          {
              p--;
          }
          p--;
      }
      else
          p++;
          if(this.$localStorage.login)
          {
          var promise1 = new Promise(function(resolve, reject) {
              setTimeout(function() {
                resolve({votes:p});
              }, 300);
            });

  return promise1;
          }

              return false;
  }
  else
  {
 return axios.post(baseUrl + 'api/Vote', {
 name: ID,
 dir: -1,
 token: this.$localStorage.get('token')
  })
.then(function (response) {
  swal('Successfully :)');
  return response.data;

 })
.catch(function (error)
{ 
  return false;
 });
  }
},
  isLocked(ID,mimic, baseUrl){
    if( mimic == true)
    {
        if(this.$localStorage.login)
            return false;
        return true;
    }
    else
    {
        axios.post(baseUrl + 'api/LockPost', {
        ID: ID,
        token:this.$localStorage.get('token')
         })
       .then(function (response) {
           return response.data;
        })
       .catch(function (error) {
          
           return false;
        });
    }
}

}})

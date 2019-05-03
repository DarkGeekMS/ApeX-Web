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
        var promise1 = new Promise(function(resolve) {
            setTimeout(function() {
              resolve(true);
            }, 300);
          });
return promise1;
        }
         promise1 = new Promise(function(resolve) {
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
       .catch(function () {
        swal("Oops!", "Something went wrong!", "error");
   
           return false;
        });
    }
},
  save:function(token,ID,mimic, baseUrl){
   
        if(mimic){
          if(this.$localStorage.login){
              swal('success :)');
               return true;
          }
           else{   

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
           
            return response;
            }).catch(function(){
               swal('wrong :(');
              return false;
            })
             }
              },

  deletePost:function(postID,mimic,baseUrl){
                    if(mimic){
                        if(this.$localStorage.login){

                            return true;


                        }
                        return false;


                    }

            else{
             
                axios.delete(baseUrl + "api/Delete",{
                  params: {
                    name    : postID,
                    token :this.$localStorage.get('token')
                  }

            }).then(response =>{
            
              swal("Post deleted successfully", "You clicked the button!", "success");
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

                    if(this.$localStorage.login){
                      swal({
                        title: "Post Hidden Successfully!",
                        text: "You clicked the button!",
                        icon: "success",
                        button: "Aww yiss!",
                      });
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
                  swal({
                    title: "Post Hidden Successfully!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
               

                 return response.data;
                }).catch(function ()
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
                  var promise1 = new Promise(function(resolve) {
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
            .catch(function ()
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
          var promise1 = new Promise(function(resolve) {
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
.catch(function ()
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
        name: ID,
        token:this.$localStorage.get('token')
         })
       .then(response=> {
        swal('Successfully :)');
           return response.data;
        })
       .catch(function () {
        swal("Oops!", "Something went wrong!", "error");
       
           return false;
        });
    }
}

}})

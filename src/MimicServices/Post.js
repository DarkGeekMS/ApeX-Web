import Vue from 'vue'
import axios from 'axios'

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
        return axios.patch(baseUrl + 'api/edit', {
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

                alert("Log In First!!");
                return false;
             }
            }

             else {
                axios.post(baseUrl + "api/save",
             {
                ID:ID,
                token:token
            }).then(response => {
            return true;
            }).catch(function(error){

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

                axios.DELETE(baseUrl + "api/DelComment",{
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
                    ID : ID

                }).then(response => {
                 return true;
                }).catch(function (error)
                {
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
            axios.post(baseUrl + "api/vote",
            {

              ID       : ID,
              name     : name,
              direction:direction

            }).then(response => {
              return response.data;

            }).catch(function ()
            {
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
           else{
            axios.post(baseUrl + "api/vote",
                   {


                    ID:ID,
                    name:name,
                    direction:direction

                  }).then(response=> {
                    return response.data;
                }).catch(function ()
                  {
                  // console.log(error);
                 });

              }







    }








},
defaultVote(name,ID,direction,mimic, baseUrl){
  if(mimic){
      if(name=="1"  && ID=="1"){

          if(direction==0){

            return 200;
         }

}
else{
axios.post(baseUrl + "api/vote",
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
isLocked(ID,mimic, baseUrl){
    if( mimic == true)
    {
        if(this.$localStorage.login)
            return false;
        return true;
    }
    else
    {
        axios.post(baseUrl + 'api/save', {
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

}})

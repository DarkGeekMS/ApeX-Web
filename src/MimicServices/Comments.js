import Vue from 'vue'
import axios from 'axios'
import App from '../App.vue'

export  const MimicComment =new Vue({

  methods:{
    WriteComment: function(cont,parentID,mimic, baseUrl){
      if(mimic == true){

          if(this.$localStorage.login)
          {
            var promise1 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                  resolve({comment:parentID+"_Child"});
                }, 300);
              });
    return promise1;
          }
          alert("Log In First!!");
          return false;
      }
      else
      {
        return axios.post(baseUrl + 'api/comment', {
            content: cont,
            parent: parentID,
            token:this.$localStorage.get('token')
        })
           .then(response=> {
            return response.data;
           })
           .catch(function (error) {
            alert("Log In First!!");
            return false;

            });
         }
    },


    DeleteComment: function(ID,mimic, baseUrl){
        if( mimic == true)
        {
            if(this.$localStorage.login)
                return false;
            return true;
        }
        else
        {
            var self = this;
            axios.delete(baseUrl + 'api/delete', {
                data : {
                name: ID,
                token: self.$localStorage.get('token')
                }
                  })
                .then(function (response) {
                    return true;
                 })
                .catch(function (error) {
                    return false;
                 });
        }
    },
    SaveComment: function(ID,mimic, baseUrl){
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
    },
    EditComment: function(ID,cont,mimic, baseUrl){
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
    UpVoteComment:function(ID,points,upVoted,downVoted,mimic, baseUrl){
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
       return axios.post(baseUrl + 'api/vote', {
       name: ID,
       dir: 1,
       token: this.$localStorage.get('token')
        })
      .then(function (response) {
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
    },
    DownVoteComment:function(ID,points,downVoted,upVoted,mimic, baseUrl){
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
       return axios.post(baseUrl + 'api/vote', {
       name: ID,
       dir: -1,
       token: this.$localStorage.get('token')
        })
      .then(function (response) {
        return response.data;

       })
      .catch(function (error)
      {
        return false;
       });
        }
    }
  }
})

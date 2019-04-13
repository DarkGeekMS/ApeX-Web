import Vue from 'vue'
import axios from 'axios'
import App from '../App.vue'
export  const MimicComment =new Vue({
  
  methods:{
    WriteComment: function(content,parentID,mimic){
      if(mimic == true){

          if(this.$localStorage.login)
          {

              return {
                  CID:parentID+"_Child",
                  done:true
                };
          }
          return{
            CID:'',
            done:false
          };
      }
      else
      {
        axios.post('http://34.66.175.211/api/comment', {
            content: content,
            parent: parentID,
            token: this.$localStorage.get('token')
             })
           .then(function (response) {
            return {
                CID:response.data.id,
                done:true
              };

           })
           .catch(function (error) {
            return{
                CID:'',
                done:false
              };

            });     
         }
    },
    

    DeleteComment: function(ID,mimic){
        if( mimic == true)
        {
            if(this.$localStorage.login)
                return true;
            return false;
        }
        else
        {
            axios.delete('http://34.66.175.211/api/delete', {
                data : {
                name: ID,
                token: this.$localStorage.get('token')
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
    SaveComment: function(ID,mimic){
        if( mimic == true)
        {
            if(this.$localStorage.login)
                return true;
            return false;
        }
        else
        {
            axios.post('http://34.66.175.211/api/save', {
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
    EditComment: function(ID,content,mimic){
        if( mimic == true)
        {
            if(this.$localStorage.login)
                return true;
            return false;
        }
        else
        {
            axios.post('http://34.66.175.211/api/edit', {
                name: ID,
                content: content,
                ID: this.$localStorage.get('userName')

             })
           .then(function (response) {
               return true;
            })
           .catch(function (error) {
               return false;
            });
        }
    },
    UpVoteComment:function(ID,points,upVoted,downVoted,mimic){
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
                return {
                    done:true,
                    points:p
                }
                
                return {
                    done:false,
                    points:points
                }
        }
        else
        {
       axios.post('http://34.66.175.211/api/vote', {
       name: ID,
       dir: 1,
       token: this.$localStorage.get('token')
        })
      .then(function (response) {
        return {
            done:true,
            points:response.data.points
        }
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
    DownVoteComment:function(ID,points,downVoted,upVoted,mimic){
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
                return {
                    done:true,
                    points:p
                }
                
                return {
                    done:false,
                    points:points
                }
        }
        else
        {
       axios.post('http://34.66.175.211/api/vote', {
       name: ID,
       dir: -1,
       token: this.$localStorage.get('token')
        })
      .then(function (response) {
        return {
            done:true,
            points:response.data.points
        }
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

    LogIn: function(user,pass,mimic)
    {
      if(mimic == true)
      {
        if( user == this.username && pass == this.password)
        {
          this.$localStorage.set('userName',user);
          this.$localStorage.set('token', this.token);
          this.$localStorage.set('login', true);
          return true;
        }
        else
        {
          this.$localStorage.set('error','Incorrect username or password');
          return false;
        }
      }
      else{
        axios.post('http://34.66.175.211/api/sign_in', {
            username : user,
            password : pass
          }).then(response => {
             this.$localStorage.set('userName',user);
             this.$localStorage.set('token', response.data.token);
             this.$localStorage.set('login', true);
             return true
          }).catch(function (error) {
            this.$localStorage.set('error',error);
             return false
          });
      }
    }

  }
})

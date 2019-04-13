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
        axios.post('http://127.0.0.1:8001/api/comment', {
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
    

    LogOut: function(mimic){
        if( mimic == true)
        {
          if( this.$localStorage.get('token') )
            this.$localStorage.set('login', false);
            this.$localStorage.set('token', '');
            this.$localStorage.set('userName', '');
            this.$router.replace('/HomePage');
        }
        else{
          axios.post('http://34.66.175.211/api/sign_out',{
            token : this.$localStorage.get('token')
          }).then(response => {
            this.$localStorage.set('login', false);
            this.$localStorage.set('token', '');
            this.$localStorage.set('userName', '');
            this.$router.replace('/');
          }) 

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

























///////////////////////////////////////////////////////
function addComment(commentParent){
    return commentParent+"_Child";
}

function vote(comment,type,current){
    if(type=='Up' && current == 0)
        return 1;
    if(type=='Up' && current == 1)
        return 0;
     if(type=='Up' && current == -1)
        return 1;
    if(type=='Down' && current == 0)
        return -1;
    if(type=='Down' && current == 1)
        return -1;
     if(type=='Down' && current == -1)
        return 0;
    
}
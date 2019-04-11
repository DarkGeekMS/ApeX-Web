import Vue from 'vue'
import axios from 'axios'
import App from '../App.vue'
export  const MimicAuth =new Vue({
  data(){
    return {
      email: 'ayat.mostafa998@gmail.com',
      username: 'ayatmostafa',
      password: '0000000',
      token: '01'
    }
  },
  methods:{
    SignUp: function(user,pass,mimic){
      if(mimic == true){

        if( user == this.username && pass == this.password && this.email == this.$localStorage.get('emailVal'))
        {
          this.$localStorage.set('userName',user);
          this.$localStorage.set('token', this.token);
          this.$localStorage.set('login', true); 
          return true;
        }
        else
        {
          return false;
        }
      }    
      else 
      {
        axios.post('http://127.0.0.1:8000/api/sign_up', {
            email: email,
            username: user,
            password: pass
          }).then(response => {
            this.$localStorage.set('userName',user);
            this.$localStorage.set('token', response.data.token);
            this.$localStorage.set('login', true);
            return true;
          }).catch(function (error) {
            return false;
          });
      }
    },

    LogOut: function(mimic){
        if( mimic == true)
        {
          if( this.$localStorage.get('token') )
            this.$localStorage.set('login', false);
            this.$localStorage.set('token', '');
            this.$localStorage.set('userName', '')
        }
        else{
          axios.post('http://127.0.0.1:8000/api/sign_out',{
            token : this.$localStorage.get('token')
          }).then(response => {
            this.$localStorage.set('login', false);
            this.$localStorage.set('token', '');
            this.$localStorage.set('userName', '');
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
          return false;
        } 
      }
      else{
        axios.post('http://127.0.0.1:8000/api/Sign_in', {
            username : user,
            password : pass
          }).then(response => {
             this.$localStorage.set('userName',user);
             this.$localStorage.set('token', response.data.token);
             this.$localStorage.set('login', true);
             return true
          }).catch(function (error) {
             return false
          });
      }
    }

  }
})

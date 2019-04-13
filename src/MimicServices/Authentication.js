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
    SignUp: function(email,user,pass,mimic){
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
          this.$localStorage.set('error','That username is already taken');
          return false;
        }
      }
      else
      {
        var self = this;
        return axios.post('http://127.0.0.1:8000/api/sign_up', {
            email: email,
            username: user,
            password: pass
          }).then(response => {
            this.$localStorage.set('userName',user);
            this.$localStorage.set('token', response.data.token);
            this.$localStorage.set('login', true);
            return true;
          }).catch(function (error) {
            self.$localStorage.set('error','That username is already taken');
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
            this.$localStorage.set('userName', '');
        }
        else{
          return axios.post('http://127.0.0.1:8000/api/sign_out',{
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
        var self = this;
        return axios.post('http://127.0.0.1:8000/api/sign_in', {
            username : user,
            password : pass
          }).then(response => {
             this.$localStorage.set('userName',user);
             this.$localStorage.set('token', response.data.token);
             this.$localStorage.set('login', true);
             return true;
          }).catch(function (error) {
            self.$localStorage.set('error','Incorrect username or password');
             return false;
          });
      }
    },
    getApex: function(mimic)
    {
      if(mimic ==  true)
      {
         var names = [
          {
            id : 1,
            name : 'apex1'
          },
          {
            id : 2,
            name : 'apex2'
          }];
          return names
      }
      else
      {
        axios.get('http://34.66.175.211/api/Apex_names', {
          }).then(response => {
             return response.data
          }).catch(function (error) {
            this.$localStorage.set('error',error);
             return false
          });
      }
    }
  }
})

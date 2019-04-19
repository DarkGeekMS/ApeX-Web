import Vue from 'vue'
import axios from 'axios'
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
        return axios.post('http://127.0.0.1:8001/api/sign_up', {
            email: email,
            username: user,
            password: pass
          }).then(response => {
            this.$localStorage.set('userName',user);
            this.$localStorage.set('token', response.data.token);
            this.$localStorage.set('login', true);
            return true;
          }).catch(function () {
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
          return axios.post('http://127.0.0.1:8001/api/sign_out',{
            token : this.$localStorage.get('token')
          })
        }
    },

    LogIn: function(user,pass,mimic)
    {
      var self = this;

      if(mimic == true)
      {

        if( user == this.username && pass == this.password)
        {
          self.$localStorage.set('userName',user);
          self.$localStorage.set('token', this.token);
          self.$localStorage.set('login', true);
          return true;
        }
        else
        {
          self.$localStorage.set('error','Incorrect username or password');
          return false;
        }
      }
      else{
      //  var self = this;
        return axios.post('http://127.0.0.1:8001/api/sign_in', {
            username : user,
            password : pass
          }).then(response => {
             this.$localStorage.set('userName',user);
             this.$localStorage.set('token', response.data.token);
             this.$localStorage.set('login', true);
             return true;
          }).catch(function () {
            self.$localStorage.set('error','Incorrect username or password');
             return false;
          });
      }
    },

    ForgetPass: function(user,email,mimic)
    {
      if(mimic == true)
      {
        if( user == this.username && email == this.email)
        {
          return true;
        }
        else
        {
          this.$localStorage.set('error','Incorrect username or email');
          return false;
        }
      }
      else{
        var self = this;
        return axios.post('http://127.0.0.1:8001/api/mail_verify', {
            username : user,
            email : email
          }).then(response => {
             return true;
          }).catch(function () {
            self.$localStorage.set('error','Username is not found');
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
        var promise1 = new Promise(function(resolve){
            setTimeout(function() {
              resolve(names);
            }, 300)
        });
        return promise1
      }
      else
      {
        return axios.get('http://35.232.3.8/Apex_names', {
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

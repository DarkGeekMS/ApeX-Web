import Vue from 'vue'
import axios from 'axios'
export  const MimicAuth =new Vue({
  data(){
    return {
      email: 'ayat.mostafa998@gmail.com',
      username: 'ayatmostafa',
      password: '0000000',
      token: '01',
      code: '1234',
    }
  },
  methods:{
    SignUp: function(email,user,pass,mimic, baseUrl){
      if(mimic == true){

        if( user == this.username && pass == this.password && email == this.email)
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
        return axios.post(baseUrl + 'api/SignUp', {
            email: email,
            username: user,
            password: pass
          }).then(response => {
            this.$localStorage.set('userName',user);
            this.$localStorage.set('token', response.data.token);
            this.$localStorage.set('login', true);
            return true;
          }).catch(function (error) {
            self.$localStorage.set('error',error.response.data.error);
            return false;
          });
      }
    },

    LogOut: function(mimic, baseUrl){
        if( mimic == true)
        {
          if( this.$localStorage.get('token') )
          {
            this.$localStorage.set('login', false);
            this.$localStorage.set('token', '');
            this.$localStorage.set('userName', '');
          }
        }
        else{
          axios.post(baseUrl + 'api/SignOut',{
            token : this.$localStorage.get('token')
          }).then(response =>{
            if(response.data.token == null)
            {
              this.$localStorage.set('login', false);
              this.$localStorage.set('token', '');
              this.$localStorage.set('userName', '');
            }
          })
        }
    },

    LogIn: function(user,pass,mimic, baseUrl)
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
        return axios.post(baseUrl + 'api/SignIn', {
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

    ForgetPass: function(user,email,mimic, baseUrl)
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
        return axios.post(baseUrl + 'api/MailVerification', {
            username : user,
            email : email
          }).then(response => {
            if(response.data.msg === "Email sent successfully")
            {
             return true;
            }
          }).catch(function () {
             self.$localStorage.set('error','Username is not found');
             return false;
          });
      }
    },
    forgetPass2: function(code,user,mimic, baseUrl)
    {
      if(mimic == true)
      {
        if( code == this.code && user == this.username )
        {
          return true;
        }
        else
        {
          this.$localStorage.set('error','Invalid code');
          return false;
        }
      }
      else{
        var self = this;
        return axios.post(baseUrl + 'api/CheckCode', {
            code : code,
            username: user
          }).then(response => {
            if( response.data.authorized == true)
            {
              return true;
            }
          }).catch(function () {
            self.$localStorage.set('error','Invalid code');
            return false;
          });
      }
    },
    forgetPass3: function(pass,user,code,mimic, baseUrl)
    {
      if(mimic == true)
      {
        return true;
      }
      else{
        var self = this;
        return axios.post(baseUrl + 'api/ChangePassword', {
            withcode: true,
            password : pass,
            username: user  ,
            key: code  ,
          }).then(response => {
            if(response.data.changed == true)
            {
              return true;
            }    
          }).catch(function () {
            self.$localStorage.set('error','Invalid password');
            return false;
          });
      }
    },

    ForgetUser: function(pass,email,mimic, baseUrl)
    {
      if(mimic == true)
      {
        if( pass == this.password && email == this.email)
        {
          return true;
        }
        else
        {
          this.$localStorage.set('error','There was an error sending your request. Please try again');
          return false;
        }
      }
      else{
        var self = this;
        return axios.post(baseUrl + 'api/MailVerification', {
            password : pass,
            email : email
          }).then(response => {
            if(response.data.msg === "Email sent successfully")
            {
              return true;
            }
          }).catch(function () {
            self.$localStorage.set('error','There was an error sending your request. Please try again');
             return false;
          });
      }
    },
    ForgetUser2: function(code,mimic, baseUrl)
    {
      if(mimic == true)
      {
        if( code == this.code )
        {
         /* var name = this.username;
          var promise1 = new Promise(function(resolve){
            setTimeout(function() {
              resolve(name);
            }, 300)
        }); */
        return this.username
        }
        else
        {
          this.$localStorage.set('error','There was an error sending your request. Please try again');
          return false;
        }
      }
      else{
        var self = this;
        return axios.post(baseUrl + 'api/CheckCode', {
            code : code,
           // email : email
          }).then(response => {
            if( response.data.authorized == true)
            {
              return response.data.username;
            }
          }).catch(function () {
            self.$localStorage.set('error','There was an error sending your request. Please try again');
             return false;
          });
      }
    },

    getApex: function(mimic, baseUrl)
    {
      if(mimic ==  true)
      {
        var names = [
          {
            id : '1',
            name : 'apex1'
          },
          {
            id : '2',
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
        return axios.get(baseUrl + 'api/ApexComs', {
        }).then(response => {
          return response.data.apexComs;
          
        }).catch(function (error) {
          this.$localStorage.set('error',error);
          return false
        });
      }
    }
  }
})

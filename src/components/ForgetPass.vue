<template>
<modal name="ForgetPass" transition="pop-out" width="50%" height="70%" :clickToClose="false" >
  <ResetCode/>

  <div class="box">
    <div class="box-part" id="bp-right"></div>
    <div class="box-part" id="bp-left">
      <div class="partition" id="partition-register">

        <button class="lead" id="closebtn" @click="close()"> X</button>

        <div class="partition-title">
        <h1> Reset your password </h1>
        <p>
            Don't worry! You may have forgotten your password, but we can help you out. Enter your username below and we'll email you a link to reset your password.
        </p>
        </div>

        <div class="partition-form">

            <input type="text" class="form-control" name="username"
            placeholder="USERNAME" v-model="username" v-on:keyup="restart()" required autofocus>

            <span id="EmailError" class="lead"> {{errorU}}  </span>


            <input type="email" class="form-control" name="email"
              placeholder="EMAIL" v-model="email" v-on:keyup="restart()" required autofocus>
            
            <button  class="btn blue" style="display:block" @click.prevent="post()">EMAIL ME</button>
            <span class="lead"> {{validate}}  </span>
            
            <span id="EmailError" class="lead"> {{errorE}}  </span>

            <p class = "lead" style = "fontSize:15px; color:blue;" > {{ congra }}  </p>
       <!--     <a  class="btn btn-link" @click="$modal.show('demo-login')"> LOG IN  </a>
            <a  class="btn btn-link" @click="$modal.show('demo-sign')"> SIGN UP </a> -->

        </div>

      </div>
    </div>
  </div>
</modal>
</template>

<script>
import ResetCode  from './ResetCode.vue'
import {AllServices} from '../MimicServices/AllServices.js'

/**
 * @vue-data {string} [email=""] Email value
 * @vue-data {string} [username=""] name of user 
 * @vue-data {string} [errorU=""] error of username 
 * @vue-data {string} [errorE=""] error of email
 * @vue-data {string} [congra=''] congratulation when username and email are valid
 * @vue-data {string} [validate=""] if username or email are invalid
 */
export default {
  name: 'ForgetPass',
  components:{
    ResetCode
  },
  data(){
      return{
        username:'',
        email: '',
        errorE: '',
        errorU:'',
        validate:'',
        congra:''
      }
    },
  created () {
    this.errorU = '',
    this.errorE ='',
    this.validate='',
    this.congra=''
  },
  methods:{
    /**
     * check out if the email is valid or not
     * @param {string} [email] - email value of the user   
    */
    validateEmail: function(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    /**
     * check out username and email if there are valid, generate code and sent it to this email and open second modal  
    */
    post: function(){
      if(this.username == '' || this.username.indexOf(' ') > 0)
      {
        this.errorU = 'Username must be between 3 and 17 characters without any space'
      }
      else if(this.email == '')
      {
        this.errorE = 'Please enter an email address'
      }
      else if(!(this.validateEmail(this.email)))
      {
        this.errorE = 'That email is invalid'
      }
      else
      {
        if(AllServices.getState()){
          var check = AllServices.forgetPass(this.username, this.email);
          if(check)
          {
            this.congra = "If the provided email address matches that account's verified email address, you'll receive a code with the reset link shortly." ;
            setTimeout(() =>this.$modal.show('ResetCode',{user: this.username}) , 4000)

          }
          else{
            this.validate =  this.$localStorage.get('error');
          }
        }
        else {

         AllServices.forgetPass(this.username, this.email).then((data) => {
         if(data)
          {
            this.congra = "If the provided email address matches that account's verified email address, you'll receive a code with the reset link shortly." ;
            setTimeout(() =>this.$modal.show('ResetCode',{user: this.username}) , 4000)
          }
          else{
            this.validate =  this.$localStorage.get('error');
          }
         })
        }
      }
    },
    /**
     * function to restart parameters every time you open login
    */
    restart: function()
    {
      this.errorU = '',
      this.errorE ='',
      this.validate='',
      this.congra=''
    },
    /**
     * function to close all modal which opened
    */
    close: function(){
      this.$modal.hide('ForgetPass');
      this.$modal.hide('demo-login');
    }
  },
}
</script>

<style lang="scss" scoped >
body{
  display: grid;
  font-family: IBMPlexSans,sans-serif;
}
.box a{
  text-decoration:none;
  font-weight:500;
  font-size:14px
}
$background_color: #404142;
#closebtn
{
  float:right;
  margin:7px -5px;
  border:0;
  color:grey;
  width:22px;
  height:25px;
  font-size:19px;
  background-color:white;
}
.box {
  background: white;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 0 40px black;
  color: #8b8c8d;
  font-size: 0;
  .box-part {
    display: inline-block;
    position: relative;
    vertical-align: top;
    box-sizing: border-box;
    height: 100%;
    width: 80%;
    &#bp-right {
      background:url('../../public/form2.png') ;
      background-size:cover;
      background-repeat: no-repeat;
      border-left: 1px solid #eee;
      width:18%   
    }
  }
  .partition {
    width: 100%;
    height: 100%;
    .partition-title {
      box-sizing: border-box;
      padding: 30px;
      width: 100%;
      letter-spacing: 1px;
      font-family: Noto Sans,sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
    }
    .partition-title h1{
      font-size: 20px;
      color:black
    }
    .partition-form {
      padding: 0 20px;
      box-sizing: border-box;
    }
    .partition-form span{
      color: #FF0000;
      display: block;
      font-size:14px;
      margin-left:15px
    }
  }

}
button.btn {
  outline: none;
  border: 0;
  padding: 10px 25px;
  cursor: pointer;
  border-radius: 3px;
  color: white;
  box-shadow: 0 4px 8px rgba(#20a0ff, .3);
  background: #4db3ff;
  font-weight: 600;
  min-width: 25%;
  margin-bottom: 5%;
  margin-top: 10%;
  margin-left:10px;
  &:hover {
    background: #20a0ff;
  }
  
}

input {
display: block;
box-sizing: border-box;
margin-bottom: 4px;
width: 90%;
font-size: 12px;
line-height: 2;
padding: 4px 8px;
font-family: inherit;
transition: 0.5s all;
}
@media(max-width:750px){
  div .partition-title p{
    display: none
  }
}
</style>

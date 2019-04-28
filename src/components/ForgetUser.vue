<template>
<modal name="ForgetUser" transition="pop-out" width="50%" height="70%" :clickToClose="false" >
 <ForgetUser2/>
  <div class="box">
    <div class="box-part" id="bp-right"></div>

    <div class="box-part" id="bp-left">
      <div class="partition" id="partition-register">
        
        <button class="lead" id="closebtn" @click="close()"> X</button>
        <div class="partition-title">
        <h1> Recover your username </h1>
        <p>
            Don't worry! You may have forgotten your username, but we can help you out. Enter your email address below and we'll email you your username.
        </p>
        </div>

        <div class="partition-form">

            <input type="password" placeholder="Password" class="form-control"
             v-model="pass" name="password" v-on:keyup="restart()" required>

            <input type="email" class="form-control" name="email"
            placeholder="EMAIL" v-model="email" v-on:keyup="restart()" required autofocus>
            
            <div style="margin-top: 32px"></div>
            <button id="Next" class="btn blue" style="display:block" @click.prevent="post()">EMAIL ME</button>
            <span class="lead"> {{validate}}  </span>

            <span id="PassError" class="lead"> {{errorP}}  </span>
            <span id="EmailError" class="lead"> {{errorE}}  </span>

            <p class = "lead" style = "fontSize:15px; color:blue;" > {{ congra }}  </p>
            

        </div>

      </div>
    </div>
  </div>
</modal>
</template>

<script>
import ForgetUser2  from './ForgetUser2.vue'
import {AllServices} from '../MimicServices/AllServices.js'
/**
 * @vue-data {string} [email=""] Email value
 * @vue-data {string} [error=""] error value
 */
export default {
  name: 'ForgetUser',
  components:{
    ForgetUser2
  },
  data(){
      return{
        email: '',
        pass:'',
        errorP: '',
        errorU:'',
        validate:'',
        congra:''
      }
    },
  created () {
    this.errorP = '',
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
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    },
    /**
     * check out the value of email is empty or invalid, and generate an error in this case, if not show the second modal and send value   
    */
    post: function(){
      if(this.email == '')
      {
        this.errorE = 'Please enter an email address'
      }
      else if(!(this.validateEmail(this.email)))
      {
        this.errorE = 'That email is invalid'
      }
      else if(this.pass.length < 6)
      {
        this.errorP = "Password must be at least 6 characters long"
      }
      else
      {
        if(AllServices.getState()){
          var check = AllServices.forgetUser(this.pass, this.email);
          if(check)
          {
            this.congra = "If the provided email address matches that account's verified email address, you'll receive a code to login in." ;
            setTimeout(() =>  this.$modal.show('ForgetUser2',{pass: this.pass}) , 2000);
          }
          else{
            this.validate =  this.$localStorage.get('error');
          }
        }
        else {

         AllServices.forgetUser(this.pass, this.email).then((data) => {
         if(data)
          {
            this.congra = "If the provided email address matches that account's verified email address, you'll receive a code to log in." ;
            setTimeout(() =>  this.$modal.show('ForgetUser2',{pass: this.pass}) , 2000);

          }
          else{
            this.validate =  this.$localStorage.get('error');
          }
         }) 
        } 
      }
    },
    restart: function()
    {
      this.errorp = '',
      this.errorE ='',
      this.validate='',
      this.congra=''
    },
    close: function(){
      this.$modal.hide('ForgetUser');
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
$background_color: #404142;
.box a{
  text-decoration:none;
  font-weight:500;
  font-size:14px
}
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
  margin-top: 8%;
  margin-left:5px;
  &:hover {
    background: #20a0ff;
  }
  
}

input {
display: block;
box-sizing: border-box;
margin-bottom: 10px;
width: 90%;
font-size: 12px;
line-height: 2;
padding: 4px 8px;
font-family: inherit;
transition: 0.5s all;
}

@media(max-width:595px){
  div .partition-title p{
    display: none
  }
}
</style>

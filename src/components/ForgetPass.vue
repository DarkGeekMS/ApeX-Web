<template>
<modal name="ForgetPass" transition="pop-out" :width="modalWidth" :height="450" id="demo1">
  <div class="box">
    <div class="box-part" id="bp-left">
      <div class="partition" id="partition-register">

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


            <input id="Email" type="email" class="form-control" name="email"
              placeholder="EMAIL" v-model="email" v-on:keyup="restart()" required autofocus>
            
            <div style="margin-top: 32px"></div>
            <button id="Next" class="btn blue" style="display:block" @click.prevent="post()">EMAIL ME</button>
            <span class="lead"> {{validate}}  </span>
            
            <span id="EmailError" class="lead"> {{errorE}}  </span>

            <p class = "lead" style = "fontSize:15px; color:blue;" > {{ congra }}  </p>

        </div>

      </div>
    </div>
    <div class="box-part" id="bp-right"> <img src="../../public/form.jpg" height="100%"></div>
  </div>
</modal>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'

const MODAL_WIDTH = 656;
/**
 * @vue-data {string} [email=""] Email value
 * @vue-data {string} [error=""] error value
 * @vue-data {integer} [modalWidth=656] width of modal
 */
export default {
  name: 'ForgetPass',
  components:{
  },
  data(){
      return{
        modalWidth: MODAL_WIDTH,
        username:'',
        email: '',
        errorE: '',
        errorU:'',
        validate:'',
        congra:''
      }
    },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH,
    this.errorU = '',
    this.errorE ='',
    this.validate='',
    this.congra=''
  },
  updated(){
    this.$localStorage.set('emailVal', this.email)
  },
  methods:{
    /**
     * check out if the email is valid or not
     * @param {string} [email] - email value of the user   
    */
    validateEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    /**
     * check out the value of email is empty or invalid, and generate an error in this case, if not show the second modal and send value   
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
            this.congra = "If the provided email address matches that account's verified email address, you'll receive an email with the reset link shortly." ;
          }
          else{
            this.validate =  this.$localStorage.get('error');
            console.log(this.validate);
          }
        }
        else {

         AllServices.forgetPass(this.username, this.email).then((data) => {
         if(data)
          {
            this.congra = "If the provided email address matches that account's verified email address, you'll receive an email with the reset link shortly." ;
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
      this.errorU = '',
      this.errorE ='',
      this.validate='',
      this.congra=''
    },
  },
}
</script>

<style lang="scss" scoped >
body{
  display: grid;
  font-family: IBMPlexSans,sans-serif;
}
$background_color: #404142;
.box {
  background: white;
  overflow: hidden;
  width: 1000px;
  height: 450px;
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
    width: 50%;
    &#bp-right {
      border-left: 1px solid #eee;
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

  .autocomplete-fix {
    position: absolute;
    visibility: hidden;
    overflow: hidden;
    opacity: 0;
    width: 0;
    height: 0;
    left: 0;
    top: 0;
  }
}
/*.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}
.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
} */

button.btn {
  outline: none;
  background: white;
  border: 0;
  padding: 10px 18px;
  cursor: pointer;
  border-radius: 3px;
  color: white;
  box-shadow: 0 4px 8px rgba(#20a0ff, .3);
  background: #4db3ff;
  font-weight: 600;
  border-radius: 3px;
  min-width: 90px;
  margin-bottom: 8px;
  margin-top: 8px;
  margin-right: 8px;
  &:hover {
    background: #20a0ff;
  }
  &.green {
    box-shadow: 0 4px 8px rgba(#50C9BA, .3);
    background: #50C9BA;
    &:hover {
     background: mix(#50C9BA, black, 95%);
    }
  }
  &.red {
    box-shadow: 0 4px 8px rgba(#F21368, .3);
    background: #F21368;
    &:hover {
      background: mix(#F21368, black, 95%);
    }
  }
}

input {
display: block;
box-sizing: border-box;
margin-bottom: 4px;
width: 100%;
font-size: 12px;
line-height: 2;
padding: 4px 8px;
font-family: inherit;
transition: 0.5s all;
}
</style>

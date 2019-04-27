<template>

<modal name="demo-login" transition="pop-out" width="50%" height="70%" :clickToClose="false" >
  <ForgetPass/> 
  <ForgetUser/>

  <div class="box">
    <div class="box-part" id="bp-right"></div>
    <div class="box-part" id="bp-left">
      <div class="partition" id="partition-register">
        
        <button class="lead" id="closebtn" @click="close()"> X</button>

        <div class="partition-title">
        <img  width="10%"
         src="../../public//Logo_X.png" >
         Sign in
        </div>
        <div class="partition-form">

          <form>
            <input id="usernamextxt" type="text"
             placeholder="Username" v-model="username" v-on:keyup="restart()" required autofocus>

             <div style="margin-top: 42px"></div>

            <input id="password" type="password"
             placeholder="Password"
             v-model="pass" name="password" v-on:keyup="restart()" required>

            <p class = "lead" style = "fontSize:15px; color:red; padding-left:15px" > {{ error }}  </p>
            <p class = "lead" style = "fontSize:15px; color:blue; padding-left:15px" > {{ congra }}  </p>

            <div style="margin-top: 32px"></div>
            <button class="btn blue" type="submit" @click.prevent="post()" style="display:block" >Sign In</button>
          </form>

           <a  class="btn btn-link" @click="$modal.show('ForgetUser')"> Forgot username </a>
           <a  class="btn btn-link" @click="$modal.show('ForgetPass')"> Forgot password </a>
           <br/>

           <p class="lead" style="fontSize:13px; color:black; padding-left:13px;display:inline-block" > New to Apex? </p>
           <a class="btn btn-link" @click="$modal.show('demo-sign')"  style="font-weight:500;margin-top:-7px"> SIGN UP </a>
        </div>
      </div>
    </div>

   
  </div>
</modal>
</template>

<script>
import ForgetPass from './ForgetPass.vue'
import ForgetUser from './ForgetUser.vue'
import {AllServices} from '../MimicServices/AllServices.js'

/**
 * @vue-data {string} [username=""] name of user logged in
 * @vue-data {string} [pass=""] password of user logged in
 * @vue-data {string} [error=""] when username or password are invalid
 * @vue-data {string} [congra=''] congratulation when user logged in
 */
export default {
  name: 'DemoLoginModal',
  components:{
    ForgetPass,
    ForgetUser
  },
  data(){
    return{
      username: '',
      pass: '',
      error: '',
      congra: ''
    }
  },
  created () {
    this.congra = ''
  },
  methods:{
    /**
     * axios post request to send username and password to the server to log in user
    */
    post: function()
    {
        if(AllServices.getState()){
          var check=AllServices.logIn(this.username, this.pass);
          if(check)
          {
            this.congra = 'You are now logged in. You will soon be redirected' ;
            setTimeout(() =>this.$modal.hide('demo-login') , 1000);
          }
          else{
            this.error =  this.$localStorage.get('error');
          }
        }
        else {

          AllServices.logIn(this.username, this.pass).then((data) => {
          if(data)
          {
            this.congra = 'You are now logged in. You will soon be redirected' ;
            setTimeout(() =>this.$modal.hide('demo-login') , 1000)
          }
          else{
            this.error =  this.$localStorage.get('error');
          }
         })
       }
    },
    /**
     * function to restart parameters every time
    */
    restart: function()
    {
      this.congra = ''
      this.error = ''
    },
    close: function(){
      this.$modal.hide('demo-login');
      this.$modal.hide('forget-user');
      this.$modal.hide('ForgetPass');
    }
  }
}
</script>

<style lang="scss" scoped >
body{
  display: grid;
  -webkit-font-smoothing: antialiased;
}
.box a{
  text-decoration:none
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
      font-size: 25px;
      font-weight: 300;
    }
    .partition-form {
      padding: 0 20px;
      box-sizing: border-box;
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
.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}
.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
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

.inp
{
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 280px;
  }
.label
{
  position: absolute;
  top: 16px;
  left: 0;
  font-size: 16px;
  color: #9098A9;
  font-weight: 500;
  transform-origin: 0 0;
  transition: all .2s ease;
}
.border{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #0077FF;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all .15s ease;
}
input{
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  height: 10%;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #C8CCD4;
  background: none;
  border-radius: 0;
  color: #223254;
  transition: all .15s ease;
  &:hover{
    background: rgba(#223254,.03);
  }
  &:not(:placeholder-shown),
    + span{
      color: #5A667F;
      transform: translateY(-20px) scale(.95);
  }
  &:focus
  {
    background: none;
    outline: none;
  }
    + span{
      color: #0077FF;
      transform: translateY(-20px) scale(.75);
    }
      + .border{
          transform: scaleX(1);
        }
  }
  
 
  
</style>

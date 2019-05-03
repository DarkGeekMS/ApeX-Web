<template>
<modal name="demo-sign2" transition="pop-out" width="50%" height="70%" :clickToClose="false"  @before-open="beforeOpen">
  <demo-sign3-modal> </demo-sign3-modal>
  <div class="box">
    <div class="box-part" id="bp-left">
      <div class="partition" id="partition-register">
        <button class="lead" id="closebtn" @click="close()"> X</button>

        <div class="partition-title">
        <h1 class=""> Choose your username </h1>
          <p>
              Your username is how other community members will see you. This name will be used to credit you for things you share on Apex. What should we call you?
          </p>
        </div>
              <div style="margin-top: 32px"></div>

        <div class="partition-form">
          <form>

            <div class="add" >
              <input id="SignUpUserName" type="text" class="form-control" name="username"
               placeholder="CHOOSE A USERNAME" v-model="username" v-on:keyup="restart()" required autofocus />

               <span class="lead" style = "fontSize:10px" v-show="invalidUser" >Username must be between 3 and 17 characters without spaces </span>

               <div style="margin-top: 2%"></div>

              <input id="password" type="password" class="form-control" name="password"
                placeholder="PASSWORD" v-on:keyup="restart()"
                v-model="pass" required autofocus />
                <span class="lead" style = "fontSize:10px" v-show="invalidPass" >Password must be at least 6 characters long</span>
                <span class="lead" style = "fontSize:10px" v-show="invalidUserAndPass" >Enter a password of min length 6  &  username must be between 3 and 17 characters</span>
                <p class = "lead" style = "fontSize:15px; color:blue; padding-left:15px" > {{ congra }}  </p>
                <p class = "lead" style = "fontSize:15px; color:red" > {{ error }}  </p>

            </div>
            <div style="background_color:#eee;border-top:1.5px solid #eee;margin-top: 15%" >
              <a id="Back" class="btn blue" style="margin-left:15px" @click="$modal.hide('demo-sign2')">BACK</a>
              <button :disabled="check" class="btn blue" type="submit" @click.prevent="post()" id="SignUpFinish">SIGN UP</button>
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
</modal>
</template>

<script>
import DemoSign3Modal  from './Sign3Modal.vue'
import {AllServices} from '../MimicServices/AllServices.js'

/**
 * @vue-data {string} [username=""] name of user sign up
 * @vue-data {string} [pass=""] password of user sign up
 * @vue-data {boolean} [invalidUser=false] invaliduser
 * @vue-data {boolean} [invalidPass=false] invalidPass
 * @vue-data {boolean} [invalidUserAndPass=false] invalidUserAndPass
 * @vue-data {string} [error=""] when username is already use
 * @vue-data {string} [congra=''] congratulation when user sign up
 */
export default {
  name: 'DemoSign2Modal',
  components:{
      DemoSign3Modal
  },
  data(){
        return{
          username: "",
          pass: "",
          invalidUser:false,
          invalidPass:false,
          invalidUserAndPass:false,
          error: '',
          congra: '',
          email:''
        }
  },
  computed:{
    /**
     * check out username and password is empty or not
    */
    check:function(){
       if((this.username != '') && (this.pass != ''))
       {
         return false;
       }
       else{
         return true;
       }
    }
  },
  methods:{
    /**
     * axios post request to send username and password to the server to sign up user
    */
    post: function(){
        if (this.username.length <= 17 && this.username.length >= 3 && this.pass.length >= 6 && this.username.indexOf(' ') < 0)
        {
          if(AllServices.getState()){
            var check=  AllServices.signUp(this.email, this.username, this.pass)
            if(check)
            {
              this.congra = 'Your account has been created. Welcome with us' ;
              setTimeout(() =>{this.$modal.show('demo-sign3');
                 this.$modal.hide('demo-sign1')} , 1000)
            }
            else{
                this.error =  this.$localStorage.get('error');
            }
          }

        else{
          AllServices.signUp(this.email, this.username, this.pass).then((data) =>
          {
          if(data)
          {

            this.congra = 'Your account has been created. Welcome with us' ;
            setTimeout(() =>this.$modal.show('demo-sign3') , 3000)
          }
          else{
            this.error =  this.$localStorage.get('error');
          }
          })
        }
        }
        else if ( (this.username.length > 17 || this.username.length < 3)  && this.pass.length < 6){
        this.invalidUserAndPass=true;
        this.invalidUser=false;
        this.invalidPass=false;

        }
        else if ( this.username.length > 17 || this.username.indexOf(' ') >= 0 || this.username.length < 3)
        {
        this.invalidUserAndPass=false;
        this.invalidUser=true;
        this.invalidPass=false;

        }
        else
        {
        this.invalidUserAndPass=false;
        this.invalidUser=false;
        this.invalidPass=true;
        }
      },
      restart: function()
      {
        this.invalidUser = false,
        this.invalidPass =false,
        this.invalidUserAndPass =false,
        this.error = '',
        this.congra = ''
      },
      close: function(){
        this.$modal.hide('demo-sign');
        this.$modal.hide('demo-sign2');
        this.$modal.hide('demo-login');
        this.$modal.hide('ForgetUser');
        this.$modal.hide('ForgetPass');
      },
      beforeOpen:function (event) {
       this.email = event.params.email;
      }
  }
}
</script>

<style lang="scss" scoped >
body{
  display: grid;
}
*{
  font-family:Arial ,Tohama, fantasy
}
$background_color: #404142;
#closebtn
{
  float:right;
  margin:7px 35%;
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
  width: 150%;
  height: 100%;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 0 40px black;
  color: #8b8c8d;
  .box-part {
    display: inline-block;
    position: relative;
    vertical-align: top;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }
  .partition {
    width: 100%;
    height: 100%;
    .partition-title {
      box-sizing: border-box;
      border:1.52px solid #eee;
      padding: 10px;
      width: 100%;
      letter-spacing: 1px;
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
    }
    .partition-title p{
      width:65%
    }
    .partition-title h1{
        font-size: 20px;
        color:black;
        font-family:JMH Typewriter dry
    }
    .partition-form .add{
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
  width:100px;
  float:right;
  margin-right:35%;
  margin-top: 1%;
  &:hover {
    background: #20a0ff;
  } 
}

input[type=password],
input[type=text] {
display: block;
box-sizing: border-box;
margin-bottom: 4px;
width: 50%;
font-size: 12px;
line-height: 2;
border: 0;
border-bottom: 1px solid #DDDEDF;
padding: 4px 8px;
font-family: inherit;
transition: 0.5s all;
outline: none;
}
@media(max-width:800px)
{
  button.btn{
    margin-right:20%
  }
}
@media(max-width:1156px)
{
  button.btn{
    margin-right:40%
  }
}
</style>

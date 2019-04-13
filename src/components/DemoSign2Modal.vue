<template>
<modal name="demo-sign2" transition="pop-out" :width="modalWidth" :height="400">
  <demo-sign3-modal> </demo-sign3-modal>
  <div class="box">
    <div class="box-part" id="bp-left">
      <div class="partition" id="partition-register">

        <div class="partition-title">
        <h1 class=""> Choose your username </h1>
          <p>
              Your username is how other community members will see you. This name will be used to credit you for things you share on Reddit. What should we call you?
          </p>
        </div>
              <div style="margin-top: 32px"></div>

        <div class="partition-form">
          <form>

            <div class="add" >
              <input id="SignUpUserName" type="text" class="form-control" name="username"
               placeholder="CHOOSE A USERNAME" v-model="username" v-on:keyup="restart()" required autofocus>

               <span class="lead" style = "fontSize:10px" v-show="invalidUser" >Enter a username of max length 17 without spaces </span>
               <p class = "lead" style = "fontSize:15px; color:red" > {{ error }}  </p>

               <div style="margin-top: 20px"></div>



              <input id="password" type="password" class="form-control" name="password"
                placeholder="PASSWORD" v-on:keyup="restart()"
                v-model="pass" required autofocus>
                <span class="lead" style = "fontSize:10px" v-show="invalidPass" >Password must be at least 6 characters long</span>
                <span class="lead" style = "fontSize:10px" v-show="invalidUserAndPass" >Enter a password of min length 6 &  a username of max length 17</span>
                <p class = "lead" style = "fontSize:15px; color:blue; padding-left:15px" > {{ congra }}  </p>


            </div>
            <div style="margin-top: 70px"></div>
            <div style="background_color:#eee;border-top:1.5px solid #eee; height:55px" >
              <a id="Back" class="btn blue" @click="$modal.hide('demo-sign2')">BACK</a>
              <button :disabled="check" class="btn blue" type="submit" style="margin-left:450px" @click.prevent="post()" id="SignUpFinish">SIGN UP</button>
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
</modal>
</template>

<script>
const MODAL_WIDTH = 656;
import DemoSign3Modal  from './DemoSign3Modal.vue'
import {AllServices} from '../MimicServices/AllServices.js'

/**
 * @vue-data {string} [username=""] name of user sign up
 * @vue-data {string} [pass=""] password of user sign up
 * @vue-data {integer} [modalWidth=656] width of modal
 * @vue-data {boolean} [invalidUser=false] invaliduser 
 * @vue-data {boolean} [invalidPass=false] invalidPass
 * @vue-data {boolean} [invalidUserAndPass=false] invalidUserAndPass
 * @vue-data {string} [error=""] when username is already use
 * @vue-data {string} [congra=''] congratulation when user sign up
 */
export default {
props:{
email:''
},
  name: 'DemoSign2Modal',
  components:{
      DemoSign3Modal
  },
  data(){
        return{
          modalWidth: MODAL_WIDTH,
          username: "",
          pass: "",
          invalidUser:false,
          invalidPass:false,
          invalidUserAndPass:false,
          error: '',
          congra: ''
        }
  },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH
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
        if (this.username.length <= 17 && this.pass.length >= 6 && this.username.indexOf(' ') < 0)
        {
          AllServices.signUp(this.email, this.username, this.pass).then((data) =>
          {
          if( data )
          {

            this.congra = 'Your account has been created. Welcome with us' ;
            setTimeout(() =>{this.$modal.show('demo-sign3');
               this.$modal.hide('demo-sign1')} , 1000)
          }
          else{
            this.error =  this.$localStorage.get('error');
          }
          })
        }
        else if (this.username.length > 17 && this.pass.length < 6){
        this.invalidUserAndPass=true;
        this.invalidUser=false;
        this.invalidPass=false;

        }
        else if (this.username.length > 17 || this.username.indexOf(' ') >= 0)
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
.box {
  background: white;
  overflow: hidden;
  width: 1000px;
  height: 400px;
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
        font-family: "Times New Roman", Times, serif;
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
</style>

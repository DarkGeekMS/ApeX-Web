


<template>
<modal name="changepass" transition="pop-out" :scrollable="true" width="44%" height="44%" @before-open="beforeOpen">
  <div class="box">
    <div class="box-part" id="bp-left">
      <div class="partition" id="partition-register">
        <div class="partition-title">CHANGE PASSWORD</div>
        <div class="partition-form">
          <form autocomplete="false">

            <div class="autocomplete-fix">
              <input type="password">
            </div>

            <input v-model="username" id="username" type="text" placeholder="your username">
            <input v-model="key" id="n-password2" type="password" placeholder="Old Password">
            <input v-model="password" id="n-password2" type="password" placeholder="New Password">

          </form>

           <span id="PassError" class="lead" style="fontSize:15px; color:red; padding-left:15px"> {{error}}  </span>


          <div class="button-set">
            <button id="goto-signin-btn" class="Button" @click="hide()">Cancel</button>
            <button id="register-btn" class="Button" @click="change()">Save</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</modal>
</template>
<script>
import {AllServices} from '../../MimicServices/AllServices.js'
/**
 * @vue-data  {string} password - the new password thst will be taken from the user
 *@vue-data {string} username - the username taken from the user for validations
  *@vue-data {string} key - the password taken from the user for validations
  *@vue-data {string} error - error when checking on the new password
*/
export default {
  name: 'Changepass',
  data () {
    return {
      password:'',
      username:'',
      key:'',
      error:''
    }
  },


  methods:{
    /**
    * check the validation of the new password and if valid send the request to the server to change password
    */
    change(){
      if(this.password == '')
      {
        this.error = 'Please enter the new password'
      }
      else if(this.password.length < 6)
      {
        this.error = "Password must be at least 6 characters long"
      }
      else{
        if(this.username!=this.$localStorage.get('userName')){
          swal("Error when changing password, check your username or password");
        }
          else{
            AllServices.changePass(this.password,this.username,this.key).then((data)=> {

            swal("Password changed successfully")
            this.$modal.hide('changepass');
          })
            .catch(function () {
              swal("Error when changing password, check your username or password");
            });
          }
      }

    },
    /**
    * when pressing cancel it close the modal
    */
    hide () {
    this.$modal.hide('changepass');
  },
  beforeOpen:function (event) {
      this.error=""

    }

  }

}
</script>
<style lang="scss" scoped>
$background_color: #404142;
.box {
  background: white;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 2%;
  box-sizing: border-box;
  box-shadow: 0 0 7% black;
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
  .box-messages {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .box-error-message {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    height: 0;
    line-height: 32px;
    padding: 0 12px;
    text-align: center;
    width: 100%;
    font-size: 11px;
    color: white;
    background: #F38181;
  }
  .partition {
    width: 100%;
    height: 100%;
    .partition-title {
      box-sizing: border-box;
      padding: 30px;
      width: 100%;
      text-align: center;
      letter-spacing: 1px;
      font-size: 20px;
      font-weight: 300;
    }
    .partition-form {
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
  input[type=password],
  input[type=text] {
    display: block;
    box-sizing: border-box;
    margin-bottom: 4px;
    width: 100%;
    font-size: 12px;
    line-height: 2;
    border: 0;
    border-bottom: 1px solid #DDDEDF;
    padding: 4px 8px;
    font-family: inherit;
    transition: 0.5s all;
    outline: none;
  }
  .large-btn {
    width: 100%;
    background: white;
    span {
      font-weight: 600;
    }
    &:hover {
      color: white !important;
    }
  }
  .button-set {
    margin-bottom: 8px;
    float: right;
  }
  #register-btn,
  #signin-btn {
    margin-left: 8px;
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




.Button{

box-sizing: border-box;
text-align: center;
font-size: 12px;
font-weight: 700;
letter-spacing: 0.5px;
line-height: 24px;
text-transform: uppercase;
background-color: transparent;
color: rgb(0, 121, 211);
fill: rgb(0, 121, 211);
border-width: 1px;
border-style: solid;
border-image: initial;
border-radius: 4px;
text-decoration: none;
padding: 3px 16px;
border-color: rgb(0, 121, 211);
}


</style>

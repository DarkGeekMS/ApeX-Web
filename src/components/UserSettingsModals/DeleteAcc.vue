<template>
<modal name="DeleteAcount" transition="pop-out" :scrollable="true" width="30%" height="auto">
  <div class="box">
        <h6 class="page-header"><b>Deactivate your account</b></h6>
      <h6>Sorry to see you go!</h6>
<ul>
  <li><h6>If you are having a problem on ApexCom, please consider contacting us about it before deactivating your account.</h6></li>
<br>
  <li><h6>  Deactivating your account will not delete the content of posts and comments you've made on ApexCom. To do so please delete them individually.</h6></li>
</ul>
<br>
<h6>ACCOUNT CREDENTIALS FOR SECURITY PURPOSES</h6>

<div class="partition" id="partition-register">
  <div class="partition-form">
    <form autocomplete="false">
      <input id="n-password2" type="password" v-model="password" placeholder="Password">

    </form>
  </div>
</div>

            <div class="button-set">
              <button @click="hide()">Cancel</button>
              <button @click="deleteacc()">Delete</button>
            </div>


  </div>
</modal>
</template>

<script>
import {AllServices} from '../../MimicServices/AllServices.js'
export default {
  data () {
    return {
password:''
    }
  },
methods:{
hide(){
  this.$modal.hide('DeleteAcount')
},
deleteacc(){
  AllServices.deleteAcc(this.password).then((data) => {
   this.error= data;
   this.ErrorCheck();
 });
},
ErrorCheck(){
// todo check error type and do behavior

}
}
}
</script>
<style lang="scss" scoped>
h6{
  margin-left: 5%
}
ul{
list-style-type: lower-roman;
list-style-position: outside;

}
$background_color: #404142;
.box {
  background: white;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 2%;
  box-sizing: border-box;
  box-shadow: 0 0 7% black;
  color: black;
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
    margin-bottom: 20px;
    margin-top: 20px;
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
  button {
    background: white;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    letter-spacing: 1px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    min-width: 140px;
    margin-top: 8px;
    color: black;
    cursor: pointer;
    border: 1px solid #DDDEDF;
    text-transform: uppercase;
    transition: 0.1s all;
    font-size: 10px;
    outline: none;
    &:hover {
      border-color: mix(#DDDEDF, black, 90%);
      color: mix(#8b8c8d, black, 80%);
    }
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
</style>

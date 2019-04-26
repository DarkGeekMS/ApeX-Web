<template>
<modal name="demo-sign" transition="pop-out" width="50%" height="70%" :clickToClose="false">
  <demo-sign2-modal> </demo-sign2-modal>
  <div class="box">
    <div class="box-part" id="bp-right"></div>

    <div class="box-part" id="bp-left">
      <div class="partition" id="partition-register">
        <button class="lead" id="closebtn" @click="close()"> X</button>
       
        <div class="partition-title">
        <h1> Join the worldwide conversation. </h1>
        <p>
            By having a Apex account, you can subscribe, vote, and  comment on all your favorite Apex content. <br/>
            Sign up in just seconds.
        </p>
        </div>

        <div class="partition-form">

            <input id="Email" type="email" class="form-control" name="email"
              placeholder="EMAIL"
              v-model="email"
              required autofocus>
            <span id="EmailError" class="lead"> {{error}}  </span>

            <div style="margin-top: 32px"></div>
            <button id="Next" class="btn blue" style="display:block" @click.prevent="checkEmail()">NEXT</button>

        </div>

      </div>
    </div>
  </div>
</modal>
</template>

<script>
import DemoSign2Modal  from './Sign2Modal.vue'
/**
 * @vue-data {string} [email=""] Email value
 * @vue-data {string} [error=""] error value
 */
export default {
  name: 'DemoSignModal',
  components:{
      DemoSign2Modal
  },
  data(){
      return{
        email: '',
        error: ''
      }
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
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    /**
     * check out the value of email is empty or invalid, and generate an error in this case, if not show the second modal and send value   
    */
    checkEmail: function(){
      if(this.email == '')
      {
         this.error = 'Email is required'
      }
      else if(!(this.validateEmail(this.email)))
      {
         this.error = 'please fix your email to continue'
      }
      else{
        this.$modal.show('demo-sign2');
        this.error = ''
      }
    },
    close:function(){
      this.$modal.hide('demo-sign');
      this.$modal.hide('demo-login');
      this.$modal.hide('ForgetUser');
      this.$modal.hide('ForgetPass');

    }
  }
}
</script>

<style lang="scss" scoped >
body{
  display: grid;
  font-family: IBMPlexSans,sans-serif;
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
  margin-top: 10%;
  margin-left:10px;
  &:hover {
    background: #20a0ff;
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
</style>

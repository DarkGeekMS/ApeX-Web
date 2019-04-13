<template>
<modal name="demo-sign" transition="pop-out" :width="modalWidth" :height="400">
  <demo-sign2-modal> </demo-sign2-modal>
  <div class="box">
    <div class="box-part" id="bp-left">
      <div class="partition" id="partition-register">

        <div class="partition-title">
        <h1> Join the worldwide conversation. </h1>
        <p> 
            By having a Reddit account, you can subscribe, vote, and  comment on all your favorite Reddit content. </br>
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
    <div class="box-part" id="bp-right"> </div>
  </div>
</modal>
</template>

<script>
const MODAL_WIDTH = 656;
import DemoSign2Modal  from './DemoSign2Modal.vue'
/**
 * @vue-data {string} [email=""] Email value
 * @vue-data {string} [error=""] error value
 * @vue-data {integer} [modalWidth=656] width of modal
 */
export default {
  name: 'DemoSignModal',
  components:{
      DemoSign2Modal
  },
  data(){
      return{
        modalWidth: MODAL_WIDTH,
        email: '',
        error: ''
      }
    },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH
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
    }
  }
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
    width: 50%;
    &#bp-right {
      background: url("../../public/form.jpg") no-repeat top left;
      border-left: 1px solid #eee;
    }
    &#bp-left{
      
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

<template>
<modal name="ResetCode" transition="pop-out" width="50%" height="70%" :clickToClose="false" @before-open="beforeOpen">
  <ResetPass/>
  <div class="box">
    <div class="box-part" id="bp-right"></div>

    <div class="box-part" id="bp-left">
      <div class="partition" id="partition-register">

        <button class="lead" id="closebtn" @click="close()"> X</button>

        <div class="partition-title">
        <h1> Please set your code here to continue </h1>
        </div>

        <div class="partition-form">

            <input type="text" class="form-control" name="code"
            placeholder="CODE" v-model="code" v-on:keyup="restart()" required autofocus>

            <button id="Next" class="btn blue" style="display:block" @click.prevent="post()">SEND</button>
            <span class="lead"> {{error}}  </span>
            
            <p class = "lead" style = "fontSize:15px; color:blue;" > {{ congra }}  </p>

        </div>

      </div>
    </div>
  </div>
</modal>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'
import ResetPass  from './ResetPass.vue'

/**
 * @vue-data {string} [email=""] Email value
 * @vue-data {string} [error=""] error value
 */
export default {
  name: 'ResetCode',
  components:{
    ResetPass
  },
  data(){
    return{
      code:'',
      username:'',
      error:'',
      congra:''
    }
  },
  methods:{
    /**
     * check out the value of email is empty or invalid, and generate an error in this case, if not show the second modal and send value   
    */
    post: function(){
      if(this.code == '')
      {
        this.error = 'Please enter the code'
      }
      else
      {
        if(AllServices.getState()){
          var check = AllServices.setCode(this.code,this.username);
          if(check)
          {
            this.congra = "your code is correct, Now set your password" ;
            setTimeout(() =>this.$modal.show('ResetPass',{user: this.username}) , 2000)

          }
          else{
            this.error =  this.$localStorage.get('error');
          }
        }
        else {
         AllServices.setCode(this.code,this.username).then((data) => {
         if(data)
          {
            this.congra = "your code is correct, Now set your password " ;
            setTimeout(() =>this.$modal.show('ResetPass',{user: this.username,code:this.code}) , 2000)

          }
          else{
            this.error =  this.$localStorage.get('error');
          }
         })
        }
      }
    },
    restart: function()
    {
      this.error = '',
      this.congra=''
    },
    close: function(){
      this.$modal.hide('ResetCode');
      this.$modal.hide('ForgetPass');
      this.$modal.hide('demo-login');
    },
    beforeOpen:function (event) {
      this.username = event.params.user;
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
margin: 5px;
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

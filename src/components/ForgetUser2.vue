<template>
<modal name="ForgetUser2" transition="pop-out" width="50%" height="70%" :clickToClose="false" @before-open="beforeOpen">
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

/**
 * @vue-data {string} [pass=""] password of user
 * @vue-data {string} [code=""] code value
 * @vue-data {string} [error=""] error value
 * @vue-data {string} [congra=''] congratulation when code is correct 

 */
export default {
  name: 'ForgetUser2',
  data(){
    return{
      code:'',
      pass:'',
      error:'',
      congra:''
    }
  },
  methods:{
    /**
     * check out the value of code is empty or invalid, and generate an error in this case, if not user are logged in with username    
    */
    post: function(){
      if(this.code == '')
      {
        this.error = 'Please enter the code'
      }
      else
      {
        if(AllServices.getState()){
          var check = AllServices.forgetUser2(this.code);
          if(check)
          {
            this.congra = "your code is correct, Now your are logged in " ;
            var check2 = AllServices.logIn(check, this.pass);
            if(check2)
            {
              this.congra = 'You are now logged in. You will soon be redirected' ;
            }
            else{
                this.error =  this.$localStorage.get('error');
            }
            setTimeout(() =>this.close() , 2000);

            }
          else{
            this.error =  this.$localStorage.get('error');
          }
        }
        else {

         AllServices.forgetUser2(this.code).then((data) => {
         if(data)
          {
            this.congra = "your code is correct, Now your are logged in " ;
            AllServices.logIn(data, this.pass).then((data) => {
            if(data)
              {
                this.congra = 'You are now logged in. You will soon be redirected' ;
              }
              else{
                  this.error =  this.$localStorage.get('error');
              }
            })
            setTimeout(() =>this.close() , 4000);
          }
          else{
            this.error =  this.$localStorage.get('error');
          }
         })
        }
      }
    },
     /**
     * function to restart parameters every time you open login
    */
    restart: function()
    {
      this.error = '',
      this.congra=''
    },
    /**
     * function to close all modal which opened
    */
    close: function(){
      this.$modal.hide('ForgetUser2');
      this.$modal.hide('ForgetPass');
      this.$modal.hide('demo-login');
    },
    /**
      * take parameter password from forgetUser modal
    */
    beforeOpen:function (event) {
      this.pass = event.params.pass;
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

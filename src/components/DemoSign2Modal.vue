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
               placeholder="CHOOSE A USERNAME" 
               v-model="username" required autofocus>
               <div style="margin-top: 20px"></div>
              <input id="password" type="password" class="form-control" name="password"
                placeholder="PASSWORD"
                v-model="pass" required autofocus>
            </div>
            <div style="margin-top: 90px"></div>
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
import {globalStore} from '../main.js'
import Authentication from '../MimicServices/Authentication.js'
export default {
  name: 'DemoSign2Modal',
  components:{
      DemoSign3Modal
  },
  data(){
        return{
          modalWidth: MODAL_WIDTH,
          username: "",
          pass: ""
        }
  },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH
  },
  computed:{
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
    post: function(){
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            email: globalStore.Val,
            username: this.username,
            password: this.pass
          }).then(response => {
             globalStore.login = true;
             globalStore.Username = this.username;
             this.$modal.show('demo-sign3');
             this.$modal.hide('demo-sign1');
          }).catch(function (error) {
             console.log(error);
          });
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

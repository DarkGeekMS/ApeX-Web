<template>

<div>

 <demo-login-modal/>
 <demo-sign-modal/>
 <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top" id="mainNav">
   
    <a class="navbar-brand" href="#">
          <img style="margin-top:-8px" width="90" src="../../public/reddit2.png" >
    </a>
    <div class="container-fluid"> 
       <div class="form-group drop" style="display:inline-block; margin:0.5% 0.5%">
          <select class="form-control" name="category">
              <option>Popular</option>
              <option> All</option>
              <option>Original Content</option>
          </select>
        </div>
                  

      <div class="form-group has-feedback has-search" style="display:inline-block">
        <span class="glyphicon glyphicon-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search Reddit">
      </div>

          
      <div v-show='log' class="form-group log" style="display:inline-block">
          <button type="button" class="btn btn-info log1" @click="$modal.show('demo-login')"> LOG IN </button>
          <button type="button" class="btn btn-primary log1" data-toggle="button" aria-pressed="false" autocomplete="off" @click="$modal.show('demo-sign')">SIGN UP</button> 
      </div> 

      <div v-show='log' class="form-group log" style="display:inline-block">
            <select class="form-control">
                <option>My Profile</option>
                <option>User Settings</option>
                <option>Log Out</option>
            </select>
      </div>  

      

    </div> 
      
  </nav>
</div>

</template>

<script>
  import DemoLoginModal  from './login.vue'
  import DemoSignModal  from './signup.vue'
  import {globalStore} from '../main.js'
  export default {
    components:{
      DemoLoginModal,
      DemoSignModal
    },
    
    data () {
      return {
        canBeShown: false,
        log : false,
        userLog: globalStore.Username 
      }
    },
    created () {
      setInterval(() => {
        this.canBeShown = !this.canBeShown
      }, 5000)
    },
    updated(){
         this.log = globalStore.login
    },
    methods: {
      conditionalShow () {
        this.$modal.show('conditional-modal', {
          show: this.canBeShown
        })
      },
    }
}
</script>

<style scoped>
#mainNav{
  background-color: white;
  max-height:3%;
  border:1px solid #eee
}
.drop
{
  width:10%
}
input{
  width:100%;
  margin-top:1.3%;
  display:inline-block;
} 
.has-search{
  width:35%;
  height:100%;
}
.has-search .form-control-feedback {
    right: initial;
    left: 0;
    color: #ccc;
    margin-top:1.3%
}

.has-search .form-control {
    padding-right: 12px;
    padding-left: 34px;
}
.log{
  height:100%;
  float:right; 
  margin:0.5% 0.5%;
}
@media(max-width:768px){
  .log,.log1{
    display:none
  }
  .has-search,.drop{
      width:30%;
  }
}
 </style>

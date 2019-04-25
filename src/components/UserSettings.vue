<template>
<div class='settings'>
  <ChangeMail></ChangeMail>
  <ChangePass></ChangePass>
<h2 class="page-header">User settings</h2>
<h6  class="page-header"><b>ACCOUNT PREFERENCES</b></h6>
<div>
<h2><button  type="button" class="btn btn-primary " @click="showmail()">CHANGE</button></h2>
<h2>Email Address</h2>
<h6>{{email}}</h6>
</div>
<div>
<h2><button  type="button" class="btn btn-primary " @click="showpass()">CHANGE</button></h2>
<h2>Change password</h2>
<h6>Password must be at least 6 characters long</h6>
</div>
<h6  class="page-header"><b>DEACTIVATE ACCOUNT</b></h6>
<h6  class="page-header"><b>PROFILE INFORMATION</b></h6>
<h6  class="page-header"><b>NOTIFICATIONS</b></h6>
<div class="">
<label class="switch"><input type="checkbox"><span class="slider round"></span></label>
<h2>Allow Notifications</h2>
</div>
</div>
</template>

<script>


import ChangeMail from './UserSettingsModals/ChangeEmail.vue'
import ChangePass from './UserSettingsModals/ChangePass.vue'

export default {
  components:{
    ChangeMail,
    ChangePass
  },
  data(){
    return{
    email:this.$localStorage.get('emailVal')
    }
  },
  methods:{
  showmail () {
      this.$modal.show('changeemail')
    },
    showpass(){
      this.$modal.show('changepass')
    }
  }
}
</script>

<style scoped>
.settings{
  margin-top: 5%;
  margin-left: 10%
}

button{
background-color: white;
color: blue;
float: right;
display: inline-block;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

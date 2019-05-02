<template>
<div class="UserSettings">
  <UserProfileSideBar class="sidebar" v-bind:settings="false" v-bind:userName="userName"></UserProfileSideBar>
<div class='settings'>
  <ChangePass></ChangePass>
  <DelAcc></DelAcc>
<h2 id='settingshead' class="page-header">User settings</h2>
<h6  class="page-header"><b>ACCOUNT PREFERENCES</b></h6>
<div>
  <h2><button  id ="ChangeButton" type="button"  @click="showpass()">CHANGE</button></h2>
  <h2>Change password</h2>
  <h6 id='notepassword'>Password must be at least 6 characters long</h6>
</div>
<h6  class="page-header"><b>PROFILE INFORMATION</b></h6>
<div>
  <h2>Email Address</h2>
  <h6>{{email}}</h6>
  <div class="partition" id="partition-register">
    <div class="partition-form">
      <form autocomplete="false">
        <label>Enter your new username here:</label>
        <input id="newusername" v-model="userName" type="text" placeholder="enter your new username here">
        <label>Enter your new email here:</label>
        <input id="newemail" v-model="email" type="text" placeholder="enter your new email here">
      </form>
    </div>
  </div>

  <!-- <h2><button  id ="ChangeButton" type="button"  @click="showmail()">CHANGE</button></h2> -->
<div class="noti">
  <label id='checkboxnotifie' class="switch"><input v-model="notifie" type="checkbox"><span class="slider round"></span></label>
  <h2>Allow Notifications</h2>
</div>


<div class="upload photos">
  <div class="samerow">
    <div class="box" @dragover.prevent v-if="this.image==''">
      <label id='profilephoto' class="borderbox view">
        <div class=" margins">
          <svg class=" photo" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <g>
              <polygon fill="inherit" opacity="0" points="0.610673352 20 20.625 20 20.625 0 0.610673352 0"></polygon>
              <path d="M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765" fill="inherit">
              </path>
            </g>
          </svg>
        </div>
        <div class=" words">Drag and Drop or Upload Avatar Image</div>
        <div class="display">
          <input  name="profileIcon" type="file" @dragover.prevent  @change="onChange" accept="image/x-png,image/jpeg" >


        </div>

      </label>

    </div>
      <img v-else :src="'http://35.232.3.8' + this.image" alt="" class="img" id="imgId" />
    </div>
</div>

<button
 class="btn btn-info" data-toggle="button" type="submit"
 aria-pressed="true" autocomplete="off" @click="updateprefs()" id="ChangeButton">Save</button>


</div>
<h6  class="page-header"><b>DEACTIVATE ACCOUNT</b></h6>
<div class="">
</div>

<div class="s19ceyn0-2 htFOkz">
  <button id='deactivateaccount' class="s19ceyn0-1 knawbn" @click="showDel()">
    <svg class="s19ceyn0-0 iFmWTj" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"></path>
      <path d="M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"></path>
    </svg>deactivate account</button>
  </div>
</div>

</div>
</template>

<script>


import DelAcc from './UserSettingsModals/DeleteAcc.vue'
import ChangePass from './UserSettingsModals/ChangePass.vue'
import UserProfileSideBar from './UserProfileSideBar.vue'

import {AllServices} from '../MimicServices/AllServices.js'
import $ from'jquery/dist/jquery.min.js'

export default {
  components:{
    DelAcc,
    ChangePass,
    UserProfileSideBar
  },
  data(){
    return{
  notifie:0,
  avatar:'',
  email:'',
  userName:'',
  imgName:'',
  imgContent:'',
  image:''
    }
  },
  methods:{
    onDrop: function(e) {
         e.stopPropagation();
         e.preventDefault();
         var files = e.dataTransfer.files;
         this.createFile(files[0]);
       },
        /**
      * when the user upload the img it enable the post button and store the img src
      */
       onChange(e) {
         this.imgContent = e.target.files[0];
         var files = e.target.files;
         this.createFile(files[0]);
         this.imagable=true;
         this.Enable();

       },
        /**
      * it create file to be stored in img src
      */
       createFile(file) {
         if (!file.type.match('image.*')) {

           return;
         }

         var reader = new FileReader();
         var vm = this;

         reader.onload = function(e) {
           vm.image = e.target.result;

           this.imgName=vm.image;
          this.image=vm.image;
         }
         reader.readAsDataURL(file);

       },
        /**
      * it remove the img if the user upload an img from browser and want to remove it so it make the src empty.
      */
       removeFile() {
         this.image = '';
         this.imagable=false;
         this.Enable();
       },

    showpass(){
      this.$modal.show('changepass')
    },
    showDel()
    {
    this.$modal.show('DeleteAcount')
    },
updateprefs(){

  let formData = new FormData();

  if(this.imgName!=null){
       formData.append('avatar', this.imgContent, this.imgContent.name);
  }



  formData.append('username', this.userName);
  formData.append('email', this.email);
  formData.append('notifications', this.notifie);
  formData.append('token', this.$localStorage.get('token'));



  AllServices.updatePrefs(formData).then((data)=>{
  });
}
  },
  mounted:function () {
    AllServices.getPrefs().then((data)=> {
      console.log(data);
  this.email = data.userData.email,
  this.notifie=data.userData.notification,
  this.avatar=data.userData.avatar,
  this.userName=data.userData.username
    });


    $('#selectted').text('User Settings');
    var remclass = $('#classed').prop('class');
    $('#classed').removeClass(remclass);
    $('#classed').addClass("glyphicon glyphicon-cog");
  },
}
</script>

<style scoped>
.settings{
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 40%;
  background:white;
}




#ChangeButton{

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

.UserSettings{
width: 100% ;
background: white;
}

.view {
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    background-color: rgb(246, 247, 248);
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(237, 239, 241);
    border-image: initial;
}
.words {
    color: rgb(164, 167, 168);
    font-size: 11px;
}
.photo {
    fill: rgb(135, 138, 140);
    height: 40px;
    width: 42px;
}
.box2.box2.box2 {
    width: 412px;
    height: 100%;
    margin: 0px;
}
.box2 .borderbox {
    box-sizing: border-box;
    padding: 4px;
}
.samerow {
    display: flex;
    height: 120px;
}
.box.box.box {
    width: 120px;
    height: 100%;
    margin: 0px 12px 0px 0px;
}
.box .borderbox {
    box-sizing: border-box;
    padding: 4px;
}
.display {
    display: none;
}
.margins {
    margin-top: -8px;
    margin-bottom: 4px;
}




.htFOkz {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
}


.knawbn {
    display: flex;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-transform: uppercase;
    color: rgb(255, 88, 91);
}



.iFmWTj {
    width: 20px;
    margin-right: 4px;
    fill: rgb(255, 88, 91);
}





button {
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: initial;
    float: right;
    display: inline-block;
}


.noti{
display: inline;

}
.switch {
  margin-top: 20px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  float:right;
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
.btnImage {

  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  padding: 10px 25px;
  position: relative;
   border-color: rgb(0, 121, 211);
   color: rgb(0, 121, 211);
}
.imgBox{

     height: 300px;
     width: 70%;
}
.img{
  width:30%
}
.helper {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  width: 0;
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
  margin-bottom: 1%;
  width: 35%;
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

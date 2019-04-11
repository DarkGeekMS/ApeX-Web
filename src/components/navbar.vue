<template>
<div>

 <demo-login-modal> </demo-login-modal>
 <demo-sign-modal> </demo-sign-modal>
 <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top" id="mainNav">

    <a class="navbar-brand" href="/">
          <img style="margin-top:-8px" width="85"
          src="../../public/Logo_small.png" >
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
        <input type="text" class="form-control" placeholder="Search Reddit" v-model="searchVal" v-on:keyup.enter="search()">
      </div>


      <div v-show="!this.$localStorage.get('login')" class="form-group log" style="display:inline-block">
          <button id="LoginBTN" type="button" class="btn btn-info log1" @click="$modal.show('demo-login')"> LOG IN </button>
          <button id="SignUp" type="button" class="btn btn-primary log1" data-toggle="button" aria-pressed="false" autocomplete="off" @click="$modal.show('demo-sign')">SIGN UP</button>
      </div>

      <div v-show="this.$localStorage.get('login')" class="btn-group log" id="loggedDiv">
        <button type="button" data-toggle="dropdown" class="btn btn-default dropdown-toggle" id="loggedbutton">
          <img id="logoutPic" width="20"
          src="../../public//Logo_X.png" > {{ userLog }}  <span class="caret"></span></button>
        <ul class="dropdown-menu">
            <li class="dropdown-header">MY STUFF</li>
            <li><a href="#">My Profile</a></li>
            <li><a href="#">User Settings</a></li>
            <li class="divider"></li>
            <li><a class="logOut" href="#" @click="Logout()">Log Out</a></li>
        </ul>
      </div>
    </div>

  </nav>
</div>
</template>

<script>
  import DemoLoginModal  from './DemoLoginModal.vue'
  import DemoSignModal  from './DemoSignModal.vue'
  import {AllServices} from '../MimicServices/AllServices.js'
  export default {
    components:{
      DemoLoginModal,
      DemoSignModal
    },
    data () {
      return {
        canBeShown: false,
        userLog: '',
        searchVal: '',
        listOfUsers: [],
      }
    },
    created () {
      setInterval(() => {
        this.userLog = this.$localStorage.get('userName');
        this.canBeShown = !this.canBeShown
      }, 500)
    }, 
    methods: {
      conditionalShow () {
        this.$modal.show('conditional-modal', {
          show: this.canBeShown
        })
      },
      Logout: function(){
        AllServices.logOut()
      }, 
      search: function(){

        if( this.searchVal != '')
        {
          axios.get('http://127.0.0.1:8000/api/search',{
            query: this.searchVal
          }).then(response => {
            listOfUsers = response.data.query
          }),
          this.$router.push({ name:'search', params:{myProperty: this.searchVal}})
        }
      }
    },
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
  margin-top:1.2%;
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
button{
  width:100px;
  margin:0 5px;
}

#loggedbutton{
  width:200px;
  height:40px;
  margin:-3px 4px;
  font-size:17px;
  color:#999999;
}

#loggedbutton:hover {
  background: #fff;
}

ul{
  width:200px;
  margin:2px 4px;
}

</style>

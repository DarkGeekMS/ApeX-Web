<template>
<div>

 <demo-login-modal> </demo-login-modal>
 <demo-sign-modal> </demo-sign-modal>
 <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top" id="mainNav">
    <router-link class="navbar-brand" :to="{ name:'HomePage'}">
      <img style="margin-top:-8px" width="85"
      src="../../public/Logo_small.png" >
    </router-link>

    <div class="container-fluid">
       <div class="form-group drop" style="display:inline-block; margin:0.5% 0.5%">
          <select class="form-control dropdown-primary" name="category">
              <option disabled> </option>
              <optgroup style="font-size: 13px" label="REDDIT FEEDS">
                <option> Popular</option>
                <option>  All</option>
                <option> Original Content</option>
              </optgroup>
              
              <option disabled>──────────</option>  
              
              <optgroup style="font-size: 12px" label="MY COMMUNITIES" v-show="this.$localStorage.get('login')" >
                <option v-for="(apex, key) in apexs" > {{apex.name}} </option> 
              </optgroup>
          </select>
      </div>


      <div class="form-group has-feedback has-search" style="display:inline-block">
        <span class="glyphicon glyphicon-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search Reddit" v-model="searchVal" v-on:keyup.enter="search()">
      </div>

      <div class="btn-toolbar" role="toolbar"> 
		  <div class="btn-group">
        <button type="button" class="btn btn-default" alt="popular"> 
          <i class="glyphicon glyphicon-arrow-up"></i></span> 
        </button> 
		    <button type="button" class="btn btn-default"> 
		      <i class="glyphicon glyphicon-stats"></i> 
		    </button>
		    <button type="button" class="btn btn-default last"> 
		      <span style="background-color:black; color:white; padding-left:3px"> oc 
		      </span> 
		    </button>
		  </div> 
      </div> 


      <div v-show="!this.$localStorage.get('login')" class="form-group log" style="display:inline-block">
          <button id="LoginBTN" type="button" class="btn btn-info log1" @click="$modal.show('demo-login')"> LOG IN </button>
          <button id="SignUp" type="button" class="btn btn-primary log1" data-toggle="button" aria-pressed="false" autocomplete="off" @click="$modal.show('demo-sign')">SIGN UP</button>
      </div>

      <div v-show="this.$localStorage.get('login')" class="btn-group log" id="loggedDiv">
        <button type="button" data-toggle="dropdown" class="btn btn-default dropdown-toggle" id="loggedbutton">
        <img  width="20"
          src="../../public//Logo_X.png" > {{ userLog }}  <span class="caret"></span></button>
        <ul class="dropdown-menu">
            <li class="dropdown-header">MY STUFF</li>
            <li><router-link :to="{ name: 'UserProfile', params: {userName:userLog} } ">My Profile</router-link></li>
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

/**
 * @vue-data {string} [userLog=""] name of user logged in
 * @vue-data {string} [searchVal=""] search value  
 * @vue-data {boolean} [canBeShown=false] check shownModal
 * @vue-data {object} [apexs] names op apexComs
*/

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
        apexs:[]
      }
    },
    created () {
      this.apexs = AllServices.getApexNames(),	
      setInterval(() => {
        this.userLog = this.$localStorage.get('userName');
        this.canBeShown = !this.canBeShown
      }, 500)
    },

    methods: {
      /**
       * shown modal if canBeShown being true
      */
      conditionalShow () {
        this.$modal.show('conditional-modal', {
          show: this.canBeShown
        })
      },
      /**
       * axios post request to log out the user through send user's token, delete it from data ,delete username and set login false 
      */
      Logout: function(){
        AllServices.logOut()
        this.$localStorage.set('login', false);
        this.$localStorage.set('token', '');
        this.$localStorage.set('userName', '');
        this.$router.replace('/');
      },
      /**
     * when search value isn't empty transfer to localStorage and go to route search
     */
      search: function(){
        if( this.searchVal != '')
        {
          this.$localStorage.set('search' , this.searchVal),
          this.$router.push({ name:'Search'} )
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
  width:15%
}
input{
  width:100%;
  margin-top:1.2%;
  display:inline-block;
}
.has-search{
  width:40%;
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
@media(max-width:887px){
  .has-search,.drop{
      width:30%;
  }
}
@media(max-width:1186.4px){
  .btn-toolbar, .btn-group{
    display:none
  }
}
@media(max-width:1414px){
  .log,.log1{
  	display: none
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
.btn-toolbar{
	width:20%;
	display: inline-block;
    padding-left: 6%;
}
.btn-group button{
	width:30%;
    margin-bottom:-9%;
    border :1px solid white;
}
button.last{
	border-right: 1px solid #ccc;
}

</style>

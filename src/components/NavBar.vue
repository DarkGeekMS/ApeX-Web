<template>
<div>
 <demo-login-modal> </demo-login-modal>
 <demo-sign-modal> </demo-sign-modal>
 <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top" id="mainNav">
    <router-link class="navbar-brand" :to="{ name: 'NewHomePage' , params: {sortingparam:'hot'}}">
      <img style="margin-top:-8px" width="85"
      src="../../public/Logo_small.png" >
    </router-link>
    <div class="container-fluid">

    <div class="btn-group sel" >
      <button type="button" data-toggle="dropdown" class="btn btn-default dropdown-toggle">
        <i class="glyphicon glyphicon-arrow-up blue" id="classed" ></i>
        <span id="selectted" > Popular</span>
        <span class="caret" style="float:right; margin-top:10px" ></span>
      </button>

      <ul class="dropdown-menu drop1">
        <li class="dropdown-header">APEX FEEDS</li>
        <li v-show="this.$localStorage.get('login')"><a href="/" class="glyphicon glyphicon-home blue" ><span id="items">Home</span></a></li>
        <li><router-link  :to="{ name: 'NewHomePage', params:''}" class="glyphicon glyphicon-arrow-up blue"><span id="items">Popular</span></router-link></li>
        <li><router-link :to="{ name: 'NewHomePage', params:''}" class="glyphicon glyphicon-stats blue"><span id="items">All</span></router-link></li>
        <li><a href="#"> <span style="background-color:blue; color:white; padding-left:3px"> oc </span> <span style="color:black;padding-left:7%">Original Content</span></a></li>

        <li v-show="log" class="divider"></li>

        <li class="dropdown-header" v-show="this.$localStorage.get('login')">MY COMMUNITIES</li>
            <li v-show="log" v-for="apex in apexs" :key="apex.id" ><router-link :to="{ name:'ApexCom', params: {apexComId:apex.id} }" > {{apex.name}} </router-link></li>
      </ul>
    </div>


    <div class="form-group has-feedback has-search" style="display:inline-block">
      <span class="glyphicon glyphicon-search form-control-feedback"></span>
      <input type="text" class="form-control" placeholder="Search Apex" v-model="searchVal" v-on:keyup.enter="search()">
    </div>

    <div class="btn-toolbar tool1" role="toolbar">
    <div class="btn-group">
    <button type="button" class="btn btn-default b1" @click="$router.push({ name: 'HotHomePage', params:'' })">
    <i class="glyphicon glyphicon-arrow-up"></i>
    </button>
    <button type="button" class="btn btn-default b2" @click="$router.push({ name: 'NewHomePage', params:''})">
    <i class="glyphicon glyphicon-stats"></i>
    </button>
    <button type="button" class="btn btn-default b3">
    <span style="background-color:black; color:white; padding-left:3px"> oc </span>
    </button>
    </div>
    </div>

    <div class="btn-toolbar tool2" role="toolbar" v-show="this.$localStorage.get('login')">
      <div class="btn-group">
      <button type="button" class="btn btn-default b4" @click="$router.push({ name:'Messages'})">
      <i class="glyphicon glyphicon-envelope"></i>
      </button>
      <button type="button" class="btn btn-default b5" @click="$router.push('/Submit')">
      <i class="glyphicon glyphicon-edit"></i>
      </button>
      </div>
    </div>


    <div v-show="!this.$localStorage.get('login')" class="form-group log" style="display:inline-block">
      <button id="LoginBTN" type="button" class="btn btn-info log1" @click="$modal.show('demo-login')"> LOG IN </button>
      <button id="SignUp" type="button" class="btn btn-primary log1" data-toggle="button" aria-pressed="false" autocomplete="off" @click="$modal.show('demo-sign')">SIGN UP</button>
    </div>

    <div v-show="this.$localStorage.get('login')" class="btn-group log">
      <button type="button" data-toggle="dropdown" class="btn btn-default dropdown-toggle" id="loggedbutton">
      <img  width="27" src="../../public/AMFz23O.jpg" style="border-radius:30%" ><span id="usernam"> {{ userLog }} </span> <span class="caret" style="float:right; margin-top:10px" ></span>
      </button>
      <ul class="dropdown-menu">
        <li class="dropdown-header">MY STUFF</li>
        <li><router-link :to="{ name: 'UserProfile', params: {userName:userLog} } "><i class="glyphicon glyphicon-user"/> My Profile</router-link></li>
        <li><router-link :to="{ name: 'UserSettings',params:{user:userLog}}" ><i class="glyphicon glyphicon-cog"></i> User Settings</router-link></li>
        <li class="divider"></li>
        <li><a style="cursor:pointer" class="logOut" @click="Logout()"> <i class="glyphicon glyphicon-log-out"></i>   Log Out</a></li>
      </ul>
    </div>

  </div>

  <div class="list pop1"> Popular </div>
  <div class="list pop2"> All </div>
  <div class="list pop3"> Orignal Content </div>

  <div class="list pop4"> Messages </div>
  <div class="list pop5"> Create Post </div>



  </nav>
</div>
</template>

<script>
import DemoLoginModal  from './LoginModal.vue'
import DemoSignModal  from './SignModal.vue'
import {AllServices} from '../MimicServices/AllServices.js'
import $ from'jquery/dist/jquery.min.js'
/**
 * @vue-data {string} [userLog=""] name of user logged in
 * @vue-data {string} [searchVal=""] search value
 * @vue-data {boolean} [canBeShown=false] check shownModal
 * @vue-data {object} [apexs] names op apexComs
*/

  export default {
    components:{
      DemoLoginModal,
      DemoSignModal,
    },
    data () {
      return {
        canBeShown: false,
        userLog: '',
        searchVal: '',
        apexs:[],
        log:false
      }
    },
    created () {
      if(AllServices.getState()){
        AllServices.getApexNames().then((data) =>
        {
          if(data)
          {
            this.apexs = data;
          }
        })
      }
      else{
        AllServices.getApexNames().then((data) =>
        {
          if(data)
          {
            this.apexs = data;
          }
        })
      }
      setInterval(() => {
        this.userLog = this.$localStorage.get('userName');
        this.log = this.$localStorage.get('login');
        this.canBeShown = !this.canBeShown
      }, 500)
    },
    mounted()
    {
      if(this.$localStorage.get('login')){
        $('#selectted').text($('.drop1 a').first().text());
        var className = $($('.drop1 a').first()).prop('class');
        var remclass = $('#classed').prop('class');
        $('#classed').removeClass(remclass);
        $('#classed').addClass(className);
      }

      $('.drop1 a').click(function(){
        $('#selectted').text($(this).text());
        var className = $(this).prop('class');
        var remclass = $('#classed').prop('class');
        $('#classed').removeClass(remclass);
        $('#classed').addClass(className);
      });

      $('.b1').hover(function() {
      $('.pop1').show();
        }, function() {
      $('.pop1').hide();
      });
      $('.b2').hover(function() {
      $('.pop2').show();
        }, function() {
      $('.pop2').hide();
      });
      $('.b3').hover(function() {
      $('.pop3').show();
        }, function() {
      $('.pop3').hide();
      });
      $('.b4').hover(function() {
      $('.pop4').show();
        }, function() {
      $('.pop4').hide();
      });
      $('.b5').hover(function() {
      $('.pop5').show();
        }, function() {
      $('.pop5').hide();
      });
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
        AllServices.logOut().then((data) =>{
          if(data)
          {
            this.$router.replace({ name: 'NewHomePage' , params: {sortingparam:'hot'}});
          }
        })

      },
      /**
     * when search value isn't empty transfer to localStorage and go to route search
     */
      search: function(){
        if( (this.searchVal != '') && (this.searchVal.length >= 3) )
        {
          this.$localStorage.set('search' , this.searchVal),
          this.$router.push({ name:'Search'} )
        }
      },
      fun: function()
      {
        document.getElementById('pop').style.display='block'
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
input{
  width:100%;
  margin-top:8px;
  display:inline-block;
  background-color:rgb(246, 247, 250);
}
input:hover{
  background-color:white;
}
.has-search{
  width:41.5%;
  height:100%;
}
.has-search .form-control-feedback {
    right: initial;
    left: 0;
    color: #ccc;
    margin-top:8px
}
.has-search .form-control {
    padding-right: 12px;
    padding-left: 34px;
}
.log{
  height:100%;
  float:right;
  margin-top:0.3%;
  width:15%;
  margin-right: .5%;
  margin-left:0;
}
.log1{
  width:45%;
  padding-right: -5px;
  margin:4px 1%;
}
@media(max-width:106px){
  div .sel{
    display: none
  }
}
@media(max-width:232px){
  div input,.has-search .form-control-feedback {
    display: none
  }

}
@media(max-width:319px){
  div .log, div .sel .caret {
    display: none
  }
}
@media(max-width:520px){
  div .log .caret,.log1{
    display: none
  }
}
@media(max-width:625px){
  div .log  #LoginBTN{
    display: none
  }
}
@media(max-width:971px){
  div .tool1{
    display:none
  }
  div .log #LoginBTN{
    width:75px;
    margin:7px 5px 7px -70%;
  }
  div .log #SignUp{
    width:75px;
    margin-right: -25px
  }
}
@media(max-width:997px){
  div #selectted{
    display: none;
  }
  .has-search{
    width:30%;
  }
}
@media(max-width:1054px){
  div .tool2
  {
    display: none  }
  div .tool1{
    margin-left: 4%
  }
}
@media(max-width:1211px){
  div #usernam{
    display: none;
  }

  div .tool1, div .tool2 {
    padding-left: .5%
  }
}
@media(max-width:1350px){
  div .log{
    width: 13%
  }
  .log1
  {
    width:45%;
  }
}
#loggedbutton{
  width:100%;
  font-size:15px;
  border-radius: 10px;
  text-align: left
}
#loggedbutton:hover {
  border:1px solid #ccc6;
  background-color: white
}
ul{
  width:95%;
  margin:2px 4px;
}
.tool1{
  width:10%;
  display: inline-block;
  margin-bottom: -15px;
  padding-left: 10px;

}
.tool1 .btn-group{
  border-right: 1px solid #ccc;

}
.btn-group button{
  width:30%;
  border :1px solid white;
  border-radius: 0
}
.tool2{
  width:6%;
  display: inline-block;
  margin-bottom: -15px;
}
.tool2 button{
  width:45%;
}

.sel{
  width:20%;
  padding-right: 1%;
  box-sizing: border-box;
}

.sel button{
  width:100%;
  text-align: left;
  font-size: 15px;
  border-radius: 10px;

}
.sel button:hover{
  border:1px solid #ccc6;
  background-color:white;
}
.sel li a{
  padding-right: 8px;
  cursor: pointer;
}
.blue{
  color:blue;
}
a #items{
  color:black;
  padding-left: 10%;
  font-size: 16px
}
#selectted{
  padding-left:8%;
  line-height: 18px;
  font-size: 14px
}
#classed{
  color:blue;
}

.drop1{
  width:93%;
  max-height:450px;
  overflow: scroll
}

.list{
  border: none;
  width: 50px;
  height: 80%;
  line-height: 9px;
  padding: 0.3%;
  color:white;
  background-color: #000;
  border-radius: 10px;
  font-size: 12px;
  transition: all ease-in-out 0.5s;
  margin-left:68%;
  margin-top: -0.8%;
  display: none;
}
.pop2
{
  width:25px;
  margin-left:71.5%;
}
.pop3
{
  width:95px;
  margin-left:72%;
}
.pop4
{
  width:64px;
  margin-left:76.5%;
}
.pop5
{
  width:75px;
  margin-left:78.5%;
}
</style>

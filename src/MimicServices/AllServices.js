import Vue from 'vue'
import {MimicDisplayPosts} from './DisplayPosts.js'
import {MimicAuth} from './Authentication.js'
import {MimicApexCom} from './ApexCom.js'
import {MimicUserProfile} from './UserProfile.js'


export  const AllServices =new Vue({
  data(){
    return{
      mimic:true
    }
  },
  methods:{
    signUp: function(user,pass)
    {
       return MimicAuth.SignUp(user,pass,this.mimic);
    },
    logOut: function()
    {
    	MimicAuth.LogOut(this.mimic);
    },
    logIn: function(user,pass)
    {
    	return MimicAuth.LogIn(user,pass,this.mimic);
    }
    getPosts:function(ApexComName) {
 	   var posts=MimicDisplayPosts.getPostsData(this.mimic,ApexComName);
       return posts
    },
	getAbout:function(ApexComName) {
	  var about=MimicApexCom.getAbout(this.mimic,ApexComName);
	    return about
	},
	getSubscribers:function(ApexComName) {
	  var SubscribersList=MimicApexCom.getSubscribers(this.mimic,ApexComName);
	    return SubscribersList
	},
	getUserInfo:function() {
	  var profileInfo=MimicUserProfile.getUserInfo(this.mimic);
	    return profileInfo
	},
	getUserInfoById:function(userName) {
	  var userInfo=MimicUserProfile.getUserInfoById(this.mimic,userName);
	    return userInfo
	},
  }

})

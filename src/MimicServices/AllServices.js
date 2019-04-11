import Vue from 'vue'
import {MimicDisplayPosts} from './DisplayPosts.js'
import {MimicCreatePosts} from './CreatePost.js'
import {MimicPost} from './CreatePost.js'
import {MimicAuth} from './Authentication.js'
import {MimicApexCom} from './ApexCom.js'
import {MimicUserProfile} from './UserProfile.js'
import { MimicPosts } from './Post.js';


export  const AllServices =new Vue({
  data(){
    return{
      mimic:true
    }
  },
  methods:{
    getPosts:function() {
  var posts=MimicDisplayPosts.getPostsData(this.mimic);
    return posts
},
    submit:function(){
      MimicCreatePosts.submitPost(this.mimic);

    },
    Post:function(){
      MimicPost.Post(this.mimic);

    },

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
    },
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
  save:function(token,ID){
    return MimicPosts.save(token,ID,this.mimic);
    
  },
Hide:function(name,ID){
return MimicPost.Hide(name,ID,this.mimic);
},
upvote:function(name,ID,direction){

return MimicPost.upvote(name,ID,direction,this.mimic);
},
downvote:function(name,ID,direction){

return MimicPost.downvote(name,ID,direction,this.mimic);
},
deletePost:function(name,ID){


  return MimicPost.deletePost(name,ID,this.mimic);
},

userType:function(){
  var data=MimicUserProfile.getUserType(this.mimic);
  return data
},
deleteSubscriber:function(userName,ApexComName){
  var data=MimicApexCom.deleteSubscriber(this.mimic,userName,ApexComName);
  return data
},
deleteUser:function(userName){
  var data=MimicUserProfile.deleteUser(this.mimic,userName);
  return data
},
deleteApexCom:function(apexComName){
  var data=MimicApexCom.deleteApexCom(this.mimic,apexComName);
  return data
},
subscribe:function(apexComName){
  var data=MimicApexCom.subscribe(this.mimic,apexComName);
  return data 
},




  }

})

import Vue from 'vue'
import {MimicDisplayPosts} from './DisplayPosts.js'
import {MimicAuth} from './Authentication.js'
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
  }
})

import Vue from 'vue'
import {MimicDisplayPosts} from './DisplayPosts.js'
import {MimicCreatePosts} from './CreatePost.js'
import {MimicPost} from './CreatePost.js'

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

    }






}
})

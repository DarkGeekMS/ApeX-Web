import Vue from 'vue'
import {MimicDisplayPosts} from './DisplayPosts.js'
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
}
}
})

<template>
  <div id="DisplayPosts">
    <div id="PostContainer" v-for="onepost in posts">
     <post v-bind:postdata="onepost" v-on:showUp="showPost"></post>
    </div>
    <DemoOnePost v-bind:style="{width: 80 +'%'}" id="PostModal" :onepostdata="postInfo" :style></DemoOnePost>
  </div>
</template>

<script>
import axios from 'axios'
import post from "./Post.vue"
import DemoOnePost from './DisplayOnePost.vue'
import {globalStore} from '../main.js'
import {AllServices} from '../MimicServices/AllServices.js'
export default {
  props:{
    ApexComName:String
    },
data(){
return{
  postInfo:'',
  posts:'',


     }
},
mounted:function () {
  this.getPosts();
  },


methods:
{

  showPost:function(post)
    {
    this.postInfo=post;
    },

   getPosts(){
         this.posts= AllServices.getPosts(this.ApexComName);
   }

},
components:{
  'post':post,
  'DemoOnePost':DemoOnePost
}

}
</script>

<style scoped>
</style>

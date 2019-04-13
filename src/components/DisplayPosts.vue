<template>
  <div id="DisplayPosts">
    <div id="PostContainer" v-for="onePost in posts">
     <post v-bind:postData="onePost" v-on:showUp="showPost"></post>
    </div>
    <DemoOnePost  id="PostModal" :onePostData="postInfo" ></DemoOnePost>
    <!-- v-bind:style="{width: 80 +'%'}" -->
  </div>
</template>

<script>
import post from "./Post.vue"
import DemoOnePost from './DisplayOnePost.vue'
import {globalStore} from '../main.js'
import {AllServices} from '../MimicServices/AllServices.js'
export default {
  props:{
    apexComName:String
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
         AllServices.getPosts(this.apexComName).then((data) => {
          this.posts= data;
         })
   }

},
components:{
  'post':post,
  'DemoOnePost':DemoOnePost
}

}
</script>

<style scoped>
#DisplayPosts{
   width: 60%;
  display: inline-block;
}
</style>

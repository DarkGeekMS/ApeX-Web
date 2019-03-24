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
import {MimicDisplayPosts} from '../MimicServices/DisplayPosts.js'
export default {
data(){
return{
  postInfo:'',
  posts:'',


     }
},
mounted:function () {
  this.getPosts();
  this.mimicgetPosts();
},


methods:
{

  showPost:function(post)
    {
    this.postInfo=post;
    },

  mimicgetPosts()
    {
    this.posts= MimicDisplayPosts.getPostsData();
    },

   getPosts()
    {
      axios.get('http://localhost/sort_posts',
      {
        ApexCommID: "YNL2AYkKaW4mwaE8",
        SortingParam: "date"
      })
      .then(function (response) {
        // console.log(response);
       })
      .catch(function (error) {
       // console.log(error);
       });
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

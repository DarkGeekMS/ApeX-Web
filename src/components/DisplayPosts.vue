<template>
  <div id="DisplayPosts">
    <div id="PostContainer" v-for="onePost in posts">
     <post v-bind:postData="onePost" v-on:showUp="showPost" ></post>
    </div>
    <DemoOnePost  id="PostModal" :onePostData="postInfo" ></DemoOnePost>
    <!-- v-bind:style="{width: 80 +'%'}" -->
  </div>
</template>

<script>
import post from "./Post.vue"
import DemoOnePost from './DisplayOnePost.vue'
import {AllServices} from '../MimicServices/AllServices.js'
/**
 * @vue-data {object} [postInfo='']  the content of the post to be displayed on the modal
 * @vue-data {objects} [posts=''] the content of all the posts taken from the server
 * @vue-prop  {string} apexComName -community name to be sent to the server to get posts posted in it
 */
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
  /**
  * assign the post to be shown in the modal
  */
  showPost:function(post)
    {
    this.postInfo=post;
    },
    /**
    * request gets posts from a certain ApexCom
    */
   getPosts(){
     if(AllServices.getState()){
       this.posts= AllServices.getPosts(this.apexComName);
     }
     else{
         AllServices.getPosts(this.apexComName).then((data) => {
          this.posts= data;
         })
   }
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

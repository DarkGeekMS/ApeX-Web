<template>
  <div id="DisplayPosts">
    <div id="PostContainer" v-for="onePost in posts" :key="onePost.id">
     <post
      v-bind:postData="onePost"
      v-on:showUp="showPost"
      v-on:lockComment="ifLock"
  
      >
      </post>
  
    </div>
    <OnePost  id="PostModal" :onePostData="postInfo"   v-on:HIDE="hide_Post" ></OnePost>
    <!-- v-bind:style="{width: 80 +'%'}" -->

  </div>
</template>

<script>
import post from "./Post.vue"
import OnePost from './DisplayOnePost.vue'
import {AllServices} from '../MimicServices/AllServices.js'
/**
 * @vue-data {object} [postInfo='']  the content of the post to be displayed on the modal
 * @vue-data {objects} [posts=''] the content of all the posts taken from the server
 * @vue-prop  {string} apexComName -community name to be sent to the server to get posts posted in it
 */
export default {
  props:{
    apexComName:String,
    sortparam:String,
    postData:{}// VERY IMPORTANT TO PREVENT THE ERRORS IN CONSOLE
    ,postInfo:{
      ID:'0'
    }
    },
data(){
return{

  posts:'',


     }
},
mounted:function () {
  this.getPosts();

  },
beforeUpdate(){

this.getPosts();


},

methods:
{
   ifLock(e){
     return e;

   },
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


         AllServices.getPosts(this.apexComName,this.sortparam).then((data) => {
           this.posts= data;
                
         })

}
},
components:{
  'post':post,
  'OnePost':OnePost
}

}
</script>

<style scoped>

#PostContainer{



}
#PostModal{
  width: 10%;
  height: 10%;
  background: red;


}
#DisplayPosts{
   /* width: 100%; */
  display: inline-block;
  padding-top: 0%;
  margin-top: 6%;
}

</style>

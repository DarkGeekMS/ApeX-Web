<template>
  <div id="DisplayPosts">
    <div :id="onePost.id" v-for="onePost in posts" :key="onePost.id">
     <post
      v-bind:postData="onePost"
      v-on:showUp="showPost"

      >
      </post>

    </div>
    <OnePost
     id="PostModal"
     :onePostData="postInfo"
     v-bind:upVoted="upVoted"
     v-bind:downVoted="downVoted"></OnePost>
    <!-- v-bind:style="{width: 80 +'%'}" -->

  </div>
</template>

<script>
import post from "./Post.vue"
import OnePost from './DisplayOnePost.vue'
import {AllServices} from '../MimicServices/AllServices.js'
/**
 * @vue-data {object} [postInfo='']  the content of the post to be displayed on the modal
 * @vue-data {objects} [posts=''] the content of all the posts of an ApexCom taken from the server
 * @vue-data {objects} [personalPosts] the content of  the personal posts of the user taken from the server
 * @vue-data {objects} [hiddenPosts] the content of all the hidden posts of the user taken from the server
 * @vue-data {objects} [savedPosts] the content of all the saved posts of the user taken from the server
 * @vue-data  {Boolean} upVoted -Boolean value for a specific post upVoted or not
 * @vue-data  {Boolean} downVoted -Boolean value for a specific post downVoted or not
 * @vue-prop  {string} apexComName -community name to be sent to the server to get posts posted in it
 * @vue-prop  {string} sortparam -the sorting parameter the posts are displayed with
 * @vue-prop  {Boolean} user -true if we are in a userprofile false if we are not
 * @vue-prop  {string} userName -the Name of the user that we are in his profile
 */
export default {
  props:{
    apexComName:String,
    sortparam:String,
    user:Boolean,
    userName:'',

    postData:{}// VERY IMPORTANT TO PREVENT THE ERRORS IN CONSOLE

    },
data(){
return{
  savedPosts:{},
  hiddenPosts:{},
  personalPosts:{},
  posts:'',
  postInfo:'',
  upVoted:false,
  downVoted:false

     }
},
mounted () {
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
    * request gets posts from a certain ApexCom or a certain user(saved or hidden or personal)
    */
   getPosts(){
if(this.user){
  if(this.userName==this.$localStorage.get('userName')){

  if(this.sortparam=="saved"){
  AllServices.getUserInfo().then((data) =>{
  this.posts = data.saved_posts;
})
}
else if(this.sortparam=="hidden"){
  AllServices.getUserInfo().then((data) =>{
  this.posts = data.hidden_posts;
})
}

else if(this.sortparam=="personal"){
  AllServices.getUserInfo().then((data) =>{
  this.posts = data.posts;
})
}
}
else{
  if (this.$localStorage.get('token') == null)
{
  AllServices.getUserInfoByIdforGuest(this.userName).then((data) =>{ this.posts = data.posts;})
}
else{

  AllServices.getUserInfoById(this.userName).then((data) =>{this.posts = data.posts;})
}
}
}
else{
         AllServices.getPosts(this.apexComName,this.sortparam).then((data) => {
          this.posts= data;
          })
      }

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
  margin-top: 0.5%;
}

</style>

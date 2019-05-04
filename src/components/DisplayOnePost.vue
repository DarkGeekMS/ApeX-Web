<template>
<div id="DisplayOnePost" class="modalview">
<modal id="PopupModal" name="Demo-OnePost" :scrollable="true" @before-close="close()"  transition="pop-out"  width="90%" height="auto">
  <div id="PostContent" class="postContent">
    <div>

  <post
    v-bind:postData="onePostData"
    class="mainpost"
    id="postModal"


  ></post>
  </div>
 <ApexComSideBar
   v-bind:apexComId= onePostData.apex_id
      v-on:mod = moderators
 class="sidebar"></ApexComSideBar>

      <CommentParent

      v-show="onePostData.locked==0"
      v-bind:postID= onePostData.id
      class="cmt"
      v-bind:postOwnerUserName = 'postOwnerUserName'
      v-bind:moderatorsUserNames = 'moderatorsUserNames'
      >
      </CommentParent>

</div>
</modal>
</div>

</template>

<script>
import post from "./Post.vue"
import CommentParent from "./CommentParent.vue"
import ApexComSideBar from "./ApexComSideBar.vue"
/**
 * @vue-prop  {object} onePostData - the data of the post in the modal
 */
export default {
name: 'DemoOnePost',
props:{
  onePostData:{

  },


},
components:
{
  'Post':post,
  'CommentParent':CommentParent,
  'ApexComSideBar':ApexComSideBar
},
close: function () {
  alert("sss")
},
methods:{
moderators:function(m){
  this.moderatorsUserNames = m;
}

},
updated(){


},
created(){

    //  setInterval(() => console.log(this.onePostData.id ),1000);

},
  data(){
    return{

      locked:false,
      postOwnerUserName : this.onePostData.posted_by,
      moderatorsUserNames : []

    };
      }

}
</script>

<style lang="scss" scoped >
#PopupModal{
    overflow: scroll;
  background:#333333;
}
.postContent{
overflow: scroll;
height: 100%;
width: 100%;
background-color: #DAE0E6;
}
.cmt{
// padding-top: 3%;
 padding-block-start: 0%;
 padding-left: 10%;
 margin-top: 23%;
 width: 100%;

}
.sidebar{


}

#postModal
{
  width: 65%;
  margin-left: 0%;
  margin-right: 0%;
  padding-top: 3%;
  margin-top: 0%;
  float:left;
   display: inline-block;



}
#modalView{


}


</style>

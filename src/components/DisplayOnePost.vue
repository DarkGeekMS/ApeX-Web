<template>
<div id="DisplayOnePost" class="modalview">
<modal id="PopupModal" name="Demo-OnePost" :scrollable="true"  transition="pop-out"  width="90%" height="90%" >
  <div id="PostContent" class="postContent">
    <div >
  <post v-bind:postData="onePostData" class="mainpost" id="postModal"></post>
  </div>
 <ApexComSideBar class="sidebar"></ApexComSideBar>
   
      <CommentParent postID='t3_10' class="cmt"></CommentParent>

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
  onePostData:{},
},
components:
{
  'Post':post,
  'CommentParent':CommentParent,
  'ApexComSideBar':ApexComSideBar
},


}
</script>

<style lang="scss" scoped >
#PopupModal{
    overflow: scroll;
}
.postContent{
overflow: scroll;
height: 100%;
width: 100%;
}
.cmt{
// padding-top: 3%;
 padding-block-start: 0%;
 padding-left: 10%;
 margin-top: 23%;
 width: 100%;
}
.sidebar{
  width:25%;
  height: auto;
  margin:8%;
  margin-left: 3%;
  margin-right: 6%;
  /* background-color:white; */
   float:right;
  padding-top: 0%;
   display: inline-block;
 
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


</style>

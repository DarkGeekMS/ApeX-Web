<template>
<div id="DisplayOnePost" class="modalview">
<modal id="PopupModal" name="Demo-OnePost" :scrollable="true"  transition="pop-out"  width="80%" height="80%" >
  <div id="PostContent" class="postContent">
  <post class="mainpost" v-bind:postData="onePostData"></post>
  <CommentParent postID='t3_10' class="cmt"></CommentParent>
 <ApexComSideBar class="sidebar"></ApexComSideBar>
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
}
.sidebar{
  width:25%;
  height: auto;
  margin:8%;
  margin-left: 3%;
  margin-right: 6%;
  /* background-color:white; */
  float:right;
}
.mainpost
{
  
}
</style>

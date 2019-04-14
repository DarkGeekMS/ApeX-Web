<template>
<div id="DisplayOnePost" class="modalview">
<modal id="PopupModal" name="Demo-OnePost" transition="pop-out" :width="1300" :height="700" >
  <div id="PostContent" class="postContent">
  <post v-bind:postData="onePostData"></post>
  <CommentParent postID='t3_10' class="cmt"></CommentParent>

</div>
</modal>
</div>

</template>

<script>
import post from "./Post.vue"
import CommentParent from "./CommentParent.vue"

export default {
name: 'DemoOnePost',
props:{
  onePostData:{},
},
components:
{
  'Post':post,
  'CommentParent':CommentParent
}

}
</script>

<style lang="scss" scoped >
.postContent{
overflow: auto;
height: 700px;
width: 1300px;
// min-width: 1000px;
// min-height: 800px;
}
.modalview{
  overflow: auto;
  height: 700px;
  width: 1300px;
  min-width: 1300px;
  min-height: 700px;
}

.cmt{
// padding-top: 3%;
 padding-block-start: 0%;
 padding-left: 10%;
}
</style>

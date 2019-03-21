<template>
<div id="DisplayOnePost" class="Modalview">
<modal id="PopupModal" name="Demo-OnePost" transition="pop-out" :width="1300" :height="700" >
  <div id="PostContent" class="PostContent">
  <post v-bind:postdata="onepostdata"></post>
  <CommentParent userID=this.onepostdata ></CommentParent>

</div>
</modal>
</div>

</template>

<script>
import post from "./Post.vue"
import CommentParent from "./CommentParent.vue"

export default {
name: 'DemoOnePost',
data(){
return{
Title:'marc',
singlepostdata: this.onepostdata
}
},
props:{
  onepostdata:{},
},
methods:{
  test:function()
  {
    alert('gada3 yala');

  },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH
  },
},
components:{
'Post':post,
'CommentParent':CommentParent
}

}
</script>

<style lang="scss" scoped >
.PostContent{
overflow: auto;
height: 700px;
width: 1300px;
// min-width: 1000px;
// min-height: 800px;
}
.Modalview{
  overflow: auto;
  height: 700px;
  width: 1300px;
  min-width: 1300px;
  min-height: 700px;



}
</style>

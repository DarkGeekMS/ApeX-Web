<template>
<div id="DisplayOnePost" class="modalview">
<modal id="PopupModal" name="Demo-OnePost" :scrollable="true"  transition="pop-out"  width="90%" height="auto">
  <div id="PostContent" class="postContent">
    <div>
      
  <post
    v-bind:postData="onePostData"
    class="mainpost" 
    id="postModal"
    v-on:lockComment="lock($event)"
  ></post>
  </div>
 <ApexComSideBar 
   v-bind:apexComId= onePostData.apex_id
 class="sidebar"></ApexComSideBar>
   
      <CommentParent 
     
      v-show="onePostData.locked==0" 
      v-bind:postID= onePostData.id 
      class="cmt"  
      v-on:lockComment="lock($event)" 
      v-bind:postOwnerUserName = 'postOwnerUserName'
      v-bind:moderatorUserName = 'moderatorUserName'
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

  }
},
components:
{
  'Post':post,
  'CommentParent':CommentParent,
  'ApexComSideBar':ApexComSideBar
},
methods:{
  lock:function(event){

if(event=='Lock'){
     this.locked=false;
    
}
else{this.locked=true;
     }
  }

},
updated(){


},
created(){
 
},
  data(){
    return{

      locked:false,
      postOwnerUserName : "hohoho",
      moderatorUserName : 'FF',
      
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

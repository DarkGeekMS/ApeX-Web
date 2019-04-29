<template>
<div id="DisplayOnePost" class="modalview">
<modal id="PopupModal" name="Demo-OnePost" :scrollable="true"  transition="pop-out"  width="90%" height="90%" >
  <div id="PostContent" class="postContent">
    <div>
  <post v-bind:postData="onePostData" class="mainpost" id="postModal" v-on:lockComment="lock($event)"></post>
  </div>
 <ApexComSideBar class="sidebar"></ApexComSideBar>
   
      <CommentParent 
     
      v-show="!this.locked" 
      postID='t3_10' 
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
  onePostData:{}
},
components:
{
  'Post':post,
  'CommentParent':CommentParent,
  'ApexComSideBar':ApexComSideBar
},
methods:{
  lock:function(event){
    // this.locked=true;
    // alert('done');
if(event=='Lock'){
     this.locked=false;
     //alert(this.locked);
}
else{this.locked=true;
     }
  }

},
  data(){
    return{

      locked:false,
      postOwnerUserName : "hohoho",
      moderatorUserName : 'FF'
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
  // width:25%;
  // height: auto;
  // margin:8%;
  // margin-left: 3%;
  // margin-right: 6%;
  // /* background-color:white; */
  //  float:right;
  // padding-top: 0%;
  //  display: inline-block;

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

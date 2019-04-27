<template>
  <div id="submitPage" >  
<CreatePostSideBar></CreatePostSideBar>
<Post v-bind:postData="createPostData" class="postStyle" v-if="isCreated"> </Post>
<CreatePost v-on:PostEmit="getData" v-if="firstTime" id="createPost"></CreatePost>
<CommentParent v-if="isCreated" class="comment"></CommentParent>

  </div>
</template>

<script>
import CommentParent from "./CommentParent.vue"
import Post from './Post.vue'
import CreatePost from './CreatePost.vue'
import CreatePostSideBar from './CreatePostSideBar.vue'
export default {
    data(){
     return{
      
         showCreateEdit:false,
         isCreated:false,
         firstTime:true,
       
         postInfo:'',
         posts:'',
          createPostData:{
            canEdit:false,
             id:'',
              posted_by:'',
              apex_id:'',
              title:'',
              content:'',
              locked:false,
              commenets_count:0,
              votes:1,
              img:'',
              videolink:'',
              created_at:"",
              updates_at:null,
              apex_com_name:"",
              post_writer_user:""




     }

    }
    },
  name: 'submitPage',

  components:{
    'Post':Post,
    'CreatePost':CreatePost,
    CreatePostSideBar,
    CommentParent

  
  },

  methods:{
    getData(title,content,img,video,author,apex){
     //  alert('ana emit ');
    
        if(content || img ||video){
          this.isCreated=true;
          this.firstTime=false;
          this.createPostData.canEdit=true;
        }

     
      // this.createPostData.content=e.bodyPost;
      this.createPostData.content=content;
      this.createPostData.img=img;
      this.createPostData.videolink=video;
      this.createPostData.posted_by=author;
      this.createPostData.title=title;
      this.createPostData.apex_id=apex;
      this.createPostData.canEdit=true;

      
   
    },
    EditPost(){
   
      this.showCreateEdit=true;
      this.isCreated=true;
    }
  },
  created(){

 
  },
  props:{
    postData:{},
    retriveData:{
      retriveContent:'',
      retriveImg:'',
      retriveVideo:'',
      retriveAuthor:'',
      retriveTitle:'',
      retriveApexId:'',
      Edit:true

    }
  }

}

</script>

<style scoped>
.postStyle{
width: 80%;
padding-top:10%;
margin-left:-17% !important;

}
.comment{
  width:109%;
}


</style>

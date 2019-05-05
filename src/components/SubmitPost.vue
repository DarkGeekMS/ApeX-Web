<template>
  <div id="submitPage" >  
<CreatePostSideBar></CreatePostSideBar>
<Post v-bind:postData="createPostData" class="postStyle" v-if="this.isCreated"></Post>
<CreatePost v-on:PostEmit="getData" v-if="firstTime" id="createPost"></CreatePost>
<CommentParent 
  
      v-bind:postOwnerUserName = 'postOwnerUserName'
      v-bind:moderatorsUserNames = 'moderatorsUserNames'
      v-bind:postID= createPostData.id  
      v-if="this.isCreated" class="comment"
></CommentParent>

  </div>
</template>

<script>
import CommentParent from "./CommentParent.vue"
import Post from './Post.vue'
import CreatePost from './CreatePost.vue'
import CreatePostSideBar from './CreatePostSideBar.vue'
/**
 * @vue-data {boolean} [showCreateEdit=false] showEditButton
 * @vue-data {boolean} [isCreated=false]    check if the post is created or not
 * @vue-data {boolean} [firstTime=true]    check if it is the first time to show the create form
 *@vue-prop {object} [createPostData] the data of the post
 *@vue-prop {object} [postData] the data of the post
 */
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
              img:null,
              videolink:null,
              created_at:"",
              updates_at:null,
              apex_com_name:"",
              post_writer_username:"",
              current_user_vote:1,
              current_user_saved_post:false
     },
      postOwnerUserName : '',
      moderatorsUserNames : []
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
   /**
    * it emit methods which receive the data which is just created to display the post
    */
    getData(id,d,title,content,img,video,author,apex){
    
    this.isCreated=true;
        if(content || img ||video){
       
          this.isCreated=true;
          this.firstTime=false;
          this.createPostData.canEdit=true;
        }

     

      this.createPostData.content=content;
      this.createPostData.img=img;
      this.createPostData.videolink=video;
      this.createPostData.post_writer_username=author;
      this.createPostData.title=title;
      this.createPostData.apex_com_name=apex;
      this.createPostData.canEdit=true;
      this.createPostData.created_at=d;
      this.createPostData.id=id;
      this.postOwnerUserName=author;
    
     

      
   
    },
    /**
    * it just show the edit textarea
    */
    EditPost(){
   
      this.showCreateEdit=true;
      this.isCreated=true;
    }
  },
  props:{
    postData:{},
    
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

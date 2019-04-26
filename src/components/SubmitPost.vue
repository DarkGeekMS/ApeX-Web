<template>
  <div id="submitPage" >  
<Post v-bind:postData="createPostData" class="postStyle" v-if="isCreated"> </Post>
<CreatePost v-on:PostEmit="getData" v-if="firstTime"></CreatePost>


  </div>
</template>

<script>

import Post from './Post.vue'
import CreatePost from './CreatePost.vue'

export default {
    data(){
     return{
         isCreated:false,
         firstTime:true,
       
         postInfo:'',
         posts:'',
          createPostData:{

             id:'',
              posted_by:'',
              apex_id:'',
              title:'',
              content:'',
              locked:false,
              commenets_count:5,
              votes:9,
              img:'',
              videolink:'',
              created_at:"2019-03-23 17:20:45",
              updates_at:null,
              apex_com_name:"health care",
              post_writer_user:"double"




     }

    }
    },
  name: 'submitPage',

  components:{
    'Post':Post,
    'CreatePost':CreatePost,
  
  },

  methods:{
    getData(title,content,img,video,author,apex){
     //  alert('ana emit ');
    
        if(content || img ||video){
          this.isCreated=true;
          this.firstTime=false;
        }

     
      // this.createPostData.content=e.bodyPost;
       this.createPostData.content=content;
       this.createPostData.img=img;
       this.createPostData.videolink=video;
       this.createPostData.posted_by=author;
       this.createPostData.title=title;
       this.createPostData.apex_id=apex;


      
   
    }
  },
  created(){

 
  }

}

</script>

<style scoped>
.postStyle{

width: 80%;
padding-top:10%;
margin-left:-17% !important;


}
</style>

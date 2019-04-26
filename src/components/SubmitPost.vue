<template>
  <div id="submitPage" >  
<Post v-bind:postData="createPostData" class="postStyle" v-if="isCreated"> </Post>
<CreatePost v-on:PostEmit="getData($event)" v-if="firstTime"></CreatePost>


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
         showCreatePost:true,
         postInfo:'',
         posts:'',
          createPostData:{

             id:'',
              posted_by:'',
              apex_id:'',
              title:'dj',
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
    getData(e){
      // alert('ana emit ');
    
        if(e){
          this.isCreated=true;
          this.firstTime=false;
        }

     
      // this.createPostData.content=e.bodyPost;
       this.createPostData.content=e;
   
    }
  },
  created(){
   
     
  }

}

</script>

<style scoped>
.postStyle{

width: 50%;
padding-top:10%;


}
</style>

<template>
  <div id="submitPage" >  
<Post v-bind:postData="createPostData" class="postStyle" v-if="isCreated"> </Post>
<CreatePost v-on:PostEmit="getData($event)" v-if="!isCreated"></CreatePost>


  </div>
</template>

<script>

import Post from './Post.vue'
import CreatePost from './CreatePost.vue'

export default {
    data(){
     return{
         isCreated:false,
         showCreatePost:true,
         postInfo:'',
         posts:'',
          createPostData:{

             id:'555',
              posted_by:'Nada',
              apex_id:'555',
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
 props:{
 Data:{}
  

},
  components:{
    'Post':Post,
    'CreatePost':CreatePost,
  
  },

  methods:{
    getData(e){
     
    
        if(e.bodyPost){
          this.isCreated=true;
        }
        alert(e.bodyPost);
     
       this.createPostData.content=e;
       //this.createPostData.img=e.imgName;
   
    }
  }

}

</script>

<style scoped>
.postStyle{

width: 50%;
padding-top:10%;


}
</style>

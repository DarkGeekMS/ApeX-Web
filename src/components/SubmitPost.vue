<template>
  <div id="submitPage" >  

<Post  v-on:PostEmit="getData($event)"  v-bind:postData="createPostData" class="postStyle" > </Post>




  </div>
</template>

<script>
import Post from './Post.vue'
import CreatePost from './CreatePost.vue'
export default {
    data(){
     return{

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

  

},
  components:{
    'Post':Post,
    'CreatePost':CreatePost,
  
  },
  methods:{
  
    getData(e){
   this.createPostData.content=e;
        alert('hello');
    }


  },
  created(){
//this.getData();
    //  this.createPostData.content="hello";
  }
}

</script>

<style scoped>
.postStyle{

width: 50%;
padding-top:10%;


}
</style>

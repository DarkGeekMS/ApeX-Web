<template id="reportspagedesign">
<div>
<div id='report' v-for="report in reports" :key="report.id">
    <post v-bind:postdata="getPostData(report.postID)"></post>
    <CommentParent v-bind:postdata="getPostData(report.postID,report.commentID)" ></CommentParent>
</div>
</div>
</template>

<script>
import axios from 'axios'
import post from "./Post.vue"
import {globalStore} from '../main.js'
import CommentParent from "./CommentParent.vue"

export default {
  components:
{
  'Post':post,
  'CommentParent':CommentParent
},
  props:{
      reports:Array,
    },
  data () {  
    return {
      token:globalStore.token,
      ApexComName:'',//must be send
    }
  },
  methods:
  {
    getPostData:function(postid){
      axios.get('http://localhost/post_by_id', {
    params: {
      Token:this.token,
      postid:this.postid,
    }
  })
  .then(function (response) {
      return response; //////////make sure of this
  })
  .catch(function (error) {
    console.log(error);
  });

    },
  },
  mounted()
  {
    if(this.report == 0){
    axios.get('http://localhost/review_reports', {
    params: {
      Token:this.token,
      ApexCom_id:this.ApexComName,
    }
  })
  .then(function (response) {
      this.reports = response.report;
  })
  .catch(function (error) {
    console.log(error);
  });}
  }
}
</script>

<style scoped>
.report{
  width:100%;
  height:auto;
  background-color:white;
  margin:1% 0%;
  padding:4% 3%;
  border-radius: 8px;
}
</style>

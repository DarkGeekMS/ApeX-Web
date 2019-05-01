<template id="reportspagedesign">
<div class="main">
<h4 v-show="(reportedPost.length ==0)&&(reportedComment.length ==0)" >there is nothing to show </h4>
 <div class='report' v-show="reportedComment.length !==0">
   <h4 class="title">Reported comments</h4>
<div class="onereport" v-for="(report,index) in reportedComment" :key="report.id" id='onereport'>
  <div class="box">
  <h4>Reported by:</h4><router-link class="accountLink" :to="{name:'UserProfile' , params: {userName:report.userName}}"> {{report.userName}}</router-link>
  </div>
  <post class="post" v-bind:postData="report.post" ></post>
  
  <Comment class="comment"
  v-bind:user= report.comment.user  v-bind:level= report.comment.level 
  v-bind:content= report.comment.content v-bind:con= report.comment.con
   v-bind:idx= report.comment.idx v-bind:parentIdx= report.comment.parentIdx 
  v-bind:parentID= report.comment.parentID v-bind:ID= report.comment.currentID ></Comment>
<div class="box">
<h4>Reason:</h4> <h4>{{report.reason}}</h4>
</div>
<button id="ignorebutton" class="button" type="button" v-on:click="ignoreReport(report.comment.user,report.id,index,'comment')">ignore report</button>
</div>
</div>
 <div class='report' v-show="reportedPost.length !==0">
   <h4 class="title">Reported posts</h4>
<div class="onereport" v-for="(report,index) in reportedPost" :key="report.id">
  <div class="box">
  <h4>Reported by:</h4><router-link class="accountLink" :to="{name:'UserProfile' , params: {userName:report.userName}}"> {{report.userName}}</router-link>
  </div>
  <post class="post" v-bind:postData="report.post" ></post>
<div class="box">
<h4>Reason:</h4> <h4>{{report.reason}}</h4>
</div>
<button id="ignorebutton" class="button" type="button" v-on:click="ignoreReport(report.post.posted_by,report.id,index,'post')">ignore report</button>
</div>
</div>
</div>
</template>

<script>
import post from "./Post.vue"
import Comment from "./Comment.vue"
import {AllServices} from '../MimicServices/AllServices.js'
/**
 * @vue-prop  {string} apexComId - community Id
 * @vue-prop  {string} userName - user name
 * @vue-data {JWT} [token='']  user Token
 * @vue-data {array}   reportedComment - list of reported comments
 * @vue-data {array}   reportedPost - list of reported posts 
*/
export default {
  components:
{
  'Post':post,
  'Comment':Comment
},
props:['apexComId','userName'],
      
  data () {  
    return {
      token:this.$localStorage.get('token'),
      reportedComment:[],
      reportedPost:[]
    }
  },
  methods:
  {
    /**
     * returns list of reported comments and posts for certain community 
     */
    reviewReportsAC(){
         AllServices.reviewReportsAC(this.apexComId).then((data) =>{
           console.log(data);
         this.reportedComment=data.ReportedComments;
         this.reportedPost=data.ReportedPosts;
         });
   },
   /**
     * returns list of reported comments and posts for certain moderator 
    */
   reviewReportsUP(){
         AllServices.reviewReportsUP(this.userName).then((data) =>{
         this.reportedComment=data.ReportedComments;
         this.reportedPost=data.ReportedPosts;
         });
   },
   /**
     * request to ignore certain report
     */
   ignoreReport(user,id,index,type){
     var data=AllServices.ignoreReport(user,id);
     if(data && type=='comment'){
       this.reportedComment.splice(index, 1);
     }
     else if(data && type=='post'){
       this.reportedPost.splice(index, 1);
     }
   }
  },
  mounted()
  {
    console.log(this.apexComId);
    console.log(this.userName);
    if(this.apexComId!==undefined){
    this.reviewReportsAC();
    }
    else{
      this.reviewReportsUP();
    }
  }
}
</script>

<style scoped>
* {
  /* box-sizing: border-box; */

  /* padding: 0;
  margin: 0;
  list-style: none;
  
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  justify-content: space-around; */
}
.main{
  width:60%;
  margin-top:4%;
  
}
.report{
  /* width:100%; */
  margin-bottom:2%;
  padding:3% 9%;
  /* border-radius: 20%; */
  /* background-color:white; */
  display: inline-block;
}
.post{
  margin-left:-28%;
  margin-right:4%;
  margin-bottom: 4%;
}
.button{
  width:30%;
  margin-top:0%;
  margin-left:0%;
  margin-right: 0%; 
  margin-bottom: 0%;
  color:skyBlue;
  background-color: white;
  padding: 1%;
  border-width: 3px;
  border-radius: 20%;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor:pointer;
  border-color: skyblue;
  border-style: solid;
  text-transform: uppercase;
  overflow: hidden;
}
.button:hover {opacity: 0.75}
.accountLink{
  text-decoration: none;
  margin-left:2%;
}
h4{
  margin-left:2%;
  display:inline;
}
.box{
  margin-left:2%;
  display:grid;
}
.comment{
  display:contents;
}
.title{
  display:contents;
  background-color:white;
}
.onereport{
  width:100%;
  display:block;
  margin-bottom:0%;
  border-bottom: 3px solid #DAE0E6;
  padding-bottom: 2%;
  background-color:white;
}
</style>

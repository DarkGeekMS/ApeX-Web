<template id="reportspagedesign">
<div class="main">
<h4 v-if="(reportedPost.length ==0)&&(reportedComment.length ==0)" >there is nothing to show </h4>
 <div class='report' v-if="reportedComment.length !==0">
   <h4 class="title">Reported comments</h4>
<div class="onereport" v-for="(report,index) in reportedComment" id='onereport'>
  <div class="box">
  <h4>Reported by:</h4><router-link class="accountLink" :to="{name:'UserProfile' , params: {userName:report.userName}}"> {{report.userName}}</router-link>
  </div>
  <post class="post" v-bind:postData="report.post" ></post>
  <comment class="comment"
    v-bind:content="report.comment.content"
    v-bind:idx="report.comment.idx"
    v-bind:level="report.comment.level"
    v-bind:parentIdx="report.comment.parentIdx"
    v-bind:parentID="report.comment.parebtID"
    v-bind:ID="report.comment.ID"
  ></comment>
<div class="box">
<h4>Reason:</h4> <h4>{{report.reason}}</h4>
</div>
<button id="ignorebutton" class="button" type="button" v-on:click="ignoreReport(report.id,index,'comment')">ignore report</button>
</div>
</div>
 <div class='report' v-if="reportedPost.length !==0">
   <h4 class="title">Reported posts</h4>
<div class="onereport" v-for="(report,index) in reportedPost" >
  <div class="box">
  <h4>Reported by:</h4><router-link class="accountLink" :to="{name:'UserProfile' , params: {userName:report.userName}}"> {{report.userName}}</router-link>
  </div>
  <post class="post" v-bind:postData="report.post" ></post>
<div class="box">
<h4>Reason:</h4> <h4>{{report.reason}}</h4>
</div>
<button id="ignorebutton" class="button" type="button" v-on:click="ignoreReport(report.id,index,'post')">ignore report</button>
</div>
</div>
</div>
</template>

<script>
import post from "./Post.vue"
import Comment from "./Comment.vue"
import {AllServices} from '../MimicServices/AllServices.js'

export default {
  components:
{
  'Post':post,
  'Comment':Comment
},
props:['apexComName','userName'],
      
  data () {  
    return {
      token:this.$localStorage.get('token'),
      reportedComment:[],
      reportedPost:[]
    }
  },
  methods:
  {
    reviewReportsAC(){
         AllServices.reviewReportsAC(this.apexComName).then((data) =>{
         this.reportedComment=data.reportedComment;
         this.reportedPost=data.reportedpost;
         });
   },
   reviewReportsUP(){
         AllServices.reviewReportsUP(this.userName).then((data) =>{
         this.reportedComment=data.reportedComment;
         this.reportedPost=data.reportedpost;
         });
   },
   ignoreReport(id,index,type){
     var data=AllServices.ignoreReport(id);
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
    console.log(this.apexComName);
    console.log(this.userName);
    if(this.apexComName!==undefined){
    this.reviewReportsAC(this.apexComName);
    }
    else{
      this.reviewReportsUP(this.userName);
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

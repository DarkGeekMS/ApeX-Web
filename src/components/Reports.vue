<template id="reportspagedesign">
<div class="main">
<h4 v-show="(reportedPost.length ==0)&&(reportedComment.length ==0)" >there is nothing to show </h4>
 <div class='report' v-show="reportedComment.length !==0">
   <h4 class="title">Reported comments</h4>
<div class="onereport" v-for="(report,index) in reportedComment" id='onereport'>
  <div class="box">
  <h4>Reported by:</h4><router-link v-if="report.report.reporter_username" class="accountLink" :to="{name:'UserProfile' , params: {userName:report.report.reporter_username}}"> {{report.report.reporter_username}}</router-link>
  </div>
  <post class="post" v-bind:postData="report.post" ></post>
  
  <Comment class="comment"
   v-bind:user= report.comment.writerUsername  
   v-bind:content= report.comment.content 
   v-bind:parentID=report.comment.parent
   v-bind:ID=report.comment.id
   v-bind:inReported=true
   v-bind:con= OpString(report.comment.content) 
   ></Comment>
<div class="box">
<h4>Reason:</h4> <h4>{{report.report.content}}</h4>
</div>
<button id="ignorebutton" class="button" type="button" v-on:click="ignoreReport(report.comment.commented_by,report.comment.id,index,'comment')">ignore report</button>
</div>
</div>

<!-- posts -->
 <div class='report' v-show="reportedPost.length !==0">
   <h4 class="title">Reported posts</h4>
<div class="onereport" v-for="(report,index) in reportedPost">
  <div class="box">
  <h4>Reported by:</h4><router-link v-if="report.report.reporter_username" class="accountLink" :to="{name:'UserProfile' , params: {userName:report.report.reporter_username}}"> {{report.report.reporter_username}}</router-link>
  </div>
  <post class="post" v-bind:postData="report.post" ></post>
<div class="box">
<h4>Reason:</h4> <h4>{{report.report.content}}</h4>
</div>
<button id="ignorebutton" class="button" type="button" v-on:click="ignoreReport(report.post.posted_by,report.post.id,index,'post')">ignore report</button>
</div>
</div>
</div>
</template>

<script>
import post from "./Post.vue"
import Comment from "./Comment.vue"
import {AllServices} from '../MimicServices/AllServices.js'
import swal from 'sweetalert'
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
      
  data () {  
    return {
      token:this.$localStorage.get('token'),
      reportedComment:[],
      reportedPost:[],
    }
  },
  methods:
  {
    /**
     * returns list of reported comments and posts for certain community 
     */
    reviewReportsAC(){
         AllServices.reviewReportsAC(this.$route.params.apexComId).then((data) =>{
         this.reportedComment=data.reported.ReportedComments;
         this.reportedPost=data.reported.ReportedPosts;
        });
   },
   /**
     * request to ignore certain report
     */
   ignoreReport(user,id,index,type){
     AllServices.ignoreReport(user,id).then((data) =>{
     if(data && type=='comment'){
       swal('Done :)')
       this.reportedComment.splice(index, 1);
     }
     else if(data && type=='post'){
       this.reportedPost.splice(index, 1);
       swal('Done :)')
     }
    });

   },
         OpString:function(content){
        var con = [];
        for (var i = 0;i<content.length;i++)
                {
                    if (content[i]=='u' && content[i+1]=='/' && content[i+2]!=' ')
                    {
                      for (var x = i;x<content.length;x++)
                      {
                          if (content[x+1]==' '|| x==content.length-1)
                          {
                          var str = content.slice(i,x+1);
                          con.push({c:str , type:1});
                          i=x+1;
                          break;
                          }
                      }
                    }

                          for (var x = i;x<content.length;x++)
                          {
                              if((content[x+1]=='u' && content[x+2]=='/' && content[x]==' ')||x==content.length-1)
                              {
                                  var str = content.slice(i,x+1);
                                  con.push({c:str , type:0});
                                  i=x;
                                  break;
                              }
                          }


                }
                return con;
}
  },
  mounted()
  {
    this.reviewReportsAC();
  }
}
</script>

<style scoped>
.main{
  width:60%;
  margin-top:4%;
  
}
.report{
  margin-bottom:2%;
  padding:3% 9%;
  display: inline-block;
  width: 100%;
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

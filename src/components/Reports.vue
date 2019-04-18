<template id="reportspagedesign">
<div>
<div id='report' v-for="(report,index) in reports" :key="report.id">
  <post v-bind:postData="report.post" ></post>
  <!-- <comment
    v-bind:content="report.comment.content"
    v-bind:idx="report.comment.idx"
    v-bind:level="report.comment.level"
    v-bind:parentIdx="report.comment.parentIdx"
    v-bind:parentID="report.comment.parebtID"
    v-bind:ID="report.comment.ID"
    v-bind:date="report.comment.date"
  ></comment> -->

<h4>Reason:</h4> <h4>{{report.reason}}</h4>
<button id="ignorebutton" class="button" type="button" v-on:click="ignoreReport(report.id,index)">ignore report</button>
</div>
</div>
</template>

<script>
import axios from 'axios'
import post from "./Post.vue"
import Comment from "./Comment.vue"
import {AllServices} from '../MimicServices/AllServices.js'

export default {
  components:
{
  'Post':post,
  'Comment':Comment
},
props:['apexComName'],
      
  data () {  
    return {
      token:this.$localStorage.get('token'),
      reports:[],
    }
  },
  methods:
  {
    reviewReports(){
         AllServices.reviewReports(this.apexComName).then((data) =>{
         this.reports=data;
         });
   },
   ignoreReport(id,index){
     var data=AllServices.ignoreReport(id);
     if(data){
       this.reports.splice(index, 1);
     }
   }
  },
  mounted()
  {
    this.reviewReports();
  }
}
</script>

<style scoped>
#report{
  width:100%;
  height:auto;
  background-color:white;
  margin:1% 0%;
  padding:4% 3%;
  border-radius: 20%;
  display: inline-block;
}
.button{
  width:30%;
  margin-top:4%;
  margin-left:0%;
  margin-right: 0%; 
  margin-bottom: 0%;
  color:skyBlue;
  background-color: white;
  padding: 0%;
  float:right;
  border-width: 3px;
  border-radius: 20%;
  font-size: 1.2vw;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor:pointer;
  border-color: skyblue;
  border-style: solid;
  text-transform: uppercase;
  height:auto;
}
.button:hover {opacity: 0.75}
</style>

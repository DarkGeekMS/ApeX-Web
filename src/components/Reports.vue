<template id="reportspagedesign">
<div>
<div id='report' v-for="report in reports" :key="report.id">
</div>
</div>
</template>

<script>
import axios from 'axios'
import post from "./Post.vue"
import CommentParent from "./CommentParent.vue"

export default {
  components:
{
  'Post':post,
  'CommentParent':CommentParent
},
props:['apexComName'],
  props:{
      reports:Array,   
    },
  data () {  
    return {
      token:this.$localStorage.get('token'),
    }
  },
  methods:
  {
  },
  mounted()
  {
    if(this.report == 0){
    axios.get('http://localhost/review_reports', {
    params: {
      Token:this.token,
      ApexCom_id:this.apexComName,
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

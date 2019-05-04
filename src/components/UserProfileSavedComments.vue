<template>
<div class="background">
  <div id="Savedcomments" v-for="comment in savedComments" :key="comment.id">
      <Comment class="comment"
      v-bind:user= comment.writerUsername  
      v-bind:level= comment.level 
      v-bind:content= comment.content 
      v-bind:con= OpString(comment.content)
      v-bind:parentID= comment.parent 
      v-bind:ID= comment.id 
      v-bind:date= toDate(comment.created_at) 
      v-bind:points= comment.votes
      v-bind:inReported= "true"
      v-bind:unSaved = "'Unsave'"
      v-bind:upVoted = "comment.userVote==1?true:false"
      v-bind:downVoted = "comment.userVote==-1?true:false"
      ></Comment>
  </div>
</div>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'
import Comment from "./Comment.vue"
export default {
  props:{userName:String},
    components:{
    'Comment':Comment,
  },
  data () {
    return {
        savedComments:[]
    }
  },
  methods:
  {
     /**
    * get user profile info
    */
    getUserProfile:function(){
      AllServices.getUserInfo().then((data) =>{
      this.savedComments = data.saved_comments;
      })
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
},
toDate:function(date){
    var d = new Date (date).getTime();
    var n = new Date().getTimezoneOffset()*60000;
    var dd = new Date(d-n);
    return dd;
}
},
  mounted()
  {
      this.getUserProfile();
  }
}

</script>

<style scoped>
.comment{
    margin-bottom: 7px;
}
</style>

<template>
  <div id = "CommentParent" v-bind:style="{marginLeft: 5 +'%'}">
    <WriteComment buttonType="0" v-bind:parentID="postID" v-on:Comment="addComment" v-bind:style="{width: 55 +'%'}"></WriteComment>
    <div v-for = "comment in comments" :key="comment.user">
      <Comment v-on:Delete="deleteComment"  v-on:Reply2="addReply" v-on:Edit="editComment" v-bind:user= comment.user  v-bind:level= comment.level v-bind:content= comment.content v-bind:idx=comment.idx v-bind:parentIdx=comment.parentIdx v-bind:parentID=comment.parentID v-bind:ID=comment.currentID v-bind:date=comment.date></Comment>
    </div>
  </div>
</template>

<script>
import WriteComment from './WriteComment.vue'
import Comment from './Comment.vue'
import {globalStore} from '../main.js'



export default {
  name:'CommentParentItem',
  props:{
    postID:String
  },
 components: {
    WriteComment,
    Comment
  },
  data(){
      return{
          comments:[
              /*{
            user:globalStore.Username,
            content:'',
            idx:-1,
            level,
            parentIdx,
            parentID,
            CurrentID
          }*/
          ]
      }
  },
  methods:{
      addComment:function(cont,use,pID,cID){
        if (cont!='')
          this.comments.push({user:globalStore.Username, content:cont, idx:this.comments.length,level:0,parentIdx:-1,parentID:pID,currentID:cID, date:new Date()});
          else
          alert("empty text not allowed!");
      },
      addReply:function(cont,parent,l,pID,cID){
        if (cont!='')
        {
          var i = parent+1;
          this.comments.push({user:globalStore.Username, content:cont ,idx:i ,level:l,parentIdx:parent,parentID:pID,currentID:cID, date:new Date() });
          var rep = this.comments.pop();
          for (var x = this.comments.length;x>i;x--){
            this.comments[x]=this.comments[x-1];
            this.comments[x].idx++;

          }

        this.comments[i]=rep;
        }
        else{
          alert("empty text not allowed!");

        }

      },
      editComment:function(content,i){
         if (content!='')
          this.comments[i].content=content;
          else
        alert("empty text not allowed!");

      },
      deleteCommentByIdx:function(x){
        for(var i = x;i<this.comments.length-1;i++)
        {
          this.comments[i]=this.comments[i+1];
          this.comments[i].idx--;
        }
        this.comments.pop();

      },
      deleteComment:function(x){

        var maxDeletedIdx = x;
        var flag = 0;
        for(var a = x+1;a<this.comments.length;a++)
        {
          flag=0;
          for(var pre = x;pre<a;pre++)
         {

            if (this.comments[a].parentIdx==this.comments[pre].idx)
          {
            flag = 1;
          maxDeletedIdx++;
          }

         }
         if(!flag)
         {
           break;
         }

        }
        for (var i = x;i<=maxDeletedIdx;i++)
        {
          this.deleteCommentByIdx(x);

        }


      }
  }
}
</script>

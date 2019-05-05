<template>
  <div id = "CommentParent">
    <WriteComment buttonType="0" v-bind:parentID="postID" v-on:Comment="addComment" ></WriteComment>
    <div v-for = "comment in comments" :key="comment.id">
      <Comment
      v-on:Delete="deleteComment"
      v-on:Reply2="addReply"
      v-on:Edit="editComment"
      v-on:Report="reportComment"
      v-bind:user= comment.user
      v-bind:level= comment.level
      v-bind:content= comment.content
      v-bind:con= comment.con
      v-bind:idx=comment.idx
      v-bind:parentIdx=comment.parentIdx
      v-bind:parentID=comment.parentID
      v-bind:ID=comment.currentID
      v-bind:date=comment.date
      v-bind:points=comment.points
      v-bind:unSaved = comment.unSaved
      v-bind:upVoted = comment.upVoted
      v-bind:downVoted = comment.downVoted
      v-bind:postOwnerUserName = 'postOwnerUserName'
      v-bind:moderatorsUserNames = 'moderatorsUserNames'
      ></Comment>
    </div>

    <reportBox v-bind:ID ='IDreported' v-bind:idx ='idxReported'  v-on:Delete="deleteComment($event)"  > </reportBox>

  </div>
</template>

<script>
import WriteComment from './WriteComment.vue'
import Comment from './Comment.vue'
import {AllServices} from '../MimicServices/AllServices.js'
import reportBox from './ReportModal.vue'

import swal from 'sweetalert'

/**
* @vue-data {string} [postID] ID of the post that the comments will be on
* @vue-data {array} [comments]   array that includes all comments that should be rendered
* @vue-data {array} [moderatorsUserNames]   array that includes all moderators of the apex-com of the post
* @vue-data {string} [postOwnerUserName]  name of the post owner

*/

export default {
  name:'CommentParentItem',
  props:{
    postID:String,
    moderatorsUserNames:Array,
    postOwnerUserName:String
  },
 components: {
    WriteComment,
    reportBox,
    Comment
  },
  data(){
      return{
          comments:[
              /*{
            user:localStorage.Username,
            content:'',
            idx:-1,
            level,
            parentIdx,
            parentID,
            CurrentID
          }*/
          ],
          IDreported:"",
          idxReported:-1
      }
  },
  mounted(){
    //each 2 minutes
    this.getAllComments();
    setInterval(() => this.getAllComments(), 120000);
  /////
  },
  methods:{
     /**
     * adds a comment from the comment box in the array
     * @param {string} cont content of the added comment
     * @param {array} con content of the added comment split to view mentions
     * @param {string} use user name of the comment owner
     * @param {string} pID parent ID
     * @param {string} cID current ID
 */
      addComment:function(cont,con,use,pID,cID){
        if (cont!='')
          this.comments.push({user:this.$localStorage.get('userName'), content:cont,con:con , idx:this.comments.length,level:0,parentIdx:-1,parentID:pID,currentID:cID, date:new Date(),points:0 , unSaved :"Save", upVoted :false,downVoted:false});
          else
          swal("empty text not allowed!");
      },
       /**
     * adds a reply from the reply box in the array in the correct index
     * @param {string} cont content of the added comment
     * @param {array} con content of the added comment split to view mentions
     * @param {integer} parent parent index in the array
     * @param {integer} l level of the comment
     * @param {string} pID parent ID
     * @param {string} cID current ID
 */
      addReply:function(cont,con,parent,l,pID,cID){
        if (cont!='')
        {
          var i = parent+1;
          this.comments.push({user:this.$localStorage.get('userName'), content:cont,con:this.OpString(cont) ,idx:i ,level:l,parentIdx:parent,parentID:pID,currentID:cID, date:new Date(),points:0, unSaved :"Save", upVoted :false,downVoted:false });
          var rep = this.comments.pop();
          for (var x = this.comments.length;x>i;x--){
            this.comments[x]=this.comments[x-1];
            this.comments[x].idx++;
          }

        this.comments[i]=rep;
        }
        else{
          swal("empty text not allowed!");

        }

      },

       /**
     * edits a comment from the edit box in the array
     * @param {string} content new content of the comment
     * @param {integer} i index of comment to be updated
  */
      editComment:function(content,i){


         if (content!=''){
          this.comments[i].content=content;
          this.comments[i].con=this.OpString(content);
         }
          else
        swal("empty text not allowed!");

      },
       /**
     * show the report modal of that comment
          * @param {string} ID ID of the comment to be reported
          * @param {integer} idx idx of the comment to be reported in the array

 */
      reportComment:function(ID,idx){
        this.IDreported=ID;
        this.idxReported=idx;
        this.$modal.show('reportBox');
      },
        /**
     * deletes a comment in the array without deleting its children
     * @param {integer} x index of the comment to be deleted
 */
      deleteCommentByIdx:function(x){
        for(var i = x;i<this.comments.length-1;i++)
        {
          this.comments[i]=this.comments[i+1];
          this.comments[i].idx--;
        }
        this.comments.pop();

      },

       /**
     * deletes a comment in the array with deleting its children
          * @param {integer} x index of the comment to be deleted

 */
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

        for(var i = 0;i<this.comments.length;i++){
          this.comments[i].parentIdx = this.getParentIdx(this.comments,i);
        }



      },
      getAllComments:function(){
        var arr;
        AllServices.getComments(this.postID).then((data) => {
       if(data){
          arr = data.comments;
          this.comments =[];
        for(var i = 0; i < arr.length; i++){

          var d = new Date (arr[i].created_at).getTime();
var n = new Date().getTimezoneOffset()*60000;
var dd = new Date(d-n);
          var obj = {};
          obj.user = arr[i].writerUsername;
          obj.content = arr[i].content;
          obj.con = this.OpString(arr[i].content);
          obj.idx=i;
          obj.level = arr[i].level;
          obj.parentIdx = -1;
          obj.parentID = arr[i].parent;
          obj.currentID = arr[i].id;
          obj.date = dd;
          obj.points = arr[i].votes;
          obj.upVoted = arr[i].userVote==1?true:false;
          obj.downVoted = arr[i].userVote==-1?true:false;
          ///
          obj.unSaved = arr[i].Saved?"Unsave":"Save";
          ///


          this.comments[i] = obj;
          this.comments[i].parentIdx = this.getParentIdx(this.comments,i);

        }}});



      },
      getParentIdx:function(arr,t){
        for(var i = 0;i<t;i++){
          if(arr[t].parentID == arr[i].currentID)
          {
            return i;
          }
        }
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
  }
}
</script>
<style scoped>
#CommentParent{
  margin-left:3%;
}
</style>

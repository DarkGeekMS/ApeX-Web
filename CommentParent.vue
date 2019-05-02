
<script>
/**
 * @vue-data {string} [postID] ID of the post that the comments will be on
 * @vue-data {array} [comments]   array that include all comments that should be rendered
 
 */



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
    /**
     * adds a comment from the comment box in the array
     * @param {string} cont content of the added comment
     * @param {string} pID parent ID
     * @param {string} cID current ID
 */
      addComment:function(cont,use,pID,cID){
        if (cont!='')
          this.comments.push({user:globalStore.Username, content:cont, idx:this.comments.length,level:0,parentIdx:-1,parentID:pID,currentID:cID});
          else
          alert("empty text not allowed!");
      },
      /**
     * adds a reply from the reply box in the array in the correct index 
     * @param {string} cont content of the added comment
     * @param {integer} parent parent index in the array 
     * @param {integer} l level of the comment
     * @param {string} pID parent ID
     * @param {string} cID current ID
 */
      addReply:function(cont,parent,l,pID,cID){
        if (cont!='')
        {
          var i = parent+1;
          this.comments.push({user:globalStore.Username, content:cont ,idx:i ,level:l,parentIdx:parent,parentID:pID,currentID:cID });
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
      /**
     * edits a comment from the edit box in the array
     * @param {string} content new content of the comment
     * @param {integer} i index of comment to be updated
  */
      editComment:function(content,i){
         if (content!='')
          this.comments[i].content=content;
          else
        alert("empty text not allowed!");

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


      }
  }
}
</script>


<script>
/**
 * @vue-data {string} [Content] content of the comment
 * @vue-data {integer} [idx]    idx of the comment in the array of comments
 * @vue-data {integer} [level]   level of indentation of the comment in the view
 * @vue-data {integer} [parentIdx]    idx of the parent of the comment in the array of comments
 * @vue-data {string} [parentID]  ID of the parent component
 * @vue-data {string} [ID]  ID of the the current comment
 * @vue-data {string} [user] user name of the current logged-in user
 * @vue-data {boolean} [upVoted=false] check if the Post is upVoted by the user
 * @vue-data {boolean} [downVoted=false] check if the Post is downVoted by the user
 * @vue-data  {integer} [Points=0] # of points the the comment got
 * @vue-data  {object} [time=0] the time that the post created in
 * @vue-data  {boolean} [showReplyBox=0] to show the reply box
 * @vue-data  {boolean} [showEditBox=0] to show the edit box
 * @vue-data  {boolean} [deleted=1] check if the comment is Deleted
 * @vue-data  {string} [unSaved='Save'] check if the comment is Saved
 */

export default {
  name: 'CommentItem',
  props:{

    content:String,
    idx:Number,
    level:Number,
    parentIdx:Number,
    parentID:String,
    ID:String
  },
  data(){
    return{
    user:globalStore.Username,
    upVoted:false,
    downVoted:false,
    points:0,
    time:0,
    showReplyBox:0,
    showEditBox:0,
    deleted:1,
    unSaved:'Save'
    }
  },
  methods:{
    /**
     * edits the comment's content
     * @param {string} updatedContent the updated content of the comment to be rendered
     */
edit:function(updatedContent){
  this.content=updatedContent;
  this.showEditBox =0;
  //EMIT EVENT TO COMMENT PARENT TO EDIT THE CONTENT OF THE IDX = idx  by updatedContent
  this.$emit('Edit',updatedContent,this.idx );

},
    /**
     * hides the edit box and do nothing if it's empty
     */
retrieveWithNoEdit:function(){
  this.showEditBox =0;
},
/**
     * deletes the the comment and sends to the CommentParent to delete it and its children from the array
     */
Delete:function(){
  this.$emit('Delete',this.idx );
  axios.delete('http://127.0.0.1:8000/api/delete', {
      data : {
      name: this.ID,
      token: globalStore.token
      }
        })
      .then(function (response) {
       })
      .catch(function (error) {
       alert("Something went wrong");
       });
},
/**
     * saves the the comment 
     */
Save:function(){
  if(this.unSaved=='Save')
    this.unSaved='Unsave';
  else
    this.unSaved='Save';

  axios.post('http://127.0.0.1:8000/api/save', {
       ID: this.ID,
       token: globalStore.token
        })
      .then(function (response) {
       })
      .catch(function (error) {
       alert("Something went wrong");
       });
},
/**
     * upvotes the comment
     */
Upvote:function(){
  this.upVoted = !this.upVoted;
  this.downVoted = false;
  axios.post('http://127.0.0.1:8000/api/vote', {
       name: this.ID,
       dir: 1,
       token: globalStore.token
        })
      .then(function (response) {
       })
      .catch(function (error)
      {
       alert("Something went wrong");
       });
},
/**
     * downvotes the comment
     */
Downvote:function(){
  this.downVoted = !this.downVoted;
  this.upVoted = false;
  axios.post('http://127.0.0.1:8000/api/vote', {
       name: this.ID,
       dir: -1,
       token: globalStore.token
        })
      .then(function (response) {
       })
      .catch(function (error) {
       alert("Something went wrong");
       });
},
/**
     * function due to the response of the reply box to send the data to the CommentParent to be set in the array
     * @param {string} cont content of the added comment
     * @param {integer} parent parent index in the array 
     * @param {integer} parentLevel level of the parent comment
     * @param {string} parentID parent ID
     * @param {string} currentID current ID
     */
addReply:function(cont,use,parent,parentLevel,parentID,currentID){
  // send to comment parent to push in the array!!!!!
  this.$emit('Reply2',cont,parent,parentLevel+1,parentID,currentID );


}
  },

  components: {
    WriteComment
  }

}
</script>


<script>
/**
 * @vue-data {string} [buttonType] 1:Comment -- 2:Reply -- 3:Edit
 * @vue-data {string} [content]   content entered by the user
 * @vue-data {integer} [parentLevel]   level of indentation of the parent comment in the view to create the current comment's level
 * @vue-data {integer} [parentIdx]    idx of the parent of the comment in the array of comments
 * @vue-data {string} [parentID]  ID of the parent component
 * @vue-data {string} [currentID]  ID of the the current comment
 * @vue-data {boolean} [editClicked=false] to hide edit box after editing
 * @vue-data {boolean} [replyClicked=false] to hide reply box after replying
 */

export default {
  name: 'WriteCommentItem',
  props:{
    buttonType:String,
    content:String,
    parentIdx:Number,
    parentLevel:Number,
    parentID:String
  },

  data(){
    return{
      editClicked:false,
      replyClicked:false,
      currentID:''
    }
  },
  methods:{
    /**
     * sends to the comment parent to update the comment's content in the array
 */
    edit:function(){
      this.editClicked=!this.editClicked;

      if (this.content!='')
      {
      this.$emit('editParent',this.content);
      }
      else
      {
      alert("Empty Text cannot be submitted!");
      this.$emit('noEdit');
      }
    },
     /**
     * sends to the comment parent to add the comment in the array and sends the details to the database
 */
    comment:function(){

      var self = this;
       if (this.content!=null)
      {

      //TODO:send request and get currentID
      axios.post('http://127.0.0.1:8000/api/comment', {
       content: this.content,
       parent: this.parentID,
       token: globalStore.token
        })
      .then(function (response) {
      self.currentID = response.data.id;
      self.$emit('Comment',self.content,globalStore.token,self.parentID,self.currentID );
      })
      .catch(function (error) {
       alert("Something went wrong");
       });
      //to test
      //this.currentID=this.parentID+1;
      }
      else
      alert("Empty Text cannot be submitted!");
    },
    /**
     * sends to the comment parent to add the reply in the array and sends the details to the database
 */
    reply:function(){
    var self = this;
            this.replyClicked=!this.replyClicked;

       if (this.content!=null)
      {
        //TODO:send request and get currentID
      axios.post('http://127.0.0.1:8000/api/comment', {
       content: this.content,
       parent: this.parentID,
       token: globalStore.token
        })
      .then(function (response) {
       self.currentID = response.data.id;
       self.$emit('Reply',self.content,globalStore.token,self.parentIdx,self.parentLevel,self.parentID,self.currentID );
       })
      .catch(function (error) {
       alert("Something went wrong");
       });
      //to test
      //this.currentID=this.parentID+1;
      //
      }
      else
      alert("Empty Text cannot be submitted!");
    }
  }
}
</script>

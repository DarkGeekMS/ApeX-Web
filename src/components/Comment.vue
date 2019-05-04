<template>

  <div id="Comment" v-show = "deleted">
     <div v-bind:style="{marginLeft: level*4 +'%'}">
      <div id = "firstLine">
        <button id ="Up" v-on:click="Upvote" v-show="!this.upVoted" class = "arrows,up"></button>
        <button id ="Up2" v-on:click="Upvote" v-show="this.upVoted" class = "arrows,up"></button>
        <router-link
          class ="smallText"
          :to="{name:'UserProfile' ,
           params: {userName:this.user}}">
            {{user}}
          </router-link>
        <b class = "smallText">{{points}} points</b>
        <b class = "smallText">{{moment(date).fromNow()}}</b>
        </div>

      <br>

      <div id = "secondLine">
        <button id ="Down" v-on:click="Downvote" v-show="!this.downVoted" class = "arrows,down"></button>
        <button id ="Down2" v-on:click="Downvote" v-show="this.downVoted" class = "arrows,down"></button>
        <div class = "condiv" v-for = "part in con" :key="part.start">
          <p class="content"  v-if = "!part.type" >{{part.c}}</p>
          <router-link
          v-if = "part.type"
          :to="{name:'UserProfile' ,
           params: {userName:part.c}}">
            {{part.c}}
          </router-link>
        </div>
      </div>
      </div>
      

      <div id = "thirdLine" v-show="!showEditBox">
        <button class = "buttons" v-on:click = "replyClicked"  id = "Reply">Reply</button>
        <button class = "buttons" id = "Report" @click="Report" v-show = "showReportButton">Report</button>
        <button class = "buttons" v-on:click="Save" id = "Save" >{{unSaved}}</button>
        <button class = "buttons" v-on:click = "showEditBox = !showEditBox  ,showReplyBox = false" id = "Edit" v-show = "showEditButton">Edit</button>
        <button class = "buttons" v-on:click ="Delete" id = "Delete" v-show = "showDeleteButton">Delete</button>
      </div>

      <br>
      <WriteComment id="EditBox" buttonType="2" v-on:noEdit="retrieveWithNoEdit" v-bind:parentID=ID v-on:editParent="edit($event)" :content=content v-show = "showEditBox" class="Reply"></WriteComment>
      <WriteComment buttonType="1" v-bind:parentLevel=level  v-bind:parentID=ID v-bind:parentIdx=idx v-on:Reply="addReply"  v-show = "showReplyBox && !showEditBox"  class="Reply"></WriteComment>

  </div>
</template>

<script>
/**
 * @vue-data {string} [content] content of the comment
 * @vue-data {integer} [idx]    idx of the comment in the array of comments
 * @vue-data {integer} [level]   level of indentation of the comment in the view
 * @vue-data {integer} [parentIdx]    idx of the parent of the comment in the array of comments
 * @vue-data {string} [parentID]  ID of the parent component
 * @vue-data {string} [ID]  ID of the the current comment
 * @vue-data {string} [user] user name of the current logged-in user
 * @vue-data {boolean} [upVoted=false] check if the Post is upVoted by the user
 * @vue-data {boolean} [downVoted=false] check if the Post is downVoted by the user
 * @vue-data  {integer} [Points=0] # of points the the comment got
 * @vue-data  {boolean} [showReplyBox=0] to show the reply box
 * @vue-data  {boolean} [showEditBox=0] to show the edit box
 * @vue-data  {boolean} [showDeleteButton=false] to show the delete button to some specific users
 * @vue-data  {boolean} [showEditButton=false] to show the edit button to some specific users
 * @vue-data  {boolean} [showReportButton=false] to show the report button to some specific users
 * @vue-data  {boolean} [deleted=1] check if the comment is Deleted
 * @vue-data  {string} [unSaved='Save'] check if the comment is Saved
 */

import WriteComment from './WriteComment.vue'
import reportBox from './ReportModal.vue'
import {AllServices} from '../MimicServices/AllServices.js'
var moment =require('moment');


export default {
  name: 'CommentItem',
  props:{

    content:String,
    idx:Number,
    level:Number,
    parentIdx:{type:Number, 
    default: function () { return -1 }},
    parentID:String,
    ID:String,
    date:Date,
    con: {
    type: Array,
    default: function () { return [] }
    },
    user:String,
    upVoted:Boolean,
    downVoted:Boolean,
    points:{type:Number,
    default:0},
    unSaved:{type:String,
    default: function(){return 'Save'}}
    ,
    moderatorsUserNames:Array,
    postOwnerUserName:String
  },
  data(){
    return{
    
    time:'',
    showReplyBox:0,
    showEditBox:0,
    deleted:1,
    showDeleteButton:false,
    showEditButton:false,
    showReportButton:false,
    moment:moment


    }
  },
  mounted(){
          
          var isModerator = false;
          for(var i = 0;i<this.moderatorsUserNames.length;i++)
          {
            if (this.$localStorage.get('userName') == this.moderatorsUserNames[i]){
              isModerator=true;
              break;
            }
          }
    if(this.$localStorage.get('userName') == this.user){
      // comment owner
      this.commentOwnerButtons();
    }
    else if (isModerator)
    {
      // moderator
      this.moderatorButtons();
    }
    else if (this.$localStorage.get('userName') == this.postOwnerUserName)
    {
      // post owner
      this.postOwnerButtons();
    }
    else
    {
      // guest
      this.guestButtons();
    }
  },
  methods:{
    /**
     * edits the comment's content
     * @param {string} updatedContent the updated content of the comment to be rendered
     */
edit:function(updatedContent){
  this.content=updatedContent;
  this.OpString();
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

    if(this.$localStorage.get('login')){
      AllServices.DeleteComment(this.ID);
      this.$emit('Delete',this.idx );
    }
    else{
      swal("Log In First!!");
    }

},
replyClicked:function(){
if(this.$localStorage.get('login')){
this.showReplyBox = !this.showReplyBox;
this.showEditBox = false;
}
else
      swal("Log In First!!");

},
/**
     * slices the content into seperate parts due to mentions
     * example:
     * "mohamed is u/mohamed"
     * part 1: "mohamed is"
     * part 2: "u/mohamed"
     */
OpString:function(){
    this.con = [];
   for (var i = 0;i<this.content.length;i++)
          {
              if (this.content[i]=='u' && this.content[i+1]=='/' && this.content[i+2]!=' ')
              {
                for (var x = i;x<this.content.length;x++)
                {
                    if (this.content[x+1]==' '|| x==this.content.length-1)
                    {
                    var str = this.content.slice(i,x+1);
                    this.con.push({c:str , type:1});
                    i=x+1;
                    break;
                    }
                }
              }

                    for (var x = i;x<this.content.length;x++)
                    {
                        if((this.content[x+1]=='u' && this.content[x+2]=='/' && this.content[x]==' ')||x==this.content.length-1)
                        {
                            var str = this.content.slice(i,x+1);
                            this.con.push({c:str , type:0});
                            i=x;
                            break;
                        }
                    }


          }
},
/**
     * to hide the reported comment "delete the comment from the array"
     */
Report:function(){
    if(this.$localStorage.get('login')){
    this.$emit('Report',this.ID,this.idx);
    }
    else
      swal("Log In First!!");

},
/**
     * saves the the comment 
     */
Save:function(){
    if(this.$localStorage.get('login')){
      AllServices.SaveComment(this.ID);
      if(this.unSaved=='Save')
        this.unSaved='Unsave';
      else
        this.unSaved='Save';
    }
    else
      swal("Log In First!!");
},
/**
     * upvotes the comment
     */
Upvote:function(){

  if(this.$localStorage.get('login')){
    this.upVoted = !this.upVoted;
    var downState = this.downVoted;
    this.downVoted = false;
    AllServices.UpVoteComment(this.ID,this.points,this.upVoted,downState).then((data) => {
        if(data){
            this.points=data.votes;
          }});
  }
  else
    swal("Log In First!!");
},
/**
     * downvotes the comment
     */
Downvote:function(){

  if(this.$localStorage.get('login')){
    this.downVoted = !this.downVoted;
    var upState = this.upVoted;
    this.upVoted = false;
    AllServices.DownVoteComment(this.ID,this.points,this.downVoted,upState).then((data) => {
          if(data){
            this.points=data.votes;
          }});
  }
  else
    swal("Log In First!!");
},
/**
     * function due to the response of the reply box to send the data to the CommentParent to be set in the array
     * @param {string} cont content of the added comment
     * @param {array} con content of the added comment split to make the mentions work
     * @param {string} use user-name of the writer of the added comment
     * @param {integer} parent parent index in the array 
     * @param {integer} parentLevel level of the parent comment
     * @param {string} parentID parent ID
     * @param {string} currentID current ID
     */
addReply:function(cont,con,use,parent,parentLevel,parentID,currentID){
  // send to comment parent to push in the array!!!!!
  this.$emit('Reply2',cont,con,parent ,parentLevel+1,parentID,currentID );


},
DateFormat:function(date){
  // Make a fuzzy time
var delta = Math.round((+new Date - date) / 1000);
var minute = 60,
    hour = minute * 60,
    day = hour * 24,
    week = day * 7;

var fuzzy;

if (delta < 60) {
    fuzzy = 'just now';
}  else if (delta < 2 * minute) {
    fuzzy = 'a minute ago.'
} else if (delta < hour) {
    fuzzy = Math.floor(delta / minute) + ' minutes ago.';
} else if (Math.floor(delta / hour) == 1) {
    fuzzy = '1 hour ago.'
} else if (delta < day) {
    fuzzy = Math.floor(delta / hour) + ' hours ago.';
} else if (delta < day * 2) {
    fuzzy = 'yesterday';
}
this.time=fuzzy;
},

/**
     * to show buttons under comments for comments owners 
     */
commentOwnerButtons:function(){
  this.showReportButton = false;
  this.showDeleteButton = true;
  this.showEditButton = true;
},
/**
     * to show buttons under comments for moderators
     */
moderatorButtons:function(){
  this.showReportButton = false;
  this.showDeleteButton = true;
  this.showEditButton = false;
},
/**
     * to show buttons under comments for post owner
     */
postOwnerButtons:function(){
   this.showReportButton = true;
  this.showDeleteButton = true;
  this.showEditButton = false;
},
/**
     * to show buttons under comments for guest
     */
guestButtons:function(){
  this.showReportButton = true;
  this.showDeleteButton = false;
  this.showEditButton = false;
},

deleteReportedComment:function(idx){
  this.$emit('Delete',idx );
}
  },

  components: {
    reportBox,
    WriteComment
  }

}
</script>

<style scoped>

#paragraphComment{

    text-overflow: ellipsis;
    overflow: hidden;
    float:left;
    text-align:left;
    width:70%;
    border:none;

}
#Comment{
    position: static;
    width:53%;
    float:left;
    background:transparent;
}


#Up{
  background:url(../assets/Up.png) no-repeat;
    border:none;
    width:15px;
    height:17px;
    float:left;
}
#Up2{
  background:url(../assets/UpOn.png) no-repeat;
    border:none;
    width:15px;
    height:17px;
    float:left;
}
#Up:hover {
     background:url(../assets/UpActivated.png) no-repeat;
}

#Down{
  background:url(../assets/Down.png) no-repeat;
    border:none;
    width:15px;
    height:17px;
    float:left;
}
#Down2{
  background:url(../assets/DownOn.png) no-repeat;
    border:none;
    width:15px;
    height:17px;
    float:left;
}
#Down:hover {
     background:url(../assets/DownActivated.png) no-repeat;
}
.arrows{
    margin-right:7px;
}


.smallText{
    font-size: 12px;
    font-family: 'Courier New', Courier, monospace;
    font-style:normal;
    margin-right: 7px;

}
.smallText:hover{
    background-color: rgb(235, 233, 233);
}
#firstLine{
        float:left;

}
#secondLine{
    padding-top: 4px;
}
#thirdLine{
    height: 23px;
    position: static;
    top: 0;
    left: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: center;
    float: right;
}

.outer{
    position: relative;
    border: 1px solid;
    padding: 200px;
}

.buttons{
    background: none;
    font-size: 13px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: rgb(90, 90, 90);
    background-color:transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border: none;
    border-radius: 4px;

}
.buttons:hover{
    background-color: rgb(235, 233, 233);
}
.reply{
  position:static;
  float:left;
}
 .content  { 
overflow: hidden;
   display: inline;

 }
 .user{
display: inline;

 }
 .condiv{
   display: inline;
 }
#EditBox{
  position: relative;
border: black 1px solid;
width:60%;
float:left;
margin-top:5%;
}
</style>

<template>

  <div id="Comment" v-show = "deleted"  v-bind:style="{marginLeft: level*2 +'%'}" >
      <div id = "firstLine">
        <button id ="Up" v-on:click="Upvote" v-show="!this.upVoted" class = "arrows,up"></button>
        <button id ="Up2" v-on:click="Upvote" v-show="this.upVoted" class = "arrows,up"></button>
        <a class ="smallText" href="https://www.google.com/?hl=ar">{{ user }}</a>
        <b class = "smallText">{{points}} points</b>
        <b class = "smallText">{{time}} hours</b>
        </div>

      <br>

      <div id = "secondLine">
        <button id ="Down" v-on:click="Downvote" v-show="!this.downVoted" class = "arrows,down"></button>
        <button id ="Down2" v-on:click="Downvote" v-show="this.downVoted" class = "arrows,down"></button>
        <span  id="paragraphComment" >{{content}}</span>
      </div>

      <br>
      <br>

      <div id = "thirdLine" v-show="!showEditBox">
        <button class = "buttons" v-on:click = "showReplyBox = !showReplyBox" id = "Reply">Reply</button>
        <span>|</span>
        <button class = "buttons" id = "Report">Report</button>
        <span>|</span>
        <button class = "buttons" v-on:click="Save" id = "Save" >{{unSaved}}</button>
        <span>|</span>
        <button class = "buttons" v-on:click = "showEditBox = !showEditBox" id = "Edit">Edit</button>
        <span>|</span>
        <button class = "buttons" v-on:click ="Delete" id = "Delete">Delete</button>
      </div>

      <br>

      <WriteComment buttonType="1" v-bind:parentLevel=level  v-bind:parentID=ID v-bind:parentIdx=idx v-on:Reply="addReply"  v-show = "showReplyBox && !showEditBox"  class="Reply"></WriteComment>
      <WriteComment id="EditBox" buttonType="2" v-on:noEdit="retrieveWithNoEdit" v-on:editParent="edit($event)" :content=content v-show = "showEditBox" class="Reply"></WriteComment>

  </div>
</template>

<script>
import WriteComment from './WriteComment.vue'
import axios from 'axios'
import {globalStore} from '../main.js'


export default {
  name: 'CommentItem',
  props:{

    content:String,
    idx:Number,
    level:Number,
    parentIdx:Number,
    parentID:Number,
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
edit:function(updatedContent){
  this.content=updatedContent;
  this.showEditBox =0;
  //EMIT EVENT TO COMMENT PARENT TO EDIT THE CONTENT OF THE IDX = idx  by updatedContent
  this.$emit('Edit',updatedContent,this.idx );

},
retrieveWithNoEdit:function(){
  this.showEditBox =0;
},
Delete:function(){
  this.$emit('Delete',this.idx );
  axios.delete('http://34.66.175.211/api/delete', {
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
Save:function(){
  if(this.unSaved=='Save')
    this.unSaved='Unsave';
  else
    this.unSaved='Save';

  axios.post('http://34.66.175.211/api/save', {
       ID: this.ID,
       token: globalStore.token
        })
      .then(function (response) {
       })
      .catch(function (error) {
       alert("Something went wrong");
       });
},
Upvote:function(){
  this.upVoted = !this.upVoted;
  this.downVoted = false;
  axios.post('http://34.66.175.211/api/vote', {
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
Downvote:function(){
  this.downVoted = !this.downVoted;
  this.upVoted = false;
  axios.post('http://34.66.175.211/api/vote', {
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
    background-color:white;
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

</style>

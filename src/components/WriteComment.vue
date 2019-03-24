<template>
  <div id="WriteComment" v-show="!clicked">
    <div>
      <textarea  id="CommentSpace" class="write" v-model="content"  cols="30" rows="10"></textarea>
    </div>

    <div id="Buttons">
      <button v-show = "buttonType == 0"  class="com" v-on:click="comment" id="InnerCommentButton">Comment</button>
      <button v-show = "buttonType == 1"  class="rep" v-on:click="reply">Reply</button>
      <button v-if = "buttonType == 2"  class="ed" v-on:click="edit">Edit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {globalStore} from '../main.js'

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
      clicked:0,
      currentID:''
    }
  },
  methods:{
    edit:function(){
      this.clicked=!this.clicked;

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
    reply:function(){
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
       self.$emit('Reply',self.content,globalStore.token,self.parentIdx,self.parentLevel,self.parentID,self.currentID );
       })
      .catch(function (error) {
       alert("Something went wrong");
       });
      //to test
      //this.currentID=this.parentID+1;
      //
      this.clicked=!this.clicked;
      }
      else
      alert("Empty Text cannot be submitted!");
    }
  }
}
</script>

<style scoped>

.write{
  width:99%;
    height: 200px;
    background: transparent;
    font-size: 15px;
    outline: 0;
    position: relative;
    top: 0;
    left: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    resize:vertical;
    border:none;
}
.comButton{
font-size: 17px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: white;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
border: none;
border-radius: 8px;
padding-left: 1%;
padding-right : 1%;
float:right;
margin-right:2%;

position: relative;

}
.com:hover {opacity: 0.75}
.rep:hover {opacity: 0.75}
.ed:hover {opacity: 0.75}

.com{
  font-size: 17px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: white;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
border: none;
border-radius: 8px;
padding-left: 1%;
padding-right : 1%;
float:right;
margin-right:2%;

position: relative;
 background-color: #710404;

}
.rep{
  font-size: 17px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: white;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
border: none;
border-radius: 8px;
padding-left: 1%;
padding-right : 1%;
float:right;
margin-right:2%;

position: relative;
 background-color: #001e9e;

}
.ed{
  font-size: 17px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: white;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
border: none;
border-radius: 8px;
padding-left: 1%;
padding-right : 1%;
float:right;
margin-right:2%;

position: relative;
   background-color: #ff0000;

}

#Buttons{
    background: rgb(221, 221, 221);
    height: 23px;
    position: relative;
    top: 0;
    left: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: center;
    margin:auto;
}

#WriteComment{
  position: static;
border: black 1px solid;
width:80%;
float:left;
}
</style>

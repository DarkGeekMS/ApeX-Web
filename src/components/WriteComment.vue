<template>
  <div id="WriteComment" v-show="!clicked">
    <div>
      <textarea  class="write" v-model="content"  cols="30" rows="10"></textarea>
    </div>
  
    <div id="Buttons">
      <button v-show = "buttonType == 0"  class="com" v-on:click="comment">Comment</button>
      <button v-show = "buttonType == 1"  class="rep" v-on:click="reply">Reply</button>
      <button v-if = "buttonType == 2"  class="ed" v-on:click="edit">Edit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  
  name: 'WriteCommentItem',
  props:{
    buttonType:String,
    content:String,
    parentIdx:Number,
    parentLevel:Number,
    parentID:Number

  },
  
  data(){
    return{
      clicked:0,
      currentID:0
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
       if (this.content!=null)
      {
      //TODO:send request and get currentID
      axios.post('http://localhost/comment', {
       name: "comment",
       content: this.content,
       parent_I: this.parentID,
       AuthID: "gogo"
        })
      .then(function (response) {
        console.log(response);
        this.currentID=response.ID;

       })
      .catch(function (error) {
       console.log(error);
       });
      //to test
      //this.currentID=this.parentID+1;
      //
      this.$emit('Comment',this.content,'gogo',this.parentID,this.currentID );
      
      }
      else
      alert("Empty Text cannot be submitted!");
    },
    reply:function(){
       if (this.content!=null)
      {
        //TODO:send request and get currentID
      axios.post('http://localhost/comment', {
       name: "reply",
       content: this.content,
       parent_I: this.parentID,
       AuthID: "gogo"
        })
      .then(function (response) {
        console.log(response);
        this.currentID=response.ID;
       })
      .catch(function (error) {
       console.log(error);
       });
      //to test
      //this.currentID=this.parentID+1;
      //
      this.$emit('Reply',this.content,'gogo',this.parentIdx,this.parentLevel,this.parentID,this.currentID );
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
.boldButton{
  background:url(../assets/bold.png) no-repeat;
    border:none;
    width:20px;
    height:25px;
}
.boldButton:active {
     background:url(../assets/bold2.png) no-repeat;
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

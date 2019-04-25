<template>
  <div id="WriteComment" v-show="!replyClicked && !editClicked">
    <div>
      
      <textarea  id="CommentSpace" class="write" v-model="content"  cols="30" rows="10"></textarea>

    </div>

    <div id="Buttons">
      <button v-show = "buttonType == '0'"  class="com" v-on:click="comment" id="InnerCommentButton">Comment</button>
      <button v-show = "buttonType == '1'"  class="rep" v-on:click="reply" id = "Reply">Reply</button>
      <button v-show = "buttonType == '2'"  class="ed" v-on:click="edit" id = "Edit">Edit</button>
      <button v-show = "buttonType == '3'"  class="rep" v-on:click="sendReplyOnMessage" id = "Message">Send</button>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {AllServices} from '../MimicServices/AllServices.js'


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
      currentID:'',
      con:[]

    }
  },
  methods:{
    edit:function(){
      this.editClicked=!this.editClicked;
        this.OpString();

      if (this.content!='')
      {
        console.log('pp',this.parentID);
AllServices.EditComment(this.parentID,this.content).then((data) => {
        if(data){
        this.$emit('editParent',this.content,this.con);
        }
        else
          alert("Log In First!!");

      });

      }
      else
      {
      alert("Empty Text cannot be submitted!");
      this.$emit('noEdit');
      }
    },
    
OpString:function(){
  this.con=[];
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
    comment:function(){
              console.log('hhhh ya ro7 omk',this.content);
      this.OpString();
       if (this.content!=null)
      {
      
      //TODO:send request and get currentID
      AllServices.WriteComment(this.content,this.parentID).then((data) => {
        if(data){
        console.log(data);
         this.currentID=data.comment;
         this.$emit('Comment',this.content,this.con,this.$localStorage.get('token'),this.parentID,this.currentID );
        }
      });
      //to test
      //this.currentID=this.parentID+1;
      
      }
      else
      alert("Empty Text cannot be submitted!");
    }
    ,
    reply:function(){
      console.log('hhhh ya ro7 omk',this.content);
      this.OpString();

       if (this.content!=null)
      {
      
      //TODO:send request and get currentID
      AllServices.WriteComment(this.content,this.parentID).then((data) => {
        if(data){
        console.log(data);
        this.replyClicked=!this.replyClicked;
        this.currentID=data.reply;
        this.$emit('Reply',this.content,this.con,this.$localStorage.get('token'),this.parentIdx,this.parentLevel,this.parentID,this.currentID );
        }
      });

//        this.replyClicked=!this.replyClicked;

//        this.$emit('Reply',this.content,this.$localStorage.get('token'),this.parentIdx,this.parentLevel,this.parentID,this.currentID );

      //to test
      //this.currentID=this.parentID+1;
      
      }
      else
      alert("Empty Text cannot be submitted!");
    },
     sendReplyOnMessage:function(){
    
       if (this.content!=null)
      {
      AllServices.WriteComment(this.content,this.parentID).then((data) => {
        if(data){
        this.replyClicked=!this.replyClicked;
        this.$emit('ReplyOnMessage',this.content);
        }
      });
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

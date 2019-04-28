<template id="PostTemlate">

  <div class="postMod">
    <!-- VERY IMPORTANT! REPORT MODAL APPEARS MULTIPLE TIMES FOR EACH POST  -->
   <reportBox> </reportBox>
    
<div class="panel panel-default"  @click="ShowModal()" v-show="Not_Hide" id="post">

    <div class="panel-body">
    <div class="panel2 panel-default"  id="postSide">


          <div class="column1" id="postCol1">


<button @click="changeColor_up" type="button" :class="className_up" id="up" >
        <i class="glyphicon glyphicon-arrow-up"></i>
</button>

<h5 id="PostVote">{{this.points}}</h5>

<button @click="changeColor_down" type="button" :class="className_down" id="down" class="DOWN">
         <i class="glyphicon glyphicon-arrow-down" id="upArrow"></i>
</button>


        </div>

      </div>


      <router-link class="fontUser" id="subred" :to="{name:'ApexCom' , params: {apexComId:postData.apex_id}}">{{postData.apex_com_name}}</router-link>
      <font class="postby" id="fontPostby">. Posted by</font>
      <router-link class="postby" id="user" :to="{name:'UserProfile' , params: {userName:postData.post_writer_username}}"> {{postData.post_writer_username}}</router-link>

      <font class="postby" id="fontpost"> </font>
      <a href="#" class="postby" id="timeAgo">  {{moment(postData.created_at).fromNow()}}</a>
      <h3>{{postData.title}}</h3>
      <p id="postBody" class="hPost" v-if="!this.showEditTextArea">

        {{postData.content}}
         </p>
          <textarea  @keyup="store" v-if="this.showEditTextArea" class="form-control" rows="7" id="textarea">{{postData.content}}</textarea> 
          
          <button @click="saveChange" v-if="this.showEditTextArea" class="btn btn-primary postButton" id="saveEdit">SAVE</button>
          <!-- <button  v-if="this.showEditTextArea" class="btn btn-primary postButton" id="cancel">CANCEL</button> -->
          
<iframe  v-show ="postData.videolink!==null" width="100%" height="315"  :src=postData.videolink frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<img v-show="postData.img!==null" :src=postData.img  height="100%" width="100%">
</div>
   
<footer>

<div class="btn-group" role="group" aria-label="..." id="drop">

  <button type="button" class="btn btn-default " id="commentButton" ><i class="far fa-comment-alt" id="commentIcon"></i>
Comments</button>
  <button  type="button" class="btn btn-default  SAVE"  @click="Save()" id="SaveButton" >

    <i class="fa fa-plus-square" v-if="Saved=='Save'" id="SaveIcon"></i>
    <i class="glyphicon glyphicon-check" v-if="Saved!='Save'" id="UnsaveIcon"></i>



    {{Saved}}</button>

  <div class="btn-group" role="group" id="DropDiv">
    <button @click="ToggleShowModalVar()" type="button" class="btn btn-default " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="DropButton">

      <span class="caret" id="postSpan"></span>
    </button>
    <ul class="dropdown-menu" id="dropMenu">
      <li ><a href="#"  @click="Hide" class="HIDE"><i class="fa fa-ban" id="HideIcon"></i>Hide</a></li>
      <li><a  @click="report"><i class="glyphicon glyphicon-flag" id="ReportIcon" ></i>Report</a></li>
      <li v-if="postData.canEdit"><a href="#" @click="editText" ><i class="glyphicon glyphicon-pencil" id="ReportIcon"></i>edit</a></li>
      <li v-if="postData.canEdit"><a href="#" @click="deletePost" ><i class="glyphicon glyphicon-pencil"></i>edit</a></li>
      <li><a href="#" @click="isLocked" v-show="isAdmin() || isModerator()">
        
        <i v-if="Locked=='unlock'" class="fa fa-lock" id="ReportIcon"></i>
        <i v-if="Locked=='Lock'" class="fa fa-unlock" id="ReportIcon"></i>
          {{this.Locked}}</a></li>
    </ul>
  </div>

</div>
 <button type="button" v-show="moderator" class="buttonDelete" id="DeleteButton"><i class="glyphicon glyphicon-trash" id="DeleteIcon"></i>Delete Post</button>


</footer>


          </div>

       </div>


</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script id="postScript">

import {MimicDisplayPosts} from '../MimicServices/DisplayPosts.js'
import { AllServices } from '../MimicServices/AllServices';
import reportBox from './ReportModal.vue'
import swal from 'sweetalert';
var moment =require('moment');
/**
 * @vue-data {string} [Save="Save"] Save value
 * @vue-data {boolean} [Not_Hide=true]    check if post not hide
 * @vue-data {boolean} [is_Hide=false]    check if post is hide
 * @vue-data {boolean} [pressed_up=false]  check pressed uparrow
 * @vue-data {boolean} [pressed_down=false]  check pressed downarrow
 * @vue-data {integer} [votes=0] votes
 * @vue-data {boolean} [Deleted=false] check deleted Post
 * @vue-data {JWT} [token=''] userID
 * @vue-data  {string} [PostId=''] postID
 * @vue-data  {boolean} [moderator=false] check if the user is moderator
 * @vue-data  {boolean} [Deleted=false] check if the post is Deleted
 *@vue-prop {object} [postdata] the data of the post
 */
export default {

  name: 'PostItem',

   data(){
       return{
             moment:moment,
              isModal:false,
             showEditTextArea:false,
             editShow:false,
             Not_Hide :true,
             is_Hide  :false,

             className_up   : 'btn btn-light btn-sm is-gray',
             className_down : 'btn btn-light btn-sm is-gray',

             pressed_up   : false,
             pressed_down : false,

             points  :this.postData.votes,
             Saved  :"Save",
             PostId   :"",
             token  :this.$localStorage.get('token'),

             moderator:false,
             ShowModalVar:true,
             Deleted:false,
             video:true ,
             image:false ,
             Locked:'Lock',
             ago:''      
            };
         },

  methods: {
     isModerator:function()
      {
        if(this.$localStorage.get('login')){
        AllServices.userType().then((data) =>{
        if(data.type ==2){
          this.moderator=true;
          return true;
          }
        else{
          return false;
        }
        })
        }
      },
   isAdmin:function()
      {
       
        if(this.$localStorage.get('login')){
        AllServices.userType().then((data) =>{
        if(data.type ==1){
          return true;
          }
        else{
          return false;
        }
        })
        }
      },
   
    saveChange(){
    
          this.postData.content= document.getElementById("textarea").value; 
          this.showEditTextArea=false;
          AllServices.EditPost(this.postData.id, this.postData.content);
        
  
    },

    report(){
    if(this.$localStorage.get('login') ){
        if(this.ShowModalVar == true){
        this.ToggleShowModalVar();
         }
  
     this.onlyOneTime=false;
      this.$modal.show('reportBox');

    }
    else{
      alert('Login First!!');
    }
    },
    isLocked(){
      if(this.$localStorage.get('login')){
        if(this.ShowModalVar == true){
        this.ToggleShowModalVar();
    }
     // alert('lock successfully');
     
     if(this.Locked=='Lock'){

       this.Locked='unlock';
       this.$emit('lockComment',this.Locked);
       
     }
     else{
      this.Locked='Lock';
      this.$emit('lockComment',this.Locked);
      }
      this.PostId=this.postData.id;
      AllServices.isLocked(this.PostId);

    }
    else{
      alert('Login First!!');
    }
    },

    editText(){
       if(this.ShowModalVar == true){
           this.ToggleShowModalVar();
        } 
       // this.$emit('Edit');
        this.showEditTextArea=true;
       


    },
     /**
     * delete post if the moderator press delete button.
     */
    deletePost()
       {
         if(this.ShowModalVar == true){
         this.ToggleShowModalVar();
       }
        this.PostId=postData.id;
       AllServices.deletePost(this.PostId,this.$localStorage.get('token'));

   },
  /**
    * Hide post if the User press Hide button.
    */
       Hide(){
        
         if( this.$localStorage.get('login') ){
         if(this.ShowModalVar == true){
         this.ToggleShowModalVar();
         }
        if(this.Not_Hide)
            {
            this.Not_Hide=false;
            this.is_Hide=true;
            

            }
            
        this.PostId=this.postData.id;
        AllServices.Hide(this.PostId,this.$localStorage.get('token'));

         }
         else{
         alert('login first');
       }
       }
       ,
    changeColor_up()
    {
     
      if(this.$localStorage.get('login') ){
      if(this.ShowModalVar == true){
      this.ToggleShowModalVar();
    }
          if(!this.pressed_up)
          {
                     
                      if(this.pressed_down)
                      {
                  
                      this.pressed_down   = false;
                      this.className_down = 'btn btn-light btn-sm is-gray';

                      }
                    
                      this.className_up    = 'btn btn-light btn-sm is-red';
                      this.pressed_up      =true;
                        
                      
                     
                       this.PostId=this.postData.id;
                       this.postData.up=true;
                
                }
              else {
                    this.className_up = 'btn btn-light btn-sm is-gray';
                    this.pressed_up = false;
                    this.PostId=this.postData.id;
                
                   

               }
                 this.upVoted = !this.upVoted;
                var downState = this.downVoted;
               this.downVoted = false;
               AllServices.upvote(this.PostId,this.points,this.upVoted,downState).then((data) => {
            if(data){
                this.points=data.votes;
                alert(this.points);
                  }});


      }
      else{
        alert('Login First !!');
      }
      }
      ,
     changeColor_down(){
        this.downVoted = !this.downVoted;
        var upState = this.upVoted;
        this.upVoted = false;
       if(this.$localStorage.get('login') ){
       if(this.ShowModalVar == true){
       this.ToggleShowModalVar();
     }
                  if(!this.pressed_down)
                  {
                      if(this.pressed_up)
                      {
                        
                          this.pressed_up=false;
                          this.className_up = 'btn btn-light btn-sm is-gray';

                      }
                         this.className_down = 'btn btn-light btn-sm is-blue';
                         this.pressed_down=true;

                       
                         this.PostId=this.postData.id;
                  
                     
                         

                  }
              else {
                  this.className_down = 'btn btn-light btn-sm is-gray';


              
                   this.pressed_down = false;
                   this.PostId=this.postData.id;
                
                 
           


                 }
                  AllServices.downvote(this.PostId,this.points,this.downVoted,upState).then((data) => {
                 if(data){
                   this.points=data.votes;
                 
                 }});
              }
              else{
                alert('Login First !!');
              }
              },
               /**
    * Save post if the User press Hide button.
    */
    Save(){
     
        if( this.$localStorage.get('login') ){
      if(this.ShowModalVar == true){
      this.ToggleShowModalVar();
    }
 
        if(this.Saved=="Save")
        {
      
        this.Saved="unsave";
        this.PostId=this.postData.id;
      
        AllServices.save(this.$localStorage.get('token'),this.PostId);

      }
        else if(this.Saved=="unsave"){
            this.Saved="Save";
            this.PostId=this.postData.id;

         
       
          
             AllServices.save(this.$localStorage.get('token'),this.PostId);
           }




    }
    else{
      alert('login First !!');
    }
    },
  
    /**
* show the clicked post on the modal.
*/
      ShowModal(){
        this.isModal=true;
        if(this.ShowModalVar == true){
          this.$emit('showUp',this.postData,);
   
          this.$modal.show('Demo-OnePost');
        }
          else {
            this.ToggleShowModalVar();
          }


      },
      ToggleShowModalVar(){
        this.ShowModalVar=!this.ShowModalVar;
              },
},
props: {
postData:{},
    upVoted:Boolean,
    downVoted:Boolean,
  
       },
created(){
  
   if(this.postData.canEdit){
      this.className_up    = 'btn btn-light btn-sm is-red';
        this.pressed_up      =true;
   }

      /*
      axios.get("http://localhost/me",{token:this.token}).then(response=>{this.userId=response.userID}).catch(function (error)
       {
        console.log(error);
      });
      */

       if(this.userId==2){
        this.moderator=true;
       }
       
},
computed: {
  // timestamp: function () {
  //   return moment(this.<model>.attributes['created-at']).format('YYYY-MM-DD [at] hh:mm')
  // }
}
,
components:{
    reportBox,
   
  
  },
  mounted(){
//     alert('votess');
//  this.votes=postData.votes;
  }
}


</script>

<style scoped id="PostStyle">
.is-red{
            color:rgb(255, 69, 0);
        }

.is-blue{
            color: rgb(113, 147, 255);
        }

.is-gray{

             color: rgb(135, 138, 140);
        }

#up:hover{
            color: rgb(204, 55, 0);
         }

#down:hover{
            color: rgb(90, 117, 204);

            }
.column1 {
            float: left;
            column-rule-width: 10%;
         }
 #post:hover{
            border-color:rgb(135, 138, 140);

            }
 #postBody:hover{
             cursor:pointer
               }

  #imgId{
         cursor: pointer;
     
        }
  
h5 {
    text-align: center;
   }
.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5%;
    margin-left: 0%;
     }


#footer{
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0%;
    margin-left: 1%;
      }
.panel2{
    margin-bottom: 0%;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    box-shadow: 0 1px 1px rgba(0,0,0,.05);}

    .panel {
        width:100%;
        margin-bottom: 0%;
        margin-left: 5%;
        margin-right: unset;
        margin-top: 3%;
        background-color: #fff;
        border: 1px solid transparent;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
    }
   
.fontUser{
    font-size: 12px;
    font-weight: 700;
    color: rgb(28, 28, 28);
         }
.postby{
    font-size: 12px;
    color: rgb(120, 124, 126);
    cursor: pointer;
}
.buttonDelete{
      background-color: #f4511e;

} 
@media(max-width:1054px){
  div .panel 
  {
    width: 80%;

      }
  div .panel{
    margin-left: 4%
  }
}
#postCol1{

height:100%;

}
.hPost{
   overflow: auto;
   word-wrap: break-word;
   margin-top:0%;
   font-family:Verdana, Geneva, Tahoma, sans-serif;
   font-size: 130%;
  

}
.column2{
width: 100%;

}
.panel-body {
     padding: 2px;
     cursor: pointer;
}

#post{

    width: 80%;
   box-sizing: border-box;
    /* width: 250%; */
    margin-left: 23%;
    margin-top: 4%;
    min-width: 50%;
    height: 100%;
   margin-right: 0%;

}

.panel-body{

  width: 100%;
}
#saveEdit{
  margin-left:92.5%; 
}
#cancel{
  margin-left:80%;
  /* padding-top: 0%; */
  
}

#postSide{
width: 30%;

}

@media (max-width:933px){
 #post{
      width:158%;
      margin-left:4.6%;
  }
} 
</style>

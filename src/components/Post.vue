<template id="PostTemlate">

  <div class="postMod">
    <!-- VERY IMPORTANT! REPORT MODAL APPEARS MULTIPLE TIMES FOR EACH POST  -->
   <reportBox> </reportBox>
    
<div class="panel panel-default"  @click="ShowModal()" v-show="Not_Hide" id="post">

    <div class="panel-body">
    <div class="panel2 panel-default"  id="postSide">


          <div class="column1" id="postCol1">


<button @click="changeColor_up" type="button" :class="className_up" id="up">
        <i class="glyphicon glyphicon-arrow-up"></i>
</button>

<h5 id="PostVote">{{votes}}</h5>

<button @click="changeColor_down" type="button" :class="className_down" id="down" class="DOWN">
         <i class="glyphicon glyphicon-arrow-down" id="upArrow"></i>
</button>


        </div>




      </div>


      <router-link class="fontUser" id="subred" :to="{name:'ApexCom' , params: {apexComName:postData.apex_id}}">{{postData.apex_id}}</router-link>
      <font class="postby" id="fontPostby">. Posted by</font>
      <router-link class="postby" id="user" :to="{name:'UserProfile' , params: {userName:postData.posted_by}}"> {{postData.posted_by}}</router-link>

      <font class="postby" id="fontpost"> </font>
      <a href="#" class="postby" id="timeAgo">  </a>
      <h3>{{postData.title}}</h3>
      <p id="postBody" class="hPost">

        {{postData.content}}
         </p>


<iframe  v-show ="postData.videolink!==''" width="100%" height="315"  :src=postData.videolink frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<img v-show="postData.img!==''" :src=postData.img  height="100%" width="100%">
</div>
   
<footer>

<div class="btn-group" role="group" aria-label="..." id="drop">

  <button type="button" class="btn btn-default " id="commentButton" ><i class="far fa-comment-alt" id="commentIcon"></i>
Comments</button>
  <button  type="button" class="btn btn-default  SAVE"  @click="Save" id="SaveButton" >

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
      <li><a href="#" @click="isLocked">
        
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
             editShow:false,
             Not_Hide :true,
             is_Hide  :false,

             className_up   : 'btn btn-light btn-sm is-gray',
             className_down : 'btn btn-light btn-sm is-gray',

             pressed_up   : false,
             pressed_down : false,

             votes  :this.postData.votes,
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
    report(){
if(this.ShowModalVar == true){
      this.ToggleShowModalVar();
    }
   //alert('ana report');
     this.onlyOneTime=false;
      this.$modal.show('reportBox');

    },
    isLocked(){
        if(this.ShowModalVar == true){
      this.ToggleShowModalVar();
    }
     // alert('lock successfully');
     
     if(this.Locked=='Lock'){

       this.Locked='unlock';
        this.$emit('lockComment',this.Locked);
     }
     else{this.Locked='Lock';
      this.$emit('lockComment',this.Locked);}
      AllServices.isLocked(this.PostId,this.$localStorage.get('token'));

    },
    editText(){
       if(this.ShowModalVar == true){
      this.ToggleShowModalVar();
        } 
        this.$emit('Edit');
        //this.$router.go(-1);


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
         if(this.ShowModalVar == true){
         this.ToggleShowModalVar();
         }
        if(this.Not_Hide)
            {
            this.Not_Hide=false;
            this.is_Hide=true;
            alert("Post hidden successfully.")

            }
        this.PostId=postData.id;
        AllServices.Hide(this.PostId,this.$localStorage.get('token'));

         },
    changeColor_up()
    {
      if(this.ShowModalVar == true){
      this.ToggleShowModalVar();
    }
          if(!this.pressed_up)
          {
                      if(this.pressed_down)
                      {
                      this.votes         += 1;
                      this.pressed_down   = false;
                      this.className_down = 'btn btn-light btn-sm is-gray';

                      }

                      this.className_up    = 'btn btn-light btn-sm is-red';
                      this.pressed_up      =true;

                      this.votes          += 1;
                       this.PostId=postData.id;
                      AllServices.upvote(this.$localStorage.get('token'),this.PostId,1);

                }
              else {
                    this.className_up = 'btn btn-light btn-sm is-gray';
                    this.votes     -= 1;
                    this.pressed_up = false;
                     this.PostId=postData.id;
                  AllServices.defaultVote(this.PostId,this.$localStorage.get('token'),0);

               }



      },
     changeColor_down(){
       if(this.ShowModalVar == true){
       this.ToggleShowModalVar();
     }
                  if(!this.pressed_down)
                  {
                      if(this.pressed_up)
                      {
                          this.votes-=1;
                          this.pressed_up=false;
                          this.className_up = 'btn btn-light btn-sm is-gray';

                      }
                         this.className_down = 'btn btn-light btn-sm is-blue';
                         this.pressed_down=true;

                         this.votes-=1;
                          this.PostId=postData.id;
                         AllServices.downvote(this.PostId,this.$localStorage.get('token'),-1);

                  }
              else {
                  this.className_down = 'btn btn-light btn-sm is-gray';


                   this.votes += 1;
                   this.pressed_down = false;
                    this.PostId=postData.id;
                   AllServices.defaultVote(this.PostId,this.$localStorage.get('token'),0);


                 }
              },
               /**
    * Save post if the User press Hide button.
    */
    Save(){
      
      if(this.ShowModalVar == true){
      this.ToggleShowModalVar();
    }
        if(this.Saved=="Save")
        {
        //alert('Post saved successfully');
        this.Saved="unsave";
        this.PostId=postData.id;
        AllServices.save(this.$localStorage.get('token'),this.PostId);

      }
        else if(this.Saved=="unsave"){
            this.Saved="Save";
            this.PostId=postData.id;

         
         //   alert(postData.apex_id);
           
             AllServices.save(this.$localStorage.get('token'),this.PostId);
           }




    },
    
 timeSince(date) {
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
//  var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

//     if (month.length < 2) month = '0' + month;
//     if (day.length < 2) day = '0' + day;

//     return [year, month, day].join('-');
  // var seconds = Math.floor((new Date() - date) / 1000);

  // var interval = Math.floor(seconds / 31536000);

  // if (interval > 1) {
  //   return interval + " years";
  // }
  // interval = Math.floor(seconds / 2592000);
  // if (interval > 1) {
  //   return interval + " months";
  // }
  // interval = Math.floor(seconds / 86400);
  // if (interval > 1) {
  //   return interval + " days";
  // }
  // interval = Math.floor(seconds / 3600);
  // if (interval > 1) {
  //   return interval + " hours";
  // }
  // interval = Math.floor(seconds / 60);
  // if (interval > 1) {
  //   return interval + " minutes";
  // }
  // return Math.floor(seconds) + " seconds";
},
    /**
* show the clicked post on the modal.
*/
      ShowModal(){
        if(this.ShowModalVar == true){
          this.$emit('showUp',this.postData);
   
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
computed :{
        createdDate : function(){
          //  return moment().format('dddd');
        }
},
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
/*      margin-left: 470px;*/
} /* Red */
/* .postItem{
    box-sizing: border-box;
    width: 250%;
    margin-left: 9.5%;
    padding-top: 2%;
    margin-top: 0%;
    min-width: 50%;
    height: 100%;
   margin-right: 0%;

} */
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

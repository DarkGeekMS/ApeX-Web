<template id="PostTemlate">
<div id="PostItme" class="postItem" >
<DemoOnePost id="PostModal"></DemoOnePost>
<div class="panel panel-default" style="width: 62rem;   "  @click="ShowModal()" v-show="Not_Hide" id="post">
  <!-- <div class="row" id="postRow"> -->
    <div class="panel-body"  style="width: 62rem;" >
    <div class="panel2 panel-default" style="width: 3.7rem;" id="postSide">


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
        <div class="column2" id="postCol2">

      <router-link class="fontUser" id="subred" :to="{name:'ApexCom' , params: {ApexComName:postData.apex_id}}">{{postData.apex_id}}</router-link>
      <font class="postby" id="fontPostby">. Posted by</font>
      <router-link class="postby" id="user" :to="{name:'UserProfile' , params: {userName:postData.postedby}}"> {{postData.postedby}}</router-link>

      <font class="postby" id="fontpost"> </font>
      <a href="#" class="postby" id="timeAgo"> 15 hours ago </a>
      <p id="postBody" class="hPost">

        {{postData.content}} </p>


      <!-- <a href="#" class="fontUser" id="subred"> apex_id </a>
        <font class="postby" id="fontPostby">. Posted by</font>
        <a href="#" class="postby" id="user"> username</a>
        <font class="postby" id="fontpost"> </font>
        <a href="#" class="postby" id="timeAgo"> 15 hours ago </a>
        <h3 id="postBody">content </h3> -->
</div>
<footer>

<div class="btn-group" role="group" aria-label="..." id="drop">

  <button type="button" class="btn btn-default " id="commentButton"><i class="far fa-comment-alt" id="commentIcon"></i>
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
      <li><a href="#"><i class="glyphicon glyphicon-flag" id="ReportIcon"></i>Report</a></li>
    </ul>
  </div>

</div>
 <button type="button" v-show="moderator" class="buttonDelete" id="DeleteButton"><i class="glyphicon glyphicon-trash" id="DeleteIcon"></i>Delete Post</button>


</footer>



          </div>

       </div>

   </div>

<!-- </div> -->

</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script id="postScript">
import axios from 'axios'

import {MimicDisplayPosts} from '../MimicServices/DisplayPosts.js'
import { AllServices } from '../MimicServices/AllServices';


export default {

  name: 'PostItem',
   data(){
       return{
             Not_Hide :true,
             is_Hide  :false,

             className_up   : 'btn btn-light btn-sm is-gray',
             className_down : 'btn btn-light btn-sm is-gray',

             pressed_up   : false,
             pressed_down : false,

             votes  :0,
             Saved  :"Save",
             PostId   :"",
             token  :this.$localStorage.get('token'),

             moderator:false,
             ShowModalVar:true,
             Deleted:false
            };
         },

  methods: {
    deletePost()
       {
         if(this.ShowModalVar == true){
         this.ToggleShowModalVar();
       }
       AllServices.deletePost(this.PostId,this.$localStorage.get('token'));
//          axios.post("http://localhost/DelComment",{
//          ID    : this.PostId,
//          token : this.$localStorage.get('token')

//  }).then(response=>{
//    if(response){
//      this.Deleted = true;
//      alert("Deleted successfully");
//    }

//  }).catch(function (error)
//  {
//   //console.log(error);


//    });
   },

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
        AllServices.Hide(this.PostId,this.$localStorage.get('token'));
        // axios.post("http://localhost/Hide",
        // {
        //     name    : this.PostId,
        //     ID : this.$localStorage.get('token')


        // }).then(response => {
        //   if(response){
        //   alert("Hidden successfully");}
        // }).catch(function (error)
        // {
        //    //console.log(error);
        // });
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
                      AllServices.upvote(this.$localStorage.get('token'),this.PostId,1);
                  //     axios.post("http://localhost/vote",
                  //     {

                  //       ID       : this.$localStorage.get('token'),
                  //       name     : this.PostId,
                  //       direction:1

                  //     }).then(response => {
                  //       if(response){
                  //          alert("upvote successfully");}

                  //     }).catch(function (error)
                  //     {
                  //   console.log(error);

                  // });
                }
              else {
                    this.className_up = 'btn btn-light btn-sm is-gray';
                    this.votes     -= 1;
                    this.pressed_up = false;
                  AllServices.defaultVote(this.PostId,this.$localStorage.get('token'),0);
                //     axios.post("http://localhost/vote",
                //    {


                //     ID:this.$localStorage.get('token'),
                //     name:this.PostId,
                //     direction:0

                //   }).then(response => {}).catch(function (error)
                //   {
                //    console.log(error);
                //  });
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
                         AllServices.downvote(this.PostId,this.$localStorage.get('token'),-1);
                    //      axios.post("http://localhost/vote",
                    //  {


                    //       ID      : this.$localStorage.get('token'),
                    //       name    : this.PostId,
                    //       direction: -1

                    //  }).then(response =>{
                    //    if(response){
                    //      alert("downvote successfully");
                    //    }
                    //  }).catch(function (error)
                    //  {
                    //   //console.log(error);

                    // });
                  }
              else {
                  this.className_down = 'btn btn-light btn-sm is-gray';


                   this.votes += 1;
                   this.pressed_down = false;
                   AllServices.defaultVote(this.PostId,this.$localStorage.get('token'),0);
                  //  axios.post("http://localhost/vote",
                  //  {


                  //   ID:this.$localStorage.get('token'),
                  //   name:this.PostId,
                  //   direction:0

                  // }).then(response => {}).catch(function (error) {
                  //    console.log(error);
                  //  });


                 }
              },
    Save(){
      if(this.ShowModalVar == true){
      this.ToggleShowModalVar();
    }
        if(this.Saved=="Save")
        {
        //alert('Post saved successfully');
        this.Saved="unsave";
        AllServices.save(this.$localStorage.get('token'),this.PostId);
        // axios.post( "http://localhost/save",
        // {

        //     ID:this.PostId ,
        //     token:this.$localStorage.get('token')


        // }).then(response=>{
        //   if(response){
        //     alert('Post saved successfully');
        //   }
        // } ).catch(function (error)
        // {
        //     // console.log(error);

        // });
      }
        else{
          
          AllServices.save(this.$localStorage.get('token'),this.PostId);
             //alert('Post unsaved successfully');
            this.Saved="Save";

           }




    },
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
//       getUserId(){
// //axios.get("http://localhost/me",{token:this.token}).then(response=>{this.userId=response.userID});
// }


},
props: {
postData:{},
       },
created(){
         axios.get("http://localhost/me",{token:this.token}).then(response=>{this.userId=response.userID}).catch(function (error)
         {
          //console.log(error);
        });



       if(this.userId==2){
        this.moderator=true;

       }

},
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
            column-rule-width: 1px;
         }
 #post:hover{
            border-color:rgb(135, 138, 140);

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
    margin-right: -15px;
    margin-left: 0;
     }


#footer{
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0px;
    margin-left: 1%;
      }
.panel2{
    margin-bottom: 0px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    box-shadow: 0 1px 1px rgba(0,0,0,.05);}

    .panel {
        margin-bottom: 19px;
        margin-left: 100px;
           margin-top: 73px;
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
}
.buttonDelete{
      background-color: #f4511e;
/*      margin-left: 470px;*/
} /* Red */
.postItem{
width: 0%;
margin-left:6%;
padding-top:5%;
margin-top: 0%;
margin-bottom: -112px;

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
}
</style>

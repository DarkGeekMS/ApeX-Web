<template id="PostTemlate">
<div id="PostItme"  @click="ShowModal()" >
<DemoOnePost id="PostModal"></DemoOnePost>
<div class="panel panel-default" style="width: 62rem;   " v-show="Not_Hide" id="post">
  <div class="row" id="postRow">
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
        <div class="column" id="postCol2">


    <a href="#" class="fontUser" id="subred"> {{postdata.apex_id}} </a>
      <font class="postby" id="fontPostby">. Posted by</font>
      <a href="#" class="postby" id="user">{{postdata.postedby}}  </a>
      <font class="postby" id="fontpost"> </font>
      <a href="#" class="postby" id="timeAgo"> 15 hours ago </a>
      <h3 id="postBody"> {{postdata.content}} </h3>


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

</div>

</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script id="postScript">
import axios from 'axios'
import {globalStore} from '../main.js'


export default {

  name: 'PostItem',
   data(){
       return{
             postdata3:this.postdata,
             Not_Hide :true,
             is_Hide  :false,

             className_up   : 'btn btn-light btn-sm is-gray',
             className_down : 'btn btn-light btn-sm is-gray',

             pressed_up   : false,
             pressed_down : false,

             votes  :0,
             Saved  :"Save",
             PostId   :"",
             token  :globalStore.token,
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
         axios.post("http://localhost/DelComment",{
         ID    : this.PostId,
         token : this.token

 }).then(response=>{
   if(response){
     this.Deleted = true;
     alert("Deleted successfully");
   }

 }).catch(function (error)
 {
  console.log(error);


   });
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

        axios.post("http://localhost/Hide",
        {
            name    : this.PostId,
            ID : this.token

        }).then(response => {
          if(response){
          alert("Hidden successfully");}
        }).catch(function (error)
        {
           console.log(error);
        });
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
                      axios.post("http://localhost/vote",
                      {

                        ID       : this.token,
                        name     : this.PostId,
                        direction:1

                      }).then(response => {
                        if(response){
                           alert("upvote successfully");}

                      }).catch(function (error)
                      {
                    console.log(error);

                  });
                }
              else {
                    this.className_up = 'btn btn-light btn-sm is-gray';
                    this.votes     -= 1;
                    this.pressed_up = false;
                    axios.post("http://localhost/vote",
                   {


                    ID:this.token,
                    name:this.PostId,
                    direction:0

                  }).then(response => {}).catch(function (error)
                  {
                   console.log(error);
                 });
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
                         axios.post("http://localhost/vote",
                     {


                          ID      : this.token,
                          name    : this.PostId,
                          direction: -1

                     }).then(response =>{
                       if(response){
                         alert("downvote successfully");
                       }
                     }).catch(function (error)
                     {
                      console.log(error);

                    });
                  }
              else {
                  this.className_down = 'btn btn-light btn-sm is-gray';


                   this.votes += 1;
                   this.pressed_down = false;
                   axios.post("http://localhost/vote",
                   {


                    ID:this.token,
                    name:this.PostId,
                    direction:0

                  }).then(response => {}).catch(function (error) {
                     console.log(error);
                   });


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
        axios.post( "http://localhost/save",
        {

            ID:this.PostId ,
            token:this.token


        }).then(response=>{
          if(response){
            alert('Post saved successfully');
          }
        } ).catch(function (error)
        {
             console.log(error);

        });
      }
        else{
          axios.post( "http://localhost/save",
          {

              ID:this.PostId ,
              token:this.token


          }).then(response=>{
            if(response){
              alert('Post unsaved successfully');
            }
          } ).catch(function (error)
          {
               console.log(error);

          });
             //alert('Post unsaved successfully');
            this.Saved="Save";

           }




    },
      ShowModal(){
        if(this.ShowModalVar == true){
          // alert('1111')
          // globalStore.oneposttest=this.postdata3;
          this.$emit('showUp',this.postdata);
          // alert('222')
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
postdata:{},
       },
       created(){
         axios.get("http://localhost/me",{token:this.token}).then(response=>{this.userId=response.userID}).catch(function (error)
         {
          console.log(error);
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
        margin-top: 50px;
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

</style>

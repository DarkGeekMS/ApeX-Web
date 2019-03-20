<template>
<div id="PostItme"  @click="ShowModal()" >
<DemoOnePost id="PostModal"></DemoOnePost>
<div class="panel panel-default" style="width: 62rem;   " v-show="Not_Hide" id="post">
  <div class="row">
    <div class="panel2 panel-default" style="width: 3.7rem;" >


         <div class="column1">


<button @click="changeColor_up" type="button" :class="className_up" id="up">
        <i class="glyphicon glyphicon-arrow-up"></i>
</button>

<h5>{{votes}}</h5>

<button @click="changeColor_down" type="button" :class="className_down" id="down">
         <i class="glyphicon glyphicon-arrow-down"></i>
</button>


        </div>




      </div>
        <div class="column">


      <a href="#" class="fontUser" > subreddit </a>
      <font class="postby">. Posted by</font>
      <a href="#" class="postby"> username </a>
      <font class="postby"> </font>
      <a href="#" class="postby"> 15 hours ago </a>
      <h3>Post Body Here </h3>


<footer>

<div class="btn-group" role="group" aria-label="...">

  <button type="button" class="btn btn-default "><i class="far fa-comment-alt"></i>
Comments</button>
  <button type="button" class="btn btn-default"  @click="Save">

    <i class="fa fa-plus-square" v-if="Saved=='Save'"></i>
    <i class="glyphicon glyphicon-check" v-if="Saved!='Save'"></i>
    <!-- <i class="glyphicon glyphicon-ok" v-if="Saved!='Save'"></i> -->


    {{Saved}}</button>

  <div class="btn-group" role="group">
    <button @click="ToggleShowModalVar()" type="button" class="btn btn-default " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#"  @click="Hide"><i class="fa fa-ban"></i>Hide</a></li>
      <li><a href="#"><i class="glyphicon glyphicon-flag"></i>Report</a></li>
    </ul>
  </div>

</div>
 <button type="button" v-show="moderator" class="buttonDelete"><i class="glyphicon glyphicon-trash"></i>Delete Post</button>


</footer>



          </div>

       </div>

   </div>

</div>

</template>

<script>
// import DemoOnePost from './DisplayOnePost.vue'

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
             token  :null,
             moderator:false,
             ShowModalVar:true,
            };
         },

  methods: {
         deletePost()
         {
           if(this.ShowModalVar == true){
           this.ToggleShowModalVar();
         }
           this.$http.post("http://localhost/DelComment",{
           ID    : this.PostId,
           token : this.token

   }).then(response => response.json());


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

          this.$http.post("http://localhost/Hide",
          {
              ID    : this.name,
              token : this.token

          }).then(response => response.json());
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
                        this.$http.post("http://localhost/vote",
                        {

                          ID       : this.token,
                          name     : this.PostId,
                          direction:1

                        }).then(response => response.json());



            }
                else {
                      this.className_up = 'btn btn-light btn-sm is-gray';
                      this.votes     -= 1;
                      this.pressed_up = false;
                      this.$http.post("http://localhost/vote",
                     {


                      ID:this.token,
                      name:this.PostId,
                      direction:0

                    }).then(response => response.json());


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
                           this.$http.post("http://localhost/vote",
                       {


                            ID      : this.token,
                            name    : this.PostId,
                            direction: -1

                       }).then(response => response.json());

                  }
                else {
                    this.className_down = 'btn btn-light btn-sm is-gray';


                     this.votes += 1;
                     this.pressed_down = false;
                     this.$http.post("http://localhost/vote",
                     {


                      ID:this.token,
                      name:this.name,
                      direction:0

                     }).then(response => response.json());



                   }
                },
      Save(){
        if(this.ShowModalVar == true){
        this.ToggleShowModalVar();
      }
          if(this.Saved=="Save")
          {
          alert('Post saved successfully');
          this.Saved="unsave";
          this.$http.post( "https://my-json-server.typicode.com/typicode/demo/posts",
          {

              ID:this.data.PostId ,
              token:this.token


          }).then(response => response.json());

          }
          else{

               alert('Post unsaved successfully');
              this.Saved="Save";

             }




      },
      ShowModal(){
        if(this.ShowModalVar == true){
          this.$modal.show('Demo-OnePost');}
          else {
            this.ToggleShowModalVar();
          }


      },
      ToggleShowModalVar(){
        this.ShowModalVar=!this.ShowModalVar;
              },
//         getUser() {
//      this.$http.get('http://localhost:8000/api/user',
//      {
//        headers: {
//          'Authorization': 'Bearer eyJ0e.....etc',
//          'Accept': 'application/json'
//        }
//      }).then(response => response.json())
//    ;
//
//  }


},
props: {

       },
mounted () {
        $.getJSON('http://ilikecoding.net/membership/api/memberships', json => {
          this.token = json.userID
          console.log(json.data)
        })
      }

}

</script>

<style scoped>
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
        margin-top: 100px;
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

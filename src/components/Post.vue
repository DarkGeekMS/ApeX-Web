<template>

  <div id="app">



  <!-- <div class="card" style="width: 37rem;" v-show="Not_Hide"> -->
<div class="panel panel-default" style="width: 37rem;" v-show="Not_Hide">
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


<!--<img src="./assets/a.jpg"  >-->
<h1>Post title</h1>
<h2>Post Body</h2>
<h2>Post Body</h2>
<h2>Post Body</h2>

<footer >
       <!-- <button type="button" class="btn btn-light btn-sm" >

<i class="far fa-comment-alt"></i>
   Comments</button>
  <button type="button" class="btn btn-light btn-sm" @click="Save">

<i class="fa fa-plus-square"></i>
{{Saved}}</button> -->

<!--
  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-light btn-sm" data-toggle="dropdown" >
      <i class="fa fa-ellipsis-h"></i>
    </button>
    <div class="dropdown-menu" >
      <a class="dropdown-item" href="#" @click="Hide">
    <i class="fa fa-ban"></i>
Hide</a>
      <a class="dropdown-item" href="#">
      <i class="fa fa-flag"></i>

Report</a>
    </div>
  </div> -->
<!-- <div class="dropdown">
    <button id="btnGroupDrop1" type="button" class="btn btn-light btn-sm" data-toggle="dropdown">
        <i class="fa fa-ellipsis-h"></i>
    </button>
    <div class="dropdown-menu" >
      <a class="dropdown-item" href="#" @click="Hide">
    <i class="fa fa-ban"></i>
  Hide</a>
      <a class="dropdown-item" href="#">
<i class="glyphicon glyphicon-flag"></i>
  Report</a>
    </div>
</div> -->
<div class="btn-group" role="group" aria-label="...">

  <button type="button" class="btn btn-default "><i class="far fa-comment-alt"></i>
Comments</button>
  <button type="button" class="btn btn-default"  @click="Save">

    <i class="fa fa-plus-square" v-if="Saved=='Save'"></i>
    <i class="glyphicon glyphicon-check" v-if="Saved!='Save'"></i>
    <!-- <i class="glyphicon glyphicon-ok" v-if="Saved!='Save'"></i> -->


    {{Saved}}</button>

  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#"  @click="Hide"><i class="fa fa-ban"></i>Hide</a></li>
      <li><a href="#"><i class="glyphicon glyphicon-flag"></i>Report</a></li>
    </ul>
  </div>
</div>
    </footer>





</div>
</div>

</div>

  </div>

</template>

<script>


export default {
  name: 'App',
   data(){
       return{

                Not_Hide:true,
               is_Hide:false,

       className_up: 'btn btn-light btn-sm is-gray',
       className_down: 'btn btn-light btn-sm is-gray',

         pressed_up : false,
         pressed_down : false,
           votes:0,
           Saved:"Save",
           name:"",
           token:null


   };
   },

  methods: {
delete(){
  this.$http.post("http://localhost/DelComment",{


      ID:this.name,
      token:this.token

}).then(response => response.json());


},
      Hide(){

      if(this.Not_Hide){
          this.Not_Hide=false;
          this.is_Hide=true;
          alert("Post hidden successfully.")

      }

          this.$http.post("http://localhost/Hide",{


              ID:this.name,
              token:this.token

        }).then(response => response.json());
          },
      changeColor_up(){
                    if(!this.pressed_up){
                        if(this.pressed_down)
                        {
                        this.votes+=1;
                        this.pressed_down=false;
                        this.className_down='btn btn-light btn-sm is-gray';

                                             }

                        this.className_up = 'btn btn-light btn-sm is-red';
                        this.pressed_up=true;

                        this.votes+=1;
                        this.$http.post("http://localhost/vote",{


                          ID:this.token,
                          name:this.name,
                         direction:1

                    }).then(response => response.json());



                    }
                else {
                    this.className_up = 'btn btn-light btn-sm is-gray';

                      this.votes-=1;

                      this.pressed_up=false;
                    this.$http.post("http://localhost/vote",{


              ID:this.token,
              name:this.name,
             direction:0

        }).then(response => response.json());


                }


                },
       changeColor_down(){
                    if(!this.pressed_down){
                        if(this.pressed_up){
                            this.votes-=1;
                            this.pressed_up=false;
                            this.className_up = 'btn btn-light btn-sm is-gray';

                        }
                        this.className_down = 'btn btn-light btn-sm is-blue';
                        this.pressed_down=true;

                        this.votes-=1;
                       this.$http.post("http://localhost/vote",{


                      ID:this.token,
                      name:this.name,
                     direction:-1

                }).then(response => response.json());

                    }
                else {
                    this.className_down = 'btn btn-light btn-sm is-gray';


                     this.votes+=1;
                    this.pressed_down=false;
                        this.$http.post("http://localhost/vote",{


                      ID:this.token,
                      name:this.name,
                     direction:0

                }).then(response => response.json());



                }
                },
      Save(){
          if(this.Saved=="Save"){
          alert('Post saved successfully');
          this.Saved="unsave";
          this.$http.post( "https://my-json-server.typicode.com/typicode/demo/posts",{



              ID:this.data.name ,
              token:this.token
               /* token:auth.getAuthHeader()*/

        }).then(response => response.json())
        ;

          }
          else{

               alert('Post unsaved successfully');
              this.Saved="Save";

          }




      },
         getUser() {
      this.$http.get('http://localhost:8000/api/user',
      {
        headers: {
          'Authorization': 'Bearer eyJ0e.....etc',
          'Accept': 'application/json'
        }
      }).then(response => response.json())
    ;

  }


},
props:{

  test:{type:String,default:'secondry'}
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

                color: rgb(135, 138, 140)
            }
            #up:hover {
    color: rgb(204, 55, 0);
}
            #down:hover{
                color: rgb(90, 117, 204);

            }
            .column1 {
           float: left;
            column-rule-width: 1px;
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
.panel2 {
    margin-bottom: 0px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
</style>

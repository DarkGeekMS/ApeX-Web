<template>
  <div id="app">
  <div class="card" style="width: 37rem;" v-show="Not_Hide">

<div class="row">

<div class="column1">

<div class="card" style="width:2.5rem;" >



<button @click="changeColor_up" type="button" :class="className_up" id="up">
         <i class="fa fa-arrow-up" ></i>
</button>

<h5>{{votes}}</h5>

<button @click="changeColor_down" type="button" :class="className_down" id="down">
         <i class="fa fa-arrow-down " ></i>
</button>





</div>
</div>
<div class="column">


<!--<img src="./assets/a.jpg"  >-->
<h1>Post</h1>


<footer >
       <button type="button" class="btn btn-light btn-sm" >

<i class="far fa-comment-alt"></i>
   Comments</button>
  <button type="button" class="btn btn-light btn-sm" @click="Save">

<i class="fa fa-plus-square"></i>
{{Saved}}</button>


  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-light btn-sm" data-toggle="dropdown" >
      <i class="fa fa-ellipsis-h"></i>
    </button>
    <div class="dropdown-menu" >
      <a class="dropdown-item" href="#" v-on:click="Hide">
    <i class="fa fa-ban"></i>
Hide</a>
      <a class="dropdown-item" href="#">
      <i class="fa fa-flag"></i>

Report</a>
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
  name: 'app',
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
           name:"post_name"


   };
   },

  methods: {
      Hide(){

      if(this.Not_Hide){
          this.Not_Hide=false;
          this.is_Hide=true;
          alert("Post hidden successfully.")

      }
          this.$http.post("http://localhost/Hide",{


              ID:1, //don't done yet
              token:'' //don't done yet

        }).then(function(data){
              console.log(data);

          });
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


                          ID:'', //don't done yet
                          name:'', //don't done
                         direction:1

                    }).then(function(data){
                          console.log(data);

                      });



                    }
                else {
                    this.className_up = 'btn btn-light btn-sm is-gray';

                      this.votes-=1;

                      this.pressed_up=false;
                    this.$http.post("http://localhost/vote",{


              ID:'',//don't done yet
              name:'', //don't done
             direction:0

        }).then(function(data){
              console.log(data);

          });


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


                      ID:'', //don't done yet
                      name:'', //don't done yet
                     direction:-1

                }).then(function(data){
                      console.log(data);

                  });

                    }
                else {
                    this.className_down = 'btn btn-light btn-sm is-gray';


                     this.votes+=1;
                    this.pressed_down=false;
                        this.$http.post("http://localhost/vote",{


                      ID:'',
                      name:'',
                     direction:0

                }).then(function(data){
                      console.log(data);

                  });




                }
                },
      Save(){
          if(this.Saved=="Save"){
          alert('Post saved successfully');
          this.Saved="unsave";
               this.$http.post( "http://localhost/save",{



              ID:'' ,
               /* token:auth.getAuthHeader()*/

        }).then(function(data){
              console.log(data);

          });

          }
          else{

               alert('Post unsaved successfully');
              this.Saved="Save";

          }




      }

  },
    created(){}

      /*  Vue.http.interceptors.push(function(request){

           request.headers['Authorization']=


        });*/




    
  }

</script>

<style>
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


#footer{
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0px;
}
</style>

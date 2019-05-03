<template>
  <div id="one">
  <div id="main">
     <img width="70px" src="../../public/AMFz23O.jpg" >

     <h4 v-show="!login"> a/popular </h4>
     <h4 v-show="login"> Home </h4>

      <br/>  <br/>

     <p v-show= "!login" > The best posts on Apex for you, pulled from the most active communities on Apex. Check here to see the most shared, upvoted, and commented content on the internet.
     </p>
     <p v-show="login"> Your personal Apex frontpage. Come here to check in with your favorite communities. </p>


     <button  type="button" class="btn btn-primary " data-toggle="button" aria-pressed="false" autocomplete="off" @click="post()">CREATE POST</button>
     <button v-show="login" style=" cursor: no-drop" type="button" class="btn btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" @click="create()" id="Communtitii">CREATE COMMUNITY</button>

      <div class="warn1">To prevent spam, you must be an admin to create communities. </div>

  </div>
</div>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'
import $ from'jquery/dist/jquery.min.js'


  /**
  * @vue-data {boolean} [login=false] if user is logged in 
  */
  export default {

    data () {
      return {
        login: false
      }
    },
    created () {
      setInterval(() => {
        this.login = this.$localStorage.get('login')
      }, 1000)
    },
    mounted(){
      $('#Communtitii').hover(function() {
      $('.warn1').show();
        }, function() {
      $('.warn1').hide();
      });
    },
    methods:{
      /**
       * if user is logged in , can go to create post or create community   
      */
      post: function(){
        if( this.$localStorage.get('login') )
        {
          this.$router.push('/Submit');
        }
        else{
           this.$modal.show('demo-login');
        }
      },
      create: function() {
        AllServices.userType().then((data)=>{
          if(data.type == 1){
            this.$router.push({ name:'CreateApexCom'} );
            $('#Communtitii').css('cursor','pointer');
          }
          else{
            $('#Communtitii').css('cursor','no-drop');
          }
        })
      }
    }
}
</script>

<style scoped>
*{
  padding:0.7%;
  box-sizing: border-box
}
img{
  border-radius:50%
}
h4{
  display: inline-block;
  padding-left: 4%;
  font-size:25px;
}
p{
  color:#7c7c7c;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  overflow-wrap: break-word;

}
button{
  width:90%;
  height:37px;
  font-weight: 500;
  font-size: 17px;
  margin-left: 5%;
  margin-top:4%;
  border-radius: 10px;
}

#main{
  display: inline-block;
  width:320px;
  max-height: 50%;
  color:black;
  background-color: white;
  border-radius: 10px;
  height: auto;
  padding: 3%
  
} 
#one
{
  position: absolute;
  top: 116px;
  left: 65%;
}

@media(max-width:933px){
  #one{
    display:none
  }
}

.warn1{
  border: none;
  width: 80%;
  overflow: hidden;
  line-height: 15px;
  padding: 0.3%;
  color:white;
  background-color: #000;
  border-radius: 10px;
  padding: 7px;
  padding-left: 15px;
  font-size: 12px;
  transition: all ease-in-out 0.5s;
  margin-left:30px;
  margin-top:5px;
  text-align:center;
  display:none;
}
 </style>

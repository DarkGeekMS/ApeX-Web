<template>
  <div id="main">
     <img width="70px" src="../../public//AMFz23O.jpg" >

     <h4 v-show="!login"> r/popular </h4>
     <h4 v-show="login"> Home </h4>

      </br>  </br>

     <p v-show= "!login" > The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.
     </p>
     <p v-show="login"> Your personal Reddit frontpage. Come here to check in with your favorite communities. </p>


     <button  type="button" class="btn btn-primary " data-toggle="button" aria-pressed="false" autocomplete="off" @click="post()">CREATE POST</button>
     <button v-show="login" style=" cursor: no-drop" type="button" class="btn btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" @click="">CREATE COMMUNITY</button>
  </div>
</template>

<script>
 // import DemoLoginModal  from './DemoLoginModal.vue'

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
    methods:{
      post: function(){
        if( this.$localStorage.get('login') )
        {
          this.$router.push('/Submit');
        }
        else{
           this.$modal.show('demo-login');
        }
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
  width:80%;
  height:40px;
  font-weight: 500;
  font-size: 17px;
  margin-left: 9%;
  margin-top:5%;
  border-radius: 20%;
}

#main{
  float:right;
  width:21%;
  max-height: 50%;
  color:black;
  background-color: white;
  border-radius: 5%;
  margin-top: 6%;
  margin-right: 18%;
}
@media(max-width:1300px){
  #main{
    display:none
  }
}
 </style>

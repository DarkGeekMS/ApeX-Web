<template>
  <div id="main">
     <h4>  RECENT POSTS </h4>
      </br> 
     <div id="subDiv" v-show="exist" v-for='post in posts' > 
      <div id="sub1">
         <img width="20%" :src="'../../public/'+apex.avatar"/>
         <a class="name"> {{apex.name}} </a>
         <div class="memb"> {{apex.numOfMeb}} Member </div>
       </div> 
       <button class="btn btn-primary log" style="display:inline-block; width:15%" type="button"> JOIN</button>  
       
       </br>
    </div>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        posts:[]
      }
    },
    mounted()
    {

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
  font-size:14px;
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
  margin-top: -20%;
  margin-right: 18%;
} 

@media(max-width:1300px){
  #main{
    display:none
  }
}
 </style>

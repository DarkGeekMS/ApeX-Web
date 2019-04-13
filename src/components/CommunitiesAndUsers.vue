<template>
  <div id="mainDiv" >
    <a href="" id="subDiv" v-for='apex in apexs' > 
      <div id="sub1">
         <img width="20%" src="../../public//AMFz23O.jpg" >
         <a class="name"> {{apex.name}} </a>
         <div class="memb"> {{apex.numOfMeb}} Member </div>
       </div> 
       <div id="sub2">
         <div class="about" style="display:inline-block">{{apex.description}} </div>
         <button class="btn btn-primary log" style="display:inline-block" type="button"> SUBSCIBE</button> 
       </div>
       
       </br></br>
    </a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      apexs:[
      {
         name:'AyatMostafa',
         numOfMeb: 0,
         description: "Aww, cripes. I didn't know I'd have to write a description. How many words is that so far, like a hundred? Soooo, yeah. Mildly interesting stuff.",
      },
      {
         name:'AyatMostafa',
         numOfMeb: 0,
         description: "Aww, cripes. I didn't knowterests you. Mildly. It's in the name, ffs.hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      },

      ]
    }
  },

}
</script>

<style scoped>
*{
  display: inline-block;
  margin:0%;
}
#mainDiv{
    margin:2% 3%;
    width: 75%;
    height:100%;
    background-color: white;
    height:100%;
    border-radius:7%;
    box-sizing: border-box; 
}

#subDiv{
  display: block;
  width:100%;
  height:100%;
  text-decoration: none;
  box-sizing: border-box;
  margin: 3% auto;
  padding-left:1% 
}
#sub1{
  width:20%;
  height:100%;
  float:left;
} 

img{
  border-radius:50%; 

}
.name{
  color:black;
  margin-left:2%;
  text-decoration: none;
}
.memb{
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    color: rgb(135, 138, 140);
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: 25%;
  }
#sub2{
  width:80%;
  height:100%;
  float:right;
}
.about{
  font-size: 13px;
  line-height: 18px;
  color: rgb(135, 138, 140);
  -webkit-box-flex: 1;
  flex-grow: 1;
  overflow-wrap: break-word;
  overflow: hidden;
  margin-left: 5%;
  width:60%;
  box-sizing: border-box;
  
}
.log{
  float:right;
  margin-right: 1%;
}
@media(max-width:964.7px){
  #mainDiv{
    width:60%;
  }
}
@media(max-width:800px){
  #mainDiv{
    width:40%;
  }
  .about{
    width:30%;
  }
}

@media(max-width:529px){
  #mainDiv{
    width:30%;
  }
  #sub1{
    display: none
  }
}


</style>
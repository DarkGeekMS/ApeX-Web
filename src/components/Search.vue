<template>
  <div id="mainDiv">
    <div class="header">
       <h1>  {{ searchValue }} </h1> 
       <p> Search results </p>
     </br>
    </div>
    <div class="body">
      <ul>
       <li><router-link to="/" exact > Posts </router-link></li>
       <li><router-link to="/search/users" exact> Communities and users </router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  props:{
    myProperty:{
      type: String
    }
  },
  data(){
    return{
      searchValue: ''
    }
  },
  created(){
       this.searchValue = this.myProperty 
  },

}
</script>

<style scoped>
#mainDiv{
 margin: 0 auto
}
*{
   box-sizing: border-box;
   font-family: Arial, Tohama,fantasy;
}
.header{
  background-color: white;
  width:100%;
  padding-left:2%;
  margin-top: 3%;
  border:1px solid #eee
}
.header h1{
    font-size: 22px;
    font-weight: 700;
}
.header p{
  color:#999;
}
.body ul{
  padding: 1% 0;
  background-color: white;
  padding-left:3%;
  width:100%;
  list-style-type: none;
  font-size: 100%;
  font-weight: 680;
  color:#777777f2;
}
.body li{
    display: inline-block;
    margin: 0 10px;
}
.body a{
    text-decoration: none;
    padding: 6px 8px;
    color:#777777f2;
   background-color: white
}
.router-link-active{
    color: black;
    text-decoration: underline overline double blue

}
</style>
<template>
  <div id="mainDiv">
    <div class="header">
       <h1>  {{ searchValue }} </h1> 
       <p> Search results </p>
     </br>
    </div>
    <div class="body">
      <ul>
       <li><router-link to="/search" exact > Posts </router-link></li>
       <li><router-link to="/search/users" exact> Communities and users </router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
import axios from 'axios'

export default {
 /* props:{
    myProperty:{
      type: String
    }
  }, */
  data(){
    return{
      searchValue: '',
      posts: [],
      apexComs: [],
      users:[],
      error: ''
    }
  },
  created(){
       setInterval(() => {
          this.searchValue = this.$localStorage.get('search');
       }, 2000)
      
  },
  updated(){
     axios.post('http://127.0.0.1:8000/api/search',{
        query: this.searchValue,
        token: this.$localStorage.get('token')
      }).then(response => {
        this.posts = response.data.posts,
        this.apexComs = response.data.apexComs,
        this.users = response.data.users
      }).catch(error => {
        this.error = error
      }) 
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
    margin: 0 15px;
}
.body a{
    text-decoration: none;
    padding: 13px 8px;
    color:#777777f2;
   background-color: white
}
.router-link-active{
    color: black;
    border-bottom: 4px solid #337ab7
}
</style>
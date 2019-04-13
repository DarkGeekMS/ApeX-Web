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
 <!--   <div v-if="this.$router.currentRoute == '/search'" id="DisplayPosts">  
      <div id="PostContainer" v-for="onePost in posts">
         <post :postData="onePost" v-on:showUp="showPost" ></post>
      </div>
    </div> --> 

       <router-view></router-view>
    
  </div>

</template>

<script>
import post from "./Post.vue"
import {AllServices} from '../MimicServices/AllServices.js'
/**
 * @vue-data {string} [error=""] if there is no matching
 * @vue-data {string} [searchVal=""] search value  
 * @vue-data {object} [posts] posts that reflect with search value
*/
export default {
 /* props:{
    myProperty:{
      type: String
    }
  }, */
  components:{
    'post':post,
  },
  data(){
    return{
      searchValue: '',
      posts: [],
      error: ''
    }
  },
  created(){
    setInterval(() => {
        this.searchValue = this.$localStorage.get('search');
    }, 1000)
    
  },
  mounted()
  {
    var result = AllServices.searchPosts();
    if( typeof result === 'string')
    {
        this.exist = false,
        this.error = result
    }
    else{
      this.posts= result
    }
  }
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

#PostContainer{
  margin-top: -7%;

}
#DisplayPosts{
  width:60%;
  display:inline-block;
}

</style>
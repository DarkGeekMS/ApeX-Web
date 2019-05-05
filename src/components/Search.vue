<template>
  <div id="mainDiv">
    <div class="header">
       <h1>  {{ searchValue }} </h1>
       <p> Search results </p>
       <br/>
    </div>
    <div class="body">
      <ul>
       <li><router-link to="/Search" exact > Posts </router-link></li>
       <li><router-link to="/Search/users" id="h" exact> Communities and users </router-link></li>
      </ul>
    </div>
    <div v-if="this.$route.name == 'Search'" v-show="!exist" id="subDiv"> {{error}} ''{{this.$localStorage.get('search')}}'' </div>

    <div v-if="this.$route.name == 'Search'" v-show="exist" id="DisplayPosts">
      <!-- <Sort class="sort" :style="{width:wid, marginTop:'2%'}" ></Sort>  -->
      <div id="PostContainer" v-for="onePost in posts" :key="onePost.name">
         <post :postData="onePost" v-on:showUp="showPost"></post>
      </div>
      <DemoOnePost id="PostModal" :onePostData="postInfo" ></DemoOnePost>
    </div>
    <SearchSideBar v-show="login"></SearchSideBar>
    <router-view></router-view>

  </div>

</template>

<script>
import post from "./Post.vue"
import DemoOnePost from './DisplayOnePost.vue'
import Sort from './Sort.vue'
import SearchSideBar from './SearchSideBar.vue'
import {AllServices} from '../MimicServices/AllServices.js'
import $ from'jquery/dist/jquery.min.js'

/**
 * @vue-data {string} [error=""] if there is no matching
 * @vue-data {string} [searchVal=""] search value
 * @vue-data {object} [posts] posts that reflect with search value
 * @vue-data {boolean} [login=false] if user logged in
 * @vue-data {boolean} [exist=true] if there is matching between searchValue and data
 * @vue-data {string} [postInfo] the content of the post to be displayed on the modal
 * @vue-data {string} [wid="80%"] width of sort component
*/
export default {
  components:{
    'post':post,
    'DemoOnePost':DemoOnePost,
    'SearchSideBar': SearchSideBar,
    'Sort':Sort
  },
  data(){
    return{
      searchValue: '',
      login:false,
      posts: [],
      error: '',
      exist:true,
      postInfo:'',
      wid:'80%'
    }
  },
  created(){
    setInterval(() => {
        this.searchValue = this.$localStorage.get('search');
        this.login = this.$localStorage.get('login');
        var mq = window.matchMedia( "(max-width: 933px)" );
        if (mq.matches) {
         this.wid = '158%'
        }
        else{
          this.wid = '80%'
        }
    }, 1000)
  },
  mounted(){
     $('#selectted').text('Search Results');
        var remclass = $('#classed').prop('class');
        $('#classed').removeClass(remclass);
        $('#classed').addClass("glyphicon glyphicon-search");
  },
  beforeUpdate()
  {
    if(this.$localStorage.get('login'))
    {
      if(AllServices.getState())
      {
        var result = AllServices.searchUser();
        if( typeof result === 'string')
        {
            this.exist = false,
            this.error = result
        }
        else{
          this.posts= result[0],
          this.exist = true
        }
      }
      else{
        AllServices.searchUser().then((data) =>{
          if( data.posts.length == 0)
          {
            this.exist = false,
            this.error = 'Sorry, there were no post results for'
          }
          else{
            this.posts= data.posts,
            this.exist = true
          }
        })
      }
    }
    else{
      if(AllServices.getState())
      {
        var resultT = AllServices.searchGuest();
        if( typeof resultT === 'string')
        {
            this.exist = false,
            this.error = resultT
        }
        else{
          this.posts= resultT[0],
          this.exist = true
        }
      }
      else{
        AllServices.searchGuest().then((data) =>{
          if( data.posts.length == 0)
          {
            this.exist = false,
            this.error = 'Sorry, there were no post results for'
          }
          else{
            this.posts= data.posts,
            this.exist = true
          }
        })
      }
    }
  },
  methods:{
  /**
  * assign the post to be shown in the modal
  */
  showPost:function(post)
  {
    this.postInfo=post;
  },
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
  margin-top: 43px;
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
  padding: 13px 0;
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
  margin-top: 2%;

}
#DisplayPosts{
  width:60%;
  display:inline-block;
}

#subDiv{
  display: inline-block;
  padding: 2%;
  margin: 2% 1.5%;
  width: 70%;
  height:100%;
  background-color: white;
  height:100%;
  border-radius:15px;
  text-align:center;
  font-size: 17px;
  font-weight: 600

}
.sort{
  padding-top:10px;
  margin-left:23%;
}
@media(max-width:1250px){
  #subDiv{
    width:62%;
  }
}
@media(max-width:933px){
  #subDiv, {
    width:95%;
  }
  div .sort{
    margin-left: 5%
  }
}
@media(max-width:303px){
  div ul #h{
    display: none
  }
}
/**/
</style>

<template>
  <div id="DisplayPosts">
    <!-- <DemoOnePost></DemoOnePost> -->
    <div id="PostContainer" v-for="post in posts">

     <post></post>

    </div>
  </div>
</template>

<script>
import post from "./Post.vue"
import DemoOnePost from './DisplayOnePost.vue'
export default {
data(){
return{
posts:[1,2,3,4,5,6]
     }
},
methods:{

},
components:{
'post':post
}

}
</script>

<style scoped>


</style>

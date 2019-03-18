<template>
  <div>
    <DemoOnePost></DemoOnePost>
    <div v-for="post in posts">
      <div  @click="$modal.show('Demo-OnePost')" >
     <post></post>
     </div>
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

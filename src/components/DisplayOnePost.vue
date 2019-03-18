<template>
<div>



<modal  name="Demo-OnePost" transition="pop-out" :width="1300" :height="700" >
  <div class="PostContent">


  <post></post>
  <post></post>
  <post></post>
  <post></post>
  <post></post>
  <post></post>
</div>
</modal>
</div>

</template>

<script>
import post from "./Post.vue"
export default {
name: 'DemoOnePost',
data(){
return{
Title:'marc',

     }
},
methods:{
  test:function()
  {
    alert('gada3 yala');

  },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH
  },
},
components:{
'Post':post
}

}
</script>

<style lang="scss" scoped >
.PostContent{
overflow: auto;
height: 700px;
}
</style>

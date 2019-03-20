<template>
  <div id="hotposts" class="hotposts">
<DemoOnePost id="PostModal"></DemoOnePost>
<div id="HotPost1" @click="$modal.show('Demo-OnePost')" >
  <h3 id="TitlePost1">{{Title1}}</h3>
  <p id="Details1">{{point1}} points.{{comment1}} comments.{{time1}} </p>
</div>
<div id="HotPost2" @click="$modal.show('Demo-OnePost')" >
  <h3 id="TitlePost2">{{Title2}}</h3>
  <p id="Details2">{{point2}} points.{{comment2}} comments.{{time2}} </p>
</div>
<div id="HotPost3" @click="$modal.show('Demo-OnePost')" >
  <h3 id="TitlePost3">{{Title3}}</h3>
  <p id="Details3">{{point3}} points.{{comment3}} comments.{{time3}} </p>
</div>

</div>
</template>

<script>
import DemoOnePost from './DisplayOnePost.vue'
export default {
data(){
return{
Title1:'Title1',
Title2:'Title2',
Title3:'Title3',
point1:'555',
point2:'55',
point3:'55',
comment1:'855',
comment2:'85',
comment3:'8',
time1:'4d',
time2:'3d',
time3:'1d'
     }
},
methods:{

},
components:{
  DemoOnePost

}

}
</script>

<style scoped>
.hotposts{
  width:180px;
  height: auto;
  margin:100px 50px;
  float: right;
  background-color:white;
  /* position: fixed; */
  bottom: 1;
  right: 0;
}

</style>

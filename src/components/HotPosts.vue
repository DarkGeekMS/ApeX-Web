<template>
  <div class="hotposts">
<DemoOnePost></DemoOnePost>
<div  @click="$modal.show('Demo-OnePost')" >
  <h3>{{Title1}}</h3>
  <p>{{point1}} points.{{comment1}} comments.{{time1}} </p>
</div>
<div  @click="$modal.show('Demo-OnePost')" >
  <h3>{{Title2}}</h3>
  <p>{{point2}} points.{{comment2}} comments.{{time2}} </p>
</div>
<div  @click="$modal.show('Demo-OnePost')" >
  <h3>{{Title3}}</h3>
  <p>{{point3}} points.{{comment3}} comments.{{time3}} </p>
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

<template>
  <div id="mainDiv">
    <div id="subDiv" v-for='user in users' > 
       <a> {{user.userName}} </a>
       <span> {{user.numOfSubscribes}} </span>
       <p style="display:inline-block">{{about}} </p>
       <button class="btn btn-info log " style="display:inline-block" type="button"> SUBSCIBE</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      users:[
      {
         userName:'AyatBB',
         numOfSubscribes: 0,
         about: '',
      }
      ]
    }
  },

}
</script>

<style scoped>
#mainDiv{
    margin:2% 3%;
    width: 70%;
    background-color: white;
    height:100%;
}
.log{
  float:right;
  margin:0.5% 0.5%;
}

</style>
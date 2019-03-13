<template>
  <ul id = 'list'>
  <li v-for="number in array">{{number}}</li>  
  </ul>  
    
</template>

<script>
export default {
  data(){
    return{
      array:['11','22','33']
    }
    },
    props:{
      vevo:{
        type:String,
        default:'primary'
      }
  }
}
</script>

<style scoped>
#list {
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

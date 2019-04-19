<template>
  <div id="app" >
    <navbar></navbar>
    <button  @click="topFunction()" id="myBtn" class="btn blue">Back to top </button> 
    <router-view></router-view>
    <!-- <us></us> -->
 </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
//import us from "./components/UserSettings.vue"


export default {
  name: 'app',
  components:{
    'navbar':NavBar,
//us
  },
  mounted(){
    this.$nextTick(function() { this.scrollFunction() });
  },
  methods:{
    topFunction: function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    scrollFunction: function()
    {
      $(document).bind('scroll', function() {
        var backToTopButton = $('#myBtn');
        if ($(document).scrollTop() > 500) {
          backToTopButton.css('display','block');
        } else {
          backToTopButton.css('display','none');
        }
      }.bind(this));
    }
  }
  
}
</script>

<style scoped>
#app {
  margin-top: 0px;
  min-width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #DAE0E6; 
  min-height:1000px;
}

button.btn {
  outline: none;
  border: 0;
  z-index:1;
  background: white;
  padding: 10px 18px;
  cursor: pointer;
  border-radius: 3px;
  color: white;
  box-shadow: 0 4px 8px rgba(#20a0ff, .3);
  background: #4db3ff;
  font-weight: 600;
  border-radius: 3px;
  min-width: 90px;
  margin-left: 80%;
  margin-top: 40%;
  position: fixed;
  display: none
  
}


</style>

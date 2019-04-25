<template>
  <div id="app" >
    <navbar></navbar>
    <button  @click="topFunction()" id="myBtn" class="btn blue">BACK TO TOP </button>
    <router-view></router-view>
    <!-- <us></us> -->
 </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import $ from'jquery/dist/jquery.min.js'

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
  /* background-color: #DAE0E6;  */
  min-height:1000px;
}

button.btn {
  outline: none;
  border: 0;
  z-index:1;
  background: white;
  padding: 3px 16px;
  cursor: pointer;
  border-radius: 3px;
  color: white;
  box-shadow: 0 4px 8px rgba(#20a0ff, .3);
  background: rgb(0, 121, 211);
  font-weight: 600;
  border-radius: 3px;
  min-width: 128px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-transform: uppercase;
  margin-left: 80%;
  margin-top: 40%;
  position: fixed;
  display: none
  &:hover {
    background: #20a0ff;
  }
}


</style>

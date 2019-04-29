<template>
  <div id="HomePage" >
    <Sort :apex="''"></Sort>
    <SideBar> </SideBar>
  </div>
</template>

<script>
import Sort from "./Sort.vue"
import DisplayPosts from "./DisplayPosts.vue"
import HomeSideBar from "./HomeSideBar.vue"
import $ from'jquery/dist/jquery.min.js'

export default {
  props:['sortingparam'],
  name: 'HomePage',
  components:{
    'DisplayPosts':DisplayPosts,
    'SideBar':HomeSideBar,
    'Sort':Sort,

  },
  data(){
    return{
    }
  },

  mounted()
    {
      if(this.$localStorage.get('login')){
        $('#selectted').text($('.drop1 a').first().text());
        var className = $($('.drop1 a').first()).prop('class');
        var remclass = $('#classed').prop('class');
        $('#classed').removeClass(remclass);
        $('#classed').addClass(className);
      }
      else{
        $('#selectted').text($('.drop1 a:eq( 1 )').text());
        var classNam = $($('.drop1 a:eq( 1 )')).prop('class');
        var remoclass = $('#classed').prop('class');
        $('#classed').removeClass(remoclass);
        $('#classed').addClass(classNam);
      }
    }
}

</script>

<style scoped>
.ds{
  width: 60%
}
</style>

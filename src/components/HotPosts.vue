<template>
  <div class="hotposts">
<DemoOnePost></DemoOnePost>
<div  @click="$modal.show('Demo-OnePost')" >
  <h3>{{Title}}</h3>
  <p>555 points.588 comments.3d </p>
</div>

</div>
</template>

<script>
import DemoOnePost from './DisplayOnePost.vue'
export default {
data(){
return{
Title:'Press Here',

     }
},
methods:{
  conditionalShow () {
    this.$modal.show('conditional-modal', {
      show: this.canBeShown
    })
  },
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
  position: fixed;
  bottom: 1;
    right: 0;
}
.navBar {
  height: auto; /* Full-height: remove this if you want "auto" height */
  width: 180px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  /* z-index: 2; /* Stay on top  */

  float: right;
  margin: 100px 50px;
  background-color: white; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

</style>

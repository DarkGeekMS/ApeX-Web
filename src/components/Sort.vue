<template>
  <div id="main">
     <p class="text" >SORT</p>

     <div  class="btn-group list">
      <button data-toggle="dropdown" class="btn btn-default dropdown-toggle" id="loggedbutton" >
      <span id="selected" class="glyphicon glyphicon-fire"> Hot</span>
      <span class="caret" style="margin-left:5px" ></span>
      </button>
      <ul class="dropdown-menu sort">
        <li> <a class="glyphicon glyphicon-fire"> Hot</a></li>
        <li class="divider"></li>

        <li><a class="glyphicon glyphicon-certificate"> New </a></li>
        <li class="divider"></li>

        <li><a class="glyphicon glyphicon-flash"> Controversial </a></li>
        <li class="divider"></li>

        <li><a class="glyphicon glyphicon-stats"> Top </a></li>
        <li class="divider"></li>
        
        <li><a class="glyphicon glyphicon-arrow-up"> Rising </a></li>

      </ul>
    </div>
  </div>
</template>

<script>
import $ from'jquery/dist/jquery.min.js'
  export default {
    data () {
      return {
      }
    },
    mounted(){
      $('.sort a').click(function(){
        $('#selected').text($(this).text());
        var className = $(this).prop('class');
        var remclass = $('#selected').prop('class');
        $('#selected').removeClass(remclass);
        $('#selected').addClass(className);
        $('.sort a').css('color','rgb(135, 138, 140)');
        $(this).css('color','blue');
        $('.list button').css('background-color','#33a8ff2b');

      });
      $(document).click(function(e) 
      {
        var container = $(".list");
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
          $('.list button').css('background-color','white');
        }
      });
      $('.list button').hover(function() {
      $('.list button').css('background-color','#33a8ff2b');        }, function() {
      $('.list button').css('background-color','white');
      });
    }
}
</script>

<style scoped>
#main{
  background-color: white;
  max-height:3%;
  width:100%;
  margin-top: 58px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}
.text{
  color:#999;
  margin-left: 27.5%;
  font-weight: 550;
  font-size: 13px;
  display: inline-block;
}

.list{
  display: inline-block;
  width:20%;
  color:rgb(135, 138, 140);
  margin-top:-0.4%;
}
#loggedbutton{
  height:30px;
  font-size:15px;
  border-radius: 5%;
  margin-left: 5%;
  font-weight: 570;
  border:1px solid white;
  color:rgb(0, 121, 211);
}
ul{
  width:10px;
  margin:2px 4px;
} 

li a{
  color:rgb(135, 138, 140);
  padding:0 8px;
  cursor: pointer;
  width:100%;
}

li a:hover{
  color:black;
  background-color:#33a8ff2b; 
}
@media(max-width:71.5px){
  div .list {
    display: none
  }
  
}
</style>


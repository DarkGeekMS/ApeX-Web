<template>

<div>

 <demo-login-modal/>
 <demo-sign-modal/>
 <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="border:1px solid #eee" id="mainNav">
   
    <a style="margin:-7px -3px"class="navbar-brand" href="#">
     <img width="45"src="../../public/redditwhite.jpg" >
    </a>
      <div class="container">
       
        <a class="navbar-brand js-scroll-trigger" style="font-weight:bold; font-size:22px"href="#page-top" id="top-name">reddit
           <span class="circle"></span>
        </a>
        
        <div class="form-group col-sm-3" style="display:inline-block; margin:5px 5px">
          <select class="form-control" name="category">
              <option>Popular</option>
              <option>All</option>
              <option>Original Content</option>
          </select>
        </div>        
        <div class="form-group has-feedback has-search" style="display:inline-block">
          <span class="glyphicon glyphicon-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder="Search Reddit">
        </div>

        
        <div style="margin-right:70px; display:inline-block"></div>
        <button type="button" class="btn btn-info " @click="$modal.show('demo-login')"> LOG IN </button>
        <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" @click="$modal.show('demo-sign')">SIGN UP</button>  

       </div> 
      
 </nav>

</div>

</template>

<script>

  import DemoLoginModal  from './login.vue'
  import DemoSignModal  from './signup.vue'
  export default {
    components:{
      DemoLoginModal,
      DemoSignModal
    },
    
    data () {
      return {
        canBeShown: false
      }
    },
    created () {
      setInterval(() => {
        this.canBeShown = !this.canBeShown
      }, 5000)
    },
    methods: {
      conditionalShow () {
        this.$modal.show('conditional-modal', {
          show: this.canBeShown
        })
      },
    }
}
</script>

<style scoped>
#mainNav{
  background-color: white;
  width:100%;
  max-height: 40px;
}

#top-name{
  color:black;
  margin:-5px -152px;
}

input{
  width:600px;
  margin: 5px;
  display:inline-block;
} 
.circle{
    background-color: #FF4500;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    display: inline-block;
    margin:10px -18px;
}

.has-search .form-control-feedback {
    right: initial;
    left: 0;
    color: #ccc;
    margin: 5px;
}

.has-search .form-control {
    padding-right: 12px;
    padding-left: 34px;
}
 </style>

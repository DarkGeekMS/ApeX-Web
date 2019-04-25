<template>
<modal name="demo-sign3" transition="pop-out" width="50%" height="70%">
  <div class="box">

    <button class="btn-primary" style="margin:0 64.5%" @click="action()"  > X </button>
    <img id="SignUpSucces" width="60%" height="100%"
     src="../../public/Logo.png" > 

  </div>
</modal>
</template>

<script>

export default {
  name: 'DemoSign3Modal',
  data(){
    return{
    }
  },
  methods:{
    /**
      * close all Modals
    */
    action: function(){
      this.$modal.hide('demo-sign3');
      this.$modal.hide('demo-sign2');
      this.$modal.hide('demo-sign');
      this.$modal.hide('demo-login');
      this.$modal.hide('ForgetUser');
      this.$modal.hide('ForgetPass');
    }
  }
}
</script>

<style lang="scss" scoped >
$background_color: #404142;
.box {
  width: 150%;
  height: 100%;
  border-radius: 40px;
  box-sizing: border-box;
  box-shadow: 0 0 40px black;
  .box-part {
    text-align:right;
    display: inline-block;
    position: relative;
    vertical-align: top;
    height: 100%;
    width: 50%;
  }
}

</style>

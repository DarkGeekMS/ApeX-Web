<template>
<modal name="demo-sign3" transition="pop-out" :width="modalWidth" :height="450">
  <div class="box">
    <button class="glyphicon-glyphicon-remove-sign" style="margin:0 631px" @click="action()" > X </button>
    <div class="box-part">
      <h1 > Welcome to </h1>
      
      <h2 style="display:inline-block"> ApEX </h2>
      
    </div>
  </div>
</modal>
</template>

<script>
const MODAL_WIDTH = 656;
import DemoSignModal  from './signup.vue'
export default {
  name: 'Demosign3Modal',
  components:{
      DemoSignModal
  },
  data(){
        return{
          modalWidth: MODAL_WIDTH
        }
  },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH
  },
  methods:{
    action: function(){
      this.$modal.hide('demo-sign3'),
      this.$modal.hide('demo-sign2'),
      this.$modal.hide('demo-sign')
    }
  } 
}
</script>

<style lang="scss" scoped >
$background_color: #404142;
.box {
  background: url('../../public/App_Logo.png') no-repeat top right;
  overflow: hidden;
  width: 1000px;
  height: 450px;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 0 40px black;
  color: #000;
  font-family:Neo Fobia Regular;

  .box-part {
    text-align:right;
    margin:17px;
    display: inline-block;
    position: relative;
    vertical-align: top;
    box-sizing: border-box;
    height: 100%;
    width: 60%;
  }
}
</style>
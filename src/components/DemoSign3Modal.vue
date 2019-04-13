<template>
<modal name="demo-sign3" transition="pop-out" :width="modalWidth" :height="450">
  <div class="box">

    <button class="btn-primary" style="margin:0px 631px" @click="action()"  > X </button>
    <img id="SignUpSucces" width="650" height="450"
     src="../../public/Logo.png" >

  </div>
</modal>
</template>

<script>
const MODAL_WIDTH = 656;
import DemoSignModal  from './DemoSignModal.vue'
/**
 * @vue-data {integer} [modalWidth=656] width of modal
 */
export default {
  name: 'DemoSign3Modal',
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
    /**
      * close all Modals
    */
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
  overflow: hidden;
  width: 1000px;
  height: 450px;
  border-radius: 40px;
  box-sizing: border-box;
  box-shadow: 0 0 40px black;
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

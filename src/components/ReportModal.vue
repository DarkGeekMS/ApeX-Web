<template>
<modal name="reportBox" transition="pop-out" :width="modalWidth" :height="400">
  <div class = "loop" v-for = "reason in reasons" >
     <input class = "radio" type="radio" name="gender" value="male">
     <label>{{reason}}</label> 
  </div>
</modal>
</template>

<script>
import axios from 'axios'
const MODAL_WIDTH = 656;
export default {
  name: 'reportBox',
  data(){
        return{
          modalWidth: MODAL_WIDTH,
          reasons:[
              "It's spam or abuse",
              "It infringes my copyright",
              "It infringes my trademark rights",
              "It's personal and confidential information",
              "It's sexual or suggestive content involving minors",
              "It's involuntary pornography",
              "It's a transaction for prohibited goods or services",
              "It's threatening self-harm or suicide"
          ]
          
        }
  },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH
  },
  methods:{
   
  }
}
</script>

<style lang="scss" scoped >
.title{
    font-size: 25px;
    margin-left: 5%;
    margin-top: 5%;
    width: 100%;
    box-sizing: border-box;


}
.radio{
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #C8CCD4;
  background: none;
  border-radius: 0;
  color: #223254;
  transition: all .15s ease;
  &:hover{
    background: rgba(#223254,.03);
  }
  &:not(:placeholder-shown),
    + span{
      color: #5A667F;
      transform: translateY(-26px) scale(.95);
  }
  &:focus
  {
    background: none;
    outline: none;
  }
    + span{
      color: #0077FF;
      transform: translateY(-26px) scale(.75);
    }
      + .border{
          transform: scaleX(1);
        }
  }
label{
    display:inline;
}
.loop{
    display: inline;
}














</style>

<template>
<div>
<modal name="reportBox" transition="pop-out" width="50%" height="505px" :clickToClose="false">

  <div class = "checked" v-show = "checked && checkedLevel == 0"  v-bind:style="{marginTop: 2 +'px'}"></div>
  <div class = "checked" v-show = "checked && checkedLevel == 1"  v-bind:style="{marginTop: 54 +'px'}"></div>
  <div class = "checked" v-show = "checked && checkedLevel == 2"  v-bind:style="{marginTop: 107 +'px'}"></div>
  <div class = "checked" v-show = "checked && checkedLevel == 3"  v-bind:style="{marginTop: 160 +'px'}"></div>
  <div class = "checked" v-show = "checked && checkedLevel == 4"  v-bind:style="{marginTop: 214 +'px'}"></div>
  <div class = "checked" v-show = "checked && checkedLevel == 5"  v-bind:style="{marginTop: 267 +'px'}"></div>
  <div class = "checked" v-show = "checked && checkedLevel == 6"  v-bind:style="{marginTop: 320 +'px'}"></div>
  <div class = "checked" v-show = "checked && checkedLevel == 7"  v-bind:style="{marginTop: 373 +'px'}"></div>

  <div class = "loop">
     <input v-on:click = "first" id = "1" class = "radio" type="button" name="gender" value="It's spam or abuse">
      <input v-on:click = "second" class = "radio" type="button" name="gender" value="It infringes my copyright">
       <input v-on:click = "third" class = "radio" type="button" name="gender" value="It infringes my trademark rights">
        <input v-on:click = "fourth" class = "radio" type="button" name="gender" value="It's personal and confidential information">
         <input v-on:click = "fifth" class = "radio" type="button" name="gender" value="It's sexual or suggestive content involving minors">
          <input v-on:click = "sixth" class = "radio" type="button" name="gender" value="It's involuntary pornography">
           <input v-on:click = "seventh" class = "radio" type="button" name="gender" value="It's a transaction for prohibited goods or services">
            <input v-on:click = "eighth" class = "radio" type="button" name="gender" value="It's threatening self-harm or suicide">

    <button v-on:click = "close" id = "cancel">Cancel</button>
    <button v-on:click = "sendReport" id = "report" v-show = "enable">Send Report</button>
    <button v-on:click = "sendReport" id = "report2" v-show = "!enable" disabled>Send Report</button>




  </div>
</modal>
</div>
</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'
/**
* @vue-data {string} [ID] ID of the comment or post to be reported
* @vue-data {integer} [idx]   idx of the comment in the array to be deleted from the array in comment parent if the comment is reported successfully

*/
export default {
  name: 'reportBox',
  data(){
        return{
          reason:"none",
          enable:false,
          checked:false,
          checkedLevel:0
        }
  },
  props:{
    ID:String,
    idx:Number
  },
  created () {

  },
  methods:{
    first:function(){
      if(this.reason == "It's spam or abuse"){
        this.reason = "none";
        this.enable = false;
        this.checked = false;
      }
      else{
        this.enable = true;
        this.reason = "It's spam or abuse";
        this.checked = true;
        this.checkedLevel = 0;
      }
    },
    second:function(){
      if(this.reason == "It infringes my copyright")
      {
        this.reason = "none";
        this.enable = false;
        this.checked = false;

      }
       else{
        this.enable = true;
        this.reason = "It infringes my copyright";
        this.checked = true;
        this.checkedLevel = 1;
       }
    },
    third:function(){
      if(this.reason == "It infringes my trademark rights"){
        this.reason = "none";
        this.enable = false;
        this.checked = false;

      }
      else{
        this.enable = true;
        this.reason = "It infringes my trademark rights";
        this.checked = true;
        this.checkedLevel = 2;
      }
    },
    fourth:function(){
      if(this.reason == "It's personal and confidential information"){
        this.reason = "none";
        this.enable = false;
        this.checked = false;

      }
      else{
        this.enable = true;
        this.reason = "It's personal and confidential information";
        this.checked = true;
        this.checkedLevel = 3;
      }
    },
    fifth:function(){
      if(this.reason == "It's sexual or suggestive content involving minors"){
        this.reason = "none";
        this.enable = false;
        this.checked = false;


      }
      else{
        this.enable = true;
        this.reason = "It's sexual or suggestive content involving minors";
        this.checked = true;
        this.checkedLevel = 4;
      }
    },
    sixth:function(){
      if(this.reason == "It's involuntary pornography"){
        this.reason = "none";
        this.enable = false;
        this.checked = false;

      }
      else{
        this.enable = true;
        this.reason = "It's involuntary pornography";
        this.checked = true;
        this.checkedLevel = 5;
      }
    },
    seventh:function(){
      if(this.reason == "It's a transaction for prohibited goods or services"){
        this.reason = "none";
        this.enable = false;
        this.checked = false;

      }
      else{
        this.enable = true;
        this.reason = "It's a transaction for prohibited goods or services";
        this.checked = true;
        this.checkedLevel = 6;
      }
    },
    eighth:function(){
      if(this.reason == "It's threatening self-harm or suicide"){
        this.reason = "none";
        this.enable = false;
        this.checked = false;

      }
      else{
        this.enable = true;
        this.reason = "It's threatening self-harm or suicide";
        this.checked = true;
        this.checkedLevel = 7;
      }
    },
    sendReport:function(){
       AllServices.reportComment(this.ID,this.reason).then((data) => {
       if(data){
         this.checked = false;
      this.checkedLevel=0;
         this.$emit('Delete',this.idx);
         this.$modal.hide('reportBox');

       }
    });
    }
    ,
    close:function(){
      this.checked = false;
      this.checkedLevel=0;
      this.$modal.hide('reportBox');
    }

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
  padding: 12px 0;
  height: 48px;
  font-family: inherit;
  font-size: 16px;
  border-bottom: 2px solid #C8CCD4;
  background: none;
  border-radius: 0;
  color: #223254;
  transition: all .15s ease;
  text-align: left;
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
  margin-top:25px;
}

#report{
  height:15%;
  font-style: bold;
  font-size:20px;
  background-color:rgb(19, 218, 108);
  border: none;
border-radius: 8px;
padding-left: 1%;
padding-right : 1%;
float:right;
margin-right:2%;  color:rgb(255, 255, 255);
}
#report2{
border-radius: 8px;
padding-left: 1%;
padding-right : 1%;
float:right;
margin-right:2%;  height:15%;
  font-style: bold;
  font-size:20px;
  background-color:rgb(146, 245, 190);
  border: none;
  color:rgb(255, 255, 255);

}
#cancel{
border-radius: 8px;
padding-left: 1%;
padding-right : 1%;
float:right;
margin-right:2%;
height:15%;
  font-style: bold;
  font-size:16px;
  background-color:white;
  border-color: rgb(5, 150, 70);
  border-width: 1px;
  color:rgb(5, 150, 70);
  padding-top:0.5%;

}

.checked{
  background-color: rgb(187, 241, 187);
  width: 100%;
  border: 0;
  padding: 12px 0;
  height: 48px;
  // display:inline-flex;
  position:absolute;
  margin-top:1.3%;
}











</style>

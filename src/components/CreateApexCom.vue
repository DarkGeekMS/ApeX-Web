<template>
<div class="CreateApexCom">
<!-- here -->

<h2 class="page-header">Create Apex Community</h2>


<form class="">

<!-- community name -->
<div class="form-group">
  <h6 class="page-header" ><b>Write community name</b></h6>
  <input type="text"  id="name"  placeholder="ApexCom Name" v-model="name" required></input>
</div>



<!-- description -->
<div class="form-group">
  <h6 class="page-header"><b>Write community Description</b></h6>
  <textarea class="form-control" id="Description" placeholder="ApexCom Description" name="description" rows="2" v-model="description" required></textarea>
</div>

<!-- rules -->
<div class="form-group">
  <h6 class="page-header"><b>Enter Community Rules</b></h6>
  <textarea class="form-control" id="rules" placeholder="ApexCom Rules" name="rule" rows="3" v-model="rule" required></textarea>
</div>

<!-- image update -->
<div class="upload photos">
  <div class="samerow">
    <div class="box" @dragover.prevent @drop="onDrop">
      <label class="borderbox view">
        <div class=" margins">
          <svg class=" photo" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <g>
              <polygon fill="inherit" opacity="0" points="0.610673352 20 20.625 20 20.625 0 0.610673352 0"></polygon>
              <path d="M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765" fill="inherit">
              </path>
            </g>
          </svg>
        </div>
        <div class=" words">Drag and Drop or Upload Avatar Image</div>
        <div class="display">
          <input name="profileIcon" type="file" accept="image/x-png,image/jpeg"  @change="onChange">
        </div>
      </label>
    </div>
    <div class="box2">
      <label class="borderbox view">
        <div class=" margins">
          <svg class=" photo" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <g><polygon fill="inherit" opacity="0" points="0.610673352 20 20.625 20 20.625 0 0.610673352 0"></polygon>
              <path d="M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765" fill="inherit">
              </path>
            </g>
          </svg>
        </div>
        <div class="words">Drag and Drop or Upload Banner Image</div>
        <div class="display">
          <input name="profileBanner" type="file" accept="image/x-png,image/jpeg">
        </div>
      </label>
    </div>
  </div>
</div>

<!-- create bottum -->
<button  type="submit" style="margin-left:450px"  id="Button" v-on:click="CreateApex()">Create</button>

</form>
</div>

</template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'

export default {
  data(){
    return{
    name:"",
    description:"",
    rule:"",
    error:{}
  }
},
methods:{
  CreateApex:function() {
    AllServices.CreateApexCom(this.name,this.description,this.rule,"","").then((data) => {
     this.error= data;
     this.ErrorCheck();
   });
  },
  ErrorCheck:function(){
    if(this.error == true){
      alert("here correct")
    }
    else{
      alert("Noooooo")
    }
  }
}
}
</script>

<style scoped>
.CreateApexCom{
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 40%;
  background:white;
}




#Button{

box-sizing: border-box;
text-align: center;
font-size: 12px;
font-weight: 700;
letter-spacing: 0.5px;
line-height: 24px;
text-transform: uppercase;
background-color: transparent;
color: rgb(0, 121, 211);
fill: rgb(0, 121, 211);
border-width: 1px;
border-style: solid;
border-image: initial;
border-radius: 4px;
text-decoration: none;
padding: 3px 16px;
border-color: rgb(0, 121, 211);
}



.view {
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    background-color: rgb(246, 247, 248);
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(237, 239, 241);
    border-image: initial;
}
.words {
    color: rgb(164, 167, 168);
    font-size: 11px;
}
.photo {
    fill: rgb(135, 138, 140);
    height: 40px;
    width: 42px;
}
.box2.box2.box2 {
    width: 412px;
    height: 100%;
    margin: 0px;
}
.box2 .borderbox {
    box-sizing: border-box;
    padding: 4px;
}
.samerow {
    display: flex;
    height: 120px;
}
.box.box.box {
    width: 120px;
    height: 100%;
    margin: 0px 12px 0px 0px;
}
.box .borderbox {
    box-sizing: border-box;
    padding: 4px;
}
.display {
    display: none;
}
.margins {
    margin-top: -8px;
    margin-bottom: 4px;
}







button{
/* background-color: white; */
/* color: blue; */
float: right;
display: inline-block;
}
.noti{
display: inline;

}
.switch {
  margin-top: 20px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  float:right;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.btnImage {

  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  padding: 10px 25px;
  position: relative;
   border-color: rgb(0, 121, 211);
   color: rgb(0, 121, 211);
}
.imgBox{

     height: 300px;
     width: 70%;
}
.helper {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  width: 0;
}

.partition {
  width: 100%;
  height: 100%;
  .partition-title {
    box-sizing: border-box;
    padding: 30px;
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 300;
  }
  .partition-form {
    padding: 0 20px;
    box-sizing: border-box;
  }
}
input[type=password],
input[type=text] {
  display: block;
  box-sizing: border-box;
  margin-bottom: 1%;
  width: 25%;
  font-size: 12px;
  line-height: 2;
  border: 0;
  border-bottom: 1px solid #DDDEDF;
  padding: 4px 8px;
  font-family: inherit;
  transition: 0.5s all;
  outline: none;
}

</style>

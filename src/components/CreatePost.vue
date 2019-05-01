<template>
   <div id="create">
     <div class="a">

       <h4 class="Cpost">Create a post

     </h4>

    </div>

      <div class="form-group dropApex" >
        <select id="selectList" class="form-control" name="category" @change="handleChange">
          <option>choose a community</option>
           
         <option v-for="apex in apexs" :key="apex.id"> 
          
               {{apex.name}}
            
             </option>        
         
          </select>
       </div>
       
      <body class="panel bodyPost">
          <form>

            <div class="form-group">

  
                  <div id="root" class="container" >
                   
                    <tabs>
                      <div class="form-group">
                      
                             <input type="text" class="form-control" id="usr" placeholder="title" @keyup="Enable">
                           </div>
                       <tab  name="Post" :selected="true">
                         
            <div id="fancy">
              
                          
     
                          <a  id="switchId"  @click="switchM" >{{this.switchTo}} </a>
                          <div v-if="this.normal==false">
                              <ejs-richtexteditor ref="rteObj" :toolbarSettings="toolbarSettings" id="textsend" @keyup="Enable" >
                              
                    
                              </ejs-richtexteditor> 
                              </div>
                              <textarea class="form-control" rows="5" id="textsendnormal" @keyup="Enable" v-else>
                    
                              </textarea>
                  </div>
            
  
                          <button  class="btn btn-primary postButton" @click="submitPost"  disabled  id="button">POST</button>
                       </tab>

                       <tab name="Image" >
                      
                          <div class="panel imgBox">

                             <div class="helper">

                             </div>
                              <div class="drop1 display-inline align-center" @dragover.prevent @drop="onDrop">

                                <div class="helper">

                                 </div>

                                <label v-if="!image" class="btn display-inline btnImage">

                                       Drag and Drop or Upload
                                 <input type="file" name="image" @change="onChange">
                                 </label>
                                    <div class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }">
                                        <img :src="image" alt="" class="img" id="imgId"/>
                                         <br>
                                         <br>
                                        <button class="btnImage" @click="removeFile">REMOVE</button>
                                      </div>

                               </div>
                            </div>
                                                            <button  class="btn btn-primary postButton" @click="submitPost"  disabled  id="button2" >POST</button>

                          </tab>

                          <tab name="Link" >
                             
                                <textarea class="form-control" rows="3" id="textsend3" placeholder="Url" @keyup="Enable"></textarea>
                               <button  class="btn btn-primary postButton" @click="submitPost"  disabled  id="button3">POST</button>
                           </tab>
                     </tabs>





    </div>

  <input type="checkbox" class="form-check-input check" id="exampleCheck1">
    <label class="form-check-label checkB" for="exampleCheck1">Send me post reply notifications
    </label></div>

       </form>

 
    </body>
  </div>

</template>

<script>
import $ from'jquery/dist/jquery.min.js'
import tab from './PostTab.vue'
import tabs from './PostTabs.vue'
import Vue from "vue"
import {AllServices} from '../MimicServices/AllServices.js'
import { RichTextEditorPlugin, Toolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
// import HomeSideBar from "./HomeSideBar.vue"
// import { error } from 'util';
Vue.use(RichTextEditorPlugin);

/**
 * @vue-data {string} [apexComId=''] Id of apexcom which post will be created in
 * @vue-data {boolean} [enable=true]    check if post button is enable or not
 * @vue-data {string} [bodyPost='']    the content of the post
 * @vue-data {string} [imgName='']  the img src which the user upload from browser
 * @vue-data {array} [apexNames=[]]  include the apexnames which you want to choose from
 * @vue-data {string} [videoUrl=''] the url of the video from the youtube
 * @vue-data {boolean} [isLocked=false]
 * @vue-data {JWT} [token=''] userID
 * @vue-data  {boolean} [imagable=false] check if the user upload image or not


 */

export default {
  props:{
    EditData:{}
  },
   
    data(){
      return {

       items: [
       {
         image: false,
       }

        ],
        switchTo:'Switch to Fancy Pants Editor',
        normal:true,
        isCreated:false,
        indx:null,
        enable:true,
        imgName:'',
        file:'',
        token:'',
        apexComId:'',
        fillTitle:false,
        bodyPost:'',
        avatar:'',
        title:'',
        apexs:[],
        selected:false,
        selected2:false,
        image: '',
        videoUrl:'',
        isLocked:0,
        imagable:false,
        toolbarSettings: {
            type: 'Expand',
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
          ]
         },


      }

    },
    provide:{
        richtexteditor:[Toolbar, HtmlEditor]
    },
    mounted(){
     $('#selectted').text('Create Post');
        var remclass = $('#classed').prop('class');
        $('#classed').removeClass(remclass);
        $('#classed').addClass("glyphicon glyphicon-edit");
    },
    methods:{
      switchM(){
      this.normal=!(this.normal);
      if( this.normal){
      this.switchTo='Switch to markdown';
      }
      else{
        this.switchTo='Switch to Fancy Pants Editor';
      }
  
      },
handleChange(){

var sel = document.getElementById('selectList');

// var opt = sel.options[sel.selectedIndex];
this.indx=sel.selectedIndex;
this.Enable();
this.apexComId=this.apexs[this.indx-1].id;
 

},
     /**
     * it check if the user insert the title of the post and insert the content or not and it will enable
     * the post button to be submitted if and only if the user insert all required content
     */

         Enable(){
       if(document.getElementById("usr").value===""){
         this.fillTitle=true;
       }
       else{
          this.fillTitle=false;
       }
       if(this.indx==null){
          this.selected=true;
       }
       else{
          this.selected=false;
       }
       if(this.indx==0){
            this.selected2=true;
       }
       else{
         this.selected2=false;
       }
      
        if(this.selected2||document.getElementById("textsendnormal").value==="" || this.fillTitle ||this.selected){
            document.getElementById('button').disabled = true;
            
        }  else {
            document.getElementById('button').disabled = false;
         
        }



        if(this.selected2||document.getElementById("textsend3").value==="" || this.fillTitle ||this.selected){
            document.getElementById('button3').disabled = true;
           
        }   else {
            document.getElementById('button3').disabled = false;
            this.videoUrl=document.getElementById("textsend3").value;
           
        }


        if(this.imagable===false|| document.getElementById("usr").value==="" || this.indx ==null ||this.indx==0)  {
            document.getElementById('button2').disabled = true;
        } else {
            document.getElementById('button2').disabled = false;
           
        }
           this.title=document.getElementById("usr").value;

    },
     /**
     * it take the src of the img which the user drop it from the browser
     */
   onDrop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        this.createFile(files[0]);
      },
       /**
     * when the user upload the img it enable the post button and store the img src
     */
      onChange(e) {
     
      
        var files = e.target.files;
        this.createFile(files[0]);
        this.imagable=true;
        this.Enable();

      },
       /**
     * it create file to be stored in img src
     */
      createFile(file) {
        if (!file.type.match('image.*')) {
          alert('Select an image');
          return;
        }
      
        var reader = new FileReader();
        var vm = this;

        reader.onload = function(e) {
          vm.image = e.target.result;
          
          this.imgName=vm.image; 
      
        }
        reader.readAsDataURL(file);

      },
       /**
     * it remove the img if the user upload an img from browser and want to remove it so it make the src empty.
     */
      removeFile() {
        this.image = '';
        this.imagable=false;
        this.Enable();
      },
     /**
     * this function send request of submit post which send all content of the post videour,imgurl, title ,token
     * all required data .
     */

    submitPost(){
       if(this.normal){
         this.bodyPost=document.getElementById('textsendnormal').value;
       }
      else{
         this.bodyPost=document.getElementById('textsendrte-view').value;
      }

 
      if(this.imagable){
      this.imgName=document.getElementById('imgId').src;
     
     
      }
      if(this.videoUrl==''){
        this.videoUrl=null;
      }
       if(this.image==''){
        this.imgName=null;
      }
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
    if(this.imgName!=null){
         var formData = new FormData();
         formData.append("file", this.imgName);
    }
      
     
      
    
     AllServices.submit(this.apexComId,this.title,this.bodyPost,this.imgName,this.videoUrl,this.isLocked,this.$localStorage.get('token'));
    


        alert(this.postData.id);

       
    
       this.$emit('PostEmit',dateTime,this.title,this.bodyPost,this.imgName,this.videoUrl,this.$localStorage.get('userName'),this.apexs[this.indx-1].name);
      
      this.$router.push('/Submit');

    }

    },




    components:{
     'tab':tab,
     'tabs':tabs
     },
 /**
     * it return all apexnames to be displayed in listbox .
     */
created(){

  AllServices.getApexNames().then((data) =>
      {
        if(data)
        {
        
        
          this.apexs = data.apexComs;
        
        }
      });


  
}


}
</script>

<style scoped>
#switchId{

margin-left:55%;
}
.form-group{

  width:100%;
}
.Cpost{

    width: 30%;
    margin-left: 5.5%;

}

.a{
    padding-top: 6%;
    border-bottom: 1px solid rgb(237, 239, 241);
    color:black;
 
}

.form-control{

    width: 70%
}

.btn2 {

  margin-left:45%;
  margin-top: 20%;
  border-color: rgb(0, 121, 211);
  color: rgb(0, 121, 211);

}

.btn3 {

  margin-left:50%;

}

.panel{

  width:50%;
  height:150%;

}

#app {

  text-align: center;

}
 #switchId:hover{
             cursor:pointer
               }
.postDisable{

  background-color:rgb(0, 121, 211);
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.65;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: sans-serif;
  font-style: normal;
  margin-left:64%;

}
.postEnable{

  background-color:rgb(0, 121, 211);
  margin-left:64%;

}

.bodyPost{

   width:64%;
   margin-bottom: 100%;
   margin-left: 5.5%;
   margin-top:0.5%;
   

}
.post2{

  background-color:rgb(0255, 255, 255);
  color:rgb(0, 121, 211);

}

.row{

  margin-left:65%;
  margin-top:1%;
  margin-right: 0%;

}

.disabled{

  pointer-events: none;

}
.comu{

margin-top: 5.5%;
width: 20%;
margin-left: 5.5%;

}

.custom-select {

  position: relative;
  font-family: Arial;

}

.custom-select select {

  display: none;

}

.checkB{

  font-family:'Arial, sans-serif';

}

.imgBox{

     height: 300px;
     width: 70%;


}
.remv{

  margin-left: 75%;
  margin-top: 0%;

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



input[type="file"] {

  position: absolute;
  opacity: 0;
  z-index: -1;

}

.align-center {

  text-align: center;

}

.helper {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  width: 0;
}

.hidden {
  display: none !important;
}

.hidden.image {
  display: inline-block !important;
}

.display-inline {
  display: inline-block;
  vertical-align: middle;
}

.img {
  border: 1px solid #f6f6f6;
  display: inline-block;
  height: auto;
  max-height: 80%;
  max-width: 80%;
  width: auto;
}

.drop1 {
  background-color: #f2f2f2;
  border: 4px dashed #ccc;
  background-color: #f6f6f6;
  border-radius: 2px;
  height: 100%;
  max-height: 400px;
  max-width: 600px;
  width: 100%;
  margin-left: 20%;
  align:center;
  
}
.check{

margin-left: 2%

}

.postButton{

  margin-left: 64.5%;
}

.dropApex{
display:inline-block;
 margin:0.5% 5% ;
 width: 30%;
}
#textsend{
  width: 50%;
}

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";


.markdown{
margin-top: 5%;
height: 30%;
}
#fancy{
  width: 100%;
}


.e-richtexteditor.e-rte-tb-expand {
    border: 1px solid rgba(0, 0, 0, 0.12);
     width: 70% !important;
  
    
   
}
@media (max-width:959px){
 .bodyPost{
      width:100%;
      margin-left:0%;
      
  }
 .form-control{
      width:100%;
      
      
  }
 .btnImage{
  /* width:30%; */
  font-size: 50%;
  
}


} 

@media (max-width:1300px){
   .form-control{
      width:60%;
      
      
  }
 .imgBox{
   width: 50%;
 }
  
}

@media (max-width:2000px){

  .drop1 {
  
  padding-top: 0%;
  margin-inline-start: 0%;

}
@media (max-width:200px){
  
 .btnImage{
       margin: -32%;
       font-size: 30%;
}
  
}
@media (max-width:100px){
  
 .btnImage{
       margin: -63%;
      font-size: 10%;
}
  
}


@media (max-width:115px){
  
 .btnImage{
      padding:0%;
      font-size: 10%;
  
}
  
}
}

</style>

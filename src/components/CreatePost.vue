<template>
   <div>
     <div class="a">
     
       <h4 class="Cpost">Create a post
    
     </h4>
      
    </div>
   
      <div class="form-group dropApex" >
        <select class="form-control" name="category">
          <option>choose a community</option>
                      <!-- TODO HERE ARE APEXNAMES WHICH I WILL LOOP THROUGH THEM  -->
                  
                       <!-- just dummy option for display  -->
                      
                      <option>apexname 1</option>
                      <option>apexname 2</option>
                      <option>apexname 3</option>
                      <option>apexname 3</option>
                   
          </select>
       </div>
      <body class="panel bodyPost">
          <form>

            <div class="form-group">
   

  
                  <div id="root" class="container">
                    <tabs>
                       <tab  name="Post" :selected="true">
            
                          <div class="form-group">
                  
                             <input type="text" class="form-control" id="usr" placeholder="title" @keyup="Enable">
                           </div>
                               <!-- <textarea class="form-control" rows="5" id="textsend" @keyup="Enable"></textarea> -->
                  
                              <ejs-richtexteditor ref="rteObj" :toolbarSettings="toolbarSettings" id="textsend" @keyup="Enable">
                               <br>
                               <br>
                               <br>
                               <br>
                               <br>
                                 
                              </ejs-richtexteditor> 
                    
  
                          <button  class="btn btn-primary postButton" @click="submitPost"  disabled  id="button">POST</button>
                       </tab>

                       <tab name="Image" >
                          <div class="form-group ">
                                        
                           <input type="text" class="form-control" id="usr2" placeholder="title" @keyup="Enable">
                          </div>
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
                               <div class="form-group">
                                                                      
                                  <input type="text" class="form-control" id="usr3" placeholder="title" @keyup="Enable">
                                </div>
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
import tab from './PostTab.vue'
import tabs from './PostTabs.vue'
import axios from 'axios';
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
Vue.use(RichTextEditorPlugin);



export default {
    data(){
      return {
       imagePreview: '',
       showPreview : false,
       items: [
       {
         image: false,
       }
     
        ],
        enable:true,
        token:'',
        apexComId:'',
        bodyPost:'',
        imgName:'',
        apexNames:[],
        image: '',
        videoUrl:'',
        isLocked:false,
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
    methods:{
         Enable(){
         
	 if(document.getElementById("textsend").value==="" || document.getElementById("usr").value==="")  { 
            document.getElementById('button').disabled = true; 
        } else { 
            document.getElementById('button').disabled = false;
             console.log(document.getElementById('text').value);
        }
    
    

         	 if(document.getElementById("textsend3").value==="" || document.getElementById("usr3").value==="")  { 
            document.getElementById('button3').disabled = true; 
        } else { 
            document.getElementById('button3').disabled = false;
        }


        if(this.imagable===false|| document.getElementById("usr2").value==="")  { 
            document.getElementById('button2').disabled = true; 
        } else { 
            document.getElementById('button2').disabled = false;
        }
    
    
    },
   onDrop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        this.createFile(files[0]);
      },
      onChange(e) {
         
        var files = e.target.files;
        this.createFile(files[0]);
         this.imagable=true;
         this.Enable();
      
      },
      createFile(file) {
        if (!file.type.match('image.*')) {
          alert('Select an image');
          return;
        }
        var img = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = function(e) {
          vm.image = e.target.result;
         this.imgName=vm.image; // NOT SURE YET IF THIS WHAT THE API DOC WANT 
          //console.log(this.imgName);
        }
        reader.readAsDataURL(file);
       
      },
      removeFile() {
        this.image = '';
        this.imagable=false;
        this.Enable();
      },
    

    submitPost(){
       this.videoUrl=document.getElementById('textsend3').value;
       this.apexComId='';//TODO 
       this.bodyPost=document.getElementById('textsend').value;
       this.imgName=document.getElementById('imgId').src;
      //  console.log(this.bodyPost);
      //  console.log('hello');
       axios.post( "http://127.0.0.1:8000/api/submit_post"  ,{

        ApexCom_id:this.apexComId,
        _token:this.$localStorage.get('token'),
        body:this.bodyPost,
        img_name:this.imgName,
        video_url:this.videoUrl,
        isLocked:this.isLocked

 


       }).then(function(response){

         if(response){
           //TODO it will  display your Post which you have created soon 
          
         }
       })

    }
    

    },

    components:{
     'tab':tab,
     'tabs':tabs
     },

created(){
 axios.get("http://localhost/Apex_names"

// TODO here we get list of apexnames and display it at combox 
 ).then(function(response){
    apexNames:repponse 

 })
 

}


}
</script>

<style scoped>


.Cpost{

    width: 30%;
    margin-block-end: -3%;
    margin-top: 6.5%;
    margin-left: 5.5%;

}

.a{

    margin-bottom: 5%;

}

.form-control{

    width: 100%
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

   width:90%;
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

  margin-left: 94%;
}

.dropApex{
display:inline-block;
 margin:0.5% 5% ;
 width: 30%;
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
</style>



<template>
<div class = "container4">
   <div class = "sub2">
       <div class="first-line2">
        <div class="block-container2" v-if="this.type">from</div>
        <div class="block-container2" v-if="!this.type">to</div>
        <router-link 
          :to="{name:'UserProfile' ,
           params: {userName:sender}}">
            {{sender}}
          </router-link>
          sent {{time}}
       </div>
       <br>
       <div class="second-line2">
            {{content}}
       </div>
       <br>
</div>
</div>
    </template>

<script>
import {AllServices} from '../MimicServices/AllServices.js'

export default {
  name: 'MessageReply',
  props:{
    content:String,
    date:Date,
    sender:String,
    ID:String,
    type:Number   // sent : 0   // inbox : 1
  },
  components:{
  },
  data(){
        return{
           time:'',
            block:false
        }
  },
  created () {
    setInterval(() => this.DateFormat(this.date), 1000);
    
  },
  methods:{
     DateFormat:function(date){
  // Make a fuzzy time
var delta = Math.round((+new Date - date) / 1000);

var minute = 60,
    hour = minute * 60,
    day = hour * 24,
    week = day * 7;

var fuzzy;

if (delta < 60) {
    fuzzy = 'just now';
}  else if (delta < 2 * minute) {
    fuzzy = 'a minute ago.'
} else if (delta < hour) {
    fuzzy = Math.floor(delta / minute) + ' minutes ago.';
} else if (Math.floor(delta / hour) == 1) {
    fuzzy = '1 hour ago.'
} else if (delta < day) {
    fuzzy = Math.floor(delta / hour) + ' hours ago.';
} else if (delta < day * 2) {
    fuzzy = 'yesterday';
}
this.time=fuzzy;
}
}
}
</script>

<style scoped>
.sub2{
    margin-left:3%;
}
.first-line2{
    font-size:70%;
    position: static;
    top: 0;
    left: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: center;
    color:gray;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

}

.container4{
    margin-top:5%;
    width:70%;
    
}
.block-container2{
    display:inline;
}
.second-line2{
    font-size:95%;
}
</style>

import Vue from 'vue'
import axios from 'axios'
export  const MimicDisplayPosts =new Vue({
  methods:{
    getPostsData: function(mimic){
      if(mimic==true){
  var posts=[
            {
              id:'555',
              postedby:' Nada',
              apex_id:'555',
              title:'dj',
              content:'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
              locked:false,
              commenetnum:5,
              votes:9
            },{
              id:'444',
              postedby:' marc',
              apex_id:'444',
              title:'dj',
              content:'ggggggggggggggggggggg'
            },{
              id:'333',
              postedby:' Ayat',
              apex_id:'333',
              title:'dj',
              content:'zzzzzzzzzzzzz'
            },{
              id:'222',
              postedby:' Double',
              apex_id:'222',
              title:'dj',
              content:'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
            }
          ]

return posts
                }
else {
  axios.get('http://localhost/sort_posts',
  {
    ApexCommID: "YNL2AYkKaW4mwaE8",
    SortingParam: "date"
  })
  .then(function (response) {
    // console.log(response);
   })
  .catch(function (error) {
   // console.log(error);
   });
 }
    }
  }


})

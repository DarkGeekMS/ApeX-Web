import Vue from 'vue'
import axios from 'axios'
export  const MimicDisplayPosts =new Vue({
  methods:{
    getPostsData: function(mimic,ApexComName){
      if(mimic==true){
        if(ApexComName==""){
  var posts=[
            {
              id:'555',
              postedby:'Nada',
              apex_id:'555',
              title:'dj',
              content:'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
              locked:false,
              commenetnum:5,
              votes:9
            },{
              id:'444',
              postedby:'marc',
              apex_id:'444',
              title:'dj',
              content:'ggggggggggggggggggggg'
            },{
              id:'333',
              postedby:'Ayat',
              apex_id:'333',
              title:'dj',
              content:'zzzzzzzzzzzzz'
            },{
              id:'222',
              postedby:'Double',
              apex_id:'222',
              title:'dj',
              content:'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
            },{
              id:'111',
              postedby:'Nourhan',
              apex_id:'222',
              title:'anime',
              content:'jfj ngjdg k ka kg gkdglkajg akjfkg aj gkafjgka '
            },
          ]

return posts
                }
              
              else{
                 posts=[
                  {
                    id:'555',
                    postedby:'Nada',
                    apex_id:'555',
                    title:'dj',
                    content:'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    locked:false,
                    commenetnum:5,
                    votes:9
                  },{
                    id:'444',
                    postedby:'marc',
                    apex_id:'444',
                    title:'dj',
                    content:'ggggggggggggggggggggg'
                  }
                ]
                return posts;
              }
      }
else {
  axios.get('http://localhost/sort_posts',
 {
    apexCommID:ApexComName ,
    sortingParam: "date",
    token:this.$localStorage.get('token')
  })
  .then(function (response) {
    return response.data.posts
    // console.log(response);
   })
  .catch(function (error) {
   // console.log(error);
   });
 }
    }
  }


})

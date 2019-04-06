import Vue from 'vue'
export  const MimicDisplayPosts =new Vue({

  methods:{
    getPostsData: function(){
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
  }
}
)

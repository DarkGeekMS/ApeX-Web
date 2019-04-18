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
              posted_by:'Nada',
              apex_id:'555',
              title:'dj',
              content:'Experience enjoyable JavaScript development with WebStorm. With smart code completion, safe refactoring, and first-class support for Node.js, Angular and React. Download free trial 😀😂🍔😍',
              locked:false,
              commenets_count:5,
              votes:9,
              img:'',
              videolink:'https://www.youtube.com/embed/Va0Rq147SRU',
              created_at:"2019-03-23 17:20:45",
              updates_at:null,
              apex_com_name:"health care",
              post_writer_user:"double"

            }
            ,{
              id:'444',
              posted_by:'marc',
              apex_id:'444',
              title:'dj',
              content:"Software engineering is concerned with theories, methods and tools for professional software development.software costs often dominate computer system costs. the costs of software on a PC are often greater than the hardware cost 🤔.",
              created_at:"2019-03-23 17:20:45",
              updates_at:null,
              apex_com_name:"take care",
              post_writer_user:"marc",
              videolink:"" ,
              img:'http://bashkatibnews.com/contents/article/515_lybfjrmf.jpg'
            },{
              id:'333',
              posted_by:'Ayat',
              apex_id:'333',
              title:'dj',
              content:'I love javascript ,vue ,html ,css 🐸🐸🐸',
              videolink:'',
              img:'https://i.ytimg.com/vi/inYarqDCCGA/maxresdefault.jpg',
              created_at:"2019-03-23 17:20:45",
              updates_at:null,
              apex_com_name:"health aware",
              post_writer_user:"Nada"
            },{
              id:'222',
              posted_by:'Double',
              apex_id:'weather forecast',
              title:'dj',
              content:`Partly cloudy in the evening, becoming cloudy overnight. Low around 55 F. Winds S at 5 to 10 mph

              Sun may give way to rain for this evening, with a 10 percent chance of precipitation and a low of 50 degrees. Winds are expected to remain calm at 9 mph

              Clear with cloudy periods; a slight chance of showers or thundershowers

              Mostly clear with showers likely. Slight chance of a thunderstorm. 3 to 6 mm of rain 🔥🔥`,
              videolimk:'https://www.youtube.com/embed/W_5rTUqwRVs',
              img:'',
              created_at:"2019-03-23 17:20:45",
              updates_at:null,
              apex_com_name:"leader care",
              post_writer_user:"SHAWKY"
            },{
              id:'111',
              posted_by:'Nourhan',
              apex_id:'222',
              title:'anime',
              content:'Software costs more to maintain than it does to develop. For systems with a long life, maintenance costs may be several times development costs🍔 😂 ',
              video_url:'',
              img_name:''
            },
          ];
          var promise1 = new Promise(function(resolve, reject) {
            setTimeout(function() {
              resolve(posts);
            }, 300);
          });
return promise1;
                }

              else{
                 posts=[
                  {
                    id:'555',
                    posted_by:'Nada',
                    apex_id:'555',
                    title:'dj',
              content:'Experience enjoyable JavaScript development with WebStorm. With smart code completion, safe refactoring, and first-class support for Node.js, Angular and React. Download free trial 😀😂🍔😍',

                    locked:false,
                    commenetnum:5,
                    votes:9
                  },{
                    id:'444',
                    posted_by:'marc',
                    apex_id:'444',
                    title:'dj',
                    content:'I love javascript ,vue ,html ,css 🐸🐸🐸'
                  }
                ];
                var promise1 = new Promise(function(resolve, reject) {
                  setTimeout(function() {
                    resolve(posts);
                  }, 300);
                });
      return promise1;
              }
      }
else {
  if (this.$localStorage.get('token') == null)
  {
    return axios.get('http://35.232.3.8/api/sort_posts',
   {
      apexComID:ApexComName ,
      sortingParam: "date"
    }).then(response => {
        return response.data.posts;
      })
  }
  else {
    {
      return axios.post('http://35.232.3.8/api/sort_posts',
     {
        apexCommID:ApexComName ,
        sortingParam: "date",
        token:this.$localStorage.get('token')
      }).then(response => {
          return response.data.posts;
        })
    }
  }
 }
    }
  }
})

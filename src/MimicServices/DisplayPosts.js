import Vue from 'vue'
import axios from 'axios'

export  const MimicDisplayPosts =new Vue({
  methods:{
    getPostsData: function(mimic,ApexComName,sortparam, baseUrl){
      if(mimic==true){
        if(ApexComName==""){
  var posts=[
            {
              id:'555',
              posted_by:'Nada',
              apex_id:'spacetoon',
              title:'Kannnnaassss😍',
              content:'Experience enjoyable JavaScript development with Kannnaasss. With smart code completion, safe refactoring, and first-class support for Node.js, Angular and React. Download Kannnaasss 😀😂🍔😍',
              locked:false,
              commenets_count:5,
              votes:1000,
              img:null,
              videolink:'https://www.youtube.com/embed/Va0Rq147SRU',
              created_at:"2019-03-23 17:20:45",
              updates_at:null,
              apex_com_name:"health care",
              post_writer_user:"double"

            },

            {
              id:'111',
              posted_by:'Nourhan',
              votes:150,
              apex_id:'cinema',
              created_at:"2019-04-26 17:20:45",
              title:'Avengers Endgame😲',
              content:'Software costs more to maintain than it does to develop. For systems with a long life, maintenance costs may be several times development costs😮 ',
              videolink:null,
              img:'https://cnet3.cbsistatic.com/img/xLgPeuq6CW9A2N2V2kKmhMT6h2o=/1092x0/2019/03/14/dd4d8d9c-5f16-4f6b-a7d8-65a00d095c2c/avengers-endgame-poster-square-crop.jpg'
            },
            {
              id:'333',
              posted_by:'Ayat',
              apex_id:'nature',
              title:'sea',
              content:'I love javascript ,vue ,html ,css 🐸🐸🐸',
              videolink:null,
              img:'https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg',
              created_at:"2019-04-23 17:20:45",
              updates_at:null,
              apex_com_name:"health aware",
              post_writer_user:"Nada",
              votes:-1
            }
            ,{
              id:'444',
              posted_by:'marc',
              votes:0,
              apex_id:'444',
              title:'korty po3po3',
              content:"Software engineering is concerned with theories, methods and tools for professional software development.software costs often dominate computer system costs. the costs of software on a PC are often greater than the hardware cost 🤔.",
              created_at:"2019-03-23 17:20:45",
              updates_at:null,
              apex_com_name:"take care",
              post_writer_user:"marc",
              videolink:null ,
              img:'http://bashkatibnews.com/contents/article/515_lybfjrmf.jpg'
            }
            ,{
              id:'222',
              posted_by:'Double',
              votes:0,
              apex_id:'weather forecast',
              title:'paparro fille',
              content:`Partly cloudy in the evening, becoming cloudy overnight. Low around 55 F. Winds S at 5 to 10 mph

              Sun may give way to rain for this evening, with a 10 percent chance of precipitation and a low of 50 degrees. Winds are expected to remain calm at 9 mph

              Clear with cloudy periods; a slight chance of showers or thundershowers

              Mostly clear with showers likely. Slight chance of a thunderstorm. 3 to 6 mm of rain 🔥🔥`,
              videolink:'https://www.youtube.com/embed/W_5rTUqwRVs',
              img:'',
              created_at:"2019-03-23 17:20:45",
              updates_at:null,
              apex_com_name:"leader care",
              post_writer_user:"SHAWKY",
              video_url:null
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
                    votes:9,
                    videolink:null,
                    img:null
                  },{
                    id:'444',
                    posted_by:'marc',
                    apex_id:'444',
                    title:'dj',
                    content:'I love javascript ,vue ,html ,css 🐸🐸🐸',
                    videolink:null,
                    img:null
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
    return axios.get(baseUrl + 'api/SortPosts',
   {
      apexComID:ApexComName ,
      sortingParam: sortparam
    }).then(response => {
        return response.data.posts;
      })
  }
  else {
    {
      return axios.post(baseUrl + 'api/SortPosts',
     {
        apexCommID:ApexComName ,
        sortingParam:sortparam,
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

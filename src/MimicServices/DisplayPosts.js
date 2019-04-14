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
              content:'Experience enjoyable JavaScript development with WebStorm. With smart code completion, safe refactoring, and first-class support for Node.js, Angular and React. Download free trial 😀😂🍔😍',
              locked:false,
              commenetnum:5,
              votes:9
            }
            ,{
              id:'444',
              postedby:'marc',
              apex_id:'444',
              title:'dj',
              content:`Software engineering is concerned with theories, methods and tools for professional software development.
              Software costs often dominate computer system costs. The costs of software on a PC are often greater than the hardware cost 🤔.
`
            },{
              id:'333',
              postedby:'Ayat',
              apex_id:'333',
              title:'dj',
              content:'I love javascript ,vue ,html ,css 🐸🐸🐸'
            },{
              id:'222',
              postedby:'Double',
              apex_id:'weather forecast',
              title:'dj',
              content:`Partly cloudy in the evening, becoming cloudy overnight. Low around 55 F. Winds S at 5 to 10 mph

              Sun may give way to rain for this evening, with a 10 percent chance of precipitation and a low of 50 degrees. Winds are expected to remain calm at 9 mph

              Clear with cloudy periods; a slight chance of showers or thundershowers

              Mostly clear with showers likely. Slight chance of a thunderstorm. 3 to 6 mm of rain 🔥🔥`
            },{
              id:'111',
              postedby:'Nourhan',
              apex_id:'222',
              title:'anime',
              content:'Software costs more to maintain than it does to develop. For systems with a long life, maintenance costs may be several times development costs🍔 😂 '
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
                    postedby:'Nada',
                    apex_id:'555',
                    title:'dj',
              content:'Experience enjoyable JavaScript development with WebStorm. With smart code completion, safe refactoring, and first-class support for Node.js, Angular and React. Download free trial 😀😂🍔😍',

                    locked:false,
                    commenetnum:5,
                    votes:9
                  },{
                    id:'444',
                    postedby:'marc',
                    apex_id:'444',
                    title:'dj',
                    content:'I love javascript ,vue ,html ,css 🐸🐸🐸'
                  }
                ];
                return posts;
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

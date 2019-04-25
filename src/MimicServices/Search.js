import Vue from 'vue'
import axios from 'axios'

export  const MimicSearch =new Vue({
  data(){
    return {
      searchValue: 'Ayat'
    }
  },
  methods:{

    searchApex: function(mimic)
    {
      if(mimic ==  true)
      {
        if(this.$localStorage.get('search') == this.searchValue )
        {
           var result = [
             [{
               id:1,
               name:'AyatMostafa',
               numOfMeb: 0,
               avatar:'AMFz23O.jpg',
               description: "Aww, cripes. I didn't know I'd have to write a description. How many words is that so far, like a hundred? Soooo, yeah. Mildly interesting stuff.",
             },
             {
               id:1,
               name:'AyatMostafa',
               numOfMeb: 0,
               avatar:'../../public/AMFz23O.jpg',
               description: "Aww, cripes. I didn't know I'd have to write a description. How many words is that so far, like a hundred? Soooo, yeah. Mildly interesting stuff.",
             },{
               id:1,
               name:'AyatMostafa',
               numOfMeb: 0,
               avatar:'../../public/Logo_X.png',
               description: "Aww, cripes. I didn't know I'd have to write a description. How many words is that so far, like a hundred? Soooo, yeah. Mildly interesting stuff.",
             },
             {
               id:2,
               name:'NadaMostafa',
               numOfMeb: 0,
               avatar:'Logo_X.png',
               description: "Aww, cripes. I didn't knowterests you. Mildly. It's in the name, ffs.hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
             }],
             [{
                id:1,
                name:'Ayat',
                avatar:'AMFz23O.jpg',
                karma:10
              }]
          ]
          return result
        }
        else{
          return 'Sorry, there were no community results for'
        }
      }
      else
      {
        axios.post(this.$localStorage.get('baseUrl') + 'api/search',{
        query: this.$localStorage.get('search'),
        token: this.$localStorage.get('token')
        }).then(response => {
          var result=[];
          result[0] =  response.data.apexComs;
          result[1] =  response.data.users;
          return result
        }).catch(error => {
          return error
        })
      }
    },

    searchPost:function(mimic)
    {
      if(mimic ==  true)
      {
        var posts = [];
         if(this.$localStorage.get('search') == this.searchValue  )
         {
            posts = [
             {
              apex_id:1,
              content:'Experience enjoyable JavaScript development with WebStorm. With smart code completion, safe refactoring, and first-class support for Node.js, Angular and React. Download free trial 😀😂🍔😍',
              id:1,
              postedby:'AyatMostafa',
              title:'posttitle',
              votes:150
            },
            {
              apex_id:1,
              content:'Experience enjoyable JavaScript development with WebStorm. With smart code completion, safe refactoring, and first-class support for Node.js, Angular and React. Download free trial 😀😂🍔😍',
              id:1,
              postedby:'AyatMostafa',
              title:'posttitle',
              votes:150
            }]
            return posts
         }
         else if(this.$localStorage.get('search')=="Nada")
         {
             posts = [
             {
              apex_id:1,
              content:'Experience enjoyable JavaScript development with WebStorm. With smart code completion, safe refactoring, and first-class support for Node.js, Angular and React. Download free trial 😀😂🍔😍',
              id:1,
              postedby:'AyatMostafa',
              title:'posttitle',
              votes:150
            }]
            return posts
         }
         else{
           return 'Sorry, there were no posts results for'
         }
      }
      else
      {
        axios.get(this.$localStorage.get('baseUrl') + 'api/Apex_names', {
          }).then(response => {
             return response.data
          }).catch(function (error) {
             return error
          });
      }
    }

  }
})

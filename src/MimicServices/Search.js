import Vue from 'vue'
import axios from 'axios'

export  const MimicSearch =new Vue({
  data(){
    return {
      searchValue: 'Ayat',
      token:'01'
    }
  },
  methods:{

    SearchU: function(mimic)
    {
      if(mimic ==  true)
      {
        if(this.$localStorage.get('search') == this.searchValue && this.$localStorage.get('token') == this.token)
        {
           var result = [
             [{
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
              }],
             [{
               id:1,
               name:'AyatMostafa',
               numOfMeb: 0,
               avatar:'https://b.thumbs.redditmedia.com/ooMk56fzWZCheEvB0mfTlsKk7P86TEu_BylqPJ-36EQ.png',
               description: "Aww, cripes. I didn't know I'd have to write a description. How many words is that so far, like a hundred? Soooo, yeah. Mildly interesting stuff.",
             },
             {
               id:1,
               name:'AyatMostafa',
               numOfMeb: 0,
               avatar:'https://i.ytimg.com/vi/inYarqDCCGA/maxresdefault.jpg?fbclid=IwAR2SOsEdCa3c9PC8x4UaNgKXEynjKgq-R_LlYn9WMsCrutAjjdCpXOZkCOs',
               description: "Aww, cripes. I didn't know I'd have to write a description. How many words is that so far, like a hundred? Soooo, yeah. Mildly interesting stuff.",
             },{
               id:1,
               name:'AyatMostafa',
               numOfMeb: 0,
               avatar:'http://bashkatibnews.com/contents/article/515_lybfjrmf.jpg',
               description: "Aww, cripes. I didn't know I'd have to write a description. How many words is that so far, like a hundred? Soooo, yeah. Mildly interesting stuff.",
             },
             {
               id:2,
               name:'NadaMostafa',
               numOfMeb: 0,
               avatar:'https://b.thumbs.redditmedia.com/ooMk56fzWZCheEvB0mfTlsKk7P86TEu_BylqPJ-36EQ.png',
               description: "Aww, cripes. I didn't knowterests you. Mildly. It's in the name, ffs.hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
             }],
             [{
                id:1,
                name:'Ayat',
                avatar:'https://b.thumbs.redditmedia.com/ooMk56fzWZCheEvB0mfTlsKk7P86TEu_BylqPJ-36EQ.png',
                karma:10
              }]
          ]
          return result
        }
        else{
          return 'Sorry, there were no results for'
        }
      }
      else
      {
        axios.post(this.$localStorage.get('baseUrl') + 'api/search',{
        query: this.$localStorage.get('search'),
        token: this.$localStorage.get('token')
        }).then(response => {
          return response.data;  
        }).catch(error => {
          return error
        })
      }
    },
    SearchG: function(mimic)
    {
      if(mimic ==  true)
      {
        if(this.$localStorage.get('search') == this.searchValue)
        {
           var result = [
             [{
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
              }],
             [{
               id:1,
               name:'AyatMostafa',
               numOfMeb: 0,
               avatar:'https://b.thumbs.redditmedia.com/ooMk56fzWZCheEvB0mfTlsKk7P86TEu_BylqPJ-36EQ.png',
               description: "Aww, cripes. I didn't know I'd have to write a description. How many words is that so far, like a hundred? Soooo, yeah. Mildly interesting stuff.",
             },
             {
               id:1,
               name:'AyatMostafa',
               numOfMeb: 0,
               avatar:'https://i.ytimg.com/vi/inYarqDCCGA/maxresdefault.jpg?fbclid=IwAR2SOsEdCa3c9PC8x4UaNgKXEynjKgq-R_LlYn9WMsCrutAjjdCpXOZkCOs',
               description: "Aww, cripes. I didn't know I'd have to write a description. How many words is that so far, like a hundred? Soooo, yeah. Mildly interesting stuff.",
             },{
               id:1,
               name:'AyatMostafa',
               numOfMeb: 0,
               avatar:'http://bashkatibnews.com/contents/article/515_lybfjrmf.jpg',
               description: "Aww, cripes. I didn't know I'd have to write a description. How many words is that so far, like a hundred? Soooo, yeah. Mildly interesting stuff.",
             },
             {
               id:2,
               name:'NadaMostafa',
               numOfMeb: 0,
               avatar:'https://b.thumbs.redditmedia.com/ooMk56fzWZCheEvB0mfTlsKk7P86TEu_BylqPJ-36EQ.png',
               description: "Aww, cripes. I didn't knowterests you. Mildly. It's in the name, ffs.hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
             }],
             [{
                id:1,
                name:'Ayat',
                avatar:'https://b.thumbs.redditmedia.com/ooMk56fzWZCheEvB0mfTlsKk7P86TEu_BylqPJ-36EQ.png',
                karma:10
              }]
          ]
          return result
        }
        else{
          return 'Sorry, there were no results for'
        }
      }
      else
      {
        axios.get(this.$localStorage.get('baseUrl') + 'api/search',{
        query: this.$localStorage.get('search'),
        }).then(response => {
          return response.data;  
        }).catch(error => {
          return error
        })
      }
    }

  }
})

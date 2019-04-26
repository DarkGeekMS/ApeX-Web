import Vue from 'vue'
import axios from 'axios'
import App from '../App.vue'

export  const MimicComment =new Vue({

  methods:{
    WriteComment: function(cont,parentID,mimic){
      if(mimic == true){

          if(this.$localStorage.login)
          {
            var promise1 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                  resolve({comment:parentID+"_Child"});
                }, 300);
              });
    return promise1;
          }
          alert("Log In First!!");
          return false;
      }
      else
      {
        return axios.post(this.$localStorage.get('baseUrl') + 'api/comment', {
            content: cont,
            parent: parentID,
            token:this.$localStorage.get('token')
        })
           .then(response=> {
            return response.data;
           })
           .catch(function (error) {
            alert("Log In First!!");
            return false;

            });
         }
    },
    DeleteComment: function(ID,mimic){
        if( mimic == true)
        {
            if(this.$localStorage.login)
                return false;
            return true;
        }
        else
        {
            var self = this;
            axios.delete(this.$localStorage.get('baseUrl') + 'api/delete', {
                data : {
                name: ID,
                token: self.$localStorage.get('token')
                }
                  })
                .then(function (response) {
                    return true;
                 })
                .catch(function (error) {
                    return false;
                 });
        }
    },
    SaveComment: function(ID,mimic){
        if( mimic == true)
        {
            if(this.$localStorage.login)
                return false;
            return true;
        }
        else
        {
            axios.post(this.$localStorage.get('baseUrl') + 'api/save', {
            ID: ID,
            token:this.$localStorage.get('token')
             })
           .then(function (response) {
               return true;
            })
           .catch(function (error) {
               return false;
            });
        }
    },
    EditComment: function(ID,cont,mimic){
        if( mimic == true)
        {
            if(this.$localStorage.login)
            {
            var promise1 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                  resolve(true);
                }, 300);
              });
    return promise1;
            }
            var promise1 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                  resolve(false);
                }, 300);
              });
    return promise1;
        }
        else
        {
            var self = this;
            return axios.patch(this.$localStorage.get('baseUrl') + 'api/edit', {
                name: ID,
                content: cont,
                token: this.$localStorage.get('token')

             })
           .then(function (response) {
               return true;
            })
           .catch(function (error) {
               return false;
            });
        }
    },
    UpVoteComment:function(ID,points,upVoted,downVoted,mimic){
        if( mimic == true)
        {
            var p;
            p = points;

            if(upVoted)
            {
                if(downVoted)
                {
                    p++;
                }
                p++;

            }
            else
                p--;
            if(this.$localStorage.login)
            {
            var promise1 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                  resolve({votes:p});
                }, 300);
              });

    return promise1;
            }

                return false;
        }
        else
        {
       return axios.post(this.$localStorage.get('baseUrl') + 'api/vote', {
       name: ID,
       dir: 1,
       token: this.$localStorage.get('token')
        })
      .then(function (response) {
        return response.data;

       })
      .catch(function (error)
      {
        return {
            done:false,
            points:points
        }
       });
        }
    },
    DownVoteComment:function(ID,points,downVoted,upVoted,mimic){
        if( mimic == true)
        {
            var p = points;
            if(downVoted)
            {
                if(upVoted)
                {
                    p--;
                }
                p--;
            }
            else
                p++;
                if(this.$localStorage.login)
                {
                var promise1 = new Promise(function(resolve, reject) {
                    setTimeout(function() {
                      resolve({votes:p});
                    }, 300);
                  });

        return promise1;
                }

                    return false;
        }
        else
        {
       return axios.post(this.$localStorage.get('baseUrl') + 'api/vote', {
       name: ID,
       dir: -1,
       token: this.$localStorage.get('token')
        })
      .then(function (response) {
        return response.data;

       })
      .catch(function (error)
      {
        return false;
       });
        }
    },
    getComments: function(ID,mimic){
      if(mimic == true){
         
            var comment1 = {
              writerUserName: "ayatmostafa",
               content: "comment1",
               idx: 0,
               level: 0,
               parent: "t3_10",
               id: "t3_10_Child1",
               created_at: new Date,
              votes:43,
              Saved:false,
              userVote:1
               };
            var comment2 = {
              writerUserName: "MohamedAhmed",
              content: "reply2 on comment2",
              idx: 1,
              level: 1, 
              parent: "t3_10_Child1", 
              id: "t3_10_Child1_Child1",
              created_at:  new Date,
              votes:0 ,
              Saved:false,
              userVote:1
               };
            var comment3 = { 
               writerUserName: "Double",
               content: "reply1 on comment1",
               idx: 2,
               level: 1,
               parent: "t3_10_Child1",
               id: "t3_10_Child1_Child2",
               created_at:  new Date,
              votes:-22,
              Saved:true,
              userVote:-1
               };
            var comment4 =  {
              writerUserName: "Nourhan",
              content: "comment2",
              idx: 3,
              level: 0,
              parent: "t3_10",
              id: "t3_10_Child2",
              created_at:  new Date ,
              votes:100,
              Saved:false,
              userVote:0
             };

             var comment5 = {
              writerUserName: "Nada",
              content: "reply 1 on comment 2 with test of mentions u/double",
              idx: 4,
              level: 1,
              parent: "t3_10_Child2",
              id: "t3_10_Child2_Child1",
              created_at:  new Date,
              votes:3 ,
              Saved:true,
              userVote:1
             };

             var comment6 = {
              writerUserName: "Mark",
              content: "comment3",
              idx: 5,
              level: 0,
              parent: "t3_10",
              id: "t3_10_Child3",
              created_at:  new Date ,
              votes:-2,
              Saved:false,
              userVote:0
             };

            var children = [comment1,comment2,comment3,comment4,comment5,comment6];
            var promise1 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                  resolve(children);
                }, 300);
              });
    return promise1;
          
      }
      else
      {
        return axios.post('http://35.232.3.8/api/moreComments', {
            parent:ID,
            token:this.$localStorage.get('token')
        })
           .then(response=> {
            return response.data;
           })
           .catch(function (error) {
            return false;
            });
         }
    }
  }
})

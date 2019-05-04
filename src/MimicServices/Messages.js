import Vue from 'vue'
import axios from 'axios'
import swal from 'sweetalert'

export  const MimicMessage =new Vue({

  methods:{
    sendMessage: function(rec,title,cont,mimic, baseUrl){
      if(mimic == true){

          if(this.$localStorage.login)
          {
            var randomID=Math.random().toString(36).substr(2, 5);
            var promise1 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                  resolve(randomID);
                }, 300);
              });
    return promise1;
          }
          swal("Log In First!!");
          return false;
      }
      else
      {



        return axios.post(baseUrl + 'api/ComposeMessage', {
            receiver:rec,
            subject:title,
            content: cont,
            token:this.$localStorage.get('token')
        })
           .then(response=> {
            return response.data;
           })
           .catch(function (error) {
            swal("You Can't Message this User");
            return false;

            });
         }
    },
    deleteMessage: function(ID,mimic, baseUrl){
      if(mimic == true){


            var promise1 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                  resolve(true);
                }, 300);
              });
    return promise1;

      }
      else
      {
        console.log(baseUrl,'jjjj',ID,'cccc',this.$localStorage.get('token'));
        return axios.delete(baseUrl + 'api/DeleteMessage', {
          data:{
            id:ID,
            token:this.$localStorage.get('token')}
        })
           .then(response=> {
            return response.data;
           })
           .catch(function (error) {
             console.log(error);
            return false;

            });
         }
    },
    blockUser: function(ID,mimic, baseUrl){
      if(mimic == true){
            var promise1 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                  resolve('the user has been blocked successfully');
                }, 300);
              });
    return promise1;
      }
      else
      {

        return axios.post(baseUrl + 'api/BlockUser', {
            blockedID:ID,
            token:this.$localStorage.get('token')
        })
           .then(response=> {
            return response.data;
           })
           .catch(function (error) {
            return false;

            });
         }
    },
    getAllMessages:function(mimic, baseUrl){
      if(mimic == true){

        //sent
        var sent1 = {
          id:"1",
          subject:"sent1",
          content:"content1",
          receiver:{username:"user1"},
          date:new Date()
        };
        var sent2 = {
          id:"2",
          subject:"sent2",
          content:"content2",
          receiver:{username:"user2"},
          date:new Date()
        };
        var sent3 = {
          id:"3",
          subject:"sent3",
          content:"content3",
          receiver:{username:"user3"},
          date:new Date()
        };
        var sent = [sent1,sent2,sent3];
        //inbox
        var in1 = {
          id:"4",
          subject:"in1",
          content:"content1",
          sender:{username:"user1"},
          date:new Date()
        };
        var in2 = {
          id:"5",
          subject:"in2",
          content:"content2",
          sender:{username:"user2"},
          date:new Date()
        };
        var in3 = {
          id:"6",
          subject:"in3",
          content:"content3",
          sender:{username:"user3"},
          date:new Date()
        };
        
        var all = [in1,in2,in3];
        var read = [in1,in2];
        var unread = [in3];
        var received = {
          all:all,
          read:read,
          unread:unread
        };
        var msgs = {
          sent:sent,
          received:received
        };
        var promise1 = new Promise(function(resolve, reject) {
            setTimeout(function() {
              resolve(msgs);
            }, 300);
          });
return promise1;
  }
  else
  {
    return axios.post(baseUrl + 'api/InboxMessages', {
        token:this.$localStorage.get('token')
    })
       .then(response=> {
        return response.data;
       })
       .catch(function (error) {
        return false;

        });
     }
    },
    getReplies: function(ID,mimic, baseUrl){
      if(mimic == true){
          if(this.$localStorage.login)
          {
            var reply1 = {
              id:"1",
              content:"reply1",
              user:"user1",
              date:new Date()
            };
            var reply2 = {
              id:"2",
              content:"reply2",
              user:"user1",
              date:new Date()
            };
            var reply3 = {
              id:"3",
              content:"reply3",
              user:"user1",
              date:new Date()
            };
            var reply4 = {
              id:"4",
              content:"reply4",
              user:"user1",
              date:new Date()
            };
            var children = [reply1,reply2,reply3,reply4];
            var promise1 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                  resolve({replies:children});
                }, 300);
              });
    return promise1;
          }
      }
      else
      {
        return axios.post(baseUrl + 'api/ReadMessage', {
            ID:ID,
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

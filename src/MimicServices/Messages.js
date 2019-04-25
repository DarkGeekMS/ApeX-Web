import Vue from 'vue'
import axios from 'axios'
export  const MimicMessage =new Vue({

  methods:{
    sendMessage: function(rec,title,cont,mimic){
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
          alert("Log In First!!");
          return false;
      }
      else
      {
        return axios.post('http://35.232.3.8/api/compose', {
            reciever:rec,
            subject:title,
            content: cont,
            token:this.$localStorage.get('token')
        })
           .then(response=> {
            return response.data;
           })
           .catch(function (error) {
            alert("You Can't Message this User");
            return false;

            });
         }
    },
    deleteMessage: function(ID,mimic){
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
        return axios.post('http://35.232.3.8/api/del_msg', {
            id:ID,
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
    blockUser: function(ID,mimic){
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
        return axios.post('http://35.232.3.8/api/block_user', {
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
    getAllMessages:function(mimic){
      if(mimic == true){

        //sent
        var sent1 = {
          id:"1",
          title:"sent1",
          content:"content1",
          user:"user1",
          date:new Date()
        };
        var sent2 = {
          id:"2",
          title:"sent2",
          content:"content2",
          user:"user2",
          date:new Date()
        };
        var sent3 = {
          id:"3",
          title:"sent3",
          content:"content3",
          user:"user3",
          date:new Date()
        };
        var sent = [sent1,sent2,sent3];
        //inbox
        var in1 = {
          id:"4",
          title:"in1",
          content:"content1",
          user:"user1",
          date:new Date()
        };
        var in2 = {
          id:"5",
          title:"in2",
          content:"content2",
          user:"user2",
          date:new Date()
        };
        var in3 = {
          id:"6",
          title:"in3",
          content:"content3",
          user:"user3",
          date:new Date()
        };
        var all = [in1,in2,in3];
        var read = [in1,in2];
        var unread = [in3];

        var msgs = {
          sent:sent,
          all:all,
          read:read,
          unread:unread
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
    return axios.post('http://35.232.3.8/api/inbox_messages', {
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
    getReplies: function(ID,mimic){
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
                  resolve(children);
                }, 300);
              });
    return promise1;
          }
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

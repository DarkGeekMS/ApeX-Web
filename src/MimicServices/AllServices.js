import Vue from 'vue'
import {MimicDisplayPosts} from './DisplayPosts.js'
import {MimicCreatePosts} from './CreatePost.js'
import {MimicAuth} from './Authentication.js'
import {MimicApexCom} from './ApexCom.js'
import {MimicUserProfile} from './UserProfile.js'
import { MimicPost } from './Post.js'
import { MimicComment } from './Comments.js'
import { MimicSearch } from './Search.js'
import {MimicCreateApexCom} from './CreateApexCom.js'
import { MimicMessage } from './Messages.js'
import {MimicUserSettings} from './UserSettings.js'
export  const AllServices =new Vue({
  data(){
    return{
      mimic:false
    }
  },
  methods:{

    getState(){
      return this.mimic
    },
    getPosts:function() {
      var posts=MimicDisplayPosts.getPostsData(this.mimic);
        return posts
   },
    submit:function(videoUrl,apexComId,bodyPost,imgName, isLocked,token){

      var data=MimicCreatePosts.submitPost(videoUrl,apexComId,bodyPost,imgName,isLocked,token,this.mimic);
      return data;

    },
    Post:function(){
      MimicPost.Post(this.mimic);

    },
    getApexNames:function()
    {
      return MimicAuth.getApex(this.mimic)
    },
    searchUser:function()
    {
      return MimicSearch.SearchU(this.mimic)
    },
    searchGuest:function()
    {
      return MimicSearch.SearchG(this.mimic)
    },
    signUp: function(email, user,pass)
    {
      return MimicAuth.SignUp(email, user,pass,this.mimic);
    },

    logOut: function()
    {
    	MimicAuth.LogOut(this.mimic);
    },

    logIn: function(user,pass)
    {
    	return MimicAuth.LogIn(user,pass,this.mimic);
    },
    forgetPass: function(user,email)
    {
      return MimicAuth.ForgetPass(user,email,this.mimic);
    },
    setCode: function(code)
    {
      return MimicAuth.forgetPass2(code,this.mimic);
    },
    setPass: function(pass)
    {
      return MimicAuth.forgetPass3(pass,this.mimic);
    },
    forgetUser: function(pass,email)
    {
      return MimicAuth.ForgetUser(pass,email,this.mimic);
    },
    forgetUser2: function(code)
    {
      return MimicAuth.ForgetUser2(code,this.mimic);
    },
    getPosts:function(apexComName) {
      return MimicDisplayPosts.getPostsData(this.mimic,apexComName);
    },
	getAbout:function(apexComName) {
    var about=MimicApexCom.getAbout(this.mimic,apexComName);
    return about;
  },
  getAboutGuest:function(apexComName) {
    var about=MimicApexCom.getAboutGuest(this.mimic,apexComName);
    return about;
	},
	getSubscribers:function(apexComName) {
    var SubscribersList=MimicApexCom.getSubscribers(this.mimic,apexComName);
    return SubscribersList;
	},
	getUserInfo:function() {
    var profileInfo=MimicUserProfile.getUserInfo(this.mimic);
      return profileInfo
	},
	getUserInfoById:function(userName) {
    var userInfo=MimicUserProfile.getUserInfoById(this.mimic,userName);
    return userInfo;
  },
  save:function(token,ID){
    return MimicPost.save(token,ID,this.mimic);
  },
Hide:function(name,ID){
return MimicPost.Hide(name,ID,this.mimic);
},
upvote:function(name,ID,direction){

return MimicPost.upvote(name,ID,direction,this.mimic);
},
downvote:function(name,ID,direction){

return MimicPost.downvote(name,ID,direction,this.mimic);
},
defaultVote:function(name,ID,direction){

  return MimicPost.defaultVote(name,ID,direction,this.mimic);
  },
deletePost:function(name,ID){


  return MimicPost.deletePost(name,ID,this.mimic);
},

EditPost: function(ID,content){
  var data=MimicPost.EditPost(ID,content,this.mimic);
  return data;
},

userType:function(){
  var data=MimicUserProfile.getUserType(this.mimic);
  return data;
},
blockSubscriber:function(userName,apexComName){
  var data=MimicApexCom.blockSubscriber(this.mimic,userName,apexComName);
  return data;
},
deleteUser:function(userName){
  var data=MimicUserProfile.deleteUser(this.mimic,userName);
  return data;
},
deleteApexCom:function(apexComName){
  var data=MimicApexCom.deleteApexCom(this.mimic,apexComName);
  return data;
},
subscribe:function(apexComName){
  var data=MimicApexCom.subscribe(this.mimic,apexComName);
  return data;
},
WriteComment: function(content,parentID){
  var data=MimicComment.WriteComment(content,parentID,this.mimic);
  return data;
},
DeleteComment: function(ID){
  var data=MimicComment.DeleteComment(ID,this.mimic);
  return data;
},
SaveComment: function(ID){
  var data=MimicComment.SaveComment(ID,this.mimic);
  return data;
},
UpVoteComment: function(ID,points,upVoted,downState){
  var data=MimicComment.UpVoteComment(ID,points,upVoted,downState,this.mimic);
  return data;
},
DownVoteComment: function(ID,points,downVoted,upState){
  var data=MimicComment.DownVoteComment(ID,points,downVoted,upState,this.mimic);
  return data;
},
EditComment: function(ID,content){
  var data=MimicComment.EditComment(ID,content,this.mimic);
  return data;
},
getComments: function(ID){
  var data=MimicComment.getComments(ID,this.mimic);
  return data;
},
sendMessage: function(rec,title,cont){
  var data=MimicMessage.sendMessage(rec,title,cont,this.mimic);
  return data;
},
deleteMessage: function(ID){
  var data=MimicMessage.deleteMessage(ID,this.mimic);
  return data;
},
blockSender:function(ID){
  var data=MimicMessage.blockUser(ID,this.mimic);
  return data;
},
getAllMessages:function(){
  var data=MimicMessage.getAllMessages(this.mimic);
  return data;
},
getUserInfoByIdforGuest:function(userName){
  var data=MimicUserProfile.getUserInfoByIdforGuest(this.mimic,userName);
  return data;
},
getReplies: function(ID){
  var data=MimicMessage.getReplies(ID,this.mimic);
  return data;
},
blockUser:function(userName){
  var data=MimicUserProfile.getUserInfoByIdforGuest(this.mimic,userName);
  return data;
},
addOrDeleteModerator:function(userName,apexComName){
  var data=MimicApexCom.addOrDeleteModerator(this.mimic,userName,apexComName);
  return data;
},
reviewReportsAC:function(apexComName){
  var data=MimicApexCom.reviewReports(this.mimic,apexComName);
  return data;
},
reviewReportsUP:function(userName){
  var data=MimicUserProfile.reviewReports(this.mimic,userName);
  return data;
},
ignoreReport:function(id){
  var data=MimicApexCom.ignoreReport(this.mimic,id);
  return data;
},
CreateApexCom:function(Name,Description,Rules,Avatar,Banner) {
return MimicCreateApexCom.CreateApexCom(this.mimic,Name,Description,Rules,Avatar,Banner);
},
deleteAcc:function(Pass) {
  return MimicUserSettings.deleteAcc(mimic,pass)
},
getPrefs:function(){
  return MimicUserSettings.getPrefs(mimic);
},
updatePrefs:function(email,avatar,username) {
  return MimicUserSettings.updatePrefs(mimic,email,avatar,username);
},
changePass:function (password,withCode,username,key){
    return MimicUserSettings.changePass(mimic,password,withCode,username,key);
},
searchU:function(id){
  var data=MimicApexCom.searchU(this.mimic,id);
  return data;
},
  }
});

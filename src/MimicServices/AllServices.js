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
      mimic:false,
      baseUrl:'http://35.232.3.8/'
    }
  },
  methods:{

    getState(){
      return this.mimic
    },
    submit:function(fd){

      var data=MimicCreatePosts.submitPost(fd,this.mimic, this.baseUrl);

      return data;

    },
    Post:function(){
      MimicPost.Post(this.mimic, this.baseUrl);

    },
    getApexNames:function()
    {
      return MimicAuth.getApex(this.mimic, this.baseUrl);
    },
    getApexSubscribed:function(){
      return MimicCreatePosts.getApexSubscribed(this.mimic, this.baseUrl);
    },
    searchUser:function()
    {
      return MimicSearch.SearchU(this.mimic, this.baseUrl);
    },
    searchGuest:function()
    {
      return MimicSearch.SearchG(this.mimic, this.baseUrl);
    },
    signUp: function(email, user,pass)
    {
      return MimicAuth.SignUp(email, user,pass,this.mimic, this.baseUrl);
    },

    logOut: function()
    {
      return MimicAuth.LogOut(this.mimic, this.baseUrl);
    },

    logIn: function(user,pass)
    {
    return MimicAuth.LogIn(user,pass,this.mimic, this.baseUrl);
    },
    forgetPass: function(user,email)
    {
      return MimicAuth.ForgetPass(user,email,this.mimic, this.baseUrl);
    },
    setCode: function(code,user)
    {
      return MimicAuth.forgetPass2(code,user,this.mimic, this.baseUrl);
    },
    setPass: function(pass , user , code)
    {
      return MimicAuth.forgetPass3(pass,user,code,this.mimic, this.baseUrl);
    },
    forgetUser: function(pass,email)
    {
      return MimicAuth.ForgetUser(pass,email,this.mimic, this.baseUrl);
    },
    forgetUser2: function(code)
    {
      return MimicAuth.ForgetUser2(code,this.mimic, this.baseUrl);
    },
    getPosts:function(apexComName,sortparam) {
      return MimicDisplayPosts.getPostsData(this.mimic,apexComName,sortparam, this.baseUrl);
    },
	getAbout:function(apexComName) {
    var about=MimicApexCom.getAbout(this.mimic,apexComName, this.baseUrl);
    return about;
  },
  getAboutGuest:function(apexComName) {
    // alert(apexComName+'all');
    var about=MimicApexCom.getAboutGuest(this.mimic,apexComName, this.baseUrl);
    return about;
	},
	getSubscribers:function(apexComName) {
    var SubscribersList=MimicApexCom.getSubscribers(this.mimic,apexComName, this.baseUrl);

    return SubscribersList;
	},
	getUserInfo:function() {
    var profileInfo=MimicUserProfile.getUserInfo(this.mimic, this.baseUrl);
      return profileInfo
	},
	getUserInfoById:function(userName) {
    var userInfo=MimicUserProfile.getUserInfoById(this.mimic,userName, this.baseUrl);
    return userInfo;
  },
  save:function(token,ID){

    return MimicPost.save(token,ID,this.mimic, this.baseUrl);
  },
Hide:function(name,ID){
return MimicPost.Hide(name,ID,this.mimic, this.baseUrl);
},
upvote:function(ID,points,upVoted,downState){

  var data= MimicPost.upvote(ID,points,upVoted,downState,this.mimic, this.baseUrl);

  return data;
},
downvote:function(ID,points,downVoted,upState){

var data= MimicPost.downvote(ID,points,downVoted,upState,this.mimic, this.baseUrl);

return data;
}
,
deletePost:function(postID,token){


  return MimicPost.deletePost(postID,token,this.mimic, this.baseUrl);
},

EditPost: function(ID,content){
  var data=MimicPost.EditPost(ID,content,this.mimic, this.baseUrl);
  return data;
},
isLocked:function(ID){
var data=MimicPost.isLocked(ID,this.mimic,this.baseUrl);
return data;
},
userType:function(){
  var data=MimicUserProfile.getUserType(this.mimic, this.baseUrl);
  return data;
},
blockSubscriber:function(userName,apexComName){
  var data=MimicApexCom.blockSubscriber(this.mimic,userName,apexComName, this.baseUrl);
  return data;
},
deleteUser:function(userName){
  var data=MimicUserProfile.deleteUser(this.mimic,userName, this.baseUrl);
  return data;
},
deleteApexCom:function(apexComName){
  var data=MimicApexCom.deleteApexCom(this.mimic,apexComName, this.baseUrl);
  return data;
},
subscribe:function(apexComName){
  var data=MimicApexCom.subscribe(this.mimic,apexComName, this.baseUrl);
  return data;
},
WriteComment: function(content,parentID){
  var data=MimicComment.WriteComment(content,parentID,this.mimic, this.baseUrl);
  console.log(data);
  return data;
},
DeleteComment: function(ID){
  var data=MimicComment.DeleteComment(ID,this.mimic, this.baseUrl);
  return data;
},
SaveComment: function(ID){
  var data=MimicComment.SaveComment(ID,this.mimic, this.baseUrl);
  return data;
},
UpVoteComment: function(ID,points,upVoted,downState){
  var data=MimicComment.UpVoteComment(ID,points,upVoted,downState,this.mimic, this.baseUrl);

  return data;
},
DownVoteComment: function(ID,points,downVoted,upState){
  var data=MimicComment.DownVoteComment(ID,points,downVoted,upState,this.mimic, this.baseUrl);
  return data;
},
EditComment: function(ID,content){
  var data=MimicComment.EditComment(ID,content,this.mimic, this.baseUrl);
  return data;
},
getComments: function(ID){
  var data=MimicComment.getComments(ID,this.mimic);
  return data;
},
reportComment: function(ID,reason){
  var data=MimicComment.reportComment(ID,reason,this.mimic);
  return data;
},
sendMessage: function(rec,title,cont){
  var data=MimicMessage.sendMessage(rec,title,cont,this.mimic, this.baseUrl);
  console.log(data.user);
  return data;
},
deleteMessage: function(ID){
  var data=MimicMessage.deleteMessage(ID,this.mimic, this.baseUrl);
  return data;
},
blockSender:function(ID){
  var data=MimicMessage.blockUser(ID,this.mimic, this.baseUrl);
  return data;
},
getAllMessages:function(){
  var data=MimicMessage.getAllMessages(this.mimic, this.baseUrl);
  // console.log(data);
  return data;
},
getUserInfoByIdforGuest:function(userName){
  var data=MimicUserProfile.getUserInfoByIdforGuest(this.mimic,userName, this.baseUrl);
    return data;
},
getReplies: function(ID){
  var data=MimicMessage.getReplies(ID,this.mimic, this.baseUrl);
  return data;
},
blockUser:function(userName){
  var data=MimicUserProfile.blockUser(this.mimic,userName, this.baseUrl);
  return data;
},
addOrDeleteModerator:function(userName,apexComName){
  var data=MimicApexCom.addOrDeleteModerator(this.mimic,userName,apexComName, this.baseUrl);
  return data;
},
reviewReportsAC:function(apexComName){
  var data=MimicApexCom.reviewReports(this.mimic,apexComName, this.baseUrl);
  return data;
},
reviewReportsUP:function(userName){
  var data=MimicUserProfile.reviewReports(this.mimic,userName, this.baseUrl);
  return data;
},
ignoreReport:function(user,id){
  var data=MimicApexCom.ignoreReport(this.mimic,user,id, this.baseUrl);
  return data;
},
CreateApexCom:function(Name,Description,Rules,Avatar,Banner) {
return MimicCreateApexCom.CreateApexCom(this.mimic,Name,Description,Rules,Avatar,Banner, this.baseUrl);
},
deleteAcc:function(Pass,id) {
  return MimicUserSettings.deleteAcc(this.mimic,Pass,id, this.baseUrl);
},
getPrefs:function(){
  return MimicUserSettings.getPrefs(this.mimic, this.baseUrl);
},
updatePrefs:function(fd) {
  return MimicUserSettings.updatePrefs(this.mimic,fd,this.baseUrl);
},
changePass:function (password,username,key){
    return MimicUserSettings.changePass(this.mimic,password,username,key, this.baseUrl);
},
searchU:function(query){
  var data=MimicApexCom.searchU(this.mimic,query, this.baseUrl);
  return data;
},
getBlockList:function(){
  var data=MimicUserProfile.getBlockList(this.mimic, this.baseUrl);
  return data;
}
  }
});

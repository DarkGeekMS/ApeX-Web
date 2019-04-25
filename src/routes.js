import ApexComPosts from './components/ApexComPosts.vue'
import ApexComSubscribers from './components/ApexComSubscribers.vue'
import HomePage from './components/HomePage.vue'
import ApexCom from './components/ApexCom.vue'
import userprofile from './components/UserProfile.vue'
//import ApexComReports from './components/ApexComReports.vue'
import CreatePost from './components/CreatePost.vue'
import Reports from './components/Reports.vue'
import Search from './components/Search.vue'
import Users from './components/CommunitiesAndUsers.vue'
import MessageBar from './components/MessageBar.vue'
import ApexComModerator from './components/ApexComModerator.vue'
import ApexComAddModerator from './components/ApexComAddModerator.vue'
import UserSettings from './components/UserSettings.vue'
import ApexComDeleteModerator from './components/ApexComDeleteModerators.vue'
import CreateApexCom from './components/CreateApexCom.vue'
import SubmitPost from './components/SubmitPost.vue'
export default[
      {path:'/ApexCom/:apexComName',name:'ApexCom',props:true,component:ApexCom , children :
      [
        {path:'/' ,component:ApexComPosts},
        {path:'AddModerators',name:'AddModerators',component:ApexComModerator,props:true ,children :[
          {path:'search',name:'Moderators', component:ApexComAddModerator,props:true },
        ]},
        {path:'deletemoderator',name:'DeleteModerators',component:ApexComDeleteModerator},
        {path:'ApexPosts',name:'Posts',component:ApexComPosts},
        {path:'ApexSubscribers',name:'Subscribers',component:ApexComSubscribers,props:true},
        {path:'ApexReports',name:'Reports',component:Reports,props:true},

      ]
      },
    {path:'/',component:HomePage},
    {path:'/HomePage',name:'HomePage',component:HomePage},
    {path:'/Submit',name:'CreatePost',component:CreatePost},
    {path:'/Search', name:'Search' , component:Search, children :[
        {path:'users', component:Users } ]},
    {path:'/userprofile/:userName',name:'UserProfile',component:userprofile,props:true},
    {path:'/Messages' ,name:'Messages',component:MessageBar},
    {path:'/userprofile/:userName',name:'UserProfile',component:userprofile,props:true,children :[
      {path:'Report',name:'Report', component:Reports,props:true },]
  },

    {path:'/UserSettings',name:'UserSettings',component:UserSettings},
    {path:'/CreateApexCom',name:'CreateApexCom',component:CreateApexCom}
    {path:'/ShowCreatedPost',name:'SubmitPost',component:SubmitPost}
]

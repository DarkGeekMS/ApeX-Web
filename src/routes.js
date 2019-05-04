import ApexComPosts from './components/ApexComPosts.vue'
import ApexComSubscribers from './components/ApexComSubscribers.vue'
import HomePage from './components/HomePage.vue'
import ApexCom from './components/ApexCom.vue'
import userprofile from './components/UserProfile.vue'
import userprofileBlockList from './components/UserProfileBlockList.vue'
import Reports from './components/ApexComReports.vue'
import Search from './components/Search.vue'
import Users from './components/CommunitiesAndUsers.vue'
import MessageBar from './components/MessageBar.vue'
import ApexComModerator from './components/ApexComModerator.vue'
import ApexComAddModerator from './components/ApexComAddModerator.vue'
import UserSettings from './components/UserSettings.vue'
import CreateApexCom from './components/CreateApexCom.vue'
import SubmitPost from './components/SubmitPost.vue'
import Hot from './components/SortHot.vue'
import New from './components/SortNew.vue'
import Controversial from './components/SortControversial.vue'
import Hidden from './components/HiddenPosts.vue'
import UserPosts from './components/UserPosts.vue'
import Saved from './components/SavedPosts.vue';

export default[
      {path:'/ApexCom/:apexComId',name:'ApexCom',props:true,component:ApexCom , children :
      [
        {path:'ApexPosts',name:'Posts',component:ApexComPosts,props:true,children:[
        {path:'Hot',name:'HotApexCom',component:Hot,props:true},
        {path:'New',name:'NewApexCom',component:New,props:true},
        {path:'Controversial',name:'ControversialApexCom',component:Controversial,props:true},
        {path:'Top',name:'TopApexCom',component:Hot,props:true},
        {path:'Rising',name:'RisingApexCom',component:New,props:true}
        ]},
        {path:'ApexSubscribers',name:'Subscribers',component:ApexComSubscribers,props:true},
        {path:'ApexReports',name:'Reports',component:Reports},
        {path:'AddModerators',name:'AddModerators',component:ApexComModerator,props:true,
        children :[
          {path:'searchUser/:query',name:'Moderators', component:ApexComAddModerator,props:true },
        ]},
      ]},
    {path:'/',redirect:{ name: 'HotHomePage'}},
    {path:'/HomePage',name:'HomePage',component:HomePage,props:true,children:[
    {path:'Hot',name:'HotHomePage',component:Hot,props:true},
    {path:'New',name:'NewHomePage',component:New,props:true},
    {path:'Controversial',name:'ControversialHomePage',component:Controversial,props:true},
    {path:'Top',name:'TopHomePage',component:Hot,props:true},
    {path:'Rising',name:'RisingHomePage',component:New,props:true}
    ]},
    {path:'/Submit',name:'SubmitPost',component:SubmitPost},
    {path:'/Search', name:'Search' , component:Search, children :[
        {path:'users', component:Users } ]},
    {path:'/Messages' ,name:'Messages',component:MessageBar},
    {path:'/userprofile/:userName',name:'UserProfile',component:userprofile,props:true,children :[
      {path:'Hidden',name:'Hidden', component:Hidden,props:true },
      {path:'UserPosts',name:'UserPosts', component:UserPosts,props:true },
      {path:'Saved',name:'Saved', component:Saved,props:true },
      {path:'blockedlist',name:'blockLlist', component:userprofileBlockList,props:true }
    ]
  },

    {path:'/UserSettings/:user',name:'UserSettings',component:UserSettings,props:true},
    {path:'/CreateApexCom',name:'CreateApexCom',component:CreateApexCom},

]

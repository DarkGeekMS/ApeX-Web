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
import ApexComModerator from './components/ApexComModerator.vue'
import ApexComAddModerator from './components/ApexComAddModerator.vue'

export default[
      {path:'/ApexCom/:apexComName',name:'ApexCom',props:true,component:ApexCom , children :
      [
        {path:'/' ,component:ApexComPosts},
        {path:'ApexModerators',name:'Moderators',component:ApexComModerator,props:true ,children :[
          {path:'AddModerator',name:'AddModerators', component:ApexComAddModerator,props:true },
        ]},
        {path:'ApexPosts',name:'Posts',component:ApexComPosts},
        {path:'ApexSubscribers',name:'Subscribers',component:ApexComSubscribers,props:true},
        {path:'ApexReports',name:'Reports',component:Reports,props:true},
        
      ]
      },
    {path:'/',component:HomePage},
    {path:'/HomePage',name:'HomePage',component:HomePage},
    {path:'/Submit',name:'CreatePost',component:CreatePost},
    {path:'/Search', name:'Search' , component:Search, props:true, children :[
        {path:'users', component:Users },]},
    {path:'/userprofile/:userName',name:'UserProfile',component:userprofile,props:true}
]

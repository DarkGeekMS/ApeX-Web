import ApexComPosts from './components/ApexComPosts.vue'
import ApexComCubscribers from './components/ApexComSubscribers.vue'
import HomePage from './components/HomePage.vue'
import ApexCom from './components/ApexCom.vue'

import userprofile from './components/UserProfile.vue'
import Reports from './components/Reports.vue'
import Search from './components/Search.vue'
import Users from './components/Users.vue'
export default[
      {path:'/ApexCom/:ApexComName',name:'ApexCom',props:true,component:ApexCom , children :[
        {path:'/' ,component:ApexComPosts},
    {path:'ApexPosts',name:'Posts',component:ApexComPosts},
  {path:'ApexSubscribers',name:'Subscribers',component:ApexComCubscribers,props:true},
  {path:'ApexReports',name:'Reports',component:Reports,props:true}
  
]
},
    {path:'/',component:HomePage},
    {path:'/HomePage',component:HomePage},
    {path:'/search', name:'search' , component:Search, props:true, children :[
        {path:'users', component:Users },]},
    {path:'/userprofile/:userName',name:'UserProfile',component:userprofile,props:true}
]

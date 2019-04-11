    
import ApexComPosts from './components/ApexComPosts.vue'
import ApexComCubscribers from './components/ApexComSubscribers.vue'
import HomePage from './components/HomePage.vue'
import ApexCom from './components/ApexCom.vue'
import userprofile from './components/UserProfile.vue'
import ApexComReports from './components/ApexComReports.vue'

export default[
      {path:'/ApexCom',component:ApexCom , children :[

    {path:'ApexComName',component:ApexComPosts},
  {path:'subscribersList',component:ApexComCubscribers},
  {path:'reports',component:ApexComReports}
  
]
},
    {path:'/',component:HomePage},
    {path:'/HomePage',component:HomePage},
    {path:'/userprofile',component:userprofile}
]
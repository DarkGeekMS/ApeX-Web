import ApexComPosts from './components/Apex-com-posts.vue'
import ApexComCubscribers from './components/Apex-com-subscribers.vue'
import HomePage from './components/HomePage.vue'
import ApexCom from './components/Apex-com.vue'
export default[
      {path:'/ApexCom',component:ApexCom , children :[
    
    {path:'ApexComName',component:ApexComPosts},
  {path:'subscribersList/:ApexComName',component:ApexComCubscribers}
]
},
    {path:'/',component:HomePage},
    {path:'/HomePage',component:HomePage}
]

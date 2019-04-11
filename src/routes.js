import ApexComPosts from './components/ApexComPosts.vue'
import ApexComCubscribers from './components/ApexComSubscribers.vue'
import HomePage from './components/HomePage.vue'
import ApexCom from './components/ApexCom.vue'
import Search from './components/Search.vue'
import Users from './components/Users.vue'

export default[
{path:'/ApexCom',component:ApexCom , children :[
	{path:'ApexComName',component:ApexComPosts},
    {path:'subscribersList',component:ApexComCubscribers}
]
},
{path:'/',component:HomePage},
{path:'/HomePage',component:HomePage},
{path:'/search', name:'search' , component:Search, props:true, children :[
    {path:'users', component:Users },
]
},


]

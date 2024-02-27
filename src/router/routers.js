import {createWebHistory,createRouter} from "vue-router"
import Navbar from "../components/NavBar.vue"
import Login from "../components/users/LogIn.vue"
import Signup from "../components/users/SignUp.vue"
import Admin from "../components/Admin/AdminloginPage"
import Dashboard from "../components/DashboardPage.vue"
import Editprofile from "../components/profile/ProfilePage.vue"
import Userlist from "../components/Admin/UserList.vue"
import Admincreateuserpage from "../components/Admin/AdminCreateuserPage.vue"
import Notificationpage from "../components/Notification/NotificationPage.vue"

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:Navbar},
        {path:'/admin',component:Admin},
        {path:'/login',component:Login},
        {path:'/signup',component:Signup},
        {path:'/dashboard',component:Dashboard},
        {path:'/editprofile',component:Editprofile},
        {path:'/userlist',component:Userlist},
        {path:'/createuser',component:Admincreateuserpage},
        {path:'/notification',component:Notificationpage},
    ]
})

export default router
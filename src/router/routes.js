import HomePage from '@/pages/HomePage.vue'
import DetailPage from '@/pages/DetailPage.vue'
import MainLayout from '@/layout/MainLayout.vue'
import SecondLayout from '@/layout/SecondLayout.vue'

export const routes = [
    {
        path:'/',
        component: MainLayout,
        children:[
            {
                path:'/',
                component:HomePage
            }
        ]
    },
    {
        path:'/detail',
        component: SecondLayout,
        children:[
            {
                path:'/',
                component:DetailPage
            }
        ]
    }
]
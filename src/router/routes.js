export const routes = [
    {
        path:'/',
        component: () => import('@/layout/MainLayout.vue'),
        children:[
            {
                path:'/home',
                name:'homePage',
                component: import('@/pages/HomePage.vue')
            },
            {
                path:'/detail/:id',
                name:'detailPage',
                component: import('@/pages/DetailPage.vue')
            },
            {
                path:'/films',
                name:'filmsPage',
                component: import('@/pages/FilmsPage.vue')
            }
        ]
    }
]
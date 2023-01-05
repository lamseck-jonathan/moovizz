export const routes = [
    {
        path:'/',
        component: () => import('@/layout/MainLayout.vue'),
        children:[
            {
                path:'/',
                redirect:{name:'homePage'}
            },
            {
                path:'/home',
                name:'homePage',
                component: () => import('@/pages/HomePage.vue')
            },
            {
                path:'/detail/:id',
                name:'detailPage',
                component: () => import('@/pages/DetailPage.vue')
            },
            {
                path:'/films',
                name:'filmsPage',
                component: () => import('../pages/FilmsPage.vue')
            }
        ]
    },
    {
        path:'/search',
        component: () => import('@/layout/SecondLayout.vue'),
        children:[
            {
                path:'/search',
                name:'searchPage',
                component: () => import('@/pages/SearchPage.vue')
            }
        ]
    }
]
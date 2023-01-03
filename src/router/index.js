import {routes} from './routes'
import { createRouter,createWebHashHistory } from 'vue-router'

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
    linkActiveClass: 'text-white underline underline-offset-8',
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return window.scrollTo({ top: document.querySelector(to.hash).offsetTop, behavior: 'smooth' });
        }
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    }   
})
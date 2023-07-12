import IndexView from "../views/IndexView.vue";
import {createRouter, createWebHistory} from "vue-router";
import ErrorView from "@/views/ErrorView.vue";
import DefaultView from "@/layout/DefaultView.vue";
import AboutView from "@/views/AboutView.vue";
import PostView from "@/views/PostView.vue";

const routes = [
    // { path: '/', name:'HOME', component: IndexView },
    // { path: '/about', name:'ABOUT', component: AboutView },
    { path: '/post/:id', name:'POST', component: PostView },

    {
        path: '/',
        redirect: {name: 'HOME'}, // ou '/',
        component: DefaultView,
        children: [
            {path: '', name: 'HOME', component: IndexView},
            { path: '/about', name:'ABOUT', component: AboutView },
        ]
    },
    {path: '/:pathMatch(.*)*', name: 'NOTFOUND', component: ErrorView}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    options: {
        scrollBehavior(to, from, savedPosition) {
            return {top: 0}
        }
    }
});

export default router;


import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: '/users'
    },
    {
        path: '/users',
        name: 'UsersIndex',
        redirect: '/users/list',
        component: () => import('./views/users-index-page'),
        children: [
            {
                path: 'login',
                name: 'users-login',
                meta: { title: 'Users Login Page' },
                component: () => import('./components/users-login')
            },
            {
                path: 'list',
                name: 'users-list',
                meta: { title: 'Users List' },
                component: () => import('./components/users-list')
            },
            {
                path: ':user/details',
                name: 'users-details',
                meta: { title: 'User details' },
                component: () => import('./components/users-details')
            }
        ]
    }
];

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.title)) {
        document.title = to.meta.title;
        next();
    } else next();
});

export default router;
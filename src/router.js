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
                name: 'Login',
                meta: { title: 'Users Login Page' },
                component: () => import('./components/users-login')
            },
            {
                path: 'list',
                name: 'Register',
                meta: { title: 'Users List' },
                component: () => import('./components/users-list')
            },
            {
                path: ':user/details',
                name: 'Register',
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

export default router;
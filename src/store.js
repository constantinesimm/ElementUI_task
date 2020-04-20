import Vue from 'vue';
import Vuex from 'vuex';
import usersApi from './services/usersApi';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: '',
        usersList: [],
        singleUser: {}
    },
    mutations: {
        users_request(state) {
            state.status = 'loading';
        },
        usersList_success(state, users) {
            state.status = 'success';
            state.usersList = users;
        },
        singleUser_success(state, user) {
            let keys = Object.keys(user);
            let values = Object.values(user).map(value => !value ? 'n/a' : value);

            state.status = 'success';
            state.singleUser = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]));
        },
        users_error(state) {
            state.status = 'error';
        }
    },
    actions: {
        getUsers({commit}) {
            commit('users_request');

            usersApi
                .getUsersList()
                .then(users => commit('usersList_success', users))
                .catch(err => Vue.prototype.$eventHub.$emit('show-error', err));
        },
        getSingleUser({commit}, username) {
            commit('users_request');

            usersApi
                .getSingleUser(username)
                .then(user => commit('singleUser_success', user))
                .catch(err => Vue.prototype.$eventHub.$emit('show-error', err));
        }
    },
    getters: {
        getStatus: state => state.status,
        requestedUsersList: state => state.usersList,
        requestedSingleUser: state => state.singleUser
    }
});
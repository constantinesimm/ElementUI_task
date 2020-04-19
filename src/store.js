import Vue from 'vue';
import Vuex from 'vuex';
import Api from './services/Api';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: '',
        token: '',
        user: {}
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success';
            state.token = token;
            state.user = user;
        },
        auth_error(state) {
            state.status = 'error'
        }
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                Api({ url: '', data: user, method: 'POST' })
                    .then(response => {
                        const user = response.data.user;
                        const token = user.secret.token;
                        commit('auth_success', token, user);

                        resolve(response.data);
                    })
                    .catch(err => reject(err.response.data))
            })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        currentUser: state => !!state.user,
        authStatus: state => state.status
    }
});
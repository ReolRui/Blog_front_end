import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    token: window.sessionStorage.getItem('token'),
    nickname: ''
};
const mutations = {
    LOGIN: (state, data) => {
        //登入是要更改token的值
        state.token = data;
        window.sessionStorage.setItem('token', data);
    },
    LOGOUT: (state) => {
        //登出的时候要清除token
        state.token = null;
        window.sessionStorage.removeItem('token');
    },
    NICKNAME: (state, data) => {
        //把用户名存起来
        state.nickname = data;
        window.sessionStorage.setItem('nickname', data);
    }
};
const actions = {
    UserLogin({ commit }, data){
        commit('LOGIN', data);
    },
    UserLogout({ commit }, data){
        commit('LOGOUT');
    },
    Nickname({ commit }, data){
        commit('NICKNAME', data);
    }
};
export default new Vuex.Store({
    state,
    mutations,
    actions
});
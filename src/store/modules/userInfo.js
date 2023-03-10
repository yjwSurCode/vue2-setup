import {
    setCookie,
    clearUserInfoAndTokenCookie,
    clearUserInfoCookie,
    clearTokenCookie,
    getCookie,
} from '../../utils/cookie-utils';
import { hasV } from '../../utils/u';

export const USERINFO = 'userInfo';
export const TOKEN = 'token';

const userInfo = {
    state: {
        info: {},
        token: '',
    },

    mutations: {
        SET_USERINFO: (state, data) => {
            state.info = data;
        },
        SET_TOKEN: (state, data) => {
            state.token = data;
        },
    },

    actions: {
        initUserDataFromCookie({ commit, state }) {
            const info = getCookie(USERINFO);
            const token = getCookie(TOKEN);

            if (!hasV(info) || !hasV(token)) {
                commit('SET_USERINFO', {});
                commit('SET_TOKEN', '');
                clearUserInfoAndTokenCookie();
                return Promise.reject();
            } else {
                commit('SET_USERINFO', info);
                commit('SET_TOKEN', token);
            }

            return Promise.resolve(state);
        },
        initUserInfo({ commit, state }, data) {
            commit('SET_USERINFO', data);
            setCookie(USERINFO, data);
            return Promise.resolve(state);
        },
        initToken({ commit, state }, data) {
            commit('SET_TOKEN', data);
            setCookie(TOKEN, data);
            return Promise.resolve(state);
        },
        clearUserInfoAndToken({ commit, state }) {
            commit('SET_USERINFO', {});
            commit('SET_TOKEN', '');
            clearUserInfoAndTokenCookie();
            return Promise.resolve(state);
        },
        clearUserInfo({ commit, state }) {
            commit('SET_USERINFO', {});
            clearUserInfoCookie();
        },
        clearToken({ commit, state }) {
            commit('SET_TOKEN', '');
            clearTokenCookie();
        },
    },
};

export default userInfo;

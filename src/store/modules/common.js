import { clearMenuOpenCookie, getCookie, setCookie } from '../../utils/cookie-utils';
import { hasV } from '../../utils/u';

export const COLLAPSE = 'collapse';
export const ROUTES = 'routes';
export const MENU_SELECT = 'menuSelect';
export const MENU_OPEN = 'menuOpen';

const common = {
    state: {
        toggleActive: true,
        menuOpen: '', // 侧边栏打开的父亲元素
    },
    mutations: {
        SET_COLLA: (state, data) => {
            state.toggleActive = data;
        },
        SET_ROUTES: (state, data) => {
            state.routes = data;
        },
        SET_MENU_OPEN: (state, data) => {
            state.menuOpen = data;
        },
    },
    actions: {
        initRoutes: ({ commit, state }) => {
            if (hasV(state.routes)) {
                setCookie(ROUTES, state.routes);
            } else if (hasV(getCookie(ROUTES))) {
                state.routes = getCookie(ROUTES);
            } else {
                // 应该从后端拉取
            }
        },
        initMenuSider: ({ commit, state }) => {
            commit('SET_MENU_OPEN', getCookie(MENU_OPEN));
            return Promise.resolve(state);
        },
        toggle: ({ commit, state }) => {
            if (state.toggleActive) {
                commit('SET_COLLA', false);
            } else {
                commit('SET_COLLA', true);
            }
            return Promise.resolve(state);
        },
        clearMenuOpen: ({ commit, state }) => {
            commit('SET_MENU_OPEN', '');
            clearMenuOpenCookie();
            return Promise.resolve(state);
        },
        setMenuOpen: ({ commit, state }, data) => {
            commit('SET_MENU_OPEN', data);
            setCookie(MENU_OPEN, data);
            return Promise.resolve(state);
        },
    },
};

export default common;

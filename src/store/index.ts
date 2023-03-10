import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
// import user from "./modules/user";
// import permission from "./modules/permission";
// import userInfo from "./modules/userInfo";

Vue.use(Vuex);

export default new Vuex.Store({
  // 模块拆分
  modules: {
    app
    // user,
    // permission,
    // userInfo,
  },
  //数据
  state: {
    navbarSelect: '3',
    user: { name: '', roles: '' },
    permission: { addRouters: '', routers: '' },
    userInfo: { info: '', token: '' }
  },
  // 类似于computed(计算属性，对现有的状态进行计算得到新的数据-------派生 )
  getters: {
    name: (state) => state.user.name,
    roles: (state) => state.user.roles,
    addRouters: (state) => state.permission.addRouters,
    routers: (state) => state.permission.routers,
    // -------------------------------------------------------
    // userInfo
    userInfo: (state) => state.userInfo.info,
    token: (state) => state.userInfo.token
  },
  //里面定义方法，操作state方法
  mutations: {
    changeNavbar: (state, paylod) => {
      console.log(state, paylod, 'state,paylod');
      // 变更状态
      state.navbarSelect = paylod;
    }
  },
  // 操作异步操作mutation
  actions: {
    asyncChangeNavbar: (context, paylod) => {
      setTimeout(() => {
        context.commit('changeNavbar', paylod);
      }, 2000);
    }
  }
});

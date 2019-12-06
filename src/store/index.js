import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    themeName: "theme-green"
  },
  mutations: {
    setThemeName: (state, themeName) => {
      state.themeName = themeName;
    }
  },
  actions: {
    SET_THEME_NAME: ({ commit }, themeName) => {
      commit("setThemeName", themeName);
    }
  },
  modules: {},
  getters: {
    themeName: state => {
      return state.themeName;
    }
  }
});

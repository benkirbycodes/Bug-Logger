import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

//NOTE Check that this API is correct
const _api = axios.create({
  baseURL: "//localhost:3000/api/bugs",
  timeout: 5000
});

export default new Vuex.Store({
  state: {
    bugs: []
  },
  mutations: {
    setBugs(state, data) {
      state.bugs.push(data);
    }
  },
  actions: {
    async addbug({ commit, dispatch }, bug) {}
  },
  modules: {}
});

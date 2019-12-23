import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

//NOTE Check that this API is correct
const _api = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 5000
});

export default new Vuex.Store({
  state: {
    bugs: []
  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data;
    },
    addBug(state, data) {
      state.bugs.push(data);
    }
  },
  actions: {
    async getAllBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      console.log(res.data);
      commit("setBugs", res.data);
    },
    async addbug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug);
      console.log(res.data);
      commit("addBug", res.data);
    }
  },
  modules: {}
});

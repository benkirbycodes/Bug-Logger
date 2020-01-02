import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const _api = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 5000
});

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: [],
    activeNotes: []
  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data;
    },
    addBug(state, bug) {
      state.bugs.push(bug);
    },
    setActiveBug(state, bug) {
      state.activeBug = bug;
    },
    addNote(state, note) {
      state.notes.push(note);
      state.activeNotes.push(note);
    },
    setActiveNotes(state, data) {
      state.activeNotes = data;
    }
  },
  actions: {
    async getAllBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      commit("setBugs", res.data);
    },
    async getNotesByBugId({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id + "/notes");
      commit("setActiveNotes", res.data);
    },
    async addBug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug);
      commit("setActiveBug", res.data);
      commit("addBug", res.data);
      return res;
    },
    async setActiveBug({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    async addNote({ commit, dispatch }, note) {
      let res = await _api.post("notes", note);
      commit("addNote", res.data);
    },
    async editBug({ commit, dispatch }, bugArray) {
      let res = await _api.put("bugs/" + bugArray[1], bugArray[0]);
      commit("setActiveBug", res.data);
      dispatch("getAllBugs");
    },
    async deleteNote({ commit, dispatch }, idArray) {
      let res = await _api.delete("notes/" + idArray[0]);
      dispatch("getNotesByBugId", idArray[1]);
    },
    async closeBug({ commit, dispatch }, id) {
      let res = await _api.delete("bugs/" + id);
      dispatch("setActiveBug", id);
    }
  }
});

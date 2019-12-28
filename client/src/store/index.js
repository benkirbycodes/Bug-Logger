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
      //console.log(note);
      state.notes.push(note);
      state.activeNotes.push(note);
      //console.log(state.notes);
    },
    setActiveNotes(state, data) {
      //console.log(data);
      state.activeNotes = data;
    }
  },
  actions: {
    async getAllBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      console.log(res.data);
      commit("setBugs", res.data);
    },
    async getNotesByBugId({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id + "/notes");
      console.log(res.data);
      console.log(this.state.notes);
      commit("setActiveNotes", res.data);
    },
    async addBug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug);
      console.log(res.data);
      dispatch("setActiveBug", res.data.id);
      commit("addBug", res.data);
    },
    async setActiveBug({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id);
      console.log(res.data);
      commit("setActiveBug", res.data);
    },
    async addNote({ commit, dispatch }, note) {
      let res = await _api.post("notes", note);
      console.log(res.data);
      commit("addNote", res.data);
    },
    async deleteNote({ commit, dispatch }, idArray) {
      console.log(idArray);
      let res = await _api.delete("notes/" + idArray[0]);
      console.log(res.data);
      dispatch("getNotesByBugId", idArray[1]);
    },
    async closeBug({ commit, dispatch }, id) {
      let res = await _api.delete("bugs/" + id);
      console.log(res.data);
      dispatch("setActiveBug", id);
    }
  }
});

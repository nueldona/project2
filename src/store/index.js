import { createStore } from "vuex";
import ReportService from "../Service/ReportService";

export default createStore({
  state: {
    events: [],
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
    },
  },
  actions: {
    fetchEvents({ commit }) {
      ReportService.getEvents()
        .then((response) => {
          commit("SET_EVENTS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});

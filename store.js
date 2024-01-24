import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
    selectedGeneration: 1,
    generations: [
      { label: "Gen 1", value: 1, start: 1, end: 151 },
      { label: "Gen 2", value: 2, start: 152, end: 251 },
      { label: "Gen 3", value: 3, start: 252, end: 386 },
      { label: "Gen 4", value: 4, start: 387, end: 493 },
      { label: "Gen 5", value: 5, start: 494, end: 649 },
      { label: "Gen 6", value: 6, start: 650, end: 721 },
      { label: "Gen 7", value: 7, start: 722, end: 809 },
      { label: "Gen 8", value: 8, start: 810, end: 905 },
      { label: "Gen 9", value: 9, start: 906, end: 1025 },
      { label: "All", value: 10, start: 1, end: 1025 },
    ],
  },
  mutations: {
    setSelectedGeneration(state, generationValue) {
      state.selectedGeneration = generationValue;
    },
  },
});

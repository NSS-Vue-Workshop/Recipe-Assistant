import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ingredients: [],
    diets: [],
    mealType: null,
    searchResults: []
  },
  mutations: {
    addIngredient(state, payload) {
      state.ingredients = [...state.ingredients, payload];
    },
    removeIngredient(state, payload) {
      state.ingredients = state.ingredients.filter(i => {
        return i !== payload;
      });
    },
    setDiets(state, payload) {
      state.diets = payload;
    },
    setMealType(state, payload) {
      state.mealType = payload;
    },
    setSearchResults(state, payload) {
      state.searchResults = payload;
    }
  },
  actions: {},
  modules: {}
});

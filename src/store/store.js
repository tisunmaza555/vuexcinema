// store.js

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movie: []
    },

    mutations: {
        addmovie(state, { payload }) {
            state.movie.push(payload);
        },
    },

    actions: {
        addmovie({ commit }, payload) {
            commit("addmovie", { payload });
        },
    },

    getters: {
        movie: state => state.movie
    }
});
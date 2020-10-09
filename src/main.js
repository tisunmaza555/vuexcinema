import Vue from "vue";
import VueRouter from 'vue-router';

import App from "./App.vue";
import MovieList from "./components/MovieList.vue";
import CreateMovie from "./components/CreateMovie.vue";

Vue.use(VueRouter);

const routes = [{
        name: "MovieList",
        path: "/Movie_list",
        component: MovieList
    },
    {
        name: "CreateMovie",
        path: "/create_Movie",
        component: CreateMovie
    }
];

const router = new VueRouter({ mode: "history", routes: routes });

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount("#app");
import Vue from "vue";
import Router from "vue-router";
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";
import Home from "./components/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: Home,
        header: Header,
        footer: Footer
      }
    },
  ]
});

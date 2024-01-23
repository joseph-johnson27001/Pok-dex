import Vue from "vue";
import App from "./App.vue";
import store from "/store.js"; // Fix the import statement

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store, // Use the correct variable name
}).$mount("#app");

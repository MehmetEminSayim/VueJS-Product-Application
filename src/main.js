import Vue from 'vue'
import App from './App.vue'
import {router} from "./router";
import store from "./store"
import axios from "axios";

axios.defaults.baseURL ="https://vue-product-4676b-default-rtdb.firebaseio.com"

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

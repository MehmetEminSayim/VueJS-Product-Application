import Vue from 'vue'
import App from './App.vue'
import {router} from "./router";
import store from "./store"
import axios from "axios";
import VueResource from "vue-resource"
import Vuelidate from "vuelidate"

Vue.use(Vuelidate);

axios.defaults.baseURL ="https://vue-product-4676b-default-rtdb.firebaseio.com"

Vue.use(VueResource)

Vue.filter ("currency",(value) =>{
  return "₺" +  parseFloat(value).toLocaleString(undefined,{minimumFractionDigits : 2})

})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

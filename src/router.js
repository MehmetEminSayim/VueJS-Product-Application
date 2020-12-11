import Vue from "vue"
import VueRouter from "vue-router"
import Product from "./component/Product"
import ProductAdd from "./component/ProductAdd"
import ProductDetail from "./component/ProductDetail"
import ProductEdit from "./component/ProductEdit"
import Auth from "./component/Auth";
import store from "./store";

Vue.use(VueRouter)

export const router = new VueRouter({
  routes : [
    {
      path : "/",
      component:Product,
      beforeEnter(to, from, next) {
        if (store.getters.isAuthed) {
          next()
        } else {
          next("/auth")
        }
      }

    },
    {
      path : "/productadd",
      component:ProductAdd,
      beforeEnter(to, from, next) {
        if (store.getters.isAuthed) {
          next()
        } else {
          next("/auth")
        }
      }
    },
    {
      path : "/productdetail/:Pid",
      component:ProductDetail,
      name: 'detailpage',
      beforeEnter(to, from, next) {
        if (store.getters.isAuthed) {
          next()
        } else {
          next("/auth")
        }
      }
    },
    {
      path : "/productedit",
      component:ProductEdit,
      beforeEnter(to, from, next) {
        if (store.getters.isAuthed) {
          next()
        } else {
          next("/auth")
        }
      }
    },
    {path : "/auth", component:Auth },
    {path : "*", redirect : "/" },
  ],
  mode : "history"
})

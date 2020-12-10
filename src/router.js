import Vue from "vue"
import VueRouter from "vue-router"
import Product from "./component/Product"
import ProductAdd from "./component/ProductAdd"
import ProductDetail from "./component/ProductDetail"
import ProductEdit from "./component/ProductEdit"

Vue.use(VueRouter)

export const router = new VueRouter({
  routes : [
    {path : "/", component:Product },
    {path : "/productadd", component:ProductAdd },
    {path : "/productdetail", component:ProductDetail },
    {path : "/productedit", component:ProductEdit },
    {path : "*", redirect : "/" },
  ],
  mode : "history"
})

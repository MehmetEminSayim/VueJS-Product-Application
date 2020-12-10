import Vue from "vue"
import VueRouter from "vue-router"
import Product from "./component/Product"
import ProductAdd from "./component/ProductAdd"
import ProductDetail from "./component/ProductDetail"
import ProductEdit from "./component/ProductEdit"
import Auth from "./component/Auth";

Vue.use(VueRouter)

export const router = new VueRouter({
  routes : [
    {path : "/", component:Product },
    {path : "/productadd", component:ProductAdd },
    {path : "/productdetail/:Pid", component:ProductDetail , name: 'detailpage'},
    {path : "/productedit", component:ProductEdit },
    {path : "/auth", component:Auth },
    {path : "*", redirect : "/" },
  ],
  mode : "history"
})

import Vue from "vue"
import {router} from "./router"
import axios from "axios"
import Vuex from  "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    token : "",
    firebaseApi : "AIzaSyD_FEkGKKftm4bDlrmx1adYp-uPnO_5ZeQ"
  },
  mutations : {
      setToken(state,token){
        state.token = token
      },
      clearToken(state){
        state.token = ""
      }
  },
  actions : {
    initAuth(vuexContent){
      let token = localStorage.getItem("token")
      if (token){
        vuexContent.commit("setToken",token)
        router.push("/")
      }else{
        return false
        router.push("/auth")
      }

    },
    saveUser(vuexContent,authData){
      let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
      return axios.post(authLink + "AIzaSyD_FEkGKKftm4bDlrmx1adYp-uPnO_5ZeQ" ,
        {
          email : authData.userReg,
          password : authData.passReg
        }).then(response => {
          console.log(response)
        vuexContent.commit("setToken", response.data.idToken)
        localStorage.setItem("token" , response.data.idToken)
      })
    },
    loginUser(vuexContent, authData){
      let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
      return  axios.post(authLink + "AIzaSyD_FEkGKKftm4bDlrmx1adYp-uPnO_5ZeQ" , {
        email : authData.userLog,
        password : authData.userPass
      }).then(response => {
        vuexContent.commit("setToken" , response.data.idToken)
        localStorage.setItem("token", response.data.idToken)
      })
    },
    logout(vuexContent){
      vuexContent.commit("clearToken")
      localStorage.removeItem("token")
      router.replace("/auth")
    }
  },
  getters :{
      isAuthed (state){
        return state.token !== ""
      }
  }
})

export default store

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card" v-if="!areYouMember">
          <div class="card-header text-center">
            <h3><strong>Üye Ol</strong></h3>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label>E-Posta Adresi</label>
              <input type="email" v-model="$v.userRegister.userReg.$model" class="form-control" placeholder="Email giriniz..">
              <small class="form-text text-muted" v-if="!$v.userRegister.userReg.email">Girilen değer email adresi değil...</small>

            </div>
            <div class="form-group">
              <label>Parola</label>
              <input type="password" class="form-control" v-model="$v.userRegister.passReg.$model" placeholder="Parola giriniz...">
              <small class="form-text text-muted" v-if="!$v.userRegister.passReg.minLength">Lütfen parolayı en az 6 haneli giriniz.</small>

            </div>
            <div class="form-group">
              <label>Parola Tekrar</label>
              <input :class="{'is-invalid' : $v.userRegister.rePass.$error}" v-model="$v.userRegister.rePass.$model" type="password" class="form-control" placeholder="Şifrenizi tekrar giriniz">
              <small class="form-text text-muted" v-if="!$v.userRegister.rePass.sameAs">Lütfen paraloları aynı giriniz.</small><br>
              <small class="form-text text-muted" v-if="!$v.userRegister.rePass.minLength">Lütfen parolayı en az 6 haneli giriniz.</small>
            </div>
            <hr>
            <div class="row">
              <div class="col-md-6">
                <button @click="saveUser" class="btn btn-primary">Üye Ol</button>
              </div>
              <div class="col-md-6 text-right">
                <button @click="memberClick" class="btn btn-success">Üyeliğim Var</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" v-if="areYouMember">
          <div class="card-header text-center" >
            <h3>Giriş Yap</h3>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label>E-Posta Adresi</label>
              <input type="email" class="form-control" v-model="userLogin.userLog" placeholder="Email giriniz..">
            </div>
            <div class="form-group">
              <label>Parola</label>
              <input type="password" class="form-control" v-model="userLogin.userPass" placeholder="Parola giriniz...">
            </div>
            <hr>
            <div class="row">
              <div class="col-md-6">
                <button @click="loginUser" class="btn btn-primary">Giriş Yap</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 content-center"></div>
    </div>
  </div>
</template>

<script>
import {required,sameAs,minLength, email } from "vuelidate/lib/validators"

export default {
  data(){
    return {
      userRegister : {
        userReg: "",
        passReg : "",
        rePass : ""
      },
      userLogin : {
        userLog : "",
        userPass : ""
      },
      areYouMember : false
    }
  },
  methods : {
    saveUser(){
      this.$store.dispatch("saveUser" ,{...this.userRegister})
      .then(response => {
        this.$router.push("/")
      })
    },
    loginUser(){
    this.$store.dispatch("loginUser" , {...this.userLogin})
      .then(response => {
        this.$router.push("/")
      })
    },
    memberClick(){
      this.areYouMember = true;
    }
  },
  validations : {
    userRegister : {
      userReg: {
        required,
        email,
      },
      passReg: {
        required,
        minLength: minLength(6),
      },
      rePass: {
        required,
        minLength : minLength(6),
        sameAs : sameAs("passReg")
      }
    },
  }
}
</script>

<style scoped>

.card{
  padding: 20px;
  border: 1px solid lightblue;
  border-radius: 5px;
  background-color: #ffffff;
}
small{
  color: red;
}
</style>

<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Logo</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <router-link tag="li" active-class="active" to="/" exact>
            <a>Anasayfa - Ürünler</a></li>
          </router-link>
          <router-link tag="li" active-class="active" to="/productadd" exact>
            <a>Ürün Ekle</a></li>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right" :class="logoutClass"  >
          <li>
            <a href="" @click.prevent="logout">Çıkış Yap</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
 export default {
   data(){
     return {

     }
   },
   methods : {
     logout(){
       this.$store.dispatch("logout")
     }
   },
   computed: {
     logoutClass() {
       return {
         'hidden': !this.$store.getters.isAuthed
       }
     }
   },
 }
</script>

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
            <a>Anasayfa</a></li>
          </router-link>
          <router-link tag="li" active-class="active" to="/productadd" exact>
            <a>Ürün Ekle</a></li>
          </router-link>
          <router-link tag="li" active-class="active" to="/productedit" exact>
            <a>Ürün Güncelle</a></li>
          </router-link>
          <router-link tag="li" active-class="active" to="/productdetail" exact>
            <a>Ürün Detay</a></li>
          </router-link>

        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Your Account</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
 export default {

 }
</script>

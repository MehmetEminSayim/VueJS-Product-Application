<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Üye Ol</h3>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label>E-Posta Adresi</label>
              <input type="email" class="form-control" placeholder="Email giriniz..">
            </div>
            <div class="form-group">
              <label>Parola</label>
              <input type="password" class="form-control"  placeholder="Parola giriniz...">
            </div>
            <div class="form-group">
              <label>Parola Tekrar</label>
              <input type="password" class="form-control"  placeholder="Parola tekrar...">
            </div>
            <hr>
            <button @click="saveProduct" class="btn btn-primary">Üye Ol</button>
          </div>
        </div>
      </div>
      <div class="col-md-6 content-center">
        <div class="card">
          <div class="card-header">
            <h3>Giriş Yap</h3>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label>E-Posta Adresi</label>
              <input type="email" class="form-control" placeholder="Email giriniz..">
            </div>
            <div class="form-group">
              <label>Parola</label>
              <input type="password" class="form-control"  placeholder="Parola giriniz...">
            </div>
            <hr>
            <button @click="saveProduct" class="btn btn-primary">Giriş Yap</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>

.card{
  padding: 20px;
  border: 1px solid lightblue;
  border-radius: 5px;
  background-color: #ffffff;
}
</style>

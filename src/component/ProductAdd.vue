<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h3>Ürün Bilgileri</h3>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label>Ürün Adı</label>
              <input type="text" v-model="product.title" class="form-control" placeholder="Ürün adını giriniz..">
            </div>
            <div class="form-group">
              <label>Adet</label>
              <input type="number" class="form-control" v-model="product.piece" placeholder="Ürün adetini giriniz..">
            </div>
            <div class="form-group">
              <label>Görsel Ur</label>
              <input type="text"class="form-control" v-model="product.imageUrl" placeholder="Ürün Görsel Url..">
            </div>
            <div class="form-group">
              <label>Fiyat</label>
              <input type="number"class="form-control" v-model="product.price" placeholder="Ürün fiyatı giriniz..">
            </div>
            <div class="form-group">
              <label>Açıklama</label>
              <textarea cols="30" rows="5" v-model="product.description" placeholder="Ürüne ait bir açıklama giriniz..."
                        class="form-control"></textarea>
            </div>
            <hr>
            <button @click="saveProduct" class="btn btn-primary">Kaydet</button>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    data(){
      return {
        product : {
          title :"",
          piece : "",
          imageUrl : "",
          price : "",
          description :""
        }
      }
    },
    methods : {
      saveProduct(){
        axios.post("/product.json",{ ...this.product })
        .then(response => {
          alert("Kayıt Eklendi")
          this.$router.replace("/")
          this.product = ""
        }).catch(error => {
          alert(error)
        })
      }
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
</style>

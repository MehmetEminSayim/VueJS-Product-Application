
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header text-center">
            <h3>{{product[0].title}} Ürününü Düzenliyorsunuz</h3>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label>Ürün Adı</label>
              <input type="text" v-model="product[0].title" class="form-control" placeholder="Ürün adını giriniz..">
            </div>
            <div class="form-group">
              <label>Adet</label>
              <input type="number" class="form-control" v-model="product[0].piece" placeholder="Ürün adetini giriniz..">
            </div>
            <div class="form-group">
              <label>Görsel Ur</label>
              <input type="text"class="form-control" v-model="product[0].imageUrl" placeholder="Ürün Görsel Url..">
            </div>
            <div class="form-group">
              <label>Fiyat</label>
              <input type="number"class="form-control" v-model="product[0].price" placeholder="Ürün fiyatı giriniz..">
            </div>
            <div class="form-group">
              <label>Açıklama</label>
              <textarea cols="30" rows="5" v-model="product[0].description" placeholder="Ürüne ait bir açıklama giriniz..."
                        class="form-control"></textarea>
            </div>
            <hr>
            <button @click="editProduct" class="btn btn-primary">Güncelle</button>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import resource from "vue-resource"
  export default {
    data(){
      return {
        product : []
      }
    },
    methods : {
      editProduct(){
        axios.patch("/product/"+this.$route.params.Pid+".json",
          {
            title : this.product[0].title,
            piece : this.product[0].piece,
            imageUrl : this.product[0].imageUrl,
            price : this.product[0].price,
            description : this.product[0].description
          }).then(response => {
            alert("Ürün Güncellendi");
          this.$router.replace("/")
        }).catch(error => {
          alert(error)
        })
      }
    },
    created() {
      axios.get("/product.json")
      .then(response => {
        let data = response.data
        for (let key in data){
          if (key == this.$route.params.Pid){
            this.product.push(data[key])
          }
        }
      })
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


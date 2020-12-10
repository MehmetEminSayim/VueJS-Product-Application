<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4" v-for="item in product">
        <div class="panel panel-primary">
          <div class="panel-heading"> <h4> <strong>{{item.title}}</strong></h4></div>
          <div class="panel-body"><img :src="item.imageUrl" class="img-responsive" style="width:100%; height: 200px" :alt="item.description"></div>

          <div class="row">
            <div class="col-md-7">
              <div class="panel-footer">{{item.description}}</div>
            </div>
            <div class="col-md-5  text-right ml-2">
              <button @click="detailPage(item.id)" class="btn btn-danger marginClass">Ürüne Düzenle</button>
            </div>
          </div>
          <h3 class="text-right">{{item.price | currency}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

  export default {
    data(){
      return {
        product : []
      }
    },
    methods : {
      detailPage(proId){
        this.$router.push({name : 'detailpage' , params : {Pid : proId}})
      }
    },
    created() {
      axios.get("/product.json")
      .then(response => {
        let data = response.data
        for (let key in data){
          this.product.push({...data[key] , id : key})
        }

      }).catch(error => {
        console.log(error)
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

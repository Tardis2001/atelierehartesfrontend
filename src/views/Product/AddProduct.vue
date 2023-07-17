<template>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h4 class="pt-3">Add new Product</h4>
        </div>
      </div>
  
      <div class="row" >
        <div class="col-3"></div>
        <div class="col-md-6 px-5 px-md-0">
          <form>
    
            <div class="form-group">
              <label>Nome</label>
              <input type="text" class="form-control" v-model="name" required>
            </div>
            <div class="form-group">
              <label>Descrição</label>
              <input type="text" class="form-control" v-model="description" required>
            </div>
            <div class="form-group">
              <label>ImageURL</label>
              <input type="url" class="form-control" v-model="imageURL" required>
            </div>
            <div class="form-group">
              <label>Preço</label>
              <input type="number" class="form-control" v-model="price" required>
            </div>
            <button type="button" class="btn btn-primary" @click="addProduct">Submit</button>
          </form>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </template>
  
  <script>
  
import axios from 'axios';
  export default {
    data(){
      return {
        id : null,
        name : null,
        description : null,
        imageURL : null,
        price : null
      }
    },
    props : ["baseURL", "products","token"],
    methods : {
      async addProduct() {
        const newProduct = {
          id : this.id,
          name : this.name,
          description : this.description,
          imageURL : this.imageURL,
          price : this.price
        }

        await axios({
          method: 'post',
          url: this.baseURL+"product/create"+"?token="+this.token,
          data : JSON.stringify(newProduct),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          //sending the event to parent to handle
          this.$emit("fetchData");
          this.$router.push({name : 'AdminProduct'});
          swal({
            text: "Produto adicionado com sucesso!!",
            icon: "success",
            closeOnClickOutside: true,
          });
        })
        .catch(err => console.log(err));
      }
    },
    mounted() {
      
    this.token = localStorage.getItem('token');
      if (!localStorage.getItem('token')) {
        this.$router.push({name : 'Signin'});
      }
    }
  }
  </script>
  
  <style scoped>
  h4 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
  }
  
  </style>
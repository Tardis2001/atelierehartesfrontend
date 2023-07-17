<template>
    <div id="home">
      <!-- Page Wrapper -->
      <div class="page-holder bg-cover">
  
        <div class="container py-2">
          <header class="text-left text-white py-5">
            <h3 class="mb-2 rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p id="content" class="lead mb-0 bg-dark p-1 rounded">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dicta repudiandae qui veniam cumque modi unde sed asperiores! 
                Dignissimos ipsam laborum quibusdam cumque possimus optio tempore cupiditate saepe. Asperiores, totam.
            </p>
          </header>
        </div>
      </div>
  
      <div id="start-shopping" class="container">
        <div class="container">
          <div class="row">
            <div class="col-12 text-left">
              <h2 class="pt-2">Top Produtos</h2>
            </div>
          </div>
          <div class="row">
            <div v-for="index in this.product_size" :key="index" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
              <ProductBox :product="products[index-1]">
              </ProductBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import ProductBox from "../components/Product/ProductBox";
    export default {
      name: 'Home',
      components : { ProductBox},
      props : ["baseURL", "products"],
      data(){
        return{
          product_size:0
        }
      },
      mounted(){
        this.product_size = this.products.length;
        this.product_size = Math.min(8, this.product_size);
      }
    }
  </script>
  
  <style>
    .page-holder {
      min-height: 40vh;
    }
  
    .bg-cover {
      background-size: cover !important;
    }
  
    #background-div {
      background: url(../assets/home.png)
    }
  
    #heading {
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      opacity: 0.8;
      font-family: 'Josefin Sans', sans-serif;
    }
  
    #content {
      opacity: 0.8;
    }
  
    h2 {
      font-family: 'Josefin Sans', sans-serif;
    }
  </style>
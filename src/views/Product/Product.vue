<template>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h4 class="pt-3">Produtos a venda</h4>
          <router-link id="add-product" :to="{name : 'AddProduct'}" v-show="$route.name=='AdminProduct'">
            <button class="btn">Adicionar um novo produto</button>
          </router-link>
        </div>
      </div>
      <div class="row">
            <div v-for="product in displayedproducts" :key="product.id" style="white-space: pre-line;" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
              <ProductBox :product="product">
            </ProductBox>
            </div>
      </div>
      <div class="row d-flex justify-content-center py-4 my-4">
        <nav>
                <ul class="pagination justify-content-center">
                    <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                        <a class="page-link" href="#" @click.prevent="previousPage">Anterior</a>
                    </li>
                    <li class="page-item" :class="{ 'active': page === currentPage }" v-for="page in total" :key="page">
                        <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
                    </li>
                    <li class="page-item" :class="{ 'disabled': currentPage === limit }">
                        <a class="page-link" href="#" @click.prevent="nextPage">Próxima</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    
  </template>
  
  <script>
  import ProductBox from '../../components/Product/ProductBox';
  export default {
    name: 'Product',
    components : {ProductBox},
    data(){
      return{
        
          offset : 0,
          limit : 3,
          total : 0,
          currentPage: 1,
          pageNumber : 0
      }
    },
    props : [ "baseURL" , "products" ],
    mounted(){
      
      this.fetchproducts();
      if (this.$route.name=='AdminProduct' && !localStorage.getItem('token')) {
        this.$router.push({name : 'Signin'});
      }
    },
    methods:{
      fetchproducts(){
              axios.get(this.baseURL+"/product/paginado?offset="+this.offset+"&pageNumber="+this.pageNumber+"&pageSize="+this.limit)
              .then(res => this.posts = res.data)
              .catch(err => console.log(err))
            
          },
          nextPage() {
              if (this.currentPage < this.totalPages) {
                  this.currentPage++;
              }
          },
          previousPage() {
              if (this.currentPage > 1) {
                  this.currentPage--;
              }
          },
          goToPage(){
              this.currentpage = page;
          }
    },computed:{

        totalPages() {
            return Math.ceil(this.products.length / this.limit);
        },
        displayedproducts() {
            const start = (this.currentPage - 1) * this.limit;
            const end = start + this.limit;
            return this.products.slice(start, end);
        },
    }
}

  </script>
  
  <style scoped>
  h4 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
  }
  
  #add-product {
    float: right;
    font-weight: 500;
  }
  </style>
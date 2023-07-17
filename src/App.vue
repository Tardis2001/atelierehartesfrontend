<template>
  <div>
    <Navbar
      :cartCount="cartCount"
      @resetCartCount="resetCartCount"
      v-if="!['Signup', 'Signin'].includes($route.name)"
    />
    <div style="min-height: 60vh">
      <router-view
        v-if="products"
        :baseURL="baseURL"
        :products="products"
        :user="user"
        @fetchData="fetchData"
      />
    </div>
    <Footer v-if="!['Signup', 'Signin'].includes($route.name)" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import axios from 'axios'
export default {
  data() {
    return {
      // baseURL: "https://atelierehartesbackend-production.up.railway.app/",
      baseURL:"http://localhost:3000/",
      products: null,
      user:null,
      key: 0,
      token: null,
      cartCount: 0,
    };
  },

  components: { Footer, Navbar },
  methods: {
    async fetchData() {
      // fetch products
      
      await axios.get(this.baseURL + 'product/')
        .then((res) => (this.products = res.data))
        .catch((err) => console.log(err));

      //fetch cart items
      if (this.token) {
        await axios.get(`${this.baseURL}cart/?token=${this.token}`).then(
          (response) => {
            if (response.status == 200) {
              // update cart
              this.cartCount = Object.keys(response.data.cartItems).length;
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },
    resetCartCount() {
      this.cartCount = 0;
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
    if(localStorage.getItem('token')){
      axios.get(this.baseURL + '/user/?token='+localStorage.getItem('token')).then((response)=>{
        if (response.status == 200) {
          this.user = response.data;
        }
      },(error) => {
        console.log(error);
      }
      );
    }
    this.fetchData();
  },
};
</script>

<style>
html {
  overflow-y: scroll;
}
</style>
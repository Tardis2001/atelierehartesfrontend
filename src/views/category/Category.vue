<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Nosso catalogo</h3>
            </div>
        </div>
        <router-link :to="{ name: 'AddCategory' }">
          <button class="btn" style="float:right">Add Category</button>
        </router-link>
    
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
      >
        <CategoryBox :category="category"> </CategoryBox>
      </div>
    </div>

    </div>
</template>
<script>
const axios = require("axios")
import CategoryBox from '@/components/CategoryBox.vue';
export default{
    name: "Category",
    components: { CategoryBox },
    data(){
        return{
            categories: [],
        };
    },
    methods: {
        async getCategories(){
            await axios.get(`http://localhost:8081/category/`)
            .then(res=> this.categories = res.data)
            .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getCategories();   
    }
}
</script>
<style scoped>
</style>
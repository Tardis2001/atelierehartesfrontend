<template>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h3>Add Category</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <form>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" v-model="categoryName">
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <input type="text" class="form-control" v-model="categoryDescription">
                        </div>
                        <div class="form-group">
                            <label>Image URL</label>
                            <input type="text" class="form-control" v-model="imageurl">
                        </div>
                        <button type="submit" @click="addCategory" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
</template>
<script src="">
const axios = require("axios");
const sweetalert = require("sweetalert");
export default {
  data() {
    return {
      categoryName: "",
      categoryDescription: "",
      imageurl: "",
    };
  },
  methods: {
    addCategory() {
      console.log(this.categoryName, this.categoryDescription,this.imageurl);
      const newCategory = {
        categoryName: this.categoryName,
        categoryDescription: this.categoryDescription,
        imageurl: this.imageurl,
      };

      const baseURL = "http://localhost:8081";

      axios({
        method: "post",
        url: `${baseURL}/category/create`,
        data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          sweetalert({
            text: "Category added successfully",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
    
</style>
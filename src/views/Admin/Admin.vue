<template>
    <div class="adminPanel container" v-if="token">
        <router-link :to="{name : 'AdminProduct'}">
          <button type="button" class="btn btn-primary btn-lg">Admin Products</button>
        </router-link>
        <router-link :to="{name : 'Gallery'}">
          <button type="button" class="btn btn-primary btn-lg">Admin Gallery</button>
        </router-link>
        <router-link :to="{name : 'AdminBlog'}">
          <button type="button" class="btn btn-primary btn-lg">Admin Blog</button>
        </router-link>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        token : null
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
  
  <style>
  .adminPanel{
    display : flex;
    flex-direction: column;
    align-items: center;
  }
  .adminPanel button{
    font-size: 30px;
    width: fit-content;
    margin: 55px 0;
  }
  </style>
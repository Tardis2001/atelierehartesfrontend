import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import addcategory from '../views/category/addcategory.vue'
import Category from "../views/category/Category.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView
  },
  {
    path: '/admin/category/add',
    name : 'AddCategory',
    component : addcategory
  },
  {
    path: '/admin/category/',
    name : 'Category',
    component : Category
  }
]

const router = new VueRouter({
  routes
})

export default router

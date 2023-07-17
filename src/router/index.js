
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Admin from '../views/Admin/Admin.vue'
import Gallery from '../views/Admin/Gallery.vue'
import AddImage from '../views/Admin/AddImage.vue'

import PageNotFound from '../views/PageNotFound.vue'

import Product from '../views/Product/Product.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import ShowDetails from '../views/Product/ShowDetails.vue'

import Wishlist from '../views/Product/Wishlist.vue'
import Cart from '../views/Cart/Cart.vue'
import Checkout from '../views/Checkout/Checkout.vue'
import Order from '../views/Orders/Order.vue'

import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'

import Success from '../helper/payment/Success.vue'
import Failed from '../helper/payment/Failed.vue'

import OrderDetails from "../views/Orders/OrderDetails";

import Blog from '../views/Blog/Blog.vue'
import PostDetails from '../views/Blog/PostDetails.vue'
import AddPost from '../views/Blog/AddPost.vue'
import adminBlog from '../views/Blog/adminBlog.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //Admin routes
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path : '/admin/gallery',
    name : 'Gallery',
    component : Gallery
  },
  {
    path : '/admin/gallery/add',
    name : 'AddImage',
    component : AddImage
  },
  //Product routes
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct,
  },
  {
    path : '/product/show/:id',
    name : 'ShowDetails',
    component: ShowDetails
  },
  //Page Not found
  {
    path : '/:notFound',
    name : 'PageNotFound',
    component : PageNotFound
  },
  //Signin and Signup
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path : '/cart',
    name : 'Cart',
    component : Cart
  },
  {
    path : '/checkout',
    name : 'Checkout',
    component : Checkout
  },
  {
    path : '/order',
    name : 'Order',
    component : Order
  },
  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component:Success
  },
  {
    path: '/payment/failed',
    name: 'FailedPayment',
    component:Failed
  },
  {
    path:'/order/:id',
    name:'OrderDetails',
    component: OrderDetails
  },
  {
    path:'/blog',
    name:'Blog',
    component:Blog
  },
  {
    path:'/blog/:id',
    name:'Post',
    component:PostDetails
  },{
    path:'/admin/blog',
    name:'AdminBlog',
    component:adminBlog
  }
  ,
  {
    path : '/admin/blog/AddPost',
    name : 'AddPost',
    component:AddPost
  }
]


const router = new VueRouter({
  routes
})

export default router
